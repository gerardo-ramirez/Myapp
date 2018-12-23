const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.ejs');
});
router.get('/redaccion',(req,res)=>{
    res.render('redaccion.ejs');

});
router.get('/multimedia',(req,res)=>{
    res.render('multimedia.ejs')

});
router.get('/radio', (req,res)=>{
    res.render('radio.ejs')
});
router.get('/contacto',(req,res)=>{
    res.render('contacto.ejs')
});

module.exports = router ;