const CrmServices = ({ serviceData }) => {
    return (
      <div className="container mt-3">
        {serviceData.map((service, index) => (
          <div key={index} className="row mb-4">
            <div className="col-md-12">
              <h3 className='text-primary mb-4'>{service.crmmainhead}</h3>
              <h4 className='text-success'>{service.crmminhead}</h4>
              <p className='fs-5 text-secondary'><strong className='fs-5 text-secondary'>Objective: </strong>{service.crmcontent1}</p>
              <p className='fs-5 text-secondary'><strong className='fs-5 text-secondary'>Outcome: </strong>{service.crmcontent2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default CrmServices;