function deleteCharacters() {
  // Get the desired character from the 'a space' input field
  let char = document.getElementById('a-space').value;

  // Get the text from the 'b space' input field
  let text = document.getElementById('b-space').value;

  // Use the replace() method to remove all instances of the desired character from the text
  let newText = text.replace(new RegExp(char, 'g'), '');

  // Set the 'b space' input field to the new text
  document.getElementById('b-space').value = newText;
}
