const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanskor = document.querySelector('.skor');


let tanah_sebelumnya;
let selesai;
let skor;



function random_tanah(tanah){
    const Acak = Math.floor(Math.random() * tanah.length);
    const tRandom=tanah[Acak];
    if(tRandom == tanah_sebelumnya){
        random_tanah(tanah)
    }
    tanah_sebelumnya=tRandom;
    return tRandom;
}

function random_waktu(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function muncullkan_tikus(){
    const tanah_Random=random_tanah(tanah);
    const waktu_Random=random_waktu(300,2000);
    tanah_Random.classList.add('muncul');
    setTimeout(()=>{
        tanah_Random.classList.remove('muncul');
        if(!selesai){
        muncullkan_tikus();
        }
    },waktu_Random);
}

function mulai(){
    selesai=false;
    skor=0;
    papanskor.textContent=0;
    muncullkan_tikus();
    setTimeout(()=>{
        selesai=true;
    },20000);
}

function pukul(){
    skor=skor+1;
    papanskor.textContent=skor;
    this.parentNode.classList.remove('muncul');
    
}

tikus.forEach(Acak=>{
    Acak.addEventListener('click',pukul)
});