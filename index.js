const nodemailer = require('nodemailer')
const express = require('express')

const app= express()

app.use(express.urlencoded({extended:true}))

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: 'contatodevluan@gmail.com',
        pass: 'notm hamz xiaa azdc'
    }
})

app.post('/enviar', (req,res)=>{
    const {nome, assunto, email, sugestao} = req.body
    transport.sendMail({
        from: '',
        to: '',
        subject: '',
        html: '',
        text: ''
    })
    .then(()=> console.log('Enviado com sucesso'))
    .catch((err)=>console.log('Erro ao enviar email', err))
    res.redirect('/index.html')
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})