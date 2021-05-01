
const videosContainer = document.getElementById('videosContainer')

const cardTemplate = document.getElementById('card-template')

const videos = [
    { 
    title: "Bleach - Monster" ,
    url: "https://www.youtube.com/watch?v=kK2TY9gDSmc",
    time: "3min",
    image: "./images/bleach.jpg"
    },
    {
    title: "Rock Lee Vs Gaara - Number" ,
    url: "https://www.youtube.com/watch?v=EfP-fAF2G-8",
    time: "6min 38s",
    image: "./images/lee-vs-gaara.jpg"
    },
    {
    title: "Boku no Hero AMV - In the End" ,
    url: "https://www.youtube.com/watch?v=xQwdGV3ne4U",
    time: "4min 30",
    image: "./images/boku-no-hero.jpg"
    },
]

const showVideos = ()=> {
    videos.map( (video) => {
        let additionalCard = cardTemplate.cloneNode(true);
        additionalCard.querySelector('a').href = video.url
        additionalCard.querySelector('img').src = video.image
        additionalCard.querySelector('h3').textContent = video.title
        additionalCard.querySelector('small').textContent = video.time
        videosContainer.appendChild(additionalCard)
    }) 
}

showVideos()