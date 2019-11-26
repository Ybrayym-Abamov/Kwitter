import React from "react";
import { Switch, Route, Sidebar, TopMenu } from "./components";
// import { Sidebar, TopMenu } from "../components";
import pages from "./pages";
import { userIsAuthenticated } from "./HOCs";


class App extends React.Component {
  render() {
    return (
        <>
          <div id="sidebar">
            <Sidebar />
          </div>
          <div id="mainContent">
          <TopMenu isAuthenticated={this.props.isAuthenticated} />

            <Switch>
              {Object.entries(pages).map(([routeName, routeObj]) => (
                <Route
                  key={routeName}
                  exact
                  path={routeObj.path}
                  component={routeObj.component}
                />
              ))}
            </Switch>
          </div>
        </>
    );
  }
}

export default userIsAuthenticated(App);
