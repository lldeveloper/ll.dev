// Hardcoded user list (you can replace with a real backend later)
const users = [
  { lastName: "Admin", dob: "0001-01-01" },
  { lastName: "Smith", dob: "2000-01-01" },
  { lastName: "Lee", dob: "1992-11-20" }
];

function sayHi() {
  alert("Hi there!");
}

function validateLogin(event) {
  event.preventDefault(); // Prevent form submit reload

  const lastName = document.getElementById("lastName").value.trim().toLowerCase();
  const dob = document.getElementById("dob").value;

  const isValid = users.some(
    (user) =>
      user.lastName.toLowerCase() === lastName && user.dob === dob
  );

  if (isValid) {
    alert("Login successful!");
    window.location.href = "clientportal.html";
  } else {
    window.location.href = "invalidcredentials.html";
  }
}
