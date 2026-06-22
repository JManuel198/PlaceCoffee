// Menú (tabs interactivas)
const tabs = document.querySelectorAll('.menu-tabs__btn')
const sections = document.querySelectorAll('.cat')
const navbar = document.querySelector('.menu-nav')
const tabBar = document.querySelector('.menu-tabs')

let spyLocked = false

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => {
            t.classList.remove('menu-tabs__btn--active')
            t.setAttribute('aria-selected', 'false')
        })
        tab.classList.add('menu-tabs__btn--active')
        tab.setAttribute('aria-selected', 'true')

        const targetId = tab.dataset.target
        const section = document.getElementById(targetId)
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const offset = navbar.offsetHeight + tabBar.offsetHeight
        window.scrollTo({ top: sectionTop - offset, behavior: 'smooth' })

        spyLocked = true
        setTimeout(() => {
            spyLocked = false
        }, 700)
    })
})

const observer = new IntersectionObserver((entries) => {
    if (spyLocked) return

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.id
            tabs.forEach((tab) => {
                const active = tab.dataset.target === id
                tab.classList.toggle('menu-tabs__btn--active', active)
                tab.setAttribute('aria-selected', String(active))

                if (active) {
                    const barRect = tabBar.getBoundingClientRect()
                    const tabRect = tab.getBoundingClientRect()
                    const fullyVisible =
                        tabRect.left >= barRect.left && tabRect.right <= barRect.right

                    if (!fullyVisible) {
                        tab.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'center'
                        })
                    }
                }
            })
        }
    })
}, {
    rootMargin: '-45% 0px -50% 0px'
})

sections.forEach((section) => observer.observe(section))