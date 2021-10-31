let makeTargets = function (targets) {
  for (let i = 0; i < targets.length; i++) {
    const className = targets[i].getAttribute('href').replace('#', '.');
    if (className != '.') {
      const scrollTarget = document.querySelector(className).getBoundingClientRect().top;
      targets[i].addEventListener('click', () =>
        window.scrollTo({
          top: scrollTarget,
          behavior: 'smooth',
        })
      );
    }
  }
};

let ScrollTargets = document.querySelectorAll('.menu-tab');
makeTargets(ScrollTargets);
ScrollTargets = document.querySelectorAll('.footer__nav-tab');
makeTargets(ScrollTargets);
