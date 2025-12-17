import { useState } from "react";


type Student = {
id: number;
name: string;
};


function StudentManager() {
const [students, setStudents] = useState<Student[]>([]);
const [name, setName] = useState<string>("");



const addStudent = () => {
if (name.trim() === "") return;


const newStudent: Student = {
id: Date.now(),
name: name,
};


setStudents([...students, newStudent]);
setName("");
};



const removeStudent = (id: number) => {
setStudents(students.filter(student => student.id !== id));
};


return (
<div>
<h2>Danh sách sinh viên</h2>


<input
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Nhập tên sinh viên"
/>
<button onClick={addStudent}>Thêm</button>


<ul>
{students.map(student => (
<li key={student.id}>
{student.name}
<button onClick={() => removeStudent(student.id)}>Xóa</button>
</li>
))}
</ul>
</div>
);
}


export default StudentManager;