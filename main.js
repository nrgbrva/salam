let azalt = document.querySelectorAll('.button')[0];
let coxalt = document.querySelectorAll('.button')[1];
let faiz = document.querySelector('.value');
let flex = document.querySelector('flex');
let ses = document.querySelector('.volume-bar');
let bar = document.querySelector('span');
let popup = document.createElement('div');
popup.setAttribute('class', 'pop');
console.log(popup)
let parag = document.querySelector('p');
ses.append(popup);

bar.style.width = '100%'
ses.style.width = '100%'

let value = 100;
ses.addEventListener('mousemove',
    function (event) {
        let nisbet = 4.15;
        let scale = event.offsetX;
        scale = scale / nisbet;
        scale = Math.round(scale)
        console.log(scale)
        if (scale <= 100) {
            popup.innerHTML = scale + '%'
            console.log(popup)
            popup.style.left = `${scale}%`
        }

    })
ses.addEventListener('mousedown',
    function (event) {
        let nisbet = 4.15;
        console.log(bar.style.width)
        console.log(ses.style.width)
        let scale = event.offsetX;
        scale = scale / nisbet;
        scale = Math.round(scale)
        value = scale
        if (scale <= 100) {
            bar.style.width = `${value}%`
            faiz.innerHTML = value + '%';
            popup.innerHTML = value + '%'
        }



    })
azalt.addEventListener('click',
    function (event) {

        if (value > 0) {
            value--;
            faiz.innerHTML = value + '%';

            bar.style.width = `${value}%`
            popup.innerHTML = value + '%'


        }




    })
coxalt.addEventListener('click',
    function () {

        if (value < 100) {

            value++;
            faiz.innerHTML = value + '%';
            bar.style.width = `${value}%`
            popup.innerHTML = value + '%'
        }

    })
window.addEventListener('keypress', 
    function (event) {
        //console.log(event.keyCode)
        if (event.keyCode == 61) {
            if (value < 100) {

                value++;
                faiz.innerHTML = value + '%';
                bar.style.width = `${value}%`
                popup.innerHTML = value + '%'
            }
        }
        else if (event.keyCode == 45) {
            if (value > 0) {
                value--;
                faiz.innerHTML = value + '%';

                bar.style.width = `${value}%`
                popup.innerHTML = value + '%'


            }
        }
    }
)
