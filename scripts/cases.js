document.addEventListener('DOMContentLoaded', ()=>{

    const menuLinks = document.querySelectorAll('.link[data-goto]')

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 50;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, left: rect.left + scrollLeft
            }
        }
    }

    if (animItems.length > 0) {
        setTimeout(() => {
            animOnScroll();
        }, 500);
    }

    window.addEventListener('scroll', throttle(parallax, 14));

    function throttle(fn, wait) {
        let time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn();
                time = Date.now();
            }
        }
    };

    function parallax() {
        let scrolled = window.pageYOffset;
        let parallax = document.querySelectorAll(".parallax");
        // You can adjust the 0.4 to change the speed
        let coords = (scrolled * -0.2);
        if (parallax.length != 0) {
            parallax.forEach(function(item) {
                let customSpeed = item.getAttribute('data-speed');
                item.style.transform = 'translateY(' + coords * customSpeed + 'px)';
            })
        }

    };
})

new Swiper(".site-swiper", {
    slidesPerView: 2,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1.5,
    //         spaceBetween: 30,
    //     },
    //     560: {
    //         slidesPerView: 2.5,
    //     },
    //     768: {
    //         slidesPerView: 3.5,
    //     }
    // }
})