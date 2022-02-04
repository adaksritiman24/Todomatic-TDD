import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {shallow} from "enzyme";
import Todo from './Todo';
describe("Todo Testing" , ()=>{
    it("should have todo class defined",()=>{
        const wrapper = shallow(<Todo completed={false}/>);
        expect(wrapper.find(".todo").text()).toBeDefined();
    })

    it("should have checkbox defined",()=>{
        const wrapper = shallow(<Todo completed={false}/>);
        expect(wrapper.find(".completed").text()).toBeDefined();
    })

    it("should have edit button", ()=>{
        const wrapper = shallow(<Todo completed={false}/>);
        expect(wrapper.find(".edit").text()).toBeDefined();
    })

    it("should have edit button", ()=>{
        const wrapper = shallow(<Todo completed={false}/>);
        expect(wrapper.find(".delete").text()).toBeDefined();
    })

    it("should have checkbox unchecked if completed is false", ()=>{
        const {getByTestId} = render(<Todo completed={false}/>);
        expect(getByTestId('c-box')).not.toBeChecked();
    })
    it("should have checkbox unchecked if completed is true", ()=>{
        const {getByTestId} = render(<Todo completed={true}/>);
        expect(getByTestId('c-box')).toBeChecked();
    })

    it("should switch to edit mode when edit is pressed",()=>{
        const {getByTestId} = render(<Todo/>)
        fireEvent.click(getByTestId('edit-btn'));
        expect(getByTestId('edit-input')).toBeDefined();
        
    })

    it("Should render text `Hello World` when `Hello World` is passed as props",()=>{
        const wrapper = shallow(<Todo completed = {false} name="Hello World"/>);
        expect(wrapper.find('.todo-name').text()).toEqual('Hello World');
    })

})
