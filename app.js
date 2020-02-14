
const progressbar = document.getElementById('progressbar');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const notes = document.querySelector('#notes');
const website = document.querySelector('#website');

var progressTracker1 = 0;
var progressTracker2 = 0;
var progressTracker3 = 0;
var progressTracker4 = 0;
var progressTracker5 = 0;

name.addEventListener('change', function(){
    if (name.value != '') {
        if (progressTracker1 != 1) {
            progressTracker1 = 1;
            progressbar.value += 20
        }
    } else {
        progressTracker1 = 0,
        progressbar.value -= 20
    }
})

email.addEventListener('change', function(){
    if (email.value != '') {
        if (progressTracker2 != 1) {
            progressTracker2 = 1;
            progressbar.value += 20
        }
    } else {
        progressTracker2 = 0,
        progressbar.value -= 20
    }
})

phone.addEventListener('change', function(){
    if (phone.value != '') {
        if (progressTracker3 != 1) {
            progressTracker3 = 1;
            progressbar.value += 20
        }
    } else {
        progressTracker3 = 0,
        progressbar.value -= 20
    }
})

notes.addEventListener('change', function(){
    if (notes.value != '') {
        if (progressTracker4 != 1) {
            progressTracker4 = 1;
            progressbar.value += 20
        }
    } else {
        progressTracker4 = 0,
        progressbar.value -= 20
    }
})

website.addEventListener('change', function(){
    if (website.value != '') {
        if (progressTracker5 != 1) {
            progressTracker5 = 1;
            progressbar.value += 20
        }
    } else {
        progressTracker5 = 0,
        progressbar.value -= 20
    }
})