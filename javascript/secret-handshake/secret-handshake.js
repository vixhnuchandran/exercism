//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export 
const commands = (val) => {
    let output = [];
    const decimalNum = val;
    let binaryRep = decimalNum.toString(2);
    while (binaryRep.length < 5) {
        binaryRep = '0' + binaryRep;
    }
    binaryRep = binaryRep.split('').reverse()
    if (binaryRep[0] === '1') {
        output.push('wink');
    }
    if (binaryRep[1] === '1') {
        output.push('double blink');
    }
    if (binaryRep[2] === '1') {
        output.push('close your eyes');
    }
    if (binaryRep[3] === '1') {
        output.push('jump');
    }
    if (binaryRep[4] === '1') {
        output = output.reverse();
    }
    // console.log(binaryRep)
    return output;

};