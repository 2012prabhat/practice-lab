let x = 5;

function outer() {
  console.log(x);
  let x = 10;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();
