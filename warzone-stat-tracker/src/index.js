import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import "./index.css";
import {ThemeProvider} from "styled-components";
import theme from "./theme";

import App from "./App";

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>,
    document.querySelector("#root")
)