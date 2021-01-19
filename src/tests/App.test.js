import { configureStore } from "@reduxjs/toolkit";
import { shallow } from "enzyme";
import { Articles, Cart, Home, SignIn, SignUp } from "pages";
import ReduxProvider from "tests/GetMockProvider";
import { createSlice } from "@reduxjs/toolkit";
import { FeaturedStore, MainFeaturedStore } from "components";

let store;
let reducer;

describe("Should render all pages", () => {
  beforeAll(() => {
    reducer = createSlice({ name: "app", initialState: { data: {} } });
    store = configureStore({ reducer });
  });

  test("Should render home page", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).not.toBe(null);
  });

  test("Should render SignIn page", () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <SignIn />
      </ReduxProvider>
    );
    expect(wrapper).not.toBe(null);
  });

  test("Should render SignUp page", () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <SignUp />
      </ReduxProvider>
    );
    expect(wrapper).not.toBe(null);
  });

  test("Should render Articles page", () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <Articles />
      </ReduxProvider>
    );
    expect(wrapper).not.toBe(null);
  });

  test("Should render Cart page", () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <Cart />
      </ReduxProvider>
    );
    expect(wrapper).not.toBe(null);
  });
});

describe("Should render all components", () => {
  beforeAll(() => {
    reducer = createSlice({ name: "app", initialState: { data: {} } });
    store = configureStore({ reducer });
  });
  test("Should render Feature Items", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <FeaturedStore />
      </ReduxProvider>
    );
    expect(wrapper).not.toBe(null);
  });
  test("Should render main Feature items", () => {
    const wrapper = shallow(
      <ReduxProvider reduxStore={store}>
        <MainFeaturedStore />
      </ReduxProvider>
    );
    expect(wrapper).not.toBe(null);
  });
});
