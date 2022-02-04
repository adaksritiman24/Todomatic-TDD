import { shallow } from "enzyme";
import TaskFilter from "./TaskFilter";

describe('Filters must exist on screen', () => {
  it("Should have All filter button", ()=>{
    const wrapper = shallow(<TaskFilter/>);
    expect(wrapper.find('#all-btn').text()).toBeDefined();
  });
  it("Should have Completed button", ()=>{
    const wrapper = shallow(<TaskFilter/>);
    expect(wrapper.find('#complete-btn').text()).toBeDefined();
  });
  it("Should have Uncompleted filter button", ()=>{
    const wrapper = shallow(<TaskFilter/>);
    expect(wrapper.find('#incomplete-btn').text()).toBeDefined();
  });
});
