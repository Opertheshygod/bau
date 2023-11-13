const applicationBackdrop = document.getElementById('applicationBackdrop')
const applicationForm = document.getElementById('applicationForm')
const tagHTML = document.getElementById('html')
const themeIcon = document.getElementById('themeIcon')

function showApplication() {
    applicationBackdrop.classList.toggle('hidden')
    setTimeout(() => {  applicationForm.classList.toggle('!translate-x-0')  }, 100);
    setTimeout(() => {  applicationForm.classList.toggle('!translate-y-0')  }, 100);
}
function closeApplication() {
    applicationForm.classList.toggle('!translate-x-0')
    applicationForm.classList.toggle('!translate-y-0')
    setTimeout(() => applicationBackdrop.classList.toggle('hidden'), 200)
}



function switchTheme() {
    let darkMode = false
    tagHTML.classList.toggle('dark')
    // if (themeIcon.classList.contains('stroke-black') === true){
    //     themeIcon.classList.replace('stroke-black', 'stroke-white')
    // } else {
    //     themeIcon.classList.replace('stroke-white','stroke-black')
    // }
}