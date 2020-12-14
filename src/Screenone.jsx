import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import SalesReport from "./SalesReport";
import NavBar from "./NavBar";
import Notification from "./Notification";
function Screenone() {
  return (
    <>
      <div className="row d-flex align-items-stretch">
        <div className="col-lg-2 col-md-3 col-5 col-xs-6 d-flex align-items-stretch ">
          <NavBar></NavBar>
        </div>
        <div className="col-lg-10  col-md-9 col-7 col-xs-6 ">
          <div className="row">
            <div className="col-lg-6">
              <Search> </Search>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              {" "}
              <SalesReport></SalesReport>
            </div>
            <div className="col-lg-3">
              <Notification></Notification>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screenone;
