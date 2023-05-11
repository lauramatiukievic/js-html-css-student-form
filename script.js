const studentForm = document.getElementById("student-form");

let students = [
  {
    studentName: `Laura`,
    lastName: `Matiuk`,
    studentAge: "24",
    studentNumber: 8766767754,
    studentEmail: `ermelinda990@gmail.com`,
    studentSkill: 6,
    studentGroup: `Feu7`,
    studentProgramingLanguage: ["Java", "Php", "Javascript"],
  },
  {
    studentName: `Arnas`,
    lastName: `Mur`,
    studentAge: "11",
    studentNumber: 876673234,
    studentEmail: `arnasmur9@gmail.com`,
    studentSkill: 6,
    studentGroup: `Feu7`,
    studentProgramingLanguage: ["Php"],
  },
  {
    studentName: `Ricardas`,
    lastName: `Matiuk`,
    studentAge: "23",
    studentNumber: 8766767754,
    studentEmail: `ricardmatiuk@gmail.com`,
    studentSkill: 6,
    studentGroup: `Feu7`,
    studentProgramingLanguage: ["Java", "Php", "Javascript"],
  },
  {
    studentName: `Martynas`,
    lastName: `Mur`,
    studentAge: "7",
    studentNumber: 8766767754,
    studentEmail: `martynmur1@gmail.com`,
    studentSkill: 7,
    studentGroup: `Feu7`,
    studentProgramingLanguage: ["Java"],
  },
  {
    studentName: `Arturas`,
    lastName: `Matiuk`,
    studentAge: "24",
    studentNumber: 8766767754,
    studentEmail: `arturmatiuk@gmail.com`,
    studentSkill: 6,
    studentGroup: `Feu7`,
    studentProgramingLanguage: ["Java", "Php"],
  },
];
loadStudents();

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputErrorMessages = document.querySelectorAll(`.input-error-message`);
  inputErrorMessages.forEach((errorMes) => errorMes.remove());

  let isFormValid = validateStudent();
  if (!isFormValid) {
    return;
  }

  let studentName = event.target.name.value;
  let lastName = event.target.surname.value;
  let studentAge = event.target.age.value;
  let studentNumber = event.target.phoneNumber.value;
  let studentEmail = event.target.email.value;
  let studentSkill = event.target.score.value;
  let studentGroup = event.target.group.value;
  studentContent(studentName, lastName, studentAge, studentNumber, studentEmail, studentSkill, studentGroup);

  event.target.reset();

  //   ŠEŠTA UŽDUOTIS:
  // 1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
  // 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.
});

function loadStudents() {
  students.forEach((student) => {
    studentContent(student.studentName, student.lastName, student.studentAge, student.studentNumber, student.studentEmail, student.studentSkill, student.group);
  });
}

function validateStudent() {
  const requiredFields = document.querySelectorAll(`input:required`);
  let isFormValid = true;
  requiredFields.forEach((field) => {
    if (!field.value) {
      setRedStyleForField(field, `Required field`);
      isFormValid = false;
    } else if (field.name === "name") {
      if (field.value.length < 3) {
        setRedStyleForField(field, `Vardas turi buti nemazesnis nei 3 simboliai`);
        isFormValid = false;
      }
      return;
    } else if (field.name === "surname") {
      if (field.value.length < 3) {
        setRedStyleForField(field, `Pavarde turi buti nemazesne nei 3 simboliai`);
        isFormValid = false;
      }
      return;
    } else if (field.name === "age") {
      if (field.value < 0) {
        setRedStyleForField(field, `Amzius negali buti neigiamas skaicius`);
        isFormValid = false;
      } else if (field.value >= 120) {
        setRedStyleForField(field, `Amzius negali buti didesnis uz 120`);
        isFormValid = false;
      }
      return;
    } else if (field.name === "phoneNumber") {
      if (field.value.length < 9 || field.value.length > 12) {
        setRedStyleForField(field, `Įvestas telefono numeris yra neteisingas`);
        isFormValid = false;
      }
      return;
    } else if (field.name === "email") {
      if (field.value < 8 || !field.value.includes(`@`) || !field.value.includes(`.`)) {
        setRedStyleForField(field, `Įvestas elektroninis pastas yra neteisingas`);
        isFormValid = false;
      }
    }
  });
  return isFormValid;
}

