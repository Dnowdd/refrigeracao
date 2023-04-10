// Pega a altura dá página e o local que é possível Scrollar
const scrollableArea = document.documentElement.scrollHeight - window.innerHeight;
// Função que lê a cada scroll da página

window.addEventListener('scroll', function() {
    changeHeightScroller();
    changeStyleHeader();
});

function changeHeightScroller(){
    // Pega a localização da página
    const currentScroll = window.pageYOffset;
    // Tranforma a localização da página em porcentagem
    const scrollPercentage = (currentScroll / scrollableArea) * 100;
    // Muda o Style do Scroller
    var scroller = document.getElementById('scroller');
    scroller.style.height = `${scrollPercentage}%`;
}
function changeStyleHeader(){
    // Pega a localização da página
    const currentScroll = window.pageYOffset;

    if(currentScroll > 0){
        $("#header").addClass("sticky");
    }else{
        $("#header").removeClass("sticky");
    }
}





$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      draggable: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
  