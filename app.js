function show() {
  let Username = document.querySelector("#user").value;
  let Email = document.querySelector("#e").value;
  alert(`Thanks! ${Username} We will send ${Email} your login link :) `);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
