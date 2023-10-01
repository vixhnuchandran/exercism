//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



const isPrime = n => {

  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}


export class DiffieHellman {


  constructor(p, g) {
    if (!isPrime(p) || !isPrime(g))
{        throw new Error();
}    
    this.p = p;
    this.g = g;
    
  }

  getPublicKey(privateKey) {
    if (privateKey > 1 && privateKey < this.p)
      return this.g ** privateKey % this.p;;
    throw new Error();
  }


  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }
}