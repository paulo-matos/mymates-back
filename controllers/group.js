const Group = require('../models/Group');

const controller = {};

controller.new = async function (req,res) {
    try{
        await Group.create(req.body);
        // HTTP 201: Created - success to create new entry
        res.status(201).send('');
    } catch (error) {
        console.error(error);
        // HTTP 500: Internal Server Error
        res.sendStatus(500).end();
    }
}

controller.list = async function (req, res){
    try {
        const groups = await Group.find();
        res.send(groups);
    } catch (error) {
        console.error(error);
        res.sendStatus(500).end();
    }
}

controller.getOne = async function (req, res) {
    const id = req.params.id;
    try {
        const group = await Group.findById(id);
        if (group) { //group was found
            res.send(group);
        } else { //group not found
            res.sendStatus(404).end();
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500).end();
    }
}

controller.update = async function (req, res) {
    const id = req.body._id;
    try {
        const group = await Group.findByIdAndUpdate(id, req.body);
        //sets the variable in case it has changed, otherwise it's empty
        if (group) {
            //http 204: no content, no data sent AFTER CHANGES
            res.sendStatus(204).send();
        } else {
            res.sendStatus(404).end();
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500).end();
    }
}

controller.delete = async function (req, res){
    const id = req.body._id;
    try{
        const group = await Group.findByIdAndDelete(id);
        if (group){
            //204 = no content, no more data AFTER DELETING
            res.sendStatus(204).end();
        }else{
            res.sendStatus(404).end();
        }
    }catch(error){
        console.error(error);
        res.sendStatus(500).end();
    }
}

module.exports = controller;