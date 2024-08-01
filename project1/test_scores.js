var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

var addScore = function () {
  var name = $("name").value;
  if (name === "") {
    $("name_error").innerHTML = "invalid input for name";
  } else {
    $("name_error").innerHTML = "";
    console.log(name);
  }

  var score = $("score").value;

  var score = $("score").value;
  if (score === "") {
    $("score_error").innerHTML = "invalid input for score";
  } else {
    $("score_error").innerHTML = "";
  }
  names[names.length] = name;
  scores[scores.length] = parseFloat(score);
};

var displayScores = function () {
  var html_str = "<h2>Scores</h2>";
  var table_head = "<tr> <th> Name </th><th>Score</th></tr>";
  var table_content = "";
  html_str += table_head;
  for (var i = 0; i < scores.length; i++) {
    table_content += "<tr>";
    table_content += "<td>" + names[i] + "</td>";
    table_content += "<td>" + scores[i] + "</td>";
    table_content += "</tr>";
  }
  html_str += table_content;
  $("scores_table").innerHTML = html_str;
};

var displayResults = function () {
  var total = 0;
  var highest = -1;
  var highest_index = 0;
  var average = 0;

  if (scores.length != 0) {
    for (var i = 0; i < scores.length; i++) {
      total += scores[i];
      if (scores[i] > highest) {
        highest = scores[i];
        highest_index = i;
      }
    }
    average = parseFloat(total / scores.length);
    var highest_name = names[highest_index];

    var html_str =
      "<h1>Results</h1><p>average score = " +
      average +
      " </p><p> high score = " +
      highest_name +
      " with a score of " +
      highest +
      "</p>";
    $("results").innerHTML = html_str;
  }
};

window.onload = function () {
  $("add").onclick = addScore;
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
};
