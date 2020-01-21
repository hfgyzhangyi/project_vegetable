const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
	res.send({
		fee:20
	});
})
module.exports=router;