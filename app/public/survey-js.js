var config = {
  '.chosen-select': {},
  '.chosen-select-deselect': { allow_single_deselect: true },
  '.chosen-select-no-single': { disable_search_threshold: 10 },
  '.chosen-select-no-results': { no_results_text: 'No data found.' },
  '.chosen-select-width': { width: "80%" }
}
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

for (var selector in config) {
  $(selector).chosen(config[selector]);
}
// What occurs when submit is clicked
$("#submit").on("click", function () {
  // Checks user inputs
  function checkAnswers() {
    var correct = true;
    $(".form-control").each(function () {
      if ($(this).val() === "") {
        correct = false;
      }
    });
    $(".chosen-select").each(function () {
      if ($(this).val() === "") {
        correct = false;
      }
    });
    return correct;
  }
  // If all required fields are filled
  if (checkAnswers()) {
    // Create an object for the user"s data
    var findFriend = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };
    // Get URL of the website
    var currentURL = window.location.origin;
    // AJAX post the data to the friends API.
    $.post(currentURL + "/api/friends", findFriend, function(data) {
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#matchName").text(data.name);
      $("#matchImg").attr("src", data.photo);
      // Show the modal with the best match
      $("#resultsModal").modal("toggle");
    });
  }
  else {
    alert("Please fill out everything first.");
  }
  return false;
});



