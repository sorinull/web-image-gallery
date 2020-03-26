/* ===== variables ===== */
const previewImg = document.querySelector('#preview img');
const thumbnailBarImgs = document.querySelectorAll('#thumbnail-bar img');
const modalBox = document.querySelector('.modal-box');
const modalBoxImg = document.getElementById('modal-img');
const modalBoxClose = document.querySelector('.modal-close');

/* ===== init ===== */
initGallery();
bindControlEvents();

/* ===== functions ===== */
// displays first image from the thumbnail bar by default
function initGallery()
{
	previewImg.src = thumbnailBarImgs[0].src;
	tintThumbnailBarImgs();
}

function bindControlEvents()
{
	// thumbnail bar images click -- changes the preview image
	for (let i = 0; i < thumbnailBarImgs.length; i++)
	{
		thumbnailBarImgs[i].addEventListener('click', function(event)
		{
			event.stopPropagation();
			previewImg.src = event.target.src;
			tintThumbnailBarImgs();
		});
	}
	
	// preview image click -- reveals the modal box
	previewImg.addEventListener('click', function(event)
	{
		modalBox.style.display = 'block';
		modalBoxImg.src = event.target.src;
	});
	
	// modal box click -- hides the modal box
	modalBox.addEventListener('click', function(event)
	{
		// checks if clicked element is different from 'this' element
		// (doesn't allow child elements to trigger the logic)
		if (event.target !== this)
			return;
			
		event.stopPropagation();
		modalBox.style.display = 'none';
	});
	
	// modal box close button -- hides the modal box
	modalBoxClose.addEventListener('click', function(event)
	{
		modalBox.style.display = 'none';
	});	
}

// adds the tint class to the thumbnail bar images,
// or removes the class if image is the same as the one in the preview
function tintThumbnailBarImgs()
{
	for (let i = 0; i < thumbnailBarImgs.length; i++)
	{
		if (thumbnailBarImgs[i].src !== previewImg.src)
		{
			thumbnailBarImgs[i].classList.add('tinted');
		}
		else
		{
			thumbnailBarImgs[i].classList.remove('tinted');
		}
	}
}