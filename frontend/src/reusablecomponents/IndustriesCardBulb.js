import React from 'react';

const CardBulb = ({solutionofferingData}) => {
    const styles = `
    .services-tab {
        padding: 20px;
        border: 5px solid #0f62fe;
        position: relative;
        min-width: 290px;
        width:auto;
        overflow: hidden;
        transition: color 0.5s; 
        margin: 30px auto; 
    }
   
    .services-tab:hover {
        color: #0f62fe;
    }

    .services-tab:hover .fa-icon-image {
        transform: scale(1.3);
        transition: 1s;
        color:#0f62fe;
    }   

    .fa-icon-image {
        transform: scale(1);
        color:#ec5626;
        transition: 1s;
    }

    .cornerbox {
        background: linear-gradient(45deg, bisque 50%, #0f62fe 50%);
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
        transform: scale(0);
        transform-origin: top right;
        transition: transform 0.5s;
    }

    .services-tab:hover .cornerbox {
        transform: scale(1);
    }

    .services-tab:not(:hover) .cornerbox {
        transform: scale(0);
    }
    `;

    return (
        <>
            <style>{styles}</style>
            {solutionofferingData.map((item,index)=>(
                <div className="services-tab">
                    <div className="cornerbox"></div>
                        <div className="folded-corner">
                            <div className="text">
                                {/* <i className="fa fa-lightbulb fa-5x fa-icon-image"></i> */}
                                <i className={item.bulb}></i>
                                <p className="item-title">
                                    <h4 className="solu-titlehd mt-3">{item.solutionHead}</h4>
                                </p>
                                <ul className='list-unstyled'>
                                    {item.list.map((curr,i)=>(
                                        <li key={i}><i className={item.icon}></i>{" "}{curr}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
            ))}
           
        </>
    );
};

export default CardBulb;
