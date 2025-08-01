
import { fireEvent, render ,screen } from "@testing-library/react";
 import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

test("should render header component", () => {
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
          </BrowserRouter>
    );
    const logginButton = screen.getByRole("button");
    expect(logginButton).toBeInTheDocument();
});
test("check login logout", () => {
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
          </BrowserRouter>
    );
    const logginButton = screen.getByRole("button",{name:"🔐 Login"});
    fireEvent.click(logginButton);
    const logoutButton = screen.getByRole("button",{name:"🔓 Logout"});
    expect(logoutButton).toBeInTheDocument();
});