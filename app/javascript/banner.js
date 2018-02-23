import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["The cocktail website", "Made by Angele"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
