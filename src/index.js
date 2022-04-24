const menu = document.getElementById("ramen-menu")
const ramenDetail = document.getElementById("ramen-detail")
const form = document.getElementById("new-ramen")


fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        displayMenu(item)
    });
})
function displayMenu(item){
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
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let data = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target.new_comment.value
    }
    fetch("http://localhost:3000/ramens", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => displayMenu(data))

    form.reset()
})



