/* Theme toggle: cycles system -> light -> dark -> system.
   Persists the explicit choice only; "system" clears the stamp. */
(function () {
  var KEY = "yea-theme";
  var root = document.documentElement;

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch (e) { /* private mode */ }
  }
  function apply(v) {
    if (v === "light" || v === "dark") root.setAttribute("data-theme", v);
    else root.removeAttribute("data-theme");
  }
  function label(v) {
    return v === "light" ? "Light" : v === "dark" ? "Dark" : "Auto";
  }

  var stored = read();
  apply(stored);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".themetoggle");
    if (!btn) return;
    var order = [null, "light", "dark"];
    function sync() {
      var cur = read();
      btn.textContent = label(cur);
      btn.setAttribute("aria-label", "Colour theme: " + label(cur) + ". Click to change.");
    }
    sync();
    btn.addEventListener("click", function () {
      var cur = read();
      var next = order[(order.indexOf(cur === "light" || cur === "dark" ? cur : null) + 1) % order.length];
      write(next);
      apply(next);
      sync();
    });
  });
})();
