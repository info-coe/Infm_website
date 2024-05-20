import React from 'react';
import { Card } from 'react-bootstrap';

function RoundedImageCard({ title, description, icon }) {
  const styles = {
    card: {
      width: '300px',
      height: 'auto',
      background: '#030250',
      borderRadius: '10px',
      position: 'relative',
    },
    circle: {
      width: '100px',
      height: '100px',
      zIndex: '1',
      background: '#0f62fe',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    content: {
      marginTop: '80px',
      color: 'white'
    },
    iconImage: {
      fontSize: '34px',
      color: '#fff',
      top: '25%',
      left: '25%',
      right: '25%',
      bottom: '25%'
    }
  };

  return (
    <Card className="position-relative" style={styles.card}>
      <Card.Body className="text-center">
        <div >
          <div
            className="rounded-circle overflow-hidden position-absolute top-0 start-50 translate-middle"style={styles.circle}
          >
            <span className="iconImage" style={styles.iconImage}>
              <i className={icon}></i>
            </span>
          </div>
        </div>
        <div style={styles.content}>
          <Card.Title><h5>{title}</h5></Card.Title>
          <Card.Text className='mt-3'><p>{description}</p></Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RoundedImageCard;
