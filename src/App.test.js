import { shallow } from "enzyme";
import { Home } from "pages";
// import App from './App';

test("renders Home", () => {
  const wrapper = shallow(<Home />);

  expect(wrapper).not.toBe(null);
});
