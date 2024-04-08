const plus = document.querySelector("#plus")    
const minus = document.querySelector("#minus")  
const number = document.querySelector("#number") 
const thumbnails = Object.values(document.querySelectorAll('#thumbnail'))
const displayedThumbnail = document.querySelector("#displayed")

let displayedThumbnailUrl


for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('click', () => {
        displayedThumbnailUrl = `images/image-product-${thumbnails.indexOf(thumbnail) + 1}.jpg`
        displayedThumbnail.src = displayedThumbnailUrl
    })
}


plus.addEventListener('click', () => number.innerText++)

minus.addEventListener('click', () => {
    if (number.innerText == 0) return
    number.innerText--;
})