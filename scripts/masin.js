document.addEventListener('DOMContentLoaded', function(e) {
    // Obtém a URL da página atual
    var url = window.location.href;

    // Verifica qual link do menu tem o mesmo href da página atual
    document.querySelectorAll('header .container nav ul li a').forEach(function(item) {
        console.log(item)
        console.log(url)
        item.getAttribute('href')
        if (url == item) {
            item.classList.add('active');
        }
    });
});




// wix modelos de sites para o portfolio 
//https://pt.wix.com/website/templates/html/all/6