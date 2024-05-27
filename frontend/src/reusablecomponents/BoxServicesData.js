const BoxServicesData = ({ allservices ,textColor}) => {
    console.log(allservices)
    const styles = {
        box: {
            padding: "30px 10px",
            boxSizing: "border-box",
            color: "#000",
            borderRadius: "10px",
            backgroundColor: "#fff",
            textAlign: "center",
            border: "1px solid #eee",
            marginBottom: "30px",
            borderBottom: "8px solid #FE0000",
            height: 'auto'
        },
        heading: {
            fontSize: "19px",
            textAlign: 'center',
            color:"#FE0000"
        },
        content: {
            textAlign: "justify"
        },
        paragraph: {
            marginBottom: "1em" // Add spacing between paragraphs
        },
        Mainhead :{
            color:textColor,
            textAlign:"center",
            marginBottom:'30px'
        }
    };

    return (
        <>
            <div className="container mt-3">
                <h1 style={styles.Mainhead}>{allservices[0].Mainhead}</h1>
                <div className="row justify-content-center">
                    {allservices.map((service, index) => (
                        <div
                            key={index}
                            className={`col-md-4 mb-4`}
                        >
                            <div style={styles.box}>
                                <h2 style={styles.heading} className="pb-3">{service.Subhead}</h2>
                                <div  style={styles.content}>
                                    {service.Content.map((paragraph, idx) => (
                                        <p key={idx} style={styles.paragraph}>{paragraph}</p> 
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

export default BoxServicesData;
