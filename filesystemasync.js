const {readFile, writeFile}=require('fs')

console.log('start')

readFile('./cont/suncont/text1.txt', 'utf-8', (err, result)=>{
    if(err){
        
        console.log(err)
    }
    const first=result
    


readFile('./cont/suncont/text2.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err)
    }   
    const second=result
        
writeFile('./cont/suncont/text3.txt', `${first} \n${second}`, (err, result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('witing the file')
        
    }
} )
})   

})

console.log('next')

