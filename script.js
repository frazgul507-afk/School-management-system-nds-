import { useState, useEffect } from "react";

export default function App() {

  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    father: "",
    mobile: "",
    className: "",
    fee: "",
    paid: ""
  });

  useEffect(() => {
    const data = localStorage.getItem("students");
    if (data) setStudents(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addStudent() {
    setStudents([...students, form]);

    setForm({
      name: "",
      father: "",
      mobile: "",
      className: "",
      fee: "",
      paid: ""
    });
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>

      <h1>🏫 National Discipline Secondary School Saraich</h1>

      <h2>Add Student</h2>

      <input placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Father Name"
        value={form.father}
        onChange={e => setForm({ ...form, father: e.target.value })} />

      <input placeholder="Mobile"
        value={form.mobile}
        onChange={e => setForm({ ...form, mobile: e.target.value })} />

      <input placeholder="Class"
        value={form.className}
        onChange={e => setForm({ ...form, className: e.target.value })} />

      <input placeholder="Fee"
        value={form.fee}
        onChange={e => setForm({ ...form, fee: e.target.value })} />

      <input placeholder="Paid Fee"
        value={form.paid}
        onChange={e => setForm({ ...form, paid: e.target.value })} />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      <h2>Student List</h2>

      {students.map((s, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: 10, margin: 5 }}>
          <b>{s.name}</b><br />
          Father: {s.father}<br />
          Class: {s.className}<br />
          Mobile: {s.mobile}<br />
          Fee: {s.fee} | Paid: {s.paid}
        </div>
      ))}

    </div>
  );
}
