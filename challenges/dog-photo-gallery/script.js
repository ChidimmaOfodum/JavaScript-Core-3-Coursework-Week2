// # Dog photo gallery

// Let's make a randomized dog photo gallery!

// Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// - Create an `index.html` file that will display your random image
// - Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
// - When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
// - After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
// - Incorporate error handling

// steps to take
/*fetch api and retrieve the url of image 
create a ul element
create an img element
set img src to api content
append img to li
append li to ul
*/

const imgList = document.getElementById("img-list");
const btn = document.getElementById("btn")

const getDataAndDisplay = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let list = document.createElement("li");
      list.setAttribute("id","imgCtn")
      let img = document.createElement("img");
      img.src = data.message;
      imgList.appendChild(list);
      list.appendChild(img);
    })
    .catch(err => console.log(err.message));
};

btn.addEventListener("click", getDataAndDisplay)
