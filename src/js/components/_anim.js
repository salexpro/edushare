/* global gsap */
import WOW from 'wow.js'
import '../plugins/_DrawSVGPlugin'; // quiet

const tl = gsap.timeline({ paused: true })
const tlItems = gsap.timeline({ paused: true, delay: 0.5 })

document.querySelectorAll('[data-color]').forEach((el, i) => {
    const dur = document.querySelector(`.token_legend_item--${el.dataset.color} small`).innerText.match(/\d+/g)[0];
    tl.fromTo(el, { drawSVG: 0 }, { drawSVG: '100%', duration: dur / 10, ease: 'none'}, `-=${dur / 10 / 4}`)

    tlItems.to(`.token_legend_item--${el.dataset.color}`, { opacity: 1, duration: 0.7}, i * 0.1)
    tlItems.fromTo(`.token_legend_item--${el.dataset.color}`, { x: -20 }, { x: 0, ease: 'elastic.out(1.2, 0.75)', duration: 1}, i * 0.1)
})

const animateEl = () => {
    gsap.fromTo(tl, { progress: 0 }, { progress: 1, duration: 3, ease: 'power4.out' })
    tlItems.play()
}

new WOW({
    offset: 300,
    callback: box => animateEl(box) 
}).init();