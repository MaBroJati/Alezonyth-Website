let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// Add touch support for mobile devices
let slide = document.querySelector('.slide')
let startX = 0
let endX = 0

slide.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX
})

slide.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX
    handleSwipe()
})

function handleSwipe() {
    let diffX = startX - endX

    // Minimum swipe distance to trigger action
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Swipe left - next item
            next.click()
        } else {
            // Swipe right - previous item
            prev.click()
        }
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        prev.click()
    } else if (e.key === 'ArrowRight') {
        next.click()
    }
})
