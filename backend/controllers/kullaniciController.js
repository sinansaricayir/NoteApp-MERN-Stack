const asyncHandler = require('express-async-handler')
const Kullanici = require('../models/kullaniciModel')
const bcyrpt = require('bcryptjs')

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
            email:yeniKullanici.email
        })
    }else{
        res.status(400)
        throw new Error('Geçersiz kullanıcı verisi')
    }


    res.json({mesaj:"Register işlemi tamamlandı !"})

})




const loginKullanici = (req,res)=>{
    res.status(200).json({mesaj:"Login işlemi tamamlandı !"})
}

const getKullanici = (req,res)=>{
    res.status(200).json({mesaj:"Kullanıcı get işlemleri"})
}



module.exports = {
    registerKullanici,
    loginKullanici,
    getKullanici
}