import * as reducers from "../user.reducer";


const mockStore = { user: { userDataRes: {}, userReposRes: {} } }

describe("user.reducer", () => {
  it("should return the settingsRes object when getSettingsRes method is called", () => {
    expect(reducers.getUserDataRes(mockStore)).toBeTruthy();
  });
  it("should return the settingsRes object when getIncidentOwnerRes method is called", () => {
    expect(reducers.getUserReposRes(mockStore)).toBeTruthy();
  });
});
