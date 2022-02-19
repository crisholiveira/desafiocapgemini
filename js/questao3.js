let palavra = 'ifailuhkqq'
let palavra2 = 'ifailuhkqq'

let array = palavra.split("")
let array2 = palavra2.split("")


for(let i = 0; i < array.length; i++){
  
    for(let j = 1; j < array.length; j++){

      if(array[i] == array2[j]){
        process.stdout.write(`(${array[i]},${array2[j]})`)
            
      }
      array2.shift()
      
      
    }
    
    console.log()
    
    }