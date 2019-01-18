import { shallow } from "enzyme";
import React from "react";
import UserInfo from '../UserInfo';
import { USER } from "../../../mocks/mocks";

describe("UserInfo", () => {
  const userInfoWrapper = shallow(<UserInfo user={USER} />);

  it("should render without errors the login component", () => {
    expect(userInfoWrapper).toBeTruthy();
  });
});
