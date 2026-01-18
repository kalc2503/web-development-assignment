function showAlert() {
  alert("This is an interactive professional website.");
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message");

  if (name === "" || email === "") {
    msg.style.color = "red";
    msg.innerText = "All fields are required.";
  } else {
    msg.style.color = "green";
    msg.innerText = "Validation successful.";
  }
}

function openTab(topic) {
  const content = {
    tab1: "HTML is used for structure.",
    tab2: "CSS is used for styling.",
    tab3: "JavaScript adds interactivity."
  };

  document.getElementById("tabContent").innerText = content[topic];
}
