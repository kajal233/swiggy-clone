import { render, screen } from "@testing-library/react";
import Contact from "../Contact";


describe("Contact us page test cases", ()=> {

test('should load contact us component', () => {

    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
test('should load button', () => {

    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});
test('should load 2 input', () => {

    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    // console.log(input[0]);
});

});
