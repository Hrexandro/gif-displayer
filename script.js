const img = document.querySelector('img');
const searchBar = document.getElementById('gif-search-field')
const searchButton = document.getElementById('button-search')
//add animation until refresh

let searchedPhrase = "skull"

function clearAnimations (){
    Array.from(document.getElementsByClassName("button")).forEach((element) => {element.classList.remove("animated")})
}

async function fetchImage(){
    try {
        let fetchedImage = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=BswaVFI9nEK0O8Qm7LJzNYQ4KCgbLYlU&s=${searchedPhrase}`, {mode: 'cors'})
        let fetchedResult = await fetchedImage.json()
        img.src = fetchedResult.data.images.original.url
    } catch (error) {
        console.log(error)
        img.src = "./placeholder.png"
    } finally {
        clearAnimations()
    }
}

const refreshButton = document.getElementById('button1')

refreshButton.addEventListener('click', ()=>{
    refreshButton.classList.add("animated")
    fetchImage()
})

searchButton.addEventListener('click', ()=>{
    searchButton.classList.add("animated")
    searchedPhrase = searchBar.value
    searchBar.value = ""
    fetchImage()
})

fetchImage()