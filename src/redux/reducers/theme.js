import * as Theme from "../actions/themeType";
import DEFAULT_THEME from "../../theme/default";
import DARK_THEME from "../../theme/dark";
const defaultTheme = {
    id: "default",
    styles: DEFAULT_THEME
};
const darkTheme = {
    id: "dark",
    styles: DARK_THEME
};

export default theme = (state = defaultTheme, action) => {
    switch (action.type) {
        case Theme.darkTheme.type:
            return darkTheme
        case Theme.defaultTheme.type:
            return defaultTheme
        default:
            return state
    }
}