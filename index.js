const express = require ('express')
const conexao = require ('./db')
const app = express()
const  {engine} = require ('express-handlebars')

//add bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'))
//config express
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


//manipulação de dados
app.use(express.json());
app.use(express.urlencoded({extends:false}))

app.get('/',(req,res)=>{
    res.render('api')
      
    })

//view veiculos cadastrados
app.get('/viewall',(req,res)=>{ 
conexao.query('SELECT * FROM veiculos', function view(erro,retorno){
    res.render("viewall", {carros:retorno})
  
})

});

//deletar por id 
app.get('/remover/:id', function(req,res){
    const id = req.params.id;
    conexao.query(`DELETE FROM veiculos WHERE id = ?`,[id], function (erro,retorno){
        if (erro) throw erro

        res.redirect('/viewall')
    });
});

//retorna os dados do veiculo que clicar no botão editar 
 app.get('/formEditar/:id', function(req,res){
 conexao.query(`SELECT * FROM veiculos WHERE id=${req.params.id}`,function(erro,result){
    // caso haja erro comando sql
    if(erro) throw erro

    //caso execute 
    res.render('formEditar', {veiculo:result[0]})
 })
    
 })
//editar 
 app.post('/editar', function(req,res){
    let id=req.body.id
    let marca=req.body.marca;
    let modelo=req.body.modelo;
    let ano =req.body.ano;
    let prop=req.body.proprietario;
    let cor=req.body.cor;

    const query = `UPDATE veiculos SET marca = ?, modelo = ?, ano = ?, proprietario = ?, cor = ? WHERE id = ?`;
    const values = [marca, modelo, ano, prop, cor, id];
    
    conexao.query(query, values, function (erro, retorno) {
        if (erro) throw erro

        console.log(retorno)
        res.redirect('/')
    })
 })


 //buscar por id
 app.get('/search', function (req,res){
    let id=req.query.id
    const query = `SELECT * FROM veiculos WHERE id=?`;
    const values=[id];
    conexao.query(query,values, function(erro, retorno){
        if (erro) throw erro
        res.render('searchId', { carros: retorno.length ? retorno : [] });
    })
 })

 //buscar por ano 
 app.get('/searchYear', function (req,res){
    let year=req.query.ano
    const query=`SELECT * FROM veiculos WHERE ano=?`;
    const values=[year]
    conexao.query(query,values, function(erro,retorno){
        if (erro) throw erro
        res.render('searchYear', {carros: retorno.length?retorno : []})
    })
 })

 //buscar por cor 
 app.get('/searchColor',function(req,res){
    let cor=req.query.cor
    const query=`SELECT * FROM veiculos WHERE cor=?`;
    const values=[cor]
    conexao.query(query,values, function (erro,retorno){
        if (erro) throw erro
        res.render('searchColor', {carros:retorno.length?retorno : []})
    })
 })

 //cadastro
 app.post('/cadastrar', function (req,res){ //cadastro 
    let marca=req.body.marca;
    let modelo=req.body.modelo;
    let ano =req.body.ano;
    let prop=req.body.proprietario;
    let cor=req.body.cor;

    let sql = ` INSERT INTO veiculos (marca,  modelo, ano, proprietario, cor) VALUES ('${marca}', '${modelo}', ${ano}, '${prop}', '${cor}')`
    conexao.query(sql, function(erro,retorno){
       //caso ocorra erro
        if(erro) throw erro
        
        //caso ocorra o cadastro 
        console.log(retorno)
        res.redirect('/')

    });

})

 app.listen(3030, ()=>{
   console.log(`example app listening on port ${3030}`)
 })