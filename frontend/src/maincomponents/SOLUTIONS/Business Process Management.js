import React from 'react';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const BusinessProcessManagement = (props) => {
    const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
    // console.log(serviceContent)
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    return (
        <div>
            <h1>Business Process Management</h1>
            <ModelsPoints contents={crmModelPointsData} /> 
        </div>
    );
};

export default BusinessProcessManagement;