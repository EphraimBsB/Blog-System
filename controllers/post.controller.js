const models = require('../models');
const validator = require('fastest-validator');
// function to create and save a post
function save(req,res){
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl:req.body.image_url,
        categoryId:req.body.category_id,
        userId: 1
    }
    //validation for creating a blog
    const schema = {
        title:{type:'string', optional:false, max:'100'},
        content:{type:'string', optional:false, max:'500'},
        category:{type:'number', optional:false}
    }
    const v = new validator();
    const validationResponse = v.validate(post, schema);
    if(validationResponse!==true){
        return res.status(400).json({
            message: "Validation has faild",
            errors: validationResponse
        })
    }
    models.Post.create(post).then(result=>{
        res.status(201).json({
            message: "Post has been created succcefuly",
            post: result
        })
    }).catch(error=>{
        res.status(500).json({
            message: "Something went wrong",
            error: error})
        });
}

//function to get a single post by id

function show(req,res){
    const id = req.params.id;
    models.Post.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: '404 Post Not Found',
            }) 
        }
       
    }).catch(error=>{
        res.status(500).json({
            message: 'Something went wrong',
        })
    })
}

// function to get all the  posts

function findAll(req,res){
    models.Post.findAll().then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json({
            message:'Something went wrong'
        })
    })
}

//function to update a post

function update(req,res){
    const id = req.params.id;
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl:req.body.image_url,
        categoryId:req.body.category_id,        
    }
    const userId = 1;
    //validation code
    const schema = {
        title:{type:'string', optional:false, max:'100'},
        content:{type:'string', optional:false, max:'500'},
        category:{type:'number', optional:false}
    }
    const v = new validator();
    const validationResponse = v.validate(updatedPost, schema);
    if(validationResponse!==true){
        return res.status(400).json({
            message: "Validation has faild",
            errors: validationResponse
        })
    }

    models.Post.update(updatedPost,{where:{id:id, userId:userId}}).then(result=>{
        res.status(200).json({
            message: "Post updated succefully",
            post:updatedPost
        })
    }).catch(err=>{
        res.status(500).json({
            message: "Something went wrong",
            err:err
        })
    })
}

//function to delete a post

function destroy(req,res){
    const id = req.params.id;
    const userId = 1;
    models.Post.destroy({where:{id:id, userId:userId}}).then(result=>{
        res.status(200).json({
            message: "Post Deleted succefully"
        })
    }).catch(err=>{
        res.status(500).json({
            message: "Something went wrong",
            err:err})})
}

module.exports = {
    save: save,
    show:show,
    findAll:findAll,
    update:update,
    destroy:destroy
}