const lightModeBtn = document.querySelector('#lightModeBtn')
const darkModeBtn = document.getElementById('darkModeBtn')

darkModeBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    if (darkModeBtn) {
        darkModeBtn.classList.add('active')
        lightModeBtn.classList.remove('active')
    } 
})
lightModeBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    if (darkModeBtn) {
        lightModeBtn.classList.add('active')
        darkModeBtn.classList.remove('active')
    }
})