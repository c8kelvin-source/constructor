import { useState } from "react";

function FormInfo() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Tên:", name);
    console.log("Nội dung:", message);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div>
        <label>Nhập tên: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "10px" }}
        />
      </div>

      <div>
        <label>Nội dung: </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ margin: "10px", width: "200px", height: "80px" }}
        ></textarea>
      </div>

      <button type="submit">Gửi</button>
    </form>
  );
}

export default FormInfo;
