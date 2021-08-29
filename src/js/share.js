const shareMenuContainer = document.querySelector('.js-share-menu-container');
const shareMenu = document.querySelector('.js-share-menu');

shareMenuContainer.addEventListener('click', function(event) {
  if (!event.target.classList.contains('js-share-toggle')) {
    return;
  }

  const shareToggle = event.target;
  const shareMenu = document.getElementById(shareToggle.getAttribute('aria-controls'));
  const hidden = shareMenu.classList.toggle('hidden');

  // Update share button aria attributes
  shareToggle.setAttribute('aria-expanded', !hidden);
  shareToggle.setAttribute('aria-pressed', !hidden);

  // Toggle share menu container styles
  shareMenuContainer.classList.toggle('py-5', hidden);
  shareMenuContainer.classList.toggle('py-3', !hidden);

  // Toggle share button styles
  shareToggle.classList.toggle('text-darkBlue-300', hidden);
  shareToggle.classList.toggle('bg-darkBlue-100', hidden);
  shareToggle.classList.toggle('text-white', !hidden);
  shareToggle.classList.toggle('bg-darkBlue-300', !hidden);
});
