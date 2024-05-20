import React from 'react';

function RoundedImageCard({ title, description, icon }) {
  const styles = {
    card: {
      width: '300px',
      height: 'auto',
      background: '#030250',
      borderRadius: '10px',
      position: 'relative',
      padding: '20px'
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
      top: '0%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    content: {
      marginTop: '60px',
      color: 'white'
    },
    iconImage: {
      fontSize: '34px',
      color: '#fff'
    }
  };

  return (
    <div className="position-relative" style={styles.card}>
      <div className="text-center">
        <div 
          className="rounded-circle "
          style={styles.circle}
        >
         <span className="iconImage" style={styles.iconImage}>
            <i className={icon}></i>
          </span>
        </div>
      </div>
      <div style={styles.content} className="text-center">
        <h5 className="text-white">{title}</h5>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
}

export default RoundedImageCard;
