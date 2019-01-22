$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    let thing1 = $("#thing1").val();
    let thing2 = $("#thing2").val();
    let thing3 = $("#thing3").val();

    let arr = [thing1 , thing2 , thing3];

    arr.forEach(function (thing) {
      alert(thing);
    });
  });
});
