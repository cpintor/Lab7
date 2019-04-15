function init() {
  //add your javascrip between these two lines of code

  var d1 = document.getElementById('entrybutton');
  d1.addEventListener('click', function () {
    var msg = document.getElementById('entryinput').value;
    alert("Cristian Pintor: " + msg);
    console.log(msg);
    document.getElementById('textoutput').innerHTML = msg;
  });
}
window.addEventListener('load', init);