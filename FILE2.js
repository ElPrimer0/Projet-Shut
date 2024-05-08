var gbppd = (function () {
  let e = document.getElementById("viewport"),
    t = null,
    n = [],
    o = [],
    l = document.getElementsByClassName("overflow-scrolling"),
    r = l[0].scrollHeight,
    i = 0,
    a = "",
    c = function (e, t) {
      for (let t of e)
        if (
          "childList" == t.type &&
          ((o = t.target.querySelectorAll('.pageImageDisplay img')), o)
        )
          for (let e of o) n.push(e.src);
    },
    s = async function () {
      await new Promise(resolve => {
        (i += Math.floor(751 * Math.random()) + 50);
        if (i < r) {
          l[0].scrollBy(0, 800);
          setTimeout(resolve, 500); // Attendre un court instant avant de continuer le défilement
        } else {
          clearInterval(a);
          resolve();
        }
      });
    };
  return {
    start: function () {
      (t = new MutationObserver(c)),
        t.observe(e, { attributes: !0, childList: !0, subtree: !0 }),
        (a = setInterval(s, 500));
    },
    finish: function () {
      {
        let o = new Set(n),
          l = window.open(),
          r = 0;
        for (let e of o)
          l.document.write(
            '<a href="' + e + '" download="page-0' + r + '">' + e + "</a><br>"
          ),
            (r += 1);
        let i = l.document.getElementsByTagName("a");
        (e = i),
          (function t(n) {
            n >= e.length ||
              (e[n].href.match(/books.google./) && e[n].click(),
              setTimeout(function () {
                t(n + 1);
              }, 500));
          })(0),
          t && (t.disconnect(), (t = null));
      }
      var e;
    },
  };
})();

// Pour démarrer le téléchargement des pages
gbppd.start();

// Pour arrêter le téléchargement et ouvrir les liens téléchargés
gbppd.finish();
