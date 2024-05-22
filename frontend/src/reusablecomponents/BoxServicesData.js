const BoxServicesData = ({ allservices }) => {
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
            height: '220px'
        },
        heading: {
            fontSize: "19px",
            textAlign: 'center'
        },
        content: {
            padding: '15px 0px',
            whiteSpace: 'pre-wrap',
            margin: 0 // Remove any default margin
        }
    };

    return (
        <>
            <div className="container mt-3">
                <h1 className="text-primary text-center mb-4">{allservices[0].Mainheading}</h1>
                <div className="row justify-content-center">
                    {allservices.slice(0,5).map((service, index) => (
                        <div
                            key={index}
                            className={`col-md-4 mb-4`}
                        >
                            <div style={styles.box}>
                                <h2 style={styles.heading}>{service.sheading}</h2>
                                <p style={styles.content}>{service.scontent}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BoxServicesData;