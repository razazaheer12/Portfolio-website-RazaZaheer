/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById ('nav-menu'),
      navToggle = document.getElementById ('nav-toggle'),
      navClose = document.getElementById ('nav-close')

      /* Menu show */
      if(navToggle){
        navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        })
      }

      /* Menu Hidden */ 
       if(navClose)
        navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        })

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById('header')
    // add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)

/*=============== LIGHT/DARK THEME TOGGLE ===============*/
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage if available
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmails = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ub8acwn','template_1p6oooh','#contact-form','-cpEATWofU3ZOdpHS')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

    // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
    }, 5000) 

    // Clear input fields
    contactForm.reset()
}, () => {
    //show message error
    contactMessage.textContent = 'Message not sent (service error) ❌'
})
}

    
contactForm.addEventListener('submit', sendEmails)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
                    }

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
const scrollDown = window.scrollY

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
            }
        }) 
        }
        Window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

// Initialize ScrollReveal with default settings
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false // Set to true if you want animations to repeat on scroll
});

// Reveal main sections
sr.reveal('.section__title, .work__card, .about__content, .experience__data, .skills__box, .services__card, .contact__form, .contact__social', {
    interval: 100
});

// Reveal home section elements with different delays
sr.reveal('.home__data', { delay: 300 });
sr.reveal('.home__image', { delay: 500 });
sr.reveal('.home__scroll', { delay: 700, origin: 'bottom' });

// Reveal about image if you use it
sr.reveal('.about__image', { origin: 'left', delay: 400 });




    




