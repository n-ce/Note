const textarea = document.querySelector('textarea');
textarea.value = localStorage.getItem('key');
textarea.addEventListener('input', () => {
  localStorage.setItem('key', textarea.value);
});
function clean() {
  localStorage.clear();
  textarea.textContent = '';
}

function download() {
  const textToBLOB = new Blob([textarea.value], { type: 'text/plain' });
  const link = document.createElement('a');
  link.download = 'Note.txt';
  link.href = URL.createObjectURL(textToBLOB);
  link.click();
}
async function loadFile(file) {
  textarea.value = await file.text();
}
