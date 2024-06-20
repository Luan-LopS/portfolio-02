<?php

$nome=$_POST['nome'];
$assunto=$_POST['assunto'];
$email=$_POST['email'];
$sugestao=$_POST['sugestao'];

$arquivo = `
<html>
    <body> 
        <header>
            <p>Nome: $nome</p>
            <p>Email: $email</p>
            <p>Assunto: $nome</p>
        </header>
        <main>
            <p><b>Sugestão:</b><br>
                $sugestao
            </p>
        </main>
    </body>
<html>
`;

$destino = "luam10@hotmail.com.br";

$headers = "MIME-version: 1.0\r\n";
$headers .= "Content-type: text/html; chaset-iso-8859-1\r\n";
$headers .= "From: $nome <$email>\r\n";

mail($destino,$assunto,$arquivo, $headers);

echo"<meta http-equiv='refresh' content='0;URL>=../html/contact.html'>";


?>