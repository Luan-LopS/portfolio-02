document.addEventListener('DOMContentLoaded', function(e) {
    // Obtém a URL da página atual
    var url = window.location.href;
    const home = 'https://luan-eight.vercel.app/'

    var linkHome = document.querySelectorAll('header .container nav ul li a')[0];
   
    
    // Verifica qual link do menu tem o mesmo href da página atual
    document.querySelectorAll('header .container nav ul li a').forEach(function(item) {
        item.getAttribute('href')
        if (url == item) {
            item.classList.add('active');
        }else {
            linkHome.classList.add('active')
        }
    });
});

$(document).ready(function(){
    $('form').validate({
        rules:{
            nome:{
                required:true
            },       
            assunto:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            sugestao:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor Insira o seu nome  <br>',
            assunto: 'Faltou este campo <br>',
            email: 'Faltou o email<br>',
            sugestao: 'Este campo é o mais importante por favor colabore<br>'
        }
    })

    $('.menu').click(function(){
        $('nav').slideToggle()
    })
})


