import { gsap, ScrollTrigger, SplitText } from 'gsap/all';
import { initSmoothScrolling } from './scroll/leniscroll';

gsap.registerPlugin(ScrollTrigger, SplitText);
initSmoothScrolling();

const refs = {
  burgerButton: document.querySelector('[data-open-menu-btn]'),
  closeButton: document.querySelector('[data-close-menu-btn]'),

  mobileMenu: document.querySelector('[data-mobile-menu]'),
  mobileMenuList: document.querySelector('[data-mobile-menu-list]'),
  mobileWrapper: document.querySelector('[data-mobile-wrapper]'),

  heroTitle: document.querySelector('[data-hero-title]'),
};

window.addEventListener('load', () => {
  initHeroAnimation();
  initScrollAnimation();
  intiImageParallax();
  initMobileMenu();
});

function initMobileMenu() {
  refs.burgerButton.addEventListener('click', showMobileMenu);
  refs.closeButton.addEventListener('click', hideMobileMenu);

  refs.mobileWrapper.addEventListener('click', e => {
    if (e.target === e.currentTarget) hideMobileMenu();
  });

  refs.mobileMenuList.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link) hideMobileMenu();
  });
}

function intiImageParallax() {
  gsap.fromTo(
    '[data-hero-image]',
    {
      y: 0,
    },
    {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.benefits__img-container__img',
    {
      y: 0,
    },
    {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: '.benefits__list',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );

  gsap.fromTo(
    '.contacts__img-container__img',
    {
      y: 0,
    },
    {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: '.contacts__img-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    }
  );
}

function initHeroAnimation() {
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const splitHeroTitle = SplitText.create('[data-hero-title]', {
    type: 'chars',
  });

  timeline
    .from(splitHeroTitle.chars, {
      duration: 1,
      autoAlpha: 0,
      stagger: 0.05,
    })
    .from(
      '[data-hero-image]',
      {
        duration: 1.5,
        y: 250,
        opacity: 1,
      },
      '-=1.5'
    );
}

function initScrollAnimation() {
  const elementsToAnimate = document.querySelectorAll('[data-animate]');

  elementsToAnimate.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      duration: 0.75,
      y: 50,
      opacity: 0,
      ease: 'sine.inOut',
    });
  });
}

function showMobileMenu() {
  refs.closeButton.classList.remove('hidden');
  refs.burgerButton.classList.add('hidden');
  refs.mobileMenu.classList.add('visible');
  refs.mobileWrapper.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function hideMobileMenu() {
  refs.closeButton.classList.add('hidden');
  refs.burgerButton.classList.remove('hidden');
  refs.mobileMenu.classList.remove('visible');
  refs.mobileWrapper.classList.remove('visible');
  document.body.style.overflow = '';
}
