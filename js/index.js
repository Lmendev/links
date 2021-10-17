const toggleThemeSwitch = document.getElementById("toggle-theme-buttom")

const toggleDarkTheme = () => {
    document.body.classList.toggle('dark-theme')
    //toggleThemeSwitch.checked = !toggleThemeSwitch.checked
}

toggleThemeSwitch.addEventListener('click', () => { toggleDarkTheme() })

if (window.matchMedia?.('(prefers-color-scheme: dark)').matches){
    toggleThemeSwitch.click()
    //toggleDarkTheme()
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
})

