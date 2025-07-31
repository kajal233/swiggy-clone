
import { render } from "@testing-library/react";
 import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";


test("should render header component", () => {
    render(
       <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>

          </BrowserRouter>
    );
});