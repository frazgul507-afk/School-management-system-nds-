let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
  let name = document.querySelector("input[placeholder='Student Name']").value;
  let cls = document.querySelector("input[placeholder='Class']").value;
  let fee = document.querySelector("input[placeholder='Monthly Fee']").value;

  if(name === "" || cls === "" || fee === "") {
    alert("Please fill all fields");
    return;
  }

  students.push({
    name: name,
    cls: cls,
    fee: parseInt(fee),
    paid: 0
  });

  saveData();
  alert("Student Added Successfully ✔");
  location.reload();
}
