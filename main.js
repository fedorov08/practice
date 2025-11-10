let students=[];
document.getElementById("student-form").addEventListener("submit", (event) => {
  event.preventDefault(); 
  
  const student = {
    name: document.getElementById("name").value.trim(),
    surname: document.getElementById("surname").value.trim(),
    patronymic: document.getElementById("patronymic").value.trim(),
    birthDate: document.getElementById("birthdate").valueAsDate,
    startYear: parseInt(document.getElementById("startYear").value),
    faculty: document.getElementById("faculty").value.trim()
  };
  if (!student.name ||!student.surname || !student.birthDate || !student.startYear || !student.faculty){
    alert("Проверьте заполнение всех обязатеьных полей: Имя, Фамилия, Дата рождения, Год начала обучения, Факультет")
    return;
  }
  students.push(student);
  console.log("Новый студент:", student);
  console.log("Список студентов:", students);
  event.target.reset();
});