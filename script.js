const productType = document.getElementById('productType');
const woodType = document.getElementById('woodType');
const epoxyColor = document.getElementById('epoxyColor');
const customText = document.getElementById('customText');
const fontStyle = document.getElementById('fontStyle');
const photoUpload = document.getElementById('photoUpload');
const photoSize = document.getElementById('photoSize');
const preview = document.getElementById('livePreview');
const previewText = document.getElementById('previewText');
const previewImage = document.getElementById('previewImage');
const clearPhoto = document.getElementById('clearPhoto');
const signDemo = document.getElementById('signDemo');
const river = document.querySelector('.epoxy-river');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

document.getElementById('year').textContent = new Date().getFullYear();

function updatePreview() {
  preview.className = 'live-preview';
  preview.classList.add(woodType.value.toLowerCase());
  preview.classList.add(productType.value.includes('Sign') ? 'sign-shape' : 'dining-shape');
  previewText.textContent = customText.value || 'BURNT DESIGNS';
  previewText.style.fontFamily = `${fontStyle.value}, serif`;
  signDemo.textContent = customText.value || 'GRAHAM RANCH';
  signDemo.style.fontFamily = `${fontStyle.value}, serif`;
  river.style.background = `linear-gradient(180deg, rgba(255,255,255,.72), ${epoxyColor.value}, rgba(4,36,61,.85))`;
  previewImage.style.maxWidth = `${photoSize.value}%`;
}

[productType, woodType, epoxyColor, customText, fontStyle, photoSize].forEach(el => {
  el.addEventListener('input', updatePreview);
});

photoUpload.addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    previewImage.src = e.target.result;
    previewImage.style.display = 'block';
  };
  reader.readAsDataURL(file);
});

clearPhoto.addEventListener('click', () => {
  photoUpload.value = '';
  previewImage.removeAttribute('src');
  previewImage.style.display = 'none';
});

menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
updatePreview();
