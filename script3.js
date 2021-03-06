! function e(t, r, n) {
    function i(s, o) {
        if (!r[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!o && u) return u(s, !0);
                if (a) return a(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = r[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, function(e) {
                var r = t[s][1][e];
                return i(r || e)
            }, d, d.exports, e, t, r, n)
        }
        return r[s].exports
    }
    for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
    return i
}({
    1: [function(e, t, r) {
        "use strict";

        function n(e) {
            var t, r, n;
            return function() {
                t = a(), r = {
                    slotDemandHistory: {},
                    globalTimeout: e.globalTimeout
                }, s.globalTimeout = e.globalTimeout, n = {};
                for (var i = 0; i < u.length; i++) n = o.mergeObjects(n, u[i](e, r, t._executeNext));
                t._setDirectInterface("GptLayer", n)
            }(), i.derive(t, {})
        }
        var i = e(9),
            a = e(3),
            s = e(48),
            o = e(23),
            u = (e(24), [e(32), e(26), e(29), e(28), e(31), e(27), e(30)]);
        t.exports = n
    }, {}],
    2: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t) {
                return b[e] = S.IN_PROGRESS, new u(function(r) {
                    t.retrieve().then(function() {
                        b[e] = S.COMPLETE, r()
                    }).catch(function(t) {
                        b[e] = S.COMPLETE, r()
                    })
                })
            }

            function r() {
                for (var e = [], r = u.defer(), n = Object.keys(m); n.length;) {
                    var i = d.randomSplice(n),
                        a = m[i];
                    if (a.enabled) try {
                        e.push(t(i, a.instance))
                    } catch (e) {}
                }
                return u.all(e).then(function() {
                    r.resolve()
                }), r
            }

            function n() {
                var e = {};
                for (var t in m)
                    if (m.hasOwnProperty(t)) {
                        var r = m[t];
                        if (r.enabled) {
                            var n = r.instance.getResults();
                            n && (e[t] = {
                                data: n
                            })
                        }
                    } return e
            }

            function p() {
                for (var e in b) b.hasOwnProperty(e) && b[e] !== S.COMPLETE && i.emit("hs_identity_timeout", {
                    statsId: m[e].instance.getStatsId()
                })
            }

            function f() {
                y === S.NOT_STARTED && (w = r(), y = S.IN_PROGRESS, w.promise.then(function() {
                    p(), y = S.COMPLETE
                }), 0 === _ ? w.resolve() : I || (I = a.createTimer(_, !1, function() {
                    w.resolve()
                })))
            }

            function g() {
                return y === S.NOT_STARTED ? u.resolve(null) : (y !== S.COMPLETE && I && a.startTimer(I), w.promise.then(function() {
                    return n()
                }))
            }

            function v(e, t) {
                return g().then(function(r) {
                    if (r && !d.isEmpty(r))
                        for (var n = 0; n < t.length; n++) t[n].identityData = r;
                    return h._executeNext(e, t)
                })
            }
            var h, m, y, b, _, w, I, S = {
                NOT_STARTED: 0,
                IN_PROGRESS: 1,
                COMPLETE: 2
            };
            return function() {
                i = c.services.EventsService, a = c.services.TimerService, h = o(), _ = e.timeout, y = S.NOT_STARTED, b = {}, m = e.partners, i.emit("hs_define_identity_timeout", {
                    timeout: _
                });
                for (var t = Object.keys(m), r = t.length - 1; r >= 0; r--) {
                    var n = d.randomSplice(t),
                        s = m[n];
                    if (s.enabled) try {
                        if (s.instance = l[n](s.configs), !s.instance) {
                            s.enabled = !1;
                            continue
                        }
                        b[n] = S.NOT_STARTED
                    } catch (e) {
                        s.enabled = !1
                    }
                }
                h._setDirectInterface("IdentityLayer", {
                    retrieve: f,
                    getResult: g
                }), h._setExecutor(v)
            }(), s.derive(h, {
                retrieve: f,
                getResult: g
            })
        }
        var i, a, s = e(9),
            o = e(3),
            u = e(14),
            c = e(48),
            d = e(23),
            l = {
                AdserverOrgIp: e(33)
            };
        t.exports = n
    }, {}],
    3: [function(e, t, r) {
        "use strict";

        function n() {
            function e(e, t) {
                return i.resolve(t)
            }

            function t(e, t) {
                u = {}, u[e] = t
            }

            function r(e) {
                c = e
            }

            function n() {
                return u
            }

            function a(e) {
                d = e
            }

            function s(e, t) {
                return d(e, t)
            }

            function o(e, t) {
                return i.resolve().then(function() {
                    return c(e, t)
                })
            }
            var u, c, d;
            return function() {
                u = null, c = e, d = e
            }(), {
                _setDirectInterface: t,
                _setExecutor: r,
                _executeNext: s,
                setNext: a,
                getDirectInterface: n,
                execute: o
            }
        }
        var i = e(14);
        e(24);
        t.exports = n
    }, {}],
    4: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t) {
                return r._executeNext(e, t).then(function(t) {
                    for (var r = {
                            slot: {},
                            partner: {}
                        }, a = [], s = t.slice(); t.length;) {
                        var c = u.randomSplice(t);
                        if (c.htSlot) {
                            var d = c.htSlot.getName();
                            c.pass || (c.hasOwnProperty("price") && u.isNumber(c.price) ? (r.slot.hasOwnProperty(d) ? r.slot[d].price < c.price && (r.slot[d] = c) : r.slot[d] = c, n === o.MediationLevels.PARTNER && (r.partner[d] = r.partner[d] || {}, r.partner[d].hasOwnProperty(c.partnerId) ? r.partner[d][c.partnerId].price < c.price && (r.partner[d][c.partnerId] = c) : r.partner[d][c.partnerId] = c)) : n === o.MediationLevels.PARTNER && a.push(c))
                        }
                    }
                    for (var l in r.slot)
                        if (r.slot.hasOwnProperty(l)) {
                            var p = r.slot[l];
                            if (i.emit("hs_slot_highest_bid", {
                                    sessionId: e,
                                    statsId: p.partnerStatsId,
                                    htSlotId: p.htSlot.getId(),
                                    requestId: p.requestId,
                                    xSlotNames: [p.xSlotName]
                                }), n === o.MediationLevels.HT_SLOT) a.push(p);
                            else if (n === o.MediationLevels.PARTNER)
                                for (var f in r.partner[l]) r.partner[l].hasOwnProperty(f) && a.push(r.partner[l][f])
                        } return n === o.MediationLevels.NONE ? s : a
                })
            }
            var r, n;
            return function() {
                i = c.services.EventsService, r = s(), r._setExecutor(t), n = o.MediationLevels[e.mediationLevel]
            }(), a.derive(r, {})
        }
        var i, a = e(9),
            s = e(3),
            o = e(11),
            u = e(23),
            c = (e(24), e(48));
        t.exports = n
    }, {}],
    5: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t, r, n, i) {
                if (i && r.getPrefetchDisabled()) return [];
                var a = n.slice(),
                    s = [];
                if (!i && (c.appendToArray(s, g.fulfilDemand(e, t, r, a)), !a.length)) return s;
                var u = r.retrieve(e, a),
                    d = u.map(function(e) {
                        var t = o.defer();
                        return e.then(function(e) {
                            t.resolve(e)
                        }).catch(function(e) {
                            t.resolve([])
                        }), t
                    });
                if (i) {
                    var l = d.map(function(e) {
                        return e.promise
                    });
                    g.storeDemand(e, t, r, a, l)
                }
                return c.appendToArray(s, d), s
            }

            function r(e, r, n) {
                for (var i = {
                        defers: [],
                        promises: []
                    }, a = Object.keys(v); a.length;) {
                    var s = c.randomSplice(a),
                        o = v[s];
                    if (o.enabled) try {
                        for (var u = t(e, s, o.instance, r, n), d = 0; d < u.length; d++) i.defers.push(u[d]), i.promises.push(u[d].promise)
                    } catch (e) {}
                }
                return i
            }

            function n(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t) && h.hasOwnProperty(t))
                        for (var r = h[t], n = 0; n < r.length; n++) {
                            var i = r[n];
                            v.hasOwnProperty(i) && v[i].instance.setFirstPartyData(e[t])
                        }
            }

            function p(e, t) {
                var n = r(e, t);
                return i.addTimerCallback(e, function() {
                    for (var e = 0; e < n.defers.length; e++) n.defers[e].resolve([])
                }), o.all(n.promises).then(function(t) {
                    return i.clearTimer(e), t ? c.mergeArrays.apply(null, t) : []
                })
            }
            var f, g, v, h = {
                rubicon: ["RubiconHtb", "RubiconExtHtb"]
            };
            return function() {
                i = u.services.TimerService, f = s(), v = e.partners;
                for (var t = {}, a = Object.keys(v), o = a.length - 1; o >= 0; o--) {
                    var h = c.randomSplice(a),
                        m = v[h];
                    if (m.enabled) try {
                        if (m.instance = d[h](m.configs, h), !m.instance) {
                            m.enabled = !1;
                            continue
                        }
                        m.instance.getDirectInterface() && (t = c.mergeObjects(t, m.instance.getDirectInterface()))
                    } catch (e) {
                        m.enabled = !1
                    }
                }
                var y = {
                    Partners: t,
                    setFirstPartyData: n
                };
                g = l(e, {
                    __invokeAllPartners: r
                }), y.prefetchOnLoad = g.prefetchOnLoad, f._setDirectInterface("PartnersLayer", y), f._setExecutor(p)
            }(), a.derive(f, {})
        }
        var i, a = e(9),
            s = e(3),
            o = e(14),
            u = e(48),
            c = e(23),
            d = (e(24), {
                IndexExchangeHtb: e(36),
                PubMaticHtb: e(40),
                CriteoHtb: e(35),
                RubiconHtb: e(41),
                OpenXHtb: e(37),
                AppNexusHtb: e(34)
            }),
            l = e(39);
        t.exports = n
    }, {}],
    6: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(t) {
                return e.roundingType === n.RoundingTypes.FLOOR ? Math.floor(t) : t
            }

            function r(r) {
                var o = 0,
                    u = 1,
                    c = r.toString(),
                    d = c.indexOf(".");
                if (d > -1 && (o = c.length - d - 1, c = c.slice(0, d) + c.slice(d + 1)), o >= a) o -= a;
                else {
                    var l = a - o;
                    o = 0, c = i.padEnd(c, c.length + l, "0")
                }
                c.length > 9 && (o -= c.length - 9, c = c.slice(0, 9)), u = Math.pow(10, o), c = Number(c);
                var p = e.buckets.length;
                if (c < e.floor * u) c = 0;
                else if (c >= e.buckets[p - 1].max * u) c = e.buckets[p - 1].max * u;
                else {
                    for (var f, g = e.floor, v = 0; v < p && (f = e.buckets[v], !(c <= f.max * u)); v++) g = f.max;
                    e.roundingType !== n.RoundingTypes.NONE && (c -= g * u, c /= f.step * u, c = t(c), c *= f.step * u, c += g * u)
                }
                c = c.toString(), o += s;
                var h = c.length - o;
                h < 1 && (c = i.padStart(c, c.length + (1 - h), "0"), h = 1);
                var m = c.slice(0, h);
                return 0 !== e.outputPrecision && (m = m + "." + c.slice(h), e.outputPrecision > 0 && (m = o < e.outputPrecision ? i.padEnd(m, h + e.outputPrecision + 1, "0") : m.slice(0, h + e.outputPrecision + 1))), m
            }
            var a, s, o = {
                floor: 0,
                buckets: [{
                    max: 1 / 0,
                    step: 1
                }]
            };
            return function() {
                a = Math.round(Math.log(e.bidUnitInCents) * Math.LOG10E), s = Math.round(Math.log(e.outputCentsDivisor) * Math.LOG10E), e.roundingType = n.RoundingTypes[e.roundingType];
                for (var t = ["floor", "buckets"], r = 0; r < t.length; r++) {
                    var i = t[r];
                    e.hasOwnProperty(i) || (e[i] = o[i])
                }
            }(), {
                apply: r
            }
        }
        var i = e(23);
        e(24);
        n.RoundingTypes = {
            NONE: 0,
            FLOOR: 1
        }, t.exports = n
    }, {}],
    7: [function(e, t, r) {
        "use strict";
        e(24);
        t.exports = function() {
            function e(e, t) {
                return e = e || "http:", t = t || "https:", "https:" === document.location.protocol ? t : e
            }

            function t() {
                return ("CSS1Compat" === y.document.compatMode ? y.document.documentElement : y.document.body).clientWidth
            }

            function r() {
                return ("CSS1Compat" === y.document.compatMode ? y.document.documentElement : y.document.body).clientHeight
            }

            function n() {
                return y.screen.width
            }

            function i() {
                return y.screen.height
            }

            function a() {
                return document.referrer
            }

            function s() {
                return y.location.hostname
            }

            function o() {
                return navigator.userAgent
            }

            function u() {
                return navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
            }

            function c() {
                return y.location.pathname
            }

            function d() {
                try {
                    return window.top === window.self
                } catch (e) {
                    return !1
                }
            }

            function l() {
                return d() ? location.href : document.referrer || location.href
            }

            function p() {
                try {
                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                } catch (e) {
                    return !1
                }
            }

            function f(e, t, r, n) {
                try {
                    for (var i, a = window, s = 0;;)
                        if (!(r && s < r)) {
                            if (n && s > n) break;
                            if (e && (i = e(a))) return i;
                            var o;
                            try {
                                o = a.frameElement
                            } catch (e) {
                                o = null
                            }
                            if (null === o) {
                                if (t && (i = t(a))) return i;
                                break
                            }
                            a = a.parent, s++
                        }
                } catch (e) {}
                return null
            }

            function g(e) {
                return f(function(t) {
                    return t.hasOwnProperty(e) ? t[e] : null
                })
            }

            function v(e, t) {
                var r = t || y,
                    n = r.document.createElement("iframe");
                return e && (n.src = e), n.width = 0, n.height = 0, n.scrolling = "no", n.marginWidth = 0, n.marginHeight = 0, n.frameBorder = 0, n.setAttribute("style", "border: 0px; vertical-align: bottom; visibility: hidden; display: none;"), r.document.body.appendChild(n), n
            }

            function h(e) {
                var t = e + "=",
                    r = y.document.cookie.split(";");
                for (var n in r)
                    if (r.hasOwnProperty(n)) {
                        for (var i = r[n];
                            " " === i.charAt(0);) i = i.substring(1, i.length);
                        if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
                    } return null
            }

            function m() {
                var e = !1;
                try {
                    new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
                } catch (t) {
                    navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = !0)
                }
                return e
            }
            var y;
            return function() {
                y = f(null, function(e) {
                    return e
                })
            }(), {
                topWindow: y,
                getProtocol: e,
                isLocalStorageSupported: p,
                getViewportWidth: t,
                getViewportHeight: r,
                isTopFrame: d,
                getScreenWidth: n,
                getScreenHeight: i,
                getReferrer: a,
                getPageUrl: l,
                getHostname: s,
                getUserAgent: o,
                getLanguage: u,
                getPathname: c,
                getNearestEntity: g,
                traverseContextTree: f,
                createHiddenIFrame: v,
                readCookie: h,
                isFlashSupported: m
            }
        }()
    }, {}],
    8: [function(e, t, r) {
        "use strict";
        var n = e(7),
            i = e(23),
            a = e(22);
        t.exports = function() {
            function e(e) {
                if (!s) return !1;
                try {
                    localStorage.removeItem(o + e)
                } catch (e) {
                    return !1
                }
                return !0
            }

            function t(t) {
                if (!s) return null;
                var r;
                try {
                    r = JSON.parse(localStorage.getItem(o + t))
                } catch (e) {
                    return null
                }
                return null === r ? null : !r.e || r.e < a.now() ? (e(t), null) : i.isObject(r.d) ? r.d : null
            }

            function r(e, t, r) {
                if (!s) return !1;
                r > u && (r = u);
                var n = a.now(),
                    i = {
                        t: n,
                        d: t,
                        e: n + r
                    };
                try {
                    localStorage.setItem(o + e, JSON.stringify(i))
                } catch (e) {
                    return !1
                }
                return !0
            }
            var s, o = "IXWRAPPER",
                u = 6048e5;
            return function() {
                s = n.isLocalStorageSupported()
            }(), {
                deleteData: e,
                getData: t,
                setData: r
            }
        }()
    }, {}],
    9: [function(e, t, r) {
        "use strict";
        e(24);
        t.exports = function() {
            function e(e) {
                for (var t in e) e.hasOwnProperty(t) && "_" === t[0] && "__" !== t.slice(0, 2) && delete e[t];
                return e
            }

            function t(t, r) {
                var n, i = {};
                for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                for (n in r) r.hasOwnProperty(n) && (i[n] = r[n]);
                return e(i)
            }
            return {
                derive: t
            }
        }()
    }, {}],
    10: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                if (i.isFunction(e)) try {
                    e()
                } catch (e) {}
            }
            return function() {
                if (i.isArray(e))
                    for (var t = 0; t < e.length; t++) try {
                        e[t]()
                    } catch (e) {}
            }(), {
                push: t
            }
        }
        var i = e(23);
        t.exports = n
    }, {}],
    11: [function(e, t, r) {
        "use strict";
        var n = {
            DEFAULT_UID_LENGTH: 8,
            MIN_BANNER_DIMENSION: 1,
            MIN_BID_FLOOR: 0,
            MIN_SITE_ID: 0,
            DEFAULT_UID_CHARSET: "ALPHANUM",
            SESSION_ID_LENGTH: 8,
            PUBKIT_AD_ID_LENGTH: 16,
            RENDER_SERVICE_EXPIRY_SWEEP_TIMER: 3e4,
            LineItemTypes: {
                ID_AND_SIZE: 1,
                ID_AND_PRICE: 2,
                CUSTOM: 3
            },
            DeviceTypeMethods: {
                USER_AGENT: 1,
                REFERENCE: 2,
                SIZE_MAPPING: 3
            },
            RequestArchitectures: {
                MRA: 1,
                SRA: 2
            },
            InitialLoadStates: {
                DISABLED: 1,
                ENABLED: 2
            },
            MediationLevels: {
                NONE: 1,
                HT_SLOT: 2,
                PARTNER: 3
            }
        };
        t.exports = n
    }, {}],
    12: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t() {
                return o.mobile() ? n.DeviceTypes.MOBILE : (o.tablet(), n.DeviceTypes.DESKTOP)
            }

            function r() {
                var t;
                try {
                    t = eval(e.configs.reference)
                } catch (e) {
                    throw s("INTERNAL_ERROR", "DeviceTypeChecker: could not eval() `reference`.")
                }
                if (!a.isFunction(t)) {
                    if (a.isString(t)) return t;
                    throw s("INVALID_TYPE", "DeviceTypeChecker: `reference` must refer to a function or a string")
                }
                try {
                    return t()
                } catch (e) {
                    throw s("INTERNAL_ERROR", "DeviceTypeChecker: could not execute `reference` function.")
                }
            }

            function u() {
                switch (c) {
                    case i.DeviceTypeMethods.USER_AGENT:
                        return t();
                    case i.DeviceTypeMethods.REFERENCE:
                        return r();
                    default:
                        return t()
                }
            }
            var c;
            return function() {
                c = i.DeviceTypeMethods[e.method] || i.DeviceTypeMethods.USER_AGENT
            }(), {
                getDeviceType: u
            }
        }
        var i = e(11),
            a = e(23),
            s = e(24),
            o = e(13);
        n.isValidDeviceType = function(e) {
            for (var t in n.DeviceTypes)
                if (n.DeviceTypes.hasOwnProperty(t) && "TABLET" !== t && e === n.DeviceTypes[t]) return !0;
            return !1
        }, n.DeviceTypes = {
            DESKTOP: "desktop",
            MOBILE: "mobile",
            TABLET: "tablet"
        }, t.exports = n
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        var n, i, a;
        n = {}, a = window.navigator.userAgent.toLowerCase(), n.ios = function() {
            return n.iphone() || n.ipod() || n.ipad()
        }, n.iphone = function() {
            return !n.windows() && i("iphone")
        }, n.ipod = function() {
            return i("ipod")
        }, n.ipad = function() {
            return i("ipad")
        }, n.android = function() {
            return !n.windows() && i("android")
        }, n.androidPhone = function() {
            return n.android() && i("mobile")
        }, n.androidTablet = function() {
            return n.android() && !i("mobile")
        }, n.blackberry = function() {
            return i("blackberry") || i("bb10") || i("rim")
        }, n.blackberryPhone = function() {
            return n.blackberry() && !i("tablet")
        }, n.blackberryTablet = function() {
            return n.blackberry() && i("tablet")
        }, n.windows = function() {
            return i("windows")
        }, n.windowsPhone = function() {
            return n.windows() && i("phone")
        }, n.windowsTablet = function() {
            return n.windows() && i("touch") && !n.windowsPhone()
        }, n.fxos = function() {
            return (i("(mobile;") || i("(tablet;")) && i("; rv:")
        }, n.fxosPhone = function() {
            return n.fxos() && i("mobile")
        }, n.fxosTablet = function() {
            return n.fxos() && i("tablet")
        }, n.meego = function() {
            return i("meego")
        }, n.mobile = function() {
            return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego()
        }, n.tablet = function() {
            return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet()
        }, n.desktop = function() {
            return !n.tablet() && !n.mobile()
        }, i = function(e) {
            return -1 !== a.indexOf(e)
        }, t.exports = n
    }, {}],
    14: [function(e, t, r) {
        function n() {}

        function i(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function a(e, t) {
            for (; 3 === e._state;) e = e._value;
            if (0 === e._state) return void e._deferreds.push(t);
            e._handled = !0;
            var r = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null === r) return void(1 === e._state ? s : o)(t.promise, e._value);
            var n;
            try {
                n = r(e._value)
            } catch (e) {
                return void o(t.promise, e)
            }
            s(t.promise, n)
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var r = t.then;
                    if (t instanceof i) return e._state = 3, e._value = t, void u(e);
                    if ("function" == typeof r) return void d(bind(r, t), e)
                }
                e._state = 1, e._value = t, u(e)
            } catch (t) {
                o(e, t)
            }
        }

        function o(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            for (var t = 0, r = e._deferreds.length; t < r; t++) a(e, e._deferreds[t]);
            e._deferreds = null
        }

        function c(e, t, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
        }

        function d(e, t) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, s(t, e))
                }, function(e) {
                    r || (r = !0, o(t, e))
                })
            } catch (e) {
                if (r) return;
                r = !0, o(t, e)
            }
        }
        i.prototype.catch = function(e) {
            return this.then(null, e)
        }, i.prototype.then = function(e, t) {
            var r = new this.constructor(n);
            return a(this, new c(e, t, r)), r
        }, i.all = function(e) {
            var t = Array.prototype.slice.call(e);
            return new i(function(e, r) {
                function n(a, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var o = s.then;
                            if ("function" == typeof o) return void o.call(s, function(e) {
                                n(a, e)
                            }, r)
                        }
                        t[a] = s, 0 == --i && e(t)
                    } catch (e) {
                        r(e)
                    }
                }
                if (0 === t.length) return e([]);
                for (var i = t.length, a = 0; a < t.length; a++) n(a, t[a])
            })
        }, i.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                t(e)
            })
        }, i.reject = function(e) {
            return new i(function(t, r) {
                r(e)
            })
        }, i.defer = function() {
            var e = {};
            return e.promise = new i(function(t, r) {
                e.resolve = t, e.reject = r
            }), e
        }, t.exports = i
    }, {}],
    15: [function(e, t, r) {
        "use strict";
        t.exports = function(e) {
            e = e.toLowerCase();
            var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                r = {},
                n = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0"
                };
            if (n.browser && (r[n.browser] = !0, r.version = n.version, r.versionNumber = parseInt(n.versionNumber, 10)), r.rv || r.iemobile) {
                n.browser = "msie", r.msie = !0
            }
            if (r.edge) {
                delete r.edge;
                n.browser = "msedge", r.msedge = !0
            }
            if (r.opr) {
                n.browser = "opera", r.opera = !0
            }
            if (r.safari && r.android) {
                n.browser = "android", r.android = !0
            }
            if (r.safari && r.kindle) {
                n.browser = "kindle", r.kindle = !0
            }
            if (r.safari && r.silk) {
                n.browser = "silk", r.silk = !0
            }
            return r.name = n.browser, r
        }(window.navigator.userAgent)
    }, {}],
    16: [function(e, t, r) {
        "use strict";
        var n = e(7),
            i = e(19),
            a = e(23);
        e(24);
        t.exports = function() {
            function e(e, t) {
                (t = t || window.googletag) && t.cmd && t.cmd.push(e)
            }

            function t(e) {
                return e = e || window, e.googletag ? e.googletag : (e.googletag = e.googletag || {}, e.googletag.cmd = e.googletag.cmd || [], i.jsonp({
                    async: !0,
                    url: n.getProtocol() + "//www.googletagservices.com/tag/js/gpt.js",
                    windowScope: e
                }), e.googletag)
            }

            function r(e) {
                return void 0 === e ? n.getNearestEntity("googletag") : n.traverseContextTree(function(e) {
                    return e.hasOwnProperty("googletag") ? e.googletag : null
                }, null, e, e)
            }

            function s(e) {
                return a.isObject(e) && a.isFunction(e.getSlotElementId) && a.isFunction(e.setTargeting) && a.isFunction(e.getTargeting) && a.isFunction(e.clearTargeting)
            }

            function o() {
                return googletag.pubads().getSlots().slice()
            }

            function u(e) {
                for (var t = o(), r = 0; r < t.length; r++)
                    if (t[r].getSlotElementId() === e) return t[r];
                return null
            }
            return {
                run: e,
                loadGpt: t,
                getGpt: r,
                isGSlot: s,
                getGSlots: o,
                getGSlotByDivId: u
            }
        }()
    }, {}],
    17: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e, t) {
                return Number(e) - Number(t)
            }

            function n() {
                return l
            }

            function i() {
                return p
            }

            function a() {
                return f
            }

            function s() {
                return g
            }

            function o(e, t) {
                var n, i, a, s, o = [];
                n = Object.keys(v).sort(r);
                for (var u = n.length - 1; u >= 0; u--)
                    if (a = n[u], !(Number(a) > e)) {
                        i = Object.keys(v[a]).sort(r);
                        for (var c = i.length - 1; c >= 0; c--)
                            if (s = i[c], !(Number(s) > t)) {
                                o = v[a][s];
                                break
                            } if (o.length > 0) break
                    } return o
            }

            function u() {
                return h
            }

            function c() {
                return m
            }

            function d() {
                return y
            }
            var l, p, f, g, v, h, m, y;
            return function() {
                if (l = e, p = t.id, f = null, g = null, v = null, h = null, m = null, y = null, t.hasOwnProperty("divId") && (f = RegExp(t.divId)), t.hasOwnProperty("adUnitPath") && (g = RegExp(t.adUnitPath)), t.hasOwnProperty("sizeMapping")) {
                    var r, n, i, a = /^(\d+)x(\d+)$/;
                    v = {};
                    for (var s in t.sizeMapping) t.sizeMapping.hasOwnProperty(s) && (r = a.exec(s), n = r[1], i = r[2], v.hasOwnProperty(n) || (v[n] = {}), v[n][i] = t.sizeMapping[s])
                }
                t.hasOwnProperty("targeting") && (h = t.targeting), t.hasOwnProperty("deviceType") && (m = t.deviceType), t.hasOwnProperty("position") && (y = t.position), t = void 0
            }(), {
                getName: n,
                getId: i,
                getDivId: a,
                getAdUnitPath: s,
                getSizes: o,
                getTargeting: u,
                getDeviceType: c,
                getPosition: d
            }
        }
        e(24);
        t.exports = n
    }, {}],
    18: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t) {
                for (var r = 0; r < e.length; r++) {
                    var n, i;
                    "!" === e[r].charAt(0) ? (n = e[r].slice(1), i = !0) : (n = e[r], i = !1);
                    for (var a = !1, s = 0; s < t.length; s++)
                        if (n === t[s]) {
                            a = !0;
                            break
                        } if (i === a) return !1
                }
                return !0
            }

            function r(e, r) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        if (!r.hasOwnProperty(n)) return !1;
                        if (!t(e[n], r[n])) return !1
                    } return !0
            }

            function n(e, t) {
                for (var r = 0; r < p.length; r++)
                    if (0 === p[r](e, t)) return !1;
                return !0
            }

            function u(e, t, r) {
                for (var n = 0; n < r.length; n++) {
                    if (r[n](e, t) <= 0) return !1
                }
                return !0
            }

            function c(e, t) {
                if (s.isEmpty(p)) return e.slice();
                for (var r = [], i = 0; i < e.length; i++)
                    for (var a = 0; a < t.length; a++)
                        if (n(t[a], e[i])) {
                            r.push(e[i]);
                            break
                        } return r
            }

            function d(e, t) {
                if (s.isEmpty(e) || s.isEmpty(t)) return [];
                for (var r = [], n = e.slice(), i = t.slice(), a = 0; a < l.length; a++) {
                    for (var o = l[a], c = [], d = i.length - 1; d >= 0; d--) {
                        for (var p = [], f = -1, g = 0; g < n.length; g++)
                            if (u(i[d], n[g], o)) {
                                for (var v = [], h = 0; h < o.length; h++) {
                                    var m = o[h](i[d], n[g]);
                                    v.push(m)
                                }
                                for (var y = 0; y < o.length; y++) {
                                    if (!p[y] || v[y] > p[y]) {
                                        p = v, f = g;
                                        break
                                    }
                                    if (v[y] < p[y]) break
                                }
                            } if (f >= 0) {
                            var b = {};
                            c[f] = !0, b.htSlot = n[f], i[d].firstPartyData && (b.firstPartyData = i[d].firstPartyData), i[d].reference && (b.ref = i[d].reference), r.push(b), i.splice(d, 1)
                        }
                    }
                    for (var _ = n.length - 1; _ >= 0; _--) c[_] && n.splice(_, 1)
                }
                return r
            }
            var l = [],
                p = [],
                f = {
                    divId: function(e, t) {
                        var r = t.getDivId();
                        return r ? r.test(e.divId) ? 1 : 0 : -1
                    },
                    targeting: function(e, t) {
                        var n = t.getTargeting(),
                            i = e.targeting;
                        if (!n) return -1;
                        for (var a = !1, o = 0, u = 0; u < n.length; u++)
                            if (n[u])
                                if (s.isEmpty(n[u])) a = !0;
                                else if (r(n[u], i)) {
                            var c = 0;
                            for (var d in n[u]) n[u].hasOwnProperty(d) && (c += n[u][d].length);
                            o = Math.max(o, c)
                        }
                        return a || o > 0 ? o + 1 : 0
                    },
                    size: function(e, t) {
                        var r = t.getSizes(i.getViewportWidth(), i.getViewportHeight());
                        if (!r) return -1;
                        for (var n = 0, a = 0; a < r.length; a++) {
                            for (var s = 0, o = 0; o < e.sizes.length; o++)
                                if (r[a][0] === e.sizes[o][0] && r[a][1] === e.sizes[o][1]) {
                                    s++;
                                    break
                                } if (0 === s) return 0;
                            n += s
                        }
                        return 0 === n ? 0 : Math.ceil(100 * n / e.sizes.length)
                    },
                    deviceType: function(e, t) {
                        var r = t.getDeviceType();
                        return r ? r === a.DeviceTypeChecker.getDeviceType() ? 1 : 0 : -1
                    },
                    adUnitPath: function(e, t) {
                        var r = t.getAdUnitPath();
                        return r ? r.test(e.adUnitPath) ? 1 : 0 : -1
                    }
                };
            return function() {
                for (var t = 0; t < e.filters.length; t++) {
                    if (!f.hasOwnProperty(e.filters[t])) throw o("INVALID_CONFIG", "Cannot find function " + e.filters[t] + " in HtSlotMapper");
                    p.push(f[e.filters[t]])
                }
                for (var r = 0; r < e.selectors.length; r++) {
                    var n = [],
                        i = e.selectors[r];
                    if (s.isString(i)) n.push(f[i]);
                    else
                        for (var a = 0; a < i.length; a++) n.push(f[i[a]]);
                    l.push(n)
                }
            }(), {
                select: d,
                filter: c
            }
        }
        var i = e(7),
            a = e(48),
            s = e(23),
            o = e(24);
        t.exports = n
    }, {}],
    19: [function(e, t, r) {
        "use strict";
        var n = e(48),
            i = e(22),
            a = e(23),
            s = e(24),
            o = e(15);
        t.exports = function() {
            function e() {
                return l
            }

            function t(e) {
                var t = "";
                for (var r in e)
                    if (e.hasOwnProperty(r))
                        if (a.isObject(e[r]))
                            for (var n in e[r]) e[r].hasOwnProperty(n) && (t += r + "%5B" + n + "%5D=" + encodeURIComponent(e[r][n]) + "&");
                        else if (a.isArray(e[r]))
                    for (var i = 0; i < e[r].length; i++) t += r + "%5B%5D=" + encodeURIComponent(e[r][i]) + "&";
                else t += r + "=" + encodeURIComponent(e[r]) + "&";
                return t.slice(0, -1)
            }

            function r(e, r, n) {
                return "/" !== e[e.length - 1] && r && (e += "/"), r = r || [], a.isObject(n) && (n = t(n)), n = n ? "?" + n : "", e + r.join("/") + n
            }

            function u(e) {
                var s, u = null,
                    c = e.scope || window;
                if (e.useImgTag) s = c.document.createElement("img");
                else {
                    s = c.document.createElement("script"), s.type = "text/javascript";
                    var d = !0;
                    e.hasOwnProperty("async") && (d = e.async), s.async = d
                }
                var l = e.url;
                if (e.data) {
                    var p;
                    p = a.isString(e.data) ? e.data : t(e.data), l = r(e.url, null, p)
                }
                var f, g = !1,
                    v = function() {
                        try {
                            if (g) return;
                            g = !0, e.onTimeout && e.onTimeout(), e.useImgTag || e.continueAfterTimeout || s.parentNode.removeChild(s)
                        } catch (e) {}
                    };
                e.globalTimeout && n.services.TimerService.addTimerCallback(e.sessionId, v), e.timeout && (f = setTimeout(v, e.timeout));
                var h = function() {
                    try {
                        if (g) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(f);
                        e.onSuccess && e.onSuccess(null, i.now(), g), g = !0, e.useImgTag || s.parentNode.removeChild(s)
                    } catch (e) {}
                };
                null === s.onload ? s.onload = h : s.onreadystatechange = function() {
                    "loaded" !== s.readyState && "complete" !== s.readyState || (s.onreadystatechange = null, h())
                };
                var m = function() {
                    try {
                        if (g) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(f), g = !0;
                        e.onFailure && e.onFailure(), e.useImgTag || s.parentNode.removeChild(s)
                    } catch (e) {}
                };
                if (s.onerror = m, u = i.now(), s.src = l, !e.useImgTag) {
                    var y = c.document.getElementsByTagName("script")[0];
                    y ? y.parentNode.insertBefore(s, y) : o.msie || o.msedge || o.mozilla ? c.onload = function() {
                        c.document.body.appendChild(s)
                    } : c.document.body.appendChild(s)
                }
                return u
            }

            function c(o) {
                if (!e()) {
                    if (o.jsonp && "GET" === o.method) return u(o);
                    throw s("INTERNAL_ERROR", "XHR is not supported in this browser.")
                }
                var c = null,
                    d = o.scope || window,
                    l = new d.XMLHttpRequest,
                    p = o.url,
                    f = null;
                if (o.data)
                    if ("GET" === o.method) {
                        var g;
                        g = a.isString(o.data) ? o.data : t(o.data), p = r(o.url, null, g)
                    } else "POST" === o.method && (f = a.isString(o.data) ? o.data : JSON.stringify(o.data));
                var v = !0;
                o.hasOwnProperty("async") && (v = o.async), l.open(o.method, p, v);
                var h = "application/x-www-form-urlencoded; charset=UTF-8";
                if (void 0 !== o.contentType && (h = o.contentType), h && l.setRequestHeader("Content-Type", h), o.headers) {
                    o.headers.hasOwnProperty("X-Request-With") || l.setRequestHeader("X-Request-With", "XMLHttpRequest");
                    for (var m in o.headers) o.headers.hasOwnProperty(m) && l.setRequestHeader(m, o.headers[m])
                }
                o.withCredentials && (l.withCredentials = !0);
                var y, b = !1,
                    _ = function() {
                        try {
                            if (b) return;
                            b = !0, o.onTimeout && o.onTimeout()
                        } catch (e) {}
                    };
                return o.globalTimeout && n.services.TimerService.addTimerCallback(o.sessionId, _), o.timeout && (o.continueAfterTimeout ? y = setTimeout(_, o.timeout) : (l.timeout = o.timeout, l.ontimeout = _)), (o.onSuccess || o.onFailure) && (l.onreadystatechange = function() {
                    if (4 === l.readyState) {
                        if (b) {
                            if (!o.continueAfterTimeout) return
                        } else clearTimeout(y), l.ontimeout = null;
                        if (200 === l.status) {
                            if (o.onSuccess) try {
                                o.onSuccess(l.responseText, i.now(), b)
                            } catch (e) {}
                        } else if (o.onFailure) try {
                            o.onFailure(l.status)
                        } catch (e) {}
                        b = !0
                    }
                }), c = i.now(), l.send(f), c
            }

            function d(e) {
                return e.useImgTag = !0, u(e)
            }
            var l;
            return function() {
                l = window.XMLHttpRequest && "string" == typeof(new XMLHttpRequest).responseType
            }(), {
                ajax: c,
                jsonp: u,
                img: d,
                buildUrl: r,
                objToQueryString: t,
                isXhrSupported: e
            }
        }()
    }, {}],
    20: [function(e, t, r) {
        "use strict";
        var n = (e(11), e(22)),
            i = e(24);
        t.exports = function() {
            function e() {
                if (!(this instanceof e)) return new e;
                this.__bidRequest = {
                    id: Number(n.generateUniqueId(8, "NUM")),
                    site: {
                        page: ""
                    },
                    imp: []
                }, this.__impCount = 0
            }

            function t(e) {
                if (!(this instanceof t)) return new t(e);
                try {
                    this.__bidResponse = e
                } catch (e) {
                    throw i("INTERNAL_ERROR", "cannot parse `bidResponse`")
                }
            }
            return e.prototype.setPage = function(e) {
                this.__bidRequest.site.page = e
            }, e.prototype.setRef = function(e) {
                this.__bidRequest.site.ref = e
            }, e.prototype.getId = function() {
                return this.__bidRequest.id
            }, e.prototype.addImp = function(e, t, r, n) {
                var i = String(++this.__impCount);
                return this.__bidRequest.imp.push({
                    banner: e,
                    ext: t,
                    id: i,
                    bidfloor: r,
                    bidfloorcur: n
                }), i
            }, e.prototype.addUserEid = function(e) {
                this.__bidRequest.user = this.__bidRequest.user || {}, this.__bidRequest.user.eids = this.__bidRequest.user.eids || [], this.__bidRequest.user.eids.push(e)
            }, e.prototype.setGdprConsent = function(e, t) {
                this.__bidRequest.regs = this.__bidRequest.regs || {}, this.__bidRequest.regs.ext = this.__bidRequest.regs.ext || {}, this.__bidRequest.regs.ext.gdpr = e ? 1 : 0, this.__bidRequest.user = this.__bidRequest.user || {}, this.__bidRequest.user.ext = this.__bidRequest.user.ext || {}, this.__bidRequest.user.ext.consent = t || ""
            }, e.prototype.setExt = function(e) {
                this.__bidRequest.ext = e
            }, e.prototype.stringify = function() {
                return JSON.stringify(this.__bidRequest)
            }, t.prototype.__parseBid = function(e, t) {
                var r = {};
                e.hasOwnProperty("impid") && (r.impid = e.impid), e.hasOwnProperty("price") && (r.price = e.price), e.hasOwnProperty("adm") && (r.adm = e.adm), e.hasOwnProperty("ext") && (r.ext = e.ext), e.hasOwnProperty("dealid") && (r.dealid = e.dealid), e.hasOwnProperty("nurl") && (r.nurl = e.nurl), e.hasOwnProperty("nbr") && (r.nbr = e.nbr), e.hasOwnProperty("w") && (r.w = e.w), e.hasOwnProperty("h") && (r.h = e.h), t.push(r)
            }, t.prototype.getId = function() {
                return this.__bidResponse.id
            }, t.prototype.getCur = function() {
                return this.__bidResponse.cur || "USD"
            }, t.prototype.getExt = function() {
                return this.__bidResponse.ext
            }, t.prototype.getBids = function() {
                var e, t, r = [];
                if (!this.__bidResponse.hasOwnProperty("seatbid")) return r;
                t = this.__bidResponse.seatbid;
                for (var n = 0; n < t.length; n++)
                    if (t[n].hasOwnProperty("bid")) {
                        e = t[n].bid;
                        for (var i = 0; i < e.length; i++) this.__parseBid(e[i], r)
                    } return r
            }, {
                BidRequest: e,
                BidResponse: t
            }
        }()
    }, {}],
    21: [function(e, t, r) {
        "use strict";
        var n = e(23);
        t.exports = function() {
            function e(e) {
                return s[e]
            }

            function t(e) {
                return !(!n.isArray(e, "number") || 2 !== e.length)
            }

            function r(e) {
                if (t(e)) return !0;
                if (!n.isArray(e, "array")) return !1;
                for (var r = 0; r < e.length; r++)
                    if (!t(e[r])) return !1;
                return !0
            }

            function i(t, r, i) {
                r = r || ",", i = i || "x";
                var a = "";
                if (n.isArray(t, "array"))
                    for (var s = 0; s < t.length; s++) a += e(t[s]) ? t[s] : t[s][0] + i + t[s][1] + r;
                else e(t) ? a += t + r : a += t[0] + i + t[1] + r;
                return a.slice(0, -1)
            }

            function a(t, r, n) {
                r = r || ",", n = n || "x";
                for (var i = [], a = t.split(r), s = 0; s < a.length; s++)
                    if (e(a[s])) i.push(a[s]);
                    else {
                        var o = a[s].split(n);
                        i.push([Number(o[0]), Number(o[1])])
                    } return i
            }
            var s = {
                native: !0,
                fullwidth: !0
            };
            return {
                arrayToString: i,
                stringToArray: a,
                isSpecialSize: e,
                isSize: t,
                isSizes: r
            }
        }()
    }, {}],
    22: [function(e, t, r) {
        "use strict";
        var n = e(11);
        e(24);
        t.exports = function() {
            function e(e, t) {
                e.open("text/html", "replace"), e.write(t), e.close()
            }

            function t(e, t) {
                e = e || n.DEFAULT_UID_LENGTH, t = t || n.DEFAULT_UID_CHARSET;
                for (var r = "", i = 0; i < e; i++) r += u[t].charAt(Math.floor(Math.random() * u[t].length));
                return r
            }

            function r() {
                return t(8, "HEX") + "-" + t(4, "HEX") + "-4" + t(3, "HEX") + "-" + "89ab".charAt(Math.floor(4 * Math.random())) + t(3, "HEX") + "-" + t(8, "HEX")
            }

            function i() {
                return (new Date).getTime()
            }

            function a() {
                return o.getTimezoneOffset()
            }

            function s() {}
            var o, u = {
                ALPHANUM: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                ALPHA: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
                HEX: "0123456789abcdef",
                NUM: "0123456789"
            };
            return function() {
                o = new Date
            }(), {
                UidCharacterSets: u,
                generateUniqueId: t,
                generateUuid: r,
                now: i,
                getTimezoneOffset: a,
                documentWrite: e,
                noOp: s
            }
        }()
    }, {}],
    23: [function(e, t, r) {
        "use strict";
        var n = e(24);
        t.exports = function() {
            function e(e) {
                return void 0 === e ? "undefined" : {}.toString.call(e).match(x)[1].toLowerCase()
            }

            function t(t) {
                return "string" === e(t)
            }

            function r(t) {
                return "number" === e(t) && !isNaN(t)
            }

            function i(t) {
                return "number" === e(t) || "string" === e(t) && !isNaN(Number(t))
            }

            function a(e) {
                return r(e) && e % 1 == 0
            }

            function s(t) {
                return "function" === e(t)
            }

            function o(t) {
                return "boolean" === e(t)
            }

            function u(t) {
                return "object" === e(t)
            }

            function c(t) {
                return "regexp" === e(t)
            }

            function d(e, t) {
                var r = e.indexOf(t);
                r > -1 && e.splice(r, 1)
            }

            function l(r, i, a) {
                if ("array" !== e(r)) return !1;
                if (void 0 !== i) {
                    if (!t(i)) throw n("INVALID_TYPE", "`type` must be a string");
                    if ("class" === i) {
                        if (!t(a)) throw n("INVALID_TYPE", "`className` must be a string");
                        for (var s = 0; s < r.length; s++)
                            if ("object" != typeof r[s] || r[s].__type__ !== a) return !1
                    } else
                        for (var o = 0; o < r.length; o++)
                            if (e(r[o]) !== i) return !1
                }
                return !0
            }

            function p(e) {
                return e.length ? e.splice(Math.floor(Math.random() * e.length), 1)[0] : null
            }

            function f(e) {
                return JSON.parse(JSON.stringify(e))
            }

            function g() {
                for (var e = Array.prototype.slice.call(arguments), t = {}, r = 0; r < e.length; r++)
                    for (var n in e[r]) e[r].hasOwnProperty(n) && (t[n] = e[r][n]);
                return t
            }

            function v() {
                for (var e = Array.prototype.slice.call(arguments), t = [], r = 0; r < e.length; r++)
                    for (var n = 0; n < e[r].length; n++) t.push(e[r][n]);
                return t
            }

            function h(e) {
                if (t(e)) {
                    if ("" !== e) return !1
                } else if (u(e)) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) return !1
                } else {
                    if (!l(e)) throw n("INVALID_TYPE", "`entity` must be either a string, object, or an array");
                    if (e.length) return !1
                }
                return !0
            }

            function m(e, t, r) {
                void 0 === r && (r = P);
                for (var n = 0; n < e.length; n++) {
                    for (var i = !1, a = 0; a < t.length && !(i = r(e[n], t[a])); a++);
                    if (!i) return !1
                }
                return !0
            }

            function y(e, t, r, n) {
                return t = t || [], n = n || null, r = r || "Error occurred while calling function.",
                    function() {
                        try {
                            e.apply(n, t)
                        } catch (e) {}
                    }
            }

            function b(e, t) {
                var r = "" + e;
                if (t = +t, t != t && (t = 0), t < 0) throw new RangeError("repeat count must be non-negative");
                if (t == 1 / 0) throw new RangeError("repeat count must be less than infinity");
                if (t = Math.floor(t), 0 == r.length || 0 == t) return "";
                if (r.length * t >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
                for (var n = "", i = 0; i < t; i++) n += r;
                return n
            }

            function _(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += b(r, t / r.length)), r.slice(0, t) + String(e))
            }

            function w(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += b(r, t / r.length)), String(e) + r.slice(0, t))
            }

            function I(e, t) {
                t = t || null;
                try {
                    return eval.call(t, e)
                } catch (e) {}
                return null
            }

            function S(e, t, r) {
                r = r || null;
                try {
                    return eval.call(r, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function T() {
                for (var e = Array.prototype.slice.call(arguments), t = e[0], r = 1; r < e.length; r++) Array.prototype.push.apply(t, e[r]);
                return t
            }
            var x = /\s([a-zA-Z]+)/,
                P = function(e, t) {
                    return e === t
                };
            return {
                randomSplice: p,
                deepCopy: f,
                mergeObjects: g,
                mergeArrays: v,
                isArray: l,
                isEmpty: h,
                isInteger: a,
                isString: t,
                isNumeric: i,
                isRegex: c,
                isNumber: r,
                isBoolean: o,
                isFunction: s,
                isObject: u,
                isArraySubset: m,
                getType: e,
                tryCatchWrapper: y,
                arrayDelete: d,
                repeatString: b,
                padStart: _,
                padEnd: w,
                evalVariable: I,
                evalFunction: S,
                appendToArray: T
            }
        }()
    }, {}],
    24: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            return new Error(e + ": " + t)
        }
        n.ErrorTokens = {
            MISSING_ARGUMENT: 1,
            INVALID_TYPE: 2,
            INVALID_VALUE: 3,
            MISSING_PROPERTY: 4,
            NUMBER_OUT_OF_RANGE: 5,
            EMPTY_ENTITY: 6,
            INTERNAL_ERROR: 7,
            DUPLICATE_ENTITY: 8,
            INVALID_ARGUMENT: 9,
            INVALID_CONFIG: 10
        }, t.exports = n
    }, {}],
    25: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t() {
                return r
            }
            var r;
            return function() {
                s.DeviceTypeChecker = i(e.DeviceTypeChecker);
                for (var t in e.htSlots)
                    if (e.htSlots.hasOwnProperty(t)) {
                        var n = a(t, e.htSlots[t]);
                        s.htSlots.push(n), s.htSlotsMap[t] = n
                    } r = {
                    Services: {},
                    Layers: {}
                };
                for (var d = 0; d < u.length; d++) {
                    var l = u[d].name,
                        p = u[d].constructor(e.Services[l]);
                    p && (s.services[l] = p, p.getDirectInterface && p.getDirectInterface() && (r.Services = o.mergeObjects(r.Services, p.getDirectInterface())))
                }
                for (var f, g = e.Layers.length - 1; g >= 0; g--) {
                    var v = e.Layers[g].layerId,
                        h = c[v](e.Layers[g].configs);
                    h.getDirectInterface() && (r.Layers = o.mergeObjects(r.Layers, h.getDirectInterface())), f && h.setNext(f.execute), f = h
                }
            }(), {
                getDirectInterface: t
            }
        }
        var i = e(12),
            a = e(17),
            s = e(48),
            o = e(23),
            u = (e(24), [{
                name: "EventsService",
                constructor: e(42)
            }, {
                name: "HeaderStatsService",
                constructor: e(43)
            }, {
                name: "TimerService",
                constructor: e(46)
            }, {
                name: "ComplianceService",
                constructor: e(45)
            }, {
                name: "RenderService",
                constructor: e(44)
            }]),
            c = {
                GptLayer: e(1),
                MediationLayer: e(4),
                PartnersLayer: e(5),
                IdentityLayer: e(2)
            };
        t.exports = n
    }, {}],
    26: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e) {
                var r;
                r = t.pageDemandHistory;
                for (var n in r) r.hasOwnProperty(n) && (window.googletag.pubads().clearTargeting(n), delete r[n]);
                r = t.gSlotDemandHistory;
                for (var i = 0; i < e.length; i++)
                    if (e[i].ref) {
                        var a = e[i].ref,
                            s = a.getSlotElementId();
                        if (r.hasOwnProperty(s)) {
                            for (var o in r[s]) r[s].hasOwnProperty(o) && a.clearTargeting(o);
                            delete r[s]
                        }
                    }
            }
            return function() {
                t.gSlotDemandHistory = t.gSlotDemandHistory || {}, t.pageDemandHistory = t.pageDemandHistory || {}
            }(), {
                clearTargeting: r
            }
        }
        e(16), e(24);
        t.exports = n
    }, {}],
    27: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e) {
                return s ? s(e) : window.googletag.destroySlots(e)
            }

            function n(e) {
                for (var n = e || a.getGSlots(), i = 0; i < n.length; i++) t.gSlotDisplayHistory.hasOwnProperty(n[i].getSlotElementId()) && delete t.gSlotDisplayHistory[n[i].getSlotElementId()];
                return r(e)
            }
            var s;
            return function() {
                t.hasOwnProperty("gSlotDisplayHistory") || (t.gSlotDisplayHistory = {});
                var r = function() {
                    e.override && e.override.destroySlots && (s = i.LastLineGoogletag.destroySlots)
                };
                i.initQueue.push(r)
            }(), {
                destroySlots: n
            }
        }
        var i = e(48),
            a = e(16);
        e(24);
        t.exports = n
    }, {}],
    28: [function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            function n(e) {
                return b ? b(e) : window.googletag.display(e)
            }

            function g(e) {
                if (t.requestArchitecture === u.RequestArchitectures.SRA)
                    for (; _.length;) {
                        if (!_[0].done) return;
                        var r = _.shift();
                        r.outParcels && !d.isEmpty(r.outParcels) && m(r.outParcels), r.parcels && !d.isEmpty(r.parcels) && y(r.sessionId, r.parcels), n(r.divId)
                    } else e.outParcels && !d.isEmpty(e.outParcels) && m(e.outParcels), e.parcels && !d.isEmpty(e.parcels) && y(e.sessionId, e.parcels), n(e.divId)
            }

            function v(e) {
                var n = {
                    done: !1,
                    divId: e,
                    outParcels: null,
                    parcels: null,
                    sessionId: ""
                };
                t.requestArchitecture === u.RequestArchitectures.SRA && _.push(n);
                var c = s.getGSlotByDivId(e);
                if (!c) return n.done = !0, g(n), o.resolve();
                var d = [];
                d = t.requestArchitecture === u.RequestArchitectures.SRA ? s.getGSlots() : c ? [c] : [];
                for (var l = d.length - 1; l >= 0; l--) t.gSlotDisplayHistory.hasOwnProperty(d[l].getSlotElementId()) && d.splice(l, 1);
                if (!d.length) return n.done = !0, g(n), o.resolve();
                for (var p = [], f = 0; f < d.length; f++) p.push({
                    slot: d[f]
                }), t.gSlotDisplayHistory[d[f].getSlotElementId()] = !0;
                if (t.initialLoadState === u.InitialLoadStates.DISABLED) return n.done = !0, g(n), o.resolve();
                var v = h(p);
                if (n.outParcels = v, !v.length) return a.emit("warning", "No valid Header Tag slots found in call to display."), n.done = !0, g(n), o.resolve();
                var m = i.createTimer(t.globalTimeout, !0);
                return i.addTimerCallback(m, function() {
                    a.emit("global_timeout_reached", {
                        sessionId: m
                    })
                }), n.sessionId = m, a.emit("hs_session_start", {
                    sessionId: m
                }), r(m, v).then(function(e) {
                    n.parcels = e, n.done = !0, g(n), a.emit("hs_session_end", {
                        sessionId: m
                    })
                })
            }
            var h, m, y, b, _;
            return function() {
                a = c.services.EventsService, i = c.services.TimerService, t.hasOwnProperty("gSlotDisplayHistory") || (t.gSlotDisplayHistory = {}), t.hasOwnProperty("requestArchitecture") || (t.requestArchitecture = u.RequestArchitectures.MRA), t.hasOwnProperty("initialLoadState") || (t.initialLoadState = u.InitialLoadStates.ENABLED);
                var r = function() {
                    e.override && e.override.display && (b = c.LastLineGoogletag.display)
                };
                c.initQueue.push(r), h = l(e, t).mapHtSlots, m = p(e, t).clearTargeting, y = f(e, t).setTargeting, _ = []
            }(), {
                display: v
            }
        }
        var i, a, s = e(16),
            o = e(14),
            u = e(11),
            c = e(48),
            d = (e(24), e(23)),
            l = e(29),
            p = e(26),
            f = e(32);
        t.exports = n
    }, {}],
    29: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e[r].slot,
                        a = {
                            reference: n
                        };
                    e[r].firstPartyData && (a.firstPartyData = e[r].firstPartyData), a.divId = n.getSlotElementId();
                    var c = [],
                        d = n.getSizes(i.getViewportWidth(), i.getViewportHeight()) || n.getSizes();
                    if (d) {
                        for (var l = 0; l < d.length; l++) o.isString(d[l]) || c.push([d[l].getWidth(), d[l].getHeight()]);
                        for (var p = {}, f = n.getTargetingKeys(), g = 0; g < f.length; g++) p[f[g]] = n.getTargeting(f[g]).map(function(e) {
                            return String(e)
                        });
                        a.sizes = c, a.targeting = p, a.adUnitPath = n.getAdUnitPath(), t.push(a)
                    }
                }
                var v = s.htSlots,
                    h = u.filter(v, t);
                return u.select(h, t)
            }
            var n, u;
            return function() {
                n = t, u = a(e.slotMapping)
            }(), {
                mapHtSlots: r
            }
        }
        var i = e(7),
            a = (e(16), e(18)),
            s = e(48),
            o = e(23);
        e(24);
        t.exports = n
    }, {}],
    30: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r() {
                return u ? u() : window.googletag.pubads().enableSingleRequest()
            }

            function n() {
                return c ? c() : window.googletag.pubads().disableInitialLoad()
            }

            function s() {
                return t.requestArchitecture = a.RequestArchitectures.SRA, r()
            }

            function o() {
                return t.initialLoadState = a.InitialLoadStates.DISABLED, n()
            }
            var u, c;
            return function() {
                t.requestArchitecture = e.enableSingleRequest ? a.RequestArchitectures.SRA : a.RequestArchitectures.MRA, t.initialLoadState = e.disableInitialLoad ? a.InitialLoadStates.DISABLED : a.InitialLoadStates.ENABLED;
                var r = function() {
                    e.override && (e.override.enableSingleRequest && (u = i.LastLineGoogletag.enableSingleRequest), e.override.disableInitialLoad && (c = i.LastLineGoogletag.disableInitialLoad))
                };
                i.initQueue.push(r)
            }(), {
                enableSingleRequest: s,
                disableInitialLoad: o
            }
        }
        var i = e(48),
            a = (e(24), e(11));
        t.exports = n
    }, {}],
    31: [function(e, t, r) {
        "use strict";

        function n(e, t, r) {
            function n(e, t) {
                return m ? m(e, t) : window.googletag.pubads().refresh(e, t)
            }

            function f(e, o) {
                e || (e = s.getGSlots());
                for (var u = e.slice(), c = e.length - 1; c >= 0; c--) s.isGSlot(e[c]) || e.splice(c, 1);
                if (t.requestArchitecture === l.RequestArchitectures.MRA)
                    for (var d = e.length - 1; d >= 0; d--) t.gSlotDisplayHistory.hasOwnProperty(e[d].getSlotElementId()) || e.splice(d, 1);
                if (!e.length) return n(u, o), p.resolve();
                for (var f = [], m = 0; m < e.length; m++) f.push({
                    slot: e[m]
                }), t.gSlotDisplayHistory[e[m].getSlotElementId()] = !0;
                var y = g(f);
                if (!y.length) return a.emit("warning", "No valid Header Tag slots found in call to refresh."), n(u, o), p.resolve();
                var b = i.createTimer(t.globalTimeout, !0);
                return i.addTimerCallback(b, function() {
                    a.emit("global_timeout_reached", {
                        sessionId: b
                    })
                }), a.emit("hs_session_start", {
                    sessionId: b
                }), r(b, y).then(function(e) {
                    v(y), h(b, e), a.emit("hs_session_end", {
                        sessionId: b
                    }), n(u, o)
                })
            }
            var g, v, h, m;
            return function() {
                a = o.services.EventsService, i = o.services.TimerService, t.hasOwnProperty("gSlotDisplayHistory") || (t.gSlotDisplayHistory = {}), t.hasOwnProperty("requestArchitecture") || (t.requestArchitecture = l.RequestArchitectures.MRA), t.hasOwnProperty("initialLoadState") || (t.initialLoadState = l.InitialLoadStates.ENABLED);
                var r = function() {
                    e.override && e.override.refresh && (m = o.LastLineGoogletag.refresh)
                };
                o.initQueue.push(r), g = u(e, t).mapHtSlots, v = c(e, t).clearTargeting, h = d(e, t).setTargeting
            }(), {
                refresh: f
            }
        }
        var i, a, s = e(16),
            o = e(48),
            u = (e(24), e(29)),
            c = e(26),
            d = e(32),
            l = e(11),
            p = e(14);
        t.exports = n
    }, {}],
    32: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e, r) {
                for (var n = 0; n < r.length; n++)
                    if (!r[n].pass && r[n].targeting && !s.isEmpty(r[n].targeting)) {
                        "slot" === r[n].targetingType && i.emit("hs_slot_kv_pushed", {
                            sessionId: e,
                            statsId: r[n].partnerStatsId,
                            htSlotId: r[n].htSlot.getId(),
                            requestId: r[n].requestId,
                            xSlotNames: [r[n].xSlotName]
                        });
                        var a, o = r[n].targeting;
                        for (var u in o)
                            if (o.hasOwnProperty(u))
                                if ("page" === r[n].targetingType) a = t.pageDemandHistory, a[u] = a[u] || {}, a[u] = !0, window.googletag.pubads().setTargeting(u, o[u]);
                                else {
                                    var c = r[n].ref,
                                        d = c.getSlotElementId();
                                    a = t.gSlotDemandHistory, a[d] = a[d] || {}, a[d][u] = !0, c.setTargeting(u, c.getTargeting(u).concat(o[u]))
                                }
                    }
            }
            return function() {
                i = a.services.EventsService, t.gSlotDemandHistory = t.gSlotDemandHistory || {}, t.pageDemandHistory = t.pageDemandHistory || {}
            }(), {
                setTargeting: r
            }
        }
        var i, a = (e(16), e(48)),
            s = e(23);
        e(24);
        t.exports = n
    }, {}],
    33: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                v = {
                    source: g,
                    uids: []
                };
                for (var t in e) e.hasOwnProperty(t) && v.uids.push({
                    id: e[t],
                    ext: {
                        rtiPartner: t
                    }
                })
            }

            function r() {
                return l.statsId
            }

            function n() {
                return v
            }

            function d() {
                return new u(function(e) {
                    var r = s.getData(h);
                    if (r) {
                        i.emit("hs_identity_cached", {
                            statsId: l.statsId
                        });
                        var n;
                        return "match" === r.response ? (n = "hs_identity_response", t(r.data)) : n = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", i.emit(n, {
                            statsId: l.statsId
                        }), void e()
                    }
                    i.emit("hs_identity_request", {
                        statsId: l.statsId
                    }), o.ajax({
                        url: p,
                        data: {
                            ttd_pid: "casale",
                            fmt: "json",
                            p: f
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var n;
                            try {
                                n = JSON.parse(r)
                            } catch (t) {
                                return i.emit("hs_identity_error", {
                                    statsId: l.statsId
                                }), s.setData(h, {
                                    response: "error"
                                }, l.features.identityDataExpiry.error), void e()
                            }
                            if (!n.hasOwnProperty("TDID")) return i.emit("hs_identity_error", {
                                statsId: l.statsId
                            }), s.setData(h, {
                                response: "error"
                            }, l.features.identityDataExpiry.error), void e();
                            i.emit("hs_identity_response", {
                                statsId: l.statsId
                            }), t(n), s.setData(h, {
                                response: "match",
                                data: n
                            }, l.features.identityDataExpiry.match), e()
                        },
                        onFailure: function(t) {
                            i.emit("hs_identity_error", {
                                statsId: l.statsId
                            }), s.setData(h, {
                                response: "error"
                            }, l.features.identityDataExpiry.error), e()
                        }
                    })
                })
            }
            if (!o.isXhrSupported()) return null;
            var l, p, f, g, v, h;
            return function() {
                i = c.services.EventsService, l = {
                    partnerId: "AdserverOrgIp",
                    statsId: "ADSORG",
                    version: "1.0.0",
                    features: {
                        identityDataExpiry: {
                            match: 6048e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    }
                }, p = a.getProtocol() + "//match.adsrvr.org/track/rid", f = e.publisherId, g = "adserver.org", h = "AdserverOrgIp", v = null
            }(), {
                getStatsId: r,
                getResults: n,
                retrieve: d
            }
        }
        var i, a = e(7),
            s = e(8),
            o = e(19),
            u = e(14),
            c = e(48);
        e(24);
        t.exports = n
    }, {}],
    34: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                var t = e[0],
                    r = f.generateUniqueId(),
                    n = {
                        id: t.xSlotRef.placementId,
                        size: l.arrayToString([t.xSlotRef.sizes[0]]),
                        callback: y,
                        callback_uid: r,
                        psa: 0
                    };
                t.xSlotRef.sizes.length > 1 && (n.promo_sizes = l.arrayToString(t.xSlotRef.sizes.slice(1)));
                var i = o.getPageUrl();
                if (i && (n.referrer = i), s.isPrivacyEnabled()) {
                    var a = s.gdpr.getConsent();
                    n.gdpr = a.applies ? 1 : 0, n.gdpr_consent = a.consentString
                }
                return {
                    url: m,
                    data: n,
                    callbackId: r
                }
            }

            function r(e) {
                v._adResponseStore[e.callback_uid] = e
            }

            function n(e, t, r) {
                var n, a = !1,
                    s = r[0],
                    o = {
                        sessionId: e,
                        statsId: h.statsId,
                        htSlotId: s.htSlot.getId(),
                        requestId: s.requestId,
                        xSlotNames: [s.xSlotName]
                    };
                t && t.hasOwnProperty("result") && (n = t.result);
                var u = "";
                if (n && n.hasOwnProperty("ad") && !g.isEmpty(n.ad) && (n.hasOwnProperty("cpm") && n.cpm > 0 || n.deal_id)) {
                    a = !0;
                    var c = n.cpm,
                        d = [Number(n.width), Number(n.height)],
                        m = n.deal_id || "",
                        y = '<iframe src="' + n.ad + '" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="' + n.width + '" height="' + n.height + '"></iframe>';
                    void 0 !== c && (u = v._bidTransformers.targeting.apply(c)), s.size = d, s.targetingType = "slot", s.targeting = {};
                    var b = l.arrayToString(d);
                    m && (s.targeting[v._configs.targetingKeys.pm] = [b + "_" + m]), void 0 !== u && "" !== u && (s.targeting[v._configs.targetingKeys.om] = [b + "_" + u]), s.targeting[v._configs.targetingKeys.id] = [s.requestId], s.price = Number(v._bidTransformers.price.apply(c));
                    p.services.RenderService.registerAd({
                        sessionId: e,
                        partnerId: h.partnerId,
                        adm: y,
                        requestId: s.requestId,
                        size: s.size,
                        price: u,
                        dealId: m,
                        timeOfExpiry: h.features.demandExpiry.enabled ? h.features.demandExpiry.value + f.now() : 0
                    })
                }
                if (a || (s.pass = !0), h.enabledAnalytics.requestTime) {
                    var _ = "hs_slot_pass";
                    a && (_ = "hs_slot_bid"), i.emit(_, o)
                }
            }
            var v, h, m, y;
            ! function() {
                i = p.services.EventsService, a = p.services.RenderService, s = p.services.ComplianceService, h = {
                    partnerId: "AppNexusHtb",
                    namespace: "AppNexusHtb",
                    statsId: "APNX",
                    version: "2.2.0",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_apnx_id",
                        om: "ix_apnx_om",
                        pm: "ix_apnx_pm"
                    },
                    bidUnitInCents: .01,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: d.CallbackTypes.ID,
                    architecture: d.Architectures.MRA,
                    requestType: d.RequestTypes.ANY
                }, m = o.getProtocol() + "//secure.adnxs.com/jpt", y = p.NAMESPACE + "." + h.namespace + ".adResponseCallback", v = d(h, e, null, {
                    parseResponse: n,
                    generateRequestObj: t,
                    adResponseCallback: r
                }), window[p.NAMESPACE] && (window[p.NAMESPACE][h.namespace] = window[p.NAMESPACE][h.namespace] || {}, window[p.NAMESPACE][h.namespace].adResponseCallback = r)
            }();
            var b = {};
            return u.derive(v, b)
        }
        var i, a, s, o = e(7),
            u = e(9),
            c = e(11),
            d = e(38),
            l = e(21),
            p = e(48),
            f = e(22),
            g = e(23);
        e(24);
        t.exports = n
    }, {}],
    35: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e[r].xSlotRef.zoneId;
                    g.isNumeric(n) && t.push(new window.Criteo.PubTag.DirectBidding.DirectBiddingSlot(e[r].htSlot.getName(), Number(n)))
                }
                return t
            }

            function r(e, t, r, n) {
                var s = r.slice();
                if (t.slots && g.isArray(t.slots))
                    for (var o = 0; o < t.slots.length; o++) {
                        for (var u, c = t.slots[o], d = s.length - 1; d >= 0; d--)
                            if (s[d].htSlot.getName() === c.impid && s[d].xSlotRef.zoneId === String(c.zoneid)) {
                                u = s[d], s.splice(d, 1);
                                break
                            } if (u) {
                            if (_.enabledAnalytics.requestTime) {
                                var p = u.htSlot.getId();
                                i.emit("hs_slot_bid", {
                                    sessionId: e,
                                    statsId: _.statsId,
                                    htSlotId: p,
                                    requestId: u.requestId,
                                    xSlotNames: [u.xSlotName]
                                }), n[p] && n[p][u.requestId] && g.arrayDelete(n[p][u.requestId], u.xSlotName)
                            }
                            var v = Number(c.cpm);
                            if (!g.isNumber(v) || v <= 0) u.pass = !0;
                            else if (c.hasOwnProperty("creative") && c.hasOwnProperty("width") && c.hasOwnProperty("height")) {
                                u.size = [c.width, c.height], u.targetingType = "slot", u.targeting = {};
                                var h = "",
                                    m = l.arrayToString(u.size);
                                h = b._bidTransformers.targeting.apply(v), u.targeting[b._configs.targetingKeys.om] = [m + "_" + h], u.targeting[b._configs.targetingKeys.id] = [u.requestId], u.price = Number(b._bidTransformers.price.apply(v));
                                a.registerAd({
                                    sessionId: e,
                                    partnerId: _.partnerId,
                                    adm: c.creative,
                                    requestId: u.requestId,
                                    size: u.size,
                                    price: h,
                                    timeOfExpiry: _.features.demandExpiry.enabled ? _.features.demandExpiry.value + f.now() : 0
                                })
                            }
                        }
                    }
                _.enabledAnalytics.requestTime && b._emitStatsEvent(e, "hs_slot_pass", n);
                for (var y = 0; y < s.length; y++) s[y].pass = !0
            }

            function n(e, t, n, a, s, o, u) {
                var c = "success";
                if (!w.hasOwnProperty(t)) return void o.resolve(n);
                clearTimeout(w[t]), delete w[t];
                try {
                    r(e, JSON.parse(u), n, a)
                } catch (e) {
                    i.emit("internal_error", _.partnerId + " error parsing demand: " + e, e.stack), c = "error"
                }
                i.emit("partner_request_complete", {
                    partner: _.partnerId,
                    status: c
                }), o.resolve(n)
            }

            function v(e, t, r, n, a, s) {
                if (!w.hasOwnProperty(t)) return void s.resolve(r);
                clearTimeout(w[t]), delete w[t], i.emit("partner_request_complete", {
                    partner: _.partnerId,
                    status: "timeout"
                }), _.enabledAnalytics.requestTime && b._emitStatsEvent(e, "hs_slot_timeout", n), s.resolve(r)
            }

            function h(e, t, r, n, a, s, o, u) {
                var c = "error";
                if (204 === u) {
                    c = "success";
                    for (var d = 0; d < r.length; d++) r[d].pass = !0
                }
                if (!w.hasOwnProperty(t)) return void s.resolve(r);
                clearTimeout(w[t]), delete w[t], i.emit("partner_request_complete", {
                    partner: _.partnerId,
                    status: c
                }), _.enabledAnalytics.requestTime && b._emitStatsEvent(e, "error" === c ? "hs_slot_error" : "hs_slot_pass", n), s.resolve(r)
            }

            function m(r, i) {
                if (0 === i.length) return c.resolve([]);
                var a = c.defer(),
                    s = {};
                if (_.enabledAnalytics.requestTime)
                    for (var o = 0; o < i.length; o++) {
                        var u = i[o],
                            d = u.htSlot.getId(),
                            l = u.requestId;
                        s.hasOwnProperty(d) || (s[d] = {}), s[d].hasOwnProperty(l) || (s[d][l] = []), s[d][l].push(u.xSlotName)
                    }
                return window.Criteo.events.push(function() {
                    _.enabledAnalytics.requestTime && b._emitStatsEvent(r, "hs_slot_request", s);
                    var o = "_" + f.generateUniqueId(),
                        u = t(i);
                    if (0 === u.length) return c.resolve([]);
                    var d = n.bind(null, r, o, i, s, u, a),
                        l = v.bind(null, r, o, i, s, u, a),
                        g = h.bind(null, r, o, i, s, u, a),
                        m = new window.Criteo.PubTag.DirectBidding.DirectBiddingUrlBuilder(!1),
                        y = new window.Criteo.PubTag.DirectBidding.DirectBiddingEvent(I, m, u, d, g, l);
                    w[o] = e.timeout ? setTimeout(l, e.timeout) : null, p.services.TimerService.addTimerCallback(r, l), window.criteo_pubtag.push(y)
                }), a.promise
            }

            function y(e, t) {
                for (var r = b._generateReturnParcels(t), n = [], i = 0; i < r.length; i++) n.push(m(e, r[i]));
                return n
            }
            var b, _, w, I;
            ! function() {
                i = p.services.EventsService, a = p.services.RenderService, _ = {
                    partnerId: "CriteoHtb",
                    namespace: "CriteoHtb",
                    statsId: "CRTB",
                    version: "2.1.0",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_cdb_id",
                        om: "ix_cdb_om"
                    },
                    bidUnitInCents: 100,
                    lineItemType: u.LineItemTypes.ID_AND_SIZE,
                    callbackType: d.CallbackTypes.ID,
                    architecture: d.Architectures.SRA,
                    requestType: d.RequestTypes.ANY
                }, w = {}, I = 154, window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || [];
                var t = s.getProtocol() + "//static.criteo.net/js/ld/publishertag.js";
                b = d(_, e, [t], {
                    retriever: y
                })
            }();
            var S = {};
            return o.derive(b, S)
        }
        var i, a, s = e(7),
            o = e(9),
            u = e(11),
            c = e(14),
            d = e(38),
            l = e(21),
            p = e(48),
            f = e(22),
            g = e(23);
        e(24);
        t.exports = n
    }, {}],
    36: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(t) {
                var r = {
                        v: 7.2,
                        s: e.siteId,
                        fn: b
                    },
                    n = d.BidRequest(),
                    i = o.isTopFrame() ? 1 : 0;
                n.setPage(o.getPageUrl()), v.isString(document.referrer) && "" !== document.referrer && n.setRef(document.referrer), n.setExt({
                    source: "ixwrapper"
                });
                for (var a = 0; a < t.length; a++)
                    if (t[a].hasOwnProperty("xSlotRef")) {
                        var u = t[a].xSlotRef;
                        if (u) {
                            t[a].size = u.size;
                            var c = {
                                    w: u.size[0],
                                    h: u.size[1],
                                    topframe: i
                                },
                                l = {
                                    sid: t[a].xSlotName,
                                    siteID: u.siteId
                                };
                            t[a].ixImpId = n.addImp(c, l, e.bidFloor, e.bidFloorCur)
                        }
                    } if (t[0].identityData)
                    for (var p in t[0].identityData) t[0].identityData.hasOwnProperty(p) && t[0].identityData[p].data && n.addUserEid(t[0].identityData[p].data);
                if (s.isPrivacyEnabled()) {
                    var f = s.gdpr.getConsent();
                    n.setGdprConsent(f.applies, f.consentString)
                }
                return r.r = n.stringify(), {
                    url: y,
                    data: r,
                    callbackId: n.getId()
                }
            }

            function r(e) {
                try {
                    var t = d.BidResponse(e),
                        r = t.getId();
                    h._adResponseStore[r] = t
                } catch (e) {
                    i.emit("internal_error", 'Error occurred while saving response for "' + m.partnerId + '".', e.stack)
                }
            }

            function n(t, r, n, s) {
                var o = r.getExt();
                if (e.hasOwnProperty("asedge") && o && o.akamaiDebugInfo) {
                    var u = y.replace(/^https?\:\/\/|\/cygnus/g, ""),
                        d = {
                            sessionId: t,
                            hostname: u
                        };
                    void 0 !== o.akamaiDebugInfo.akamaiPresent && (d.akamaiPresent = o.akamaiDebugInfo.akamaiPresent.toString()), void 0 !== o.akamaiDebugInfo.requestHost && (d.requestHost = o.akamaiDebugInfo.requestHost.toString()), i.emit("hs_akamai_debug", d)
                }
                for (var l = r.getBids(), f = n.slice(), b = 0; b < l.length; b++) {
                    for (var _, w = f.length - 1; w >= 0; w--)
                        if (f[w].ixImpId === l[b].impid) {
                            _ = f[w], f.splice(w, 1);
                            break
                        } if (_) {
                        var I = _.htSlot.getId();
                        if (l[b].hasOwnProperty("price") || l[b].ext && l[b].ext.hasOwnProperty("dealid")) {
                            var S = l[b].price;
                            m.enabledAnalytics.requestTime && (i.emit("hs_slot_bid", {
                                sessionId: t,
                                statsId: m.statsId,
                                htSlotId: I,
                                requestId: _.requestId,
                                xSlotNames: [_.xSlotName]
                            }), s[I] && s[I][_.requestId] && v.arrayDelete(s[I][_.requestId], _.xSlotName));
                            var T;
                            l[b].ext && v.isString(l[b].ext.dealid) && !v.isEmpty(l[b].ext.dealid) && (T = l[b].ext.dealid);
                            var x = l[b].adm;
                            _.targetingType = "slot", _.targeting = {};
                            var P = "";
                            v.isNumeric(S) && (_.price = Number(h._bidTransformers.price.apply(S))), P = v.isNumeric(S) ? h._bidTransformers.targeting.apply(S) : S;
                            var E = h._configs.targetingKeys.pm,
                                A = h._configs.targetingKeys.pmid,
                                O = h._configs.targetingKeys.om,
                                R = h._configs.targetingKeys.id;
                            if (h._configs.lineItemType !== c.LineItemTypes.CUSTOM) {
                                var N = p.arrayToString(_.size);
                                T ? (_.targeting[A] = [N + "_" + T], v.isString(P) && !v.isEmpty(P) && (_.targeting[E] = [N + "_" + P])) : _.targeting[O] = [N + "_" + P], _.targeting[R] = [_.requestId];
                                a.registerAd({
                                    sessionId: t,
                                    partnerId: m.partnerId,
                                    adm: x,
                                    requestId: _.requestId,
                                    size: _.size,
                                    price: P,
                                    dealId: T,
                                    timeOfExpiry: m.features.demandExpiry.enabled ? m.features.demandExpiry.value + g.now() : 0
                                })
                            } else {
                                var D = _.xSlotName;
                                T ? (_.targeting[E] = [D + "_" + T], v.isString(P) && !v.isEmpty(P) && _.targeting[E].push(D + "_" + P)) : _.targeting[O] = [D + "_" + P], a.registerIndexLegacyAd(t, m.partnerId, x, m.features.demandExpiry.enabled ? m.features.demandExpiry.value + g.now() : 0, T || P, D)
                            }
                        }
                    }
                }
                m.enabledAnalytics.requestTime && h._emitStatsEvent(t, "hs_slot_pass", s)
            }
            var h, m, y, b;
            ! function() {
                i = f.services.EventsService, a = f.services.RenderService, s = f.services.ComplianceService, m = {
                    partnerId: "IndexExchangeHtb",
                    namespace: "IndexExchangeHtb",
                    statsId: "INDX",
                    version: "2.4.0",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !0,
                            value: 45e3
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_id",
                        om: "IOM",
                        pm: "IPM",
                        pmid: "IPMID"
                    },
                    bidUnitInCents: 1,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.ID,
                    architecture: l.Architectures.FSRA,
                    requestType: l.RequestTypes.ANY
                }, y = e.hasOwnProperty("asedge") ? o.getProtocol("http://ht-lb", "https://ht-lb-sec") + ".casalemedia.com/cygnus" : o.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/cygnus", b = f.NAMESPACE + "." + m.namespace + ".adResponseCallback", h = l(m, e, null, {
                    parseResponse: n,
                    generateRequestObj: t,
                    adResponseCallback: r
                }), window[f.NAMESPACE] && (window[f.NAMESPACE][m.namespace] = window[f.NAMESPACE][m.namespace] || {}, window[f.NAMESPACE][m.namespace].adResponseCallback = r)
            }();
            var _ = {};
            return u.derive(h, _)
        }
        var i, a, s, o = e(7),
            u = e(9),
            c = e(11),
            d = e(20),
            l = e(38),
            p = e(21),
            f = e(48),
            g = e(22),
            v = e(23);
        e(24);
        t.exports = n
    }, {}],
    37: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t) {
                var r = {
                    url: b,
                    data: t,
                    method: "GET",
                    sessionId: e
                };
                d.isXhrSupported() ? d.ajax(r) : d.img(r)
            }

            function r(t) {
                for (var r = "_" + g.generateUniqueId(), n = "", i = "", a = s.gdpr.getConsent(), u = s.isPrivacyEnabled(), c = null, d = 0; d < t.length; d++) n += t[d].xSlotRef.adUnitId.toString() + ",", i += p.arrayToString(t[d].xSlotRef.sizes, ",") + "|";
                n = n.slice(0, -1), i = i.slice(0, -1);
                var l = t[0] && t[0].identityData;
                if (l && l.AdserverOrgIp && l.AdserverOrgIp.data) {
                    var h = l.AdserverOrgIp.data.uids;
                    if (v.isArray(h))
                        for (var b = 0; b < h.length; b++)
                            if (h[b].ext && "TDID" === h[b].ext.rtiPartner) {
                                c = h[b].id;
                                break
                            }
                }
                var _ = {
                    auid: n,
                    aus: i,
                    ju: o.getPageUrl(),
                    jr: o.getReferrer(),
                    ch: e.charset,
                    tz: g.getTimezoneOffset(),
                    bc: "hb_ix_" + m.version,
                    be: 1,
                    res: p.arrayToString([
                        [o.getScreenWidth(), o.getScreenHeight()]
                    ]),
                    tws: p.arrayToString([
                        [o.getViewportWidth(), o.getViewportHeight()]
                    ]),
                    ifr: o.isTopFrame() ? 0 : 1,
                    callback: "window." + f.NAMESPACE + ".OpenXHtb.adResponseCallbacks." + r,
                    cache: g.now()
                };
                return c && (_.ttduuid = c), u && (void 0 !== a.consentString && (_.gdpr_consent = a.consentString), void 0 !== a.applies && (_.gdpr = a.applies ? "1" : "0")), {
                    url: y,
                    data: _,
                    callbackId: r
                }
            }

            function n(r, n, u, c, d, l, f) {
                var y = u.slice(),
                    b = s.gdpr.getConsent(),
                    _ = s.isPrivacyEnabled(),
                    w = n.ads;
                if (!w || !w.ad || !v.isArray(w.ad)) return i.emit("internal_error", m.partnerId + " invalid ad response"), void(m.enabledAnalytics.requestTime && !f && h._emitStatsEvent(r, "hs_slot_error", c));
                w.pixels && (_ && (void 0 !== b.consentString && (w.pixels += "&gdpr_consent=" + b.consentString), void 0 !== b.applies && (w.pixels += "&gdpr=" + (b.applies ? "1" : "0"))), o.createHiddenIFrame(w.pixels));
                for (var I = w.ad, S = 0; S < I.length; S++) {
                    var T, x = I[S];
                    I[S].adunitid = String(I[S].adunitid);
                    for (var P = y.length - 1; P >= 0; P--)
                        if (y[P].xSlotRef.adUnitId === I[S].adunitid) {
                            T = y[P], y.splice(P, 1);
                            break
                        } if (T) {
                        var E = T.htSlot.getId(),
                            A = {};
                        if (x.ts && (A.ts = x.ts), A.bt = e.timeout || 0, A.bd = l - d, A.br = f ? "t" : "p", A.bs = o.getHostname(), x.pub_rev && x.html && x.creative && x.creative.length) {
                            var O = x.pub_rev;
                            if (A.bp = O, t(r, A), !f) {
                                var R = Number(x.creative[0].width),
                                    N = Number(x.creative[0].height),
                                    D = x.html,
                                    L = x.deal_id ? String(x.deal_id) : "";
                                if (O <= 0 && "" === L) T.pass = !0;
                                else {
                                    m.enabledAnalytics.requestTime && (i.emit("hs_slot_bid", {
                                        sessionId: r,
                                        statsId: m.statsId,
                                        htSlotId: E,
                                        requestId: T.requestId,
                                        xSlotNames: [T.xSlotName]
                                    }), c[E] && c[E][T.requestId] && v.arrayDelete(c[E][T.requestId], T.xSlotName)), T.size = [R, N], T.targetingType = "slot", T.targeting = {};
                                    var q = "";
                                    q = h._bidTransformers.targeting.apply(O);
                                    var k = p.arrayToString(T.size);
                                    "" !== L && (T.targeting[h._configs.targetingKeys.pm] = [k + "_" + L]), T.targeting[h._configs.targetingKeys.om] = [k + "_" + q], T.targeting[h._configs.targetingKeys.id] = [T.requestId], T.price = Number(h._bidTransformers.price.apply(O));
                                    a.registerAd({
                                        sessionId: r,
                                        partnerId: m.partnerId,
                                        adm: D,
                                        requestId: T.requestId,
                                        size: T.size,
                                        price: q,
                                        dealId: L,
                                        timeOfExpiry: m.features.demandExpiry.enabled ? m.features.demandExpiry.value + g.now() : 0
                                    })
                                }
                            }
                        } else i.emit("internal_error", m.partnerId + " invalid ad response"), m.enabledAnalytics.requestTime && !f && (i.emit("hs_slot_error", {
                            sessionId: r,
                            statsId: m.statsId,
                            htSlotId: E,
                            requestId: T.requestId,
                            xSlotNames: [T.xSlotName]
                        }), c[E] && c[E][T.requestId] && v.arrayDelete(c[E][T.requestId], T.xSlotName))
                    }
                }
                m.enabledAnalytics.requestTime && !f && h._emitStatsEvent(r, "hs_slot_pass", c)
            }
            var h, m, y, b;
            ! function() {
                i = f.services.EventsService, a = f.services.RenderService, s = f.services.ComplianceService, m = {
                    partnerId: "OpenXHtb",
                    namespace: "OpenXHtb",
                    statsId: "OPNX",
                    version: "2.1.2",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_ox_id",
                        om: "ix_ox_om",
                        pm: "ix_ox_pm"
                    },
                    bidUnitInCents: .1,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.CALLBACK_NAME,
                    architecture: l.Architectures.SRA,
                    requestType: l.RequestTypes.ANY,
                    parseAfterTimeout: !0
                }, e.medium = e.medium || "w", e.version = e.version || "1.0", e.endPointName = e.endPointName || "arj", e.charset = e.charset || "UTF-8", e.bidderCode = e.bidderCode || "hb_ix", y = d.buildUrl(o.getProtocol() + "//" + e.host, [e.medium, e.version, e.endPointName]), b = d.buildUrl(o.getProtocol() + "//" + e.host, [e.medium, e.version, "bo"]), h = l(m, e, null, {
                    parseResponse: n,
                    generateRequestObj: r
                }), window[f.NAMESPACE] && (window[f.NAMESPACE][m.namespace] = window[f.NAMESPACE][m.namespace] || {}, window[f.NAMESPACE][m.namespace].adResponseCallbacks = h.getDirectInterface()[m.namespace].adResponseCallbacks, window[f.NAMESPACE][m.namespace].version = m.version)
            }();
            var _ = {};
            return u.derive(h, _)
        }
        var i, a, s, o = e(7),
            u = e(9),
            c = e(11),
            d = e(19),
            l = e(38),
            p = e(21),
            f = e(48),
            g = e(22),
            v = e(23);
        e(24);
        t.exports = n
    }, {}],
    38: [function(e, t, r) {
        "use strict";

        function n(e, t, r, g) {
            function v(e) {
                return function(t) {
                    U[e] = t, delete j[e]
                }
            }

            function h(e, t, r) {
                for (var n in r)
                    if (r.hasOwnProperty(n))
                        for (var a in r[n]) r[n].hasOwnProperty(a) && r[n][a].length && i.emit(t, {
                            sessionId: e,
                            statsId: A.statsId,
                            htSlotId: n,
                            requestId: a,
                            xSlotNames: r[n][a]
                        })
            }

            function m(e, r) {
                var n = {};
                return "price" === e && (n = {
                    outputCentsDivisor: 1,
                    outputPrecision: 0,
                    roundingType: "NONE"
                }), f.mergeObjects(C[e], {
                    bidUnitInCents: A.bidUnitInCents
                }, r || {}, t.bidTransformer || {}, n)
            }

            function y(e) {
                var t = [];
                A.architecture === n.Architectures.FSRA && t.push([]);
                for (var r = {}, i = 0; i < e.length; i++) {
                    var a = e[i].htSlot.getName();
                    if (M.mapping.hasOwnProperty(a))
                        for (var s = "_" + p.generateUniqueId(), o = 0; o < M.mapping[a].length; o++) {
                            var u = {},
                                c = M.mapping[a][o];
                            u.partnerId = A.partnerId, u.partnerStatsId = A.statsId, u.htSlot = e[i].htSlot, u.ref = e[i].ref, u.xSlotRef = M.xSlots[c], u.xSlotName = c, u.requestId = s, e[i].firstPartyData && (u.firstPartyData = e[i].firstPartyData), e[i].identityData && (u.identityData = e[i].identityData), A.architecture === n.Architectures.MRA ? t.push([u]) : A.architecture === n.Architectures.FSRA ? t[0].push(u) : (r.hasOwnProperty(c) || (r[c] = 0), t.length < r[c] + 1 && t.push([]), t[r[c]].push(u), r[c]++)
                        }
                }
                return t
            }

            function b(e, t) {
                if (0 === t.length) return d.resolve([]);
                var r = q(t, e);
                A.callbackType === n.CallbackTypes.CALLBACK_NAME && (j[r.callbackId] = v(r.callbackId));
                var a = {};
                if (A.enabledAnalytics.requestTime) {
                    for (var s = 0; s < t.length; s++) {
                        var o = t[s],
                            u = o.htSlot.getId(),
                            l = o.requestId;
                        a.hasOwnProperty(u) || (a[u] = {}), a[u].hasOwnProperty(l) || (a[u][l] = []), a[u][l].push(o.xSlotName)
                    }
                    h(e, "hs_slot_request", a)
                }
                return new d(function(s) {
                    i.emit("partner_request_sent", {
                        partner: A.partnerId
                    });
                    var o, u, d = {
                        url: r.url,
                        data: r.data,
                        method: "GET",
                        timeout: M.timeout,
                        withCredentials: !0,
                        jsonp: !0,
                        sessionId: e,
                        globalTimeout: !0,
                        continueAfterTimeout: !0,
                        onSuccess: function(u, c, d) {
                            var l, p = "success";
                            try {
                                A.callbackType === n.CallbackTypes.NONE ? l = JSON.parse(u) : (u && eval.call(null, u), l = U[r.callbackId], delete U[r.callbackId]), d && !A.parseAfterTimeout || k(e, l, t, a, o, c, d)
                            } catch (t) {
                                i.emit("internal_error", A.partnerId + " error parsing demand: " + t, t.stack), p = "error", A.enabledAnalytics.requestTime && !d && h(e, "hs_slot_error", a)
                            }
                            i.emit("partner_request_complete", {
                                partner: A.partnerId,
                                status: p
                            }), s(t)
                        },
                        onTimeout: function() {
                            i.emit("partner_request_complete", {
                                partner: A.partnerId,
                                status: "timeout"
                            }), A.enabledAnalytics.requestTime && h(e, "hs_slot_timeout", a), s(t)
                        },
                        onFailure: function() {
                            i.emit("partner_request_complete", {
                                partner: A.partnerId,
                                status: "error"
                            }), A.enabledAnalytics.requestTime && h(e, "hs_slot_error", a), s(t)
                        }
                    };
                    u = r.networkParamOverrides ? f.mergeObjects(d, r.networkParamOverrides) : d, A.callbackType !== n.CallbackTypes.NONE && A.requestType !== n.RequestTypes.AJAX || (u.jsonp = !1), o = A.requestType === n.RequestTypes.JSONP ? c.jsonp(u) : c.ajax(u)
                })
            }

            function _(e) {
                H.push(e)
            }

            function w() {
                return O
            }

            function I(e) {
                D = {}, D[A.namespace] = e
            }

            function S(e, t) {
                D[A.namespace][e] = t
            }

            function T() {
                return A.partnerId
            }

            function x() {
                return D
            }

            function P() {
                return A.features.prefetchDisabled && A.features.prefetchDisabled.enabled
            }

            function E(e, t) {
                if (t = t.slice(), M.rateLimiting.enabled) {
                    var r = p.now();
                    if ("page" === A.targetingType) {
                        if (r <= R) return [];
                        R = r + M.rateLimiting.value
                    } else
                        for (var n = t.length - 1; n >= 0; n--) {
                            var i = t[n].htSlot.getName();
                            N.hasOwnProperty(i) && r <= N[i] ? t.splice(n, 1) : N[i] = r + M.rateLimiting.value
                        }
                }
                if (!t.length) return [];
                if (L) return L(e, t);
                for (var a = y(t), s = [], o = 0; o < a.length; o++) s.push(b(e, a[o]));
                return s
            }
            var A, O, R, N, D, L, q, k, C, M, H, U, z, F, j;
            return function() {
                if (i = l.services.EventsService, a = l.services.RenderService, C = {
                        targeting: {
                            bidUnitInCents: 1,
                            outputCentsDivisor: 1,
                            outputPrecision: 0,
                            roundingType: "FLOOR",
                            floor: 0,
                            buckets: [{
                                max: 2e3,
                                step: 5
                            }, {
                                max: 5e3,
                                step: 100
                            }]
                        },
                        price: {
                            bidUnitInCents: 1
                        }
                    }, A = e, R = 0, N = {}, H = [], j = {}, U = {}, M = {
                        timeout: 0,
                        lineItemType: e.lineItemType,
                        targetingKeys: e.targetingKeys,
                        rateLimiting: e.features.rateLimiting
                    }, t.hasOwnProperty("timeout") && t.timeout > 0 && (M.timeout = t.timeout, i.emit("hs_define_partner_timeout", {
                        timeout: M.timeout,
                        statsId: A.statsId
                    })), t.hasOwnProperty("targetingKeyOverride"))
                    for (var p in t.targetingKeyOverride) t.targetingKeyOverride.hasOwnProperty(p) && M.targetingKeys.hasOwnProperty(p) && (M.targetingKeys[p] = t.targetingKeyOverride[p]);
                if (t.hasOwnProperty("rateLimiting") && (t.rateLimiting.hasOwnProperty("enabled") && (M.rateLimiting.enabled = t.rateLimiting.enabled), t.rateLimiting.value && (M.rateLimiting.value = t.rateLimiting.value)), t.hasOwnProperty("lineItemType") && (M.lineItemType = u.LineItemTypes[t.lineItemType]), M.xSlots = t.xSlots, M.mapping = t.mapping, O = !1, r) {
                    f.isArray(r) || (r = [r]);
                    var v = [];
                    r.map(function(e) {
                        var t = d.defer();
                        v.push(t.promise), c.jsonp({
                            url: e,
                            onSuccess: function() {
                                t.resolve()
                            }
                        })
                    }), d.all(v).then(function() {
                        O = !0, i.emit("partner_instantiated", {
                            partner: A.partnerId
                        }), H = o(H)
                    })
                } else i.emit("partner_instantiated", {
                    partner: A.partnerId
                }), O = !0;
                a.registerPartner(A.partnerId, M.lineItemType, M.targetingKeys.id), z = {}, e.hasOwnProperty("bidUnitInCents") && (z.targeting = s(m("targeting")), z.price = s(m("price"))), g.retriever ? L = g.retriever : (k = g.parseResponse, q = g.generateRequestObj, F = g.adResponseCallback), D = {}, D.hasOwnProperty(A.namespace) || (D[A.namespace] = {}), A.callbackType === n.CallbackTypes.ID ? D[A.namespace].adResponseCallback = F : D[A.namespace].adResponseCallbacks = j
            }(), {
                _configs: M,
                _adResponseStore: U,
                _bidTransformers: z,
                _setDirectInterface: I,
                _addToDirectInterface: S,
                _generateReturnParcels: y,
                _emitStatsEvent: h,
                _pushToCommandQueue: _,
                _generateBidTransformerConfig: m,
                getPartnerId: T,
                getDirectInterface: x,
                getPrefetchDisabled: P,
                isReady: w,
                retrieve: E
            }
        }
        var i, a, s = e(6),
            o = e(10),
            u = e(11),
            c = e(19),
            d = e(14),
            l = e(48),
            p = e(22),
            f = e(23);
        e(24);
        n.Architectures = {
            MRA: 0,
            SRA: 1,
            FSRA: 2
        }, n.CallbackTypes = {
            ID: 0,
            CALLBACK_NAME: 1,
            NONE: 2
        }, n.RequestTypes = {
            ANY: 0,
            AJAX: 1,
            JSONP: 2
        }, t.exports = n
    }, {}],
    39: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e) {
                S || (S = o({
                    selectors: ["divId"],
                    filters: ["deviceType"]
                }));
                for (var t = [], r = 0; r < e.length; r++) d.htSlotsMap.hasOwnProperty(e[r]) && t.push(d.htSlotsMap[e[r]]);
                return S.filter(t, [{}]).map(function(e) {
                    return e.getName()
                })
            }

            function n() {
                if (!P || !x) return null;
                var e = p.evalVariable(T);
                if (void 0 === e || null === e) return null;
                if (!p.isArray(e, "object") || p.isEmpty(e)) return i.emit("error", "`" + T + "` must be a non-empty array"), [];
                for (var t = [], r = ", ignoring this p-slot", n = 0; n < e.length; n++) {
                    var a = e[n];
                    if (p.isEmpty(a)) i.emit("error", "`" + T + "[" + n + "]` must be a non-empty object" + r);
                    else if (a.hasOwnProperty("adUnitPath") && p.isString(a.adUnitPath) && !p.isEmpty(a.adUnitPath))
                        if (!a.hasOwnProperty("divId") || p.isString(a.divId) && !p.isEmpty(a.divId))
                            if (!a.hasOwnProperty("sizes") || c.isSizes(a.sizes)) {
                                if (a.hasOwnProperty("targeting")) {
                                    if (!p.isArray(a.targeting, "object")) {
                                        i.emit("error", "`" + T + "[" + n + "].targeting` must be an array of objects" + r);
                                        continue
                                    }
                                    for (var u = !1, l = 0; l < a.targeting.length; l++) {
                                        var f = a.targeting[l];
                                        for (var g in f) f.hasOwnProperty(g) && (p.isArray(f[g], "string") || (u = !0, i.emit("error", "`" + T + "[" + n + "].targeting[" + l + "]." + g + "` must be an array of strings")))
                                    }
                                    if (u) continue
                                }!a.hasOwnProperty("deviceType") || s.isValidDeviceType(a.deviceType) ? t.push(a) : i.emit("error", "`" + T + "[" + n + "].deviceType` must be a valid device type string" + r)
                            } else i.emit("error", "`" + T + "[" + n + "].sizes` must be a sizes array" + r);
                    else i.emit("error", "`" + T + "[" + n + "].divId` must be a non-empty string" + r);
                    else i.emit("error", "`" + T + "[" + n + "].adUnitPath` is required and must be a non-empty string" + r)
                }
                if (!t.length) return [];
                S || (S = o(P));
                var v = S.filter(d.htSlots, t);
                if ("ALL" === x) return S.select(v, t).map(function(e) {
                    return e.htSlot.getName()
                });
                for (var h = [], m = 0; m < t.length; m++) h = p.appendToArray(h, S.select(v, [t[m]]).map(function(e) {
                    return e.htSlot.getName()
                }));
                return h
            }

            function f() {
                if (!A) return null;
                var e = p.evalVariable(E);
                return void 0 === e || null === e ? null : !p.isString(e) || p.isEmpty(e) ? (i.emit("error", "`" + E + "` must be a non-empty string"), []) : A.hasOwnProperty(e) ? r(A[e]) : (i.emit("error", 'Unrecognized page type "' + e + '"'), [])
            }

            function g() {
                return O ? r(O) : null
            }

            function v() {
                for (var e = [n, f, g], t = 0; t < e.length; t++) {
                    var r = e[t]();
                    if (r) return r
                }
                return []
            }

            function h(e, t, r, n) {
                t.drd.promise.then(function(t) {
                    for (var a = 0; a < t.length; a++) i.emit("hs_slot_prefetch", {
                        sessionId: e,
                        statsId: t[a].partnerStatsId,
                        htSlotId: t[a].htSlot.getId(),
                        requestId: t[a].requestId,
                        xSlotNames: [t[a].xSlotName]
                    }), t[a].ref = r.ref;
                    n.resolve(t)
                })
            }

            function m(e, t, r, n) {
                for (var i = [], s = 0; s < n.length;) {
                    var o = n[s].htSlot.getName();
                    if (!n[s].prefetch && w.hasOwnProperty(o) && w[o].hasOwnProperty(t))
                        for (var c = w[o][t]; c.length;) {
                            var d = c.shift();
                            if (!(d.timeOfExpiry < l.now())) {
                                a.startTimer(d.sessionId);
                                var p = u.defer();
                                h(e, d, n[s], p), i.push(p), n.splice(s, 1), s--;
                                break
                            }
                        }
                    s++
                }
                return i
            }

            function y(e, t, r, n, i) {
                var a = {};
                n.map(function(t) {
                    a[t.ref] = {
                        sessionId: e,
                        timeOfExpiry: 1 / 0,
                        drd: u.defer()
                    }
                }), n.map(function(e) {
                    if (!r.getPrefetchDisabled()) {
                        var n = a[e.ref],
                            s = n.drd;
                        u.all(i).then(function(t) {
                            n.timeOfExpiry = l.now() + R;
                            for (var r = [], i = 0; i < t.length; i++)
                                for (var a = t[i], o = 0; o < a.length; o++) {
                                    var u = a[o];
                                    u.ref === e.ref && r.push(u)
                                }
                            s.resolve(r)
                        }).catch(function(e) {
                            s.resolve([])
                        });
                        var o = e.htSlot.getName();
                        w.hasOwnProperty(o) || (w[o] = {}), w[o].hasOwnProperty(t) || (w[o][t] = []), w[o][t].push(n)
                    }
                })
            }

            function b(e, r) {
                if (e.length) {
                    for (var n = [], s = 0; s < e.length; s++) {
                        var o = e[s];
                        if (d.htSlotsMap.hasOwnProperty(o)) {
                            var c = {
                                htSlot: d.htSlotsMap[o],
                                prefetch: !0,
                                ref: l.generateUuid()
                            };
                            r && (c.identityData = r), n.push(c)
                        } else i.emit("error", "Unrecognized htSlotName " + o)
                    }
                    if (n.length) {
                        var p = a.createTimer(d.globalTimeout, !1);
                        i.emit("hs_session_start", {
                            sessionId: p
                        });
                        var f = t.__invokeAllPartners(p, n, !0);
                        a.addTimerCallback(p, function() {
                            for (var e = 0; e < f.defers.length; e++) f.defers[e].resolve([])
                        }), u.all(f.promises).then(function() {
                            i.emit("hs_session_end", {
                                sessionId: p
                            })
                        })
                    }
                }
            }

            function _(e) {
                if (I) {
                    var t = v();
                    t.length && b(t, e)
                }
            }
            var w, I, S, T, x, P, E, A, O, R = 55e3;
            return function() {
                if (i = d.services.EventsService, a = d.services.TimerService, w = {}, I = !1, T = "window.headertag.publisher.prefetchSlots", E = "window.headertag.pagetype", e.prefetchOnLoad && (e.prefetchOnLoad.enabled && (I = !0), e.prefetchOnLoad.configs)) {
                    var t = e.prefetchOnLoad.configs.dynamic;
                    t && (t.var && (T = t.var), t.slotMapping && (t.slotMapping.style && (x = t.slotMapping.style), t.slotMapping.selectors && t.slotMapping.filters && (P = {
                        selectors: t.slotMapping.selectors,
                        filters: t.slotMapping.filters
                    })));
                    var r = e.prefetchOnLoad.configs.pageType;
                    r && (r.var && (E = r.var), r.mapping && (A = r.mapping));
                    var n = e.prefetchOnLoad.configs.fixed;
                    n && n.htSlotNames && (O = n.htSlotNames)
                }
            }(), {
                prefetch: b,
                prefetchOnLoad: _,
                fulfilDemand: m,
                storeDemand: y
            }
        }
        var i, a, s = e(12),
            o = e(18),
            u = e(14),
            c = e(21),
            d = e(48),
            l = e(22),
            p = e(23);
        t.exports = n
    }, {}],
    40: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                var t = [],
                    n = {},
                    i = [];
                return e.forEach(function(e) {
                    n = {
                        id: e.htSlot.getId(),
                        tagId: e.xSlotRef.adUnitName,
                        secure: "https:" === o.getProtocol() ? 1 : 0,
                        bidFloor: r("kadfloor", x.kadfloor),
                        ext: {
                            pmZoneId: r("pmzoneid", e.pmzoneid)
                        }
                    }, i = e.xSlotRef.sizes[0], i.length > 0 ? n.banner = {
                        w: i[0],
                        h: i[1]
                    } : console.log("PubMatic: Error in sizes array"), t.push(n)
                }), t
            }

            function r(e, t) {
                if (!v.isString(t)) return void(t && console.log("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + typeof t));
                switch (e) {
                    case "pmzoneid":
                        return t.split(",").slice(0, 50).map(function(e) {
                            return e.trim()
                        }).join();
                    case "kadfloor":
                    case "lat":
                    case "lon":
                        return parseFloat(t) || void 0;
                    case "yob":
                        return parseInt(t) || void 0;
                    default:
                        return t
                }
            }

            function n(e) {
                return {
                    page: o.topWindow.location.href,
                    ref: o.topWindow.document.referrer,
                    publisher: {
                        id: e,
                        domain: o.topWindow.location.hostname
                    },
                    domain: o.topWindow.location.hostname
                }
            }

            function h(e) {
                var t = "yes" == o.topWindow.navigator.doNotTrack || "1" == o.topWindow.navigator.doNotTrack || "1" == o.topWindow.navigator.msDoNotTrack ? 1 : 0;
                return {
                    ua: o.getUserAgent(),
                    js: 1,
                    dnt: t,
                    h: o.getScreenHeight(),
                    w: o.getScreenWidth(),
                    language: o.getLanguage(),
                    geo: {
                        lat: r("lat", x.lat),
                        lon: r("lon", x.lon)
                    }
                }
            }

            function m(e) {
                return {
                    gender: x.gender ? x.gender.trim() : void 0,
                    geo: {
                        lat: r("lat", x.lat),
                        lon: r("lon", x.lon)
                    },
                    yob: r("yob", x.yob)
                }
            }

            function y(e) {
                var t = {};
                return t.wrapper = {}, t.wrapper.profile = x.profile || void 0, t.wrapper.version = x.version || void 0, t.wrapper.wiid = x.wiid || void 0, t.wrapper.transactionId = x.transactionId, t.wrapper.wp = "pbjs", t
            }

            function b(e) {
                var r = {},
                    a = f.generateUniqueId(),
                    s = o.getProtocol() + "//hbopenbid.pubmatic.com/translator?source=index-client";
                if (r = {
                        id: "" + (new Date).getTime(),
                        at: 1,
                        cur: ["USD"],
                        imp: t(e),
                        site: n(x.pubId),
                        device: h(e[0]),
                        user: m(e[0]),
                        ext: y(e[0])
                    }, i.isPrivacyEnabled()) {
                    var u = i.gdpr.getConsent();
                    r.user.ext = {
                        consent: u.consentString
                    }, r.regs = {
                        ext: {
                            gdpr: u.applies ? 1 : 0
                        }
                    }
                }
                return {
                    url: s,
                    data: r,
                    callbackId: a,
                    networkParamOverrides: {
                        method: "POST",
                        contentType: "text/plain"
                    }
                }
            }

            function _(e) {
                S._adResponseStore[0] = e
            }

            function w(e) {
                e && g.img({
                    url: decodeURIComponent(e),
                    method: "GET"
                })
            }

            function I(e, t, r) {
                var n = [];
                if (t && t.seatbid && v.isArray(t.seatbid) && t.seatbid.length > 0)
                    for (var i = 0; i < t.seatbid.length; i++) n = n.concat(t.seatbid[i].bid);
                for (var a = 0; a < r.length; a++) {
                    var o = r[a],
                        u = {},
                        c = o.htSlot.getId();
                    u[c] = {}, u[c][o.requestId] = [o.xSlotName];
                    var d, p;
                    if (n && v.isArray(n) && 0 !== n.length) {
                        for (var i = 0; i < n.length; i++)
                            if (p = o.xSlotRef.sizes[0], n[i].impid === o.htSlot.getId() && parseInt(n[i].w) === parseInt(p[0]) && parseInt(n[i].h) === parseInt(p[1])) {
                                d = n[i], n.splice(i, 1);
                                break
                            } if (d) {
                            var g = d.price,
                                h = [Number(d.w), Number(d.h)],
                                m = d.adm,
                                y = d.dealid,
                                b = g <= 0;
                            if (d = null, b) T.enabledAnalytics.requestTime && S._emitStatsEvent(e, "hs_slot_pass", u), o.pass = !0;
                            else {
                                T.enabledAnalytics.requestTime && S._emitStatsEvent(e, "hs_slot_bid", u), o.size = h, o.targetingType = "slot", o.targeting = {};
                                var _ = "";
                                _ = S._bidTransformers.targeting.apply(g);
                                var I = l.arrayToString(o.size);
                                y ? (o.targeting[S._configs.targetingKeys.pmid] = [I + "_" + y], o.targeting[S._configs.targetingKeys.pm] = [I + "_" + _]) : o.targeting[S._configs.targetingKeys.om] = [I + "_" + _], o.targeting[S._configs.targetingKeys.id] = [o.requestId], o.price = Number(S._bidTransformers.price.apply(g));
                                s.registerAd({
                                    sessionId: e,
                                    partnerId: T.partnerId,
                                    adm: m,
                                    requestId: o.requestId,
                                    size: o.size,
                                    price: _,
                                    dealId: y || void 0,
                                    timeOfExpiry: T.features.demandExpiry.enabled ? T.features.demandExpiry.value + f.now() : 0,
                                    auxFn: w,
                                    auxArgs: [""]
                                })
                            }
                        } else T.enabledAnalytics.requestTime && S._emitStatsEvent(e, "hs_slot_pass", u), o.pass = !0
                    } else T.enabledAnalytics.requestTime && S._emitStatsEvent(e, "hs_slot_pass", u), o.pass = !0
                }
            }
            var S, T, x;
            ! function() {
                a = p.services.EventsService, s = p.services.RenderService, i = p.services.ComplianceService, T = {
                    partnerId: "PubmaticHtb",
                    namespace: "PubmaticHtb",
                    statsId: "PUBM",
                    version: "2.1.1",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_pubm_id",
                        om: "ix_pubm_om",
                        pm: "ix_pubm_om",
                        pmid: "ix_pubm_dealid"
                    },
                    bidUnitInCents: 100,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: d.CallbackTypes.NONE,
                    architecture: d.Architectures.SRA,
                    requestType: d.RequestTypes.AJAX
                }, x = {
                    pubId: e.publisherId,
                    lat: e.lat || void 0,
                    lon: e.lon || void 0,
                    yob: e.yob || void 0,
                    gender: e.gender || void 0,
                    kadfloor: e.kadfloor || void 0,
                    profile: e.profile || void 0,
                    version: e.version || void 0
                }, S = d(T, e, null, {
                    parseResponse: I,
                    generateRequestObj: b,
                    adResponseCallback: _
                })
            }();
            var P = {};
            return u.derive(S, P)
        }
        var i, a, s, o = e(7),
            u = e(9),
            c = e(11),
            d = e(38),
            l = e(21),
            p = e(48),
            f = e(22),
            g = e(19),
            v = e(23);
        t.exports = n
    }, {}],
    41: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = p.arrayToString(e[r]);
                    P.hasOwnProperty(n) && t.push(P[n])
                }
                return t
            }

            function r(e) {
                for (var t in P)
                    if (P.hasOwnProperty(t) && P[t] === Number(e)) return p.stringToArray(t)[0];
                return []
            }

            function n(e) {
                try {
                    return eval.call(null, e)
                } catch (e) {}
                return null
            }

            function h(e, t) {
                try {
                    return eval.call(null, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function m(e) {
                var t = {};
                if (e.vars) {
                    var r = e.vars;
                    for (var i in r)
                        if (r.hasOwnProperty(i)) {
                            t[i] = t[i] || [];
                            for (var a = 0; a < r[i].length; a++) {
                                var s = n(r[i][a]);
                                null !== s && void 0 !== s && t[i].push(s)
                            }
                        }
                }
                if (e.strs) {
                    var o = e.strs;
                    for (var u in o)
                        if (o.hasOwnProperty(u)) {
                            t[u] = t[u] || [];
                            for (var c = 0; c < o[u].length; c++) t[u].push(o[u][c])
                        }
                }
                if (e.fns) {
                    var d = e.fns;
                    for (var l in d)
                        if (d.hasOwnProperty(l)) {
                            t[l] = t[l] || [];
                            var p = h(d[l].fn, d[l].args);
                            if (null !== p && void 0 !== p)
                                if (v.isArray(p))
                                    for (var f = 0; f < p.length; f++) t[l].push(p[f]);
                                else t[l].push(p)
                        }
                }
                return t
            }

            function y(e) {
                var t = {};
                return e.inventory && (t.inventory = m(e.inventory)), e.visitor && (t.visitor = m(e.visitor)), e.position && (t.position = e.position), e.keywords && (v.isString(e.keywords) ? t.keywords = [e.keywords] : t.keywords = e.keywords), t
            }

            function b() {
                var t = e.digitrustId || function() {
                    if (o.isTopFrame()) var e = window;
                    else try {
                        var e = window.top
                    } catch (t) {
                        console.log("impossible to reach top window, get topmost accessible window context  ");
                        var e = o.topWindow
                    }
                    try {
                        var t = e.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        })
                    } catch (e) {
                        console.log("digiTrustUser not defined")
                    }
                    return t && t.success && t.identity || null
                }();
                return !t || t.privacy && t.privacy.optout ? {} : {
                    id: t.id,
                    keyv: t.keyv,
                    pref: 0
                }
            }

            function _(r) {
                var n = g.generateUniqueId(),
                    i = r[0],
                    a = {},
                    u = {};
                i.firstPartyData && i.firstPartyData.rubicon ? a = i.firstPartyData.rubicon : i.xSlotRef.slotFpd && (a = y(i.xSlotRef.slotFpd)), E ? u = E : e.partnerFpd && (u = y(e.partnerFpd));
                var c = t(i.xSlotRef.sizes),
                    d = o.getPageUrl(),
                    l = s.gdpr && s.gdpr.getConsent(),
                    p = s.isPrivacyEnabled(),
                    f = {
                        account_id: e.accountId,
                        size_id: c[0],
                        p_pos: a.position ? a.position : "btf",
                        rp_floor: .01,
                        rf: d || "",
                        p_screen_res: o.getScreenWidth() + "x" + o.getScreenHeight(),
                        site_id: i.xSlotRef.siteId,
                        zone_id: i.xSlotRef.zoneId,
                        kw: "rp.fastlane",
                        tk_flint: "custom",
                        rand: Math.random(),
                        dt: b()
                    };
                l && p && "object" == typeof l && ("boolean" == typeof l.applies && (f.gdpr = Number(l.applies)), f.gdpr_consent = l.consentString);
                for (var v in u.inventory) u.inventory.hasOwnProperty(v) && (f["tg_i." + v] = u.inventory[v].toString());
                for (var h in a.inventory) a.inventory.hasOwnProperty(h) && (f.hasOwnProperty("tg_i." + h) ? f["tg_i." + h] += "," + a.inventory[h].toString() : f["tg_i." + h] = a.inventory[h].toString());
                for (var m in u.visitor) u.visitor.hasOwnProperty(m) && (f["tg_v." + m] = u.visitor[m].toString());
                for (var _ in a.visitor) a.visitor.hasOwnProperty(_) && (f.hasOwnProperty("tg_v." + _) ? f["tg_v." + _] += "," + a.visitor[_].toString() : f["tg_v." + _] = a.visitor[_].toString());
                var w = [];
                return u.keywords && (w = w.concat(u.keywords)), a.keywords && (w = w.concat(a.keywords)), w.length > 0 && (f.kw += "," + w.toString()), c.length > 1 && (f.alt_size_ids = c.slice(1).join(",")), {
                    url: x,
                    data: f,
                    callbackId: n
                }
            }

            function w(e, t, n) {
                var s = {
                        sessionId: e,
                        statsId: T.statsId
                    },
                    o = !1,
                    u = t.ads || [];
                u.length || (n[0].pass = !0);
                for (var d = 0; d < u.length; d++) {
                    var l;
                    0 === d ? (l = n[0], s.htSlotId = l.htSlot.getId(), s.requestId = l.requestId, s.xSlotNames = [l.xSlotName]) : (l = {
                        partnerId: n[0].partnerId,
                        htSlot: n[0].htSlot,
                        ref: n[0].ref,
                        xSlotRef: n[0].xSlotRef,
                        xSlotName: n[0].xSlotName,
                        requestId: n[0].requestId
                    }, n.push(l));
                    var f = u[d].cpm || 0;
                    if ("ok" !== u[d].status || !v.isNumber(f) || f <= 0) l.pass = !0;
                    else {
                        o = !0;
                        var h = u[d].deal || "",
                            m = r(u[d].size_id),
                            y = '<html><head><script type="text/javascript">inDapIF=true;<\/script></head><body style="margin : 0; padding: 0;">\x3c!-- Rubicon Project Ad Tag --\x3e<div data-rp-impression-id="' + u[d].impression_id + '"><script type="text/javascript">' + u[d].script + "<\/script></div></body></html>";
                        l.size = m, l.targetingType = "slot", l.targeting = {};
                        var b = "",
                            _ = "";
                        if (b = S._bidTransformers.targeting.apply(f), S._configs.lineItemType === c.LineItemTypes.CUSTOM) {
                            if (!u[d].targeting) continue;
                            var w = u[d].targeting;
                            _ = u[d].size_id;
                            for (var I = 0; I < w.length; I++) l.targeting[w[I].key] = w[I].values;
                            l.targeting.rpfl_elemid = [l.requestId], l.targeting.hb_pb_rubicon = b
                        } else {
                            var x = p.arrayToString(l.size);
                            h && (l.targeting[S._configs.targetingKeys.pm] = [x + "_" + h]), u[d].hasOwnProperty("cpm") && (l.targeting[S._configs.targetingKeys.om] = [x + "_" + b]), l.targeting[S._configs.targetingKeys.id] = [l.requestId]
                        }
                        l.price = Number(S._bidTransformers.price.apply(f));
                        a.registerAd({
                            sessionId: e,
                            partnerId: T.partnerId,
                            adm: y,
                            requestId: l.requestId,
                            size: _ || l.size,
                            price: b || void 0,
                            dealId: h || void 0,
                            timeOfExpiry: T.features.demandExpiry.enabled ? T.features.demandExpiry.value + g.now() : 0
                        })
                    }
                }
                if (T.enabledAnalytics.requestTime) {
                    var P = "hs_slot_pass";
                    o ? P = "hs_slot_bid" : "ok" !== t.status && (P = "hs_slot_error"), i.emit(P, s)
                }
            }

            function I(e) {
                E = e
            }
            if (!d.isXhrSupported()) return null;
            var S, T, x, P, E;
            ! function() {
                i = f.services.EventsService, a = f.services.RenderService, s = f.services.ComplianceService, T = {
                    partnerId: "RubiconHtb",
                    namespace: "RubiconHtb",
                    statsId: "RUBI",
                    version: "2.1.3",
                    targetingType: "slot",
                    enabledAnalytics: {
                        requestTime: !0
                    },
                    features: {
                        demandExpiry: {
                            enabled: !1,
                            value: 0
                        },
                        rateLimiting: {
                            enabled: !1,
                            value: 0
                        }
                    },
                    targetingKeys: {
                        id: "ix_rubi_id",
                        om: "ix_rubi_om",
                        pm: "ix_rubi_pm"
                    },
                    bidUnitInCents: 100,
                    lineItemType: c.LineItemTypes.ID_AND_SIZE,
                    callbackType: l.CallbackTypes.NONE,
                    architecture: l.Architectures.MRA,
                    requestType: l.RequestTypes.AJAX
                }, P = {
                    "468x60": 1,
                    "728x90": 2,
                    "120x600": 8,
                    "160x600": 9,
                    "300x600": 10,
                    "250x250": 14,
                    "300x250": 15,
                    "336x280": 16,
                    "300x100": 19,
                    "980x120": 31,
                    "250x360": 32,
                    "180x500": 33,
                    "980x150": 35,
                    "468x400": 37,
                    "930x180": 38,
                    "320x50": 43,
                    "300x50": 44,
                    "300x300": 48,
                    "300x1050": 54,
                    "970x90": 55,
                    "970x250": 57,
                    "1000x90": 58,
                    "320x80": 59,
                    "320x150": 60,
                    "1000x1000": 61,
                    "640x480": 65,
                    "320x480": 67,
                    "1800x1000": 68,
                    "320x320": 72,
                    "320x160": 73,
                    "980x240": 78,
                    "980x300": 79,
                    "980x400": 80,
                    "480x300": 83,
                    "970x310": 94,
                    "970x210": 96,
                    "480x320": 101,
                    "768x1024": 102,
                    "480x280": 103,
                    "320x240": 108,
                    "1000x300": 113,
                    "320x100": 117,
                    "800x250": 125,
                    "200x600": 126
                }, x = o.getProtocol() + "//fastlane.rubiconproject.com/a/api/fastlane.json", S = l(T, e, null, {
                    parseResponse: w,
                    generateRequestObj: _
                })
            }();
            var A = {
                setFirstPartyData: I
            };
            return u.derive(S, A)
        }
        var i, a, s, o = e(7),
            u = e(9),
            c = e(11),
            d = e(19),
            l = e(38),
            p = e(21),
            f = e(48),
            g = e(22),
            v = e(23);
        e(24);
        t.exports = n
    }, {}],
    42: [function(e, t, r) {
        "use strict";

        function n() {
            function e(e, t, r) {
                s.hasOwnProperty(e) || (s[e] = []);
                var n = i.generateUniqueId();
                return s[e].push({
                    id: n,
                    fn: r,
                    once: t
                }), n
            }

            function t(t, r) {
                return e(t, !1, r)
            }

            function r(t, r) {
                return e(t, !0, r)
            }

            function n(e) {
                for (var t in s)
                    if (s.hasOwnProperty(t))
                        for (var r = s[t].length - 1; r >= 0; r--)
                            if (s[t][r].id === e) return void s[t].splice(r, 1)
            }

            function a() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                if (t && s.hasOwnProperty(t))
                    for (var r = s[t].length - 1; r >= 0; r--) {
                        try {
                            s[t][r].fn.apply(null, e)
                        } catch (e) {}
                        s[t][r].once && s[t].splice(r, 1)
                    }
            }
            var s;
            return function() {
                s = {}
            }(), {
                on: t,
                once: r,
                off: n,
                emit: a
            }
        }
        var i = e(22);
        e(24);
        t.exports = n
    }, {}],
    43: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                var t = {
                    auction_cycle: "ac",
                    global_timeout: "gt",
                    bid_requests: "brq",
                    bid_responses: "brs",
                    bid_errors: "be",
                    bid_passes: "bp",
                    bid_timeouts: "bt",
                    dfp_kv_pushed: "kv",
                    top_bid: "tb",
                    prefetch: "p",
                    res_latency: "rl",
                    partner_timeout: "pt"
                };
                return t.hasOwnProperty(e) ? t[e] : e
            }

            function r() {
                if (c.isEmpty(A)) return [];
                var e = {
                    s: "identity",
                    t: N,
                    xslots: {}
                };
                for (var r in A)
                    if (A.hasOwnProperty(r)) {
                        e.xslots.hasOwnProperty(r) || (e.xslots[r] = {});
                        for (var n = 0; n < A[r].length; n++) {
                            var i = A[r][n];
                            "bid_requests" !== i.n && "res_latency" !== i.n || (i.v = String(i.v)), e.xslots[r].hasOwnProperty(i.x) || (e.xslots[r][i.x] = {});
                            var a = t(i.n);
                            e.xslots[r][i.x][a] = i.v
                        }
                        L.hasOwnProperty(r) && !1 !== L[r] || (e.xslots[r].before[t("partner_timeout")] = O, L[r] = !0)
                    } return A = {}, [e]
            }

            function n(e, t) {
                c.isEmpty(A) && (N = u.now());
                var r = t.statsId;
                A[r] = A[r] || [];
                var n = {
                    b: r,
                    x: D ? "after" : "before"
                };
                "hs_identity_request" === e ? (n.n = "bid_requests", n.v = 1, R[r] = u.now()) : "hs_identity_cached" === e ? (n.n = "bid_requests", n.v = 0) : "hs_identity_response" === e ? (n.n = "bid_responses", n.v = 1) : "hs_identity_error" === e ? (n.n = "bid_errors", n.v = 1) : "hs_identity_pass" === e ? (n.n = "bid_passes", n.v = 1) : "hs_identity_timeout" === e ? (n.n = "bid_timeouts", n.v = 1) : "hs_identity_bid_latency" === e && (n.n = "res_latency", n.v = u.now() - R[r]), A[r].push(n)
            }

            function d(e, r) {
                var n = [],
                    i = "",
                    a = "";
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var o = r[s],
                            u = {
                                s: o.s,
                                t: o.t,
                                xslots: {}
                            };
                        for (a in o.events)
                            if (o.events.hasOwnProperty(a)) {
                                for (var c in o.events[a])
                                    if (o.events[a].hasOwnProperty(c))
                                        for (i in o.events[a][c])
                                            if (o.events[a][c].hasOwnProperty(i)) {
                                                var d = o.events[a][c][i],
                                                    l = d.v,
                                                    p = t(c);
                                                "res_latency" === d.n && (d.v = String(d.v)), u.xslots.hasOwnProperty(a) || (u.xslots[a] = {}), u.xslots[a].hasOwnProperty(i) || (u.xslots[a][i] = {}), u.xslots[a][i][p] = l
                                            } for (i in u.xslots[a]) u.xslots[a].hasOwnProperty(i) && P.hasOwnProperty(a) && (u.xslots[a][i][t("partner_timeout")] = P[a])
                            } n.push(u)
                    } return n
            }

            function l(e) {
                if (x.hasOwnProperty(e) && x[e] !== q.IPR && x[e] !== q.SENT) {
                    var n = {
                        p: "display",
                        d: o.DeviceTypeChecker.getDeviceType(),
                        c: v,
                        s: e,
                        w: m,
                        t: u.now(),
                        pg: {
                            t: y,
                            e: I[e]
                        }
                    };
                    n[t("global_timeout")] = String(o.globalTimeout), h.auctionCycle && (n.ac = w[e]), n.sl = c.mergeArrays(d(e, S[e]), r()), n.akamaiDebugInfo = T[e], delete T[e], delete I[e], delete S[e];
                    var i = s.buildUrl(f, null, {
                        s: g,
                        u: a.getPageUrl(),
                        v: 3
                    });
                    s.ajax({
                        method: "POST",
                        url: i,
                        data: n
                    }), x[e] = q.SENT
                }
            }

            function p(e, t) {
                var r = t.sessionId,
                    n = t.htSlotId,
                    a = t.statsId,
                    s = t.xSlotNames,
                    o = t.requestId || "";
                if (x.hasOwnProperty(r) && x[r] !== q.DONE && x[r] !== q.SENT) {
                    S[r].hasOwnProperty(n) || (S[r][n] = {
                        s: n,
                        t: u.now(),
                        events: {}
                    }), S[r][n].events.hasOwnProperty(a) || (S[r][n].events[a] = {}), S[r][n].events[a].hasOwnProperty(e) || (S[r][n].events[a][e] = {});
                    for (var c = S[r][n].events[a][e], d = 0; d < s.length; d++) {
                        var l = s[d],
                            p = r + a + n + l + o;
                        if (!E[p]) {
                            "bid_timeouts" === e && (E[p] = !0), c.hasOwnProperty(l) || (c[l] = {
                                n: e,
                                v: 0,
                                b: a,
                                x: l
                            });
                            var f = c[l];
                            if ("res_latency" === e) {
                                var g = u.now() - b[p];
                                delete b[p], (!f.v || f.v > g) && (f.v = g)
                            } else "prefetch" === e ? f.v = 1 : f.v++;
                            "bid_requests" === e ? b[p] = u.now() : "bid_responses" === e && i.emit("hs_slot_valid_bid_latency", t)
                        }
                    }
                }
            }
            if (!s.isXhrSupported()) return null;
            var f, g, v, h, m, y, b, _, w, I, S, T, x, P, E, A, O, R, N, D, L, q = {
                    IPR: 0,
                    DONE: 1,
                    SENT: 2
                },
                k = {
                    hs_session_start: function(e) {
                        var t = e.sessionId;
                        x.hasOwnProperty(t) || (x[t] = q.IPR, _[t] = u.now(), I[t] = [], S[t] = {})
                    },
                    hs_session_end: function(e) {
                        var t = e.sessionId;
                        x.hasOwnProperty(t) && x[t] !== q.DONE && (w[t] = String(u.now() - _[t]), delete _[t], setTimeout(function() {
                            x[t] = q.DONE, l(t)
                        }, 0))
                    },
                    hs_akamai_debug: function(e) {
                        var t = e.sessionId;
                        T[t] = {}, T[t].hostname = e.hostname, e.hasOwnProperty("requestHost") && (T[t].requestHost = e.requestHost), e.hasOwnProperty("akamaiPresent") && (T[t].akamaiPresent = e.akamaiPresent)
                    },
                    hs_slot_request: function(e) {
                        p("bid_requests", e)
                    },
                    hs_slot_bid: function(e) {
                        p("bid_responses", e)
                    },
                    hs_slot_pass: function(e) {
                        p("bid_passes", e)
                    },
                    hs_slot_timeout: function(e) {
                        p("bid_timeouts", e)
                    },
                    hs_slot_error: function(e) {
                        p("bid_errors", e)
                    },
                    hs_slot_highest_bid: function(e) {
                        p("top_bid", e)
                    },
                    hs_slot_valid_bid_latency: function(e) {
                        p("res_latency", e)
                    },
                    hs_slot_kv_pushed: function(e) {
                        p("dfp_kv_pushed", e)
                    },
                    hs_slot_prefetch: function(e) {
                        p("prefetch", e)
                    },
                    hs_define_partner_timeout: function(e) {
                        P[e.statsId] = String(e.timeout)
                    },
                    hs_identity_request: function(e) {
                        n("hs_identity_request", e)
                    },
                    hs_identity_cached: function(e) {
                        n("hs_identity_cached", e)
                    },
                    hs_identity_response: function(e) {
                        n("hs_identity_response", e), i.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_error: function(e) {
                        n("hs_identity_error", e), i.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_pass: function(e) {
                        n("hs_identity_pass", e), i.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_bid_latency: function(e) {
                        c.isNumber(R[e.statsId]) && n("hs_identity_bid_latency", e)
                    },
                    hs_identity_timeout: function(e) {
                        n("hs_identity_timeout", e), D = !0
                    },
                    hs_define_identity_timeout: function(e) {
                        O = String(e.timeout)
                    }
                };
            return function() {
                i = o.services.EventsService, y = u.now(), f = a.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/headerstats", g = e.siteId, v = e.configId, h = e.options, m = g + u.now(), m += u.generateUniqueId(32 - m.length), o.instanceId = m, x = {}, I = {}, S = {}, T = {}, b = {}, _ = {}, w = {}, P = {}, E = {}, A = {}, R = {}, D = !1, L = {};
                for (var t in k) k.hasOwnProperty(t) && o.services.EventsService.on(t, k[t])
            }(), {}
        }
        var i, a = e(7),
            s = e(19),
            o = e(48),
            u = e(22),
            c = e(23);
        e(24);
        t.exports = n
    }, {}],
    44: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t, r, n) {
                if (e.hasOwnProperty(t) && e[t].hasOwnProperty(r)) {
                    for (var i = null, a = 0; a < n.length; a++) {
                        var s = n[a];
                        e[t][r].hasOwnProperty(s) && (i = e[t][r][s])
                    }
                    return i
                }
            }

            function r(e) {
                return !!I.hasOwnProperty(e) && (S[e] = !0, delete I[e], !0)
            }

            function n() {
                var e = u.now();
                for (var t in I) I.hasOwnProperty(t) && I[t].timeOfExpiry && e > I[t].timeOfExpiry && r(t)
            }

            function l(e) {
                var t;
                do {
                    t = u.generateUniqueId(a.PUBKIT_AD_ID_LENGTH, "ALPHANUM")
                } while (I.hasOwnProperty[t]);
                return I[t] = e, t
            }

            function p(e) {
                if (I.hasOwnProperty(e) && I[e].timeOfExpiry && u.now() > I[e].timeOfExpiry && r(e), S[e]) return i.emit("internal_info", "Attempted to render expired ad " + e), null;
                if (!I.hasOwnProperty(e)) throw d("INVALID_VALUE", "`pubKitAdId` does not match any registered ad");
                var t = I[e];
                return r(e), t
            }

            function f(e) {
                if (e.auxFn) try {
                    e.auxFn.apply(null, e.auxArgs)
                } catch (e) {
                    i.emit("internal_error", "Error occurred running ad aux function.", e.stack)
                }
            }

            function g(e, t) {
                var r = p(t);
                if (!r) return !1;
                f(r);
                try {
                    u.documentWrite(e, r.adm)
                } catch (e) {
                    return i.emit("internal_error", 'Error occurred while rendering ad "' + t + '".', e.stack), !1
                }
                return !0
            }

            function v(e) {
                var t = l(e);
                if (e.price || e.dealId) {
                    var r = e.partnerId,
                        n = e.requestId;
                    if (P.hasOwnProperty(r)) {
                        var i;
                        i = c.isString(e.size) ? e.size : s.arrayToString(e.size), s.isSpecialSize(i) && (N[n] = i), E[r] || (E[r] = {}), E[r][i] || (E[r][i] = {}), E[r][i][n] || (E[r][i][n] = []), E[r][i][n].push(t);
                        var a = e.price;
                        a && (A[r] || (A[r] = {}), A[r][a] || (A[r][a] = {}), A[r][a][n] || (A[r][a][n] = []), A[r][a][n].push(t));
                        var o = e.dealId;
                        return o && (O[r] || (O[r] = {}), O[r][o] || (O[r][o] = {}), O[r][o][n] || (O[r][o][n] = []), O[r][o][n].push(t)), t
                    }
                }
            }

            function h(e, t, r, n, i, a) {
                if (P.hasOwnProperty(t)) {
                    var s = {
                        sessionId: e,
                        partnerId: t,
                        adm: r,
                        price: i
                    };
                    n && n > 0 && (s.timeOfExpiry = n);
                    var o = l(s);
                    return R[a] = R[a] || {}, R[a][i] = R[a][i] || [], R[a][i].push(o), o
                }
            }

            function m(e, t, r, n, a) {
                try {
                    if (!E.hasOwnProperty(e)) return void i.emit("internal_error", "Partner " + e + " missing from ad ID map.");
                    if (!c.isObject(r)) return void i.emit("internal_error", "invalid targeting map");
                    if (!r.hasOwnProperty(P[e].idKey)) return void i.emit("internal_error", "targeting map missing key " + P[e].idKey);
                    var s = r[P[e].idKey];
                    if (!c.isArray(s)) return void i.emit("internal_error", "invalid targeting map");
                    if (!c.isNumeric(n)) return void i.emit("internal_error", "invalid width");
                    if (!c.isNumeric(a)) return void i.emit("internal_error", "invalid height");
                    var o = n + "x" + a;
                    if (x && x.hasOwnProperty(o)) {
                        var u = x[o];
                        o = u[0] + "x" + u[1]
                    }
                    for (var d = 0; d < s.length; d++) {
                        var l = s[d],
                            p = N[l] || o;
                        if (!E[e].hasOwnProperty(p)) return void i.emit("internal_error", "Size key " + p + " missing from ad ID map for partner " + e);
                        if (E[e][p].hasOwnProperty(l)) {
                            var f = E[e][p][l];
                            if (f.length) {
                                g(t, c.randomSplice(f));
                                break
                            }
                        }
                    }
                } catch (t) {
                    i.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function y(e, r) {
                if (void 0 !== e.partner && void 0 !== e.id && void 0 !== e.targeting && (void 0 !== e.size || void 0 !== e.price)) {
                    var n = e.partner,
                        a = e.price,
                        o = e.id,
                        u = e.targeting,
                        d = e.size;
                    if (P[n]) {
                        if (!u.hasOwnProperty(P[n].idKey)) return void i.emit("internal_error", "targeting map missing key " + P[n].idKey);
                        var l = u[P[n].idKey],
                            g = null;
                        if (void 0 !== a)
                            for (var v = [O, A], h = 0; h < v.length && !(g = t(v[h], n, a, l)); h++);
                        else {
                            if (!s.isSize(d)) return;
                            var m = s.arrayToString(d);
                            if (x && x.hasOwnProperty(m)) {
                                var y = x[m];
                                m = s.arrayToString(y)
                            }
                            g = t(E, n, m, l)
                        }
                        if (g) {
                            var b = c.randomSplice(g),
                                _ = p(b);
                            if (!_) return void i.emit("internal_error", "No ad found for ad ID " + b);
                            f(_);
                            for (var w, I = _.size, S = _.adm, T = document.getElementsByTagName("iframe"), R = 0; R < T.length; R++)
                                if (T[R].contentWindow === r) {
                                    w = T[R];
                                    break
                                } w && (w.width = String(I[0]), w.height = String(I[1]), "" !== w.parentElement.style.width && "" !== w.parentElement.style.height && (w.parentElement.style.width = I[0] + "px", w.parentElement.style.height = I[1] + "px")), r.postMessage("ix_ht_render_adm:" + JSON.stringify({
                                adm: S,
                                id: o,
                                size: I
                            }), "*")
                        }
                    }
                }
            }

            function b(e, t, r, n) {
                try {
                    var a = t.ownerDocument;
                    if (!E.hasOwnProperty(e)) return void i.emit("internal_error", "Partner " + e + " missing from ad ID map.");
                    if (!c.isString(n)) return void i.emit("internal_error", "invalid width");
                    if (!E[e].hasOwnProperty(n)) return void i.emit("internal_error", "Size key " + n + " missing from ad ID map for partner " + e);
                    if (E[e][n].hasOwnProperty(r)) {
                        var s = E[e][n][r];
                        if (!s.length) return void i.emit("internal_error", "Size key " + n + " contains no ads for partner " + e);
                        g(a, s.shift())
                    }
                } catch (t) {
                    i.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function _(e, t, r, n) {
                try {
                    for (var a, s = r.split(","), o = 0; o < s.length; o++)
                        if (a = s[o].split("_"), a[0] === n) {
                            if (R[n] && R[n][a[1]])
                                for (var u = R[n][a[1]], c = !1; u.length > 0 && !c;) c = g(t, u.shift());
                            return
                        }
                } catch (t) {
                    i.emit("internal_error", 'Error occurred while rendering ad for "' + e + '".', t.stack)
                }
            }

            function w(e, t, r) {
                P.hasOwnProperty(e) || (P[e] = {}), P[e].lineItemType = t, P[e].idKey = r
            }
            var I, S, T, x, P = {},
                E = {},
                A = {},
                O = {},
                R = {},
                N = {};
            return function() {
                I = {}, S = {}, x = e.sizeRetargeting || null, T = setInterval(n, a.RENDER_SERVICE_EXPIRY_SWEEP_TIMER), i = o.services.EventsService, window.addEventListener("message", function(e) {
                    try {
                        if (!c.isString(e.data) || "ix_ht_render:" !== e.data.substr(0, "ix_ht_render:".length)) return;
                        y(JSON.parse(e.data.substr("ix_ht_render:".length)), e.source, e.origin)
                    } catch (e) {
                        i.emit("internal_error", "Error occurred while rendering ad.", e.stack)
                    }
                }, !1)
            }(), {
                registerAd: v,
                render: g,
                registerPartner: w,
                renderDfpAd: m,
                registerIndexLegacyAd: h,
                renderIndexLegacyAd: _,
                renderRubiconAd: b
            }
        }
        var i, a = e(11),
            s = e(21),
            o = e(48),
            u = e(22),
            c = e(23),
            d = e(24);
        t.exports = n
    }, {}],
    45: [function(e, t, r) {
        "use strict";

        function n() {
            function e() {
                return {
                    applies: !0,
                    consentString: ""
                }
            }

            function t() {
                return !1
            }

            function r(e) {
                return e
            }

            function n() {
                return i.resolve()
            }
            return {
                gdpr: {
                    getConsent: e,
                    setApplies: function() {}
                },
                isPrivacyEnabled: t,
                delay: r,
                wait: n
            }
        }
        var i = e(14);
        t.exports = n
    }, {}],
    46: [function(e, t, r) {
        "use strict";

        function n() {
            function e(e) {
                return function() {
                    u[e].state = c.TERMINATED;
                    for (var t = 0; t < u[e].cbs.length; t++) try {
                        u[e].cbs[t]()
                    } catch (e) {}
                    delete u[e].cbs, delete u[e].timer
                }
            }

            function t(t, r, n) {
                var s = a.generateUniqueId(i.SESSION_ID_LENGTH);
                return r = !!r, n = n ? [n] : [], u[s] = {
                    state: c.NEW,
                    cbs: n,
                    timeout: t
                }, r && (u[s].state = c.RUNNABLE, u[s].timer = setTimeout(e(s), t)), s
            }

            function r(t) {
                u.hasOwnProperty(t) && u[t].state === c.NEW && (u[t].state = c.RUNNABLE, u[t].timer = setTimeout(e(t), u[t].timeout))
            }

            function n(e, t) {
                u.hasOwnProperty(e) && u[e].state !== c.TERMINATED && u[e].cbs.unshift(t)
            }

            function s(e) {
                return u.hasOwnProperty(e) ? u[e].state : null
            }

            function o(e) {
                u.hasOwnProperty(e) && u[e].state !== c.TERMINATED && (u[e].state = c.TERMINATED, clearTimeout(u[e].timer), delete u[e].cbs, delete u[e].timer)
            }
            var u, c = {
                NEW: 0,
                RUNNABLE: 1,
                TERMINATED: 2
            };
            return function() {
                u = {}
            }(), {
                TimerStates: c,
                createTimer: t,
                startTimer: r,
                addTimerCallback: n,
                getTimerState: s,
                clearTimer: o
            }
        }
        var i = e(11),
            a = e(22);
        e(24);
        t.exports = n
    }, {}],
    47: [function(e, t, r) {
        "use strict";
        var n, i, a = (e(7), e(10)),
            s = e(25),
            o = e(48),
            u = e(23);
        window[o.NAMESPACE] = window[o.NAMESPACE] || {}, window[o.NAMESPACE].cmd = window[o.NAMESPACE].cmd || [];
        var c = window[o.NAMESPACE].cmd;
        window[o.NAMESPACE] = function() {
            function e(e) {
                return o.LastLineGoogletag.display ? o.LastLineGoogletag.display(e) : window.googletag.display(e)
            }

            function t(e, t) {
                return o.LastLineGoogletag.refresh ? o.LastLineGoogletag.refresh(e, t) : window.googletag.pubads().refresh(e, t)
            }

            function r(e) {
                return o.LastLineGoogletag.destroySlots ? o.LastLineGoogletag.destroySlots(e) : window.googletag.destroySlots(e)
            }

            function c() {
                return o.LastLineGoogletag.enableSingleRequest ? o.LastLineGoogletag.enableSingleRequest() : window.googletag.pubads().enableSingleRequest()
            }

            function d() {
                return o.LastLineGoogletag.disableInitialLoad ? o.LastLineGoogletag.disableInitialLoad() : window.googletag.pubads().disableInitialLoad()
            }

            function l(t) {
                try {
                    if (!u.isString(t)) return i.emit("error", "divId must be a string"), e(t);
                    w.Layers.GptLayer.display(t).catch(function(r) {
                        return i.emit("error", r), e(t)
                    })
                } catch (r) {
                    return i.emit("error", r), e(t)
                }
            }

            function p(e, r) {
                try {
                    if (e && !u.isArray(e)) return i.emit("error", "gSlots must be an array of g-slots."), t(e, r);
                    w.Layers.GptLayer.refresh(e, r).catch(function(n) {
                        return i.emit("error", n), t(e, r)
                    })
                } catch (n) {
                    return i.emit("error", n), t(e, r)
                }
            }

            function f(e, t) {
                var n = !1;
                !t && u.isFunction(e) && (t = e, e = void 0);
                try {
                    if (e && !u.isArray(e) ? (i.emit("error", "gSlots must be an array of g-slots."), n = r(e)) : n = w.Layers.GptLayer.destroySlots(e), u.isFunction(t)) return t(n), n
                } catch (a) {
                    if (i.emit("error", a), n = n || r(e), u.isFunction(t)) try {
                        return t(n), n
                    } catch (e) {
                        i.emit("error", e)
                    }
                }
                return n
            }

            function g() {
                try {
                    return w.Layers.GptLayer.enableSingleRequest()
                } catch (e) {
                    return i.emit("error", e), c()
                }
            }

            function v() {
                try {
                    return w.Layers.GptLayer.disableInitialLoad()
                } catch (e) {
                    return i.emit("error", e), d()
                }
            }

            function h() {
                return S
            }

            function m(e) {
                if (!u.isObject(e)) return void i.emit("error", "invalid first-party data: `data` must be an object");
                if (e.hasOwnProperty("rubicon")) {
                    if (!u.isObject(e.rubicon)) return void i.emit("error", "invalid first-party data.rubicon");
                    for (var t in e.rubicon)
                        if (e.rubicon.hasOwnProperty(t) && -1 === ["keywords", "inventory", "visitor"].indexOf(t)) return void i.emit("error", "invalid first-party data: unrecognized property " + t + " of `data.rubicon`");
                    if (e.rubicon.hasOwnProperty("keywords") && !u.isArray(e.rubicon.keywords, "string")) return void i.emit("error", "invalid first-party data: `data.rubicon.keywords` must be an array of strings");
                    if (e.rubicon.hasOwnProperty("inventory")) {
                        if (!u.isObject(e.rubicon.inventory)) return void i.emit("error", "invalid first-party data: `data.rubicon.inventory` must be an object");
                        for (var r in e.rubicon.inventory)
                            if (e.rubicon.inventory.hasOwnProperty(r) && !u.isArray(e.rubicon.inventory[r], "string")) return void i.emit("error", "invalid first-party data: property " + r + " of `data.rubicon.inventory` must be an array of strings")
                    }
                    if (e.rubicon.hasOwnProperty("visitor")) {
                        if (!u.isObject(e.rubicon.visitor)) return void i.emit("error", "invalid first-party data: `data.rubicon.visitor` must be an object");
                        for (var n in e.rubicon.visitor)
                            if (e.rubicon.visitor.hasOwnProperty(n) && !u.isArray(e.rubicon.visitor[n], "string")) return void i.emit("error", "invalid first-party data: property " + n + " of `data.rubicon.visitor` must be an array of strings")
                    }
                }
                try {
                    w.Layers.PartnersLayer.setFirstPartyData(e)
                } catch (e) {
                    i.emit("error", e)
                }
            }

            function y(e, t, r) {
                var n = "";
                try {
                    if (!u.isBoolean(t)) return i.emit("error", "`once` must be a boolean"), n;
                    if (!u.isFunction(r)) return i.emit("error", "`callback` must be a function"), n;
                    if (!u.isString(e)) return i.emit("error", "`eventName` must be a string"), n;
                    if (!T.hasOwnProperty(e)) return i.emit("error", "Unrecognized event " + e), n;
                    var a = function() {
                        var t = Array.prototype.slice.call(arguments);
                        r(e, JSON.stringify(t))
                    };
                    n = t ? i.once(e, a) : i.on(e, a)
                } catch (e) {
                    i.emit("error", e)
                }
                return n
            }

            function b(e) {
                try {
                    if (!u.isString(e)) return void i.emit("error", "`subscriptionId` must be a string");
                    i.off(e)
                } catch (e) {
                    i.emit("error", e)
                }
            }
            var _, w, I, S, T = {
                error: 1,
                warning: 2,
                global_timeout_reached: 3,
                partner_instantiated: 4,
                partner_request_sent: 5,
                partner_request_complete: 6
            };
            if (function() {
                    o.LastLineGoogletag = {};
                    try {
                        _ = {
                            DeviceTypeChecker: {
                                method: "USER_AGENT",
                                configs: {}
                            },
                            htSlots: {
                                "D-ATF-300x250": {
                                    id: "6d8a5497-de9b-4242-7f18-7ee2047bd579",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    adUnitPath: ".*300x250.*"
                                },
                                "D-ATF-728x90": {
                                    id: "36304f6b-4c46-df4b-40c8-08363a610e3b",
                                    deviceType: "desktop",
                                    sizeMapping: {
                                        "0x0": [
                                            [728, 90]
                                        ]
                                    },
                                    adUnitPath: ".*728x90.*"
                                },
                                "M-ATF-300x250": {
                                    id: "d7ce0757-2b51-65d4-b081-389cee819f88",
                                    deviceType: "mobile",
                                    sizeMapping: {
                                        "0x0": [
                                            [300, 250]
                                        ]
                                    },
                                    adUnitPath: ".*300x250.*"
                                }
                            },
                            Services: {
                                TimerService: {},
                                RenderService: {
                                    sizeRetargeting: {}
                                },
                                HeaderStatsService: {
                                    siteId: "196994",
                                    configId: "111445174659669",
                                    options: {
                                        auctionCycle: !0
                                    }
                                },
                                EventsService: {}
                            },
                            Layers: [{
                                layerId: "GptLayer",
                                configs: {
                                    globalTimeout: 1200,
                                    enableSingleRequest: !0,
                                    disableInitialLoad: !0,
                                    override: {
                                        display: !0,
                                        refresh: !0,
                                        destroySlots: !0,
                                        enableSingleRequest: !1,
                                        disableInitialLoad: !1
                                    },
                                    slotMapping: {
                                        selectors: [
                                            ["size", "adUnitPath"]
                                        ],
                                        filters: ["deviceType"]
                                    }
                                }
                            }, {
                                layerId: "MediationLayer",
                                configs: {
                                    mediationLevel: "NONE"
                                }
                            }, {
                                layerId: "IdentityLayer",
                                configs: {
                                    timeout: 50,
                                    partners: {
                                        AdserverOrgIp: {
                                            enabled: !0,
                                            configs: {
                                                publisherId: 185008
                                            }
                                        }
                                    }
                                }
                            }, {
                                layerId: "PartnersLayer",
                                configs: {
                                    partners: {
                                        IndexExchangeHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        siteId: "197685",
                                                        size: [300, 250]
                                                    },
                                                    2: {
                                                        siteId: "197685",
                                                        size: [300, 250]
                                                    },
                                                    3: {
                                                        siteId: "196994",
                                                        size: [728, 90]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-300x250": ["1"],
                                                    "M-ATF-300x250": ["2"],
                                                    "D-ATF-728x90": ["3"]
                                                },
                                                timeout: 0,
                                                siteId: "196994",
                                                targetingKeyOverride: {
                                                    om: "IOM",
                                                    pm: "IOM"
                                                },
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }],
                                                    bidUnitInCents: 1
                                                }
                                            }
                                        },
                                        PubMaticHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        adUnitName: "103952_Diep_D_ATF_300x250",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        adUnitName: "103952_Diep_D_ATF_728x90",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        adUnitName: "103952_Diep_M_ATF_300x250",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-300x250": ["1"],
                                                    "D-ATF-728x90": ["2"],
                                                    "M-ATF-300x250": ["3"]
                                                },
                                                timeout: 0,
                                                publisherId: "103952",
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }],
                                                    bidUnitInCents: 100
                                                }
                                            }
                                        },
                                        CriteoHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        zoneId: "764054"
                                                    },
                                                    2: {
                                                        zoneId: "764053"
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-300x250": ["1"],
                                                    "D-ATF-728x90": ["2"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }],
                                                    bidUnitInCents: 100
                                                }
                                            }
                                        },
                                        RubiconHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        siteId: "96004",
                                                        zoneId: "651318",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        siteId: "96004",
                                                        zoneId: "651318",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        siteId: "96004",
                                                        zoneId: "651340",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-300x250": ["1"],
                                                    "D-ATF-728x90": ["2"],
                                                    "M-ATF-300x250": ["3"]
                                                },
                                                accountId: "13694",
                                                timeout: 0,
                                                lineItemType: "CUSTOM",
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }],
                                                    bidUnitInCents: 100
                                                }
                                            }
                                        },
                                        OpenXHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        adUnitId: "538993716",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        adUnitId: "538993721",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        adUnitId: "538993724",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-300x250": ["1"],
                                                    "D-ATF-728x90": ["2"],
                                                    "M-ATF-300x250": ["3"]
                                                },
                                                host: "miniclip-u-d.openx.net",
                                                timeout: 0,
                                                bidTransformer: {
                                                    outputCentsDivisor: 1,
                                                    outputPrecision: 0,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }],
                                                    bidUnitInCents: .1
                                                }
                                            }
                                        },
                                        AppNexusHtb: {
                                            enabled: !0,
                                            configs: {
                                                xSlots: {
                                                    1: {
                                                        placementId: "13669399",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    },
                                                    2: {
                                                        placementId: "13669420",
                                                        sizes: [
                                                            [728, 90]
                                                        ]
                                                    },
                                                    3: {
                                                        placementId: "13669428",
                                                        sizes: [
                                                            [300, 250]
                                                        ]
                                                    }
                                                },
                                                mapping: {
                                                    "D-ATF-300x250": ["1"],
                                                    "D-ATF-728x90": ["2"],
                                                    "M-ATF-300x250": ["3"]
                                                },
                                                timeout: 0,
                                                bidTransformer: {
                                                    outputCentsDivisor: 100,
                                                    outputPrecision: 2,
                                                    roundingType: "FLOOR",
                                                    floor: 1,
                                                    buckets: [{
                                                        max: 5,
                                                        step: 4
                                                    }, {
                                                        max: 2e3,
                                                        step: 5
                                                    }, {
                                                        max: 5e3,
                                                        step: 100
                                                    }],
                                                    bidUnitInCents: .01
                                                }
                                            }
                                        }
                                    },
                                    prefetchOnLoad: {
                                        enabled: !1,
                                        configs: {
                                            dynamic: {
                                                slotMapping: {
                                                    selectors: [
                                                        ["size", "adUnitPath"]
                                                    ],
                                                    filters: ["deviceType"],
                                                    style: "ALL"
                                                }
                                            }
                                        }
                                    }
                                }
                            }]
                        }, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], w = s(_).getDirectInterface(), n = o.services.ComplianceService, i = o.services.EventsService;
                        var h = _.Layers[0].configs.override;
                        if (h) {
                            var m = function() {
                                h.display && (o.LastLineGoogletag.display = window.googletag.display, window.googletag.display = n.delay(l)), h.refresh && (o.LastLineGoogletag.refresh = window.googletag.pubads().refresh.bind(window.googletag.pubads()), window.googletag.pubads().refresh = n.delay(p)), h.destroySlots && (o.LastLineGoogletag.destroySlots = window.googletag.destroySlots, window.googletag.destroySlots = n.delay(f)), h.enableSingleRequest && (o.LastLineGoogletag.enableSingleRequest = window.googletag.pubads().enableSingleRequest.bind(window.googletag.pubads()), window.googletag.pubads().enableSingleRequest = g), h.disableInitialLoad && (o.LastLineGoogletag.disableInitialLoad = window.googletag.pubads().disableInitialLoad.bind(window.googletag.pubads()), window.googletag.pubads().disableInitialLoad = v)
                            };
                            o.initQueue.unshift(m);
                            var y = function() {
                                o.initQueue = a(o.initQueue)
                            };
                            u.isArray(window.googletag.cmd) ? window.googletag.cmd.unshift(y) : window.googletag.cmd.push(y)
                        }
                        S = {
                            refresh: n.delay(p),
                            enableSingleRequest: g,
                            disableInitialLoad: v
                        };
                        try {
                            w.Layers.IdentityLayer.retrieve()
                        } catch (e) {}
                        try {
                            n.wait().then(function() {
                                return w.Layers.IdentityLayer.getResult()
                            }).then(function(e) {
                                w.Layers.PartnersLayer.prefetchOnLoad(e)
                            }).catch(function(e) {
                                w.Layers.PartnersLayer.prefetchOnLoad()
                            })
                        } catch (e) {}
                    } catch (n) {
                        I = {
                            display: e,
                            destroySlots: r,
                            pubads: function() {
                                return {
                                    refresh: t,
                                    enableSingleRequest: c,
                                    disableInitialLoad: d
                                }
                            },
                            setFirstPartyData: function() {},
                            subscribeEvent: function() {
                                return ""
                            },
                            unsubscribeEvent: function() {}
                        }
                    }
                }(), I) return I;
            var x = {};
            if (window[o.NAMESPACE])
                for (var P in window[o.NAMESPACE]) window[o.NAMESPACE].hasOwnProperty(P) && (x[P] = window[o.NAMESPACE][P]);
            x.display = n.delay(l), x.refresh = n.delay(p), x.destroySlots = n.delay(f), x.enableSingleRequest = g, x.disableInitialLoad = v, x.pubads = h, x.setFirstPartyData = m, x.subscribeEvent = y, x.unsubscribeEvent = b, x.apiReady = !0;
            try {
                x.IndexExchangeHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "IndexExchangeHtb")
                }, x.IxModule = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "IndexExchangeHtb")
                }, window.headertag_render = o.services.RenderService.renderIndexLegacyAd.bind(null, "IndexExchangeHtb"), w.Layers.PartnersLayer.Partners.IndexExchangeHtb && (x.IndexExchangeHtb = x.IndexExchangeHtb || {}, x.IndexExchangeHtb.adResponseCallback = w.Layers.PartnersLayer.Partners.IndexExchangeHtb.adResponseCallback)
            } catch (e) {}
            try {
                x.PubmaticHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "PubmaticHtb")
                }, x.PubmaticModule = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "PubmaticHtb")
                }
            } catch (e) {}
            try {
                x.CriteoHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "CriteoHtb")
                }, x.CriteoModule = {
                    render: x.CriteoHtb.render
                }
            } catch (e) {}
            try {
                x.RubiconHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "RubiconHtb")
                }, window.top.rubicontag = window.top.rubicontag || {}, window.top.rubicontag.renderCreative = o.services.RenderService.renderRubiconAd.bind(null, "RubiconHtb")
            } catch (e) {}
            try {
                x.OpenXHtb = {
                    adResponseCallbacks: {},
                    version: "2.1.2"
                }, x.OpenXHtb.render = o.services.RenderService.renderDfpAd.bind(null, "OpenXHtb"), x.OpenXModule = {
                    render: x.OpenXHtb.render
                }, w.Layers.PartnersLayer.Partners.OpenXHtb && (x.OpenXHtb = x.OpenXHtb || {}, x.OpenXHtb.adResponseCallbacks = w.Layers.PartnersLayer.Partners.OpenXHtb.adResponseCallbacks, x.OpenXHtb.version = w.Layers.PartnersLayer.Partners.OpenXHtb.version)
            } catch (e) {}
            try {
                x.AppNexusHtb = {
                    render: o.services.RenderService.renderDfpAd.bind(null, "AppNexusHtb")
                }, window.pbjs = window.pbjs || {}, window.pbjs.renderApnxAd = o.services.RenderService.renderDfpAd.bind(null, "AppNexusHtb"), w.Layers.PartnersLayer.Partners.AppNexusHtb && (x.AppNexusHtb = x.AppNexusHtb || {}, x.AppNexusHtb.adResponseCallback = w.Layers.PartnersLayer.Partners.AppNexusHtb.adResponseCallback)
            } catch (e) {}
            return x
        }(), window[o.NAMESPACE].cmd = a(c)
    }, {}],
    48: [function(e, t, r) {
        "use strict";
        var n = {
            NAMESPACE: "headertag",
            PRODUCT: "DfpMode",
            services: {},
            htSlots: [],
            htSlotsMap: {},
            DeviceTypeChecker: {},
            initQueue: [],
            globalTimeout: null,
            instanceId: null,
            version: "2.9.6"
        };
        t.exports = n
    }, {}]
}, {}, [47]);
