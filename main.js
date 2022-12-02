console.log("Hello")

const API_URL ='https://api.thecatapi.com/v1/images/search?limit=3'

console.log(data)

/*fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img')
    img.src = data[0].url
  })*/
async function reload() {
  const response = await fetch(API_URL)
  const data = await response.json()
  const img = document.querySelector('img')
  img.src = data[0].url
}

reload();