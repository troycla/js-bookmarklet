
function psform(){
javascript: (function() { var s, F, j, f, i; s = []; F = document.forms; for (j = 0; j < F.length; ++j) { f = F[j]; for (i = 0; i < f.length; ++i) { if (f[i].type.toLowerCase() == "password") s.push(f[i].value); } } if (s) alert((s+'').replace(/,\s*$/, ""));})();
}
