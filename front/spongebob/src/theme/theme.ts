import { DefaultTheme } from "styled-components";

export interface trelloDefaultTheme extends DefaultTheme {
    boardColor: string;
    cardColor: string;
}

export const theme: DefaultTheme = {
    bgColor: "#2f3640",
    textColor: "#f5f6fa",
    accentColor: "#487eb0",
};

export const darkTheme: DefaultTheme = {
    bgColor: "#3B404D",
    textColor: "#f1f2f6",
    borderColor: "#7f8fa6",

    accentColor: "#40739e",
    accentHoverColor: "#518dc4",
};

export const lightTheme: DefaultTheme = {
    bgColor: "#FAFAFA",
    textColor: "#2f3542",
    borderColor: "#7f8fa6",

    accentColor: "#40739e",
    accentHoverColor: "#518dc4",
};
