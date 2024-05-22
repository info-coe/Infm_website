import React from 'react';

const CrmServices = ({ serviceData }) => {
  return (
    <div className="container mt-3">
      {serviceData.map((service, index) => (
        <div key={index} className="row mb-4">
          <div className="col-md-12">
            <h3 className='text-primary mb-4'>{service.mainHead}</h3>
            <h5 className='text-danger'>{service.subHead}</h5>
            <p className='text-secondary' style={{fontSize:'17px'}}><strong>Objective: </strong>{service.objective}</p>
            {service.approach ? (
              <p className='text-secondary' style={{fontSize:'17px'}}>
                <strong>Approach: </strong>{service.approach}
              </p>
            ) : (null)}
            <p className='text-secondary' style={{fontSize:'17px'}}><strong>Outcome: </strong>{service.outcome}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CrmServices;
