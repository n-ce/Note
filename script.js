const text = document.querySelector('textarea');
text.value = localStorage.getItem('key');
text.oninput = () => {
  localStorage.setItem('key', text.value);
}
let clean = () => {
  localStorage.clear();
  location.reload();
}
let c;
let theme = () => {
  if (c == null) {
    document.body.style.backgroundColor = 'black';
    document.querySelector('meta[name="theme-color"]').setAttribute("content", 'black');
    text.style.color = 'white';
    c = true;
  }
  else {
    document.body.style.backgroundColor = 'white';
    document.querySelector('meta[name="theme-color"]').setAttribute("content", 'white');
    text.style.color = 'black';
    c = null;
  }
}
let download = () => {
  const textToBLOB = new Blob([text.value], { type: 'text/plain' });
  let newLink = document.createElement("a");
  newLink.download = 'Note.txt';

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
}
async function loadFile(file) {
  text.value = await file.text();
}