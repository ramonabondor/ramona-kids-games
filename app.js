'use strict';

const experiences = {
  colorland: {
    title: 'Colorland Adventures', label: 'CREATE & IMAGINE · AGES 3–7',
    intro: 'Choose a picture and paint with Pico. Switch between Creative and Learning modes, then save your work in your gallery.',
    images: [{src:'assets/colorland-play.png',alt:'Colorland painting interface with a circle canvas and colorful brush palette'}],
    facts: ['100 pictures across ten themed worlds.', 'Creative and Learning modes, 12 colors, and three brush sizes.', 'Save pictures in your private gallery and collect stickers in your album.', 'English, French, and Romanian. Designed for offline play.'],
    caption: 'Screenshot from the development build.',
    note: 'Currently in development for Android. Official download links will be added when available.'
  },
  stories: {
    title: 'Animated Stories', label: 'CREATE & IMAGINE · FOR FAMILIES',
    intro: 'Choose up to four characters and a theme, then create a 6–8 page illustrated storybook to read together or save as a PDF.',
    images: [{src:'assets/storybook.svg',alt:'Decorative open-book illustration, not a product screenshot',wide:true}],
    facts: ['Create a cast of up to four characters.', 'Choose a theme and make a story with six, seven, or eight pages.', 'Keep books in a private library and export a PDF to read together.', 'Optional MP4 video export depends on the release configuration.'],
    caption: 'Illustration of the storytelling idea; this is not a product screenshot.',
    note: 'Currently in development for web and Android. Grown-ups handle setup and any photo uploads in the storytelling app. This showcase does not accept uploads.'
  },
  puzzles: {
    title: 'PuzzlesKids', label: 'PLAY & DISCOVER · AGES 2–4',
    intro: 'Tap to match the animals, colors, and shapes. Complete levels to add stickers to your sticker book.',
    images: [{src:'assets/puzzle-home.png',alt:'Puzzle Kids home screen with the friendly bear and Play button'},{src:'assets/puzzle-play.png',alt:'Puzzle Kids matching activity in the development build'}],
    facts: ['60 levels across six worlds of animals, colors, shapes, and more.', 'Simple tap-to-match play with English voice guidance.', '60 collectible stickers to discover in the sticker book.', 'Offline play with progress saved on the device.'],
    caption: 'Screenshots from the development build.',
    note: 'Currently in development for Android. Official download links will be added when available.'
  },
  discovery: {
    title: 'Little World of Discovery', label: 'PLAY & DISCOVER · AGES 2–6',
    intro: 'Explore colors, animals, shapes, everyday objects, and the body through 50 levels in five worlds. Adjust the difficulty as you go.',
    images: [{src:'assets/discovery-home.png',alt:'Little World of Discovery home screen with a rainbow garden and bunny',wide:true}],
    facts: ['50 levels across five themed worlds.', 'Explore Rainbow Garden, Animal Kingdom, Shape Island, Discovery House, and My Amazing Body.', 'Adjustable difficulty and a sticker book to collect discoveries.', 'English and Romanian language options.'],
    caption: 'Screenshot from the development build.',
    note: 'Currently in development. Official download links will be added when available.'
  }
};

const gameDialog = document.querySelector('#game-dialog');
const privacyDialog = document.querySelector('#privacy-dialog');
const dialogContent = document.querySelector('#dialog-content');

document.querySelectorAll('[data-game]').forEach(button => {
  button.addEventListener('click', () => {
    const game = experiences[button.dataset.game];
    // All content is the local, fixed project catalog. No user input is inserted.
    dialogContent.innerHTML = `<div class="modal-top"><p class="eyebrow">${game.label}</p><h2 id="dialog-title">${game.title}</h2><p>${game.intro}</p></div><div class="modal-gallery">${game.images.map(img => `<img src="${img.src}" alt="${img.alt}"${img.wide ? ' class="wide-preview"' : ''}>`).join('')}</div><p class="modal-caption">${game.caption}</p><div class="modal-details"><ul>${game.facts.map(fact => `<li>${fact}</li>`).join('')}</ul><p class="release-note">${game.note}</p></div>`;
    gameDialog.dataset.theme = button.dataset.game;
    gameDialog.showModal();
    gameDialog.scrollTop = 0;
  });
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab' || !dialog.open) return;
    const controls = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')]
      .filter(control => control.getClientRects().length > 0);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
});

document.querySelector('#privacy-button').addEventListener('click', () => privacyDialog.showModal());

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    cards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (!card.hidden) visible++;
    });
    document.querySelector('#filter-status').textContent = category === 'all' ? 'Showing all four apps.' : `Showing ${visible} ${category === 'create' ? 'creative' : 'discovery'} apps.`;
  });
});
