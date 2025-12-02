document.getElementById("loadBtn").addEventListener("click", loadUsers);

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("userList");
      list.innerHTML = ""; 

      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.log("Lỗi khi tải dữ liệu:", error);
    });
}
