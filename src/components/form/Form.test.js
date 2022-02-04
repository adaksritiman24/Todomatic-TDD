import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form testing", ()=>{
    it("should contain inputfiled", ()=>{
        const {getByTestId} = render(<Form/>);
        expect(getByTestId("task-input")).toBeDefined();
    });

    it("should contain save button", ()=>{
        const {getByTestId} = render(<Form/>);
        expect(getByTestId("save-btn")).toBeDefined();
    });
})