let btn = document.querySelector("#btn");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      const a = data.value;
      p.innerText = a;
      body.append(div);
      div.append(p);
    });
});
