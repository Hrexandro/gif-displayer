const img = document.querySelector('img');
const searchBar = document.getElementById('gif-search-field')
const searchButton = document.getElementById('button-search')
//add animation until refresh

let searchedPhrase = "skull"

function clearAnimations (){
    Array.from(document.getElementsByClassName("button")).forEach((element) => {element.classList.remove("animated")})
}

function fetchImage(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=BswaVFI9nEK0O8Qm7LJzNYQ4KCgbLYlU&s=${searchedPhrase}`, {mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        img.src = response.data.images.original.url
        clearAnimations()
    }) .catch((error) => {
        console.log(error)
        img.src = "./placeholder.png"
        clearAnimations()
    })
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