const pages = [
  { label: "home", value: "home" },
  { label: "profile", value: "profile" },
  { label: "experience", value: "experience" },
  { label: "exducation", value: "exducation" },
  { label: "projects", value: "projects" },
  { label: "skills", value: "skills" },
  { label: "contact", value: "contact" },
];

const logo = document.getElementsByClassName("logo")[0];
const input = document.getElementById("path_input");

logo.onclick = () => {
  input.focus();
  input.select();
}
