document.addEventListener('DOMContentLoaded', function () {
  function syncCaptionWidths(id) {
    document
      .querySelectorAll(`#${id} .splide__slide`)
      .forEach(slide => {
        const img  = slide.querySelector('img');
        const desc = slide.querySelector('.splide__desc');
        if (!img || !desc) return;
  
        const applyWidth = () => {
          // now clientWidth should be > 0
          desc.style.maxWidth = img.clientWidth + 'px';
        };
  
        if (img.clientWidth > 0) {
          // already laid out
          applyWidth();
        } else {
          // wait until it’s loaded and laid out
          img.addEventListener('load', applyWidth, { once: true });
        }
      });
  }
  const splide1 = new Splide( '#image-carousel-olympics', {
    type       : 'loop',
    perPage    : 3,
    focus      : 0,
    gap        : '1rem',
    arrows     : false,
    padding    : '1rem',
    autoWidth: true,
    breakpoints: {
      1200: {
        perPage : 3,
        focus   : 'center'
      },
      768: {
        type    : 'loop',
        perPage : 1,
        focus   : 0,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  })

  let switched1 = false;

  splide1.on('move', () => {
    if (!switched1) {
      splide1.options = { focus: 'center' };
      switched1 = true;
    }
  });

  splide1.on('mounted moved', () => syncCaptionWidths('image-carousel-olympics'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-olympics'));
  splide1.mount();

  const splide4 = new Splide('#image-carousel-lab', {
    type       : 'loop',
    perPage    : 3,
    focus      : 0,
    gap        : '1rem',
    arrows     : false,
    padding    : '1rem',
    autoWidth: true,
    breakpoints: {
      1200: {
        perPage : 3,
        focus   : 'center'
      },
      768: {
        type    : 'loop',
        perPage : 1,
        focus   : 0,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  });

  
  let switched4 = false;

  splide4.on('move', () => {
    if (!switched4) {
      splide4.options = { focus: 'center' };
      switched4 = true;
    }
  });

  splide4.mount();

  const splide2 = new Splide('#image-carousel-famous-persons', {
    type    : 'loop',
    perPage : 3,
    gap     : '1rem',
    focus      : 0, 
    rewind  : true,
    padding: '35px',
    autoWidth: true,
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem',
        // width: '100%',
        autoWidth: false
      }
    }
  })

  let switched2 = false;

  splide2.on('move', () => {
    if (!switched2) {
      splide2.options = { focus: 'center' };
      switched2 = true;
    }
  });

  splide2.on('mounted moved', () => syncCaptionWidths('image-carousel-famous-persons'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-famous-persons'));
  splide2.mount();

  new Splide('#image-carousel-main', {
    type    : 'loop',
    perPage : 5,
    gap     : '1rem',
    focus      : 2, 
    rewind  : true,
    padding: '35px',
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem',
        focus: 0
      },
      1200: {
        perPage: 3,
        gap: '0.5rem',
        focus : 1,  
      }
    }
  }).mount();

  const splide3 = new Splide( '#image-carousel-startups', {
    type       : 'loop',
    perPage    : 3,
    focus      : 'center',
    gap        : '1rem',
    arrows     : false,
    padding    : '1rem',
    autoWidth: true,
    breakpoints: {
      1200: {
        perPage : 3,
        focus   : 'center'
      },
      768: {
        type    : 'loop',
        perPage : 1,
        focus   : 0,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  } )
  
  splide3.on('mounted moved', () => syncCaptionWidths('image-carousel-startups'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-startups'));
  splide3.mount();  

  const splide5 = new Splide( '#image-carousel-personal', {
    type       : 'loop',
    perPage    : 3,
    focus      : 0,
    gap        : '1rem',
    arrows     : false,
    padding    : '1rem',
    autoWidth: true,
    breakpoints: {
      1200: {
        perPage : 3,
        focus   : 'center'
      },
      768: {
        type    : 'loop',
        perPage : 1,
        focus   : 0,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  })

  let switched5 = false;

  splide5.on('move', () => {
    if (!switched5) {
      splide5.options = { focus: 'center' };
      switched5 = true;
    }
  });
  
  splide5.on('mounted moved', () => syncCaptionWidths('image-carousel-personal'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-personal'));
  splide5.mount();  

    
});



