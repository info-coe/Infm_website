import React from 'react';
import SolutionData from "./solutionscontent.json";
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const ServiceOrientedArchitecture = (props) => {
    const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
    // console.log(serviceContent)
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    return (
        <div>
                  <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
            <h1>Service Oriented Architecture</h1>
            <ModelsPoints contents={crmModelPointsData} /> 
        </div>
    );
};

export default ServiceOrientedArchitecture;