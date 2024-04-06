const loginFormRef = document.querySelector(".login-form");

const handleLoginFormSubmit = (event) => {
  event.preventDefault();

  const {
    target: { elements },
  } = event;

  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log({ email: email, password: password });

  event.target.reset();
};

loginFormRef.addEventListener("submit", handleLoginFormSubmit);
