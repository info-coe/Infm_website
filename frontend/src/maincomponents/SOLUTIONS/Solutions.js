import React from "react";
import ToggleableCard from "../../reusablecomponents/ToggleableCard";
import SlideLeft from "../../reusablecomponents/SlideLeft";

const Solutions = (props) => {
  const SolutionContent = JSON.parse(props.product.solutionscontent.Content);
  const SolutionAllData = SolutionContent
  .map((item) => item.Solutions)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];
  const solutionOfferingsData =
  SolutionAllData.Solution_Offerings_Data;

  return (
    <>
      <img
        src={SolutionContent[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <SlideLeft
        data={
          <div className="mt-3">
            <h3
              className="text-secondary"
              style={{ fontFamily: "'Lobster', cursive" }}
            >
              {SolutionAllData.solutionoff}
            </h3>
            <div className="d-md-flex flex-wrap">
            {solutionOfferingsData.map((item, index) => (
            <div className="col-md-4">

              <ToggleableCard
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
                more={item.more}
                cardlink={item.cardlink}
              />
              </div>
            ))}
            </div>
          </div>
        }
      />
    </>
  );
};

export default Solutions;
