
const ctn = document.querySelector(".imgDiv");
const errorText = document.getElementById("error-text");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`Something went wrong`)
    }
      return response.json();

  })
  .then((data) => {
    return (ctn.innerHTML = `<img src = ${data.img}>`);
  })
  .catch((err) => {
    console.log(err.message);
  });
