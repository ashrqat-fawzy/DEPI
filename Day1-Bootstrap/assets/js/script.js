onload=function(){

    const scrollUpBtn = document.querySelector('.scrollUpBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollUpBtn.style.display = 'block'; 
    } else {
        scrollUpBtn.style.display = 'none'; 
    }
});
}