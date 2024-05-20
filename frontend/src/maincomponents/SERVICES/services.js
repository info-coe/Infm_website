import React from 'react';
import RoundedImageCard from '../../reusablecomponents/RoundedImageCard';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
  const data = props.product;
  const cardData = data.servicesData
  console.log(cardData)
//   console.log(heading)
    // Array of objects containing title and description for each card
    // const cardData = [
    //     { title: data.serviceTitle1, description: data.serviceDes1,icon:"fa fa-users" },
    //     { title: data.serviceTitle2, description: data.serviceDes2 ,icon:"fa fa-lock"},
    //     { title: data.serviceTitle3, description: data.serviceDes3 ,icon:"fa fa-cogs"},
    //     { title: data.serviceTitle4, description: data.serviceDes4 ,icon:"fa fa-line-chart"},
    //     { title: data.serviceTitle5, description: data.serviceDes5 ,icon:"fa fa-cloud"},
    //     { title: data.serviceTitle6, description: data.serviceDes6 ,icon:"fa fa-database"},
    //     { title: data.serviceTitle7, description: data.serviceDes7 ,icon:"fa-brands fa-aws"},
    //     { title: data.serviceTitle8, description: data.serviceDes8 ,icon:"fa-brands fa-microsoft"},
    //     { title: data.serviceTitle9, description: data.serviceDes9 ,icon:"fa fa-users"},
    //     { title: data.serviceTitle10, description: data.serviceDes10 ,icon:"fa fa-users"},
    //     { title: data.serviceTitle11, description: data.serviceDes11 ,icon:"fa fa-users"},
    //     { title: data.serviceTitle12, description: data.serviceDes12 ,icon:"fa fa-users"}
    // ];

    return (
        <>
        <div>
            
        <img src={data.serviceMainimage.url} width="100%" alt='Main Service Image' className="mainimg img-fluid d-none d-md-block"/>
        <img src={data.serviceSubimage.url} alt='no-display' className="sunimg img-fluid d-md-none" />

            <h1 className='text-center'>{data.serviceHeading}</h1>
        <Container>
            <Row className="justify-content-center" style={{marginTop:'90px'}}>
                {cardData.map((data, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center" style={{marginBottom:'80px'}}>
                        <RoundedImageCard
                           title={data[`t${index + 1}`]} // Use template literal to access dynamic property names
                           description={data[`Des${index + 1}`]} // Similarly, for description
                           icon={data[`icon${index + 1}`]} //
                        />
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
        </>
    );
};

export default Services;
