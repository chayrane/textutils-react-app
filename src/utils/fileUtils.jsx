// Function to downlaod data inside textarea.
export function downloadToTxtFile(textToSave) {
  var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  var fileNameToSaveAs = `text-utils-${formatDateForTxtFileName()}.txt`;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.href = textToSaveAsURL;

  downloadLink.click();
}

// Formatting date for naming downloaded text file.
function formatDateForTxtFileName() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}