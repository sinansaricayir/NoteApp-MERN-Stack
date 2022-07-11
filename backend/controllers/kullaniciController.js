const asyncHandler = require('express-async-handler')
const Kullanici = require('../models/kullaniciModel')
const bcyrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const tokenOlustur = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}



const registerKullanici = asyncHandler(async (req,res)=>{
    const {kullaniciAd,email,parola} = req.body;

    if(!kullaniciAd || !email|| !parola){
        res.status(400)
        throw new Error('Lütfen gerekli alanları doldurunuz !')
    }

    const kullanici = await Kullanici.findOne({email})

    if(kullanici){
        res.status(400)
        throw new Error('Bu email mevcut!')
    }

    const adKontrol = await Kullanici.findOne({kullaniciAd})

    if(adKontrol){
        res.status(400)
        throw new Error('Bu kullanıcı adı mevcut !')
    }

    //Bcyrpt çağırılarak parola şifrelenir
    const salt = await bcyrpt.genSalt(10)
    const sifrelenmisParola = await bcyrpt.hash(parola,salt)

   
    const yeniKullanici = await Kullanici.create({
         kullaniciAd,
         email,
         parola:sifrelenmisParola
    })
 

    if(yeniKullanici){
        res.status(201).json({
            _id:yeniKullanici.id,
            kullaniciAd:yeniKullanici.kullaniciAd,
            email:yeniKullanici.email,
            token:tokenOlustur(yeniKullanici._id)
        })
    }else{
        res.status(400)
        throw new Error('Geçersiz kullanıcı verisi')
    }


    res.json({mesaj:"Register işlemi tamamlandı !"})

})




const loginKullanici = asyncHandler(async (req,res)=>{
    const{email,parola} = req.body;
    const kullanici = await Kullanici.findOne({email})
    if(kullanici && (await bcyrpt.compare(parola,kullanici.parola))){
        res.json({
            _id:kullanici.id,
            kullaniciAd:kullanici.kullaniciAd,
            email:kullanici.email,
            token:tokenOlustur(kullanici._id)
        })
    }else{
        res.status(400)
        throw new Error('Geçersiz email yada parola !')
    }
})





const getKullanici =asyncHandler(async (req,res)=>{
    const{_id,kullaniciAd,email} = await Kullanici.findById(req.user.id)

    res.status(200).json({
        id:_id,
        kullaniciAd,
        email
    })
})





module.exports = {
    registerKullanici,
    loginKullanici,
    getKullanici
}