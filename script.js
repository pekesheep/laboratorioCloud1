function result() {
  const name = document.getElementById("full-name").value;
  const age = document.getElementById("age-input").value;
  if (name !== "" || age !== "") {
    document.getElementById(
      "result-text"
    ).innerHTML = `Hola ${age}, tienes ${name.toUpperCase()} años!`;
  }
}
