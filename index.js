const numImagesAvailable = 982  //how many photos are total in the collection
const collectionID = 928423   //the collection ID from the original url
const container = document.querySelector('.container')

function renderBackgroundImg(randomNumber) {
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
    .then((response) => {
      // console.log(response)
      container.style.backgroundImage = `url(${response.url})`;
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundPosition = "top center";
      container.style.backgroundSize = "cover";
    })
  }

let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
renderBackgroundImg(randomImageIndex);


function generateQuote() {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const list = data;
        const listLength = list.length
        let randomNum = Math.floor(Math.random() * listLength);
        document.querySelector('#text').innerHTML = list[randomNum]['text']
    })
}

generateQuote();

function getTime() {
    const d = new Date();
    let hour = d.getHours();
    hour = ("0" + hour).slice(-2);
    let minutes = d.getMinutes();
    minutes = ("0" + minutes).slice(-2);

    document.querySelector('#time').innerHTML = `${hour}:${minutes}`
}

getTime();
setInterval(getTime, 1000)
