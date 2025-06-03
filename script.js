const bar = document.getElementById('bar');
const cs = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(cs){
    cs.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
