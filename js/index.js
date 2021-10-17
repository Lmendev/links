const toggleThemeSwitch = document.getElementById("toggle-theme-buttom")

const toggleDarkTheme = (theme) => {
    if (theme === 'dark'){
        document.body.classList.add('dark-theme')
        toggleThemeSwitch.classList.add('active')
        return
    }

    document.body.classList.toggle('dark-theme')
    //toggleThemeSwitch.checked = !toggleThemeSwitch.checked
}

toggleThemeSwitch.addEventListener('click', () => { toggleDarkTheme() })

if (window.matchMedia?.('(prefers-color-scheme: dark)').matches){
    toggleThemeSwitch.click()
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    console.log(e)
    const newColorSchemeIsDark = e.matches ? "dark" : "light";

    if(newColorSchemeIsDark) 
        toggleDarkTheme('dark')
})

