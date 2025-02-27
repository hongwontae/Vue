const Rating = require('../model/Rating');

exports.postRequest = async(req, res, next)=>{
    const data = req.body;
    console.log(data)
    console.log('pppp')

    const PostData = await Rating.create(data);

    return res.json({
        data : PostData
    })
}

exports.getRequest = async (req, res, next)=>{
    const data = await Rating.findAll();
    return res.json({
        data
    })
}