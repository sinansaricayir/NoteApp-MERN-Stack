
const registerKullanici = (req,res)=>{
    res.status(200).json({mesaj:"Register işlemi tamamlandı !"})
}

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