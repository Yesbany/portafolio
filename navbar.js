function navbar() {
  const navbarMenu = document.querySelector('.navbar--menu')

  document.addEventListener('click', (e) => {
    if (e.target.closest('.navbar--toggle')) {
      navbarMenu.classList.toggle('show--menu')
    }

    if (e.target.closest('.navbar--close')) {
      navbarMenu.classList.remove('show--menu')
    }
  })
}

export default navbar