const textarea = <HTMLTextAreaElement>document.querySelector('textarea');

textarea.value = localStorage.getItem('key') || '';
textarea.addEventListener('input', () => {
  localStorage.setItem('key', textarea.value);
});

document.getElementById('clear')?.addEventListener('click', () => {
  localStorage.removeItem('key');
  textarea.textContent = '';
});

document.getElementById('download')?.addEventListener('click', () => {
  const textToBLOB = new Blob([textarea.value], { type: 'text/plain' });
  const link = document.createElement('a');
  link.download = 'Note.txt';
  link.href = URL.createObjectURL(textToBLOB);
  link.click();
});

const upload = <HTMLInputElement>document.getElementById('upload');

upload.addEventListener('change', async () => {
  textarea.value = await (<FileList>upload.files)[0].text();
  localStorage.setItem('key', textarea.value);
})
