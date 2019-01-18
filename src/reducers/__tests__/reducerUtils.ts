import {
  createReducer,
  createResource,
  errorReducer,
  expirationReducer,
  isFetchingReducer,
  payloadReducer
} from "../reducerUtils";

export const c = {
  TEST: "TEST",
  TEST_REQUEST: "TEST_REQUEST",
  TEST_SUCCESS: "TEST_SUCCESS",
  TEST_FAILURE: "TEST_FAILURE"
};

const requestAction = { type: c.TEST_REQUEST };
const requestErrorAction = {
  type: c.TEST_REQUEST,
  error: "error",
  payload: { name: "error", message: "Faild to fetch" }
};
const successAction = { type: c.TEST_SUCCESS, payload: {} };
const failureAction = {
  type: c.TEST_FAILURE,
  payload: { error: "error" }
};

describe("createReducer", () => {
  const handlers = { [c.TEST_REQUEST]: () => true };
  it("should return a reducer", () => {
    expect(createReducer(false, handlers)).toBeInstanceOf(Function);
  });
});

describe("isFetchingReducer", () => {
  const fetchingReducer = isFetchingReducer(c.TEST);
  it("should be true when called with a REQUEST action type", () => {
    expect(fetchingReducer(false, requestAction)).toBe(true);
  });
  it("should be false when called with a REQUEST action type that has an error", () => {
    expect(fetchingReducer(true, requestErrorAction)).toBe(false);
  });
  it("should be false when called with a SUCCESS action type", () => {
    expect(fetchingReducer(true, successAction)).toBe(false);
  });
  it("should be false when called with a FAILURE action type", () => {
    expect(fetchingReducer(true, failureAction)).toBe(false);
  });
});

describe("errorReducer", () => {
  const testErrorReducer = errorReducer(c.TEST);
  it("should be false when called with a REQUEST action type", () => {
    expect(testErrorReducer(false, requestAction)).toBe(null);
  });
  it("should be false when called with a REQUEST action type", () => {
    expect(testErrorReducer(false, requestErrorAction)).toEqual({
      response: { msg: "error Faild to fetch" }
    });
  });
  it("should be false when called with a SUCCESS action type", () => {
    expect(testErrorReducer(false, successAction)).toBe(null);
  });
  it("should be true when called with a FAILURE action type", () => {
    expect(testErrorReducer(false, failureAction)).toBeTruthy();
  });
});

describe("expirationReducer", () => {
  const testExpirationReducer = expirationReducer(c.TEST);
  it("should be 0 when called with a REQUEST action type", () => {
    expect(testExpirationReducer(0, requestAction)).toBe(0);
  });
  it("should be the current timestamp when called with a SUCCESS action type", () => {
    expect(testExpirationReducer(0, successAction)).toBeGreaterThan(0);
  });
  it("should be 0 when called with a FAILURE action type", () => {
    expect(testExpirationReducer(0, failureAction)).toBe(0);
  });
});

describe("payloadReducer", () => {
  const testPayloadReducer = payloadReducer(c.TEST);
  it("should be 0 when called with a REQUEST action type", () => {
    expect(testPayloadReducer(null, successAction)).toEqual({});
  });
});

describe("createResource", () => {
  const createResourceReducer = createResource(c.TEST, "payload", {
    newError: errorReducer(c.TEST)
  });
  it("should return an object", () => {
    expect(createResourceReducer({}, successAction)).toEqual({
      error: null,
      newError: null,
      isFetching: false,
      payload: {}
    });
  });
});
