export function caesar(string, shift) {
  return string
    .split("")
    .map((char) => {
      if (!isLetter(char)) {
        return char;
      } else {
        const letter = String.fromCharCode(
          97 + ((char.toLowerCase().charCodeAt() + shift - 97) % 26)
        );
        return char === char.toUpperCase() ? letter.toUpperCase() : letter;
      }
    })
    .join("");
}

function isLetter(char) {
  const charCode = char.toUpperCase().charCodeAt();
  return charCode >= 65 && charCode <= 90;
}
