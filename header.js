let mobile, nav, i
mobile = document.querySelector('.mobile')
nav = document.querySelector('nav')
headerFunction = () => {
    i = document.querySelectorAll('i')
    nav.classList.toggle('none')
}
mobile.addEventListener('click', (e) => {
    headerFunction()
    e.stopPropagation()
})
window.addEventListener('click', (event) => {
    !nav.classList.contains("none") ? headerFunction() : "";
    console.log(nav.classList)
}) 