import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import './lib/foundation-explicit-pieces';
import './components/_anim'
// gsap.registerPlugin(DrawSVGPlugin);

svg4everybody();

$('.lang a').click(function(){
    localStorage.setItem('lang', this.innerText.toLowerCase());
})