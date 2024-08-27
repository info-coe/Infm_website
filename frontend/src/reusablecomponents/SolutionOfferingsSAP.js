import React from "react";
import { FaCheck } from "react-icons/fa6";

export const SolutionOfferingsSAP = ({ managementData }) => {
  return (
    <div>
      <div className="row justify-content-center m-3">
        {managementData.map((curr, index) => (
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="col-md-5 m-3 border rounded position-relative"
            key={index}
            
          >
            <div className="" >
              <div className="p-2" >
                <img
                  src={curr.url}
                  className="img-fluid"
                  style={{
                    width: "10%",
                    borderRadius: "5px",
                  }}
                  alt="Customized_Image"
                />
              </div>
              <ul className="font-weight-normal" >
                <li className="list-group-item fs-6" >{curr.name}</li>
                {Object.entries(curr).map(([key, value], index) => {
                  if (key === "name" || key === "url") {
                    return null;
                  }

                  return (
                    <li
                    
                      key={index}
                      className={`list-group-item p-1 ${
                        index >= Object.keys(curr).length - 2 ? "no-bullet" : ""
                      }`}
                    >
                      <span className="">
                        <FaCheck
                          style={{ color: " #0f62fe" }}
                          size={
                            index === Object.keys(curr).length - 1
                              ? "1.2em"
                              : "1em"
                          }
                        />
                      </span>
                      {Array.isArray(value) ? (
                        <span>
                          <span className="p-2" >{value[0]}</span>
                          <ul className="list-unstyled ms-4">
                            {value[1].subpoints.map((subItem, subIndex) => (
                              <li key={subIndex} className="">
                                <FaCheck
                                  style={{ color: " #0f62fe" }}
                                  size="1em"
                                />
                                <span className="p-2">{subItem}</span>
                              </li>
                            ))}
                          </ul>
                        </span>
                      ) : (
                        <span className="p-2" >{value}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <span
              className="position-absolute bottom-0 start-0 bg-primary w-100 text-center rounded"
              style={{ borderBottom: "5px solid #FE0000" }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};
