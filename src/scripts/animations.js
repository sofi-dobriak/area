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

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimation();
  initScrollAnimation();
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
        opacity: 0,
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
        toggleActions: 'play none none reverse',
      },
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out',
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
