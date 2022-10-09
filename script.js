// java script code for return name  and greeting output.    
$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#sendName").click(function () {
    //console.log($("#fname").val());
    $("#greetingOutput").text("Hello " + $("#fname").val() + $("#lname").val());
  });
});
