function showHighGrades() {
const highgrades = JSON.parse(window.localStorage.getItem("highgrades")) || [];

highgrades.sort(function(a, b) {
    return b.grade - a.grade;
  });

  highgrades.forEach(function(grade) {
    const liTag = document.createElement("li");
    liTag.textContent = grade.signature + " - " + grade.grade;

    const olEl = document.getElementById("highgrades");
    olEl.appendChild(liTag);
  });
}

function clearHighgrades() {
    window.localStorage.removeItem("highgrades");
    window.location.reload();
  }
  document.getElementById("clear").onclick = clearHighgrades;

showHighGrades();

