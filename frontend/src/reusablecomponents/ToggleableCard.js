import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ToggleableCard({ title, content,initiallyExpanded, icon,more ,cardlink,points}) {
    const [showAdditionalContent, setShowAdditionalContent] = useState(initiallyExpanded);
  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  return (
    <div className="">
        
      <div className="card m-3" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <div>
            <h2 className="fs-6">
            <span 
                onClick={toggleAdditionalContent} 
                style={{ cursor: 'pointer', color: 'blue' }}
              >
               <span className='fs-6'><i className={icon}></i> </span>{title}
              </span>
            </h2>
          </div>
          {/* {showAdditionalContent && (
            <div style={{ marginTop: '20px' }}>
              {Array.isArray(content) ? (
                content.map((item, index) => (
                  <div key={index}>
                    <p className="">{item}</p>
                    {Array.isArray(item.points) && item.points.map((point, pointIndex) => (
                      <>
                      <h3 className="">{point.heading}</h3> 
                      <p className="">{point.content}</p>
                      </>
                    ))}

                  </div>
                ))
                ):(
                content
              )} 
                {Array.isArray(points) && points.map((point, pointIndex) => (
                <div key={pointIndex} style={{ marginTop: '15px' }}>
                  <h3 className="">{point.heading}</h3>
                  <p className="">{point.content}</p>
                </div>
              ))}
              <Link to={cardlink} className="text-decoration-none">
                <span className='text-primary'>{more}</span>
              </Link>
            </div>
          )} */}
          {showAdditionalContent && (
            <div style={{ marginTop: '20px' }}>
              {Array.isArray(content) ? (
                content.map((item, index) => (
                  <div key={index}>
                    {/* Check if the item is a string or an object containing Points */}
                    {typeof item === 'string' ? (
                      <p className="">{item}</p>
                    ) : (
                      // Handling Points
                      <>
                        {/* Handling Points if they exist */}
                        {Array.isArray(item.Points) && item.Points.map((point, pointIndex) => (
                          <div key={pointIndex}>
                            <div style={{ color: "#FE0000" }}>
                              <b>{point.heading}</b>
                              <span className='text-black fs-6'> - {point.content}</span>
                            </div>
                          </div>
                        ))}

                        {/* Handling subHeadings and their list items */}
                        {Array.isArray(item.subHeadings) && item.subHeadings.map((subHeading, subIndex) => (
                          <div key={subIndex} >
                            <h4 className="fs-6 mb-4" style={{ color: "#0f62fe" }}>{subHeading.subHeading}</h4>
                              {Array.isArray(subHeading.list) && subHeading.list.map((detail, detailIndex) => (
                                <p style={{lineHeight:"10px"}} key={detailIndex}>{detail}</p>
                              ))}
                            
                          </div>
                        ))}
                         {Array.isArray(item.SAPData) && item.SAPData.map((SAPHeading, subIndex) => (
                          <div key={subIndex} >
                            <h4 className="fs-6 mb-2" style={{ color: "#FE0000" }}>{SAPHeading.heading}</h4>
                              {Array.isArray(SAPHeading.content) && SAPHeading.content.map((content, contentIndex) => (
                                <div key={contentIndex} className='mb-3'>
                                {typeof content === 'string' ? (
                                  <p>{content}</p>
                                ) : (
                                  <>
                                  {Array.isArray(content.SAPSubData) && content.SAPSubData.map((sap, SAPIndex) => (
                                    <div key={SAPIndex} className='p-1'>
                                      <div style={{ color: "#FE0000" }}>
                                        {sap.heading}
                                        <span className='text-black fs-6'> : {sap.content}</span>
                                      </div>
                                    </div>
                                  ))}
                                  </>
                                )}
                                </div>
                              ))}

                            
                          </div>
                        ))}
                      </>

                    )}

                  </div>
                ))
              ) : (
                <p>{content}</p>
              )}

              <Link to={cardlink} className="text-decoration-none">
                <span className='text-primary'>{more}</span>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ToggleableCard;
