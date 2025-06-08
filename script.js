const lastName = sessionStorage.getItem('lastName');
const dob = sessionStorage.getItem('dob');

/**if (!lastName || !dob) {
  // No session data found, redirect to login
  window.location.href = "login.html";
} else {
  console.log("Logged in as:", lastName, dob);
}