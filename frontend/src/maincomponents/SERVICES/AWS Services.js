import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
// import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import { Link } from 'react-router-dom';


const styles = {
  box: {
    padding: "30px 10px",
    boxSizing: "border-box",
    color: "#000",
    borderRadius: "10px",
    backgroundColor: "#fff",
    // textAlign: "center",
    border: "1px solid #eee",
    marginBottom: "30px",
    borderBottom: "8px solid #FE0000",
    height: 'auto',
    minHeight: '220px',

  },
  heading: {
    fontSize: "17px",
    textAlign: 'center',
    color: "#FE0000"
  },
  // content: {
  //     textAlign: "justify"
  // },
  paragraph: {
    marginBottom: "1em",
    fontSize: "14px",
    lineHeight: "28px"
  },
  Mainhead: {
    color: '#0f62fe',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '25px'
  }
};


const AWSServices = (props) => {
    const data = JSON.parse(props.product.ServiceContent.Content);
    // const crmModelPointsData = data
    //   .map((item) => item.ServiceCmsModelsData)
    //   .filter(Boolean)
    //   .reduce((acc, curr) => acc.concat(curr), []);
  
    const AWSSAllData = data
    .map((item) => item.Aws_Services)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

    const AWSS_ModelPointsData = AWSSAllData.Aws_Services_ModelsData;
  
    const serviceMainimage = data
      .map((item) => item.servicebannerimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
      
    const serviceSubimage = data
      .map((item) => item.servicemobileimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);

    const sections = [
        {
            content: AWSSAllData.awsUnveilFutureContent
        },
        {
            heading: AWSSAllData.awsNavigatingHeading,
            content: AWSSAllData.awsNavigatingContent
        }
    ];
    const awsServiceData= AWSSAllData.ExtensiveAWSServicesData
    const awsServicesData = awsServiceData.map(item => ({
        Mainhead: item.awsmainhead,
        Subhead: item.awssubhead,
        Content: [item.awscontent1,item.awscontent2,item.awscontent3,item.awscontent4]
    }));

    return (
    <>
      <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={AWSSAllData.awsUnveilFutureHeading} sections={sections} textsize="20px"/>
        </div>
        {/* <BoxServicesData allservices={awsServicesData} textColor="#0f62fe" textsize='25px'  icon={awsServiceData[0].awsicon} /> */}
        <>
          <div className="container mt-3">
            <h1 style={styles.Mainhead}>{awsServicesData[0].Mainhead}</h1>
            <div className="d-flex flex-wrap row justify-content-center">
              {awsServicesData.map((service, index) =>
              (
                <div
                  key={index}
                  className={`col-md-4 mt-3`}
                >
                  {index === 0 ?
                    <Link to='/AWS-Cloud-Migration' className="text-decoration-none">
                      <div style={styles.box}>
                        <h2 style={styles.heading} className="pb-3">{service.Subhead}</h2>
                        <div style={styles.content}>
                          {service.Content.map((paragraph, idx) => (
                            <p key={idx} style={styles.paragraph}>
                              <span className="me-2">
                                <i className={awsServiceData[0].awsicon} />
                              </span>{paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Link>
                    :
                    <div style={styles.box}>
                      <h2 style={styles.heading} className="pb-3">{service.Subhead}</h2>
                      <div style={styles.content}>
                        {service.Content.map((paragraph, idx) => (
                          <p key={idx} style={styles.paragraph}>
                            <span className="me-2">
                              <i className={awsServiceData[0].awsicon} />
                            </span>{paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  }

                </div>
              )
              )}
            </div>
          </div>
        </>
         <NoZoomin heading={AWSSAllData.awsInnovateHeading} textsize='25px' texttop="20px" content={[AWSSAllData.awsInnovateContent]} image={AWSSAllData.awsInnovateImage}/>
         <ModelsPoints contents={AWSS_ModelPointsData} /> 
         </div>

        </>
    );
};

export default AWSServices;