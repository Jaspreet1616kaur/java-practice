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

  divCard.appendChild(img);
  divContainer.appendChild(divCard);
}
