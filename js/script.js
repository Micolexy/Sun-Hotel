const btn = document.getElementById('more-btn');
const moreRoom = document.getElementById('more-room');

btn.addEventListener('click', navToggle)

function navToggle() {
   moreRoom.classList.toggle('grid')
   moreRoom.classList.toggle('hidden')
}

