document.addEventListener('DOMContentLoaded', function(e) {
    // Obtém a URL da página atual
    var url = window.location.href;

    // Verifica qual link do menu tem o mesmo href da página atual
    document.querySelectorAll('header .container nav ul li a').forEach(function(item) {
        item.getAttribute('href')
        if (url == item) {
            item.classList.add('active');
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
            assunto: 'faltou este campo <br>',
            email: 'Flatou o email<br>',
            sugestao: 'este campo é o mais importante por favor colabore<br>'
        }
    })

    $('.menu').click(function(){
        $('nav').slideToggle()
    })
})


