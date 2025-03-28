const models = require('../models');

function save(req, res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageURL: req.body.imageURL,
        categoryID: req.body.categoryID,
        userID: 1
    }
    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post Created Successfully",
            post: result
        })
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong",
            error: err
        })

    });
}


module.exports = {
    save: save
}