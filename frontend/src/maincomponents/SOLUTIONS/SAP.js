import React from 'react';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const SAP = (props) => {
    const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
    // console.log(serviceContent)
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    return (
        <div>
            <h1>SAP</h1>
            <ModelsPoints contents={crmModelPointsData} /> 
        </div>
    );
};

export default SAP;