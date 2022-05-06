import { Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { themes } from '../themes'

import { useContext } from "react";
import { ThemeTypeContext } from "../providers/theme";

import { Home } from "../pages/Home";
import { Total } from "../pages/Total";
import { GlobalStyle } from "../styles/global";

export const Routes = () => {

  const { currentTheme } = useContext(ThemeTypeContext)

    return (
        <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/cart'>
                <Total />
            </Route>
        </Switch>
        </ThemeProvider>
    )
}
