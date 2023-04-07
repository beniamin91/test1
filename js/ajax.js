function sendAjaxRequest(method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(data));
}
