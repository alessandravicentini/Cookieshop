import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Total } from "../pages/Total";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/cart'>
                <Total />
            </Route>
        </Switch>
    )
}
