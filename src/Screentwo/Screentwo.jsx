import ".././App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../NavBar";
import Post from "./Post";

function Screentwo() {
  return (
    <>
      <div className="row d-flex align-items-stretch">
        <div className="col-lg-2 col-md-3 col-4 col-xs-6 d-flex align-items-stretch ">
          <NavBar></NavBar>
        </div>
        <div className="col-lg-8  col-md-9 col-8 col-xs-6 ">
          <Post></Post>
        </div>
      </div>
    </>
  );
}
export default Screentwo;
