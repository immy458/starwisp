import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Screenone from "./Screenone";
import Screentwo from "./Screentwo/Screentwo";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Screenone} />
        <Route exact path="/screentwo" component={Screentwo} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
