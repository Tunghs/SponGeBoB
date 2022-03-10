import React from "react";
import ReactDOM from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/globalStyle";
import { lightTheme } from "theme/theme";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <HelmetProvider>
                    <Helmet>
                        <title>SponGeBoB</title>
                    </Helmet>
                </HelmetProvider>
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
