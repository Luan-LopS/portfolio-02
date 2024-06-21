const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'contatodevluan@gmail.com',
        pass: 'notm hamz xiaa azdc'
    }
});

app.post('/enviar', (req, res) => {
    const { nome, assunto, email, sugestao } = req.body;

    const mailOptions = {
        from: 'contatodevluan@gmail.com',
        to: 'destinatario@gmail.com', // Coloque o email do destinatário aqui
        subject: assunto,
        html: `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Sugestão: ${sugestao}</p>`,
        text: `Nome: ${nome}\nEmail: ${email}\nSugestão: ${sugestao}`
    };

    transport.sendMail(mailOptions)
        .then(() => {
            console.log('Email enviado com sucesso');
            res.redirect('/index.html'); // Redireciona para a página inicial após enviar o email
        })
        .catch((err) => {
            console.error('Erro ao enviar email:', err);
            res.status(500).send('Erro ao enviar email');
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
