
export default function Card(props) {
//   console.log(props);
  return (
    <>
      <div className="mt-md-3 mb-md-3 customCard">
        <div className="card">
         
          <div className="card-body">
            <h5 className="card-title text-center mt-2" style={{color:"#FE0000"}}>{props.title}</h5>
            <p className="card-text mt-4">{props.description}</p>
          </div>
        </div>
        </div>
    </>
  );
}
