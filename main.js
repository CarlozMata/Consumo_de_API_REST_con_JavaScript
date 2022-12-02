const API_URL_RANDOM ='https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_ndKMM8eBgLAHgOC21hM5vrn17CdR6AJpMFioRH6qvOIthv9lM2yPzUmDncN5ZAwS';
const API_URL_FAVORITES ='https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_ndKMM8eBgLAHgOC21hM5vrn17CdR6AJpMFioRH6qvOIthv9lM2yPzUmDncN5ZAwS';

/*fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img')
    img.src = data[0].url
  })*/

  const spanError = document.getElementById('error')

async function loadRandomMichis() {
  const response = await fetch(API_URL_RANDOM);
  const data = await response.json();

  console.log("Random");
  console.log(data);

  if (response.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + response.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis() {
  const response = await fetch(API_URL_FAVORITES);
  const data = await response.json();

  console.log("Favoritos");
  console.log(data);

  if (response.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + response.status + data.message;
  }
}

loadFavoritesMichis();
loadRandomMichis();
