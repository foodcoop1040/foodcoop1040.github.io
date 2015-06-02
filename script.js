function loaded() {
  var a = document.querySelectorAll ? document.querySelectorAll(".mail") : [];
  for (var i = 0; i < a.length; ++i)
    a[i].href = "mailto:" + (a[i].innerHTML = a[i].innerHTML.replace(" [\u00E4t] ", "@").replace(" [punkt] ", "."));
}
