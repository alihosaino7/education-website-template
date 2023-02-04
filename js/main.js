// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', _ => {
        faq.classList.toggle('open')

        // change icon
        const faqIcon = faq.querySelector('.faq-icon i')

        if (faqIcon.className === 'fa-solid fa-plus') {
            faqIcon.className = 'fa-solid fa-minus'
        } else {
            faqIcon.className = 'fa-solid fa-plus'
        }
    })
})
// show / hide nav menu

const menu = document.querySelector('.nav-menu')
const openMenuBtn = document.querySelector('#open-menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')

menu.querySelectorAll('a').forEach(menuLink => {
    const currentPathname = location.href
    // if menuLink href attribute is equal to the href property of the location object that means the menuLink is active
    if (menuLink.href === currentPathname) {
       menuLink.classList.add('active')
    } 

})

openMenuBtn.addEventListener('click', _ => {
    menu.style.display = 'flex'
    closeMenuBtn.style.display = 'inline-block'
    openMenuBtn.style.display = 'none'
});

// close nav menu

const closeNav = () => {
    menu.style.display = 'none'
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'inline-block'
}

closeMenuBtn.addEventListener('click', closeNav)