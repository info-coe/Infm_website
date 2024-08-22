import React from "react";

const PrivacyPolicies = (props) => {
  const AboutusContent = JSON.parse(props.product.aboutusContent.Content);
  const data= AboutusContent
  .map((item) => item.About_Us)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];
  const PrivacyPolicyData= AboutusContent
  .map((item) => item.Privacy_Policies)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <>
    <div>
       <img src={data.AU_MainBanner}  width="100%" alt='no-display' className="img-fluid d-none d-md-block"  />
       <img src={data.AU_MobileBanner} alt='no-display' className="img-fluid d-md-none w-100" />
       <div style={{backgroundImage:`url(${PrivacyPolicyData.PP_BricksImage})`}}>
       <div className="container p-md-5 p-2" >
        <h2><span className="text-primary">{PrivacyPolicyData.PP_Privacy}</span><span style={{color:"#FE0000"}}>{PrivacyPolicyData.PP_Statement}</span></h2>

        <p><img src={PrivacyPolicyData.PP_Icon} alt="ThumbsupImg" width="40" height="35"></img> {PrivacyPolicyData.PP_content}</p>
        {PrivacyPolicyData.PP_Points.map((item,index)=>(
            <div key={index} className="mt-4">
                <h5>{item.heading}</h5>
               
                    {item.points.map((subitem, subindex)=>(
                        <p key={subindex}><img src={PrivacyPolicyData.PP_Icon} alt="ThumbsupImg" width="40" height="35"></img> {subitem}</p>
                    ))}   
            </div>
        ))}
       </div>
       </div>
   
    </div>
    </>
  );
};

export default PrivacyPolicies;
