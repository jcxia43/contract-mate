const item = document.createElement("li");
item.className = "nav-item";
const link = document.createElement("a");
link.href = window.location.href.replace(/\.\w+(\/)/, ".deth.net/");
link.className = "nav-link";
link.target = "_blank";
link.text = "View in VS Code";
item.appendChild(link);
document
  .querySelector("#contracts")
  .querySelector("#nav_subtabs")
  .appendChild(item);
