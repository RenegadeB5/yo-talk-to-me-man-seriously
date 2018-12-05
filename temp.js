function($0) {
        {
            return !!window[UTF8ToString($0)]
        }
    }), (function() {
        {
            return document.getElementsByName("google_osd_static_frame").length > 0
        }
    }), (function($0) {
        {
            delete window["acu" + $0]
        }
    }), (function($0, $1, $2) {
        {
            var hasLoaded = false;
            var f = new Image;
            f.onload = (function() {
                if (!window["acu" + $2]) return;
                hasLoaded = true;
                window["acu" + $2][$1] = false
            });
            f.onerror = (function() {
                if (!window["acu" + $2]) return;
                if (!hasLoaded) window["acu" + $2][$1] = true
            });
            f.src = window.location.protocol + UTF8ToString($0)
        }
    }), (function($0, $1) {
        {
            return !window["acu" + $1] || !!window["acu" + $1][$0]
        }
    }), (function($0, $1) {
        {
            return typeof window["acu" + $1][$0] == "undefined"
        }
    }), (function($0) {
        {
            var s = document.querySelectorAll(UTF8ToString($0));
            for (var i = 0; i < s.length; ++i) {
                if (s[i].clientHeight != 0) {
                    var c = s[i];
                    while (c && c != document.body) {
                        c = c.parentNode
                    }
                    return c == document.body
                }
            }
            return false
        }
    }), (function() {
        {
            var v = window.location.href.split("?")[0];
            return allocateUTF8(v.slice(0, v.lastIndexOf("/")))
        }
    }), (function($0, $1) {
        {
            var s0 = UTF8ToString($0);
            var s1 = UTF8ToString($1);
            var iframe = document.createElement("iframe");
            iframe.id = s0;
            iframe.name = "1.0.4;" + s1.length + ";" + s1;
            iframe.src = window.location.protocol + "//tpc.googlesyndication.com/safeframe/1-0-4/html/container.html#xpc=sf-gdn-exp-1&p=http%3A//diep.io";
            iframe.style.display = "none";
            document.body.appendChild(iframe)
        }
    }), (function() {
        {
            setTimeout((function() {
                for (var i in window.localStorage) {
                    if (i.indexOf("acu$") == 0) {
                        delete window.localStorage[i]
                    }
                }
            }), 15e3)
        }
    }), (function($0) {
        {
            delete window.localStorage[UTF8ToString($0)]
        }
    }), (function($0) {
        {
            var f = document.getElementById(UTF8ToString($0));
            if (f && f.parentNode) f.parentNode.removeChild(f)
        }
    }), (function($0, $1, $2, $3) {
        {
            var a = document.getElementById(UTF8ToString($0));
            if (!a) return true;
            var key = UTF8ToString($1);
            if (!a[key]) return true;
            return a[key][UTF8ToString($2)] == UTF8ToString($3)
        }
    }), (function($0) {
        {
            var fs = document.querySelectorAll(UTF8ToString($0));
            if (fs.length == 0) return true;
            for (var i = 0; i < fs.length; ++i) {
                if (fs[i].src == "about:blank") return true
            }
            return false
        }
    }), (function($0) {
        {
            if (!window["ga"]) return;
            window["ga"]("send", "event", "HasAdblock", $0 ? "Yes" : "No", {
                nonInteraction: true
            })
        }
    }), (function($0, $1, $2) {
        {
            window.localStorage[UTF8ToString($0)] = String.fromCharCode.apply(null, HEAPU8.subarray($1, $1 + $2))
        }
    }), (function($0) {
        {
            window["acu" + $0] = []
        }
    }), (function($0, $1) {
        {
            var str = window.localStorage[UTF8ToString($0)];
            if (!str) str = "";
            var arr = _4528ffe0(str.length);
            HEAPU32[$1 >> 2] = str.length;
            for (var i = 0; i < str.length; ++i) {
                HEAPU8[arr + i] = str.charCodeAt(i)
            }
            return arr
        }
    }), (function($0) {
        {
            cp5.contexts[$0] = null
        }
    }), (function($0) {
        {
            cp5.contexts[$0].save()
        }
    }), (function($0) {
        {
            cp5.contexts[$0].restore()
        }
    }), (function($0, $1) {
        {
            cp5.contexts[$0].globalAlpha *= $1
        }
    }), (function($0, $1, $2, $3) {
        {
            cp5.contexts[$0].fillStyle = "rgb(" + $1 + ", " + $2 + " ," + $3 + ")"
        }
    }), (function($0, $1, $2, $3, $4, $5, $6) {
        {
            cp5.contexts[$0].setTransform($1, $2, $3, $4, $5, $6)
        }
    }), (function($0) {
        {
            cp5.contexts[$0].fillRect(0, 0, 1, 1)
        }
    }), (function() {
        {
            return "google_ad_client" in window && typeof window.google_ad_client == "undefined"
        }
    }), (function($0) {
        {
            return typeof window[UTF8ToString($0)] != "undefined"
        }
    }), (function($0) {
        {
            return typeof process != UTF8ToString($0)
        }
    }), (function($0) {
        {
            return allocateUTF8(UTF8ToString($0))
        }
    }), (function($0, $1, $2) {
        {
            var w = cp5.sockets[$0];
            if (w.readyState != 1) return 0;
            try {
                w.send(HEAP8.subarray($1, $1 + $2))
            } catch (e) {
                return 0
            }
            return 1
        }
    }), (function($0) {
