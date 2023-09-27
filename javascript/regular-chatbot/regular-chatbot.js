// @ts-check

import { resourceUsage } from "process";

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  command.trim();
  const re = /chatbot/i
  const result = command.search(re) === 0 ? true : false;
  return result
}


/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const emojiRegex = /emoji[0-9]+/g;

  // Replace all occurrences of emoji placeholders with a single space
  return message.replace(emojiRegex, '');
}


/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const phoneNumberRegex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;
  
  return phoneNumberRegex.test(number)
    ? "Thanks! You can now download me to your phone."
    : `Oops, it seems like I can't reach out to ${number}`;
}


/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const regex = /\b\w+\.\w+\b/g;
  return userInput.match(regex) || [];
}


  
/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  return `Nice to meet you, ${fullName.replace(/(\w+), (\w+)/, '$2 $1')}`;
}