function setRedStyleForField(requiredField, text) {
  console.log(`neteisingai`);
  requiredField.style.border = `2px solid red`;

  let errorMes = document.createElement(`span`);
  errorMes.classList.add(`input-error-message`);
  errorMes.style.color = `red`;
  errorMes.textContent = text;

  requiredField.after(errorMes);

  return;
}

function hideInformation(hidenInfoFor) {
  return setTimeout(() => {
    hidenInfoFor.remove();
  }, 5000);
}

function studentContent(studentName, lastName, studentAge, studentNumber, studentEmail, studentSkill, studentGroup) {
  let studentList = document.getElementById("student-list");

  let studentItem = document.createElement("div");

  let studentContacts = document.createElement("h2");
  studentContacts.innerText = `Student information`;

  let name = document.createElement("p");
  name.innerText = `Name: ${studentName}`;
  let surname = document.createElement("p");
  surname.innerText = `Surname: ${lastName}`;

  let age = document.createElement("p");
  age.innerText = `Age: ${studentAge}`;

  let contactOl = document.createElement("ul");

  let aboutContact = document.createElement("p");
  aboutContact.innerText = `Student contact:`;
  let number = document.createElement("li");
  number.innerText = `Phone: *********`;
  let email = document.createElement("li");
  email.innerText = `Email: *********`;

  let skills = document.createElement("p");
  skills.innerText = `It skills: ${studentSkill}`;

  let groupName = document.createElement("p");
  groupName.innerText = `Group name: ${studentGroup}`;

  let addProgramingLanguage = document.querySelectorAll(`[name='language']:checked`);
  let olElement = document.createElement("ul");

  let aboutPrograming = document.createElement("p");
  aboutPrograming.innerText = `Student contact:`;

  addProgramingLanguage.forEach((language) => {
    let liElement = document.createElement("li");
    liElement.innerText = language.value;
    olElement.append(liElement);
  });

  let buttonshow = document.createElement("button");
  let showContact = `Rodyti asmens duomenis`;
  buttonshow.innerText = showContact;

  buttonshow.addEventListener(`click`, () => {
    if (buttonshow.innerText == showContact) {
      buttonshow.innerText = `Paslepti asmens duomenis`;
      number.innerText = `Phone: ${studentNumber}`;
      email.innerText = `Email: ${studentEmail}`;
    } else {
      buttonshow.innerText = showContact;
      number.innerText = `Phone: *********`;
      email.innerText = `Email: *********`;
    }
  });

  let hideInfo = document.createElement("span");
  hideInfo.innerText = `Sukurtas studentas ${studentName} ${lastName}`;
  hideInformation(hideInfo);

  let deleteStudent = document.createElement("button");
  deleteStudent.innerHTML = `Istrinti studenta`;
  deleteStudent.addEventListener("click", () => {
    studentItem.remove();
    let deletedStud = document.createElement("span");
    deletedStud.innerText = `Istrintas studentas ${studentName} ${lastName}`;
    studentList.prepend(deletedStud);
    hideInformation(deletedStud);
  });

  studentItem.prepend(studentContacts, hideInfo, name, surname, age, aboutContact, contactOl, skills, groupName, aboutPrograming, olElement, buttonshow, deleteStudent);
  contactOl.append(number, email);
  studentList.prepend(studentItem);
}

// PENKTA UŽDUOTIS (formos validacija naudojant JavaScript):
// 1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
//     2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
//     2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
//         2.2.1. Turi būti apvestas raudonu rėmeliu.
//         2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".

// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

// 7. Range reikšmės atvaizdavimas naujame elemente.

// 6. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.

// 4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybę rinktis iš dominančių programavimo kalbų.
// 5. Dominančias programavimo kalbas atvaizduoti „student-item" elemente.

// ANTRA DALIS:
// 1. Sukurti div elementą, kuris turės id „students-list".
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

// 1. Vietoje el. pašto rodyti tik žvaigždutes „****".
// 2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
// 3. Paspaudus šį mygtuką:
//     3.1. Parodyti to studento el. paštą.
//     3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
//     4.1. Paslėpti asmens el. paštą.
//     4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".
