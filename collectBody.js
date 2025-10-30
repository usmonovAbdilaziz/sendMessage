function bodyData(req){
    return new Promise((res,rej)=>{
        let body=''
        //chunklarga bulingan uni yig'ayapmiz
        req.on('data',(chunk)=>{
            body+=chunk
        })

        //data yig'ib bulindi endi uni yuboramiz
        req.on('end',()=>{
            res(body)
        })

        //error bulsa 
        req.on('error',(err)=>{
            rej(err)
        })
    })
}
module.exports={bodyData}
