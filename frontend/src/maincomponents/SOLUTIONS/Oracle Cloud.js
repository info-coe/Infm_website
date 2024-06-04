import React from 'react';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const OracleCloud = (props) => {
    const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
    // console.log(serviceContent)
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    return (
        <div>
            <h1>Oracle Cloud</h1>
            <ModelsPoints contents={crmModelPointsData} /> 
        </div>
    );
};

export default OracleCloud;