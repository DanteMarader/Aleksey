function save(){
    const formElements = ['nameId', 'surname', 'numberphone'];
    formElements.forEach((element) => {
      const value = document.getElementById(element).value;
      localStorage.setItem(element, value);
    });
  }

  function load(){
    const formElements = ['nameId', 'surname', 'numberphone'];
    formElements.forEach((element) => {
      const value = localStorage.getItem(element);
      document.getElementById(element).value = value;
    });
  }



// function save(){
//     let nameInput = document.getElementById('nameId');
//     let nameValue = nameInput.value;
//     localStorage.setItem('name', nameValue);

//     let surnameInput = document.getElementById('surname');
//     let surnameValue = surnameInput.value;
//     localStorage.setItem('surname',surnameValue)

//     let phoneInput = document.getElementById('numberphone');
//     let phoneValue = phoneInput.value;
//     localStorage.setItem('numberphone', phoneValue)
// }
// function load(){
//     let nameValue = localStorage.getItem('name');
//     let surnameValue = localStorage.getItem('surname');
//     let phoneValue = localStorage.getItem('numberphone');

//     document.getElementById('nameId').value = nameValue;
//     document.getElementById('surname').value = surnameValue;
//     document.getElementById('numberphone').value = phoneValue;
// }