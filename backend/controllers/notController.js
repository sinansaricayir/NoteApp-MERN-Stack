
const asyncHandler = require('express-async-handler')
const notModel = require('../models/notModel')

const getNotlar = asyncHandler(async(req,res)=>{
    const notlar = await notModel.find()
    return res.status(200).json(notlar)
})

const setNotlar = asyncHandler(async (req,res)=>{
    if(!req.body.baslik || !req.body.aciklama){
        res.status(400)
        throw new Error('Lütfen başlık ve açıklama giriniz !')
    }

    const not = await notModel.create({
        baslik:req.body.baslik,
        aciklama:req.body.aciklama,
        oncelik:req.body.oncelik
    })

    return res.status(200).json(not)
})

const updateNotlar = asyncHandler(async(req,res)=>{
    // res.status(200).json({mesaj:`${req.params.id} li put işlemi`})
    const not = await notModel.findById(req.params.id)
    if(!not){
        res.status(400)
        throw new Error('Not bulunamadı !')
    }

    const guncellendi = await notModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(guncellendi)
})

const deleteNotlar = asyncHandler(async(req,res)=>{
    // res.status(200).json({mesaj:`${req.params.id} li delete işlemi`})
    const not = await notModel.findById(req.params.id)
    if(!not){
        res.status(400)
        throw new Error('Not bulunamadı !')
    }

    await not.remove()
    res.status(200).json({mesaj:'Not silindi...'})
})

module.exports={
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}