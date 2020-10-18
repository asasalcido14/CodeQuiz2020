function showHighGrades() {
const highgrades = JSON.parse(window.localStorage.getItem("highgrades")) || [];

highgrades.sort(function(a, b) {
    return b.score - a.score;
  });

  highgrades.forEach(function(score) {
    const liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

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

