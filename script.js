
function format(command) {
  document.execCommand(command, false, null);
}

function setColor(color) {
  document.execCommand("foreColor", false, color);
}

function setBg(color) {
  document.execCommand("backColor", false, color);
}

function insertLink() {
  const url = prompt("URL eingeben:");
  if (url) {
    document.execCommand("createLink", false, url);
  }
}

function insertImage() {
  const url = prompt("Bild-URL eingeben:");
  if (url) {
    document.execCommand("insertImage", false, url);
  }
}

function zoom(direction) {
  const editor = document.getElementById("editor");
  const currentSize = parseFloat(window.getComputedStyle(editor).fontSize);
  if (direction === "in") editor.style.fontSize = (currentSize + 2) + "px";
  if (direction === "out") editor.style.fontSize = (currentSize - 2) + "px";
}

function exportPDF() {
  const element = document.getElementById("editor");
  const opt = {
    margin:       1,
    filename:     'dokument.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}

function toggleMode() {
  document.body.classList.toggle("dark");
}

// Schriftgröße ändern
document.getElementById("fontSizeSelector").addEventListener("change", function() {
  document.getElementById("editor").style.fontSize = this.value;
});

// Schriftart ändern
document.getElementById("fontSelector").addEventListener("change", function() {
  document.getElementById("editor").style.fontFamily = this.value;
});
