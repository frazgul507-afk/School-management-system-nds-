function addStudent(){
  let name = document.getElementById("name").value;
  let cls = document.getElementById("cls").value;
  let fee = document.getElementById("fee").value;

  if(!name || !cls || !fee){
    alert("Fill all fields");
    return;
  }

  let student = {
    name,
    cls,
    fee
  };

  let data = JSON.parse(localStorage.getItem("students")) || [];
  data.push(student);
  localStorage.setItem("students", JSON.stringify(data));

  alert("Student Added ✔");
}
