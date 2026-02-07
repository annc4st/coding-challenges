/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses 
between them (including the first one, excluding the last one).
All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246 */

function ipsBetween(start, end){
    let startNumerical = start.split('.').reduce((acc, octet) => acc* 256 + parseInt(octet), 0)
    let endNUmerical = end.split('.').reduce((acc, octet) => acc* 256 + parseInt(octet), 0)

    return endNUmerical - startNumerical
  }

function ipsBetween(start, end){
    const ipToNumber = (ip) => (ip.split('.').reduce((acc, octet) => acc * 256 + parseInt(octet), 0))
    return ipToNumber(end) - ipToNumber(start)
  }

  console.log(ipsBetween("150.0.0.0", "150.0.0.1"))

  //other
  function ipsBetween(start, end){
    const ip1 = start.split('.')
    const ip2 = end.split('.')
    
    let result = 0
    for (let i = 0; i < 4; i++) {
      result += (ip2[i] - ip1[i]) * 256 ** (3 - i)
    }
    
    return result
  }


  function ipsBetween(start, end){
    function val(ip){return ip.split('.').reduce(function(tot,cur,i){return tot+cur*Math.pow(256,3-i)}, 0);}
    return val(end)-val(start);
  }