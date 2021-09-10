import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";


const PrivateRoute = ({component: Component, ...rest }) => {
    return (<Route {...rest }  
    render={ props => isAuthenticated() ? (
        <Component {...props} />
    ) :(
        <Redirect to={{ pathname: "/login", state: { from: props.location}}} />
    )}
    /> )
};

export default PrivateRoute

/*return(
    <Route {...rest} render={props => (
        isAuthenticated() ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
)*/

/*const Routes = () => {
    <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/register" component={Register} />
      <PrivateRoute path="/atendimento" component={Attendance} />
      <PrivateRoute path="/menu" component={Menu} />
    </Switch>
    </BrowserRouter>
}
export default Routes;*/