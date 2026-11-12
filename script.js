/* I'm so sorry for this but I have spent far too many hours on this
just for it to be such a trash outcome. The original API I was trying to use was 
an air quality index but I couldn't get it to work properly. 
This one I could get to work but frankly I don't understand 
how to use API's nearly enough to make something worthwhile. 
Very sorry. 
*/

const apiURL =
  "https://api.artic.edu/api/v1/artworks/129884";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let title = data.data.title;

    document.querySelector("#title").textContent = title;

    let id = data.data.id;

    document.querySelector("#id").textContent = id;

    let artist = data.data.artist_title;
    document.querySelector("#artist").textContent = artist;
  }); 

  
const wheeze = new Audio("wheezing.mp3")
const whistle = new Audio("whistling.mp3")

function playWheeze() {
    wheeze.play()
}

function playWhistle(){
    whistle.play()
}


