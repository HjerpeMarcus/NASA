let headRef = document.querySelector('#headText');
let bodyRef = document.querySelector('body');
let inputRef = document.querySelector('#name');
let btnRef = document.querySelector('#btn');
let contentRef = document.querySelector('.roverContent');
function getImage(){
    let solNumber = 1;
    let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Ru48PdXHes1nhm3oBNTshAKnxcavPOwUQhh76qGP`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        let photoArrayLength = data.photos.length;
        if (photoArrayLength > 0){
            for (let i = 0; i <= 3; i++){
                let roverPhoto = data.photos[i].img_src;
                let cameraName = data.photos[i].camera.name;
                contentRef.innerHTML+= `<article class="card">
                    <div class="imageHere">
                        <img class="theImage" src="${roverPhoto}">
                    </div>
                    <h2 class="cameraName">${cameraName}</h2>
                </article>`
                console.log(`loop ${i}`);
            }
        }
        else{
            alert("No data in rover :(")
        }
}
)}
bodyRef.addEventListener("load", getImage());
inputRef.addEventListener('keyup', () =>{
    if(inputRef.value.length >3) {
            btnRef.classList.add("enabled");
            btnRef.classList.remove("disabled");
        }
    else {
        btnRef.classList.add("disabled");
        btnRef.classList.remove("enabled");
        }
    });
btnRef.addEventListener("click", function(event){
    event.preventDefault()
    if(inputRef.value.length >3) {
        let nameInput = inputRef.value;
        inputRef.value = "";
        headRef.classList.add("invisible")
        btnRef.classList.add("disabled");
        btnRef.classList.remove("enabled");
        headRef.innerHTML = `<span class="slash">//</span> Welcome, ${nameInput}
        !`;
    }
else {
        btnRef.disabled= false;
    }
  });