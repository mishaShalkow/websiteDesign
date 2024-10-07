const form = document.getElementById("myForms");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const message = document.getElementById("message").value;

  const data = {
    name: name,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    message: message,
  };

  localStorage.setItem("name", name);
  localStorage.setItem("lastname", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("message", message);
  const jsondata = JSON.stringify(data);

  const fileName = "data.json";
  const file = new Blob([jsondata], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = fileName;
  link.click();

  /*   console.log(jsondata);
   */
  form.reset();
  alert("ваш запрос успешно отправлен");
});
