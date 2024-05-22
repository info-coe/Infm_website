import React from 'react';

const CrmServices = ({ serviceData }) => {
  return (
    <div className="container mt-3">
      {serviceData.map((service, index) => (
        <div key={index} className="row mb-4">
          <div className="col-md-12">
            <h3 className='text-primary mb-4'>{service.mainHead}</h3>
            <h5 className='text-danger'>{service.subHead}</h5>
            <p className='fs-5 text-secondary'><strong>Objective: </strong>{service.objective}</p>
            {service.approach ? (
              <p className='fs-5 text-secondary'>
                <strong>Approach: </strong>{service.approach}
              </p>
            ) : (null)}
            <p className='fs-5 text-secondary'><strong>Outcome: </strong>{service.outcome}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CrmServices;
