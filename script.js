const img = document.querySelector('img');
const searchBar = document.getElementById('gif-search-field')
const searchButton = document.getElementById('button-search')
//add animation until refresh

let searchedPhrase = "skull"

function fetchImage(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=BswaVFI9nEK0O8Qm7LJzNYQ4KCgbLYlU&s=${searchedPhrase}`, {mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        img.src = response.data.images.original.url
    })
}

const refreshButton = document.getElementById('button1')

refreshButton.addEventListener('click', ()=>{
    fetchImage()
})

searchButton.addEventListener('click', ()=>{
    searchedPhrase = searchBar.value
    searchBar.value = ""
    fetchImage()
})

fetchImage()