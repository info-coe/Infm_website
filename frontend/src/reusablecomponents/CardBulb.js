import React from 'react';

const CardBulb = () => {
    const styles=`
    .services-tab {
        padding: 20px;
        border:5px solid blue;
    }
   
    .services-tab:hover{
        color:blue;
    }
    .services-tab:hover .fa-icon-image{
        transform: scale(1.3);
        transition:1s;
    }
    .fa-icon-image{
        transform: scale(1);
        transition:1s;
    }
    
   
    `
    return (
        <>
        <style>{styles}</style>
                    <div className="services-tab" style={{width:"290px"}}>
                        <div className="folded-corner">
                            <div className="text">
                                <i className="fa fa-lightbulb fa-5x fa-icon-image"></i>
                                <p className="item-title">
                                    <h4 className="solu-titlehd mt-3">Solution Offerings</h4>
                                </p>
                                <ul>
                                    <li><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Our Financial Focuses</li>
                                    <li><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Retail Banking</li>
                                    <li><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Investment Management</li>
                                    <li><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Capital Markets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default CardBulb;