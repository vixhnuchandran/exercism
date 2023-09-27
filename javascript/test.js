function checkPhoneNumber(number) {
    const phoneNumberRegex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

    if (phoneNumberRegex.test(number)) {
        return "Thanks! You can now download me to your phone.";
    } else {
        return `Oops, it seems like I can't reach out to ${number}`;
    }
}
console.log(checkPhoneNumber('(+34) 659-771-594'));
console.log(checkPhoneNumber('659-771-594'));
