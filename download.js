function downloadTextDatei() {
  var feld = document.getElementById('meinText');
  if (!feld) {
    alert('Textfeld nicht gefunden.');
    return;
  }

  var text = feld.value || '';
  var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  var url = window.URL.createObjectURL(blob);
  var link = document.createElement('a');

  link.href = url;
  link.download = 'mein-text.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
}
