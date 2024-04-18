// Function to convert sentence to Title Case.
export function toTitleCase(sentence) {
  return sentence.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

// Function to convert sentence to Capitalize/Sentence Case.
export function toCapitalizeCase(sentence) {
  let text = sentence.toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Function to convert sentence to AlTeRnAtE Case.
export function toAlternateCase(sentence) {
  return sentence
    .split("")
    .map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    })
    .join("");
}
