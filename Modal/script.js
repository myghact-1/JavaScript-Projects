'use strict';

// Selectors
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModalButton = document.querySelector(".close-modal")
//* Select multiple elements of a class
const showModalButton = document.querySelectorAll(".show-modal")

// open modal function
const openModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// console.log(showModalButton)
for (let i = 0; i < showModalButton.length; i++) {
    const element = showModalButton[i];
    element.addEventListener('click', openModal)
}

// close modal function
const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeModalButton.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)


//? Handling Esc Key

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal()
    }
})