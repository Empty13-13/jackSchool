const animItems = document.querySelectorAll('._anim-items');
const header = document.querySelector('.header')
const headerMenu = document.querySelector('.menu')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    let p = false

    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }



      if (pageYOffset + 45 >= animItemOffset && pageYOffset + 45 <= (animItemOffset + animItemHeight)) {
        p = true
      }
    }

    if (p) {
      header.classList.add('_active');
      headerMenu.classList.add('_active');
    } else {
      header.classList.remove('_active');
      headerMenu.classList.remove('_active');
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

lightGallery(document.querySelector('#lightgallery'), {
  download: true,
  mousewheel: true,
  preload: 4,
});