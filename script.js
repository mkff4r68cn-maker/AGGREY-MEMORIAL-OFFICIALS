const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage'),lightboxCaption=document.getElementById('lightboxCaption');
document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{lightboxImage.src=button.dataset.full;lightboxImage.alt=button.querySelector('img').alt;lightboxCaption.textContent=button.querySelector('span').textContent;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src=''}
document.getElementById('closeLightbox')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
document.getElementById('backTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
// If a local image ever fails to load, show a readable fallback instead of a broken-image icon.
document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.alt=img.alt+' (photo unavailable)';img.style.display='none';const fallback=document.createElement('div');fallback.className='image-fallback';fallback.textContent='Photo temporarily unavailable';fallback.setAttribute('role','img');fallback.setAttribute('aria-label',img.alt);img.insertAdjacentElement('afterend',fallback)}));
if('serviceWorker' in navigator && location.protocol.startsWith('http')){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}
