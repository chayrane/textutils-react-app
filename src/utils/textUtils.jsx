// Function to convert sentence to Title Case.
export function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

// Function to convert sentence to Capitalize/Sentence Case.
export function toCapitalizeCase(str) {
  let text = str.toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
}
