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
let darkMode = () => {
  document.body.style.backgroundColor = 'black';
  document.querySelector('meta[name="theme-color"]').setAttribute("content", 'black');
  text.style.color = 'white';
  localStorage.setItem('theme','black');
  c = true;
}
if (localStorage.getItem('theme') == 'black') {
  darkMode();
}

let theme = () => {
  if (c == null) {
    darkMode();
  }
  else {
    document.body.style.backgroundColor = 'white';
    document.querySelector('meta[name="theme-color"]').setAttribute("content", 'white');
    text.style.color = 'black';
    localStorage.setItem('theme','white');
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
