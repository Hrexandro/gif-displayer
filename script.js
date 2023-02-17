const img = document.querySelector('img');
//add animation until refresh
//add searching

function fetchImage(){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=BswaVFI9nEK0O8Qm7LJzNYQ4KCgbLYlU&s=skull', {mode: 'cors'})
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

fetchImage()