import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "../Hoc/MainLayout";
import Dashboard from "../Containers/Dashboard";
import SnackBar from "../Components/SnackBar";
import Modal from "../Components/Modal";
import Countries from "../Containers/Countries";
import SlotMachine from "../Containers/SlotMachine";

const Routes = ({ history }) => (
  <Router history={history}>
    <MainLayout>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Dashboard>
          <Route
            path="/dashboard"
            exact={false}
            component={() => (
              <MainLayout>
                <Switch>
                  <Route
                    exact
                    path="/dashboard/countries"
                    component={Countries}
                  />
                  <Route exact path="/dashboard/slot" component={SlotMachine} />
                </Switch>
              </MainLayout>
            )}
          />
        </Dashboard>
      </Switch>
      <SnackBar />
      <Modal />
    </MainLayout>
  </Router>
);

export default Routes;
