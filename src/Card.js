function Card(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px"
    }}>
      <h3>{props.name}</h3>
      <p>Tuổi: {props.age}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
