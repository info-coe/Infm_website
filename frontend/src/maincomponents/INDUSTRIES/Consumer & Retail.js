import AOS from "aos";
import "aos/dist/aos.css";
// import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import industriesContent from "./industriesContent.json";
const ConsumerRetail = () => {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  console.log(industriesContent);

  const {
    customer,
    retail,

    solution,
    offerings,
    industriesmainimage,
    industriesSubimage,
    solution_para,
    technology,
    servicesmainbulb,
  } = industriesContent[0];
  const {
    man_auto_detail,
    man_auto_contact,
    man_auto_today,
    customer_para,
    customer_sub_para
  } = industriesContent[3];
  const { customer_management } = industriesContent[1];
  const { mediacloudcomp, mediadataservices } = industriesContent[2];
  // console.log(industriesContent[3]);

  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div>
        <img
        src={industriesmainimage}
        width="100%"
        alt="Main Industries"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={industriesSubimage}
        alt="Sub Industries"
        className="img-fluid d-md-none w-100"
      />
        </div>
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{customer} </span>
            <span style={{ color: "#FF0000" }}>{retail}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{customer_para}</p>
            <p>{customer_sub_para}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {solution} </span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
          <div className="fs-5 font-weight-normal">
            <p>{solution_para}</p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          {customer_management.map((curr, index) => (
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

      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}>{technology}</span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={mediacloudcomp}
          industriesImage12={servicesmainbulb}
          dataServices={mediadataservices}
        />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="container pt-5">
            <p>
              {man_auto_detail},
              <span style={{ color: "#FF0000" }}>{man_auto_contact} </span>
              {man_auto_today}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerRetail;
