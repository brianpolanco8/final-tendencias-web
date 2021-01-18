import { configureStore, createStore } from "@reduxjs/toolkit";
import { mount, shallow } from "enzyme";
import { Articles, Cart, Home, SignIn, SignUp } from "pages";
import { Provider, useDispatch, useSelector } from "react-redux";
import ReduxProvider from "tests/GetMockProvider";
import { createSlice } from "@reduxjs/toolkit";

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
