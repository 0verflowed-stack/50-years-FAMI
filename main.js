document.addEventListener('DOMContentLoaded', function () {
    const aspectMap = {
      '0': '931 / 1294',
      '1': '2615 / 1743',
      '2': '577 / 383',
      '3': '3 / 4',
      '4': '1169 / 850',
      'Lab1': '287 / 220',
      'Lab10': '454 / 605',
      'Lab11': '454 / 605',
      'Lab12': '605 / 454',
      'Lab2': '223 / 192',
      'Lab3': '290 / 151',
      'Lab4': '479 / 360',
      'Lab5': '1385 / 924',
      'Lab6': '24 / 25',
      'Lab7': '4 / 3',
      'Lab8': '1080 / 1163',
      'Lab9': '1645 / 1234',
      'Person1': '1021 / 939',
      'Person10': '823 / 280',
      'Person10_2': '103 / 136',
      'Person11': '371 / 372',
      'Person12': '156 / 115',
      'Person13': '85 / 113',
      'Person14': '1 / 1',
      'Person15': '335 / 132',
      'Person16': '50 / 59',
      'Person17': '279 / 139',
      'Person18': '517 / 258',
      'Person19': '1 / 1',
      'Person2': '389 / 388',
      'Person20': '603 / 305',
      'Person21': '43 / 21',
      'Person22': '1 / 1',
      'Person23': '323 / 324',
      'Person24': '1 / 1',
      'Person25': '331 / 359',
      'Person26': '1 / 1',
      'Person3.5': '413 / 620',
      'Person3': '800 / 533',
      'Person2.25': '353 / 423',
      'Person4': '1 / 1',
      'Person5.5': '1 / 1',
      'Person5': '33 / 34',
      'Person6': '435 / 353',
      'Person7': '945 / 944',
      'Person8': '450 / 449',
      'Person9': '473 / 469',
      'Picture1': '789 / 511',
      'Picture2': '203 / 114',
      'Picture3': '3 / 2',
      'Picture4': '571 / 430',
      'Picture5': '674 / 379',
      'Picture6': '3 / 2',
      'Picture7': '1 / 1',
      'Startup1': '33 / 40',
      'Startup2': '1 / 1',
      'Startup3': '600 / 503',
      'Startup3_3': '1 / 1',
      'Startup4': '843 / 1106',
      'blob': '921 / 739',
      'eleks': '5 / 4',
      'intellias_logo': '128 / 37',
      'leobit': '4337 / 1242',
      'logo-faculty-ami': '151 / 158',
      'n-ix_logo-3': '2 / 1',
      'qr': '815 / 358',
      'softserve': '133 / 40',
      'Бартіш': '911 / 1483',
      'Горлач': '156 / 235',
      'Дияк': '85 / 128',
      'КІС': '704 / 471',
      'КДАІС': '1483 / 964',
      'КММСЕП': '704 / 437',
      'КОМ': '176 / 111',
      'КП': '1408 / 939',
      'КПМ': '1408 / 939',
      'КТОП': '1408 / 939',
      'Притула': '1033 / 1483',
      'Селіверстов': '1035 / 1562',
      'Хімка': '222 / 329',
      'Шахно': '521 / 781',
      'Щербина': '959 / 1562',
      'Ярошко': '1234 / 1645',
      'венгерський': '1037 / 1562',
      'сеньо': '981 / 1562',
      'факультет_50річчя': '1408 / 971',
      'хапко': '523 / 781',
      'цегелик': '977 / 1483',
      'шинкаренко': '1007 / 1562',
      'ящук': '977 / 1483',
      'Смичок': '1035 / 1562',
      'Корольчук': '1234 / 1645'
  };

  document.querySelectorAll('.gallery img').forEach(img => {
    if (img.style.aspectRatio) return;

    const src = img.dataset.splideLazy || img.getAttribute('src') || '';
    const file = src.split('/').pop() || '';
    const key  = file.replace(/\.\w+$/, '');

    const byClass = Array.from(img.classList).find(c => aspectMap[c]);

    const ratio = aspectMap[key] || (byClass && aspectMap[byClass]);
    if (ratio) {
      img.style.aspectRatio = ratio;
      img.setAttribute('height', 450);
    }
  });


  const IMG_HEIGHT = 450;

  function syncCaptionWidths(id) {
    document
      .querySelectorAll(`#${id} .splide__slide`)
      .forEach(slide => {
        const img  = slide.querySelector('img');
        const desc = slide.querySelector('.splide__desc');
        if (!img || !desc) return;

        const src    = img.dataset.splideLazy || img.getAttribute('src') || '';
        const file   = src.split('/').pop() || '';
        const key    = file.replace(/\.\w+$/, '');
        const ratio  = (aspectMap[key] || '').split('/').map(s => Number(s.trim()));
        if (ratio.length !== 2) return;

        const [W, R] = ratio;
        const pixelWidth = Math.round( IMG_HEIGHT * (W / R) );

        desc.style.maxWidth = pixelWidth + 'px';
      });
  }

  const splide5 = new Splide( '#image-carousel-personal', {
    focus      : 0,
    gap        : '1rem',
    arrows     : true,
    padding    : '1rem',
    autoWidth: true,
    lazyLoad   : 'sequential', 
    breakpoints: {
      1200: {
        perPage : 3
      },
      768: {
        perPage : 1,
        autoWidth: false,
        gap     : '0.5rem',
      }
    }
  })

  splide5.on('mounted moved', () => syncCaptionWidths('image-carousel-personal'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-personal'));
  splide5.mount();  

  const splide1 = new Splide( '#image-carousel-olympics', {
    focus      : 0,
    gap        : '1rem',
    arrows     : true,
    padding    : '1rem',
    autoWidth: true,
    lazyLoad   : 'sequential', 
    breakpoints: {
      1200: {
        perPage : 3,
      },
      768: {
        perPage : 1,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  })

  syncCaptionWidths('image-carousel-olympics')
  splide1.on('mounted moved', () => syncCaptionWidths('image-carousel-olympics'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-olympics'));
  splide1.mount();

  const splide4 = new Splide('#image-carousel-lab', {
    focus      : 0,
    gap        : '1rem',
    arrows     : true,
    padding    : '1rem',
    autoWidth: true,
    lazyLoad   : 'sequential', 
    breakpoints: {
      1200: {
        perPage : 3,
      },
      768: {
        // type    : 'loop',
        perPage : 1,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  });

  splide4.mount();

  const splide2 = new Splide('#image-carousel-famous-persons', {
    gap     : '1rem',
    focus      : 0, 
    padding: '35px',
    autoWidth: true,
    lazyLoad   : 'sequential', 
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem',
        autoWidth: false
      }
    }
  })

  syncCaptionWidths('image-carousel-famous-persons')
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
    lazyLoad   : 'sequential', 
    breakpoints: {
      768: {
        perPage: 1,
        gap: '0.5rem',
        focus: 0
      },
      1200: {
        perPage: 3,
        gap: '0.5rem',
        focus: 1
      }
    }
  }).mount();

  const splide3 = new Splide( '#image-carousel-startups', {
    focus      : 0,
    gap        : '1rem',
    arrows     : true,
    padding    : '1rem',
    autoWidth: true,
    lazyLoad   : 'sequential', 
    breakpoints: {
      768: {
        perPage : 1,
        focus   : 0,
        autoWidth: false,
        gap     : '0.5rem',
        arrows     : true,
      }
    }
  } )
  syncCaptionWidths('image-carousel-startups')
  splide3.on('mounted moved', () => syncCaptionWidths('image-carousel-startups'));
  window.addEventListener('resize', () => syncCaptionWidths('image-carousel-startups'));
  splide3.mount();  

  MicroModal.init();

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      // if (window.innerWidth <= 768) return;
      const fullSrc = img.dataset.full || img.src;
      document.getElementById('modalImg').src = fullSrc;
      const prev = document.activeElement; 
      prev?.blur(); 
      MicroModal.show('image-modal', {
        disableScroll: false,
        onShow: () => {
          const container = document.querySelector('.modal__container');
          container.setAttribute('tabindex', '-1');
          container.focus();
          document.body.classList.add('modal-open');
        },
        onClose: () => {
          document.body.classList.remove('modal-open');
          document.getElementById('modalImg').src = '';
        },
      });
    });
  });
    
});



