import React from 'react';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const DevOps = (props) => {
    const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
    // console.log(serviceContent)
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    return (
        <div>
            <h1>DevOps</h1>
            <ModelsPoints contents={crmModelPointsData} /> 
        </div>
    );
};

export default DevOps;