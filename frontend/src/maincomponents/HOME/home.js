import React from "react";
import Zoomin2 from "../../reusablecomponents/Zoomin2";
import ImageMoving from "../../reusablecomponents/ImageMoving";
import CircleImageCard from "../../reusablecomponents/CircleImageCard";
import MainSlider from "../../reusablecomponents/MainSlider";
import Testimonials from "../../reusablecomponents/Testimonials";
import Card from "../../reusablecomponents/Card";
import ToggleableCard from "../../reusablecomponents/ToggleableCard";
import SlideRight from "../../reusablecomponents/SlideRight";
import SlideLeft from "../../reusablecomponents/SlideLeft";
import PartnerLogos from "../../reusablecomponents/PartnersLogoSlide";
import Marquee from "../../reusablecomponents/Marquee";
import ServicesCardOpen from "../../reusablecomponents/servicescardopen";

export default function Home(props) {
  const data = JSON.parse(props.product.ServiceContent.Content);
  const HomeContent = JSON.parse(props.product.homeContent.Content);
  const cardData = data
    .map((item) => item.Services)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
  // serviceContent[0].ServicesData
  const homeData = HomeContent[0].Business_Growth_Through;
  const circleData = HomeContent[0].Thought_Leadership_Circles;
  const MainSlideData = HomeContent[0].Home_Banner;
  const innovativeApproachesData = HomeContent[0].Why_Choose_Us.Few_Good_Reasons_Data;
  const solutionOfferingsData = HomeContent[0].Why_Choose_Us.Solution_Offerings_Data;
  const whychooseus = HomeContent[0].Why_Choose_Us;
  const businesspartners = HomeContent[0].Business_Partners;

  return (
    <div>
      <MainSlider MainSlideData={MainSlideData} />
      <Marquee content={MainSlideData.HB_Marquee} />
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 ">
            <ImageMoving image={homeData.BGT_image} />
          </div>
          <div className="col-md-6">
            <Zoomin2
              Mainheading={homeData.BGT_head}
              heading={homeData.BGT_head1}
              heading2={homeData.BGT_head2}
              content={[homeData.BGT_whoweareDesc]}
              btn={homeData.BGT_moredetailsbtn}
              icon={homeData.BGT_anglerighticon}
              s={homeData.BGT_whoweare}
            />
          </div>
        </div>
      </div>

      <div className="d-md-flex mt-5">
        {circleData.map((data, index) => (
          <CircleImageCard
            key={index}
            title={data.title}
            icon={data.image}
            background={data.color}
          />
        ))}
      </div>

      <div className="mt-2 mb-4">
        <Marquee content={MainSlideData.HB_Marquee} />
      </div>
      <div>
        <div className="ps-lg-5 ms-lg-5 ms-md-5 ms-3 mt-5">
          <h1 className="text-primary">
            {whychooseus.WCU_why}
            <span className="text-danger"> {whychooseus.WCU_chooseus}</span>
          </h1>
          <p
            className="text-secondary"
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            {whychooseus.WCU_choosepara}
          </p>
          <h3
            className="text-secondary"
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            {whychooseus.WCU_fewreasons}
          </h3>
        </div>
        <div className="container" style={{ overflowX: "hidden" }}>
          <div className="row">
            <div className="col-lg-8 col-xxl-8">
              <SlideRight
                data={
                  <div className="mt-2 mb-2 ">
                    <div className="row ">
                      {innovativeApproachesData.map((item, index) => (
                        <div
                          key={index}
                          className="col-12 col-md-4 col-lg-4 mb-3 d-flex flex-wrap justify-content-center"
                        >
                          <Card
                            logo={item.logo}
                            title={item.title}
                            description={item.description}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                }
              />
            </div>
            <div className="col-lg-4 col-xxl-4">
              <SlideLeft
                data={
                  <div className="mt-3">
                    <h3
                      className="text-secondary"
                      style={{ fontFamily: "'Lobster', cursive" }}
                    >
                      {whychooseus.solutionoff}
                    </h3>
                    {solutionOfferingsData.map((item, index) => (
                      <ToggleableCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        content={item.content}
                        initiallyExpanded={
                          index === solutionOfferingsData.length - 1
                        }
                        more={item.more}
                        cardlink={item.cardlink}
                      />
                    ))}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <PartnerLogos businesspartners={businesspartners} />

      {/* <h1 className="text-center text-danger mt-5">{data.serviceHeading}</h1> */}

      <div>
        <div>
          {cardData.map((item, index) => (
              <div key={index}>
                <h1 className="text-center text-danger mt-5">
                  {item.serviceHeading}
                </h1>
                <div className="container">
                  <div
                    className="row justify-content-center"
                    style={{ marginTop: "80px" }}
                  >
                    {item.ServicesData.map((data, index) => (
                      <div
                        key={index}
                        className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                        style={{ marginBottom: "80px" }}
                      >
                        <ServicesCardOpen
                          title={data[`t${index + 1}`]} // Use template literal to access dynamic property names
                          description={data[`Des${index + 1}`]} // Similarly, for description
                          icon={data[`icon${index + 1}`]} //
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          <Testimonials data={HomeContent}/>
        </div>
      </div>
    </div>
  );
}
