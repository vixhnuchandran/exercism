//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



const plain = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'zyxwvutsrqponmlkjihgfedcba';

export const encode = (plainText) => {
    plainText = plainText.replace(/[\s+.,]+/g, '');
    const cipherText = plainText
    .split('')
    .map((item) => (plain.includes(item.toLowerCase()) ? cipher[plain.indexOf(item.toLowerCase())] : item)) 
    .join('');
    return cipherText.match(/.{1,5}/g).join(' ')
};


export const decode = (cipherText) => {
    cipherText = cipherText.replace(/\s+/g, '');
    const plainText = cipherText
    .split('')
    .map((item) => (plain.includes(item.toLowerCase()) ? plain[cipher.indexOf(item.toLowerCase())] : item))
    .join('')
    return plainText
};