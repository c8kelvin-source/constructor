function fetchFakeAPI() {
  return new Promise((resolve, reject) => {
    console.log("Đang tải dữ liệu...");

    setTimeout(() => {
      const success = Math.random() > 0.3; 

      if (success) {
        resolve({ message: "Tải dữ liệu thành công!", data: [1, 2, 3] });
      } else {
        reject("Lỗi: Không thể tải dữ liệu từ API!");
      }
    }, 1500);
  });
}
fetchFakeAPI()
  .then(result => {
    console.log("KẾT QUẢ:", result);
  })
  .catch(error => {
    console.log("LỖI:", error);
  });

