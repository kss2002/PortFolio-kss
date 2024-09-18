function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link ');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));
  handleFloatingButton();
}

init();
/*
const options = {
  threshold: 1, //0~1까지 값이 있고, 화면상에서 감지되는 value를 측정해줌.
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    } // active-link < nav__link에서의 홈.
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));
// observer.observe($workSection);
*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.home__data, .about__img, .skills__text');
scrollReveal.reveal(
  '.home__img, .about__data, .skills__img, .work__title__description',
  { delay: 400 }
);
scrollReveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 200,
});

new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
})
  .type('안녕하세요!<br/>')
  .type('<strong class="home__title-color">이 페이지는</strong><br/>')
  .type('<strong class="home__title-color">Portfolio</strong>', { delay: 300 })
  .delete(9, { delay: 400 })
  .type('<strong class="home__title-color">포트폴리오 사이트</strong>입니다!')
  .go();

// 이메일 클라이언트 열기
const $contactForm = document.getElementById('contactForm');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // 폼 하위 정보를 갖고!
  const name = $contactForm.name.value;
  const subject = $contactForm.subject.value;
  const message = $contactForm.message.value;
  const to = 'bruce.lean17@gmail.com';

  // 이메일 클라이언트를 열기!
  location.href =
    'mailto:' +
    encodeURIComponent(to) +
    '?subject=' +
    encodeURIComponent(`[${name}님 문의] ${subject}`) +
    '&body=' +
    encodeURIComponent(message);
});
