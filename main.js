console.log(data);

let divContainer = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
  //   console.log(data[i]);
  let divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.classList.add("style", "width:18rem");

  let img = document.createElement("img");
  img.setAttribute("src", data[i].image);
  img.setAttribute("alt", "product");
  img.classList.add("card-img-top");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let h5 = document.createElement("h5");
  cardBody.classList.add("card-title");

  let p = document.createElement("p");
  cardBody.classList.add("card-text");

  h5.innerHTML = data[i].title;
  p.innerHTML = data[i].price;

  cardBody.appendChild(p);
  cardBody.appendChild(h5);
  divCard.appendChild(cardBody);
  divCard.appendChild(img);
  divContainer.appendChild(divCard);
}
