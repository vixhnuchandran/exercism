//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const zigzag = (row, col, rows) => col + 2 * (rows - 1 - row);

export const encode = (plainText, rows) => {
    if (rows <= 1) return plainText; // No need to encode

    const columns = plainText.length;
    let encodedText = '';

    for (let r = 0; r < rows; r++) {
        for (let i = r; i < columns; i += 2 * (rows - 1)) {
            encodedText += plainText[i];

            if (r > 0 && r < rows - 1) {
                const zigzagIndex = zigzag(r, i, rows);
                if (zigzagIndex < columns) {
                    encodedText += plainText[zigzagIndex];
                }
            }
        }
    }

    return encodedText;
};

export const decode = (cipherText, rows) => {
    if (rows <= 1) return cipherText;
    const columns = cipherText.length;
    const decodedText = Array(columns).fill('');

    let cipherIndex = 0;

    for (let r = 0; r < rows; r++) {
        for (let i = r; i < columns; i += 2 * (rows - 1)) {
            decodedText[i] = cipherText[cipherIndex++];

            if (r > 0 && r < rows - 1) {
                const zigzagIndex = zigzag(r, i, rows);
                if (zigzagIndex < columns) {
                    decodedText[zigzagIndex] = cipherText[cipherIndex++];
                }
            }
        }
    }

    return decodedText.join('');
};
