
const asyncHandler = require('express-async-handler')

const getNotlar = asyncHandler(async(req,res)=>{
    res.status(200).json({mesaj:'controller get işlemi'})
})

const setNotlar = asyncHandler(async (req,res)=>{
    if(!req.body.mesaj){
        // res.status(400).json({mesaj:'lütfen mesaj giriniz !'})
        res.status(400)
        throw new Error('Lütfen mesaj giriniz !')
    }
    
    res.status(200).json({mesaj:'controller set işlemi'})
})

const updateNotlar = asyncHandler(async(req,res)=>{
    res.status(200).json({mesaj:`${req.params.id} li put işlemi`})
})

const deleteNotlar = asyncHandler(async(req,res)=>{
    res.status(200).json({mesaj:`${req.params.id} li delete işlemi`})
})

module.exports={
    getNotlar,
    setNotlar,
    updateNotlar,
    deleteNotlar
}