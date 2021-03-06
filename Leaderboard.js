window.onload = function() {
  Leaderboard();
};


function compareScores(p1, p2) {

  if (p1.score > p2.score) {
    return -1;
  }

  if (p1.score < p2.score) {
    return 1;
  }

  return 0;

}

function Leaderboard() {
  var session = JSON.parse(localStorage.getItem("session"));
  var content = document.getElementsByClassName('Leaderboard_players')[0];

  session.sort(compareScores);

  for (i = 0; i < session.length; i++) {
    content.innerHTML += "<li>" + "Nimi: " + session[i].name + " | Skoor: " + session[i].score + " | Vigu: " + session[i].misclicks + " | Tase: " + session[i].level + "</li>";
  }
}
