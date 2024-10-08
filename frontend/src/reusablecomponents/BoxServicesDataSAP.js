const BoxServicesDataSAP = ({ allservices ,textColor,textsize,textcenter,icon}) => {
    const styles = {
        box: {
            padding: "20px 10px",
            boxSizing: "border-box",
            color: "#000",
            borderRadius: "10px",
            backgroundColor: "#fff",
            border: "1px solid #eee",
            // marginBottom: "30px",
            borderBottom: "8px solid #FE0000",
        //    margin:"15px",
            width: window.innerWidth <= 575.98 ? '100%' : '210px',
            minHeight:'450px',
            height: 'auto'
        },
        heading: {
            textAlign: 'center',
            color:"#FE0000",
            height:"40px"
        },

        Mainhead :{
            color:textColor,
            textAlign:textcenter,
            marginBottom:'30px',
            fontSize:textsize
        }
    };

    return (
        <>
            <div className="container mt-3">
                <h1 style={styles.Mainhead}>{allservices[0].Mainhead} <span style={{color:"#FE0000"}}>{allservices[0].SubHeading}</span></h1>
                <div className="d-flex justify-content-center flex-wrap gap-4">
                    {allservices.map((service, index) => (
                        <div
                            key={index}
                            className={` mt-3`}
                        >
                            <div style={styles.box}>
                            <h6 className="text-primary pb-3 text-center">{service.Subhead2}</h6>
                                <h6 style={styles.heading} className="pb-3">{service.Subhead}</h6>
                                <div>
                                    {service.Content.map((paragraph, idx) => (
                                        <p key={idx} style={styles.paragraph}><span className="me-2"><i className={icon}/></span>{paragraph}</p> 
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BoxServicesDataSAP;
