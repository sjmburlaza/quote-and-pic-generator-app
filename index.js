const numImagesAvailable = 982  //how many photos are total in the collection
const collectionID = 928423   //the collection ID from the original url
const container = document.querySelector('.container')

function renderGalleryItem(randomNumber) {
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
    .then((response) => {
    //   console.log(response.url)
      container.style.backgroundImage = `url(${response.url})`;
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundPosition = "top center";
      container.style.backgroundSize = "cover";
    })
  }

let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
renderGalleryItem(randomImageIndex);


function giveAdvice() {
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

giveAdvice();

function getTime() {
    const d = new Date();
    let hour = d.getHours();
    hour = ("0" + hour).slice(-2);
    let minutes = d.getMinutes();
    minutes = ("0" + minutes).slice(-2);

    document.querySelector('#time').innerHTML = `${hour}:${minutes}`
}

getTime();