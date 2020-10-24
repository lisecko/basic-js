const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(text, k) {
    
    let alfavit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

    let crypt = ''

    for(let i = 0; i < message.length; i++)
    {
        if(key_str.length === message.length) break;
        key_str += key[i]
        
        if(i === 3) i = -1
    }
    
    
    for(let i = 0; i < message.length; i++)
    {
    	for(let x = 0; x < alfavit.length; x++)
        {
        	if(message[i] === alfavit[x])
            {
            	for(let y = 0; y < alfavit.length; y++)
                {
                	if(key_str[i] === alfavit[y])
                    {
                    	document.write(alfavit[x])
                        document.write(x)
                    	document.write(alfavit[y])
                        document.write(y)                     
                        
                        for(let k = x; k < alfavit.length; k++)
                        {                        	 
                        	if(k === y)
                            {
                            	crypt += alfavit[k]
                                break;
                            }
                        	if(k === 25) k = -1
                        }
                        document.write(crypt)
                        document.write('<br>')
                        
                        break;
                    }
                }
                break;
            }
        }
    }
	
    document.write('<br>')
    document.write(crypt)
  }    
  decrypt(text, k) {
    let alfavit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

    let result = "";
 
    let keyword_index = 0;
 
    for(let symbol of input)
    {
        let p = (Array.IndexOf(alfavit, symbol) + N -
            Array.IndexOf(alfavit, k[keyword_index])) % N;
 
        result += alfavit[p];
 
        keyword_index++;
 
        if ((keyword_index + 1) == k.length)
            keyword_index = 0;
    }
 
    return result.toUpperCase;
  }
}

module.exports = VigenereCipheringMachine;
