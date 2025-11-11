let students=[];
document.getElementById("student-form").addEventListener("submit", (event) => {
  event.preventDefault(); 
  resetValidation();
  const student = {
    name: document.getElementById("name").value.trim(),
    surname: document.getElementById("surname").value.trim(),
    patronymic: document.getElementById("patronymic").value.trim(),
    birthDate: document.getElementById("birthdate").valueAsDate,
    startYear: parseInt(document.getElementById("startYear").value),
    faculty: document.getElementById("faculty").value.trim()
  };
  let isValid=true;
  if (!student.name){
    markFieldAsError('name');
    isValid=false;
  }

  if (!student.surname){
    markFieldAsError('surname');
    isValid=false;
  }

  if (!student.startYear || isNaN(student.startYear)){
    markFieldAsError('startYear');
    isValid=false;
  }
  if (!student.faculty){
    markFieldAsError('faculty');
    isValid=false;
  }

  if(!isValid){
    alert("Проверьте заполнение всех обязатеьных полей: Имя, Фамилия, Год начала обучения, Факультет")
    return;
  }
  students.push(student);
  console.log("Новый студент:", student);
  console.log("Список студентов:", students);
  event.target.reset();
  resetValidation();
});

function markFieldAsError(fieldId){
    const label= document.querySelector(`label[for="${fieldId}"]`);
    if (label){
        label.classList.add('error')
    }
}
function resetValidation(){
    const errorLabels = document.querySelectorAll('label.error');
    errorLabels.forEach(label => {
        label.classList.remove('error');
    });
}
