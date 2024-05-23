
export default function Card(props) {
//   console.log(props);
  return (
    <>
      <div className="mt-3 mb-3 customCard">
        <div className="card" style={{ width: "17rem", height: "18rem" }}>
         
          <div className="card-body">
            <h5 className="card-title text-center text-danger">{props.title}</h5>
            <p className="card-text mt-4">{props.description}</p>
          </div>
        </div>
        </div>
    </>
  );
}
