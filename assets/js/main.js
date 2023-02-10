import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
    apiKey: "AIzaSyDftzKGDJN3V2RCwkJOtvIRBMYPHRUDnJM",
    version: "weekly",
});

let NavBarHandler = function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const overlay = document.querySelector('.dark-overlay-nav-mobile');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        overlay.classList.toggle('overlay-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards`
            }
        });
        burger.classList.toggle('toggle');
    });
};

let SliderHandler = {

    changeImages: function () {
        const imgOne = document.getElementById('slider-img1');
        const imgTwo = document.getElementById('slider-img2');
        const imgThree = document.getElementById('slider-img3');
        const imgFourth = document.getElementById('slider-img4');
        if (window.matchMedia("(min-width: 1300px)").matches) {
            imgOne ? imgOne.setAttribute('src', 'assets/images/home/desktop/image-hero-paramour.jpg') : '';
            imgTwo ? imgTwo.setAttribute('src',"assets/images/home/desktop/image-hero-seraph.jpg") : '';
            imgThree ? imgThree.setAttribute('src',"assets/images/home/desktop/image-hero-federal.jpg") : '';
            imgFourth ? imgFourth.setAttribute('src', "assets/images/home/desktop/image-hero-trinity.jpg") : '';
        } else if ((window.matchMedia("(max-width: 1300px)").matches) &&
            (window.matchMedia("(min-width: 768px)").matches)) {
            imgOne ? imgOne.setAttribute('src', "assets/images/home/tablet/image-hero-paramour.jpg") : '';
            imgTwo ? imgTwo.setAttribute('src', "assets/images/home/tablet/image-hero-seraph.jpg") : '';
            imgThree ? imgThree.setAttribute('src', "assets/images/home/tablet/image-hero-federal.jpg") : '';
            imgFourth ? imgFourth.setAttribute('src', "assets/images/home/tablet/image-hero-trinity.jpg") : '';
        } else if (window.matchMedia("(max-width: 768px)").matches) {
            imgOne ? imgOne.setAttribute('src', "assets/images/home/mobile/image-hero-paramour.jpg") : '';
            imgTwo ? imgTwo.setAttribute('src', "assets/images/home/mobile/image-hero-seraph.jpg") : '';
            imgThree ? imgThree.setAttribute('src', "assets/images/home/mobile/image-hero-federal.jpg") : '';
            imgFourth ? imgFourth.setAttribute('src', "assets/images/home/mobile/image-hero-trinity.jpg") : '';
        }
    },

    slideImages: function () {
        let counter = 2;
        const firstLabel = document.getElementById('slide-label1');
        const secondLabel = document.getElementById('slide-label2');
        const thirdLabel = document.getElementById('slide-label3');
        const fourthLabel = document.getElementById('slide-label4');
        if (firstLabel && secondLabel && thirdLabel && fourthLabel) {
            firstLabel.classList.add('background_black');
            setInterval(function() {
                if (document.getElementById('radio' + counter)) {
                    document.getElementById('radio' + counter).checked = true;
                }

                if (counter === 1) {
                    firstLabel.classList.add('background_black')
                } else {
                    firstLabel.classList.remove('background_black')
                }
                if (counter === 2) {
                    secondLabel.classList.toggle('background_black')
                } else {
                    secondLabel.classList.remove('background_black')
                }
                if (counter === 3) {
                    thirdLabel.classList.toggle('background_black')
                } else {
                    thirdLabel.classList.remove('background_black')
                }
                if (counter === 4) {
                    fourthLabel.classList.toggle('background_black')
                } else {
                    fourthLabel.classList.remove('background_black')
                }
                counter++;
                if(counter > 4){
                    counter = 1;
                }
            },5000);
        }
    },

    clickImages: function () {
        const firstLabel = document.getElementById('slide-label1');
        const secondLabel = document.getElementById('slide-label2');
        const thirdLabel = document.getElementById('slide-label3');
        const fourthLabel = document.getElementById('slide-label4');

        if (firstLabel) {
            firstLabel.addEventListener('click', function() {
                firstLabel.classList.add('background_black')
                if (secondLabel.classList.contains('background_black')){
                    secondLabel.classList.remove('background_black');
                }
                if (thirdLabel.classList.contains('background_black')){
                    thirdLabel.classList.remove('background_black');
                }
                if (fourthLabel.classList.contains('background_black')){
                    fourthLabel.classList.remove('background_black');
                }
            });
        }

        if (secondLabel) {
            secondLabel.addEventListener('click', function() {
                secondLabel.classList.add('background_black')
                if (firstLabel.classList.contains('background_black')){
                    firstLabel.classList.remove('background_black');
                }
                if (thirdLabel.classList.contains('background_black')){
                    thirdLabel.classList.remove('background_black');
                }
                if (fourthLabel.classList.contains('background_black')){
                    fourthLabel.classList.remove('background_black');
                }
            });
        }

        if (thirdLabel) {
            thirdLabel.addEventListener('click', function() {
                thirdLabel.classList.add('background_black')
                if (firstLabel.classList.contains('background_black')){
                    firstLabel.classList.remove('background_black');
                }
                if (secondLabel.classList.contains('background_black')){
                    secondLabel.classList.remove('background_black');
                }
                if (fourthLabel.classList.contains('background_black')){
                    fourthLabel.classList.remove('background_black');
                }
            });
        }

        if (fourthLabel) {
            fourthLabel.addEventListener('click', function() {
                fourthLabel.classList.add('background_black')
                if (firstLabel.classList.contains('background_black')){
                    firstLabel.classList.remove('background_black');
                }
                if (secondLabel.classList.contains('background_black')){
                    secondLabel.classList.remove('background_black');
                }
                if (thirdLabel.classList.contains('background_black')){
                    thirdLabel.classList.remove('background_black');
                }
            });
        }
    },

};

