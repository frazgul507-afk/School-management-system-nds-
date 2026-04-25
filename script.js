let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
  let name = document.getElementById("name").value;
  let cls = document.getElementById("cls").value;
  let fee = document.getElementById("fee").value;

  if (!name || !cls || !fee) {
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
  alert("Student Added ✔");
  location.reload();
}
