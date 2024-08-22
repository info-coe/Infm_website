import React from "react";


const TermsConditions = (props) => {
  const AboutusContent = JSON.parse(props.product.aboutusContent.Content);
  const data= AboutusContent
  .map((item) => item.About_Us)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];
  const termsData= AboutusContent
  .map((item) => item.Terms_Conditions)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <>
    <div>
       <img src={data.AU_MainBanner}  width="100%" alt='no-display' className="img-fluid d-none d-md-block"  />
       <img src={data.AU_MobileBanner} alt='no-display' className="img-fluid d-md-none w-100" />
       <div style={{backgroundImage:`url(${termsData.TC_BricksImage})`}}>
       <div className="container p-md-5 p-2" >
        <h2><span className="text-primary">{termsData.TC_TermsHead}</span><span style={{color:"#FE0000"}}>{termsData.TC_ConditionsHead}</span></h2>
        {termsData.TC_Points.map((item,index)=>(
            <div key={index} className="mt-4">
                <h5>{item.heading}</h5>
                {item.content.map((subitems, subindex)=>(
                    <div key={subindex} >
                    {typeof subitems === 'string' ? (
                        <p>{subitems}</p>
                      ) : (
                        <>
                        {Array.isArray(subitems.subpoints) && subitems.subpoints.map((point, pointIndex) => (
                            <div key={pointIndex} className="ps-md-5 ps-2">
                                <ul className='text-black fs-6'>
                                    <li>{point}</li>
                                </ul>
                            </div>
                          ))}
                          </>
                      )}
                    </div>
                ))}
            </div>
        ))}
       </div>
       </div>
    </div>
    </>
  );
};

export default TermsConditions;
