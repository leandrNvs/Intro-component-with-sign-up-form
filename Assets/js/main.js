const form = document.querySelector(".form");

const MESSAGES = {
  fname: "First name cannot be empty",
  lname: "Last name cannot be empty",
  email: "Looks like this is not an email",
  password: "Password cannot be empty",
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  resetValidation();

  const inputs = this.querySelectorAll("input");
  const error = {
    err: 0,
    message: "",
    field: "",
  };

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      error.err = 1;
      error.message = MESSAGES[inputs[i].name];
      error.field = inputs[i].name;
      break;
    }
  }
  
  if(!/^[a-z]*@[a-z]*\.[a-z]*$/.test(this.email.value.toLowerCase())) {
    error.err = 1;
    error.message = MESSAGES.email;
    error.filed = 'email'
  }

  if (error.err === 1) {
    const field = document.querySelector(`input[name='${error.field}']`);
    const helper = field.nextElementSibling;

    field.classList.add("error");
    helper.innerHTML = error.message;

    return;
  }

  alert("success...");
});

function resetValidation() {
  document
    .querySelectorAll(".helper-text")
    .forEach((item) => (item.innerHTML = ""));

  document
    .querySelectorAll("input")
    .forEach((item) => item.classList.remove("error"));
}
