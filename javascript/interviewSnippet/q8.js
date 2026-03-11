var a = 10;

(function () {
  console.log(a);
  var a = 20;

  function inner() {
    console.log(a);
  }

  inner();
})();
