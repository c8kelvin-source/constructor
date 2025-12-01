
function fakeAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; 

      if (success) {
        resolve({ message: "Tải dữ liệu thành công!", data: [10, 20, 30] });
      } else {
        reject("Lỗi: Không thể tải dữ liệu từ API!");
      }
    }, 1200);
  });
}


async function callFakeAPI() {
  const box = document.getElementById("apiResult");
  box.innerText = "Đang tải dữ liệu...";

  try {
    const result = await fakeAPI(); 
    box.innerText = "KẾT QUẢ:\n" + JSON.stringify(result, null, 2);
  } catch (error) {
    box.innerText = "LỖI: " + error;
  }
}


function fakeUserAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Nguyễn Văn A", age: 25 },
        { id: 2, name: "Trần Thị B", age: 30 },
        { id: 3, name: "Lê Văn C", age: 22 }
      ]);
    }, 1500);
  });
}


async function loadUsers() {
  const box = document.getElementById("userResult");
  box.innerText = "Đang tải danh sách người dùng...";

  try {
    const users = await fakeUserAPI();
    const first = users[0];

    box.innerText =
      "Người dùng đầu tiên:\n" +
      `ID: ${first.id}\n` +
      `Tên: ${first.name}\n` +
      `Tuổi: ${first.age}`;
  } catch (error) {
    box.innerText = "LỖI: Không thể tải người dùng!";
  }
}
