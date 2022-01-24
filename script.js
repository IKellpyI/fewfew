let header = document.querySelector('header');
let t1 = document.getElementById('t1');
let t = document.getElementById('t');

            window.addEventListener('scroll', function(){
                let value = window.scrollY;
                
                t1.style.left = value * 0.25 + 20 + '%';
                t.style.left  = value * -0.25 + 40 +'%';

                header.classList.toggle('scrolling-active', value > 500);
            })