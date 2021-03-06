import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AddMoreTrips from "./Components/AddMoreTrips/AddMoreTrips";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageAllTrips from "./Components/ManageAllTrips/ManageAllTrips";
import MyTrip from "./Components/MyTrip/MyTrip";
import NotFound from "./Components/NotFound/NotFound";
import PlaceTrip from "./Components/PlaceTrip/PlaceTrip";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Shared/Footer/Footer";
import NavBar from "./Components/Shared/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/tourBook/:tourId">
              <PlaceTrip></PlaceTrip>
            </PrivateRoute>
            <PrivateRoute exact path="/myTrips">
              <MyTrip></MyTrip>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllTrips">
              <ManageAllTrips />
            </PrivateRoute>
            <PrivateRoute exact path="/addMoreTrips">
              <AddMoreTrips />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
