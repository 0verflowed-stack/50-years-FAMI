document.addEventListener('DOMContentLoaded', function () {
  new Splide( '#image-carousel-olympics', {
    type    : 'loop',
    perPage : 3,
    gap     : '1rem',
    focus   : 0,
    rewind  : true,
    padding: '35px',
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem'
      }
    }
  }).mount();

  new Splide('#image-carousel-lab', {
    type    : 'loop',
    perPage : 3,
    gap     : '1rem',
    focus   : 0,
    rewind  : true,
    padding: '35px',
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem'
      }
    }
  }).mount();

  new Splide('#image-carousel-famous-persons', {
    type    : 'loop',
    perPage : 3,
    gap     : '1rem',
    focus   : 0,
    rewind  : true,
    padding: '35px',
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem'
      }
    }
  }).mount();

  new Splide('#image-carousel-main', {
    type    : 'loop',
    perPage : 5,
    gap     : '1rem',
    focus   : 2,
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

  new Splide('#image-carousel-startups', {
    type    : 'loop',
    perPage : 5,
    gap     : '1rem',
    focus   : 2,
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
} );
