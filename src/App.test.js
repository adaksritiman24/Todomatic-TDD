import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe("App component testing",()=>{
  it("shoud have component App defined",()=>{
    const component = shallow(<App/>);
    const app = component.find(Text);
    expect(app).toBeDefined();
  });

  it("Should have heading Todomatic - TDD", ()=>{
    const {getByTestId} = render(<App/>);
    expect(getByTestId("heading")).toHaveTextContent("Todomatic -TDD");
  });

})