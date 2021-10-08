const toggleThemeSwitch = document.getElementById("toggle-theme-buttom")

const toggleDarkTheme = () => {
    document.body.classList.toggle('dark-theme')
    toggleThemeSwitch.classList.toggle('active')
}

if (window.matchMedia?.('(prefers-color-scheme: dark)').matches)
    toggleDarkTheme()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
})

toggleThemeSwitch.addEventListener('click', () => { toggleDarkTheme() })