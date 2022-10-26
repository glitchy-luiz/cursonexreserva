module.exports = (app)=>{
    app.get('/cadastro',(req,res)=>{
        res.render('cadastro.ejs')
    })
}