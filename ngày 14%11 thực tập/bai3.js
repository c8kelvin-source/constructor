const student = {
    name: "Nguyen Van Khanh",
    age: 21,
    score: 10
};

function showStudentInfo(sv) {
    const info = `
Thong Tin Sinh Vien 
- Ten: ${sv.name}
- Tuoi: ${sv.age}
- Diem: ${sv.score}
===============================`;
    
    console.log(info);
}

showStudentInfo(student);