NavBarHandler();

SliderHandler.changeImages();

SliderHandler.slideImages();

SliderHandler.clickImages();

loader.load().then(() => {
    let location = {lat: 34.618721, lng: -89.964546 };
    let markerOne = {lat: 36.158578, lng: -86.779040 };
    let markerTwo = {lat: 32.325070, lng: -96.626604 };
    let viewMapOne = document.getElementById('view-map-one');
    let viewMapTwo = document.getElementById('view-map-two');
    let mapContainer = document.getElementById('map');

    if (mapContainer) {
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: location
        });
        const contentStringOne = '<h3 class="dark-blue">Main Office</h3>';
        const infowindowOne = new google.maps.InfoWindow({
            content: contentStringOne,
        });
        const contentStringTwo = '<h3 class="dark-blue">Office II</h3>';
        const infowindowTwo = new google.maps.InfoWindow({
            content: contentStringTwo,
        });
        let markerVarOne = new google.maps.Marker({
            position: markerOne,
            map: map
        });
        let markerVarTwo = new google.maps.Marker({
            position: markerTwo,
            map: map,
        });
        markerVarOne.addListener("click", () => {
            infowindowOne.open(map, markerVarOne);
        });
        markerVarTwo.addListener("click", () => {
            infowindowTwo.open(map, markerVarTwo);
        });
        markerVarOne.addListener("click", () => {
            map.setZoom(16);
            map.setCenter(markerVarOne.getPosition());
        });
        markerVarTwo.addListener("click", () => {
            map.setZoom(16);
            map.setCenter(markerVarTwo.getPosition());
        });
        viewMapOne.addEventListener('click', () => {
            map.setZoom(16);
            map.setCenter(markerVarOne.getPosition());
        });
        viewMapTwo.addEventListener('click', () => {
            map.setZoom(16);
            map.setCenter(markerVarTwo.getPosition());
        });
    }

});