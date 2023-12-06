function subscribe() {
  const emailValue = document.getElementById("email");
  const errorElement = document.getElementById("error");

  if (!emailValue.checkValidity() || emailValue.value === "") {
    errorElement.innerHTML = "Please provide a valid email address";
  } else {
    errorElement.innerHTML = "";
    alert(`Thank you for subscribing to our newsletter!`);
  }
}
