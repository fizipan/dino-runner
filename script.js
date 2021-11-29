let character = document.getElementById('character');
let block = document.getElementById('block');

function jump() {
    character.classList.add('animate');
    setTimeout(function () {
        character.classList.remove('animate');
    }, 500);
}

function play() {
    block.classList.add('play');
}

function stop() {
    block.classList.remove('play');
}

function redCharacter() {
    character.style.backgroundColor = 'red';
}

function blueCharacter() {
    character.style.backgroundColor = 'blue';
}

function orangeCharacter() {
    character.style.backgroundColor = 'orange';
}

let checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 118) {
        block.classList.remove('play');
        var boolean = confirm('Kamu kalah Ingin bermain lagi ?');

        if (boolean == true) {
            block.classList.add('play');
            block.style.display = '';
        }
    }
}, 10);

const button = document.getElementById('buttonMode');

button.addEventListener('click', function () {
    document.body.classList.toggle('DarkMode');
});