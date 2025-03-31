const models = require('../models');
const Validator = require('fastest-validator');

function save(req, res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageURL: req.body.imageURL,
        categoryID: req.body.categoryID,
        userID: 1
    }

    const Schema = {
        title: {type: "string", optional: false, max: "500"},
        content: {type: "string", optional: false, max: "500"},
        categoryID: {type: "number", optional: false}
    }

    const v = new Validator();
    const validationResponse = v.validate(post, Schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message:"Validation failed.",
            errors: validationResponse
        });
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

function show(req, res){
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({
                message: "Post Not Found",
            })
        }
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
        })
    })
}

function index(req, res){
    models.Post.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
        })
    })
}

function update(req, res){
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageURL: req.body.imageURL,
        categoryID: req.body.categoryID,
    }
    const userID = 1;

    const Schema = {
        title: {type: "string", optional: false, max: "500"},
        content: {type: "string", optional: false, max: "500"},
        categoryID: {type: "number", optional: false}
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedPost, Schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message:"Validation failed.",
            errors: validationResponse
        });
    }

    models.Post.update(updatedPost, {where: {id: id, userID: userID}}).then(result => {
        res.status(200).json({
            message: "Post Updated Successfully",
            post: updatedPost
        });
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    })
}
function destroy(req, res){
    const id = req.params.id;
    const userID = 1;

    models.Post.destroy({where: {id:id, userID: userID}}).then(result => {
        res.status(200).json({
            message: "Post Deleted"
        })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}


module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}