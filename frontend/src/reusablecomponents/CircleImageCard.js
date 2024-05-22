import React from 'react';
// import gif1 from './images/g3.gif';

const  CircleImageCard =({ title, icon ,background})=> {
  const styles = {
    card: {
      flex:'1',
      background:background,
      borderRadius: '0px',
    },
    circle: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      margin: '0 auto',
      marginBottom: '15px',
      padding: '6px',
      cursor: 'pointer',
      transition: 'all .4s ease',
      position: 'relative', 
    },
    ripple: {
      position: 'absolute',
      borderRadius: '50%',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      animation: 'ripple 3s infinite',
    },
    image: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      borderRadius: '50%',
      backgroundColor: '#fff',
    },
    content: {
      marginTop: '18px',
      color: 'white',
    },
  };

  return (
    
    <div className="card me-0" style={styles.card}>
    <div className="card-body text-center">
      <div>
        <div style={styles.circle}>
          <div className="ripple-effect" style={styles.ripple}></div>
          <img className="rounded-circle" src={icon} alt="no-display" style={styles.image} />
        </div>
      </div>
      <div style={styles.content}>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </div>
  );
}

export default CircleImageCard;
