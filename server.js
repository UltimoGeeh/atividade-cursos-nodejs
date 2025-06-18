const express = require('express');

const app = express();

const cursos = []

app.use(express.json())

app.get('/cursos', function(request, response) {
    response.send(cursos);
})

app.get('/cursos/:posicao', function(request, response) {
    const posicaoCurso = request.params.posicao

    const nomeCurso = cursos[posicaoCurso]
    
    console.log(nomeCurso)

    response.json({
        mensagem: "Curso encontrado",
        nome: nomeCurso
    })
})


app.post('/criar-curso', function(request, response) {
    
    const nomeCurso = request.body.nome;
    
    console.log(nomeCurso)

    cursos.push(nomeCurso)
    
    response.json({
        mensagem: "Curso criada com sucesso"
    })

    response.send('Rota para criar um curso')
})

app.put('/atualizar-curso/:posicao', function(request, response) {
    const posicaoCurso = request.params.posicao;
    const novoNome = request.body.nome;

    cursos[posicaoCurso] = novoNome;

    response.json({
        mensagem: "O curso foi atualizado"
    });

    response.send('Rota para atualizar o curso')
})

app.delete('/deletar-curso/:posicao', function(request, response) {

    const posicaoCurso = request.params.posicao;

    cursos.splice(posicaoCurso, 1)

    response.json({
        mensagem: "Curso apagado"
    })

    response.send('Rota para deletar o curso')
})

app.listen(3003, function() {
    console.log('Servidor rodando com sucesso')
})