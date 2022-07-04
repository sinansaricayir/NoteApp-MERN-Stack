
const getNotlar = (req,res)=>{
    res.status(200).json({mesaj:'controller get işlemi'})
}

const setNotlar = (req,res)=>{
    res.status(200).json({mesaj:'controller set işlemi'})
}

const putNotlar = (req,res)=>{
    res.status(200).json({mesaj:`${req.params.id} li put işlemi`})
}

const deleteNotlar = (req,res)=>{
    res.status(200).json({mesaj:`${req.params.id} li delete işlemi`})
}

module.exports={
    getNotlar,
    setNotlar,
    putNotlar,
    deleteNotlar
}