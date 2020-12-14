import React from "react";
function Notification() {
  return (
    <>
      <div className="pb-1 commondiv">
        <div className="row justify-content-between">
          <div className="col-5  d-flex flex-column justify-content-center">
            <h6 className="p-2 m-2" style={{ fontWeight: 400 }}>
              Notifications
            </h6>
          </div>
          <div className="notificationevent col-5 mr-3 d-flex flex-column justify-content-center">
            <h6 className="p-2 m-2" style={{ fontWeight: 400 }}>
              Events
            </h6>
          </div>
        </div>

        <div
          className="m-2 p-2 "
          style={{ backgroundColor: " #f2f2f2", borderRadius: 20 }}
        >
          <div className="row p-2">
            <div
              className="notificationdiv col-xs-2"
              style={{ backgroundColor: "#FFD9D9" }}
            >
              {" "}
            </div>
            <div className="col-xs-4 ml-2">
              <h6 className="product-name">
                <strong>Admin</strong>
              </h6>
              <h6>
                <small>Your faculty uploaded the syllabus.</small>
              </h6>
              <h6>
                <small>3 minutes ago.</small>
              </h6>
            </div>
          </div>
          <hr className="bottomlinenotification"></hr>

          <div className="row p-2">
            <div
              className="notificationdiv col-xs-2"
              style={{ backgroundColor: "#BA99FF" }}
            >
              {" "}
            </div>
            <div className="col-xs-4 ml-2">
              <h6 className="product-name">
                <strong>Admin</strong>
              </h6>
              <h6>
                <small>Your faculty uploaded the syllabus.</small>
              </h6>
              <h6>
                <small>3 minutes ago.</small>
              </h6>
            </div>
          </div>
          <hr className="bottomlinenotification"></hr>

          <div className="row p-2">
            <div
              className="notificationdiv col-xs-2"
              style={{ backgroundColor: "#D9FFE1" }}
            >
              {" "}
            </div>
            <div className="col-xs-4 ml-2">
              <h6 className="product-name">
                <strong>Admin</strong>
              </h6>
              <h6>
                <small>Your faculty uploaded the syllabus.</small>
              </h6>
              <h6>
                <small>3 minutes ago.</small>
              </h6>
            </div>
          </div>
          <hr className="bottomlinenotification"></hr>
          <span className="viewall">View all</span>
        </div>
      </div>
    </>
  );
}
export default Notification;
