const prisma = require('../config/db');

const createDoubt = async (req ,res) => {
    try{
        let {question,description,subject,priority} = req.body;

        if(!question){
            return res.status(400).json({error: "Question required!!"});
        }
        priority = priority ? priority.toUpperCase() : undefined;
        if(priority && !['HIGH','MEDIUM','LOW'].includes(priority)){
            return res.status(400).json({error : "Invalid priority value!!"});
        }
        const doubt = await prisma.doubt.create({
            data : {question,description,subject,priority},
        });
        res.status(201).json(doubt);
    }catch(error){
        res.status(500).json({error :"This is an error from the server!!"});
    }
};
const getAllDoubts = async (req,res) => {
    try{
        const {status ,priority ,subject} = req.query;
        const filter = {};

        if(status){
            filter.status = status.toUpperCase();
        }
        if(priority){
            filter.priority = priority.toUpperCase();
        }
        if(subject){
            filter.subject = subject;
        }
        const doubts = await prisma.doubt.findMany({
            where : filter,
            orderBy : {createdAt : 'desc'},
        });
        res.status(200).json(doubts);
    }
    catch(error){
        res.status(500).json({error : error.message});
    }
};

const getDoubtByID = async (req,res) => {   
    try{
        const {id} = req.params;
        const doubt = await prisma.doubt.findUnique({
            where : {id : parseInt(id)},
        });
        if(!doubt){
            return res.status(404).json({error : "Doubt not found!!"});
        }
        res.status(200).json(doubt);
    }catch(error){
        res.status(500).json({error : error.message});
    }
};
const updateDoubt = async (req,res) => {
    try{
        const {id} = req.params;

        const updatedDoubt = await prisma.doubt.update({
            where : {id : parseInt(id)},
            data : req.body,
        });
        res.status(200).json(updatedDoubt);
    }catch(error){
        res.status(500).json({error : error.message});
    }
};

const deleteDoubt = async (req,res) => {
    try{
        const {id} = req.params;
        await prisma.doubt.delete({
            where : {id : parseInt(id)},
        });
        res.status(200).json({message : "Doubt deleted successfully!!"  });
    }catch(error){
        res.status(500).json({error : error.message});
    }
};

module.exports = {
    createDoubt,
    getAllDoubts,
    getDoubtByID,
    updateDoubt,
    deleteDoubt
};

