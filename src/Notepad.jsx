import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/bootstrap/dist/js/bootstrap";
import CanvasJSReact from "./canvasjs.react";
import { faChartBar, faChartLine } from "@fortawesome/free-solid-svg-icons";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Notepad() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [notes, setnotes] = useState([
    {
      title: "Title1",
      description: "Lorem Ipsum dolor sit am",
    },
    {
      title: "Title1",
      description: "Lorem Ipsum dolor sit am",
    },
    {
      title: "Title2",
      description: "Lorem Ipsum dolor sit am",
    },
    {
      title: "Title3",
      description: "Lorem Ipsum dolor sit am",
    },
    {
      title: "Title4",
      description: "Lorem Ipsum dolor sit am",
    },
  ]);
  const submitform = () => {
    if (title !== "" && description !== "") {
      const temp = [...notes];
      temp.push({ title: title, description: description });
      setnotes(temp);
      console.log(notes);
    }
  };
  const options = {
    height: 200,
    animationEnabled: true,
    axisY: {
      suffix: " kWh",
      interval: 20,
      maximum: 50,
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "YYYY",
        yValueFormatString: "#,##0.## bn kW⋅h",
        showInLegend: true,
        dataPoints: [
          { x: new Date(2008, 0), y: 20.735 },
          { x: new Date(2009, 0), y: 44.102 },
          { x: new Date(2010, 0), y: 20.569 },
          { x: new Date(2011, 0), y: 30.743 },
          { x: new Date(2012, 0), y: 42.381 },
        ],
        color: "#34A853",
      },
    ],
  };
  return (
    <>
      <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
        <div className="commondiv mt-2 mb-4 col-lg-5 col-sm-12">
          <h4 className="m-3">
            <strong className="title">Notepad</strong>
          </h4>
          <div className="row">
            <div className="col-8 m-2  d-flex flex-column justify-content-center">
              <ul style={{ listStyleType: "none" }}>
                {notes.map((item, i) => {
                  return (
                    <li key={i} style={{ marginLeft: -30, marginTop: 20 }}>
                      <h6 style={{ color: "darkgrey", fontWeight: 500 }}>
                        <strong style={{ color: "black", fontWeight: 400 }}>
                          {item.title}{" "}
                        </strong>
                        {item.description}
                      </h6>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-3 col-sm-2">
              <button
                className="btn1"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <FontAwesomeIcon icon={faPlus} className="icon notepadplus" />
              </button>
            </div>
          </div>
        </div>
        {/*Area Chart */}
        <div className=" mt-3 mb-4 col-lg-4 col-sm-12 justify-content-center">
          <div className=" p-3 commondiv shadow ">
            {" "}
            <CanvasJSChart options={options} />
          </div>

          <div className="commondiv p-3 mt-3">
            <div className="row justify-content-between">
              <div className="col-5  d-flex flex-column justify-content-center">
                <h6 style={{ fontWeight: 400 }}>Inbox</h6>
              </div>
              <div className="col-5  d-flex flex-column justify-content-center">
                <h3 className="title" style={{ textAlign: "right" }}>
                  23
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-3 mb-4 col-lg-3  col-sm-12 justify-content-center">
          <div className=" p-1 commondiv shadow ">
            <h6 style={{ textAlign: "center", fontWeight: 400 }}>This Month</h6>
            <hr className="bottomline"></hr>
            <div className="row justify-content-between">
              <div className="col-5  d-flex flex-column justify-content-center">
                <h6 style={{ fontWeight: 500, color: "blue" }}>+7.8%</h6>
              </div>
              <div className="col-5  d-flex flex-column justify-content-center">
                <h3 style={{ textAlign: "right" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="iconchart firstmonth"
                  />
                </h3>{" "}
              </div>
            </div>
          </div>
          <div className="mt-2 p-1 commondiv shadow ">
            <h6 style={{ textAlign: "center", fontWeight: 400 }}>Last Month</h6>
            <hr className="bottomline"></hr>
            <div className="row justify-content-between">
              <div className="col-5  d-flex flex-column justify-content-center">
                <h6 style={{ fontWeight: 500, color: "blue", marginLeft: 5 }}>
                  +67.4%
                </h6>
              </div>
              <div className="col-5  d-flex flex-column justify-content-center">
                <h3 style={{ textAlign: "right" }}>
                  {" "}
                  <FontAwesomeIcon icon={faChartBar} className="iconchart" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*-----------Popup form-------*/}
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Note
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter title"
                    required
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Description"
                    required
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                  ></input>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitform}
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notepad;
