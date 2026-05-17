const tipsSection = document.querySelector('.tips-sehat');

if(tipsSection){

window.addEventListener('scroll', ()=>{

    const posisi = tipsSection.getBoundingClientRect().top;

    if(posisi < window.innerHeight - 100){
        tipsSection.style.opacity = "1";
        tipsSection.style.transform = "translateY(0)";
    }

});

}

// Efek hover statistik
const statBox = document.querySelectorAll('.box-stat');

statBox.forEach((box)=>{

    box.addEventListener('mouseenter', ()=>{

        box.style.transform = "scale(1.08)";
        box.style.transition = "0.3s";

    });

    box.addEventListener('mouseleave', ()=>{

        box.style.transform = "scale(1)";

    });

});