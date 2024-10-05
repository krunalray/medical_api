const { getSettings } = require('./vendor.service');   
const { genSaltSync, hashSync, compareSync} = require("bcrypt");
const fs = require('fs');
const { sign } = require('jsonwebtoken');

var now = new Date();

module.exports = {


    getSettings: async(req,res)=>{
        const showQuery = req.query;
        console.log( Date.now());
        try{
            getSettings(showQuery,(err,results)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        success:0,
                        message: "Data Not Getting"
                    });
                }
                // login imp
                return res.json({success:1,results})
            })
        }catch(error){
            console.log(" Error in show user "+error)
        }
        
    },

    
}
