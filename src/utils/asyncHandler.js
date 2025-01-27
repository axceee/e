const asyncHandler = async (fn)=>{async(rq,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(error.code || 500).json({
            success:false,
            message: error.message
        })
    }
}}



export default asyncHandler