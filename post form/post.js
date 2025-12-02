document.getElementById("postForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").textContent =
        JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.log("Lỗi khi gửi dữ liệu:", error);
    });
});
