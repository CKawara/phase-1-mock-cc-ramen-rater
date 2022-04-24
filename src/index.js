const menu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const form = document.getElementById("new-ramen")


fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(item => {
        loadMenu(item)
    });
})
function loadMenu(item){
    let img = document.createElement('img')
    img.src = item.image
    menu.appendChild(img)

    img.addEventListener('click', ()=>{
        ramenDetail.querySelector('img').src = item.image
        ramenDetail.querySelector('h2').innerText = item.name
        ramenDetail.querySelector('h3').innerText = item.restaurant
        document.getElementById('rating-display').innerText = item.rating
        document.getElementById('comment-display').innerText = item.comment
    })
}

