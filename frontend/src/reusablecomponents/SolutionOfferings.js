import React from 'react'
import { FaCheck } from "react-icons/fa6";
export const SolutionOfferings = ({managementData}) => {

    // console.log(managementData)
  return (
    <div>
        <div className="row justify-content-md-center">
          {managementData.map((curr, index) => (
            <div
              data-aos="zoom-in"
              className="col-md-5 m-3 border rounded position-relative"
              key={index}
            >
              <div className="">
                <div className="p-3">
                  <img
                    src={curr.url}
                    className="img-fluid"
                    style={{
                      width: "10%",
                      border: "2px solid #ccc",
                      borderRadius: "5px",
                    }}
                    alt="Customized_Image"
                  />
                </div>
                <ul className="font-weight-normal">
                  <li className="list-group-item fs-5">{curr.name}</li>
                  {Object.entries(curr).map(([key, value], index) => {
                    if (key === "name") {
                      return null;
                    } else if (key === "url") {
                      return null;
                    }
                    return (
                      <li
                        key={index}
                        className={`list-group-item p-2 ${
                          index >= Object.keys(curr).length - 2
                            ? "no-bullet"
                            : ""
                        }`}
                      >
                        <span className="p-1">
                          <FaCheck
                            style={{ color: " #0f62fe" }}
                            size={
                              index === Object.keys(curr).length - 1
                                ? "1.4em"
                                : "1.2em"
                            }
                          />
                        </span>
                        {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
            </div>
          ))}
        </div>
    </div>
  )
}
