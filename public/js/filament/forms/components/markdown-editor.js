var ss = Object.defineProperty;
var Sd = Object.getOwnPropertyDescriptor;
var Td = Object.getOwnPropertyNames;
var Ld = Object.prototype.hasOwnProperty;
var Cd = (o, h) => () => (o && (h = o((o = 0))), h);
var Ke = (o, h) => () => (h || o((h = { exports: {} }).exports, h), h.exports);
var Ed = (o, h, v, C) => {
  if ((h && typeof h == 'object') || typeof h == 'function')
    for (let b of Td(h))
      !Ld.call(o, b) &&
        b !== v &&
        ss(o, b, {
          get: () => h[b],
          enumerable: !(C = Sd(h, b)) || C.enumerable,
        });
  return o;
};
var zd = (o) => Ed(ss({}, '__esModule', { value: !0 }), o);
var We = Ke((Yo, Qo) => {
  (function (o, h) {
    typeof Yo == 'object' && typeof Qo < 'u'
      ? (Qo.exports = h())
      : typeof define == 'function' && define.amd
        ? define(h)
        : ((o = o || self), (o.CodeMirror = h()));
  })(Yo, function () {
    'use strict';
    var o = navigator.userAgent,
      h = navigator.platform,
      v = /gecko\/\d/i.test(o),
      C = /MSIE \d/.test(o),
      b = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(o),
      S = /Edge\/(\d+)/.exec(o),
      s = C || b || S,
      p = s && (C ? document.documentMode || 6 : +(S || b)[1]),
      g = !S && /WebKit\//.test(o),
      L = g && /Qt\/\d+\.\d+/.test(o),
      x = !S && /Chrome\/(\d+)/.exec(o),
      c = x && +x[1],
      d = /Opera\//.test(o),
      w = /Apple Computer/.test(navigator.vendor),
      E = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(o),
      z = /PhantomJS/.test(o),
      y = w && (/Mobile\/\w+/.test(o) || navigator.maxTouchPoints > 2),
      R = /Android/.test(o),
      M = y || R || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(o),
      H = y || /Mac/.test(h),
      Z = /\bCrOS\b/.test(o),
      ee = /win/i.test(h),
      re = d && o.match(/Version\/(\d*\.\d*)/);
    re && (re = Number(re[1])), re && re >= 15 && ((d = !1), (g = !0));
    var N = H && (L || (d && (re == null || re < 12.11))),
      F = v || (s && p >= 9);
    function D(e) {
      return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
    }
    var Q = function (e, t) {
      var n = e.className,
        r = D(t).exec(n);
      if (r) {
        var i = n.slice(r.index + r[0].length);
        e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
      }
    };
    function j(e) {
      for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
      return e;
    }
    function V(e, t) {
      return j(e).appendChild(t);
    }
    function _(e, t, n, r) {
      var i = document.createElement(e);
      if (
        (n && (i.className = n),
        r && (i.style.cssText = r),
        typeof t == 'string')
      )
        i.appendChild(document.createTextNode(t));
      else if (t) for (var a = 0; a < t.length; ++a) i.appendChild(t[a]);
      return i;
    }
    function K(e, t, n, r) {
      var i = _(e, t, n, r);
      return i.setAttribute('role', 'presentation'), i;
    }
    var X;
    document.createRange
      ? (X = function (e, t, n, r) {
          var i = document.createRange();
          return i.setEnd(r || e, n), i.setStart(e, t), i;
        })
      : (X = function (e, t, n) {
          var r = document.body.createTextRange();
          try {
            r.moveToElementText(e.parentNode);
          } catch {
            return r;
          }
          return (
            r.collapse(!0),
            r.moveEnd('character', n),
            r.moveStart('character', t),
            r
          );
        });
    function I(e, t) {
      if ((t.nodeType == 3 && (t = t.parentNode), e.contains))
        return e.contains(t);
      do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0;
      while ((t = t.parentNode));
    }
    function B(e) {
      var t = e.ownerDocument || e,
        n;
      try {
        n = e.activeElement;
      } catch {
        n = t.body || null;
      }
      for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
        n = n.shadowRoot.activeElement;
      return n;
    }
    function le(e, t) {
      var n = e.className;
      D(t).test(n) || (e.className += (n ? ' ' : '') + t);
    }
    function xe(e, t) {
      for (var n = e.split(' '), r = 0; r < n.length; r++)
        n[r] && !D(n[r]).test(t) && (t += ' ' + n[r]);
      return t;
    }
    var q = function (e) {
      e.select();
    };
    y
      ? (q = function (e) {
          (e.selectionStart = 0), (e.selectionEnd = e.value.length);
        })
      : s &&
        (q = function (e) {
          try {
            e.select();
          } catch {}
        });
    function T(e) {
      return e.display.wrapper.ownerDocument;
    }
    function de(e) {
      return ze(e.display.wrapper);
    }
    function ze(e) {
      return e.getRootNode ? e.getRootNode() : e.ownerDocument;
    }
    function pe(e) {
      return T(e).defaultView;
    }
    function Ee(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function () {
        return e.apply(null, t);
      };
    }
    function ge(e, t, n) {
      t || (t = {});
      for (var r in e)
        e.hasOwnProperty(r) &&
          (n !== !1 || !t.hasOwnProperty(r)) &&
          (t[r] = e[r]);
      return t;
    }
    function Oe(e, t, n, r, i) {
      t == null && ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length));
      for (var a = r || 0, l = i || 0; ; ) {
        var u = e.indexOf('	', a);
        if (u < 0 || u >= t) return l + (t - a);
        (l += u - a), (l += n - (l % n)), (a = u + 1);
      }
    }
    var qe = function () {
      (this.id = null),
        (this.f = null),
        (this.time = 0),
        (this.handler = Ee(this.onTimeout, this));
    };
    (qe.prototype.onTimeout = function (e) {
      (e.id = 0),
        e.time <= +new Date()
          ? e.f()
          : setTimeout(e.handler, e.time - +new Date());
    }),
      (qe.prototype.set = function (e, t) {
        this.f = t;
        var n = +new Date() + e;
        (!this.id || n < this.time) &&
          (clearTimeout(this.id),
          (this.id = setTimeout(this.handler, e)),
          (this.time = n));
      });
    function Se(e, t) {
      for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
      return -1;
    }
    var je = 50,
      Ze = {
        toString: function () {
          return 'CodeMirror.Pass';
        },
      },
      ke = { scroll: !1 },
      Je = { origin: '*mouse' },
      He = { origin: '+move' };
    function Ge(e, t, n) {
      for (var r = 0, i = 0; ; ) {
        var a = e.indexOf('	', r);
        a == -1 && (a = e.length);
        var l = a - r;
        if (a == e.length || i + l >= t) return r + Math.min(l, t - i);
        if (((i += a - r), (i += n - (i % n)), (r = a + 1), i >= t)) return r;
      }
    }
    var U = [''];
    function G(e) {
      for (; U.length <= e; ) U.push(ce(U) + ' ');
      return U[e];
    }
    function ce(e) {
      return e[e.length - 1];
    }
    function Be(e, t) {
      for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
      return n;
    }
    function te(e, t, n) {
      for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
      e.splice(r, 0, t);
    }
    function fe() {}
    function oe(e, t) {
      var n;
      return (
        Object.create
          ? (n = Object.create(e))
          : ((fe.prototype = e), (n = new fe())),
        t && ge(t, n),
        n
      );
    }
    var Ue =
      /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function we(e) {
      return (
        /\w/.test(e) ||
        (e > '\x80' && (e.toUpperCase() != e.toLowerCase() || Ue.test(e)))
      );
    }
    function Me(e, t) {
      return t
        ? t.source.indexOf('\\w') > -1 && we(e)
          ? !0
          : t.test(e)
        : we(e);
    }
    function Le(e) {
      for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
      return !0;
    }
    var $ =
      /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function W(e) {
      return e.charCodeAt(0) >= 768 && $.test(e);
    }
    function se(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && W(e.charAt(t)); ) t += n;
      return t;
    }
    function De(e, t, n) {
      for (var r = t > n ? -1 : 1; ; ) {
        if (t == n) return t;
        var i = (t + n) / 2,
          a = r < 0 ? Math.ceil(i) : Math.floor(i);
        if (a == t) return e(a) ? t : n;
        e(a) ? (n = a) : (t = a + r);
      }
    }
    function nt(e, t, n, r) {
      if (!e) return r(t, n, 'ltr', 0);
      for (var i = !1, a = 0; a < e.length; ++a) {
        var l = e[a];
        ((l.from < n && l.to > t) || (t == n && l.to == t)) &&
          (r(
            Math.max(l.from, t),
            Math.min(l.to, n),
            l.level == 1 ? 'rtl' : 'ltr',
            a
          ),
          (i = !0));
      }
      i || r(t, n, 'ltr');
    }
    var dt = null;
    function Pt(e, t, n) {
      var r;
      dt = null;
      for (var i = 0; i < e.length; ++i) {
        var a = e[i];
        if (a.from < t && a.to > t) return i;
        a.to == t && (a.from != a.to && n == 'before' ? (r = i) : (dt = i)),
          a.from == t && (a.from != a.to && n != 'before' ? (r = i) : (dt = i));
      }
      return r ?? dt;
    }
    var It = (function () {
      var e =
          'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
        t =
          'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
      function n(m) {
        return m <= 247
          ? e.charAt(m)
          : 1424 <= m && m <= 1524
            ? 'R'
            : 1536 <= m && m <= 1785
              ? t.charAt(m - 1536)
              : 1774 <= m && m <= 2220
                ? 'r'
                : 8192 <= m && m <= 8203
                  ? 'w'
                  : m == 8204
                    ? 'b'
                    : 'L';
      }
      var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        i = /[stwN]/,
        a = /[LRr]/,
        l = /[Lb1n]/,
        u = /[1n]/;
      function f(m, A, P) {
        (this.level = m), (this.from = A), (this.to = P);
      }
      return function (m, A) {
        var P = A == 'ltr' ? 'L' : 'R';
        if (m.length == 0 || (A == 'ltr' && !r.test(m))) return !1;
        for (var J = m.length, Y = [], ie = 0; ie < J; ++ie)
          Y.push(n(m.charCodeAt(ie)));
        for (var ue = 0, me = P; ue < J; ++ue) {
          var ve = Y[ue];
          ve == 'm' ? (Y[ue] = me) : (me = ve);
        }
        for (var _e = 0, be = P; _e < J; ++_e) {
          var Ce = Y[_e];
          Ce == '1' && be == 'r'
            ? (Y[_e] = 'n')
            : a.test(Ce) && ((be = Ce), Ce == 'r' && (Y[_e] = 'R'));
        }
        for (var Ne = 1, Ie = Y[0]; Ne < J - 1; ++Ne) {
          var $e = Y[Ne];
          $e == '+' && Ie == '1' && Y[Ne + 1] == '1'
            ? (Y[Ne] = '1')
            : $e == ',' &&
              Ie == Y[Ne + 1] &&
              (Ie == '1' || Ie == 'n') &&
              (Y[Ne] = Ie),
            (Ie = $e);
        }
        for (var Ve = 0; Ve < J; ++Ve) {
          var vt = Y[Ve];
          if (vt == ',') Y[Ve] = 'N';
          else if (vt == '%') {
            var rt = void 0;
            for (rt = Ve + 1; rt < J && Y[rt] == '%'; ++rt);
            for (
              var Ot =
                  (Ve && Y[Ve - 1] == '!') || (rt < J && Y[rt] == '1')
                    ? '1'
                    : 'N',
                At = Ve;
              At < rt;
              ++At
            )
              Y[At] = Ot;
            Ve = rt - 1;
          }
        }
        for (var ut = 0, Dt = P; ut < J; ++ut) {
          var yt = Y[ut];
          Dt == 'L' && yt == '1' ? (Y[ut] = 'L') : a.test(yt) && (Dt = yt);
        }
        for (var ft = 0; ft < J; ++ft)
          if (i.test(Y[ft])) {
            var ct = void 0;
            for (ct = ft + 1; ct < J && i.test(Y[ct]); ++ct);
            for (
              var lt = (ft ? Y[ft - 1] : P) == 'L',
                qt = (ct < J ? Y[ct] : P) == 'L',
                pn = lt == qt ? (lt ? 'L' : 'R') : P,
                Sr = ft;
              Sr < ct;
              ++Sr
            )
              Y[Sr] = pn;
            ft = ct - 1;
          }
        for (var St = [], rr, bt = 0; bt < J; )
          if (l.test(Y[bt])) {
            var Zo = bt;
            for (++bt; bt < J && l.test(Y[bt]); ++bt);
            St.push(new f(0, Zo, bt));
          } else {
            var cr = bt,
              Nr = St.length,
              Or = A == 'rtl' ? 1 : 0;
            for (++bt; bt < J && Y[bt] != 'L'; ++bt);
            for (var Lt = cr; Lt < bt; )
              if (u.test(Y[Lt])) {
                cr < Lt && (St.splice(Nr, 0, new f(1, cr, Lt)), (Nr += Or));
                var hn = Lt;
                for (++Lt; Lt < bt && u.test(Y[Lt]); ++Lt);
                St.splice(Nr, 0, new f(2, hn, Lt)), (Nr += Or), (cr = Lt);
              } else ++Lt;
            cr < bt && St.splice(Nr, 0, new f(1, cr, bt));
          }
        return (
          A == 'ltr' &&
            (St[0].level == 1 &&
              (rr = m.match(/^\s+/)) &&
              ((St[0].from = rr[0].length),
              St.unshift(new f(0, 0, rr[0].length))),
            ce(St).level == 1 &&
              (rr = m.match(/\s+$/)) &&
              ((ce(St).to -= rr[0].length),
              St.push(new f(0, J - rr[0].length, J)))),
          A == 'rtl' ? St.reverse() : St
        );
      };
    })();
    function Pe(e, t) {
      var n = e.order;
      return n == null && (n = e.order = It(e.text, t)), n;
    }
    var xt = [],
      Fe = function (e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, !1);
        else if (e.attachEvent) e.attachEvent('on' + t, n);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || xt).concat(n);
        }
      };
    function nr(e, t) {
      return (e._handlers && e._handlers[t]) || xt;
    }
    function _t(e, t, n) {
      if (e.removeEventListener) e.removeEventListener(t, n, !1);
      else if (e.detachEvent) e.detachEvent('on' + t, n);
      else {
        var r = e._handlers,
          i = r && r[t];
        if (i) {
          var a = Se(i, n);
          a > -1 && (r[t] = i.slice(0, a).concat(i.slice(a + 1)));
        }
      }
    }
    function it(e, t) {
      var n = nr(e, t);
      if (n.length)
        for (
          var r = Array.prototype.slice.call(arguments, 2), i = 0;
          i < n.length;
          ++i
        )
          n[i].apply(null, r);
    }
    function ot(e, t, n) {
      return (
        typeof t == 'string' &&
          (t = {
            type: t,
            preventDefault: function () {
              this.defaultPrevented = !0;
            },
          }),
        it(e, n || t.type, e, t),
        Ct(t) || t.codemirrorIgnore
      );
    }
    function Ht(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t)
        for (
          var n =
              e.curOp.cursorActivityHandlers ||
              (e.curOp.cursorActivityHandlers = []),
            r = 0;
          r < t.length;
          ++r
        )
          Se(n, t[r]) == -1 && n.push(t[r]);
    }
    function Ft(e, t) {
      return nr(e, t).length > 0;
    }
    function Wt(e) {
      (e.prototype.on = function (t, n) {
        Fe(this, t, n);
      }),
        (e.prototype.off = function (t, n) {
          _t(this, t, n);
        });
    }
    function kt(e) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function Hr(e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
    }
    function Ct(e) {
      return e.defaultPrevented != null
        ? e.defaultPrevented
        : e.returnValue == !1;
    }
    function dr(e) {
      kt(e), Hr(e);
    }
    function yn(e) {
      return e.target || e.srcElement;
    }
    function Ut(e) {
      var t = e.which;
      return (
        t == null &&
          (e.button & 1
            ? (t = 1)
            : e.button & 2
              ? (t = 3)
              : e.button & 4 && (t = 2)),
        H && e.ctrlKey && t == 1 && (t = 3),
        t
      );
    }
    var eo = (function () {
        if (s && p < 9) return !1;
        var e = _('div');
        return 'draggable' in e || 'dragDrop' in e;
      })(),
      Br;
    function ei(e) {
      if (Br == null) {
        var t = _('span', '\u200B');
        V(e, _('span', [t, document.createTextNode('x')])),
          e.firstChild.offsetHeight != 0 &&
            (Br = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(s && p < 8));
      }
      var n = Br
        ? _('span', '\u200B')
        : _(
            'span',
            '\xA0',
            null,
            'display: inline-block; width: 1px; margin-right: -1px'
          );
      return n.setAttribute('cm-text', ''), n;
    }
    var xn;
    function pr(e) {
      if (xn != null) return xn;
      var t = V(e, document.createTextNode('A\u062EA')),
        n = X(t, 0, 1).getBoundingClientRect(),
        r = X(t, 1, 2).getBoundingClientRect();
      return j(e), !n || n.left == n.right ? !1 : (xn = r.right - n.right < 3);
    }
    var Bt =
        `

b`.split(/\n/).length != 3
          ? function (e) {
              for (var t = 0, n = [], r = e.length; t <= r; ) {
                var i = e.indexOf(
                  `
`,
                  t
                );
                i == -1 && (i = e.length);
                var a = e.slice(t, e.charAt(i - 1) == '\r' ? i - 1 : i),
                  l = a.indexOf('\r');
                l != -1
                  ? (n.push(a.slice(0, l)), (t += l + 1))
                  : (n.push(a), (t = i + 1));
              }
              return n;
            }
          : function (e) {
              return e.split(/\r\n?|\n/);
            },
      hr = window.getSelection
        ? function (e) {
            try {
              return e.selectionStart != e.selectionEnd;
            } catch {
              return !1;
            }
          }
        : function (e) {
            var t;
            try {
              t = e.ownerDocument.selection.createRange();
            } catch {}
            return !t || t.parentElement() != e
              ? !1
              : t.compareEndPoints('StartToEnd', t) != 0;
          },
      ti = (function () {
        var e = _('div');
        return 'oncopy' in e
          ? !0
          : (e.setAttribute('oncopy', 'return;'),
            typeof e.oncopy == 'function');
      })(),
      $t = null;
    function to(e) {
      if ($t != null) return $t;
      var t = V(e, _('span', 'x')),
        n = t.getBoundingClientRect(),
        r = X(t, 0, 1).getBoundingClientRect();
      return ($t = Math.abs(n.left - r.left) > 1);
    }
    var Wr = {},
      Kt = {};
    function Gt(e, t) {
      arguments.length > 2 &&
        (t.dependencies = Array.prototype.slice.call(arguments, 2)),
        (Wr[e] = t);
    }
    function Cr(e, t) {
      Kt[e] = t;
    }
    function Ur(e) {
      if (typeof e == 'string' && Kt.hasOwnProperty(e)) e = Kt[e];
      else if (e && typeof e.name == 'string' && Kt.hasOwnProperty(e.name)) {
        var t = Kt[e.name];
        typeof t == 'string' && (t = { name: t }),
          (e = oe(t, e)),
          (e.name = t.name);
      } else {
        if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
          return Ur('application/xml');
        if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
          return Ur('application/json');
      }
      return typeof e == 'string' ? { name: e } : e || { name: 'null' };
    }
    function $r(e, t) {
      t = Ur(t);
      var n = Wr[t.name];
      if (!n) return $r(e, 'text/plain');
      var r = n(e, t);
      if (gr.hasOwnProperty(t.name)) {
        var i = gr[t.name];
        for (var a in i)
          i.hasOwnProperty(a) &&
            (r.hasOwnProperty(a) && (r['_' + a] = r[a]), (r[a] = i[a]));
      }
      if (
        ((r.name = t.name),
        t.helperType && (r.helperType = t.helperType),
        t.modeProps)
      )
        for (var l in t.modeProps) r[l] = t.modeProps[l];
      return r;
    }
    var gr = {};
    function Kr(e, t) {
      var n = gr.hasOwnProperty(e) ? gr[e] : (gr[e] = {});
      ge(t, n);
    }
    function Vt(e, t) {
      if (t === !0) return t;
      if (e.copyState) return e.copyState(t);
      var n = {};
      for (var r in t) {
        var i = t[r];
        i instanceof Array && (i = i.concat([])), (n[r] = i);
      }
      return n;
    }
    function _n(e, t) {
      for (var n; e.innerMode && ((n = e.innerMode(t)), !(!n || n.mode == e)); )
        (t = n.state), (e = n.mode);
      return n || { mode: e, state: t };
    }
    function Gr(e, t, n) {
      return e.startState ? e.startState(t, n) : !0;
    }
    var at = function (e, t, n) {
      (this.pos = this.start = 0),
        (this.string = e),
        (this.tabSize = t || 8),
        (this.lastColumnPos = this.lastColumnValue = 0),
        (this.lineStart = 0),
        (this.lineOracle = n);
    };
    (at.prototype.eol = function () {
      return this.pos >= this.string.length;
    }),
      (at.prototype.sol = function () {
        return this.pos == this.lineStart;
      }),
      (at.prototype.peek = function () {
        return this.string.charAt(this.pos) || void 0;
      }),
      (at.prototype.next = function () {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }),
      (at.prototype.eat = function (e) {
        var t = this.string.charAt(this.pos),
          n;
        if (
          (typeof e == 'string'
            ? (n = t == e)
            : (n = t && (e.test ? e.test(t) : e(t))),
          n)
        )
          return ++this.pos, t;
      }),
      (at.prototype.eatWhile = function (e) {
        for (var t = this.pos; this.eat(e); );
        return this.pos > t;
      }),
      (at.prototype.eatSpace = function () {
        for (
          var e = this.pos;
          /[\s\u00a0]/.test(this.string.charAt(this.pos));

        )
          ++this.pos;
        return this.pos > e;
      }),
      (at.prototype.skipToEnd = function () {
        this.pos = this.string.length;
      }),
      (at.prototype.skipTo = function (e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1) return (this.pos = t), !0;
      }),
      (at.prototype.backUp = function (e) {
        this.pos -= e;
      }),
      (at.prototype.column = function () {
        return (
          this.lastColumnPos < this.start &&
            ((this.lastColumnValue = Oe(
              this.string,
              this.start,
              this.tabSize,
              this.lastColumnPos,
              this.lastColumnValue
            )),
            (this.lastColumnPos = this.start)),
          this.lastColumnValue -
            (this.lineStart ? Oe(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (at.prototype.indentation = function () {
        return (
          Oe(this.string, null, this.tabSize) -
          (this.lineStart ? Oe(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (at.prototype.match = function (e, t, n) {
        if (typeof e == 'string') {
          var r = function (l) {
              return n ? l.toLowerCase() : l;
            },
            i = this.string.substr(this.pos, e.length);
          if (r(i) == r(e)) return t !== !1 && (this.pos += e.length), !0;
        } else {
          var a = this.string.slice(this.pos).match(e);
          return a && a.index > 0
            ? null
            : (a && t !== !1 && (this.pos += a[0].length), a);
        }
      }),
      (at.prototype.current = function () {
        return this.string.slice(this.start, this.pos);
      }),
      (at.prototype.hideFirstChars = function (e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }),
      (at.prototype.lookAhead = function (e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }),
      (at.prototype.baseToken = function () {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      });
    function Ae(e, t) {
      if (((t -= e.first), t < 0 || t >= e.size))
        throw new Error(
          'There is no line ' + (t + e.first) + ' in the document.'
        );
      for (var n = e; !n.lines; )
        for (var r = 0; ; ++r) {
          var i = n.children[r],
            a = i.chunkSize();
          if (t < a) {
            n = i;
            break;
          }
          t -= a;
        }
      return n.lines[t];
    }
    function ir(e, t, n) {
      var r = [],
        i = t.line;
      return (
        e.iter(t.line, n.line + 1, function (a) {
          var l = a.text;
          i == n.line && (l = l.slice(0, n.ch)),
            i == t.line && (l = l.slice(t.ch)),
            r.push(l),
            ++i;
        }),
        r
      );
    }
    function kn(e, t, n) {
      var r = [];
      return (
        e.iter(t, n, function (i) {
          r.push(i.text);
        }),
        r
      );
    }
    function jt(e, t) {
      var n = t - e.height;
      if (n) for (var r = e; r; r = r.parent) r.height += n;
    }
    function k(e) {
      if (e.parent == null) return null;
      for (
        var t = e.parent, n = Se(t.lines, e), r = t.parent;
        r;
        t = r, r = r.parent
      )
        for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
      return n + t.first;
    }
    function O(e, t) {
      var n = e.first;
      e: do {
        for (var r = 0; r < e.children.length; ++r) {
          var i = e.children[r],
            a = i.height;
          if (t < a) {
            e = i;
            continue e;
          }
          (t -= a), (n += i.chunkSize());
        }
        return n;
      } while (!e.lines);
      for (var l = 0; l < e.lines.length; ++l) {
        var u = e.lines[l],
          f = u.height;
        if (t < f) break;
        t -= f;
      }
      return n + l;
    }
    function ae(e, t) {
      return t >= e.first && t < e.first + e.size;
    }
    function he(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }
    function ne(e, t, n) {
      if ((n === void 0 && (n = null), !(this instanceof ne)))
        return new ne(e, t, n);
      (this.line = e), (this.ch = t), (this.sticky = n);
    }
    function ye(e, t) {
      return e.line - t.line || e.ch - t.ch;
    }
    function Xe(e, t) {
      return e.sticky == t.sticky && ye(e, t) == 0;
    }
    function pt(e) {
      return ne(e.line, e.ch);
    }
    function Et(e, t) {
      return ye(e, t) < 0 ? t : e;
    }
    function Zr(e, t) {
      return ye(e, t) < 0 ? e : t;
    }
    function ua(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }
    function Re(e, t) {
      if (t.line < e.first) return ne(e.first, 0);
      var n = e.first + e.size - 1;
      return t.line > n
        ? ne(n, Ae(e, n).text.length)
        : Sc(t, Ae(e, t.line).text.length);
    }
    function Sc(e, t) {
      var n = e.ch;
      return n == null || n > t ? ne(e.line, t) : n < 0 ? ne(e.line, 0) : e;
    }
    function ca(e, t) {
      for (var n = [], r = 0; r < t.length; r++) n[r] = Re(e, t[r]);
      return n;
    }
    var ri = function (e, t) {
        (this.state = e), (this.lookAhead = t);
      },
      Jt = function (e, t, n, r) {
        (this.state = t),
          (this.doc = e),
          (this.line = n),
          (this.maxLookAhead = r || 0),
          (this.baseTokens = null),
          (this.baseTokenPos = 1);
      };
    (Jt.prototype.lookAhead = function (e) {
      var t = this.doc.getLine(this.line + e);
      return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }),
      (Jt.prototype.baseToken = function (e) {
        if (!this.baseTokens) return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ''),
          size: this.baseTokens[this.baseTokenPos] - e,
        };
      }),
      (Jt.prototype.nextLine = function () {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }),
      (Jt.fromSaved = function (e, t, n) {
        return t instanceof ri
          ? new Jt(e, Vt(e.mode, t.state), n, t.lookAhead)
          : new Jt(e, Vt(e.mode, t), n);
      }),
      (Jt.prototype.save = function (e) {
        var t = e !== !1 ? Vt(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new ri(t, this.maxLookAhead) : t;
      });
    function fa(e, t, n, r) {
      var i = [e.state.modeGen],
        a = {};
      va(
        e,
        t.text,
        e.doc.mode,
        n,
        function (m, A) {
          return i.push(m, A);
        },
        a,
        r
      );
      for (
        var l = n.state,
          u = function (m) {
            n.baseTokens = i;
            var A = e.state.overlays[m],
              P = 1,
              J = 0;
            (n.state = !0),
              va(
                e,
                t.text,
                A.mode,
                n,
                function (Y, ie) {
                  for (var ue = P; J < Y; ) {
                    var me = i[P];
                    me > Y && i.splice(P, 1, Y, i[P + 1], me),
                      (P += 2),
                      (J = Math.min(Y, me));
                  }
                  if (ie)
                    if (A.opaque)
                      i.splice(ue, P - ue, Y, 'overlay ' + ie), (P = ue + 2);
                    else
                      for (; ue < P; ue += 2) {
                        var ve = i[ue + 1];
                        i[ue + 1] = (ve ? ve + ' ' : '') + 'overlay ' + ie;
                      }
                },
                a
              ),
              (n.state = l),
              (n.baseTokens = null),
              (n.baseTokenPos = 1);
          },
          f = 0;
        f < e.state.overlays.length;
        ++f
      )
        u(f);
      return { styles: i, classes: a.bgClass || a.textClass ? a : null };
    }
    function da(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var r = wn(e, k(t)),
          i =
            t.text.length > e.options.maxHighlightLength &&
            Vt(e.doc.mode, r.state),
          a = fa(e, t, r);
        i && (r.state = i),
          (t.stateAfter = r.save(!i)),
          (t.styles = a.styles),
          a.classes
            ? (t.styleClasses = a.classes)
            : t.styleClasses && (t.styleClasses = null),
          n === e.doc.highlightFrontier &&
            (e.doc.modeFrontier = Math.max(
              e.doc.modeFrontier,
              ++e.doc.highlightFrontier
            ));
      }
      return t.styles;
    }
    function wn(e, t, n) {
      var r = e.doc,
        i = e.display;
      if (!r.mode.startState) return new Jt(r, !0, t);
      var a = Tc(e, t, n),
        l = a > r.first && Ae(r, a - 1).stateAfter,
        u = l ? Jt.fromSaved(r, l, a) : new Jt(r, Gr(r.mode), a);
      return (
        r.iter(a, t, function (f) {
          ro(e, f.text, u);
          var m = u.line;
          (f.stateAfter =
            m == t - 1 || m % 5 == 0 || (m >= i.viewFrom && m < i.viewTo)
              ? u.save()
              : null),
            u.nextLine();
        }),
        n && (r.modeFrontier = u.line),
        u
      );
    }
    function ro(e, t, n, r) {
      var i = e.doc.mode,
        a = new at(t, e.options.tabSize, n);
      for (a.start = a.pos = r || 0, t == '' && pa(i, n.state); !a.eol(); )
        no(i, a, n.state), (a.start = a.pos);
    }
    function pa(e, t) {
      if (e.blankLine) return e.blankLine(t);
      if (e.innerMode) {
        var n = _n(e, t);
        if (n.mode.blankLine) return n.mode.blankLine(n.state);
      }
    }
    function no(e, t, n, r) {
      for (var i = 0; i < 10; i++) {
        r && (r[0] = _n(e, n).mode);
        var a = e.token(t, n);
        if (t.pos > t.start) return a;
      }
      throw new Error('Mode ' + e.name + ' failed to advance stream.');
    }
    var ha = function (e, t, n) {
      (this.start = e.start),
        (this.end = e.pos),
        (this.string = e.current()),
        (this.type = t || null),
        (this.state = n);
    };
    function ga(e, t, n, r) {
      var i = e.doc,
        a = i.mode,
        l;
      t = Re(i, t);
      var u = Ae(i, t.line),
        f = wn(e, t.line, n),
        m = new at(u.text, e.options.tabSize, f),
        A;
      for (r && (A = []); (r || m.pos < t.ch) && !m.eol(); )
        (m.start = m.pos),
          (l = no(a, m, f.state)),
          r && A.push(new ha(m, l, Vt(i.mode, f.state)));
      return r ? A : new ha(m, l, f.state);
    }
    function ma(e, t) {
      if (e)
        for (;;) {
          var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!n) break;
          e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
          var r = n[1] ? 'bgClass' : 'textClass';
          t[r] == null
            ? (t[r] = n[2])
            : new RegExp('(?:^|\\s)' + n[2] + '(?:$|\\s)').test(t[r]) ||
              (t[r] += ' ' + n[2]);
        }
      return e;
    }
    function va(e, t, n, r, i, a, l) {
      var u = n.flattenSpans;
      u == null && (u = e.options.flattenSpans);
      var f = 0,
        m = null,
        A = new at(t, e.options.tabSize, r),
        P,
        J = e.options.addModeClass && [null];
      for (t == '' && ma(pa(n, r.state), a); !A.eol(); ) {
        if (
          (A.pos > e.options.maxHighlightLength
            ? ((u = !1),
              l && ro(e, t, r, A.pos),
              (A.pos = t.length),
              (P = null))
            : (P = ma(no(n, A, r.state, J), a)),
          J)
        ) {
          var Y = J[0].name;
          Y && (P = 'm-' + (P ? Y + ' ' + P : Y));
        }
        if (!u || m != P) {
          for (; f < A.start; ) (f = Math.min(A.start, f + 5e3)), i(f, m);
          m = P;
        }
        A.start = A.pos;
      }
      for (; f < A.pos; ) {
        var ie = Math.min(A.pos, f + 5e3);
        i(ie, m), (f = ie);
      }
    }
    function Tc(e, t, n) {
      for (
        var r,
          i,
          a = e.doc,
          l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
          u = t;
        u > l;
        --u
      ) {
        if (u <= a.first) return a.first;
        var f = Ae(a, u - 1),
          m = f.stateAfter;
        if (
          m &&
          (!n || u + (m instanceof ri ? m.lookAhead : 0) <= a.modeFrontier)
        )
          return u;
        var A = Oe(f.text, null, e.options.tabSize);
        (i == null || r > A) && ((i = u - 1), (r = A));
      }
      return i;
    }
    function Lc(e, t) {
      if (
        ((e.modeFrontier = Math.min(e.modeFrontier, t)),
        !(e.highlightFrontier < t - 10))
      ) {
        for (var n = e.first, r = t - 1; r > n; r--) {
          var i = Ae(e, r).stateAfter;
          if (i && (!(i instanceof ri) || r + i.lookAhead < t)) {
            n = r + 1;
            break;
          }
        }
        e.highlightFrontier = Math.min(e.highlightFrontier, n);
      }
    }
    var ba = !1,
      or = !1;
    function Cc() {
      ba = !0;
    }
    function Ec() {
      or = !0;
    }
    function ni(e, t, n) {
      (this.marker = e), (this.from = t), (this.to = n);
    }
    function Sn(e, t) {
      if (e)
        for (var n = 0; n < e.length; ++n) {
          var r = e[n];
          if (r.marker == t) return r;
        }
    }
    function zc(e, t) {
      for (var n, r = 0; r < e.length; ++r)
        e[r] != t && (n || (n = [])).push(e[r]);
      return n;
    }
    function Mc(e, t, n) {
      var r =
        n &&
        window.WeakSet &&
        (n.markedSpans || (n.markedSpans = new WeakSet()));
      r && e.markedSpans && r.has(e.markedSpans)
        ? e.markedSpans.push(t)
        : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
          r && r.add(e.markedSpans)),
        t.marker.attachLine(e);
    }
    function Ac(e, t, n) {
      var r;
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var a = e[i],
            l = a.marker,
            u = a.from == null || (l.inclusiveLeft ? a.from <= t : a.from < t);
          if (
            u ||
            (a.from == t &&
              l.type == 'bookmark' &&
              (!n || !a.marker.insertLeft))
          ) {
            var f = a.to == null || (l.inclusiveRight ? a.to >= t : a.to > t);
            (r || (r = [])).push(new ni(l, a.from, f ? null : a.to));
          }
        }
      return r;
    }
    function Dc(e, t, n) {
      var r;
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var a = e[i],
            l = a.marker,
            u = a.to == null || (l.inclusiveRight ? a.to >= t : a.to > t);
          if (
            u ||
            (a.from == t && l.type == 'bookmark' && (!n || a.marker.insertLeft))
          ) {
            var f =
              a.from == null || (l.inclusiveLeft ? a.from <= t : a.from < t);
            (r || (r = [])).push(
              new ni(l, f ? null : a.from - t, a.to == null ? null : a.to - t)
            );
          }
        }
      return r;
    }
    function io(e, t) {
      if (t.full) return null;
      var n = ae(e, t.from.line) && Ae(e, t.from.line).markedSpans,
        r = ae(e, t.to.line) && Ae(e, t.to.line).markedSpans;
      if (!n && !r) return null;
      var i = t.from.ch,
        a = t.to.ch,
        l = ye(t.from, t.to) == 0,
        u = Ac(n, i, l),
        f = Dc(r, a, l),
        m = t.text.length == 1,
        A = ce(t.text).length + (m ? i : 0);
      if (u)
        for (var P = 0; P < u.length; ++P) {
          var J = u[P];
          if (J.to == null) {
            var Y = Sn(f, J.marker);
            Y ? m && (J.to = Y.to == null ? null : Y.to + A) : (J.to = i);
          }
        }
      if (f)
        for (var ie = 0; ie < f.length; ++ie) {
          var ue = f[ie];
          if ((ue.to != null && (ue.to += A), ue.from == null)) {
            var me = Sn(u, ue.marker);
            me || ((ue.from = A), m && (u || (u = [])).push(ue));
          } else (ue.from += A), m && (u || (u = [])).push(ue);
        }
      u && (u = ya(u)), f && f != u && (f = ya(f));
      var ve = [u];
      if (!m) {
        var _e = t.text.length - 2,
          be;
        if (_e > 0 && u)
          for (var Ce = 0; Ce < u.length; ++Ce)
            u[Ce].to == null &&
              (be || (be = [])).push(new ni(u[Ce].marker, null, null));
        for (var Ne = 0; Ne < _e; ++Ne) ve.push(be);
        ve.push(f);
      }
      return ve;
    }
    function ya(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        n.from != null &&
          n.from == n.to &&
          n.marker.clearWhenEmpty !== !1 &&
          e.splice(t--, 1);
      }
      return e.length ? e : null;
    }
    function qc(e, t, n) {
      var r = null;
      if (
        (e.iter(t.line, n.line + 1, function (Y) {
          if (Y.markedSpans)
            for (var ie = 0; ie < Y.markedSpans.length; ++ie) {
              var ue = Y.markedSpans[ie].marker;
              ue.readOnly &&
                (!r || Se(r, ue) == -1) &&
                (r || (r = [])).push(ue);
            }
        }),
        !r)
      )
        return null;
      for (var i = [{ from: t, to: n }], a = 0; a < r.length; ++a)
        for (var l = r[a], u = l.find(0), f = 0; f < i.length; ++f) {
          var m = i[f];
          if (!(ye(m.to, u.from) < 0 || ye(m.from, u.to) > 0)) {
            var A = [f, 1],
              P = ye(m.from, u.from),
              J = ye(m.to, u.to);
            (P < 0 || (!l.inclusiveLeft && !P)) &&
              A.push({ from: m.from, to: u.from }),
              (J > 0 || (!l.inclusiveRight && !J)) &&
                A.push({ from: u.to, to: m.to }),
              i.splice.apply(i, A),
              (f += A.length - 3);
          }
        }
      return i;
    }
    function xa(e) {
      var t = e.markedSpans;
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
        e.markedSpans = null;
      }
    }
    function _a(e, t) {
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
        e.markedSpans = t;
      }
    }
    function ii(e) {
      return e.inclusiveLeft ? -1 : 0;
    }
    function oi(e) {
      return e.inclusiveRight ? 1 : 0;
    }
    function oo(e, t) {
      var n = e.lines.length - t.lines.length;
      if (n != 0) return n;
      var r = e.find(),
        i = t.find(),
        a = ye(r.from, i.from) || ii(e) - ii(t);
      if (a) return -a;
      var l = ye(r.to, i.to) || oi(e) - oi(t);
      return l || t.id - e.id;
    }
    function ka(e, t) {
      var n = or && e.markedSpans,
        r;
      if (n)
        for (var i = void 0, a = 0; a < n.length; ++a)
          (i = n[a]),
            i.marker.collapsed &&
              (t ? i.from : i.to) == null &&
              (!r || oo(r, i.marker) < 0) &&
              (r = i.marker);
      return r;
    }
    function wa(e) {
      return ka(e, !0);
    }
    function ai(e) {
      return ka(e, !1);
    }
    function Ic(e, t) {
      var n = or && e.markedSpans,
        r;
      if (n)
        for (var i = 0; i < n.length; ++i) {
          var a = n[i];
          a.marker.collapsed &&
            (a.from == null || a.from < t) &&
            (a.to == null || a.to > t) &&
            (!r || oo(r, a.marker) < 0) &&
            (r = a.marker);
        }
      return r;
    }
    function Sa(e, t, n, r, i) {
      var a = Ae(e, t),
        l = or && a.markedSpans;
      if (l)
        for (var u = 0; u < l.length; ++u) {
          var f = l[u];
          if (f.marker.collapsed) {
            var m = f.marker.find(0),
              A = ye(m.from, n) || ii(f.marker) - ii(i),
              P = ye(m.to, r) || oi(f.marker) - oi(i);
            if (
              !((A >= 0 && P <= 0) || (A <= 0 && P >= 0)) &&
              ((A <= 0 &&
                (f.marker.inclusiveRight && i.inclusiveLeft
                  ? ye(m.to, n) >= 0
                  : ye(m.to, n) > 0)) ||
                (A >= 0 &&
                  (f.marker.inclusiveRight && i.inclusiveLeft
                    ? ye(m.from, r) <= 0
                    : ye(m.from, r) < 0)))
            )
              return !0;
          }
        }
    }
    function Zt(e) {
      for (var t; (t = wa(e)); ) e = t.find(-1, !0).line;
      return e;
    }
    function Fc(e) {
      for (var t; (t = ai(e)); ) e = t.find(1, !0).line;
      return e;
    }
    function Nc(e) {
      for (var t, n; (t = ai(e)); )
        (e = t.find(1, !0).line), (n || (n = [])).push(e);
      return n;
    }
    function ao(e, t) {
      var n = Ae(e, t),
        r = Zt(n);
      return n == r ? t : k(r);
    }
    function Ta(e, t) {
      if (t > e.lastLine()) return t;
      var n = Ae(e, t),
        r;
      if (!mr(e, n)) return t;
      for (; (r = ai(n)); ) n = r.find(1, !0).line;
      return k(n) + 1;
    }
    function mr(e, t) {
      var n = or && t.markedSpans;
      if (n) {
        for (var r = void 0, i = 0; i < n.length; ++i)
          if (((r = n[i]), !!r.marker.collapsed)) {
            if (r.from == null) return !0;
            if (
              !r.marker.widgetNode &&
              r.from == 0 &&
              r.marker.inclusiveLeft &&
              lo(e, t, r)
            )
              return !0;
          }
      }
    }
    function lo(e, t, n) {
      if (n.to == null) {
        var r = n.marker.find(1, !0);
        return lo(e, r.line, Sn(r.line.markedSpans, n.marker));
      }
      if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
      for (var i = void 0, a = 0; a < t.markedSpans.length; ++a)
        if (
          ((i = t.markedSpans[a]),
          i.marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == n.to &&
            (i.to == null || i.to != n.from) &&
            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            lo(e, t, i))
        )
          return !0;
    }
    function ar(e) {
      e = Zt(e);
      for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
        var i = n.lines[r];
        if (i == e) break;
        t += i.height;
      }
      for (var a = n.parent; a; n = a, a = n.parent)
        for (var l = 0; l < a.children.length; ++l) {
          var u = a.children[l];
          if (u == n) break;
          t += u.height;
        }
      return t;
    }
    function li(e) {
      if (e.height == 0) return 0;
      for (var t = e.text.length, n, r = e; (n = wa(r)); ) {
        var i = n.find(0, !0);
        (r = i.from.line), (t += i.from.ch - i.to.ch);
      }
      for (r = e; (n = ai(r)); ) {
        var a = n.find(0, !0);
        (t -= r.text.length - a.from.ch),
          (r = a.to.line),
          (t += r.text.length - a.to.ch);
      }
      return t;
    }
    function so(e) {
      var t = e.display,
        n = e.doc;
      (t.maxLine = Ae(n, n.first)),
        (t.maxLineLength = li(t.maxLine)),
        (t.maxLineChanged = !0),
        n.iter(function (r) {
          var i = li(r);
          i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = r));
        });
    }
    var Xr = function (e, t, n) {
      (this.text = e), _a(this, t), (this.height = n ? n(this) : 1);
    };
    (Xr.prototype.lineNo = function () {
      return k(this);
    }),
      Wt(Xr);
    function Oc(e, t, n, r) {
      (e.text = t),
        e.stateAfter && (e.stateAfter = null),
        e.styles && (e.styles = null),
        e.order != null && (e.order = null),
        xa(e),
        _a(e, n);
      var i = r ? r(e) : 1;
      i != e.height && jt(e, i);
    }
    function Pc(e) {
      (e.parent = null), xa(e);
    }
    var jc = {},
      Rc = {};
    function La(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var n = t.addModeClass ? Rc : jc;
      return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
    }
    function Ca(e, t) {
      var n = K('span', null, null, g ? 'padding-right: .1px' : null),
        r = {
          pre: K('pre', [n], 'CodeMirror-line'),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption('lineWrapping'),
        };
      t.measure = {};
      for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
        var a = i ? t.rest[i - 1] : t.line,
          l = void 0;
        (r.pos = 0),
          (r.addToken = Bc),
          pr(e.display.measure) &&
            (l = Pe(a, e.doc.direction)) &&
            (r.addToken = Uc(r.addToken, l)),
          (r.map = []);
        var u = t != e.display.externalMeasured && k(a);
        $c(a, r, da(e, a, u)),
          a.styleClasses &&
            (a.styleClasses.bgClass &&
              (r.bgClass = xe(a.styleClasses.bgClass, r.bgClass || '')),
            a.styleClasses.textClass &&
              (r.textClass = xe(a.styleClasses.textClass, r.textClass || ''))),
          r.map.length == 0 &&
            r.map.push(0, 0, r.content.appendChild(ei(e.display.measure))),
          i == 0
            ? ((t.measure.map = r.map), (t.measure.cache = {}))
            : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
              (t.measure.caches || (t.measure.caches = [])).push({}));
      }
      if (g) {
        var f = r.content.lastChild;
        (/\bcm-tab\b/.test(f.className) ||
          (f.querySelector && f.querySelector('.cm-tab'))) &&
          (r.content.className = 'cm-tab-wrap-hack');
      }
      return (
        it(e, 'renderLine', e, t.line, r.pre),
        r.pre.className &&
          (r.textClass = xe(r.pre.className, r.textClass || '')),
        r
      );
    }
    function Hc(e) {
      var t = _('span', '\u2022', 'cm-invalidchar');
      return (
        (t.title = '\\u' + e.charCodeAt(0).toString(16)),
        t.setAttribute('aria-label', t.title),
        t
      );
    }
    function Bc(e, t, n, r, i, a, l) {
      if (t) {
        var u = e.splitSpaces ? Wc(t, e.trailingSpace) : t,
          f = e.cm.state.specialChars,
          m = !1,
          A;
        if (!f.test(t))
          (e.col += t.length),
            (A = document.createTextNode(u)),
            e.map.push(e.pos, e.pos + t.length, A),
            s && p < 9 && (m = !0),
            (e.pos += t.length);
        else {
          A = document.createDocumentFragment();
          for (var P = 0; ; ) {
            f.lastIndex = P;
            var J = f.exec(t),
              Y = J ? J.index - P : t.length - P;
            if (Y) {
              var ie = document.createTextNode(u.slice(P, P + Y));
              s && p < 9 ? A.appendChild(_('span', [ie])) : A.appendChild(ie),
                e.map.push(e.pos, e.pos + Y, ie),
                (e.col += Y),
                (e.pos += Y);
            }
            if (!J) break;
            P += Y + 1;
            var ue = void 0;
            if (J[0] == '	') {
              var me = e.cm.options.tabSize,
                ve = me - (e.col % me);
              (ue = A.appendChild(_('span', G(ve), 'cm-tab'))),
                ue.setAttribute('role', 'presentation'),
                ue.setAttribute('cm-text', '	'),
                (e.col += ve);
            } else
              J[0] == '\r' ||
              J[0] ==
                `
`
                ? ((ue = A.appendChild(
                    _(
                      'span',
                      J[0] == '\r' ? '\u240D' : '\u2424',
                      'cm-invalidchar'
                    )
                  )),
                  ue.setAttribute('cm-text', J[0]),
                  (e.col += 1))
                : ((ue = e.cm.options.specialCharPlaceholder(J[0])),
                  ue.setAttribute('cm-text', J[0]),
                  s && p < 9
                    ? A.appendChild(_('span', [ue]))
                    : A.appendChild(ue),
                  (e.col += 1));
            e.map.push(e.pos, e.pos + 1, ue), e.pos++;
          }
        }
        if (
          ((e.trailingSpace = u.charCodeAt(t.length - 1) == 32),
          n || r || i || m || a || l)
        ) {
          var _e = n || '';
          r && (_e += r), i && (_e += i);
          var be = _('span', [A], _e, a);
          if (l)
            for (var Ce in l)
              l.hasOwnProperty(Ce) &&
                Ce != 'style' &&
                Ce != 'class' &&
                be.setAttribute(Ce, l[Ce]);
          return e.content.appendChild(be);
        }
        e.content.appendChild(A);
      }
    }
    function Wc(e, t) {
      if (e.length > 1 && !/  /.test(e)) return e;
      for (var n = t, r = '', i = 0; i < e.length; i++) {
        var a = e.charAt(i);
        a == ' ' &&
          n &&
          (i == e.length - 1 || e.charCodeAt(i + 1) == 32) &&
          (a = '\xA0'),
          (r += a),
          (n = a == ' ');
      }
      return r;
    }
    function Uc(e, t) {
      return function (n, r, i, a, l, u, f) {
        i = i ? i + ' cm-force-border' : 'cm-force-border';
        for (var m = n.pos, A = m + r.length; ; ) {
          for (
            var P = void 0, J = 0;
            J < t.length && ((P = t[J]), !(P.to > m && P.from <= m));
            J++
          );
          if (P.to >= A) return e(n, r, i, a, l, u, f);
          e(n, r.slice(0, P.to - m), i, a, null, u, f),
            (a = null),
            (r = r.slice(P.to - m)),
            (m = P.to);
        }
      };
    }
    function Ea(e, t, n, r) {
      var i = !r && n.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i),
        !r &&
          e.cm.display.input.needsContentAttribute &&
          (i || (i = e.content.appendChild(document.createElement('span'))),
          i.setAttribute('cm-marker', n.id)),
        i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
        (e.pos += t),
        (e.trailingSpace = !1);
    }
    function $c(e, t, n) {
      var r = e.markedSpans,
        i = e.text,
        a = 0;
      if (!r) {
        for (var l = 1; l < n.length; l += 2)
          t.addToken(t, i.slice(a, (a = n[l])), La(n[l + 1], t.cm.options));
        return;
      }
      for (
        var u = i.length, f = 0, m = 1, A = '', P, J, Y = 0, ie, ue, me, ve, _e;
        ;

      ) {
        if (Y == f) {
          (ie = ue = me = J = ''), (_e = null), (ve = null), (Y = 1 / 0);
          for (var be = [], Ce = void 0, Ne = 0; Ne < r.length; ++Ne) {
            var Ie = r[Ne],
              $e = Ie.marker;
            if ($e.type == 'bookmark' && Ie.from == f && $e.widgetNode)
              be.push($e);
            else if (
              Ie.from <= f &&
              (Ie.to == null ||
                Ie.to > f ||
                ($e.collapsed && Ie.to == f && Ie.from == f))
            ) {
              if (
                (Ie.to != null &&
                  Ie.to != f &&
                  Y > Ie.to &&
                  ((Y = Ie.to), (ue = '')),
                $e.className && (ie += ' ' + $e.className),
                $e.css && (J = (J ? J + ';' : '') + $e.css),
                $e.startStyle && Ie.from == f && (me += ' ' + $e.startStyle),
                $e.endStyle &&
                  Ie.to == Y &&
                  (Ce || (Ce = [])).push($e.endStyle, Ie.to),
                $e.title && ((_e || (_e = {})).title = $e.title),
                $e.attributes)
              )
                for (var Ve in $e.attributes)
                  (_e || (_e = {}))[Ve] = $e.attributes[Ve];
              $e.collapsed && (!ve || oo(ve.marker, $e) < 0) && (ve = Ie);
            } else Ie.from > f && Y > Ie.from && (Y = Ie.from);
          }
          if (Ce)
            for (var vt = 0; vt < Ce.length; vt += 2)
              Ce[vt + 1] == Y && (ue += ' ' + Ce[vt]);
          if (!ve || ve.from == f)
            for (var rt = 0; rt < be.length; ++rt) Ea(t, 0, be[rt]);
          if (ve && (ve.from || 0) == f) {
            if (
              (Ea(
                t,
                (ve.to == null ? u + 1 : ve.to) - f,
                ve.marker,
                ve.from == null
              ),
              ve.to == null)
            )
              return;
            ve.to == f && (ve = !1);
          }
        }
        if (f >= u) break;
        for (var Ot = Math.min(u, Y); ; ) {
          if (A) {
            var At = f + A.length;
            if (!ve) {
              var ut = At > Ot ? A.slice(0, Ot - f) : A;
              t.addToken(
                t,
                ut,
                P ? P + ie : ie,
                me,
                f + ut.length == Y ? ue : '',
                J,
                _e
              );
            }
            if (At >= Ot) {
              (A = A.slice(Ot - f)), (f = Ot);
              break;
            }
            (f = At), (me = '');
          }
          (A = i.slice(a, (a = n[m++]))), (P = La(n[m++], t.cm.options));
        }
      }
    }
    function za(e, t, n) {
      (this.line = t),
        (this.rest = Nc(t)),
        (this.size = this.rest ? k(ce(this.rest)) - n + 1 : 1),
        (this.node = this.text = null),
        (this.hidden = mr(e, t));
    }
    function si(e, t, n) {
      for (var r = [], i, a = t; a < n; a = i) {
        var l = new za(e.doc, Ae(e.doc, a), a);
        (i = a + l.size), r.push(l);
      }
      return r;
    }
    var Yr = null;
    function Kc(e) {
      Yr
        ? Yr.ops.push(e)
        : (e.ownsGroup = Yr = { ops: [e], delayedCallbacks: [] });
    }
    function Gc(e) {
      var t = e.delayedCallbacks,
        n = 0;
      do {
        for (; n < t.length; n++) t[n].call(null);
        for (var r = 0; r < e.ops.length; r++) {
          var i = e.ops[r];
          if (i.cursorActivityHandlers)
            for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
              i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                null,
                i.cm
              );
        }
      } while (n < t.length);
    }
    function Zc(e, t) {
      var n = e.ownsGroup;
      if (n)
        try {
          Gc(n);
        } finally {
          (Yr = null), t(n);
        }
    }
    var Tn = null;
    function ht(e, t) {
      var n = nr(e, t);
      if (n.length) {
        var r = Array.prototype.slice.call(arguments, 2),
          i;
        Yr
          ? (i = Yr.delayedCallbacks)
          : Tn
            ? (i = Tn)
            : ((i = Tn = []), setTimeout(Xc, 0));
        for (
          var a = function (u) {
              i.push(function () {
                return n[u].apply(null, r);
              });
            },
            l = 0;
          l < n.length;
          ++l
        )
          a(l);
      }
    }
    function Xc() {
      var e = Tn;
      Tn = null;
      for (var t = 0; t < e.length; ++t) e[t]();
    }
    function Ma(e, t, n, r) {
      for (var i = 0; i < t.changes.length; i++) {
        var a = t.changes[i];
        a == 'text'
          ? Qc(e, t)
          : a == 'gutter'
            ? Da(e, t, n, r)
            : a == 'class'
              ? uo(e, t)
              : a == 'widget' && Vc(e, t, r);
      }
      t.changes = null;
    }
    function Ln(e) {
      return (
        e.node == e.text &&
          ((e.node = _('div', null, null, 'position: relative')),
          e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
          e.node.appendChild(e.text),
          s && p < 8 && (e.node.style.zIndex = 2)),
        e.node
      );
    }
    function Yc(e, t) {
      var n = t.bgClass
        ? t.bgClass + ' ' + (t.line.bgClass || '')
        : t.line.bgClass;
      if ((n && (n += ' CodeMirror-linebackground'), t.background))
        n
          ? (t.background.className = n)
          : (t.background.parentNode.removeChild(t.background),
            (t.background = null));
      else if (n) {
        var r = Ln(t);
        (t.background = r.insertBefore(_('div', null, n), r.firstChild)),
          e.display.input.setUneditable(t.background);
      }
    }
    function Aa(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line
        ? ((e.display.externalMeasured = null),
          (t.measure = n.measure),
          n.built)
        : Ca(e, t);
    }
    function Qc(e, t) {
      var n = t.text.className,
        r = Aa(e, t);
      t.text == t.node && (t.node = r.pre),
        t.text.parentNode.replaceChild(r.pre, t.text),
        (t.text = r.pre),
        r.bgClass != t.bgClass || r.textClass != t.textClass
          ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), uo(e, t))
          : n && (t.text.className = n);
    }
    function uo(e, t) {
      Yc(e, t),
        t.line.wrapClass
          ? (Ln(t).className = t.line.wrapClass)
          : t.node != t.text && (t.node.className = '');
      var n = t.textClass
        ? t.textClass + ' ' + (t.line.textClass || '')
        : t.line.textClass;
      t.text.className = n || '';
    }
    function Da(e, t, n, r) {
      if (
        (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
        t.gutterBackground &&
          (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
        t.line.gutterClass)
      ) {
        var i = Ln(t);
        (t.gutterBackground = _(
          'div',
          null,
          'CodeMirror-gutter-background ' + t.line.gutterClass,
          'left: ' +
            (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
            'px; width: ' +
            r.gutterTotalWidth +
            'px'
        )),
          e.display.input.setUneditable(t.gutterBackground),
          i.insertBefore(t.gutterBackground, t.text);
      }
      var a = t.line.gutterMarkers;
      if (e.options.lineNumbers || a) {
        var l = Ln(t),
          u = (t.gutter = _(
            'div',
            null,
            'CodeMirror-gutter-wrapper',
            'left: ' +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              'px'
          ));
        if (
          (u.setAttribute('aria-hidden', 'true'),
          e.display.input.setUneditable(u),
          l.insertBefore(u, t.text),
          t.line.gutterClass && (u.className += ' ' + t.line.gutterClass),
          e.options.lineNumbers &&
            (!a || !a['CodeMirror-linenumbers']) &&
            (t.lineNumber = u.appendChild(
              _(
                'div',
                he(e.options, n),
                'CodeMirror-linenumber CodeMirror-gutter-elt',
                'left: ' +
                  r.gutterLeft['CodeMirror-linenumbers'] +
                  'px; width: ' +
                  e.display.lineNumInnerWidth +
                  'px'
              )
            )),
          a)
        )
          for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
            var m = e.display.gutterSpecs[f].className,
              A = a.hasOwnProperty(m) && a[m];
            A &&
              u.appendChild(
                _(
                  'div',
                  [A],
                  'CodeMirror-gutter-elt',
                  'left: ' +
                    r.gutterLeft[m] +
                    'px; width: ' +
                    r.gutterWidth[m] +
                    'px'
                )
              );
          }
      }
    }
    function Vc(e, t, n) {
      t.alignable && (t.alignable = null);
      for (
        var r = D('CodeMirror-linewidget'), i = t.node.firstChild, a = void 0;
        i;
        i = a
      )
        (a = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
      qa(e, t, n);
    }
    function Jc(e, t, n, r) {
      var i = Aa(e, t);
      return (
        (t.text = t.node = i.pre),
        i.bgClass && (t.bgClass = i.bgClass),
        i.textClass && (t.textClass = i.textClass),
        uo(e, t),
        Da(e, t, n, r),
        qa(e, t, r),
        t.node
      );
    }
    function qa(e, t, n) {
      if ((Ia(e, t.line, t, n, !0), t.rest))
        for (var r = 0; r < t.rest.length; r++) Ia(e, t.rest[r], t, n, !1);
    }
    function Ia(e, t, n, r, i) {
      if (t.widgets)
        for (var a = Ln(n), l = 0, u = t.widgets; l < u.length; ++l) {
          var f = u[l],
            m = _(
              'div',
              [f.node],
              'CodeMirror-linewidget' + (f.className ? ' ' + f.className : '')
            );
          f.handleMouseEvents || m.setAttribute('cm-ignore-events', 'true'),
            ef(f, m, n, r),
            e.display.input.setUneditable(m),
            i && f.above
              ? a.insertBefore(m, n.gutter || n.text)
              : a.appendChild(m),
            ht(f, 'redraw');
        }
    }
    function ef(e, t, n, r) {
      if (e.noHScroll) {
        (n.alignable || (n.alignable = [])).push(t);
        var i = r.wrapperWidth;
        (t.style.left = r.fixedPos + 'px'),
          e.coverGutter ||
            ((i -= r.gutterTotalWidth),
            (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
          (t.style.width = i + 'px');
      }
      e.coverGutter &&
        ((t.style.zIndex = 5),
        (t.style.position = 'relative'),
        e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
    }
    function Cn(e) {
      if (e.height != null) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;
      if (!I(document.body, e.node)) {
        var n = 'position: relative;';
        e.coverGutter &&
          (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
          e.noHScroll &&
            (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
          V(t.display.measure, _('div', [e.node], null, n));
      }
      return (e.height = e.node.parentNode.offsetHeight);
    }
    function lr(e, t) {
      for (var n = yn(t); n != e.wrapper; n = n.parentNode)
        if (
          !n ||
          (n.nodeType == 1 && n.getAttribute('cm-ignore-events') == 'true') ||
          (n.parentNode == e.sizer && n != e.mover)
        )
          return !0;
    }
    function ui(e) {
      return e.lineSpace.offsetTop;
    }
    function co(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }
    function Fa(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = V(e.measure, _('pre', 'x', 'CodeMirror-line-like')),
        n = window.getComputedStyle
          ? window.getComputedStyle(t)
          : t.currentStyle,
        r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
      return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
    }
    function er(e) {
      return je - e.display.nativeBarWidth;
    }
    function Er(e) {
      return e.display.scroller.clientWidth - er(e) - e.display.barWidth;
    }
    function fo(e) {
      return e.display.scroller.clientHeight - er(e) - e.display.barHeight;
    }
    function tf(e, t, n) {
      var r = e.options.lineWrapping,
        i = r && Er(e);
      if (!t.measure.heights || (r && t.measure.width != i)) {
        var a = (t.measure.heights = []);
        if (r) {
          t.measure.width = i;
          for (
            var l = t.text.firstChild.getClientRects(), u = 0;
            u < l.length - 1;
            u++
          ) {
            var f = l[u],
              m = l[u + 1];
            Math.abs(f.bottom - m.bottom) > 2 &&
              a.push((f.bottom + m.top) / 2 - n.top);
          }
        }
        a.push(n.bottom - n.top);
      }
    }
    function Na(e, t, n) {
      if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
      if (e.rest) {
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var i = 0; i < e.rest.length; i++)
          if (k(e.rest[i]) > n)
            return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0,
            };
      }
    }
    function rf(e, t) {
      t = Zt(t);
      var n = k(t),
        r = (e.display.externalMeasured = new za(e.doc, t, n));
      r.lineN = n;
      var i = (r.built = Ca(e, r));
      return (r.text = i.pre), V(e.display.lineMeasure, i.pre), r;
    }
    function Oa(e, t, n, r) {
      return tr(e, Qr(e, t), n, r);
    }
    function po(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo)
        return e.display.view[Ar(e, t)];
      var n = e.display.externalMeasured;
      if (n && t >= n.lineN && t < n.lineN + n.size) return n;
    }
    function Qr(e, t) {
      var n = k(t),
        r = po(e, n);
      r && !r.text
        ? (r = null)
        : r && r.changes && (Ma(e, r, n, bo(e)), (e.curOp.forceUpdate = !0)),
        r || (r = rf(e, t));
      var i = Na(r, t, n);
      return {
        line: t,
        view: r,
        rect: null,
        map: i.map,
        cache: i.cache,
        before: i.before,
        hasHeights: !1,
      };
    }
    function tr(e, t, n, r, i) {
      t.before && (n = -1);
      var a = n + (r || ''),
        l;
      return (
        t.cache.hasOwnProperty(a)
          ? (l = t.cache[a])
          : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
            t.hasHeights || (tf(e, t.view, t.rect), (t.hasHeights = !0)),
            (l = of(e, t, n, r)),
            l.bogus || (t.cache[a] = l)),
        {
          left: l.left,
          right: l.right,
          top: i ? l.rtop : l.top,
          bottom: i ? l.rbottom : l.bottom,
        }
      );
    }
    var Pa = { left: 0, right: 0, top: 0, bottom: 0 };
    function ja(e, t, n) {
      for (var r, i, a, l, u, f, m = 0; m < e.length; m += 3)
        if (
          ((u = e[m]),
          (f = e[m + 1]),
          t < u
            ? ((i = 0), (a = 1), (l = 'left'))
            : t < f
              ? ((i = t - u), (a = i + 1))
              : (m == e.length - 3 || (t == f && e[m + 3] > t)) &&
                ((a = f - u), (i = a - 1), t >= f && (l = 'right')),
          i != null)
        ) {
          if (
            ((r = e[m + 2]),
            u == f && n == (r.insertLeft ? 'left' : 'right') && (l = n),
            n == 'left' && i == 0)
          )
            for (; m && e[m - 2] == e[m - 3] && e[m - 1].insertLeft; )
              (r = e[(m -= 3) + 2]), (l = 'left');
          if (n == 'right' && i == f - u)
            for (
              ;
              m < e.length - 3 && e[m + 3] == e[m + 4] && !e[m + 5].insertLeft;

            )
              (r = e[(m += 3) + 2]), (l = 'right');
          break;
        }
      return {
        node: r,
        start: i,
        end: a,
        collapse: l,
        coverStart: u,
        coverEnd: f,
      };
    }
    function nf(e, t) {
      var n = Pa;
      if (t == 'left')
        for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
      else
        for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
      return n;
    }
    function of(e, t, n, r) {
      var i = ja(t.map, n, r),
        a = i.node,
        l = i.start,
        u = i.end,
        f = i.collapse,
        m;
      if (a.nodeType == 3) {
        for (var A = 0; A < 4; A++) {
          for (; l && W(t.line.text.charAt(i.coverStart + l)); ) --l;
          for (
            ;
            i.coverStart + u < i.coverEnd &&
            W(t.line.text.charAt(i.coverStart + u));

          )
            ++u;
          if (
            (s && p < 9 && l == 0 && u == i.coverEnd - i.coverStart
              ? (m = a.parentNode.getBoundingClientRect())
              : (m = nf(X(a, l, u).getClientRects(), r)),
            m.left || m.right || l == 0)
          )
            break;
          (u = l), (l = l - 1), (f = 'right');
        }
        s && p < 11 && (m = af(e.display.measure, m));
      } else {
        l > 0 && (f = r = 'right');
        var P;
        e.options.lineWrapping && (P = a.getClientRects()).length > 1
          ? (m = P[r == 'right' ? P.length - 1 : 0])
          : (m = a.getBoundingClientRect());
      }
      if (s && p < 9 && !l && (!m || (!m.left && !m.right))) {
        var J = a.parentNode.getClientRects()[0];
        J
          ? (m = {
              left: J.left,
              right: J.left + Jr(e.display),
              top: J.top,
              bottom: J.bottom,
            })
          : (m = Pa);
      }
      for (
        var Y = m.top - t.rect.top,
          ie = m.bottom - t.rect.top,
          ue = (Y + ie) / 2,
          me = t.view.measure.heights,
          ve = 0;
        ve < me.length - 1 && !(ue < me[ve]);
        ve++
      );
      var _e = ve ? me[ve - 1] : 0,
        be = me[ve],
        Ce = {
          left: (f == 'right' ? m.right : m.left) - t.rect.left,
          right: (f == 'left' ? m.left : m.right) - t.rect.left,
          top: _e,
          bottom: be,
        };
      return (
        !m.left && !m.right && (Ce.bogus = !0),
        e.options.singleCursorHeightPerLine ||
          ((Ce.rtop = Y), (Ce.rbottom = ie)),
        Ce
      );
    }
    function af(e, t) {
      if (
        !window.screen ||
        screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI ||
        !to(e)
      )
        return t;
      var n = screen.logicalXDPI / screen.deviceXDPI,
        r = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: t.left * n,
        right: t.right * n,
        top: t.top * r,
        bottom: t.bottom * r,
      };
    }
    function Ra(e) {
      if (
        e.measure &&
        ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
      )
        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
    }
    function Ha(e) {
      (e.display.externalMeasure = null), j(e.display.lineMeasure);
      for (var t = 0; t < e.display.view.length; t++) Ra(e.display.view[t]);
    }
    function En(e) {
      Ha(e),
        (e.display.cachedCharWidth =
          e.display.cachedTextHeight =
          e.display.cachedPaddingH =
            null),
        e.options.lineWrapping || (e.display.maxLineChanged = !0),
        (e.display.lineNumChars = null);
    }
    function Ba(e) {
      return x && R
        ? -(
            e.body.getBoundingClientRect().left -
            parseInt(getComputedStyle(e.body).marginLeft)
          )
        : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
    }
    function Wa(e) {
      return x && R
        ? -(
            e.body.getBoundingClientRect().top -
            parseInt(getComputedStyle(e.body).marginTop)
          )
        : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
    }
    function ho(e) {
      var t = Zt(e),
        n = t.widgets,
        r = 0;
      if (n) for (var i = 0; i < n.length; ++i) n[i].above && (r += Cn(n[i]));
      return r;
    }
    function ci(e, t, n, r, i) {
      if (!i) {
        var a = ho(t);
        (n.top += a), (n.bottom += a);
      }
      if (r == 'line') return n;
      r || (r = 'local');
      var l = ar(t);
      if (
        (r == 'local' ? (l += ui(e.display)) : (l -= e.display.viewOffset),
        r == 'page' || r == 'window')
      ) {
        var u = e.display.lineSpace.getBoundingClientRect();
        l += u.top + (r == 'window' ? 0 : Wa(T(e)));
        var f = u.left + (r == 'window' ? 0 : Ba(T(e)));
        (n.left += f), (n.right += f);
      }
      return (n.top += l), (n.bottom += l), n;
    }
    function Ua(e, t, n) {
      if (n == 'div') return t;
      var r = t.left,
        i = t.top;
      if (n == 'page') (r -= Ba(T(e))), (i -= Wa(T(e)));
      else if (n == 'local' || !n) {
        var a = e.display.sizer.getBoundingClientRect();
        (r += a.left), (i += a.top);
      }
      var l = e.display.lineSpace.getBoundingClientRect();
      return { left: r - l.left, top: i - l.top };
    }
    function fi(e, t, n, r, i) {
      return r || (r = Ae(e.doc, t.line)), ci(e, r, Oa(e, r, t.ch, i), n);
    }
    function Xt(e, t, n, r, i, a) {
      (r = r || Ae(e.doc, t.line)), i || (i = Qr(e, r));
      function l(ie, ue) {
        var me = tr(e, i, ie, ue ? 'right' : 'left', a);
        return (
          ue ? (me.left = me.right) : (me.right = me.left), ci(e, r, me, n)
        );
      }
      var u = Pe(r, e.doc.direction),
        f = t.ch,
        m = t.sticky;
      if (
        (f >= r.text.length
          ? ((f = r.text.length), (m = 'before'))
          : f <= 0 && ((f = 0), (m = 'after')),
        !u)
      )
        return l(m == 'before' ? f - 1 : f, m == 'before');
      function A(ie, ue, me) {
        var ve = u[ue],
          _e = ve.level == 1;
        return l(me ? ie - 1 : ie, _e != me);
      }
      var P = Pt(u, f, m),
        J = dt,
        Y = A(f, P, m == 'before');
      return J != null && (Y.other = A(f, J, m != 'before')), Y;
    }
    function $a(e, t) {
      var n = 0;
      (t = Re(e.doc, t)), e.options.lineWrapping || (n = Jr(e.display) * t.ch);
      var r = Ae(e.doc, t.line),
        i = ar(r) + ui(e.display);
      return { left: n, right: n, top: i, bottom: i + r.height };
    }
    function go(e, t, n, r, i) {
      var a = ne(e, t, n);
      return (a.xRel = i), r && (a.outside = r), a;
    }
    function mo(e, t, n) {
      var r = e.doc;
      if (((n += e.display.viewOffset), n < 0))
        return go(r.first, 0, null, -1, -1);
      var i = O(r, n),
        a = r.first + r.size - 1;
      if (i > a)
        return go(r.first + r.size - 1, Ae(r, a).text.length, null, 1, 1);
      t < 0 && (t = 0);
      for (var l = Ae(r, i); ; ) {
        var u = lf(e, l, i, t, n),
          f = Ic(l, u.ch + (u.xRel > 0 || u.outside > 0 ? 1 : 0));
        if (!f) return u;
        var m = f.find(1);
        if (m.line == i) return m;
        l = Ae(r, (i = m.line));
      }
    }
    function Ka(e, t, n, r) {
      r -= ho(t);
      var i = t.text.length,
        a = De(
          function (l) {
            return tr(e, n, l - 1).bottom <= r;
          },
          i,
          0
        );
      return (
        (i = De(
          function (l) {
            return tr(e, n, l).top > r;
          },
          a,
          i
        )),
        { begin: a, end: i }
      );
    }
    function Ga(e, t, n, r) {
      n || (n = Qr(e, t));
      var i = ci(e, t, tr(e, n, r), 'line').top;
      return Ka(e, t, n, i);
    }
    function vo(e, t, n, r) {
      return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t;
    }
    function lf(e, t, n, r, i) {
      i -= ar(t);
      var a = Qr(e, t),
        l = ho(t),
        u = 0,
        f = t.text.length,
        m = !0,
        A = Pe(t, e.doc.direction);
      if (A) {
        var P = (e.options.lineWrapping ? uf : sf)(e, t, n, a, A, r, i);
        (m = P.level != 1),
          (u = m ? P.from : P.to - 1),
          (f = m ? P.to : P.from - 1);
      }
      var J = null,
        Y = null,
        ie = De(
          function (Ne) {
            var Ie = tr(e, a, Ne);
            return (
              (Ie.top += l),
              (Ie.bottom += l),
              vo(Ie, r, i, !1)
                ? (Ie.top <= i && Ie.left <= r && ((J = Ne), (Y = Ie)), !0)
                : !1
            );
          },
          u,
          f
        ),
        ue,
        me,
        ve = !1;
      if (Y) {
        var _e = r - Y.left < Y.right - r,
          be = _e == m;
        (ie = J + (be ? 0 : 1)),
          (me = be ? 'after' : 'before'),
          (ue = _e ? Y.left : Y.right);
      } else {
        !m && (ie == f || ie == u) && ie++,
          (me =
            ie == 0
              ? 'after'
              : ie == t.text.length
                ? 'before'
                : tr(e, a, ie - (m ? 1 : 0)).bottom + l <= i == m
                  ? 'after'
                  : 'before');
        var Ce = Xt(e, ne(n, ie, me), 'line', t, a);
        (ue = Ce.left), (ve = i < Ce.top ? -1 : i >= Ce.bottom ? 1 : 0);
      }
      return (ie = se(t.text, ie, 1)), go(n, ie, me, ve, r - ue);
    }
    function sf(e, t, n, r, i, a, l) {
      var u = De(
          function (P) {
            var J = i[P],
              Y = J.level != 1;
            return vo(
              Xt(
                e,
                ne(n, Y ? J.to : J.from, Y ? 'before' : 'after'),
                'line',
                t,
                r
              ),
              a,
              l,
              !0
            );
          },
          0,
          i.length - 1
        ),
        f = i[u];
      if (u > 0) {
        var m = f.level != 1,
          A = Xt(
            e,
            ne(n, m ? f.from : f.to, m ? 'after' : 'before'),
            'line',
            t,
            r
          );
        vo(A, a, l, !0) && A.top > l && (f = i[u - 1]);
      }
      return f;
    }
    function uf(e, t, n, r, i, a, l) {
      var u = Ka(e, t, r, l),
        f = u.begin,
        m = u.end;
      /\s/.test(t.text.charAt(m - 1)) && m--;
      for (var A = null, P = null, J = 0; J < i.length; J++) {
        var Y = i[J];
        if (!(Y.from >= m || Y.to <= f)) {
          var ie = Y.level != 1,
            ue = tr(
              e,
              r,
              ie ? Math.min(m, Y.to) - 1 : Math.max(f, Y.from)
            ).right,
            me = ue < a ? a - ue + 1e9 : ue - a;
          (!A || P > me) && ((A = Y), (P = me));
        }
      }
      return (
        A || (A = i[i.length - 1]),
        A.from < f && (A = { from: f, to: A.to, level: A.level }),
        A.to > m && (A = { from: A.from, to: m, level: A.level }),
        A
      );
    }
    var zr;
    function Vr(e) {
      if (e.cachedTextHeight != null) return e.cachedTextHeight;
      if (zr == null) {
        zr = _('pre', null, 'CodeMirror-line-like');
        for (var t = 0; t < 49; ++t)
          zr.appendChild(document.createTextNode('x')), zr.appendChild(_('br'));
        zr.appendChild(document.createTextNode('x'));
      }
      V(e.measure, zr);
      var n = zr.offsetHeight / 50;
      return n > 3 && (e.cachedTextHeight = n), j(e.measure), n || 1;
    }
    function Jr(e) {
      if (e.cachedCharWidth != null) return e.cachedCharWidth;
      var t = _('span', 'xxxxxxxxxx'),
        n = _('pre', [t], 'CodeMirror-line-like');
      V(e.measure, n);
      var r = t.getBoundingClientRect(),
        i = (r.right - r.left) / 10;
      return i > 2 && (e.cachedCharWidth = i), i || 10;
    }
    function bo(e) {
      for (
        var t = e.display,
          n = {},
          r = {},
          i = t.gutters.clientLeft,
          a = t.gutters.firstChild,
          l = 0;
        a;
        a = a.nextSibling, ++l
      ) {
        var u = e.display.gutterSpecs[l].className;
        (n[u] = a.offsetLeft + a.clientLeft + i), (r[u] = a.clientWidth);
      }
      return {
        fixedPos: yo(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth,
      };
    }
    function yo(e) {
      return (
        e.scroller.getBoundingClientRect().left -
        e.sizer.getBoundingClientRect().left
      );
    }
    function Za(e) {
      var t = Vr(e.display),
        n = e.options.lineWrapping,
        r =
          n && Math.max(5, e.display.scroller.clientWidth / Jr(e.display) - 3);
      return function (i) {
        if (mr(e.doc, i)) return 0;
        var a = 0;
        if (i.widgets)
          for (var l = 0; l < i.widgets.length; l++)
            i.widgets[l].height && (a += i.widgets[l].height);
        return n ? a + (Math.ceil(i.text.length / r) || 1) * t : a + t;
      };
    }
    function xo(e) {
      var t = e.doc,
        n = Za(e);
      t.iter(function (r) {
        var i = n(r);
        i != r.height && jt(r, i);
      });
    }
    function Mr(e, t, n, r) {
      var i = e.display;
      if (!n && yn(t).getAttribute('cm-not-content') == 'true') return null;
      var a,
        l,
        u = i.lineSpace.getBoundingClientRect();
      try {
        (a = t.clientX - u.left), (l = t.clientY - u.top);
      } catch {
        return null;
      }
      var f = mo(e, a, l),
        m;
      if (r && f.xRel > 0 && (m = Ae(e.doc, f.line).text).length == f.ch) {
        var A = Oe(m, m.length, e.options.tabSize) - m.length;
        f = ne(
          f.line,
          Math.max(0, Math.round((a - Fa(e.display).left) / Jr(e.display)) - A)
        );
      }
      return f;
    }
    function Ar(e, t) {
      if (t >= e.display.viewTo || ((t -= e.display.viewFrom), t < 0))
        return null;
      for (var n = e.display.view, r = 0; r < n.length; r++)
        if (((t -= n[r].size), t < 0)) return r;
    }
    function zt(e, t, n, r) {
      t == null && (t = e.doc.first),
        n == null && (n = e.doc.first + e.doc.size),
        r || (r = 0);
      var i = e.display;
      if (
        (r &&
          n < i.viewTo &&
          (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
          (i.updateLineNumbers = t),
        (e.curOp.viewChanged = !0),
        t >= i.viewTo)
      )
        or && ao(e.doc, t) < i.viewTo && br(e);
      else if (n <= i.viewFrom)
        or && Ta(e.doc, n + r) > i.viewFrom
          ? br(e)
          : ((i.viewFrom += r), (i.viewTo += r));
      else if (t <= i.viewFrom && n >= i.viewTo) br(e);
      else if (t <= i.viewFrom) {
        var a = di(e, n, n + r, 1);
        a
          ? ((i.view = i.view.slice(a.index)),
            (i.viewFrom = a.lineN),
            (i.viewTo += r))
          : br(e);
      } else if (n >= i.viewTo) {
        var l = di(e, t, t, -1);
        l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : br(e);
      } else {
        var u = di(e, t, t, -1),
          f = di(e, n, n + r, 1);
        u && f
          ? ((i.view = i.view
              .slice(0, u.index)
              .concat(si(e, u.lineN, f.lineN))
              .concat(i.view.slice(f.index))),
            (i.viewTo += r))
          : br(e);
      }
      var m = i.externalMeasured;
      m &&
        (n < m.lineN
          ? (m.lineN += r)
          : t < m.lineN + m.size && (i.externalMeasured = null));
    }
    function vr(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display,
        i = e.display.externalMeasured;
      if (
        (i &&
          t >= i.lineN &&
          t < i.lineN + i.size &&
          (r.externalMeasured = null),
        !(t < r.viewFrom || t >= r.viewTo))
      ) {
        var a = r.view[Ar(e, t)];
        if (a.node != null) {
          var l = a.changes || (a.changes = []);
          Se(l, n) == -1 && l.push(n);
        }
      }
    }
    function br(e) {
      (e.display.viewFrom = e.display.viewTo = e.doc.first),
        (e.display.view = []),
        (e.display.viewOffset = 0);
    }
    function di(e, t, n, r) {
      var i = Ar(e, t),
        a,
        l = e.display.view;
      if (!or || n == e.doc.first + e.doc.size) return { index: i, lineN: n };
      for (var u = e.display.viewFrom, f = 0; f < i; f++) u += l[f].size;
      if (u != t) {
        if (r > 0) {
          if (i == l.length - 1) return null;
          (a = u + l[i].size - t), i++;
        } else a = u - t;
        (t += a), (n += a);
      }
      for (; ao(e.doc, n) != n; ) {
        if (i == (r < 0 ? 0 : l.length - 1)) return null;
        (n += r * l[i - (r < 0 ? 1 : 0)].size), (i += r);
      }
      return { index: i, lineN: n };
    }
    function cf(e, t, n) {
      var r = e.display,
        i = r.view;
      i.length == 0 || t >= r.viewTo || n <= r.viewFrom
        ? ((r.view = si(e, t, n)), (r.viewFrom = t))
        : (r.viewFrom > t
            ? (r.view = si(e, t, r.viewFrom).concat(r.view))
            : r.viewFrom < t && (r.view = r.view.slice(Ar(e, t))),
          (r.viewFrom = t),
          r.viewTo < n
            ? (r.view = r.view.concat(si(e, r.viewTo, n)))
            : r.viewTo > n && (r.view = r.view.slice(0, Ar(e, n)))),
        (r.viewTo = n);
    }
    function Xa(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
        var i = t[r];
        !i.hidden && (!i.node || i.changes) && ++n;
      }
      return n;
    }
    function zn(e) {
      e.display.input.showSelection(e.display.input.prepareSelection());
    }
    function Ya(e, t) {
      t === void 0 && (t = !0);
      var n = e.doc,
        r = {},
        i = (r.cursors = document.createDocumentFragment()),
        a = (r.selection = document.createDocumentFragment()),
        l = e.options.$customCursor;
      l && (t = !0);
      for (var u = 0; u < n.sel.ranges.length; u++)
        if (!(!t && u == n.sel.primIndex)) {
          var f = n.sel.ranges[u];
          if (
            !(
              f.from().line >= e.display.viewTo ||
              f.to().line < e.display.viewFrom
            )
          ) {
            var m = f.empty();
            if (l) {
              var A = l(e, f);
              A && _o(e, A, i);
            } else (m || e.options.showCursorWhenSelecting) && _o(e, f.head, i);
            m || ff(e, f, a);
          }
        }
      return r;
    }
    function _o(e, t, n) {
      var r = Xt(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
        i = n.appendChild(_('div', '\xA0', 'CodeMirror-cursor'));
      if (
        ((i.style.left = r.left + 'px'),
        (i.style.top = r.top + 'px'),
        (i.style.height =
          Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
        /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
      ) {
        var a = fi(e, t, 'div', null, null),
          l = a.right - a.left;
        i.style.width = (l > 0 ? l : e.defaultCharWidth()) + 'px';
      }
      if (r.other) {
        var u = n.appendChild(
          _('div', '\xA0', 'CodeMirror-cursor CodeMirror-secondarycursor')
        );
        (u.style.display = ''),
          (u.style.left = r.other.left + 'px'),
          (u.style.top = r.other.top + 'px'),
          (u.style.height = (r.other.bottom - r.other.top) * 0.85 + 'px');
      }
    }
    function pi(e, t) {
      return e.top - t.top || e.left - t.left;
    }
    function ff(e, t, n) {
      var r = e.display,
        i = e.doc,
        a = document.createDocumentFragment(),
        l = Fa(e.display),
        u = l.left,
        f = Math.max(r.sizerWidth, Er(e) - r.sizer.offsetLeft) - l.right,
        m = i.direction == 'ltr';
      function A(be, Ce, Ne, Ie) {
        Ce < 0 && (Ce = 0),
          (Ce = Math.round(Ce)),
          (Ie = Math.round(Ie)),
          a.appendChild(
            _(
              'div',
              null,
              'CodeMirror-selected',
              'position: absolute; left: ' +
                be +
                `px;
                             top: ` +
                Ce +
                'px; width: ' +
                (Ne ?? f - be) +
                `px;
                             height: ` +
                (Ie - Ce) +
                'px'
            )
          );
      }
      function P(be, Ce, Ne) {
        var Ie = Ae(i, be),
          $e = Ie.text.length,
          Ve,
          vt;
        function rt(ut, Dt) {
          return fi(e, ne(be, ut), 'div', Ie, Dt);
        }
        function Ot(ut, Dt, yt) {
          var ft = Ga(e, Ie, null, ut),
            ct = (Dt == 'ltr') == (yt == 'after') ? 'left' : 'right',
            lt =
              yt == 'after'
                ? ft.begin
                : ft.end - (/\s/.test(Ie.text.charAt(ft.end - 1)) ? 2 : 1);
          return rt(lt, ct)[ct];
        }
        var At = Pe(Ie, i.direction);
        return (
          nt(At, Ce || 0, Ne ?? $e, function (ut, Dt, yt, ft) {
            var ct = yt == 'ltr',
              lt = rt(ut, ct ? 'left' : 'right'),
              qt = rt(Dt - 1, ct ? 'right' : 'left'),
              pn = Ce == null && ut == 0,
              Sr = Ne == null && Dt == $e,
              St = ft == 0,
              rr = !At || ft == At.length - 1;
            if (qt.top - lt.top <= 3) {
              var bt = (m ? pn : Sr) && St,
                Zo = (m ? Sr : pn) && rr,
                cr = bt ? u : (ct ? lt : qt).left,
                Nr = Zo ? f : (ct ? qt : lt).right;
              A(cr, lt.top, Nr - cr, lt.bottom);
            } else {
              var Or, Lt, hn, Xo;
              ct
                ? ((Or = m && pn && St ? u : lt.left),
                  (Lt = m ? f : Ot(ut, yt, 'before')),
                  (hn = m ? u : Ot(Dt, yt, 'after')),
                  (Xo = m && Sr && rr ? f : qt.right))
                : ((Or = m ? Ot(ut, yt, 'before') : u),
                  (Lt = !m && pn && St ? f : lt.right),
                  (hn = !m && Sr && rr ? u : qt.left),
                  (Xo = m ? Ot(Dt, yt, 'after') : f)),
                A(Or, lt.top, Lt - Or, lt.bottom),
                lt.bottom < qt.top && A(u, lt.bottom, null, qt.top),
                A(hn, qt.top, Xo - hn, qt.bottom);
            }
            (!Ve || pi(lt, Ve) < 0) && (Ve = lt),
              pi(qt, Ve) < 0 && (Ve = qt),
              (!vt || pi(lt, vt) < 0) && (vt = lt),
              pi(qt, vt) < 0 && (vt = qt);
          }),
          { start: Ve, end: vt }
        );
      }
      var J = t.from(),
        Y = t.to();
      if (J.line == Y.line) P(J.line, J.ch, Y.ch);
      else {
        var ie = Ae(i, J.line),
          ue = Ae(i, Y.line),
          me = Zt(ie) == Zt(ue),
          ve = P(J.line, J.ch, me ? ie.text.length + 1 : null).end,
          _e = P(Y.line, me ? 0 : null, Y.ch).start;
        me &&
          (ve.top < _e.top - 2
            ? (A(ve.right, ve.top, null, ve.bottom),
              A(u, _e.top, _e.left, _e.bottom))
            : A(ve.right, ve.top, _e.left - ve.right, ve.bottom)),
          ve.bottom < _e.top && A(u, ve.bottom, null, _e.top);
      }
      n.appendChild(a);
    }
    function ko(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        (t.cursorDiv.style.visibility = ''),
          e.options.cursorBlinkRate > 0
            ? (t.blinker = setInterval(function () {
                e.hasFocus() || en(e),
                  (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden');
              }, e.options.cursorBlinkRate))
            : e.options.cursorBlinkRate < 0 &&
              (t.cursorDiv.style.visibility = 'hidden');
      }
    }
    function Qa(e) {
      e.hasFocus() || (e.display.input.focus(), e.state.focused || So(e));
    }
    function wo(e) {
      (e.state.delayingBlurEvent = !0),
        setTimeout(function () {
          e.state.delayingBlurEvent &&
            ((e.state.delayingBlurEvent = !1), e.state.focused && en(e));
        }, 100);
    }
    function So(e, t) {
      e.state.delayingBlurEvent &&
        !e.state.draggingText &&
        (e.state.delayingBlurEvent = !1),
        e.options.readOnly != 'nocursor' &&
          (e.state.focused ||
            (it(e, 'focus', e, t),
            (e.state.focused = !0),
            le(e.display.wrapper, 'CodeMirror-focused'),
            !e.curOp &&
              e.display.selForContextMenu != e.doc.sel &&
              (e.display.input.reset(),
              g &&
                setTimeout(function () {
                  return e.display.input.reset(!0);
                }, 20)),
            e.display.input.receivedFocus()),
          ko(e));
    }
    function en(e, t) {
      e.state.delayingBlurEvent ||
        (e.state.focused &&
          (it(e, 'blur', e, t),
          (e.state.focused = !1),
          Q(e.display.wrapper, 'CodeMirror-focused')),
        clearInterval(e.display.blinker),
        setTimeout(function () {
          e.state.focused || (e.display.shift = !1);
        }, 150));
    }
    function hi(e) {
      for (
        var t = e.display,
          n = t.lineDiv.offsetTop,
          r = Math.max(0, t.scroller.getBoundingClientRect().top),
          i = t.lineDiv.getBoundingClientRect().top,
          a = 0,
          l = 0;
        l < t.view.length;
        l++
      ) {
        var u = t.view[l],
          f = e.options.lineWrapping,
          m = void 0,
          A = 0;
        if (!u.hidden) {
          if (((i += u.line.height), s && p < 8)) {
            var P = u.node.offsetTop + u.node.offsetHeight;
            (m = P - n), (n = P);
          } else {
            var J = u.node.getBoundingClientRect();
            (m = J.bottom - J.top),
              !f &&
                u.text.firstChild &&
                (A =
                  u.text.firstChild.getBoundingClientRect().right - J.left - 1);
          }
          var Y = u.line.height - m;
          if (
            (Y > 0.005 || Y < -0.005) &&
            (i < r && (a -= Y), jt(u.line, m), Va(u.line), u.rest)
          )
            for (var ie = 0; ie < u.rest.length; ie++) Va(u.rest[ie]);
          if (A > e.display.sizerWidth) {
            var ue = Math.ceil(A / Jr(e.display));
            ue > e.display.maxLineLength &&
              ((e.display.maxLineLength = ue),
              (e.display.maxLine = u.line),
              (e.display.maxLineChanged = !0));
          }
        }
      }
      Math.abs(a) > 2 && (t.scroller.scrollTop += a);
    }
    function Va(e) {
      if (e.widgets)
        for (var t = 0; t < e.widgets.length; ++t) {
          var n = e.widgets[t],
            r = n.node.parentNode;
          r && (n.height = r.offsetHeight);
        }
    }
    function gi(e, t, n) {
      var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - ui(e));
      var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight,
        a = O(t, r),
        l = O(t, i);
      if (n && n.ensure) {
        var u = n.ensure.from.line,
          f = n.ensure.to.line;
        u < a
          ? ((a = u), (l = O(t, ar(Ae(t, u)) + e.wrapper.clientHeight)))
          : Math.min(f, t.lastLine()) >= l &&
            ((a = O(t, ar(Ae(t, f)) - e.wrapper.clientHeight)), (l = f));
      }
      return { from: a, to: Math.max(l, a + 1) };
    }
    function df(e, t) {
      if (!ot(e, 'scrollCursorIntoView')) {
        var n = e.display,
          r = n.sizer.getBoundingClientRect(),
          i = null,
          a = n.wrapper.ownerDocument;
        if (
          (t.top + r.top < 0
            ? (i = !0)
            : t.bottom + r.top >
                (a.defaultView.innerHeight || a.documentElement.clientHeight) &&
              (i = !1),
          i != null && !z)
        ) {
          var l = _(
            'div',
            '\u200B',
            null,
            `position: absolute;
                         top: ` +
              (t.top - n.viewOffset - ui(e.display)) +
              `px;
                         height: ` +
              (t.bottom - t.top + er(e) + n.barHeight) +
              `px;
                         left: ` +
              t.left +
              'px; width: ' +
              Math.max(2, t.right - t.left) +
              'px;'
          );
          e.display.lineSpace.appendChild(l),
            l.scrollIntoView(i),
            e.display.lineSpace.removeChild(l);
        }
      }
    }
    function pf(e, t, n, r) {
      r == null && (r = 0);
      var i;
      !e.options.lineWrapping &&
        t == n &&
        ((n = t.sticky == 'before' ? ne(t.line, t.ch + 1, 'before') : t),
        (t = t.ch
          ? ne(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after')
          : t));
      for (var a = 0; a < 5; a++) {
        var l = !1,
          u = Xt(e, t),
          f = !n || n == t ? u : Xt(e, n);
        i = {
          left: Math.min(u.left, f.left),
          top: Math.min(u.top, f.top) - r,
          right: Math.max(u.left, f.left),
          bottom: Math.max(u.bottom, f.bottom) + r,
        };
        var m = To(e, i),
          A = e.doc.scrollTop,
          P = e.doc.scrollLeft;
        if (
          (m.scrollTop != null &&
            (An(e, m.scrollTop), Math.abs(e.doc.scrollTop - A) > 1 && (l = !0)),
          m.scrollLeft != null &&
            (Dr(e, m.scrollLeft),
            Math.abs(e.doc.scrollLeft - P) > 1 && (l = !0)),
          !l)
        )
          break;
      }
      return i;
    }
    function hf(e, t) {
      var n = To(e, t);
      n.scrollTop != null && An(e, n.scrollTop),
        n.scrollLeft != null && Dr(e, n.scrollLeft);
    }
    function To(e, t) {
      var n = e.display,
        r = Vr(e.display);
      t.top < 0 && (t.top = 0);
      var i =
          e.curOp && e.curOp.scrollTop != null
            ? e.curOp.scrollTop
            : n.scroller.scrollTop,
        a = fo(e),
        l = {};
      t.bottom - t.top > a && (t.bottom = t.top + a);
      var u = e.doc.height + co(n),
        f = t.top < r,
        m = t.bottom > u - r;
      if (t.top < i) l.scrollTop = f ? 0 : t.top;
      else if (t.bottom > i + a) {
        var A = Math.min(t.top, (m ? u : t.bottom) - a);
        A != i && (l.scrollTop = A);
      }
      var P = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
        J =
          e.curOp && e.curOp.scrollLeft != null
            ? e.curOp.scrollLeft
            : n.scroller.scrollLeft - P,
        Y = Er(e) - n.gutters.offsetWidth,
        ie = t.right - t.left > Y;
      return (
        ie && (t.right = t.left + Y),
        t.left < 10
          ? (l.scrollLeft = 0)
          : t.left < J
            ? (l.scrollLeft = Math.max(0, t.left + P - (ie ? 0 : 10)))
            : t.right > Y + J - 3 &&
              (l.scrollLeft = t.right + (ie ? 0 : 10) - Y),
        l
      );
    }
    function Lo(e, t) {
      t != null &&
        (mi(e),
        (e.curOp.scrollTop =
          (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) +
          t));
    }
    function tn(e) {
      mi(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
        from: t,
        to: t,
        margin: e.options.cursorScrollMargin,
      };
    }
    function Mn(e, t, n) {
      (t != null || n != null) && mi(e),
        t != null && (e.curOp.scrollLeft = t),
        n != null && (e.curOp.scrollTop = n);
    }
    function gf(e, t) {
      mi(e), (e.curOp.scrollToPos = t);
    }
    function mi(e) {
      var t = e.curOp.scrollToPos;
      if (t) {
        e.curOp.scrollToPos = null;
        var n = $a(e, t.from),
          r = $a(e, t.to);
        Ja(e, n, r, t.margin);
      }
    }
    function Ja(e, t, n, r) {
      var i = To(e, {
        left: Math.min(t.left, n.left),
        top: Math.min(t.top, n.top) - r,
        right: Math.max(t.right, n.right),
        bottom: Math.max(t.bottom, n.bottom) + r,
      });
      Mn(e, i.scrollLeft, i.scrollTop);
    }
    function An(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 ||
        (v || Eo(e, { top: t }), el(e, t, !0), v && Eo(e), In(e, 100));
    }
    function el(e, t, n) {
      (t = Math.max(
        0,
        Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t
        )
      )),
        !(e.display.scroller.scrollTop == t && !n) &&
          ((e.doc.scrollTop = t),
          e.display.scrollbars.setScrollTop(t),
          e.display.scroller.scrollTop != t &&
            (e.display.scroller.scrollTop = t));
    }
    function Dr(e, t, n, r) {
      (t = Math.max(
        0,
        Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth
        )
      )),
        !(
          (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r
        ) &&
          ((e.doc.scrollLeft = t),
          ol(e),
          e.display.scroller.scrollLeft != t &&
            (e.display.scroller.scrollLeft = t),
          e.display.scrollbars.setScrollLeft(t));
    }
    function Dn(e) {
      var t = e.display,
        n = t.gutters.offsetWidth,
        r = Math.round(e.doc.height + co(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + er(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n,
      };
    }
    var qr = function (e, t, n) {
      this.cm = n;
      var r = (this.vert = _(
          'div',
          [_('div', null, null, 'min-width: 1px')],
          'CodeMirror-vscrollbar'
        )),
        i = (this.horiz = _(
          'div',
          [_('div', null, null, 'height: 100%; min-height: 1px')],
          'CodeMirror-hscrollbar'
        ));
      (r.tabIndex = i.tabIndex = -1),
        e(r),
        e(i),
        Fe(r, 'scroll', function () {
          r.clientHeight && t(r.scrollTop, 'vertical');
        }),
        Fe(i, 'scroll', function () {
          i.clientWidth && t(i.scrollLeft, 'horizontal');
        }),
        (this.checkedZeroWidth = !1),
        s &&
          p < 8 &&
          (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
    };
    (qr.prototype.update = function (e) {
      var t = e.scrollWidth > e.clientWidth + 1,
        n = e.scrollHeight > e.clientHeight + 1,
        r = e.nativeBarWidth;
      if (n) {
        (this.vert.style.display = 'block'),
          (this.vert.style.bottom = t ? r + 'px' : '0');
        var i = e.viewHeight - (t ? r : 0);
        this.vert.firstChild.style.height =
          Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
      } else
        (this.vert.scrollTop = 0),
          (this.vert.style.display = ''),
          (this.vert.firstChild.style.height = '0');
      if (t) {
        (this.horiz.style.display = 'block'),
          (this.horiz.style.right = n ? r + 'px' : '0'),
          (this.horiz.style.left = e.barLeft + 'px');
        var a = e.viewWidth - e.barLeft - (n ? r : 0);
        this.horiz.firstChild.style.width =
          Math.max(0, e.scrollWidth - e.clientWidth + a) + 'px';
      } else
        (this.horiz.style.display = ''),
          (this.horiz.firstChild.style.width = '0');
      return (
        !this.checkedZeroWidth &&
          e.clientHeight > 0 &&
          (r == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
        { right: n ? r : 0, bottom: t ? r : 0 }
      );
    }),
      (qr.prototype.setScrollLeft = function (e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
          this.disableHoriz &&
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
      }),
      (qr.prototype.setScrollTop = function (e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e),
          this.disableVert &&
            this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
      }),
      (qr.prototype.zeroWidthHack = function () {
        var e = H && !E ? '12px' : '18px';
        (this.horiz.style.height = this.vert.style.width = e),
          (this.horiz.style.visibility = this.vert.style.visibility = 'hidden'),
          (this.disableHoriz = new qe()),
          (this.disableVert = new qe());
      }),
      (qr.prototype.enableZeroWidthBar = function (e, t, n) {
        e.style.visibility = '';
        function r() {
          var i = e.getBoundingClientRect(),
            a =
              n == 'vert'
                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                : document.elementFromPoint(
                    (i.right + i.left) / 2,
                    i.bottom - 1
                  );
          a != e ? (e.style.visibility = 'hidden') : t.set(1e3, r);
        }
        t.set(1e3, r);
      }),
      (qr.prototype.clear = function () {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      });
    var qn = function () {};
    (qn.prototype.update = function () {
      return { bottom: 0, right: 0 };
    }),
      (qn.prototype.setScrollLeft = function () {}),
      (qn.prototype.setScrollTop = function () {}),
      (qn.prototype.clear = function () {});
    function rn(e, t) {
      t || (t = Dn(e));
      var n = e.display.barWidth,
        r = e.display.barHeight;
      tl(e, t);
      for (
        var i = 0;
        (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
        i++
      )
        n != e.display.barWidth && e.options.lineWrapping && hi(e),
          tl(e, Dn(e)),
          (n = e.display.barWidth),
          (r = e.display.barHeight);
    }
    function tl(e, t) {
      var n = e.display,
        r = n.scrollbars.update(t);
      (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
        (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
        (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
        r.right && r.bottom
          ? ((n.scrollbarFiller.style.display = 'block'),
            (n.scrollbarFiller.style.height = r.bottom + 'px'),
            (n.scrollbarFiller.style.width = r.right + 'px'))
          : (n.scrollbarFiller.style.display = ''),
        r.bottom &&
        e.options.coverGutterNextToScrollbar &&
        e.options.fixedGutter
          ? ((n.gutterFiller.style.display = 'block'),
            (n.gutterFiller.style.height = r.bottom + 'px'),
            (n.gutterFiller.style.width = t.gutterWidth + 'px'))
          : (n.gutterFiller.style.display = '');
    }
    var rl = { native: qr, null: qn };
    function nl(e) {
      e.display.scrollbars &&
        (e.display.scrollbars.clear(),
        e.display.scrollbars.addClass &&
          Q(e.display.wrapper, e.display.scrollbars.addClass)),
        (e.display.scrollbars = new rl[e.options.scrollbarStyle](
          function (t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
              Fe(t, 'mousedown', function () {
                e.state.focused &&
                  setTimeout(function () {
                    return e.display.input.focus();
                  }, 0);
              }),
              t.setAttribute('cm-not-content', 'true');
          },
          function (t, n) {
            n == 'horizontal' ? Dr(e, t) : An(e, t);
          },
          e
        )),
        e.display.scrollbars.addClass &&
          le(e.display.wrapper, e.display.scrollbars.addClass);
    }
    var mf = 0;
    function Ir(e) {
      (e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++mf,
        markArrays: null,
      }),
        Kc(e.curOp);
    }
    function Fr(e) {
      var t = e.curOp;
      t &&
        Zc(t, function (n) {
          for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
          vf(n);
        });
    }
    function vf(e) {
      for (var t = e.ops, n = 0; n < t.length; n++) bf(t[n]);
      for (var r = 0; r < t.length; r++) yf(t[r]);
      for (var i = 0; i < t.length; i++) xf(t[i]);
      for (var a = 0; a < t.length; a++) _f(t[a]);
      for (var l = 0; l < t.length; l++) kf(t[l]);
    }
    function bf(e) {
      var t = e.cm,
        n = t.display;
      Sf(t),
        e.updateMaxLine && so(t),
        (e.mustUpdate =
          e.viewChanged ||
          e.forceUpdate ||
          e.scrollTop != null ||
          (e.scrollToPos &&
            (e.scrollToPos.from.line < n.viewFrom ||
              e.scrollToPos.to.line >= n.viewTo)) ||
          (n.maxLineChanged && t.options.lineWrapping)),
        (e.update =
          e.mustUpdate &&
          new vi(
            t,
            e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
            e.forceUpdate
          ));
    }
    function yf(e) {
      e.updatedDisplay = e.mustUpdate && Co(e.cm, e.update);
    }
    function xf(e) {
      var t = e.cm,
        n = t.display;
      e.updatedDisplay && hi(t),
        (e.barMeasure = Dn(t)),
        n.maxLineChanged &&
          !t.options.lineWrapping &&
          ((e.adjustWidthTo = Oa(t, n.maxLine, n.maxLine.text.length).left + 3),
          (t.display.sizerWidth = e.adjustWidthTo),
          (e.barMeasure.scrollWidth = Math.max(
            n.scroller.clientWidth,
            n.sizer.offsetLeft + e.adjustWidthTo + er(t) + t.display.barWidth
          )),
          (e.maxScrollLeft = Math.max(
            0,
            n.sizer.offsetLeft + e.adjustWidthTo - Er(t)
          ))),
        (e.updatedDisplay || e.selectionChanged) &&
          (e.preparedSelection = n.input.prepareSelection());
    }
    function _f(e) {
      var t = e.cm;
      e.adjustWidthTo != null &&
        ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
        e.maxScrollLeft < t.doc.scrollLeft &&
          Dr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
        (t.display.maxLineChanged = !1));
      var n = e.focus && e.focus == B(de(t));
      e.preparedSelection &&
        t.display.input.showSelection(e.preparedSelection, n),
        (e.updatedDisplay || e.startHeight != t.doc.height) &&
          rn(t, e.barMeasure),
        e.updatedDisplay && Mo(t, e.barMeasure),
        e.selectionChanged && ko(t),
        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
        n && Qa(e.cm);
    }
    function kf(e) {
      var t = e.cm,
        n = t.display,
        r = t.doc;
      if (
        (e.updatedDisplay && il(t, e.update),
        n.wheelStartX != null &&
          (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) &&
          (n.wheelStartX = n.wheelStartY = null),
        e.scrollTop != null && el(t, e.scrollTop, e.forceScroll),
        e.scrollLeft != null && Dr(t, e.scrollLeft, !0, !0),
        e.scrollToPos)
      ) {
        var i = pf(
          t,
          Re(r, e.scrollToPos.from),
          Re(r, e.scrollToPos.to),
          e.scrollToPos.margin
        );
        df(t, i);
      }
      var a = e.maybeHiddenMarkers,
        l = e.maybeUnhiddenMarkers;
      if (a)
        for (var u = 0; u < a.length; ++u)
          a[u].lines.length || it(a[u], 'hide');
      if (l)
        for (var f = 0; f < l.length; ++f)
          l[f].lines.length && it(l[f], 'unhide');
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
        e.changeObjs && it(t, 'changes', t, e.changeObjs),
        e.update && e.update.finish();
    }
    function Nt(e, t) {
      if (e.curOp) return t();
      Ir(e);
      try {
        return t();
      } finally {
        Fr(e);
      }
    }
    function gt(e, t) {
      return function () {
        if (e.curOp) return t.apply(e, arguments);
        Ir(e);
        try {
          return t.apply(e, arguments);
        } finally {
          Fr(e);
        }
      };
    }
    function Tt(e) {
      return function () {
        if (this.curOp) return e.apply(this, arguments);
        Ir(this);
        try {
          return e.apply(this, arguments);
        } finally {
          Fr(this);
        }
      };
    }
    function mt(e) {
      return function () {
        var t = this.cm;
        if (!t || t.curOp) return e.apply(this, arguments);
        Ir(t);
        try {
          return e.apply(this, arguments);
        } finally {
          Fr(t);
        }
      };
    }
    function In(e, t) {
      e.doc.highlightFrontier < e.display.viewTo &&
        e.state.highlight.set(t, Ee(wf, e));
    }
    function wf(e) {
      var t = e.doc;
      if (!(t.highlightFrontier >= e.display.viewTo)) {
        var n = +new Date() + e.options.workTime,
          r = wn(e, t.highlightFrontier),
          i = [];
        t.iter(
          r.line,
          Math.min(t.first + t.size, e.display.viewTo + 500),
          function (a) {
            if (r.line >= e.display.viewFrom) {
              var l = a.styles,
                u =
                  a.text.length > e.options.maxHighlightLength
                    ? Vt(t.mode, r.state)
                    : null,
                f = fa(e, a, r, !0);
              u && (r.state = u), (a.styles = f.styles);
              var m = a.styleClasses,
                A = f.classes;
              A ? (a.styleClasses = A) : m && (a.styleClasses = null);
              for (
                var P =
                    !l ||
                    l.length != a.styles.length ||
                    (m != A &&
                      (!m ||
                        !A ||
                        m.bgClass != A.bgClass ||
                        m.textClass != A.textClass)),
                  J = 0;
                !P && J < l.length;
                ++J
              )
                P = l[J] != a.styles[J];
              P && i.push(r.line), (a.stateAfter = r.save()), r.nextLine();
            } else
              a.text.length <= e.options.maxHighlightLength && ro(e, a.text, r),
                (a.stateAfter = r.line % 5 == 0 ? r.save() : null),
                r.nextLine();
            if (+new Date() > n) return In(e, e.options.workDelay), !0;
          }
        ),
          (t.highlightFrontier = r.line),
          (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
          i.length &&
            Nt(e, function () {
              for (var a = 0; a < i.length; a++) vr(e, i[a], 'text');
            });
      }
    }
    var vi = function (e, t, n) {
      var r = e.display;
      (this.viewport = t),
        (this.visible = gi(r, e.doc, t)),
        (this.editorIsHidden = !r.wrapper.offsetWidth),
        (this.wrapperHeight = r.wrapper.clientHeight),
        (this.wrapperWidth = r.wrapper.clientWidth),
        (this.oldDisplayWidth = Er(e)),
        (this.force = n),
        (this.dims = bo(e)),
        (this.events = []);
    };
    (vi.prototype.signal = function (e, t) {
      Ft(e, t) && this.events.push(arguments);
    }),
      (vi.prototype.finish = function () {
        for (var e = 0; e < this.events.length; e++)
          it.apply(null, this.events[e]);
      });
    function Sf(e) {
      var t = e.display;
      !t.scrollbarsClipped &&
        t.scroller.offsetWidth &&
        ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
        (t.heightForcer.style.height = er(e) + 'px'),
        (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
        (t.sizer.style.borderRightWidth = er(e) + 'px'),
        (t.scrollbarsClipped = !0));
    }
    function Tf(e) {
      if (e.hasFocus()) return null;
      var t = B(de(e));
      if (!t || !I(e.display.lineDiv, t)) return null;
      var n = { activeElt: t };
      if (window.getSelection) {
        var r = pe(e).getSelection();
        r.anchorNode &&
          r.extend &&
          I(e.display.lineDiv, r.anchorNode) &&
          ((n.anchorNode = r.anchorNode),
          (n.anchorOffset = r.anchorOffset),
          (n.focusNode = r.focusNode),
          (n.focusOffset = r.focusOffset));
      }
      return n;
    }
    function Lf(e) {
      if (
        !(!e || !e.activeElt || e.activeElt == B(ze(e.activeElt))) &&
        (e.activeElt.focus(),
        !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
          e.anchorNode &&
          I(document.body, e.anchorNode) &&
          I(document.body, e.focusNode))
      ) {
        var t = e.activeElt.ownerDocument,
          n = t.defaultView.getSelection(),
          r = t.createRange();
        r.setEnd(e.anchorNode, e.anchorOffset),
          r.collapse(!1),
          n.removeAllRanges(),
          n.addRange(r),
          n.extend(e.focusNode, e.focusOffset);
      }
    }
    function Co(e, t) {
      var n = e.display,
        r = e.doc;
      if (t.editorIsHidden) return br(e), !1;
      if (
        !t.force &&
        t.visible.from >= n.viewFrom &&
        t.visible.to <= n.viewTo &&
        (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) &&
        n.renderedView == n.view &&
        Xa(e) == 0
      )
        return !1;
      al(e) && (br(e), (t.dims = bo(e)));
      var i = r.first + r.size,
        a = Math.max(t.visible.from - e.options.viewportMargin, r.first),
        l = Math.min(i, t.visible.to + e.options.viewportMargin);
      n.viewFrom < a &&
        a - n.viewFrom < 20 &&
        (a = Math.max(r.first, n.viewFrom)),
        n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)),
        or && ((a = ao(e.doc, a)), (l = Ta(e.doc, l)));
      var u =
        a != n.viewFrom ||
        l != n.viewTo ||
        n.lastWrapHeight != t.wrapperHeight ||
        n.lastWrapWidth != t.wrapperWidth;
      cf(e, a, l),
        (n.viewOffset = ar(Ae(e.doc, n.viewFrom))),
        (e.display.mover.style.top = n.viewOffset + 'px');
      var f = Xa(e);
      if (
        !u &&
        f == 0 &&
        !t.force &&
        n.renderedView == n.view &&
        (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo)
      )
        return !1;
      var m = Tf(e);
      return (
        f > 4 && (n.lineDiv.style.display = 'none'),
        Cf(e, n.updateLineNumbers, t.dims),
        f > 4 && (n.lineDiv.style.display = ''),
        (n.renderedView = n.view),
        Lf(m),
        j(n.cursorDiv),
        j(n.selectionDiv),
        (n.gutters.style.height = n.sizer.style.minHeight = 0),
        u &&
          ((n.lastWrapHeight = t.wrapperHeight),
          (n.lastWrapWidth = t.wrapperWidth),
          In(e, 400)),
        (n.updateLineNumbers = null),
        !0
      );
    }
    function il(e, t) {
      for (var n = t.viewport, r = !0; ; r = !1) {
        if (!r || !e.options.lineWrapping || t.oldDisplayWidth == Er(e)) {
          if (
            (n &&
              n.top != null &&
              (n = {
                top: Math.min(e.doc.height + co(e.display) - fo(e), n.top),
              }),
            (t.visible = gi(e.display, e.doc, n)),
            t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo)
          )
            break;
        } else r && (t.visible = gi(e.display, e.doc, n));
        if (!Co(e, t)) break;
        hi(e);
        var i = Dn(e);
        zn(e), rn(e, i), Mo(e, i), (t.force = !1);
      }
      t.signal(e, 'update', e),
        (e.display.viewFrom != e.display.reportedViewFrom ||
          e.display.viewTo != e.display.reportedViewTo) &&
          (t.signal(
            e,
            'viewportChange',
            e,
            e.display.viewFrom,
            e.display.viewTo
          ),
          (e.display.reportedViewFrom = e.display.viewFrom),
          (e.display.reportedViewTo = e.display.viewTo));
    }
    function Eo(e, t) {
      var n = new vi(e, t);
      if (Co(e, n)) {
        hi(e), il(e, n);
        var r = Dn(e);
        zn(e), rn(e, r), Mo(e, r), n.finish();
      }
    }
    function Cf(e, t, n) {
      var r = e.display,
        i = e.options.lineNumbers,
        a = r.lineDiv,
        l = a.firstChild;
      function u(ie) {
        var ue = ie.nextSibling;
        return (
          g && H && e.display.currentWheelTarget == ie
            ? (ie.style.display = 'none')
            : ie.parentNode.removeChild(ie),
          ue
        );
      }
      for (var f = r.view, m = r.viewFrom, A = 0; A < f.length; A++) {
        var P = f[A];
        if (!P.hidden)
          if (!P.node || P.node.parentNode != a) {
            var J = Jc(e, P, m, n);
            a.insertBefore(J, l);
          } else {
            for (; l != P.node; ) l = u(l);
            var Y = i && t != null && t <= m && P.lineNumber;
            P.changes &&
              (Se(P.changes, 'gutter') > -1 && (Y = !1), Ma(e, P, m, n)),
              Y &&
                (j(P.lineNumber),
                P.lineNumber.appendChild(
                  document.createTextNode(he(e.options, m))
                )),
              (l = P.node.nextSibling);
          }
        m += P.size;
      }
      for (; l; ) l = u(l);
    }
    function zo(e) {
      var t = e.gutters.offsetWidth;
      (e.sizer.style.marginLeft = t + 'px'), ht(e, 'gutterChanged', e);
    }
    function Mo(e, t) {
      (e.display.sizer.style.minHeight = t.docHeight + 'px'),
        (e.display.heightForcer.style.top = t.docHeight + 'px'),
        (e.display.gutters.style.height =
          t.docHeight + e.display.barHeight + er(e) + 'px');
    }
    function ol(e) {
      var t = e.display,
        n = t.view;
      if (
        !(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))
      ) {
        for (
          var r = yo(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
            i = t.gutters.offsetWidth,
            a = r + 'px',
            l = 0;
          l < n.length;
          l++
        )
          if (!n[l].hidden) {
            e.options.fixedGutter &&
              (n[l].gutter && (n[l].gutter.style.left = a),
              n[l].gutterBackground && (n[l].gutterBackground.style.left = a));
            var u = n[l].alignable;
            if (u) for (var f = 0; f < u.length; f++) u[f].style.left = a;
          }
        e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
      }
    }
    function al(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc,
        n = he(e.options, t.first + t.size - 1),
        r = e.display;
      if (n.length != r.lineNumChars) {
        var i = r.measure.appendChild(
            _(
              'div',
              [_('div', n)],
              'CodeMirror-linenumber CodeMirror-gutter-elt'
            )
          ),
          a = i.firstChild.offsetWidth,
          l = i.offsetWidth - a;
        return (
          (r.lineGutter.style.width = ''),
          (r.lineNumInnerWidth = Math.max(a, r.lineGutter.offsetWidth - l) + 1),
          (r.lineNumWidth = r.lineNumInnerWidth + l),
          (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
          (r.lineGutter.style.width = r.lineNumWidth + 'px'),
          zo(e.display),
          !0
        );
      }
      return !1;
    }
    function Ao(e, t) {
      for (var n = [], r = !1, i = 0; i < e.length; i++) {
        var a = e[i],
          l = null;
        if (
          (typeof a != 'string' && ((l = a.style), (a = a.className)),
          a == 'CodeMirror-linenumbers')
        )
          if (t) r = !0;
          else continue;
        n.push({ className: a, style: l });
      }
      return (
        t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }),
        n
      );
    }
    function ll(e) {
      var t = e.gutters,
        n = e.gutterSpecs;
      j(t), (e.lineGutter = null);
      for (var r = 0; r < n.length; ++r) {
        var i = n[r],
          a = i.className,
          l = i.style,
          u = t.appendChild(_('div', null, 'CodeMirror-gutter ' + a));
        l && (u.style.cssText = l),
          a == 'CodeMirror-linenumbers' &&
            ((e.lineGutter = u),
            (u.style.width = (e.lineNumWidth || 1) + 'px'));
      }
      (t.style.display = n.length ? '' : 'none'), zo(e);
    }
    function Fn(e) {
      ll(e.display), zt(e), ol(e);
    }
    function Ef(e, t, n, r) {
      var i = this;
      (this.input = n),
        (i.scrollbarFiller = _('div', null, 'CodeMirror-scrollbar-filler')),
        i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
        (i.gutterFiller = _('div', null, 'CodeMirror-gutter-filler')),
        i.gutterFiller.setAttribute('cm-not-content', 'true'),
        (i.lineDiv = K('div', null, 'CodeMirror-code')),
        (i.selectionDiv = _(
          'div',
          null,
          null,
          'position: relative; z-index: 1'
        )),
        (i.cursorDiv = _('div', null, 'CodeMirror-cursors')),
        (i.measure = _('div', null, 'CodeMirror-measure')),
        (i.lineMeasure = _('div', null, 'CodeMirror-measure')),
        (i.lineSpace = K(
          'div',
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          'position: relative; outline: none'
        ));
      var a = K('div', [i.lineSpace], 'CodeMirror-lines');
      (i.mover = _('div', [a], null, 'position: relative')),
        (i.sizer = _('div', [i.mover], 'CodeMirror-sizer')),
        (i.sizerWidth = null),
        (i.heightForcer = _(
          'div',
          null,
          null,
          'position: absolute; height: ' + je + 'px; width: 1px;'
        )),
        (i.gutters = _('div', null, 'CodeMirror-gutters')),
        (i.lineGutter = null),
        (i.scroller = _(
          'div',
          [i.sizer, i.heightForcer, i.gutters],
          'CodeMirror-scroll'
        )),
        i.scroller.setAttribute('tabIndex', '-1'),
        (i.wrapper = _(
          'div',
          [i.scrollbarFiller, i.gutterFiller, i.scroller],
          'CodeMirror'
        )),
        x && c >= 105 && (i.wrapper.style.clipPath = 'inset(0px)'),
        i.wrapper.setAttribute('translate', 'no'),
        s &&
          p < 8 &&
          ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
        !g && !(v && M) && (i.scroller.draggable = !0),
        e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
        (i.viewFrom = i.viewTo = t.first),
        (i.reportedViewFrom = i.reportedViewTo = t.first),
        (i.view = []),
        (i.renderedView = null),
        (i.externalMeasured = null),
        (i.viewOffset = 0),
        (i.lastWrapHeight = i.lastWrapWidth = 0),
        (i.updateLineNumbers = null),
        (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
        (i.scrollbarsClipped = !1),
        (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
        (i.alignWidgets = !1),
        (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
        (i.maxLine = null),
        (i.maxLineLength = 0),
        (i.maxLineChanged = !1),
        (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
        (i.shift = !1),
        (i.selForContextMenu = null),
        (i.activeTouch = null),
        (i.gutterSpecs = Ao(r.gutters, r.lineNumbers)),
        ll(i),
        n.init(i);
    }
    var bi = 0,
      sr = null;
    s ? (sr = -0.53) : v ? (sr = 15) : x ? (sr = -0.7) : w && (sr = -1 / 3);
    function sl(e) {
      var t = e.wheelDeltaX,
        n = e.wheelDeltaY;
      return (
        t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
        n == null && e.detail && e.axis == e.VERTICAL_AXIS
          ? (n = e.detail)
          : n == null && (n = e.wheelDelta),
        { x: t, y: n }
      );
    }
    function zf(e) {
      var t = sl(e);
      return (t.x *= sr), (t.y *= sr), t;
    }
    function ul(e, t) {
      x &&
        c == 102 &&
        (e.display.chromeScrollHack == null
          ? (e.display.sizer.style.pointerEvents = 'none')
          : clearTimeout(e.display.chromeScrollHack),
        (e.display.chromeScrollHack = setTimeout(function () {
          (e.display.chromeScrollHack = null),
            (e.display.sizer.style.pointerEvents = '');
        }, 100)));
      var n = sl(t),
        r = n.x,
        i = n.y,
        a = sr;
      t.deltaMode === 0 && ((r = t.deltaX), (i = t.deltaY), (a = 1));
      var l = e.display,
        u = l.scroller,
        f = u.scrollWidth > u.clientWidth,
        m = u.scrollHeight > u.clientHeight;
      if ((r && f) || (i && m)) {
        if (i && H && g) {
          e: for (var A = t.target, P = l.view; A != u; A = A.parentNode)
            for (var J = 0; J < P.length; J++)
              if (P[J].node == A) {
                e.display.currentWheelTarget = A;
                break e;
              }
        }
        if (r && !v && !d && a != null) {
          i && m && An(e, Math.max(0, u.scrollTop + i * a)),
            Dr(e, Math.max(0, u.scrollLeft + r * a)),
            (!i || (i && m)) && kt(t),
            (l.wheelStartX = null);
          return;
        }
        if (i && a != null) {
          var Y = i * a,
            ie = e.doc.scrollTop,
            ue = ie + l.wrapper.clientHeight;
          Y < 0
            ? (ie = Math.max(0, ie + Y - 50))
            : (ue = Math.min(e.doc.height, ue + Y + 50)),
            Eo(e, { top: ie, bottom: ue });
        }
        bi < 20 &&
          t.deltaMode !== 0 &&
          (l.wheelStartX == null
            ? ((l.wheelStartX = u.scrollLeft),
              (l.wheelStartY = u.scrollTop),
              (l.wheelDX = r),
              (l.wheelDY = i),
              setTimeout(function () {
                if (l.wheelStartX != null) {
                  var me = u.scrollLeft - l.wheelStartX,
                    ve = u.scrollTop - l.wheelStartY,
                    _e =
                      (ve && l.wheelDY && ve / l.wheelDY) ||
                      (me && l.wheelDX && me / l.wheelDX);
                  (l.wheelStartX = l.wheelStartY = null),
                    _e && ((sr = (sr * bi + _e) / (bi + 1)), ++bi);
                }
              }, 200))
            : ((l.wheelDX += r), (l.wheelDY += i)));
      }
    }
    var Rt = function (e, t) {
      (this.ranges = e), (this.primIndex = t);
    };
    (Rt.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }),
      (Rt.prototype.equals = function (e) {
        if (e == this) return !0;
        if (
          e.primIndex != this.primIndex ||
          e.ranges.length != this.ranges.length
        )
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t],
            r = e.ranges[t];
          if (!Xe(n.anchor, r.anchor) || !Xe(n.head, r.head)) return !1;
        }
        return !0;
      }),
      (Rt.prototype.deepCopy = function () {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new Ye(pt(this.ranges[t].anchor), pt(this.ranges[t].head));
        return new Rt(e, this.primIndex);
      }),
      (Rt.prototype.somethingSelected = function () {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty()) return !0;
        return !1;
      }),
      (Rt.prototype.contains = function (e, t) {
        t || (t = e);
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (ye(t, r.from()) >= 0 && ye(e, r.to()) <= 0) return n;
        }
        return -1;
      });
    var Ye = function (e, t) {
      (this.anchor = e), (this.head = t);
    };
    (Ye.prototype.from = function () {
      return Zr(this.anchor, this.head);
    }),
      (Ye.prototype.to = function () {
        return Et(this.anchor, this.head);
      }),
      (Ye.prototype.empty = function () {
        return (
          this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        );
      });
    function Yt(e, t, n) {
      var r = e && e.options.selectionsMayTouch,
        i = t[n];
      t.sort(function (J, Y) {
        return ye(J.from(), Y.from());
      }),
        (n = Se(t, i));
      for (var a = 1; a < t.length; a++) {
        var l = t[a],
          u = t[a - 1],
          f = ye(u.to(), l.from());
        if (r && !l.empty() ? f > 0 : f >= 0) {
          var m = Zr(u.from(), l.from()),
            A = Et(u.to(), l.to()),
            P = u.empty() ? l.from() == l.head : u.from() == u.head;
          a <= n && --n, t.splice(--a, 2, new Ye(P ? A : m, P ? m : A));
        }
      }
      return new Rt(t, n);
    }
    function yr(e, t) {
      return new Rt([new Ye(e, t || e)], 0);
    }
    function xr(e) {
      return e.text
        ? ne(
            e.from.line + e.text.length - 1,
            ce(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
          )
        : e.to;
    }
    function cl(e, t) {
      if (ye(e, t.from) < 0) return e;
      if (ye(e, t.to) <= 0) return xr(t);
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
        r = e.ch;
      return e.line == t.to.line && (r += xr(t).ch - t.to.ch), ne(n, r);
    }
    function Do(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
        var i = e.sel.ranges[r];
        n.push(new Ye(cl(i.anchor, t), cl(i.head, t)));
      }
      return Yt(e.cm, n, e.sel.primIndex);
    }
    function fl(e, t, n) {
      return e.line == t.line
        ? ne(n.line, e.ch - t.ch + n.ch)
        : ne(n.line + (e.line - t.line), e.ch);
    }
    function Mf(e, t, n) {
      for (var r = [], i = ne(e.first, 0), a = i, l = 0; l < t.length; l++) {
        var u = t[l],
          f = fl(u.from, i, a),
          m = fl(xr(u), i, a);
        if (((i = u.to), (a = m), n == 'around')) {
          var A = e.sel.ranges[l],
            P = ye(A.head, A.anchor) < 0;
          r[l] = new Ye(P ? m : f, P ? f : m);
        } else r[l] = new Ye(f, f);
      }
      return new Rt(r, e.sel.primIndex);
    }
    function qo(e) {
      (e.doc.mode = $r(e.options, e.doc.modeOption)), Nn(e);
    }
    function Nn(e) {
      e.doc.iter(function (t) {
        t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
      }),
        (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
        In(e, 100),
        e.state.modeGen++,
        e.curOp && zt(e);
    }
    function dl(e, t) {
      return (
        t.from.ch == 0 &&
        t.to.ch == 0 &&
        ce(t.text) == '' &&
        (!e.cm || e.cm.options.wholeLineUpdateBefore)
      );
    }
    function Io(e, t, n, r) {
      function i(_e) {
        return n ? n[_e] : null;
      }
      function a(_e, be, Ce) {
        Oc(_e, be, Ce, r), ht(_e, 'change', _e, t);
      }
      function l(_e, be) {
        for (var Ce = [], Ne = _e; Ne < be; ++Ne)
          Ce.push(new Xr(m[Ne], i(Ne), r));
        return Ce;
      }
      var u = t.from,
        f = t.to,
        m = t.text,
        A = Ae(e, u.line),
        P = Ae(e, f.line),
        J = ce(m),
        Y = i(m.length - 1),
        ie = f.line - u.line;
      if (t.full)
        e.insert(0, l(0, m.length)), e.remove(m.length, e.size - m.length);
      else if (dl(e, t)) {
        var ue = l(0, m.length - 1);
        a(P, P.text, Y),
          ie && e.remove(u.line, ie),
          ue.length && e.insert(u.line, ue);
      } else if (A == P)
        if (m.length == 1)
          a(A, A.text.slice(0, u.ch) + J + A.text.slice(f.ch), Y);
        else {
          var me = l(1, m.length - 1);
          me.push(new Xr(J + A.text.slice(f.ch), Y, r)),
            a(A, A.text.slice(0, u.ch) + m[0], i(0)),
            e.insert(u.line + 1, me);
        }
      else if (m.length == 1)
        a(A, A.text.slice(0, u.ch) + m[0] + P.text.slice(f.ch), i(0)),
          e.remove(u.line + 1, ie);
      else {
        a(A, A.text.slice(0, u.ch) + m[0], i(0)),
          a(P, J + P.text.slice(f.ch), Y);
        var ve = l(1, m.length - 1);
        ie > 1 && e.remove(u.line + 1, ie - 1), e.insert(u.line + 1, ve);
      }
      ht(e, 'change', e, t);
    }
    function _r(e, t, n) {
      function r(i, a, l) {
        if (i.linked)
          for (var u = 0; u < i.linked.length; ++u) {
            var f = i.linked[u];
            if (f.doc != a) {
              var m = l && f.sharedHist;
              (n && !m) || (t(f.doc, m), r(f.doc, i, m));
            }
          }
      }
      r(e, null, !0);
    }
    function pl(e, t) {
      if (t.cm) throw new Error('This document is already in use.');
      (e.doc = t),
        (t.cm = e),
        xo(e),
        qo(e),
        hl(e),
        (e.options.direction = t.direction),
        e.options.lineWrapping || so(e),
        (e.options.mode = t.modeOption),
        zt(e);
    }
    function hl(e) {
      (e.doc.direction == 'rtl' ? le : Q)(e.display.lineDiv, 'CodeMirror-rtl');
    }
    function Af(e) {
      Nt(e, function () {
        hl(e), zt(e);
      });
    }
    function yi(e) {
      (this.done = []),
        (this.undone = []),
        (this.undoDepth = e ? e.undoDepth : 1 / 0),
        (this.lastModTime = this.lastSelTime = 0),
        (this.lastOp = this.lastSelOp = null),
        (this.lastOrigin = this.lastSelOrigin = null),
        (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
    }
    function Fo(e, t) {
      var n = { from: pt(t.from), to: xr(t), text: ir(e, t.from, t.to) };
      return (
        vl(e, n, t.from.line, t.to.line + 1),
        _r(
          e,
          function (r) {
            return vl(r, n, t.from.line, t.to.line + 1);
          },
          !0
        ),
        n
      );
    }
    function gl(e) {
      for (; e.length; ) {
        var t = ce(e);
        if (t.ranges) e.pop();
        else break;
      }
    }
    function Df(e, t) {
      if (t) return gl(e.done), ce(e.done);
      if (e.done.length && !ce(e.done).ranges) return ce(e.done);
      if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
        return e.done.pop(), ce(e.done);
    }
    function ml(e, t, n, r) {
      var i = e.history;
      i.undone.length = 0;
      var a = +new Date(),
        l,
        u;
      if (
        (i.lastOp == r ||
          (i.lastOrigin == t.origin &&
            t.origin &&
            ((t.origin.charAt(0) == '+' &&
              i.lastModTime >
                a - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
              t.origin.charAt(0) == '*'))) &&
        (l = Df(i, i.lastOp == r))
      )
        (u = ce(l.changes)),
          ye(t.from, t.to) == 0 && ye(t.from, u.to) == 0
            ? (u.to = xr(t))
            : l.changes.push(Fo(e, t));
      else {
        var f = ce(i.done);
        for (
          (!f || !f.ranges) && xi(e.sel, i.done),
            l = { changes: [Fo(e, t)], generation: i.generation },
            i.done.push(l);
          i.done.length > i.undoDepth;

        )
          i.done.shift(), i.done[0].ranges || i.done.shift();
      }
      i.done.push(n),
        (i.generation = ++i.maxGeneration),
        (i.lastModTime = i.lastSelTime = a),
        (i.lastOp = i.lastSelOp = r),
        (i.lastOrigin = i.lastSelOrigin = t.origin),
        u || it(e, 'historyAdded');
    }
    function qf(e, t, n, r) {
      var i = t.charAt(0);
      return (
        i == '*' ||
        (i == '+' &&
          n.ranges.length == r.ranges.length &&
          n.somethingSelected() == r.somethingSelected() &&
          new Date() - e.history.lastSelTime <=
            (e.cm ? e.cm.options.historyEventDelay : 500))
      );
    }
    function If(e, t, n, r) {
      var i = e.history,
        a = r && r.origin;
      n == i.lastSelOp ||
      (a &&
        i.lastSelOrigin == a &&
        ((i.lastModTime == i.lastSelTime && i.lastOrigin == a) ||
          qf(e, a, ce(i.done), t)))
        ? (i.done[i.done.length - 1] = t)
        : xi(t, i.done),
        (i.lastSelTime = +new Date()),
        (i.lastSelOrigin = a),
        (i.lastSelOp = n),
        r && r.clearRedo !== !1 && gl(i.undone);
    }
    function xi(e, t) {
      var n = ce(t);
      (n && n.ranges && n.equals(e)) || t.push(e);
    }
    function vl(e, t, n, r) {
      var i = t['spans_' + e.id],
        a = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (l) {
        l.markedSpans &&
          ((i || (i = t['spans_' + e.id] = {}))[a] = l.markedSpans),
          ++a;
      });
    }
    function Ff(e) {
      if (!e) return null;
      for (var t, n = 0; n < e.length; ++n)
        e[n].marker.explicitlyCleared
          ? t || (t = e.slice(0, n))
          : t && t.push(e[n]);
      return t ? (t.length ? t : null) : e;
    }
    function Nf(e, t) {
      var n = t['spans_' + e.id];
      if (!n) return null;
      for (var r = [], i = 0; i < t.text.length; ++i) r.push(Ff(n[i]));
      return r;
    }
    function bl(e, t) {
      var n = Nf(e, t),
        r = io(e, t);
      if (!n) return r;
      if (!r) return n;
      for (var i = 0; i < n.length; ++i) {
        var a = n[i],
          l = r[i];
        if (a && l)
          e: for (var u = 0; u < l.length; ++u) {
            for (var f = l[u], m = 0; m < a.length; ++m)
              if (a[m].marker == f.marker) continue e;
            a.push(f);
          }
        else l && (n[i] = l);
      }
      return n;
    }
    function nn(e, t, n) {
      for (var r = [], i = 0; i < e.length; ++i) {
        var a = e[i];
        if (a.ranges) {
          r.push(n ? Rt.prototype.deepCopy.call(a) : a);
          continue;
        }
        var l = a.changes,
          u = [];
        r.push({ changes: u });
        for (var f = 0; f < l.length; ++f) {
          var m = l[f],
            A = void 0;
          if ((u.push({ from: m.from, to: m.to, text: m.text }), t))
            for (var P in m)
              (A = P.match(/^spans_(\d+)$/)) &&
                Se(t, Number(A[1])) > -1 &&
                ((ce(u)[P] = m[P]), delete m[P]);
        }
      }
      return r;
    }
    function No(e, t, n, r) {
      if (r) {
        var i = e.anchor;
        if (n) {
          var a = ye(t, i) < 0;
          a != ye(n, i) < 0 ? ((i = t), (t = n)) : a != ye(t, n) < 0 && (t = n);
        }
        return new Ye(i, t);
      } else return new Ye(n || t, t);
    }
    function _i(e, t, n, r, i) {
      i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
        wt(e, new Rt([No(e.sel.primary(), t, n, i)], 0), r);
    }
    function yl(e, t, n) {
      for (
        var r = [], i = e.cm && (e.cm.display.shift || e.extend), a = 0;
        a < e.sel.ranges.length;
        a++
      )
        r[a] = No(e.sel.ranges[a], t[a], null, i);
      var l = Yt(e.cm, r, e.sel.primIndex);
      wt(e, l, n);
    }
    function Oo(e, t, n, r) {
      var i = e.sel.ranges.slice(0);
      (i[t] = n), wt(e, Yt(e.cm, i, e.sel.primIndex), r);
    }
    function xl(e, t, n, r) {
      wt(e, yr(t, n), r);
    }
    function Of(e, t, n) {
      var r = {
        ranges: t.ranges,
        update: function (i) {
          this.ranges = [];
          for (var a = 0; a < i.length; a++)
            this.ranges[a] = new Ye(Re(e, i[a].anchor), Re(e, i[a].head));
        },
        origin: n && n.origin,
      };
      return (
        it(e, 'beforeSelectionChange', e, r),
        e.cm && it(e.cm, 'beforeSelectionChange', e.cm, r),
        r.ranges != t.ranges ? Yt(e.cm, r.ranges, r.ranges.length - 1) : t
      );
    }
    function _l(e, t, n) {
      var r = e.history.done,
        i = ce(r);
      i && i.ranges ? ((r[r.length - 1] = t), ki(e, t, n)) : wt(e, t, n);
    }
    function wt(e, t, n) {
      ki(e, t, n), If(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
    }
    function ki(e, t, n) {
      (Ft(e, 'beforeSelectionChange') ||
        (e.cm && Ft(e.cm, 'beforeSelectionChange'))) &&
        (t = Of(e, t, n));
      var r =
        (n && n.bias) ||
        (ye(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
      kl(e, Sl(e, t, r, !0)),
        !(n && n.scroll === !1) &&
          e.cm &&
          e.cm.getOption('readOnly') != 'nocursor' &&
          tn(e.cm);
    }
    function kl(e, t) {
      t.equals(e.sel) ||
        ((e.sel = t),
        e.cm &&
          ((e.cm.curOp.updateInput = 1),
          (e.cm.curOp.selectionChanged = !0),
          Ht(e.cm)),
        ht(e, 'cursorActivity', e));
    }
    function wl(e) {
      kl(e, Sl(e, e.sel, null, !1));
    }
    function Sl(e, t, n, r) {
      for (var i, a = 0; a < t.ranges.length; a++) {
        var l = t.ranges[a],
          u = t.ranges.length == e.sel.ranges.length && e.sel.ranges[a],
          f = wi(e, l.anchor, u && u.anchor, n, r),
          m = l.head == l.anchor ? f : wi(e, l.head, u && u.head, n, r);
        (i || f != l.anchor || m != l.head) &&
          (i || (i = t.ranges.slice(0, a)), (i[a] = new Ye(f, m)));
      }
      return i ? Yt(e.cm, i, t.primIndex) : t;
    }
    function on(e, t, n, r, i) {
      var a = Ae(e, t.line);
      if (a.markedSpans)
        for (var l = 0; l < a.markedSpans.length; ++l) {
          var u = a.markedSpans[l],
            f = u.marker,
            m = 'selectLeft' in f ? !f.selectLeft : f.inclusiveLeft,
            A = 'selectRight' in f ? !f.selectRight : f.inclusiveRight;
          if (
            (u.from == null || (m ? u.from <= t.ch : u.from < t.ch)) &&
            (u.to == null || (A ? u.to >= t.ch : u.to > t.ch))
          ) {
            if (i && (it(f, 'beforeCursorEnter'), f.explicitlyCleared))
              if (a.markedSpans) {
                --l;
                continue;
              } else break;
            if (!f.atomic) continue;
            if (n) {
              var P = f.find(r < 0 ? 1 : -1),
                J = void 0;
              if (
                ((r < 0 ? A : m) &&
                  (P = Tl(e, P, -r, P && P.line == t.line ? a : null)),
                P &&
                  P.line == t.line &&
                  (J = ye(P, n)) &&
                  (r < 0 ? J < 0 : J > 0))
              )
                return on(e, P, t, r, i);
            }
            var Y = f.find(r < 0 ? -1 : 1);
            return (
              (r < 0 ? m : A) && (Y = Tl(e, Y, r, Y.line == t.line ? a : null)),
              Y ? on(e, Y, t, r, i) : null
            );
          }
        }
      return t;
    }
    function wi(e, t, n, r, i) {
      var a = r || 1,
        l =
          on(e, t, n, a, i) ||
          (!i && on(e, t, n, a, !0)) ||
          on(e, t, n, -a, i) ||
          (!i && on(e, t, n, -a, !0));
      return l || ((e.cantEdit = !0), ne(e.first, 0));
    }
    function Tl(e, t, n, r) {
      return n < 0 && t.ch == 0
        ? t.line > e.first
          ? Re(e, ne(t.line - 1))
          : null
        : n > 0 && t.ch == (r || Ae(e, t.line)).text.length
          ? t.line < e.first + e.size - 1
            ? ne(t.line + 1, 0)
            : null
          : new ne(t.line, t.ch + n);
    }
    function Ll(e) {
      e.setSelection(ne(e.firstLine(), 0), ne(e.lastLine()), ke);
    }
    function Cl(e, t, n) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function () {
          return (r.canceled = !0);
        },
      };
      return (
        n &&
          (r.update = function (i, a, l, u) {
            i && (r.from = Re(e, i)),
              a && (r.to = Re(e, a)),
              l && (r.text = l),
              u !== void 0 && (r.origin = u);
          }),
        it(e, 'beforeChange', e, r),
        e.cm && it(e.cm, 'beforeChange', e.cm, r),
        r.canceled
          ? (e.cm && (e.cm.curOp.updateInput = 2), null)
          : { from: r.from, to: r.to, text: r.text, origin: r.origin }
      );
    }
    function an(e, t, n) {
      if (e.cm) {
        if (!e.cm.curOp) return gt(e.cm, an)(e, t, n);
        if (e.cm.state.suppressEdits) return;
      }
      if (
        !(
          (Ft(e, 'beforeChange') || (e.cm && Ft(e.cm, 'beforeChange'))) &&
          ((t = Cl(e, t, !0)), !t)
        )
      ) {
        var r = ba && !n && qc(e, t.from, t.to);
        if (r)
          for (var i = r.length - 1; i >= 0; --i)
            El(e, {
              from: r[i].from,
              to: r[i].to,
              text: i ? [''] : t.text,
              origin: t.origin,
            });
        else El(e, t);
      }
    }
    function El(e, t) {
      if (!(t.text.length == 1 && t.text[0] == '' && ye(t.from, t.to) == 0)) {
        var n = Do(e, t);
        ml(e, t, n, e.cm ? e.cm.curOp.id : NaN), On(e, t, n, io(e, t));
        var r = [];
        _r(e, function (i, a) {
          !a && Se(r, i.history) == -1 && (Dl(i.history, t), r.push(i.history)),
            On(i, t, null, io(i, t));
        });
      }
    }
    function Si(e, t, n) {
      var r = e.cm && e.cm.state.suppressEdits;
      if (!(r && !n)) {
        for (
          var i = e.history,
            a,
            l = e.sel,
            u = t == 'undo' ? i.done : i.undone,
            f = t == 'undo' ? i.undone : i.done,
            m = 0;
          m < u.length &&
          ((a = u[m]), !(n ? a.ranges && !a.equals(e.sel) : !a.ranges));
          m++
        );
        if (m != u.length) {
          for (i.lastOrigin = i.lastSelOrigin = null; ; )
            if (((a = u.pop()), a.ranges)) {
              if ((xi(a, f), n && !a.equals(e.sel))) {
                wt(e, a, { clearRedo: !1 });
                return;
              }
              l = a;
            } else if (r) {
              u.push(a);
              return;
            } else break;
          var A = [];
          xi(l, f),
            f.push({ changes: A, generation: i.generation }),
            (i.generation = a.generation || ++i.maxGeneration);
          for (
            var P = Ft(e, 'beforeChange') || (e.cm && Ft(e.cm, 'beforeChange')),
              J = function (ue) {
                var me = a.changes[ue];
                if (((me.origin = t), P && !Cl(e, me, !1)))
                  return (u.length = 0), {};
                A.push(Fo(e, me));
                var ve = ue ? Do(e, me) : ce(u);
                On(e, me, ve, bl(e, me)),
                  !ue &&
                    e.cm &&
                    e.cm.scrollIntoView({ from: me.from, to: xr(me) });
                var _e = [];
                _r(e, function (be, Ce) {
                  !Ce &&
                    Se(_e, be.history) == -1 &&
                    (Dl(be.history, me), _e.push(be.history)),
                    On(be, me, null, bl(be, me));
                });
              },
              Y = a.changes.length - 1;
            Y >= 0;
            --Y
          ) {
            var ie = J(Y);
            if (ie) return ie.v;
          }
        }
      }
    }
    function zl(e, t) {
      if (
        t != 0 &&
        ((e.first += t),
        (e.sel = new Rt(
          Be(e.sel.ranges, function (i) {
            return new Ye(
              ne(i.anchor.line + t, i.anchor.ch),
              ne(i.head.line + t, i.head.ch)
            );
          }),
          e.sel.primIndex
        )),
        e.cm)
      ) {
        zt(e.cm, e.first, e.first - t, t);
        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
          vr(e.cm, r, 'gutter');
      }
    }
    function On(e, t, n, r) {
      if (e.cm && !e.cm.curOp) return gt(e.cm, On)(e, t, n, r);
      if (t.to.line < e.first) {
        zl(e, t.text.length - 1 - (t.to.line - t.from.line));
        return;
      }
      if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var i = t.text.length - 1 - (e.first - t.from.line);
          zl(e, i),
            (t = {
              from: ne(e.first, 0),
              to: ne(t.to.line + i, t.to.ch),
              text: [ce(t.text)],
              origin: t.origin,
            });
        }
        var a = e.lastLine();
        t.to.line > a &&
          (t = {
            from: t.from,
            to: ne(a, Ae(e, a).text.length),
            text: [t.text[0]],
            origin: t.origin,
          }),
          (t.removed = ir(e, t.from, t.to)),
          n || (n = Do(e, t)),
          e.cm ? Pf(e.cm, t, r) : Io(e, t, r),
          ki(e, n, ke),
          e.cantEdit && wi(e, ne(e.firstLine(), 0)) && (e.cantEdit = !1);
      }
    }
    function Pf(e, t, n) {
      var r = e.doc,
        i = e.display,
        a = t.from,
        l = t.to,
        u = !1,
        f = a.line;
      e.options.lineWrapping ||
        ((f = k(Zt(Ae(r, a.line)))),
        r.iter(f, l.line + 1, function (Y) {
          if (Y == i.maxLine) return (u = !0), !0;
        })),
        r.sel.contains(t.from, t.to) > -1 && Ht(e),
        Io(r, t, n, Za(e)),
        e.options.lineWrapping ||
          (r.iter(f, a.line + t.text.length, function (Y) {
            var ie = li(Y);
            ie > i.maxLineLength &&
              ((i.maxLine = Y),
              (i.maxLineLength = ie),
              (i.maxLineChanged = !0),
              (u = !1));
          }),
          u && (e.curOp.updateMaxLine = !0)),
        Lc(r, a.line),
        In(e, 400);
      var m = t.text.length - (l.line - a.line) - 1;
      t.full
        ? zt(e)
        : a.line == l.line && t.text.length == 1 && !dl(e.doc, t)
          ? vr(e, a.line, 'text')
          : zt(e, a.line, l.line + 1, m);
      var A = Ft(e, 'changes'),
        P = Ft(e, 'change');
      if (P || A) {
        var J = {
          from: a,
          to: l,
          text: t.text,
          removed: t.removed,
          origin: t.origin,
        };
        P && ht(e, 'change', e, J),
          A && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(J);
      }
      e.display.selForContextMenu = null;
    }
    function ln(e, t, n, r, i) {
      var a;
      r || (r = n),
        ye(r, n) < 0 && ((a = [r, n]), (n = a[0]), (r = a[1])),
        typeof t == 'string' && (t = e.splitLines(t)),
        an(e, { from: n, to: r, text: t, origin: i });
    }
    function Ml(e, t, n, r) {
      n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
    }
    function Al(e, t, n, r) {
      for (var i = 0; i < e.length; ++i) {
        var a = e[i],
          l = !0;
        if (a.ranges) {
          a.copied || ((a = e[i] = a.deepCopy()), (a.copied = !0));
          for (var u = 0; u < a.ranges.length; u++)
            Ml(a.ranges[u].anchor, t, n, r), Ml(a.ranges[u].head, t, n, r);
          continue;
        }
        for (var f = 0; f < a.changes.length; ++f) {
          var m = a.changes[f];
          if (n < m.from.line)
            (m.from = ne(m.from.line + r, m.from.ch)),
              (m.to = ne(m.to.line + r, m.to.ch));
          else if (t <= m.to.line) {
            l = !1;
            break;
          }
        }
        l || (e.splice(0, i + 1), (i = 0));
      }
    }
    function Dl(e, t) {
      var n = t.from.line,
        r = t.to.line,
        i = t.text.length - (r - n) - 1;
      Al(e.done, n, r, i), Al(e.undone, n, r, i);
    }
    function Pn(e, t, n, r) {
      var i = t,
        a = t;
      return (
        typeof t == 'number' ? (a = Ae(e, ua(e, t))) : (i = k(t)),
        i == null ? null : (r(a, i) && e.cm && vr(e.cm, i, n), a)
      );
    }
    function jn(e) {
      (this.lines = e), (this.parent = null);
      for (var t = 0, n = 0; n < e.length; ++n)
        (e[n].parent = this), (t += e[n].height);
      this.height = t;
    }
    jn.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (e, t) {
        for (var n = e, r = e + t; n < r; ++n) {
          var i = this.lines[n];
          (this.height -= i.height), Pc(i), ht(i, 'delete');
        }
        this.lines.splice(e, t);
      },
      collapse: function (e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function (e, t, n) {
        (this.height += n),
          (this.lines = this.lines
            .slice(0, e)
            .concat(t)
            .concat(this.lines.slice(e)));
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      },
      iterN: function (e, t, n) {
        for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
      },
    };
    function Rn(e) {
      this.children = e;
      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
        var i = e[r];
        (t += i.chunkSize()), (n += i.height), (i.parent = this);
      }
      (this.size = t), (this.height = n), (this.parent = null);
    }
    Rn.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (e, t) {
        this.size -= t;
        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
            i = r.chunkSize();
          if (e < i) {
            var a = Math.min(t, i - e),
              l = r.height;
            if (
              (r.removeInner(e, a),
              (this.height -= l - r.height),
              i == a && (this.children.splice(n--, 1), (r.parent = null)),
              (t -= a) == 0)
            )
              break;
            e = 0;
          } else e -= i;
        }
        if (
          this.size - t < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof jn))
        ) {
          var u = [];
          this.collapse(u),
            (this.children = [new jn(u)]),
            (this.children[0].parent = this);
        }
      },
      collapse: function (e) {
        for (var t = 0; t < this.children.length; ++t)
          this.children[t].collapse(e);
      },
      insertInner: function (e, t, n) {
        (this.size += t.length), (this.height += n);
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            a = i.chunkSize();
          if (e <= a) {
            if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
              for (
                var l = (i.lines.length % 25) + 25, u = l;
                u < i.lines.length;

              ) {
                var f = new jn(i.lines.slice(u, (u += 25)));
                (i.height -= f.height),
                  this.children.splice(++r, 0, f),
                  (f.parent = this);
              }
              (i.lines = i.lines.slice(0, l)), this.maybeSpill();
            }
            break;
          }
          e -= a;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t = e.children.splice(e.children.length - 5, 5),
              n = new Rn(t);
            if (e.parent) {
              (e.size -= n.size), (e.height -= n.height);
              var i = Se(e.parent.children, e);
              e.parent.children.splice(i + 1, 0, n);
            } else {
              var r = new Rn(e.children);
              (r.parent = e), (e.children = [r, n]), (e = r);
            }
            n.parent = e.parent;
          } while (e.children.length > 10);
          e.parent.maybeSpill();
        }
      },
      iterN: function (e, t, n) {
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            a = i.chunkSize();
          if (e < a) {
            var l = Math.min(t, a - e);
            if (i.iterN(e, l, n)) return !0;
            if ((t -= l) == 0) break;
            e = 0;
          } else e -= a;
        }
      },
    };
    var Hn = function (e, t, n) {
      if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
      (this.doc = e), (this.node = t);
    };
    (Hn.prototype.clear = function () {
      var e = this.doc.cm,
        t = this.line.widgets,
        n = this.line,
        r = k(n);
      if (!(r == null || !t)) {
        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
        t.length || (n.widgets = null);
        var a = Cn(this);
        jt(n, Math.max(0, n.height - a)),
          e &&
            (Nt(e, function () {
              ql(e, n, -a), vr(e, r, 'widget');
            }),
            ht(e, 'lineWidgetCleared', e, this, r));
      }
    }),
      (Hn.prototype.changed = function () {
        var e = this,
          t = this.height,
          n = this.doc.cm,
          r = this.line;
        this.height = null;
        var i = Cn(this) - t;
        i &&
          (mr(this.doc, r) || jt(r, r.height + i),
          n &&
            Nt(n, function () {
              (n.curOp.forceUpdate = !0),
                ql(n, r, i),
                ht(n, 'lineWidgetChanged', n, e, k(r));
            }));
      }),
      Wt(Hn);
    function ql(e, t, n) {
      ar(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Lo(e, n);
    }
    function jf(e, t, n, r) {
      var i = new Hn(e, n, r),
        a = e.cm;
      return (
        a && i.noHScroll && (a.display.alignWidgets = !0),
        Pn(e, t, 'widget', function (l) {
          var u = l.widgets || (l.widgets = []);
          if (
            (i.insertAt == null
              ? u.push(i)
              : u.splice(Math.min(u.length, Math.max(0, i.insertAt)), 0, i),
            (i.line = l),
            a && !mr(e, l))
          ) {
            var f = ar(l) < e.scrollTop;
            jt(l, l.height + Cn(i)),
              f && Lo(a, i.height),
              (a.curOp.forceUpdate = !0);
          }
          return !0;
        }),
        a && ht(a, 'lineWidgetAdded', a, i, typeof t == 'number' ? t : k(t)),
        i
      );
    }
    var Il = 0,
      kr = function (e, t) {
        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Il);
      };
    (kr.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var e = this.doc.cm,
          t = e && !e.curOp;
        if ((t && Ir(e), Ft(this, 'clear'))) {
          var n = this.find();
          n && ht(this, 'clear', n.from, n.to);
        }
        for (var r = null, i = null, a = 0; a < this.lines.length; ++a) {
          var l = this.lines[a],
            u = Sn(l.markedSpans, this);
          e && !this.collapsed
            ? vr(e, k(l), 'text')
            : e && (u.to != null && (i = k(l)), u.from != null && (r = k(l))),
            (l.markedSpans = zc(l.markedSpans, u)),
            u.from == null &&
              this.collapsed &&
              !mr(this.doc, l) &&
              e &&
              jt(l, Vr(e.display));
        }
        if (e && this.collapsed && !e.options.lineWrapping)
          for (var f = 0; f < this.lines.length; ++f) {
            var m = Zt(this.lines[f]),
              A = li(m);
            A > e.display.maxLineLength &&
              ((e.display.maxLine = m),
              (e.display.maxLineLength = A),
              (e.display.maxLineChanged = !0));
          }
        r != null && e && this.collapsed && zt(e, r, i + 1),
          (this.lines.length = 0),
          (this.explicitlyCleared = !0),
          this.atomic &&
            this.doc.cantEdit &&
            ((this.doc.cantEdit = !1), e && wl(e.doc)),
          e && ht(e, 'markerCleared', e, this, r, i),
          t && Fr(e),
          this.parent && this.parent.clear();
      }
    }),
      (kr.prototype.find = function (e, t) {
        e == null && this.type == 'bookmark' && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
          var a = this.lines[i],
            l = Sn(a.markedSpans, this);
          if (l.from != null && ((n = ne(t ? a : k(a), l.from)), e == -1))
            return n;
          if (l.to != null && ((r = ne(t ? a : k(a), l.to)), e == 1)) return r;
        }
        return n && { from: n, to: r };
      }),
      (kr.prototype.changed = function () {
        var e = this,
          t = this.find(-1, !0),
          n = this,
          r = this.doc.cm;
        !t ||
          !r ||
          Nt(r, function () {
            var i = t.line,
              a = k(t.line),
              l = po(r, a);
            if (
              (l &&
                (Ra(l), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
              (r.curOp.updateMaxLine = !0),
              !mr(n.doc, i) && n.height != null)
            ) {
              var u = n.height;
              n.height = null;
              var f = Cn(n) - u;
              f && jt(i, i.height + f);
            }
            ht(r, 'markerChanged', r, e);
          });
      }),
      (kr.prototype.attachLine = function (e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || Se(t.maybeHiddenMarkers, this) == -1) &&
            (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
              this
            );
        }
        this.lines.push(e);
      }),
      (kr.prototype.detachLine = function (e) {
        if (
          (this.lines.splice(Se(this.lines, e), 1),
          !this.lines.length && this.doc.cm)
        ) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }),
      Wt(kr);
    function sn(e, t, n, r, i) {
      if (r && r.shared) return Rf(e, t, n, r, i);
      if (e.cm && !e.cm.curOp) return gt(e.cm, sn)(e, t, n, r, i);
      var a = new kr(e, i),
        l = ye(t, n);
      if ((r && ge(r, a, !1), l > 0 || (l == 0 && a.clearWhenEmpty !== !1)))
        return a;
      if (
        (a.replacedWith &&
          ((a.collapsed = !0),
          (a.widgetNode = K('span', [a.replacedWith], 'CodeMirror-widget')),
          r.handleMouseEvents ||
            a.widgetNode.setAttribute('cm-ignore-events', 'true'),
          r.insertLeft && (a.widgetNode.insertLeft = !0)),
        a.collapsed)
      ) {
        if (
          Sa(e, t.line, t, n, a) ||
          (t.line != n.line && Sa(e, n.line, t, n, a))
        )
          throw new Error(
            'Inserting collapsed marker partially overlapping an existing one'
          );
        Ec();
      }
      a.addToHistory &&
        ml(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
      var u = t.line,
        f = e.cm,
        m;
      if (
        (e.iter(u, n.line + 1, function (P) {
          f &&
            a.collapsed &&
            !f.options.lineWrapping &&
            Zt(P) == f.display.maxLine &&
            (m = !0),
            a.collapsed && u != t.line && jt(P, 0),
            Mc(
              P,
              new ni(a, u == t.line ? t.ch : null, u == n.line ? n.ch : null),
              e.cm && e.cm.curOp
            ),
            ++u;
        }),
        a.collapsed &&
          e.iter(t.line, n.line + 1, function (P) {
            mr(e, P) && jt(P, 0);
          }),
        a.clearOnEnter &&
          Fe(a, 'beforeCursorEnter', function () {
            return a.clear();
          }),
        a.readOnly &&
          (Cc(),
          (e.history.done.length || e.history.undone.length) &&
            e.clearHistory()),
        a.collapsed && ((a.id = ++Il), (a.atomic = !0)),
        f)
      ) {
        if ((m && (f.curOp.updateMaxLine = !0), a.collapsed))
          zt(f, t.line, n.line + 1);
        else if (
          a.className ||
          a.startStyle ||
          a.endStyle ||
          a.css ||
          a.attributes ||
          a.title
        )
          for (var A = t.line; A <= n.line; A++) vr(f, A, 'text');
        a.atomic && wl(f.doc), ht(f, 'markerAdded', f, a);
      }
      return a;
    }
    var Bn = function (e, t) {
      (this.markers = e), (this.primary = t);
      for (var n = 0; n < e.length; ++n) e[n].parent = this;
    };
    (Bn.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
        ht(this, 'clear');
      }
    }),
      (Bn.prototype.find = function (e, t) {
        return this.primary.find(e, t);
      }),
      Wt(Bn);
    function Rf(e, t, n, r, i) {
      (r = ge(r)), (r.shared = !1);
      var a = [sn(e, t, n, r, i)],
        l = a[0],
        u = r.widgetNode;
      return (
        _r(e, function (f) {
          u && (r.widgetNode = u.cloneNode(!0)),
            a.push(sn(f, Re(f, t), Re(f, n), r, i));
          for (var m = 0; m < f.linked.length; ++m)
            if (f.linked[m].isParent) return;
          l = ce(a);
        }),
        new Bn(a, l)
      );
    }
    function Fl(e) {
      return e.findMarks(
        ne(e.first, 0),
        e.clipPos(ne(e.lastLine())),
        function (t) {
          return t.parent;
        }
      );
    }
    function Hf(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = r.find(),
          a = e.clipPos(i.from),
          l = e.clipPos(i.to);
        if (ye(a, l)) {
          var u = sn(e, a, l, r.primary, r.primary.type);
          r.markers.push(u), (u.parent = r);
        }
      }
    }
    function Bf(e) {
      for (
        var t = function (r) {
            var i = e[r],
              a = [i.primary.doc];
            _r(i.primary.doc, function (f) {
              return a.push(f);
            });
            for (var l = 0; l < i.markers.length; l++) {
              var u = i.markers[l];
              Se(a, u.doc) == -1 &&
                ((u.parent = null), i.markers.splice(l--, 1));
            }
          },
          n = 0;
        n < e.length;
        n++
      )
        t(n);
    }
    var Wf = 0,
      Mt = function (e, t, n, r, i) {
        if (!(this instanceof Mt)) return new Mt(e, t, n, r, i);
        n == null && (n = 0),
          Rn.call(this, [new jn([new Xr('', null)])]),
          (this.first = n),
          (this.scrollTop = this.scrollLeft = 0),
          (this.cantEdit = !1),
          (this.cleanGeneration = 1),
          (this.modeFrontier = this.highlightFrontier = n);
        var a = ne(n, 0);
        (this.sel = yr(a)),
          (this.history = new yi(null)),
          (this.id = ++Wf),
          (this.modeOption = t),
          (this.lineSep = r),
          (this.direction = i == 'rtl' ? 'rtl' : 'ltr'),
          (this.extend = !1),
          typeof e == 'string' && (e = this.splitLines(e)),
          Io(this, { from: a, to: a, text: e }),
          wt(this, yr(a), ke);
      };
    (Mt.prototype = oe(Rn.prototype, {
      constructor: Mt,
      iter: function (e, t, n) {
        n
          ? this.iterN(e - this.first, t - e, n)
          : this.iterN(this.first, this.first + this.size, e);
      },
      insert: function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
        this.insertInner(e - this.first, t, n);
      },
      remove: function (e, t) {
        this.removeInner(e - this.first, t);
      },
      getValue: function (e) {
        var t = kn(this, this.first, this.first + this.size);
        return e === !1 ? t : t.join(e || this.lineSeparator());
      },
      setValue: mt(function (e) {
        var t = ne(this.first, 0),
          n = this.first + this.size - 1;
        an(
          this,
          {
            from: t,
            to: ne(n, Ae(this, n).text.length),
            text: this.splitLines(e),
            origin: 'setValue',
            full: !0,
          },
          !0
        ),
          this.cm && Mn(this.cm, 0, 0),
          wt(this, yr(t), ke);
      }),
      replaceRange: function (e, t, n, r) {
        (t = Re(this, t)), (n = n ? Re(this, n) : t), ln(this, e, t, n, r);
      },
      getRange: function (e, t, n) {
        var r = ir(this, Re(this, e), Re(this, t));
        return n === !1
          ? r
          : n === ''
            ? r.join('')
            : r.join(n || this.lineSeparator());
      },
      getLine: function (e) {
        var t = this.getLineHandle(e);
        return t && t.text;
      },
      getLineHandle: function (e) {
        if (ae(this, e)) return Ae(this, e);
      },
      getLineNumber: function (e) {
        return k(e);
      },
      getLineHandleVisualStart: function (e) {
        return typeof e == 'number' && (e = Ae(this, e)), Zt(e);
      },
      lineCount: function () {
        return this.size;
      },
      firstLine: function () {
        return this.first;
      },
      lastLine: function () {
        return this.first + this.size - 1;
      },
      clipPos: function (e) {
        return Re(this, e);
      },
      getCursor: function (e) {
        var t = this.sel.primary(),
          n;
        return (
          e == null || e == 'head'
            ? (n = t.head)
            : e == 'anchor'
              ? (n = t.anchor)
              : e == 'end' || e == 'to' || e === !1
                ? (n = t.to())
                : (n = t.from()),
          n
        );
      },
      listSelections: function () {
        return this.sel.ranges;
      },
      somethingSelected: function () {
        return this.sel.somethingSelected();
      },
      setCursor: mt(function (e, t, n) {
        xl(this, Re(this, typeof e == 'number' ? ne(e, t || 0) : e), null, n);
      }),
      setSelection: mt(function (e, t, n) {
        xl(this, Re(this, e), Re(this, t || e), n);
      }),
      extendSelection: mt(function (e, t, n) {
        _i(this, Re(this, e), t && Re(this, t), n);
      }),
      extendSelections: mt(function (e, t) {
        yl(this, ca(this, e), t);
      }),
      extendSelectionsBy: mt(function (e, t) {
        var n = Be(this.sel.ranges, e);
        yl(this, ca(this, n), t);
      }),
      setSelections: mt(function (e, t, n) {
        if (e.length) {
          for (var r = [], i = 0; i < e.length; i++)
            r[i] = new Ye(
              Re(this, e[i].anchor),
              Re(this, e[i].head || e[i].anchor)
            );
          t == null && (t = Math.min(e.length - 1, this.sel.primIndex)),
            wt(this, Yt(this.cm, r, t), n);
        }
      }),
      addSelection: mt(function (e, t, n) {
        var r = this.sel.ranges.slice(0);
        r.push(new Ye(Re(this, e), Re(this, t || e))),
          wt(this, Yt(this.cm, r, r.length - 1), n);
      }),
      getSelection: function (e) {
        for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
          var i = ir(this, t[r].from(), t[r].to());
          n = n ? n.concat(i) : i;
        }
        return e === !1 ? n : n.join(e || this.lineSeparator());
      },
      getSelections: function (e) {
        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
          var i = ir(this, n[r].from(), n[r].to());
          e !== !1 && (i = i.join(e || this.lineSeparator())), (t[r] = i);
        }
        return t;
      },
      replaceSelection: function (e, t, n) {
        for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
        this.replaceSelections(r, t, n || '+input');
      },
      replaceSelections: mt(function (e, t, n) {
        for (var r = [], i = this.sel, a = 0; a < i.ranges.length; a++) {
          var l = i.ranges[a];
          r[a] = {
            from: l.from(),
            to: l.to(),
            text: this.splitLines(e[a]),
            origin: n,
          };
        }
        for (
          var u = t && t != 'end' && Mf(this, r, t), f = r.length - 1;
          f >= 0;
          f--
        )
          an(this, r[f]);
        u ? _l(this, u) : this.cm && tn(this.cm);
      }),
      undo: mt(function () {
        Si(this, 'undo');
      }),
      redo: mt(function () {
        Si(this, 'redo');
      }),
      undoSelection: mt(function () {
        Si(this, 'undo', !0);
      }),
      redoSelection: mt(function () {
        Si(this, 'redo', !0);
      }),
      setExtending: function (e) {
        this.extend = e;
      },
      getExtending: function () {
        return this.extend;
      },
      historySize: function () {
        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
          e.done[r].ranges || ++t;
        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
        return { undo: t, redo: n };
      },
      clearHistory: function () {
        var e = this;
        (this.history = new yi(this.history)),
          _r(
            this,
            function (t) {
              return (t.history = e.history);
            },
            !0
          );
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function (e) {
        return (
          e &&
            (this.history.lastOp =
              this.history.lastSelOp =
              this.history.lastOrigin =
                null),
          this.history.generation
        );
      },
      isClean: function (e) {
        return this.history.generation == (e || this.cleanGeneration);
      },
      getHistory: function () {
        return { done: nn(this.history.done), undone: nn(this.history.undone) };
      },
      setHistory: function (e) {
        var t = (this.history = new yi(this.history));
        (t.done = nn(e.done.slice(0), null, !0)),
          (t.undone = nn(e.undone.slice(0), null, !0));
      },
      setGutterMarker: mt(function (e, t, n) {
        return Pn(this, e, 'gutter', function (r) {
          var i = r.gutterMarkers || (r.gutterMarkers = {});
          return (i[t] = n), !n && Le(i) && (r.gutterMarkers = null), !0;
        });
      }),
      clearGutter: mt(function (e) {
        var t = this;
        this.iter(function (n) {
          n.gutterMarkers &&
            n.gutterMarkers[e] &&
            Pn(t, n, 'gutter', function () {
              return (
                (n.gutterMarkers[e] = null),
                Le(n.gutterMarkers) && (n.gutterMarkers = null),
                !0
              );
            });
        });
      }),
      lineInfo: function (e) {
        var t;
        if (typeof e == 'number') {
          if (!ae(this, e) || ((t = e), (e = Ae(this, e)), !e)) return null;
        } else if (((t = k(e)), t == null)) return null;
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets,
        };
      },
      addLineClass: mt(function (e, t, n) {
        return Pn(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
          var i =
            t == 'text'
              ? 'textClass'
              : t == 'background'
                ? 'bgClass'
                : t == 'gutter'
                  ? 'gutterClass'
                  : 'wrapClass';
          if (!r[i]) r[i] = n;
          else {
            if (D(n).test(r[i])) return !1;
            r[i] += ' ' + n;
          }
          return !0;
        });
      }),
      removeLineClass: mt(function (e, t, n) {
        return Pn(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
          var i =
              t == 'text'
                ? 'textClass'
                : t == 'background'
                  ? 'bgClass'
                  : t == 'gutter'
                    ? 'gutterClass'
                    : 'wrapClass',
            a = r[i];
          if (a)
            if (n == null) r[i] = null;
            else {
              var l = a.match(D(n));
              if (!l) return !1;
              var u = l.index + l[0].length;
              r[i] =
                a.slice(0, l.index) +
                  (!l.index || u == a.length ? '' : ' ') +
                  a.slice(u) || null;
            }
          else return !1;
          return !0;
        });
      }),
      addLineWidget: mt(function (e, t, n) {
        return jf(this, e, t, n);
      }),
      removeLineWidget: function (e) {
        e.clear();
      },
      markText: function (e, t, n) {
        return sn(this, Re(this, e), Re(this, t), n, (n && n.type) || 'range');
      },
      setBookmark: function (e, t) {
        var n = {
          replacedWith: t && (t.nodeType == null ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents,
        };
        return (e = Re(this, e)), sn(this, e, e, n, 'bookmark');
      },
      findMarksAt: function (e) {
        e = Re(this, e);
        var t = [],
          n = Ae(this, e.line).markedSpans;
        if (n)
          for (var r = 0; r < n.length; ++r) {
            var i = n[r];
            (i.from == null || i.from <= e.ch) &&
              (i.to == null || i.to >= e.ch) &&
              t.push(i.marker.parent || i.marker);
          }
        return t;
      },
      findMarks: function (e, t, n) {
        (e = Re(this, e)), (t = Re(this, t));
        var r = [],
          i = e.line;
        return (
          this.iter(e.line, t.line + 1, function (a) {
            var l = a.markedSpans;
            if (l)
              for (var u = 0; u < l.length; u++) {
                var f = l[u];
                !(
                  (f.to != null && i == e.line && e.ch >= f.to) ||
                  (f.from == null && i != e.line) ||
                  (f.from != null && i == t.line && f.from >= t.ch)
                ) &&
                  (!n || n(f.marker)) &&
                  r.push(f.marker.parent || f.marker);
              }
            ++i;
          }),
          r
        );
      },
      getAllMarks: function () {
        var e = [];
        return (
          this.iter(function (t) {
            var n = t.markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r].from != null && e.push(n[r].marker);
          }),
          e
        );
      },
      posFromIndex: function (e) {
        var t,
          n = this.first,
          r = this.lineSeparator().length;
        return (
          this.iter(function (i) {
            var a = i.text.length + r;
            if (a > e) return (t = e), !0;
            (e -= a), ++n;
          }),
          Re(this, ne(n, t))
        );
      },
      indexFromPos: function (e) {
        e = Re(this, e);
        var t = e.ch;
        if (e.line < this.first || e.ch < 0) return 0;
        var n = this.lineSeparator().length;
        return (
          this.iter(this.first, e.line, function (r) {
            t += r.text.length + n;
          }),
          t
        );
      },
      copy: function (e) {
        var t = new Mt(
          kn(this, this.first, this.first + this.size),
          this.modeOption,
          this.first,
          this.lineSep,
          this.direction
        );
        return (
          (t.scrollTop = this.scrollTop),
          (t.scrollLeft = this.scrollLeft),
          (t.sel = this.sel),
          (t.extend = !1),
          e &&
            ((t.history.undoDepth = this.history.undoDepth),
            t.setHistory(this.getHistory())),
          t
        );
      },
      linkedDoc: function (e) {
        e || (e = {});
        var t = this.first,
          n = this.first + this.size;
        e.from != null && e.from > t && (t = e.from),
          e.to != null && e.to < n && (n = e.to);
        var r = new Mt(
          kn(this, t, n),
          e.mode || this.modeOption,
          t,
          this.lineSep,
          this.direction
        );
        return (
          e.sharedHist && (r.history = this.history),
          (this.linked || (this.linked = [])).push({
            doc: r,
            sharedHist: e.sharedHist,
          }),
          (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
          Hf(r, Fl(this)),
          r
        );
      },
      unlinkDoc: function (e) {
        if ((e instanceof tt && (e = e.doc), this.linked))
          for (var t = 0; t < this.linked.length; ++t) {
            var n = this.linked[t];
            if (n.doc == e) {
              this.linked.splice(t, 1), e.unlinkDoc(this), Bf(Fl(this));
              break;
            }
          }
        if (e.history == this.history) {
          var r = [e.id];
          _r(
            e,
            function (i) {
              return r.push(i.id);
            },
            !0
          ),
            (e.history = new yi(null)),
            (e.history.done = nn(this.history.done, r)),
            (e.history.undone = nn(this.history.undone, r));
        }
      },
      iterLinkedDocs: function (e) {
        _r(this, e);
      },
      getMode: function () {
        return this.mode;
      },
      getEditor: function () {
        return this.cm;
      },
      splitLines: function (e) {
        return this.lineSep ? e.split(this.lineSep) : Bt(e);
      },
      lineSeparator: function () {
        return (
          this.lineSep ||
          `
`
        );
      },
      setDirection: mt(function (e) {
        e != 'rtl' && (e = 'ltr'),
          e != this.direction &&
            ((this.direction = e),
            this.iter(function (t) {
              return (t.order = null);
            }),
            this.cm && Af(this.cm));
      }),
    })),
      (Mt.prototype.eachLine = Mt.prototype.iter);
    var Nl = 0;
    function Uf(e) {
      var t = this;
      if ((Ol(t), !(ot(t, e) || lr(t.display, e)))) {
        kt(e), s && (Nl = +new Date());
        var n = Mr(t, e, !0),
          r = e.dataTransfer.files;
        if (!(!n || t.isReadOnly()))
          if (r && r.length && window.FileReader && window.File)
            for (
              var i = r.length,
                a = Array(i),
                l = 0,
                u = function () {
                  ++l == i &&
                    gt(t, function () {
                      n = Re(t.doc, n);
                      var Y = {
                        from: n,
                        to: n,
                        text: t.doc.splitLines(
                          a
                            .filter(function (ie) {
                              return ie != null;
                            })
                            .join(t.doc.lineSeparator())
                        ),
                        origin: 'paste',
                      };
                      an(t.doc, Y),
                        _l(t.doc, yr(Re(t.doc, n), Re(t.doc, xr(Y))));
                    })();
                },
                f = function (Y, ie) {
                  if (
                    t.options.allowDropFileTypes &&
                    Se(t.options.allowDropFileTypes, Y.type) == -1
                  ) {
                    u();
                    return;
                  }
                  var ue = new FileReader();
                  (ue.onerror = function () {
                    return u();
                  }),
                    (ue.onload = function () {
                      var me = ue.result;
                      if (/[\x00-\x08\x0e-\x1f]{2}/.test(me)) {
                        u();
                        return;
                      }
                      (a[ie] = me), u();
                    }),
                    ue.readAsText(Y);
                },
                m = 0;
              m < r.length;
              m++
            )
              f(r[m], m);
          else {
            if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
              t.state.draggingText(e),
                setTimeout(function () {
                  return t.display.input.focus();
                }, 20);
              return;
            }
            try {
              var A = e.dataTransfer.getData('Text');
              if (A) {
                var P;
                if (
                  (t.state.draggingText &&
                    !t.state.draggingText.copy &&
                    (P = t.listSelections()),
                  ki(t.doc, yr(n, n)),
                  P)
                )
                  for (var J = 0; J < P.length; ++J)
                    ln(t.doc, '', P[J].anchor, P[J].head, 'drag');
                t.replaceSelection(A, 'around', 'paste'),
                  t.display.input.focus();
              }
            } catch {}
          }
      }
    }
    function $f(e, t) {
      if (s && (!e.state.draggingText || +new Date() - Nl < 100)) {
        dr(t);
        return;
      }
      if (
        !(ot(e, t) || lr(e.display, t)) &&
        (t.dataTransfer.setData('Text', e.getSelection()),
        (t.dataTransfer.effectAllowed = 'copyMove'),
        t.dataTransfer.setDragImage && !w)
      ) {
        var n = _('img', null, null, 'position: fixed; left: 0; top: 0;');
        (n.src =
          'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
          d &&
            ((n.width = n.height = 1),
            e.display.wrapper.appendChild(n),
            (n._top = n.offsetTop)),
          t.dataTransfer.setDragImage(n, 0, 0),
          d && n.parentNode.removeChild(n);
      }
    }
    function Kf(e, t) {
      var n = Mr(e, t);
      if (n) {
        var r = document.createDocumentFragment();
        _o(e, n, r),
          e.display.dragCursor ||
            ((e.display.dragCursor = _(
              'div',
              null,
              'CodeMirror-cursors CodeMirror-dragcursors'
            )),
            e.display.lineSpace.insertBefore(
              e.display.dragCursor,
              e.display.cursorDiv
            )),
          V(e.display.dragCursor, r);
      }
    }
    function Ol(e) {
      e.display.dragCursor &&
        (e.display.lineSpace.removeChild(e.display.dragCursor),
        (e.display.dragCursor = null));
    }
    function Pl(e) {
      if (document.getElementsByClassName) {
        for (
          var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0;
          r < t.length;
          r++
        ) {
          var i = t[r].CodeMirror;
          i && n.push(i);
        }
        n.length &&
          n[0].operation(function () {
            for (var a = 0; a < n.length; a++) e(n[a]);
          });
      }
    }
    var jl = !1;
    function Gf() {
      jl || (Zf(), (jl = !0));
    }
    function Zf() {
      var e;
      Fe(window, 'resize', function () {
        e == null &&
          (e = setTimeout(function () {
            (e = null), Pl(Xf);
          }, 100));
      }),
        Fe(window, 'blur', function () {
          return Pl(en);
        });
    }
    function Xf(e) {
      var t = e.display;
      (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
        (t.scrollbarsClipped = !1),
        e.setSize();
    }
    for (
      var wr = {
          3: 'Pause',
          8: 'Backspace',
          9: 'Tab',
          13: 'Enter',
          16: 'Shift',
          17: 'Ctrl',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Esc',
          32: 'Space',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'Left',
          38: 'Up',
          39: 'Right',
          40: 'Down',
          44: 'PrintScrn',
          45: 'Insert',
          46: 'Delete',
          59: ';',
          61: '=',
          91: 'Mod',
          92: 'Mod',
          93: 'Mod',
          106: '*',
          107: '=',
          109: '-',
          110: '.',
          111: '/',
          145: 'ScrollLock',
          173: '-',
          186: ';',
          187: '=',
          188: ',',
          189: '-',
          190: '.',
          191: '/',
          192: '`',
          219: '[',
          220: '\\',
          221: ']',
          222: "'",
          224: 'Mod',
          63232: 'Up',
          63233: 'Down',
          63234: 'Left',
          63235: 'Right',
          63272: 'Delete',
          63273: 'Home',
          63275: 'End',
          63276: 'PageUp',
          63277: 'PageDown',
          63302: 'Insert',
        },
        Wn = 0;
      Wn < 10;
      Wn++
    )
      wr[Wn + 48] = wr[Wn + 96] = String(Wn);
    for (var Ti = 65; Ti <= 90; Ti++) wr[Ti] = String.fromCharCode(Ti);
    for (var Un = 1; Un <= 12; Un++) wr[Un + 111] = wr[Un + 63235] = 'F' + Un;
    var ur = {};
    (ur.basic = {
      Left: 'goCharLeft',
      Right: 'goCharRight',
      Up: 'goLineUp',
      Down: 'goLineDown',
      End: 'goLineEnd',
      Home: 'goLineStartSmart',
      PageUp: 'goPageUp',
      PageDown: 'goPageDown',
      Delete: 'delCharAfter',
      Backspace: 'delCharBefore',
      'Shift-Backspace': 'delCharBefore',
      Tab: 'defaultTab',
      'Shift-Tab': 'indentAuto',
      Enter: 'newlineAndIndent',
      Insert: 'toggleOverwrite',
      Esc: 'singleSelection',
    }),
      (ur.pcDefault = {
        'Ctrl-A': 'selectAll',
        'Ctrl-D': 'deleteLine',
        'Ctrl-Z': 'undo',
        'Shift-Ctrl-Z': 'redo',
        'Ctrl-Y': 'redo',
        'Ctrl-Home': 'goDocStart',
        'Ctrl-End': 'goDocEnd',
        'Ctrl-Up': 'goLineUp',
        'Ctrl-Down': 'goLineDown',
        'Ctrl-Left': 'goGroupLeft',
        'Ctrl-Right': 'goGroupRight',
        'Alt-Left': 'goLineStart',
        'Alt-Right': 'goLineEnd',
        'Ctrl-Backspace': 'delGroupBefore',
        'Ctrl-Delete': 'delGroupAfter',
        'Ctrl-S': 'save',
        'Ctrl-F': 'find',
        'Ctrl-G': 'findNext',
        'Shift-Ctrl-G': 'findPrev',
        'Shift-Ctrl-F': 'replace',
        'Shift-Ctrl-R': 'replaceAll',
        'Ctrl-[': 'indentLess',
        'Ctrl-]': 'indentMore',
        'Ctrl-U': 'undoSelection',
        'Shift-Ctrl-U': 'redoSelection',
        'Alt-U': 'redoSelection',
        fallthrough: 'basic',
      }),
      (ur.emacsy = {
        'Ctrl-F': 'goCharRight',
        'Ctrl-B': 'goCharLeft',
        'Ctrl-P': 'goLineUp',
        'Ctrl-N': 'goLineDown',
        'Ctrl-A': 'goLineStart',
        'Ctrl-E': 'goLineEnd',
        'Ctrl-V': 'goPageDown',
        'Shift-Ctrl-V': 'goPageUp',
        'Ctrl-D': 'delCharAfter',
        'Ctrl-H': 'delCharBefore',
        'Alt-Backspace': 'delWordBefore',
        'Ctrl-K': 'killLine',
        'Ctrl-T': 'transposeChars',
        'Ctrl-O': 'openLine',
      }),
      (ur.macDefault = {
        'Cmd-A': 'selectAll',
        'Cmd-D': 'deleteLine',
        'Cmd-Z': 'undo',
        'Shift-Cmd-Z': 'redo',
        'Cmd-Y': 'redo',
        'Cmd-Home': 'goDocStart',
        'Cmd-Up': 'goDocStart',
        'Cmd-End': 'goDocEnd',
        'Cmd-Down': 'goDocEnd',
        'Alt-Left': 'goGroupLeft',
        'Alt-Right': 'goGroupRight',
        'Cmd-Left': 'goLineLeft',
        'Cmd-Right': 'goLineRight',
        'Alt-Backspace': 'delGroupBefore',
        'Ctrl-Alt-Backspace': 'delGroupAfter',
        'Alt-Delete': 'delGroupAfter',
        'Cmd-S': 'save',
        'Cmd-F': 'find',
        'Cmd-G': 'findNext',
        'Shift-Cmd-G': 'findPrev',
        'Cmd-Alt-F': 'replace',
        'Shift-Cmd-Alt-F': 'replaceAll',
        'Cmd-[': 'indentLess',
        'Cmd-]': 'indentMore',
        'Cmd-Backspace': 'delWrappedLineLeft',
        'Cmd-Delete': 'delWrappedLineRight',
        'Cmd-U': 'undoSelection',
        'Shift-Cmd-U': 'redoSelection',
        'Ctrl-Up': 'goDocStart',
        'Ctrl-Down': 'goDocEnd',
        fallthrough: ['basic', 'emacsy'],
      }),
      (ur.default = H ? ur.macDefault : ur.pcDefault);
    function Yf(e) {
      var t = e.split(/-(?!$)/);
      e = t[t.length - 1];
      for (var n, r, i, a, l = 0; l < t.length - 1; l++) {
        var u = t[l];
        if (/^(cmd|meta|m)$/i.test(u)) a = !0;
        else if (/^a(lt)?$/i.test(u)) n = !0;
        else if (/^(c|ctrl|control)$/i.test(u)) r = !0;
        else if (/^s(hift)?$/i.test(u)) i = !0;
        else throw new Error('Unrecognized modifier name: ' + u);
      }
      return (
        n && (e = 'Alt-' + e),
        r && (e = 'Ctrl-' + e),
        a && (e = 'Cmd-' + e),
        i && (e = 'Shift-' + e),
        e
      );
    }
    function Qf(e) {
      var t = {};
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
          if (r == '...') {
            delete e[n];
            continue;
          }
          for (var i = Be(n.split(' '), Yf), a = 0; a < i.length; a++) {
            var l = void 0,
              u = void 0;
            a == i.length - 1
              ? ((u = i.join(' ')), (l = r))
              : ((u = i.slice(0, a + 1).join(' ')), (l = '...'));
            var f = t[u];
            if (!f) t[u] = l;
            else if (f != l) throw new Error('Inconsistent bindings for ' + u);
          }
          delete e[n];
        }
      for (var m in t) e[m] = t[m];
      return e;
    }
    function un(e, t, n, r) {
      t = Li(t);
      var i = t.call ? t.call(e, r) : t[e];
      if (i === !1) return 'nothing';
      if (i === '...') return 'multi';
      if (i != null && n(i)) return 'handled';
      if (t.fallthrough) {
        if (Object.prototype.toString.call(t.fallthrough) != '[object Array]')
          return un(e, t.fallthrough, n, r);
        for (var a = 0; a < t.fallthrough.length; a++) {
          var l = un(e, t.fallthrough[a], n, r);
          if (l) return l;
        }
      }
    }
    function Rl(e) {
      var t = typeof e == 'string' ? e : wr[e.keyCode];
      return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod';
    }
    function Hl(e, t, n) {
      var r = e;
      return (
        t.altKey && r != 'Alt' && (e = 'Alt-' + e),
        (N ? t.metaKey : t.ctrlKey) && r != 'Ctrl' && (e = 'Ctrl-' + e),
        (N ? t.ctrlKey : t.metaKey) && r != 'Mod' && (e = 'Cmd-' + e),
        !n && t.shiftKey && r != 'Shift' && (e = 'Shift-' + e),
        e
      );
    }
    function Bl(e, t) {
      if (d && e.keyCode == 34 && e.char) return !1;
      var n = wr[e.keyCode];
      return n == null || e.altGraphKey
        ? !1
        : (e.keyCode == 3 && e.code && (n = e.code), Hl(n, e, t));
    }
    function Li(e) {
      return typeof e == 'string' ? ur[e] : e;
    }
    function cn(e, t) {
      for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
        for (var a = t(n[i]); r.length && ye(a.from, ce(r).to) <= 0; ) {
          var l = r.pop();
          if (ye(l.from, a.from) < 0) {
            a.from = l.from;
            break;
          }
        }
        r.push(a);
      }
      Nt(e, function () {
        for (var u = r.length - 1; u >= 0; u--)
          ln(e.doc, '', r[u].from, r[u].to, '+delete');
        tn(e);
      });
    }
    function Po(e, t, n) {
      var r = se(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r;
    }
    function jo(e, t, n) {
      var r = Po(e, t.ch, n);
      return r == null ? null : new ne(t.line, r, n < 0 ? 'after' : 'before');
    }
    function Ro(e, t, n, r, i) {
      if (e) {
        t.doc.direction == 'rtl' && (i = -i);
        var a = Pe(n, t.doc.direction);
        if (a) {
          var l = i < 0 ? ce(a) : a[0],
            u = i < 0 == (l.level == 1),
            f = u ? 'after' : 'before',
            m;
          if (l.level > 0 || t.doc.direction == 'rtl') {
            var A = Qr(t, n);
            m = i < 0 ? n.text.length - 1 : 0;
            var P = tr(t, A, m).top;
            (m = De(
              function (J) {
                return tr(t, A, J).top == P;
              },
              i < 0 == (l.level == 1) ? l.from : l.to - 1,
              m
            )),
              f == 'before' && (m = Po(n, m, 1));
          } else m = i < 0 ? l.to : l.from;
          return new ne(r, m, f);
        }
      }
      return new ne(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
    }
    function Vf(e, t, n, r) {
      var i = Pe(t, e.doc.direction);
      if (!i) return jo(t, n, r);
      n.ch >= t.text.length
        ? ((n.ch = t.text.length), (n.sticky = 'before'))
        : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
      var a = Pt(i, n.ch, n.sticky),
        l = i[a];
      if (
        e.doc.direction == 'ltr' &&
        l.level % 2 == 0 &&
        (r > 0 ? l.to > n.ch : l.from < n.ch)
      )
        return jo(t, n, r);
      var u = function (ve, _e) {
          return Po(t, ve instanceof ne ? ve.ch : ve, _e);
        },
        f,
        m = function (ve) {
          return e.options.lineWrapping
            ? ((f = f || Qr(e, t)), Ga(e, t, f, ve))
            : { begin: 0, end: t.text.length };
        },
        A = m(n.sticky == 'before' ? u(n, -1) : n.ch);
      if (e.doc.direction == 'rtl' || l.level == 1) {
        var P = (l.level == 1) == r < 0,
          J = u(n, P ? 1 : -1);
        if (
          J != null &&
          (P ? J <= l.to && J <= A.end : J >= l.from && J >= A.begin)
        ) {
          var Y = P ? 'before' : 'after';
          return new ne(n.line, J, Y);
        }
      }
      var ie = function (ve, _e, be) {
          for (
            var Ce = function (Ve, vt) {
              return vt
                ? new ne(n.line, u(Ve, 1), 'before')
                : new ne(n.line, Ve, 'after');
            };
            ve >= 0 && ve < i.length;
            ve += _e
          ) {
            var Ne = i[ve],
              Ie = _e > 0 == (Ne.level != 1),
              $e = Ie ? be.begin : u(be.end, -1);
            if (
              (Ne.from <= $e && $e < Ne.to) ||
              (($e = Ie ? Ne.from : u(Ne.to, -1)),
              be.begin <= $e && $e < be.end)
            )
              return Ce($e, Ie);
          }
        },
        ue = ie(a + r, r, A);
      if (ue) return ue;
      var me = r > 0 ? A.end : u(A.begin, -1);
      return me != null &&
        !(r > 0 && me == t.text.length) &&
        ((ue = ie(r > 0 ? 0 : i.length - 1, r, m(me))), ue)
        ? ue
        : null;
    }
    var $n = {
      selectAll: Ll,
      singleSelection: function (e) {
        return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), ke);
      },
      killLine: function (e) {
        return cn(e, function (t) {
          if (t.empty()) {
            var n = Ae(e.doc, t.head.line).text.length;
            return t.head.ch == n && t.head.line < e.lastLine()
              ? { from: t.head, to: ne(t.head.line + 1, 0) }
              : { from: t.head, to: ne(t.head.line, n) };
          } else return { from: t.from(), to: t.to() };
        });
      },
      deleteLine: function (e) {
        return cn(e, function (t) {
          return {
            from: ne(t.from().line, 0),
            to: Re(e.doc, ne(t.to().line + 1, 0)),
          };
        });
      },
      delLineLeft: function (e) {
        return cn(e, function (t) {
          return { from: ne(t.from().line, 0), to: t.from() };
        });
      },
      delWrappedLineLeft: function (e) {
        return cn(e, function (t) {
          var n = e.charCoords(t.head, 'div').top + 5,
            r = e.coordsChar({ left: 0, top: n }, 'div');
          return { from: r, to: t.from() };
        });
      },
      delWrappedLineRight: function (e) {
        return cn(e, function (t) {
          var n = e.charCoords(t.head, 'div').top + 5,
            r = e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: n },
              'div'
            );
          return { from: t.from(), to: r };
        });
      },
      undo: function (e) {
        return e.undo();
      },
      redo: function (e) {
        return e.redo();
      },
      undoSelection: function (e) {
        return e.undoSelection();
      },
      redoSelection: function (e) {
        return e.redoSelection();
      },
      goDocStart: function (e) {
        return e.extendSelection(ne(e.firstLine(), 0));
      },
      goDocEnd: function (e) {
        return e.extendSelection(ne(e.lastLine()));
      },
      goLineStart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Wl(e, t.head.line);
          },
          { origin: '+move', bias: 1 }
        );
      },
      goLineStartSmart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Ul(e, t.head);
          },
          { origin: '+move', bias: 1 }
        );
      },
      goLineEnd: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Jf(e, t.head.line);
          },
          { origin: '+move', bias: -1 }
        );
      },
      goLineRight: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5;
          return e.coordsChar(
            { left: e.display.lineDiv.offsetWidth + 100, top: n },
            'div'
          );
        }, He);
      },
      goLineLeft: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5;
          return e.coordsChar({ left: 0, top: n }, 'div');
        }, He);
      },
      goLineLeftSmart: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5,
            r = e.coordsChar({ left: 0, top: n }, 'div');
          return r.ch < e.getLine(r.line).search(/\S/) ? Ul(e, t.head) : r;
        }, He);
      },
      goLineUp: function (e) {
        return e.moveV(-1, 'line');
      },
      goLineDown: function (e) {
        return e.moveV(1, 'line');
      },
      goPageUp: function (e) {
        return e.moveV(-1, 'page');
      },
      goPageDown: function (e) {
        return e.moveV(1, 'page');
      },
      goCharLeft: function (e) {
        return e.moveH(-1, 'char');
      },
      goCharRight: function (e) {
        return e.moveH(1, 'char');
      },
      goColumnLeft: function (e) {
        return e.moveH(-1, 'column');
      },
      goColumnRight: function (e) {
        return e.moveH(1, 'column');
      },
      goWordLeft: function (e) {
        return e.moveH(-1, 'word');
      },
      goGroupRight: function (e) {
        return e.moveH(1, 'group');
      },
      goGroupLeft: function (e) {
        return e.moveH(-1, 'group');
      },
      goWordRight: function (e) {
        return e.moveH(1, 'word');
      },
      delCharBefore: function (e) {
        return e.deleteH(-1, 'codepoint');
      },
      delCharAfter: function (e) {
        return e.deleteH(1, 'char');
      },
      delWordBefore: function (e) {
        return e.deleteH(-1, 'word');
      },
      delWordAfter: function (e) {
        return e.deleteH(1, 'word');
      },
      delGroupBefore: function (e) {
        return e.deleteH(-1, 'group');
      },
      delGroupAfter: function (e) {
        return e.deleteH(1, 'group');
      },
      indentAuto: function (e) {
        return e.indentSelection('smart');
      },
      indentMore: function (e) {
        return e.indentSelection('add');
      },
      indentLess: function (e) {
        return e.indentSelection('subtract');
      },
      insertTab: function (e) {
        return e.replaceSelection('	');
      },
      insertSoftTab: function (e) {
        for (
          var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i].from(),
            l = Oe(e.getLine(a.line), a.ch, r);
          t.push(G(r - (l % r)));
        }
        e.replaceSelections(t);
      },
      defaultTab: function (e) {
        e.somethingSelected()
          ? e.indentSelection('add')
          : e.execCommand('insertTab');
      },
      transposeChars: function (e) {
        return Nt(e, function () {
          for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
            if (t[r].empty()) {
              var i = t[r].head,
                a = Ae(e.doc, i.line).text;
              if (a) {
                if (
                  (i.ch == a.length && (i = new ne(i.line, i.ch - 1)), i.ch > 0)
                )
                  (i = new ne(i.line, i.ch + 1)),
                    e.replaceRange(
                      a.charAt(i.ch - 1) + a.charAt(i.ch - 2),
                      ne(i.line, i.ch - 2),
                      i,
                      '+transpose'
                    );
                else if (i.line > e.doc.first) {
                  var l = Ae(e.doc, i.line - 1).text;
                  l &&
                    ((i = new ne(i.line, 1)),
                    e.replaceRange(
                      a.charAt(0) +
                        e.doc.lineSeparator() +
                        l.charAt(l.length - 1),
                      ne(i.line - 1, l.length - 1),
                      i,
                      '+transpose'
                    ));
                }
              }
              n.push(new Ye(i, i));
            }
          e.setSelections(n);
        });
      },
      newlineAndIndent: function (e) {
        return Nt(e, function () {
          for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
            e.replaceRange(
              e.doc.lineSeparator(),
              t[n].anchor,
              t[n].head,
              '+input'
            );
          t = e.listSelections();
          for (var r = 0; r < t.length; r++)
            e.indentLine(t[r].from().line, null, !0);
          tn(e);
        });
      },
      openLine: function (e) {
        return e.replaceSelection(
          `
`,
          'start'
        );
      },
      toggleOverwrite: function (e) {
        return e.toggleOverwrite();
      },
    };
    function Wl(e, t) {
      var n = Ae(e.doc, t),
        r = Zt(n);
      return r != n && (t = k(r)), Ro(!0, e, r, t, 1);
    }
    function Jf(e, t) {
      var n = Ae(e.doc, t),
        r = Fc(n);
      return r != n && (t = k(r)), Ro(!0, e, n, t, -1);
    }
    function Ul(e, t) {
      var n = Wl(e, t.line),
        r = Ae(e.doc, n.line),
        i = Pe(r, e.doc.direction);
      if (!i || i[0].level == 0) {
        var a = Math.max(n.ch, r.text.search(/\S/)),
          l = t.line == n.line && t.ch <= a && t.ch;
        return ne(n.line, l ? 0 : a, n.sticky);
      }
      return n;
    }
    function Ci(e, t, n) {
      if (typeof t == 'string' && ((t = $n[t]), !t)) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift,
        i = !1;
      try {
        e.isReadOnly() && (e.state.suppressEdits = !0),
          n && (e.display.shift = !1),
          (i = t(e) != Ze);
      } finally {
        (e.display.shift = r), (e.state.suppressEdits = !1);
      }
      return i;
    }
    function ed(e, t, n) {
      for (var r = 0; r < e.state.keyMaps.length; r++) {
        var i = un(t, e.state.keyMaps[r], n, e);
        if (i) return i;
      }
      return (
        (e.options.extraKeys && un(t, e.options.extraKeys, n, e)) ||
        un(t, e.options.keyMap, n, e)
      );
    }
    var td = new qe();
    function Kn(e, t, n, r) {
      var i = e.state.keySeq;
      if (i) {
        if (Rl(t)) return 'handled';
        if (
          (/\'$/.test(t)
            ? (e.state.keySeq = null)
            : td.set(50, function () {
                e.state.keySeq == i &&
                  ((e.state.keySeq = null), e.display.input.reset());
              }),
          $l(e, i + ' ' + t, n, r))
        )
          return !0;
      }
      return $l(e, t, n, r);
    }
    function $l(e, t, n, r) {
      var i = ed(e, t, r);
      return (
        i == 'multi' && (e.state.keySeq = t),
        i == 'handled' && ht(e, 'keyHandled', e, t, n),
        (i == 'handled' || i == 'multi') && (kt(n), ko(e)),
        !!i
      );
    }
    function Kl(e, t) {
      var n = Bl(t, !0);
      return n
        ? t.shiftKey && !e.state.keySeq
          ? Kn(e, 'Shift-' + n, t, function (r) {
              return Ci(e, r, !0);
            }) ||
            Kn(e, n, t, function (r) {
              if (typeof r == 'string' ? /^go[A-Z]/.test(r) : r.motion)
                return Ci(e, r);
            })
          : Kn(e, n, t, function (r) {
              return Ci(e, r);
            })
        : !1;
    }
    function rd(e, t, n) {
      return Kn(e, "'" + n + "'", t, function (r) {
        return Ci(e, r, !0);
      });
    }
    var Ho = null;
    function Gl(e) {
      var t = this;
      if (
        !(e.target && e.target != t.display.input.getField()) &&
        ((t.curOp.focus = B(de(t))), !ot(t, e))
      ) {
        s && p < 11 && e.keyCode == 27 && (e.returnValue = !1);
        var n = e.keyCode;
        t.display.shift = n == 16 || e.shiftKey;
        var r = Kl(t, e);
        d &&
          ((Ho = r ? n : null),
          !r &&
            n == 88 &&
            !ti &&
            (H ? e.metaKey : e.ctrlKey) &&
            t.replaceSelection('', null, 'cut')),
          v &&
            !H &&
            !r &&
            n == 46 &&
            e.shiftKey &&
            !e.ctrlKey &&
            document.execCommand &&
            document.execCommand('cut'),
          n == 18 &&
            !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) &&
            nd(t);
      }
    }
    function nd(e) {
      var t = e.display.lineDiv;
      le(t, 'CodeMirror-crosshair');
      function n(r) {
        (r.keyCode == 18 || !r.altKey) &&
          (Q(t, 'CodeMirror-crosshair'),
          _t(document, 'keyup', n),
          _t(document, 'mouseover', n));
      }
      Fe(document, 'keyup', n), Fe(document, 'mouseover', n);
    }
    function Zl(e) {
      e.keyCode == 16 && (this.doc.sel.shift = !1), ot(this, e);
    }
    function Xl(e) {
      var t = this;
      if (
        !(e.target && e.target != t.display.input.getField()) &&
        !(
          lr(t.display, e) ||
          ot(t, e) ||
          (e.ctrlKey && !e.altKey) ||
          (H && e.metaKey)
        )
      ) {
        var n = e.keyCode,
          r = e.charCode;
        if (d && n == Ho) {
          (Ho = null), kt(e);
          return;
        }
        if (!(d && (!e.which || e.which < 10) && Kl(t, e))) {
          var i = String.fromCharCode(r ?? n);
          i != '\b' && (rd(t, e, i) || t.display.input.onKeyPress(e));
        }
      }
    }
    var id = 400,
      Bo = function (e, t, n) {
        (this.time = e), (this.pos = t), (this.button = n);
      };
    Bo.prototype.compare = function (e, t, n) {
      return this.time + id > e && ye(t, this.pos) == 0 && n == this.button;
    };
    var Gn, Zn;
    function od(e, t) {
      var n = +new Date();
      return Zn && Zn.compare(n, e, t)
        ? ((Gn = Zn = null), 'triple')
        : Gn && Gn.compare(n, e, t)
          ? ((Zn = new Bo(n, e, t)), (Gn = null), 'double')
          : ((Gn = new Bo(n, e, t)), (Zn = null), 'single');
    }
    function Yl(e) {
      var t = this,
        n = t.display;
      if (!(ot(t, e) || (n.activeTouch && n.input.supportsTouch()))) {
        if ((n.input.ensurePolled(), (n.shift = e.shiftKey), lr(n, e))) {
          g ||
            ((n.scroller.draggable = !1),
            setTimeout(function () {
              return (n.scroller.draggable = !0);
            }, 100));
          return;
        }
        if (!Wo(t, e)) {
          var r = Mr(t, e),
            i = Ut(e),
            a = r ? od(r, i) : 'single';
          pe(t).focus(),
            i == 1 && t.state.selectingText && t.state.selectingText(e),
            !(r && ad(t, i, r, a, e)) &&
              (i == 1
                ? r
                  ? sd(t, r, a, e)
                  : yn(e) == n.scroller && kt(e)
                : i == 2
                  ? (r && _i(t.doc, r),
                    setTimeout(function () {
                      return n.input.focus();
                    }, 20))
                  : i == 3 && (F ? t.display.input.onContextMenu(e) : wo(t)));
        }
      }
    }
    function ad(e, t, n, r, i) {
      var a = 'Click';
      return (
        r == 'double'
          ? (a = 'Double' + a)
          : r == 'triple' && (a = 'Triple' + a),
        (a = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + a),
        Kn(e, Hl(a, i), i, function (l) {
          if ((typeof l == 'string' && (l = $n[l]), !l)) return !1;
          var u = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), (u = l(e, n) != Ze);
          } finally {
            e.state.suppressEdits = !1;
          }
          return u;
        })
      );
    }
    function ld(e, t, n) {
      var r = e.getOption('configureMouse'),
        i = r ? r(e, t, n) : {};
      if (i.unit == null) {
        var a = Z ? n.shiftKey && n.metaKey : n.altKey;
        i.unit = a
          ? 'rectangle'
          : t == 'single'
            ? 'char'
            : t == 'double'
              ? 'word'
              : 'line';
      }
      return (
        (i.extend == null || e.doc.extend) &&
          (i.extend = e.doc.extend || n.shiftKey),
        i.addNew == null && (i.addNew = H ? n.metaKey : n.ctrlKey),
        i.moveOnDrag == null && (i.moveOnDrag = !(H ? n.altKey : n.ctrlKey)),
        i
      );
    }
    function sd(e, t, n, r) {
      s ? setTimeout(Ee(Qa, e), 0) : (e.curOp.focus = B(de(e)));
      var i = ld(e, n, r),
        a = e.doc.sel,
        l;
      e.options.dragDrop &&
      eo &&
      !e.isReadOnly() &&
      n == 'single' &&
      (l = a.contains(t)) > -1 &&
      (ye((l = a.ranges[l]).from(), t) < 0 || t.xRel > 0) &&
      (ye(l.to(), t) > 0 || t.xRel < 0)
        ? ud(e, r, t, i)
        : cd(e, r, t, i);
    }
    function ud(e, t, n, r) {
      var i = e.display,
        a = !1,
        l = gt(e, function (m) {
          g && (i.scroller.draggable = !1),
            (e.state.draggingText = !1),
            e.state.delayingBlurEvent &&
              (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : wo(e)),
            _t(i.wrapper.ownerDocument, 'mouseup', l),
            _t(i.wrapper.ownerDocument, 'mousemove', u),
            _t(i.scroller, 'dragstart', f),
            _t(i.scroller, 'drop', l),
            a ||
              (kt(m),
              r.addNew || _i(e.doc, n, null, null, r.extend),
              (g && !w) || (s && p == 9)
                ? setTimeout(function () {
                    i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                      i.input.focus();
                  }, 20)
                : i.input.focus());
        }),
        u = function (m) {
          a =
            a ||
            Math.abs(t.clientX - m.clientX) + Math.abs(t.clientY - m.clientY) >=
              10;
        },
        f = function () {
          return (a = !0);
        };
      g && (i.scroller.draggable = !0),
        (e.state.draggingText = l),
        (l.copy = !r.moveOnDrag),
        Fe(i.wrapper.ownerDocument, 'mouseup', l),
        Fe(i.wrapper.ownerDocument, 'mousemove', u),
        Fe(i.scroller, 'dragstart', f),
        Fe(i.scroller, 'drop', l),
        (e.state.delayingBlurEvent = !0),
        setTimeout(function () {
          return i.input.focus();
        }, 20),
        i.scroller.dragDrop && i.scroller.dragDrop();
    }
    function Ql(e, t, n) {
      if (n == 'char') return new Ye(t, t);
      if (n == 'word') return e.findWordAt(t);
      if (n == 'line')
        return new Ye(ne(t.line, 0), Re(e.doc, ne(t.line + 1, 0)));
      var r = n(e, t);
      return new Ye(r.from, r.to);
    }
    function cd(e, t, n, r) {
      s && wo(e);
      var i = e.display,
        a = e.doc;
      kt(t);
      var l,
        u,
        f = a.sel,
        m = f.ranges;
      if (
        (r.addNew && !r.extend
          ? ((u = a.sel.contains(n)), u > -1 ? (l = m[u]) : (l = new Ye(n, n)))
          : ((l = a.sel.primary()), (u = a.sel.primIndex)),
        r.unit == 'rectangle')
      )
        r.addNew || (l = new Ye(n, n)), (n = Mr(e, t, !0, !0)), (u = -1);
      else {
        var A = Ql(e, n, r.unit);
        r.extend ? (l = No(l, A.anchor, A.head, r.extend)) : (l = A);
      }
      r.addNew
        ? u == -1
          ? ((u = m.length),
            wt(a, Yt(e, m.concat([l]), u), { scroll: !1, origin: '*mouse' }))
          : m.length > 1 && m[u].empty() && r.unit == 'char' && !r.extend
            ? (wt(a, Yt(e, m.slice(0, u).concat(m.slice(u + 1)), 0), {
                scroll: !1,
                origin: '*mouse',
              }),
              (f = a.sel))
            : Oo(a, u, l, Je)
        : ((u = 0), wt(a, new Rt([l], 0), Je), (f = a.sel));
      var P = n;
      function J(be) {
        if (ye(P, be) != 0)
          if (((P = be), r.unit == 'rectangle')) {
            for (
              var Ce = [],
                Ne = e.options.tabSize,
                Ie = Oe(Ae(a, n.line).text, n.ch, Ne),
                $e = Oe(Ae(a, be.line).text, be.ch, Ne),
                Ve = Math.min(Ie, $e),
                vt = Math.max(Ie, $e),
                rt = Math.min(n.line, be.line),
                Ot = Math.min(e.lastLine(), Math.max(n.line, be.line));
              rt <= Ot;
              rt++
            ) {
              var At = Ae(a, rt).text,
                ut = Ge(At, Ve, Ne);
              Ve == vt
                ? Ce.push(new Ye(ne(rt, ut), ne(rt, ut)))
                : At.length > ut &&
                  Ce.push(new Ye(ne(rt, ut), ne(rt, Ge(At, vt, Ne))));
            }
            Ce.length || Ce.push(new Ye(n, n)),
              wt(a, Yt(e, f.ranges.slice(0, u).concat(Ce), u), {
                origin: '*mouse',
                scroll: !1,
              }),
              e.scrollIntoView(be);
          } else {
            var Dt = l,
              yt = Ql(e, be, r.unit),
              ft = Dt.anchor,
              ct;
            ye(yt.anchor, ft) > 0
              ? ((ct = yt.head), (ft = Zr(Dt.from(), yt.anchor)))
              : ((ct = yt.anchor), (ft = Et(Dt.to(), yt.head)));
            var lt = f.ranges.slice(0);
            (lt[u] = fd(e, new Ye(Re(a, ft), ct))), wt(a, Yt(e, lt, u), Je);
          }
      }
      var Y = i.wrapper.getBoundingClientRect(),
        ie = 0;
      function ue(be) {
        var Ce = ++ie,
          Ne = Mr(e, be, !0, r.unit == 'rectangle');
        if (Ne)
          if (ye(Ne, P) != 0) {
            (e.curOp.focus = B(de(e))), J(Ne);
            var Ie = gi(i, a);
            (Ne.line >= Ie.to || Ne.line < Ie.from) &&
              setTimeout(
                gt(e, function () {
                  ie == Ce && ue(be);
                }),
                150
              );
          } else {
            var $e = be.clientY < Y.top ? -20 : be.clientY > Y.bottom ? 20 : 0;
            $e &&
              setTimeout(
                gt(e, function () {
                  ie == Ce && ((i.scroller.scrollTop += $e), ue(be));
                }),
                50
              );
          }
      }
      function me(be) {
        (e.state.selectingText = !1),
          (ie = 1 / 0),
          be && (kt(be), i.input.focus()),
          _t(i.wrapper.ownerDocument, 'mousemove', ve),
          _t(i.wrapper.ownerDocument, 'mouseup', _e),
          (a.history.lastSelOrigin = null);
      }
      var ve = gt(e, function (be) {
          be.buttons === 0 || !Ut(be) ? me(be) : ue(be);
        }),
        _e = gt(e, me);
      (e.state.selectingText = _e),
        Fe(i.wrapper.ownerDocument, 'mousemove', ve),
        Fe(i.wrapper.ownerDocument, 'mouseup', _e);
    }
    function fd(e, t) {
      var n = t.anchor,
        r = t.head,
        i = Ae(e.doc, n.line);
      if (ye(n, r) == 0 && n.sticky == r.sticky) return t;
      var a = Pe(i);
      if (!a) return t;
      var l = Pt(a, n.ch, n.sticky),
        u = a[l];
      if (u.from != n.ch && u.to != n.ch) return t;
      var f = l + ((u.from == n.ch) == (u.level != 1) ? 0 : 1);
      if (f == 0 || f == a.length) return t;
      var m;
      if (r.line != n.line)
        m = (r.line - n.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0;
      else {
        var A = Pt(a, r.ch, r.sticky),
          P = A - l || (r.ch - n.ch) * (u.level == 1 ? -1 : 1);
        A == f - 1 || A == f ? (m = P < 0) : (m = P > 0);
      }
      var J = a[f + (m ? -1 : 0)],
        Y = m == (J.level == 1),
        ie = Y ? J.from : J.to,
        ue = Y ? 'after' : 'before';
      return n.ch == ie && n.sticky == ue
        ? t
        : new Ye(new ne(n.line, ie, ue), r);
    }
    function Vl(e, t, n, r) {
      var i, a;
      if (t.touches) (i = t.touches[0].clientX), (a = t.touches[0].clientY);
      else
        try {
          (i = t.clientX), (a = t.clientY);
        } catch {
          return !1;
        }
      if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
        return !1;
      r && kt(t);
      var l = e.display,
        u = l.lineDiv.getBoundingClientRect();
      if (a > u.bottom || !Ft(e, n)) return Ct(t);
      a -= u.top - l.viewOffset;
      for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
        var m = l.gutters.childNodes[f];
        if (m && m.getBoundingClientRect().right >= i) {
          var A = O(e.doc, a),
            P = e.display.gutterSpecs[f];
          return it(e, n, e, A, P.className, t), Ct(t);
        }
      }
    }
    function Wo(e, t) {
      return Vl(e, t, 'gutterClick', !0);
    }
    function Jl(e, t) {
      lr(e.display, t) ||
        dd(e, t) ||
        ot(e, t, 'contextmenu') ||
        F ||
        e.display.input.onContextMenu(t);
    }
    function dd(e, t) {
      return Ft(e, 'gutterContextMenu')
        ? Vl(e, t, 'gutterContextMenu', !1)
        : !1;
    }
    function es(e) {
      (e.display.wrapper.className =
        e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
        e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
        En(e);
    }
    var fn = {
        toString: function () {
          return 'CodeMirror.Init';
        },
      },
      ts = {},
      Ei = {};
    function pd(e) {
      var t = e.optionHandlers;
      function n(r, i, a, l) {
        (e.defaults[r] = i),
          a &&
            (t[r] = l
              ? function (u, f, m) {
                  m != fn && a(u, f, m);
                }
              : a);
      }
      (e.defineOption = n),
        (e.Init = fn),
        n(
          'value',
          '',
          function (r, i) {
            return r.setValue(i);
          },
          !0
        ),
        n(
          'mode',
          null,
          function (r, i) {
            (r.doc.modeOption = i), qo(r);
          },
          !0
        ),
        n('indentUnit', 2, qo, !0),
        n('indentWithTabs', !1),
        n('smartIndent', !0),
        n(
          'tabSize',
          4,
          function (r) {
            Nn(r), En(r), zt(r);
          },
          !0
        ),
        n('lineSeparator', null, function (r, i) {
          if (((r.doc.lineSep = i), !!i)) {
            var a = [],
              l = r.doc.first;
            r.doc.iter(function (f) {
              for (var m = 0; ; ) {
                var A = f.text.indexOf(i, m);
                if (A == -1) break;
                (m = A + i.length), a.push(ne(l, A));
              }
              l++;
            });
            for (var u = a.length - 1; u >= 0; u--)
              ln(r.doc, i, a[u], ne(a[u].line, a[u].ch + i.length));
          }
        }),
        n(
          'specialChars',
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
          function (r, i, a) {
            (r.state.specialChars = new RegExp(
              i.source + (i.test('	') ? '' : '|	'),
              'g'
            )),
              a != fn && r.refresh();
          }
        ),
        n(
          'specialCharPlaceholder',
          Hc,
          function (r) {
            return r.refresh();
          },
          !0
        ),
        n('electricChars', !0),
        n(
          'inputStyle',
          M ? 'contenteditable' : 'textarea',
          function () {
            throw new Error(
              'inputStyle can not (yet) be changed in a running editor'
            );
          },
          !0
        ),
        n(
          'spellcheck',
          !1,
          function (r, i) {
            return (r.getInputField().spellcheck = i);
          },
          !0
        ),
        n(
          'autocorrect',
          !1,
          function (r, i) {
            return (r.getInputField().autocorrect = i);
          },
          !0
        ),
        n(
          'autocapitalize',
          !1,
          function (r, i) {
            return (r.getInputField().autocapitalize = i);
          },
          !0
        ),
        n('rtlMoveVisually', !ee),
        n('wholeLineUpdateBefore', !0),
        n(
          'theme',
          'default',
          function (r) {
            es(r), Fn(r);
          },
          !0
        ),
        n('keyMap', 'default', function (r, i, a) {
          var l = Li(i),
            u = a != fn && Li(a);
          u && u.detach && u.detach(r, l), l.attach && l.attach(r, u || null);
        }),
        n('extraKeys', null),
        n('configureMouse', null),
        n('lineWrapping', !1, gd, !0),
        n(
          'gutters',
          [],
          function (r, i) {
            (r.display.gutterSpecs = Ao(i, r.options.lineNumbers)), Fn(r);
          },
          !0
        ),
        n(
          'fixedGutter',
          !0,
          function (r, i) {
            (r.display.gutters.style.left = i ? yo(r.display) + 'px' : '0'),
              r.refresh();
          },
          !0
        ),
        n(
          'coverGutterNextToScrollbar',
          !1,
          function (r) {
            return rn(r);
          },
          !0
        ),
        n(
          'scrollbarStyle',
          'native',
          function (r) {
            nl(r),
              rn(r),
              r.display.scrollbars.setScrollTop(r.doc.scrollTop),
              r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
          },
          !0
        ),
        n(
          'lineNumbers',
          !1,
          function (r, i) {
            (r.display.gutterSpecs = Ao(r.options.gutters, i)), Fn(r);
          },
          !0
        ),
        n('firstLineNumber', 1, Fn, !0),
        n(
          'lineNumberFormatter',
          function (r) {
            return r;
          },
          Fn,
          !0
        ),
        n('showCursorWhenSelecting', !1, zn, !0),
        n('resetSelectionOnContextMenu', !0),
        n('lineWiseCopyCut', !0),
        n('pasteLinesPerSelection', !0),
        n('selectionsMayTouch', !1),
        n('readOnly', !1, function (r, i) {
          i == 'nocursor' && (en(r), r.display.input.blur()),
            r.display.input.readOnlyChanged(i);
        }),
        n('screenReaderLabel', null, function (r, i) {
          (i = i === '' ? null : i),
            r.display.input.screenReaderLabelChanged(i);
        }),
        n(
          'disableInput',
          !1,
          function (r, i) {
            i || r.display.input.reset();
          },
          !0
        ),
        n('dragDrop', !0, hd),
        n('allowDropFileTypes', null),
        n('cursorBlinkRate', 530),
        n('cursorScrollMargin', 0),
        n('cursorHeight', 1, zn, !0),
        n('singleCursorHeightPerLine', !0, zn, !0),
        n('workTime', 100),
        n('workDelay', 100),
        n('flattenSpans', !0, Nn, !0),
        n('addModeClass', !1, Nn, !0),
        n('pollInterval', 100),
        n('undoDepth', 200, function (r, i) {
          return (r.doc.history.undoDepth = i);
        }),
        n('historyEventDelay', 1250),
        n(
          'viewportMargin',
          10,
          function (r) {
            return r.refresh();
          },
          !0
        ),
        n('maxHighlightLength', 1e4, Nn, !0),
        n('moveInputWithCursor', !0, function (r, i) {
          i || r.display.input.resetPosition();
        }),
        n('tabindex', null, function (r, i) {
          return (r.display.input.getField().tabIndex = i || '');
        }),
        n('autofocus', null),
        n(
          'direction',
          'ltr',
          function (r, i) {
            return r.doc.setDirection(i);
          },
          !0
        ),
        n('phrases', null);
    }
    function hd(e, t, n) {
      var r = n && n != fn;
      if (!t != !r) {
        var i = e.display.dragFunctions,
          a = t ? Fe : _t;
        a(e.display.scroller, 'dragstart', i.start),
          a(e.display.scroller, 'dragenter', i.enter),
          a(e.display.scroller, 'dragover', i.over),
          a(e.display.scroller, 'dragleave', i.leave),
          a(e.display.scroller, 'drop', i.drop);
      }
    }
    function gd(e) {
      e.options.lineWrapping
        ? (le(e.display.wrapper, 'CodeMirror-wrap'),
          (e.display.sizer.style.minWidth = ''),
          (e.display.sizerWidth = null))
        : (Q(e.display.wrapper, 'CodeMirror-wrap'), so(e)),
        xo(e),
        zt(e),
        En(e),
        setTimeout(function () {
          return rn(e);
        }, 100);
    }
    function tt(e, t) {
      var n = this;
      if (!(this instanceof tt)) return new tt(e, t);
      (this.options = t = t ? ge(t) : {}), ge(ts, t, !1);
      var r = t.value;
      typeof r == 'string'
        ? (r = new Mt(r, t.mode, null, t.lineSeparator, t.direction))
        : t.mode && (r.modeOption = t.mode),
        (this.doc = r);
      var i = new tt.inputStyles[t.inputStyle](this),
        a = (this.display = new Ef(e, r, i, t));
      (a.wrapper.CodeMirror = this),
        es(this),
        t.lineWrapping &&
          (this.display.wrapper.className += ' CodeMirror-wrap'),
        nl(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new qe(),
          keySeq: null,
          specialChars: null,
        }),
        t.autofocus && !M && a.input.focus(),
        s &&
          p < 11 &&
          setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20),
        md(this),
        Gf(),
        Ir(this),
        (this.curOp.forceUpdate = !0),
        pl(this, r),
        (t.autofocus && !M) || this.hasFocus()
          ? setTimeout(function () {
              n.hasFocus() && !n.state.focused && So(n);
            }, 20)
          : en(this);
      for (var l in Ei) Ei.hasOwnProperty(l) && Ei[l](this, t[l], fn);
      al(this), t.finishInit && t.finishInit(this);
      for (var u = 0; u < Uo.length; ++u) Uo[u](this);
      Fr(this),
        g &&
          t.lineWrapping &&
          getComputedStyle(a.lineDiv).textRendering == 'optimizelegibility' &&
          (a.lineDiv.style.textRendering = 'auto');
    }
    (tt.defaults = ts), (tt.optionHandlers = Ei);
    function md(e) {
      var t = e.display;
      Fe(t.scroller, 'mousedown', gt(e, Yl)),
        s && p < 11
          ? Fe(
              t.scroller,
              'dblclick',
              gt(e, function (f) {
                if (!ot(e, f)) {
                  var m = Mr(e, f);
                  if (!(!m || Wo(e, f) || lr(e.display, f))) {
                    kt(f);
                    var A = e.findWordAt(m);
                    _i(e.doc, A.anchor, A.head);
                  }
                }
              })
            )
          : Fe(t.scroller, 'dblclick', function (f) {
              return ot(e, f) || kt(f);
            }),
        Fe(t.scroller, 'contextmenu', function (f) {
          return Jl(e, f);
        }),
        Fe(t.input.getField(), 'contextmenu', function (f) {
          t.scroller.contains(f.target) || Jl(e, f);
        });
      var n,
        r = { end: 0 };
      function i() {
        t.activeTouch &&
          ((n = setTimeout(function () {
            return (t.activeTouch = null);
          }, 1e3)),
          (r = t.activeTouch),
          (r.end = +new Date()));
      }
      function a(f) {
        if (f.touches.length != 1) return !1;
        var m = f.touches[0];
        return m.radiusX <= 1 && m.radiusY <= 1;
      }
      function l(f, m) {
        if (m.left == null) return !0;
        var A = m.left - f.left,
          P = m.top - f.top;
        return A * A + P * P > 20 * 20;
      }
      Fe(t.scroller, 'touchstart', function (f) {
        if (!ot(e, f) && !a(f) && !Wo(e, f)) {
          t.input.ensurePolled(), clearTimeout(n);
          var m = +new Date();
          (t.activeTouch = {
            start: m,
            moved: !1,
            prev: m - r.end <= 300 ? r : null,
          }),
            f.touches.length == 1 &&
              ((t.activeTouch.left = f.touches[0].pageX),
              (t.activeTouch.top = f.touches[0].pageY));
        }
      }),
        Fe(t.scroller, 'touchmove', function () {
          t.activeTouch && (t.activeTouch.moved = !0);
        }),
        Fe(t.scroller, 'touchend', function (f) {
          var m = t.activeTouch;
          if (
            m &&
            !lr(t, f) &&
            m.left != null &&
            !m.moved &&
            new Date() - m.start < 300
          ) {
            var A = e.coordsChar(t.activeTouch, 'page'),
              P;
            !m.prev || l(m, m.prev)
              ? (P = new Ye(A, A))
              : !m.prev.prev || l(m, m.prev.prev)
                ? (P = e.findWordAt(A))
                : (P = new Ye(ne(A.line, 0), Re(e.doc, ne(A.line + 1, 0)))),
              e.setSelection(P.anchor, P.head),
              e.focus(),
              kt(f);
          }
          i();
        }),
        Fe(t.scroller, 'touchcancel', i),
        Fe(t.scroller, 'scroll', function () {
          t.scroller.clientHeight &&
            (An(e, t.scroller.scrollTop),
            Dr(e, t.scroller.scrollLeft, !0),
            it(e, 'scroll', e));
        }),
        Fe(t.scroller, 'mousewheel', function (f) {
          return ul(e, f);
        }),
        Fe(t.scroller, 'DOMMouseScroll', function (f) {
          return ul(e, f);
        }),
        Fe(t.wrapper, 'scroll', function () {
          return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
        }),
        (t.dragFunctions = {
          enter: function (f) {
            ot(e, f) || dr(f);
          },
          over: function (f) {
            ot(e, f) || (Kf(e, f), dr(f));
          },
          start: function (f) {
            return $f(e, f);
          },
          drop: gt(e, Uf),
          leave: function (f) {
            ot(e, f) || Ol(e);
          },
        });
      var u = t.input.getField();
      Fe(u, 'keyup', function (f) {
        return Zl.call(e, f);
      }),
        Fe(u, 'keydown', gt(e, Gl)),
        Fe(u, 'keypress', gt(e, Xl)),
        Fe(u, 'focus', function (f) {
          return So(e, f);
        }),
        Fe(u, 'blur', function (f) {
          return en(e, f);
        });
    }
    var Uo = [];
    tt.defineInitHook = function (e) {
      return Uo.push(e);
    };
    function Xn(e, t, n, r) {
      var i = e.doc,
        a;
      n == null && (n = 'add'),
        n == 'smart' && (i.mode.indent ? (a = wn(e, t).state) : (n = 'prev'));
      var l = e.options.tabSize,
        u = Ae(i, t),
        f = Oe(u.text, null, l);
      u.stateAfter && (u.stateAfter = null);
      var m = u.text.match(/^\s*/)[0],
        A;
      if (!r && !/\S/.test(u.text)) (A = 0), (n = 'not');
      else if (
        n == 'smart' &&
        ((A = i.mode.indent(a, u.text.slice(m.length), u.text)),
        A == Ze || A > 150)
      ) {
        if (!r) return;
        n = 'prev';
      }
      n == 'prev'
        ? t > i.first
          ? (A = Oe(Ae(i, t - 1).text, null, l))
          : (A = 0)
        : n == 'add'
          ? (A = f + e.options.indentUnit)
          : n == 'subtract'
            ? (A = f - e.options.indentUnit)
            : typeof n == 'number' && (A = f + n),
        (A = Math.max(0, A));
      var P = '',
        J = 0;
      if (e.options.indentWithTabs)
        for (var Y = Math.floor(A / l); Y; --Y) (J += l), (P += '	');
      if ((J < A && (P += G(A - J)), P != m))
        return (
          ln(i, P, ne(t, 0), ne(t, m.length), '+input'),
          (u.stateAfter = null),
          !0
        );
      for (var ie = 0; ie < i.sel.ranges.length; ie++) {
        var ue = i.sel.ranges[ie];
        if (ue.head.line == t && ue.head.ch < m.length) {
          var me = ne(t, m.length);
          Oo(i, ie, new Ye(me, me));
          break;
        }
      }
    }
    var Qt = null;
    function zi(e) {
      Qt = e;
    }
    function $o(e, t, n, r, i) {
      var a = e.doc;
      (e.display.shift = !1), r || (r = a.sel);
      var l = +new Date() - 200,
        u = i == 'paste' || e.state.pasteIncoming > l,
        f = Bt(t),
        m = null;
      if (u && r.ranges.length > 1)
        if (
          Qt &&
          Qt.text.join(`
`) == t
        ) {
          if (r.ranges.length % Qt.text.length == 0) {
            m = [];
            for (var A = 0; A < Qt.text.length; A++)
              m.push(a.splitLines(Qt.text[A]));
          }
        } else
          f.length == r.ranges.length &&
            e.options.pasteLinesPerSelection &&
            (m = Be(f, function (ve) {
              return [ve];
            }));
      for (var P = e.curOp.updateInput, J = r.ranges.length - 1; J >= 0; J--) {
        var Y = r.ranges[J],
          ie = Y.from(),
          ue = Y.to();
        Y.empty() &&
          (n && n > 0
            ? (ie = ne(ie.line, ie.ch - n))
            : e.state.overwrite && !u
              ? (ue = ne(
                  ue.line,
                  Math.min(Ae(a, ue.line).text.length, ue.ch + ce(f).length)
                ))
              : u &&
                Qt &&
                Qt.lineWise &&
                Qt.text.join(`
`) ==
                  f.join(`
`) &&
                (ie = ue = ne(ie.line, 0)));
        var me = {
          from: ie,
          to: ue,
          text: m ? m[J % m.length] : f,
          origin:
            i || (u ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
        };
        an(e.doc, me), ht(e, 'inputRead', e, me);
      }
      t && !u && ns(e, t),
        tn(e),
        e.curOp.updateInput < 2 && (e.curOp.updateInput = P),
        (e.curOp.typing = !0),
        (e.state.pasteIncoming = e.state.cutIncoming = -1);
    }
    function rs(e, t) {
      var n = e.clipboardData && e.clipboardData.getData('Text');
      if (n)
        return (
          e.preventDefault(),
          !t.isReadOnly() &&
            !t.options.disableInput &&
            t.hasFocus() &&
            Nt(t, function () {
              return $o(t, n, 0, null, 'paste');
            }),
          !0
        );
    }
    function ns(e, t) {
      if (!(!e.options.electricChars || !e.options.smartIndent))
        for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
          var i = n.ranges[r];
          if (
            !(
              i.head.ch > 100 ||
              (r && n.ranges[r - 1].head.line == i.head.line)
            )
          ) {
            var a = e.getModeAt(i.head),
              l = !1;
            if (a.electricChars) {
              for (var u = 0; u < a.electricChars.length; u++)
                if (t.indexOf(a.electricChars.charAt(u)) > -1) {
                  l = Xn(e, i.head.line, 'smart');
                  break;
                }
            } else
              a.electricInput &&
                a.electricInput.test(
                  Ae(e.doc, i.head.line).text.slice(0, i.head.ch)
                ) &&
                (l = Xn(e, i.head.line, 'smart'));
            l && ht(e, 'electricInput', e, i.head.line);
          }
        }
    }
    function is(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
        var i = e.doc.sel.ranges[r].head.line,
          a = { anchor: ne(i, 0), head: ne(i + 1, 0) };
        n.push(a), t.push(e.getRange(a.anchor, a.head));
      }
      return { text: t, ranges: n };
    }
    function Ko(e, t, n, r) {
      e.setAttribute('autocorrect', n ? 'on' : 'off'),
        e.setAttribute('autocapitalize', r ? 'on' : 'off'),
        e.setAttribute('spellcheck', !!t);
    }
    function os() {
      var e = _(
          'textarea',
          null,
          null,
          'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none'
        ),
        t = _(
          'div',
          [e],
          null,
          'overflow: hidden; position: relative; width: 3px; height: 0px;'
        );
      return (
        g ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
        y && (e.style.border = '1px solid black'),
        t
      );
    }
    function vd(e) {
      var t = e.optionHandlers,
        n = (e.helpers = {});
      (e.prototype = {
        constructor: e,
        focus: function () {
          pe(this).focus(), this.display.input.focus();
        },
        setOption: function (r, i) {
          var a = this.options,
            l = a[r];
          (a[r] == i && r != 'mode') ||
            ((a[r] = i),
            t.hasOwnProperty(r) && gt(this, t[r])(this, i, l),
            it(this, 'optionChange', this, r));
        },
        getOption: function (r) {
          return this.options[r];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (r, i) {
          this.state.keyMaps[i ? 'push' : 'unshift'](Li(r));
        },
        removeKeyMap: function (r) {
          for (var i = this.state.keyMaps, a = 0; a < i.length; ++a)
            if (i[a] == r || i[a].name == r) return i.splice(a, 1), !0;
        },
        addOverlay: Tt(function (r, i) {
          var a = r.token ? r : e.getMode(this.options, r);
          if (a.startState) throw new Error('Overlays may not be stateful.');
          te(
            this.state.overlays,
            {
              mode: a,
              modeSpec: r,
              opaque: i && i.opaque,
              priority: (i && i.priority) || 0,
            },
            function (l) {
              return l.priority;
            }
          ),
            this.state.modeGen++,
            zt(this);
        }),
        removeOverlay: Tt(function (r) {
          for (var i = this.state.overlays, a = 0; a < i.length; ++a) {
            var l = i[a].modeSpec;
            if (l == r || (typeof r == 'string' && l.name == r)) {
              i.splice(a, 1), this.state.modeGen++, zt(this);
              return;
            }
          }
        }),
        indentLine: Tt(function (r, i, a) {
          typeof i != 'string' &&
            typeof i != 'number' &&
            (i == null
              ? (i = this.options.smartIndent ? 'smart' : 'prev')
              : (i = i ? 'add' : 'subtract')),
            ae(this.doc, r) && Xn(this, r, i, a);
        }),
        indentSelection: Tt(function (r) {
          for (var i = this.doc.sel.ranges, a = -1, l = 0; l < i.length; l++) {
            var u = i[l];
            if (u.empty())
              u.head.line > a &&
                (Xn(this, u.head.line, r, !0),
                (a = u.head.line),
                l == this.doc.sel.primIndex && tn(this));
            else {
              var f = u.from(),
                m = u.to(),
                A = Math.max(a, f.line);
              a = Math.min(this.lastLine(), m.line - (m.ch ? 0 : 1)) + 1;
              for (var P = A; P < a; ++P) Xn(this, P, r);
              var J = this.doc.sel.ranges;
              f.ch == 0 &&
                i.length == J.length &&
                J[l].from().ch > 0 &&
                Oo(this.doc, l, new Ye(f, J[l].to()), ke);
            }
          }
        }),
        getTokenAt: function (r, i) {
          return ga(this, r, i);
        },
        getLineTokens: function (r, i) {
          return ga(this, ne(r), i, !0);
        },
        getTokenTypeAt: function (r) {
          r = Re(this.doc, r);
          var i = da(this, Ae(this.doc, r.line)),
            a = 0,
            l = (i.length - 1) / 2,
            u = r.ch,
            f;
          if (u == 0) f = i[2];
          else
            for (;;) {
              var m = (a + l) >> 1;
              if ((m ? i[m * 2 - 1] : 0) >= u) l = m;
              else if (i[m * 2 + 1] < u) a = m + 1;
              else {
                f = i[m * 2 + 2];
                break;
              }
            }
          var A = f ? f.indexOf('overlay ') : -1;
          return A < 0 ? f : A == 0 ? null : f.slice(0, A - 1);
        },
        getModeAt: function (r) {
          var i = this.doc.mode;
          return i.innerMode
            ? e.innerMode(i, this.getTokenAt(r).state).mode
            : i;
        },
        getHelper: function (r, i) {
          return this.getHelpers(r, i)[0];
        },
        getHelpers: function (r, i) {
          var a = [];
          if (!n.hasOwnProperty(i)) return a;
          var l = n[i],
            u = this.getModeAt(r);
          if (typeof u[i] == 'string') l[u[i]] && a.push(l[u[i]]);
          else if (u[i])
            for (var f = 0; f < u[i].length; f++) {
              var m = l[u[i][f]];
              m && a.push(m);
            }
          else
            u.helperType && l[u.helperType]
              ? a.push(l[u.helperType])
              : l[u.name] && a.push(l[u.name]);
          for (var A = 0; A < l._global.length; A++) {
            var P = l._global[A];
            P.pred(u, this) && Se(a, P.val) == -1 && a.push(P.val);
          }
          return a;
        },
        getStateAfter: function (r, i) {
          var a = this.doc;
          return (
            (r = ua(a, r ?? a.first + a.size - 1)), wn(this, r + 1, i).state
          );
        },
        cursorCoords: function (r, i) {
          var a,
            l = this.doc.sel.primary();
          return (
            r == null
              ? (a = l.head)
              : typeof r == 'object'
                ? (a = Re(this.doc, r))
                : (a = r ? l.from() : l.to()),
            Xt(this, a, i || 'page')
          );
        },
        charCoords: function (r, i) {
          return fi(this, Re(this.doc, r), i || 'page');
        },
        coordsChar: function (r, i) {
          return (r = Ua(this, r, i || 'page')), mo(this, r.left, r.top);
        },
        lineAtHeight: function (r, i) {
          return (
            (r = Ua(this, { top: r, left: 0 }, i || 'page').top),
            O(this.doc, r + this.display.viewOffset)
          );
        },
        heightAtLine: function (r, i, a) {
          var l = !1,
            u;
          if (typeof r == 'number') {
            var f = this.doc.first + this.doc.size - 1;
            r < this.doc.first
              ? (r = this.doc.first)
              : r > f && ((r = f), (l = !0)),
              (u = Ae(this.doc, r));
          } else u = r;
          return (
            ci(this, u, { top: 0, left: 0 }, i || 'page', a || l).top +
            (l ? this.doc.height - ar(u) : 0)
          );
        },
        defaultTextHeight: function () {
          return Vr(this.display);
        },
        defaultCharWidth: function () {
          return Jr(this.display);
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (r, i, a, l, u) {
          var f = this.display;
          r = Xt(this, Re(this.doc, r));
          var m = r.bottom,
            A = r.left;
          if (
            ((i.style.position = 'absolute'),
            i.setAttribute('cm-ignore-events', 'true'),
            this.display.input.setUneditable(i),
            f.sizer.appendChild(i),
            l == 'over')
          )
            m = r.top;
          else if (l == 'above' || l == 'near') {
            var P = Math.max(f.wrapper.clientHeight, this.doc.height),
              J = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
            (l == 'above' || r.bottom + i.offsetHeight > P) &&
            r.top > i.offsetHeight
              ? (m = r.top - i.offsetHeight)
              : r.bottom + i.offsetHeight <= P && (m = r.bottom),
              A + i.offsetWidth > J && (A = J - i.offsetWidth);
          }
          (i.style.top = m + 'px'),
            (i.style.left = i.style.right = ''),
            u == 'right'
              ? ((A = f.sizer.clientWidth - i.offsetWidth),
                (i.style.right = '0px'))
              : (u == 'left'
                  ? (A = 0)
                  : u == 'middle' &&
                    (A = (f.sizer.clientWidth - i.offsetWidth) / 2),
                (i.style.left = A + 'px')),
            a &&
              hf(this, {
                left: A,
                top: m,
                right: A + i.offsetWidth,
                bottom: m + i.offsetHeight,
              });
        },
        triggerOnKeyDown: Tt(Gl),
        triggerOnKeyPress: Tt(Xl),
        triggerOnKeyUp: Zl,
        triggerOnMouseDown: Tt(Yl),
        execCommand: function (r) {
          if ($n.hasOwnProperty(r)) return $n[r].call(null, this);
        },
        triggerElectric: Tt(function (r) {
          ns(this, r);
        }),
        findPosH: function (r, i, a, l) {
          var u = 1;
          i < 0 && ((u = -1), (i = -i));
          for (
            var f = Re(this.doc, r), m = 0;
            m < i && ((f = Go(this.doc, f, u, a, l)), !f.hitSide);
            ++m
          );
          return f;
        },
        moveH: Tt(function (r, i) {
          var a = this;
          this.extendSelectionsBy(function (l) {
            return a.display.shift || a.doc.extend || l.empty()
              ? Go(a.doc, l.head, r, i, a.options.rtlMoveVisually)
              : r < 0
                ? l.from()
                : l.to();
          }, He);
        }),
        deleteH: Tt(function (r, i) {
          var a = this.doc.sel,
            l = this.doc;
          a.somethingSelected()
            ? l.replaceSelection('', null, '+delete')
            : cn(this, function (u) {
                var f = Go(l, u.head, r, i, !1);
                return r < 0
                  ? { from: f, to: u.head }
                  : { from: u.head, to: f };
              });
        }),
        findPosV: function (r, i, a, l) {
          var u = 1,
            f = l;
          i < 0 && ((u = -1), (i = -i));
          for (var m = Re(this.doc, r), A = 0; A < i; ++A) {
            var P = Xt(this, m, 'div');
            if (
              (f == null ? (f = P.left) : (P.left = f),
              (m = as(this, P, u, a)),
              m.hitSide)
            )
              break;
          }
          return m;
        },
        moveV: Tt(function (r, i) {
          var a = this,
            l = this.doc,
            u = [],
            f = !this.display.shift && !l.extend && l.sel.somethingSelected();
          if (
            (l.extendSelectionsBy(function (A) {
              if (f) return r < 0 ? A.from() : A.to();
              var P = Xt(a, A.head, 'div');
              A.goalColumn != null && (P.left = A.goalColumn), u.push(P.left);
              var J = as(a, P, r, i);
              return (
                i == 'page' &&
                  A == l.sel.primary() &&
                  Lo(a, fi(a, J, 'div').top - P.top),
                J
              );
            }, He),
            u.length)
          )
            for (var m = 0; m < l.sel.ranges.length; m++)
              l.sel.ranges[m].goalColumn = u[m];
        }),
        findWordAt: function (r) {
          var i = this.doc,
            a = Ae(i, r.line).text,
            l = r.ch,
            u = r.ch;
          if (a) {
            var f = this.getHelper(r, 'wordChars');
            (r.sticky == 'before' || u == a.length) && l ? --l : ++u;
            for (
              var m = a.charAt(l),
                A = Me(m, f)
                  ? function (P) {
                      return Me(P, f);
                    }
                  : /\s/.test(m)
                    ? function (P) {
                        return /\s/.test(P);
                      }
                    : function (P) {
                        return !/\s/.test(P) && !Me(P);
                      };
              l > 0 && A(a.charAt(l - 1));

            )
              --l;
            for (; u < a.length && A(a.charAt(u)); ) ++u;
          }
          return new Ye(ne(r.line, l), ne(r.line, u));
        },
        toggleOverwrite: function (r) {
          (r != null && r == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? le(this.display.cursorDiv, 'CodeMirror-overwrite')
              : Q(this.display.cursorDiv, 'CodeMirror-overwrite'),
            it(this, 'overwriteToggle', this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == B(de(this));
        },
        isReadOnly: function () {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: Tt(function (r, i) {
          Mn(this, r, i);
        }),
        getScrollInfo: function () {
          var r = this.display.scroller;
          return {
            left: r.scrollLeft,
            top: r.scrollTop,
            height: r.scrollHeight - er(this) - this.display.barHeight,
            width: r.scrollWidth - er(this) - this.display.barWidth,
            clientHeight: fo(this),
            clientWidth: Er(this),
          };
        },
        scrollIntoView: Tt(function (r, i) {
          r == null
            ? ((r = { from: this.doc.sel.primary().head, to: null }),
              i == null && (i = this.options.cursorScrollMargin))
            : typeof r == 'number'
              ? (r = { from: ne(r, 0), to: null })
              : r.from == null && (r = { from: r, to: null }),
            r.to || (r.to = r.from),
            (r.margin = i || 0),
            r.from.line != null
              ? gf(this, r)
              : Ja(this, r.from, r.to, r.margin);
        }),
        setSize: Tt(function (r, i) {
          var a = this,
            l = function (f) {
              return typeof f == 'number' || /^\d+$/.test(String(f))
                ? f + 'px'
                : f;
            };
          r != null && (this.display.wrapper.style.width = l(r)),
            i != null && (this.display.wrapper.style.height = l(i)),
            this.options.lineWrapping && Ha(this);
          var u = this.display.viewFrom;
          this.doc.iter(u, this.display.viewTo, function (f) {
            if (f.widgets) {
              for (var m = 0; m < f.widgets.length; m++)
                if (f.widgets[m].noHScroll) {
                  vr(a, u, 'widget');
                  break;
                }
            }
            ++u;
          }),
            (this.curOp.forceUpdate = !0),
            it(this, 'refresh', this);
        }),
        operation: function (r) {
          return Nt(this, r);
        },
        startOperation: function () {
          return Ir(this);
        },
        endOperation: function () {
          return Fr(this);
        },
        refresh: Tt(function () {
          var r = this.display.cachedTextHeight;
          zt(this),
            (this.curOp.forceUpdate = !0),
            En(this),
            Mn(this, this.doc.scrollLeft, this.doc.scrollTop),
            zo(this.display),
            (r == null ||
              Math.abs(r - Vr(this.display)) > 0.5 ||
              this.options.lineWrapping) &&
              xo(this),
            it(this, 'refresh', this);
        }),
        swapDoc: Tt(function (r) {
          var i = this.doc;
          return (
            (i.cm = null),
            this.state.selectingText && this.state.selectingText(),
            pl(this, r),
            En(this),
            this.display.input.reset(),
            Mn(this, r.scrollLeft, r.scrollTop),
            (this.curOp.forceScroll = !0),
            ht(this, 'swapDoc', this, i),
            i
          );
        }),
        phrase: function (r) {
          var i = this.options.phrases;
          return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r;
        },
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        Wt(e),
        (e.registerHelper = function (r, i, a) {
          n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), (n[r][i] = a);
        }),
        (e.registerGlobalHelper = function (r, i, a, l) {
          e.registerHelper(r, i, l), n[r]._global.push({ pred: a, val: l });
        });
    }
    function Go(e, t, n, r, i) {
      var a = t,
        l = n,
        u = Ae(e, t.line),
        f = i && e.direction == 'rtl' ? -n : n;
      function m() {
        var _e = t.line + f;
        return _e < e.first || _e >= e.first + e.size
          ? !1
          : ((t = new ne(_e, t.ch, t.sticky)), (u = Ae(e, _e)));
      }
      function A(_e) {
        var be;
        if (r == 'codepoint') {
          var Ce = u.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
          if (isNaN(Ce)) be = null;
          else {
            var Ne =
              n > 0 ? Ce >= 55296 && Ce < 56320 : Ce >= 56320 && Ce < 57343;
            be = new ne(
              t.line,
              Math.max(0, Math.min(u.text.length, t.ch + n * (Ne ? 2 : 1))),
              -n
            );
          }
        } else i ? (be = Vf(e.cm, u, t, n)) : (be = jo(u, t, n));
        if (be == null)
          if (!_e && m()) t = Ro(i, e.cm, u, t.line, f);
          else return !1;
        else t = be;
        return !0;
      }
      if (r == 'char' || r == 'codepoint') A();
      else if (r == 'column') A(!0);
      else if (r == 'word' || r == 'group')
        for (
          var P = null,
            J = r == 'group',
            Y = e.cm && e.cm.getHelper(t, 'wordChars'),
            ie = !0;
          !(n < 0 && !A(!ie));
          ie = !1
        ) {
          var ue =
              u.text.charAt(t.ch) ||
              `
`,
            me = Me(ue, Y)
              ? 'w'
              : J &&
                  ue ==
                    `
`
                ? 'n'
                : !J || /\s/.test(ue)
                  ? null
                  : 'p';
          if ((J && !ie && !me && (me = 's'), P && P != me)) {
            n < 0 && ((n = 1), A(), (t.sticky = 'after'));
            break;
          }
          if ((me && (P = me), n > 0 && !A(!ie))) break;
        }
      var ve = wi(e, t, a, l, !0);
      return Xe(a, ve) && (ve.hitSide = !0), ve;
    }
    function as(e, t, n, r) {
      var i = e.doc,
        a = t.left,
        l;
      if (r == 'page') {
        var u = Math.min(
            e.display.wrapper.clientHeight,
            pe(e).innerHeight || i(e).documentElement.clientHeight
          ),
          f = Math.max(u - 0.5 * Vr(e.display), 3);
        l = (n > 0 ? t.bottom : t.top) + n * f;
      } else r == 'line' && (l = n > 0 ? t.bottom + 3 : t.top - 3);
      for (var m; (m = mo(e, a, l)), !!m.outside; ) {
        if (n < 0 ? l <= 0 : l >= i.height) {
          m.hitSide = !0;
          break;
        }
        l += n * 5;
      }
      return m;
    }
    var Qe = function (e) {
      (this.cm = e),
        (this.lastAnchorNode =
          this.lastAnchorOffset =
          this.lastFocusNode =
          this.lastFocusOffset =
            null),
        (this.polling = new qe()),
        (this.composing = null),
        (this.gracePeriod = !1),
        (this.readDOMTimeout = null);
    };
    (Qe.prototype.init = function (e) {
      var t = this,
        n = this,
        r = n.cm,
        i = (n.div = e.lineDiv);
      (i.contentEditable = !0),
        Ko(
          i,
          r.options.spellcheck,
          r.options.autocorrect,
          r.options.autocapitalize
        );
      function a(u) {
        for (var f = u.target; f; f = f.parentNode) {
          if (f == i) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(f.className)) break;
        }
        return !1;
      }
      Fe(i, 'paste', function (u) {
        !a(u) ||
          ot(r, u) ||
          rs(u, r) ||
          (p <= 11 &&
            setTimeout(
              gt(r, function () {
                return t.updateFromDOM();
              }),
              20
            ));
      }),
        Fe(i, 'compositionstart', function (u) {
          t.composing = { data: u.data, done: !1 };
        }),
        Fe(i, 'compositionupdate', function (u) {
          t.composing || (t.composing = { data: u.data, done: !1 });
        }),
        Fe(i, 'compositionend', function (u) {
          t.composing &&
            (u.data != t.composing.data && t.readFromDOMSoon(),
            (t.composing.done = !0));
        }),
        Fe(i, 'touchstart', function () {
          return n.forceCompositionEnd();
        }),
        Fe(i, 'input', function () {
          t.composing || t.readFromDOMSoon();
        });
      function l(u) {
        if (!(!a(u) || ot(r, u))) {
          if (r.somethingSelected())
            zi({ lineWise: !1, text: r.getSelections() }),
              u.type == 'cut' && r.replaceSelection('', null, 'cut');
          else if (r.options.lineWiseCopyCut) {
            var f = is(r);
            zi({ lineWise: !0, text: f.text }),
              u.type == 'cut' &&
                r.operation(function () {
                  r.setSelections(f.ranges, 0, ke),
                    r.replaceSelection('', null, 'cut');
                });
          } else return;
          if (u.clipboardData) {
            u.clipboardData.clearData();
            var m = Qt.text.join(`
`);
            if (
              (u.clipboardData.setData('Text', m),
              u.clipboardData.getData('Text') == m)
            ) {
              u.preventDefault();
              return;
            }
          }
          var A = os(),
            P = A.firstChild;
          Ko(P),
            r.display.lineSpace.insertBefore(A, r.display.lineSpace.firstChild),
            (P.value = Qt.text.join(`
`));
          var J = B(ze(i));
          q(P),
            setTimeout(function () {
              r.display.lineSpace.removeChild(A),
                J.focus(),
                J == i && n.showPrimarySelection();
            }, 50);
        }
      }
      Fe(i, 'copy', l), Fe(i, 'cut', l);
    }),
      (Qe.prototype.screenReaderLabelChanged = function (e) {
        e
          ? this.div.setAttribute('aria-label', e)
          : this.div.removeAttribute('aria-label');
      }),
      (Qe.prototype.prepareSelection = function () {
        var e = Ya(this.cm, !1);
        return (e.focus = B(ze(this.div)) == this.div), e;
      }),
      (Qe.prototype.showSelection = function (e, t) {
        !e ||
          !this.cm.display.view.length ||
          ((e.focus || t) && this.showPrimarySelection(),
          this.showMultipleSelections(e));
      }),
      (Qe.prototype.getSelection = function () {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }),
      (Qe.prototype.showPrimarySelection = function () {
        var e = this.getSelection(),
          t = this.cm,
          n = t.doc.sel.primary(),
          r = n.from(),
          i = n.to();
        if (
          t.display.viewTo == t.display.viewFrom ||
          r.line >= t.display.viewTo ||
          i.line < t.display.viewFrom
        ) {
          e.removeAllRanges();
          return;
        }
        var a = Mi(t, e.anchorNode, e.anchorOffset),
          l = Mi(t, e.focusNode, e.focusOffset);
        if (
          !(
            a &&
            !a.bad &&
            l &&
            !l.bad &&
            ye(Zr(a, l), r) == 0 &&
            ye(Et(a, l), i) == 0
          )
        ) {
          var u = t.display.view,
            f = (r.line >= t.display.viewFrom && ls(t, r)) || {
              node: u[0].measure.map[2],
              offset: 0,
            },
            m = i.line < t.display.viewTo && ls(t, i);
          if (!m) {
            var A = u[u.length - 1].measure,
              P = A.maps ? A.maps[A.maps.length - 1] : A.map;
            m = {
              node: P[P.length - 1],
              offset: P[P.length - 2] - P[P.length - 3],
            };
          }
          if (!f || !m) {
            e.removeAllRanges();
            return;
          }
          var J = e.rangeCount && e.getRangeAt(0),
            Y;
          try {
            Y = X(f.node, f.offset, m.offset, m.node);
          } catch {}
          Y &&
            (!v && t.state.focused
              ? (e.collapse(f.node, f.offset),
                Y.collapsed || (e.removeAllRanges(), e.addRange(Y)))
              : (e.removeAllRanges(), e.addRange(Y)),
            J && e.anchorNode == null
              ? e.addRange(J)
              : v && this.startGracePeriod()),
            this.rememberSelection();
        }
      }),
      (Qe.prototype.startGracePeriod = function () {
        var e = this;
        clearTimeout(this.gracePeriod),
          (this.gracePeriod = setTimeout(function () {
            (e.gracePeriod = !1),
              e.selectionChanged() &&
                e.cm.operation(function () {
                  return (e.cm.curOp.selectionChanged = !0);
                });
          }, 20));
      }),
      (Qe.prototype.showMultipleSelections = function (e) {
        V(this.cm.display.cursorDiv, e.cursors),
          V(this.cm.display.selectionDiv, e.selection);
      }),
      (Qe.prototype.rememberSelection = function () {
        var e = this.getSelection();
        (this.lastAnchorNode = e.anchorNode),
          (this.lastAnchorOffset = e.anchorOffset),
          (this.lastFocusNode = e.focusNode),
          (this.lastFocusOffset = e.focusOffset);
      }),
      (Qe.prototype.selectionInEditor = function () {
        var e = this.getSelection();
        if (!e.rangeCount) return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return I(this.div, t);
      }),
      (Qe.prototype.focus = function () {
        this.cm.options.readOnly != 'nocursor' &&
          ((!this.selectionInEditor() || B(ze(this.div)) != this.div) &&
            this.showSelection(this.prepareSelection(), !0),
          this.div.focus());
      }),
      (Qe.prototype.blur = function () {
        this.div.blur();
      }),
      (Qe.prototype.getField = function () {
        return this.div;
      }),
      (Qe.prototype.supportsTouch = function () {
        return !0;
      }),
      (Qe.prototype.receivedFocus = function () {
        var e = this,
          t = this;
        this.selectionInEditor()
          ? setTimeout(function () {
              return e.pollSelection();
            }, 20)
          : Nt(this.cm, function () {
              return (t.cm.curOp.selectionChanged = !0);
            });
        function n() {
          t.cm.state.focused &&
            (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n));
        }
        this.polling.set(this.cm.options.pollInterval, n);
      }),
      (Qe.prototype.selectionChanged = function () {
        var e = this.getSelection();
        return (
          e.anchorNode != this.lastAnchorNode ||
          e.anchorOffset != this.lastAnchorOffset ||
          e.focusNode != this.lastFocusNode ||
          e.focusOffset != this.lastFocusOffset
        );
      }),
      (Qe.prototype.pollSelection = function () {
        if (
          !(
            this.readDOMTimeout != null ||
            this.gracePeriod ||
            !this.selectionChanged()
          )
        ) {
          var e = this.getSelection(),
            t = this.cm;
          if (
            R &&
            x &&
            this.cm.display.gutterSpecs.length &&
            bd(e.anchorNode)
          ) {
            this.cm.triggerOnKeyDown({
              type: 'keydown',
              keyCode: 8,
              preventDefault: Math.abs,
            }),
              this.blur(),
              this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var n = Mi(t, e.anchorNode, e.anchorOffset),
              r = Mi(t, e.focusNode, e.focusOffset);
            n &&
              r &&
              Nt(t, function () {
                wt(t.doc, yr(n, r), ke),
                  (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
              });
          }
        }
      }),
      (Qe.prototype.pollContent = function () {
        this.readDOMTimeout != null &&
          (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
        var e = this.cm,
          t = e.display,
          n = e.doc.sel.primary(),
          r = n.from(),
          i = n.to();
        if (
          (r.ch == 0 &&
            r.line > e.firstLine() &&
            (r = ne(r.line - 1, Ae(e.doc, r.line - 1).length)),
          i.ch == Ae(e.doc, i.line).text.length &&
            i.line < e.lastLine() &&
            (i = ne(i.line + 1, 0)),
          r.line < t.viewFrom || i.line > t.viewTo - 1)
        )
          return !1;
        var a, l, u;
        r.line == t.viewFrom || (a = Ar(e, r.line)) == 0
          ? ((l = k(t.view[0].line)), (u = t.view[0].node))
          : ((l = k(t.view[a].line)), (u = t.view[a - 1].node.nextSibling));
        var f = Ar(e, i.line),
          m,
          A;
        if (
          (f == t.view.length - 1
            ? ((m = t.viewTo - 1), (A = t.lineDiv.lastChild))
            : ((m = k(t.view[f + 1].line) - 1),
              (A = t.view[f + 1].node.previousSibling)),
          !u)
        )
          return !1;
        for (
          var P = e.doc.splitLines(yd(e, u, A, l, m)),
            J = ir(e.doc, ne(l, 0), ne(m, Ae(e.doc, m).text.length));
          P.length > 1 && J.length > 1;

        )
          if (ce(P) == ce(J)) P.pop(), J.pop(), m--;
          else if (P[0] == J[0]) P.shift(), J.shift(), l++;
          else break;
        for (
          var Y = 0,
            ie = 0,
            ue = P[0],
            me = J[0],
            ve = Math.min(ue.length, me.length);
          Y < ve && ue.charCodeAt(Y) == me.charCodeAt(Y);

        )
          ++Y;
        for (
          var _e = ce(P),
            be = ce(J),
            Ce = Math.min(
              _e.length - (P.length == 1 ? Y : 0),
              be.length - (J.length == 1 ? Y : 0)
            );
          ie < Ce &&
          _e.charCodeAt(_e.length - ie - 1) ==
            be.charCodeAt(be.length - ie - 1);

        )
          ++ie;
        if (P.length == 1 && J.length == 1 && l == r.line)
          for (
            ;
            Y &&
            Y > r.ch &&
            _e.charCodeAt(_e.length - ie - 1) ==
              be.charCodeAt(be.length - ie - 1);

          )
            Y--, ie++;
        (P[P.length - 1] = _e.slice(0, _e.length - ie).replace(/^\u200b+/, '')),
          (P[0] = P[0].slice(Y).replace(/\u200b+$/, ''));
        var Ne = ne(l, Y),
          Ie = ne(m, J.length ? ce(J).length - ie : 0);
        if (P.length > 1 || P[0] || ye(Ne, Ie))
          return ln(e.doc, P, Ne, Ie, '+input'), !0;
      }),
      (Qe.prototype.ensurePolled = function () {
        this.forceCompositionEnd();
      }),
      (Qe.prototype.reset = function () {
        this.forceCompositionEnd();
      }),
      (Qe.prototype.forceCompositionEnd = function () {
        this.composing &&
          (clearTimeout(this.readDOMTimeout),
          (this.composing = null),
          this.updateFromDOM(),
          this.div.blur(),
          this.div.focus());
      }),
      (Qe.prototype.readFromDOMSoon = function () {
        var e = this;
        this.readDOMTimeout == null &&
          (this.readDOMTimeout = setTimeout(function () {
            if (((e.readDOMTimeout = null), e.composing))
              if (e.composing.done) e.composing = null;
              else return;
            e.updateFromDOM();
          }, 80));
      }),
      (Qe.prototype.updateFromDOM = function () {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) &&
          Nt(this.cm, function () {
            return zt(e.cm);
          });
      }),
      (Qe.prototype.setUneditable = function (e) {
        e.contentEditable = 'false';
      }),
      (Qe.prototype.onKeyPress = function (e) {
        e.charCode == 0 ||
          this.composing ||
          (e.preventDefault(),
          this.cm.isReadOnly() ||
            gt(this.cm, $o)(
              this.cm,
              String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode),
              0
            ));
      }),
      (Qe.prototype.readOnlyChanged = function (e) {
        this.div.contentEditable = String(e != 'nocursor');
      }),
      (Qe.prototype.onContextMenu = function () {}),
      (Qe.prototype.resetPosition = function () {}),
      (Qe.prototype.needsContentAttribute = !0);
    function ls(e, t) {
      var n = po(e, t.line);
      if (!n || n.hidden) return null;
      var r = Ae(e.doc, t.line),
        i = Na(n, r, t.line),
        a = Pe(r, e.doc.direction),
        l = 'left';
      if (a) {
        var u = Pt(a, t.ch);
        l = u % 2 ? 'right' : 'left';
      }
      var f = ja(i.map, t.ch, l);
      return (f.offset = f.collapse == 'right' ? f.end : f.start), f;
    }
    function bd(e) {
      for (var t = e; t; t = t.parentNode)
        if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
      return !1;
    }
    function dn(e, t) {
      return t && (e.bad = !0), e;
    }
    function yd(e, t, n, r, i) {
      var a = '',
        l = !1,
        u = e.doc.lineSeparator(),
        f = !1;
      function m(Y) {
        return function (ie) {
          return ie.id == Y;
        };
      }
      function A() {
        l && ((a += u), f && (a += u), (l = f = !1));
      }
      function P(Y) {
        Y && (A(), (a += Y));
      }
      function J(Y) {
        if (Y.nodeType == 1) {
          var ie = Y.getAttribute('cm-text');
          if (ie) {
            P(ie);
            return;
          }
          var ue = Y.getAttribute('cm-marker'),
            me;
          if (ue) {
            var ve = e.findMarks(ne(r, 0), ne(i + 1, 0), m(+ue));
            ve.length &&
              (me = ve[0].find(0)) &&
              P(ir(e.doc, me.from, me.to).join(u));
            return;
          }
          if (Y.getAttribute('contenteditable') == 'false') return;
          var _e = /^(pre|div|p|li|table|br)$/i.test(Y.nodeName);
          if (!/^br$/i.test(Y.nodeName) && Y.textContent.length == 0) return;
          _e && A();
          for (var be = 0; be < Y.childNodes.length; be++) J(Y.childNodes[be]);
          /^(pre|p)$/i.test(Y.nodeName) && (f = !0), _e && (l = !0);
        } else
          Y.nodeType == 3 &&
            P(Y.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
      }
      for (; J(t), t != n; ) (t = t.nextSibling), (f = !1);
      return a;
    }
    function Mi(e, t, n) {
      var r;
      if (t == e.display.lineDiv) {
        if (((r = e.display.lineDiv.childNodes[n]), !r))
          return dn(e.clipPos(ne(e.display.viewTo - 1)), !0);
        (t = null), (n = 0);
      } else
        for (r = t; ; r = r.parentNode) {
          if (!r || r == e.display.lineDiv) return null;
          if (r.parentNode && r.parentNode == e.display.lineDiv) break;
        }
      for (var i = 0; i < e.display.view.length; i++) {
        var a = e.display.view[i];
        if (a.node == r) return xd(a, t, n);
      }
    }
    function xd(e, t, n) {
      var r = e.text.firstChild,
        i = !1;
      if (!t || !I(r, t)) return dn(ne(k(e.line), 0), !0);
      if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
        var a = e.rest ? ce(e.rest) : e.line;
        return dn(ne(k(a), a.text.length), i);
      }
      var l = t.nodeType == 3 ? t : null,
        u = t;
      for (
        !l &&
        t.childNodes.length == 1 &&
        t.firstChild.nodeType == 3 &&
        ((l = t.firstChild), n && (n = l.nodeValue.length));
        u.parentNode != r;

      )
        u = u.parentNode;
      var f = e.measure,
        m = f.maps;
      function A(me, ve, _e) {
        for (var be = -1; be < (m ? m.length : 0); be++)
          for (
            var Ce = be < 0 ? f.map : m[be], Ne = 0;
            Ne < Ce.length;
            Ne += 3
          ) {
            var Ie = Ce[Ne + 2];
            if (Ie == me || Ie == ve) {
              var $e = k(be < 0 ? e.line : e.rest[be]),
                Ve = Ce[Ne] + _e;
              return (
                (_e < 0 || Ie != me) && (Ve = Ce[Ne + (_e ? 1 : 0)]), ne($e, Ve)
              );
            }
          }
      }
      var P = A(l, u, n);
      if (P) return dn(P, i);
      for (
        var J = u.nextSibling, Y = l ? l.nodeValue.length - n : 0;
        J;
        J = J.nextSibling
      ) {
        if (((P = A(J, J.firstChild, 0)), P))
          return dn(ne(P.line, P.ch - Y), i);
        Y += J.textContent.length;
      }
      for (var ie = u.previousSibling, ue = n; ie; ie = ie.previousSibling) {
        if (((P = A(ie, ie.firstChild, -1)), P))
          return dn(ne(P.line, P.ch + ue), i);
        ue += ie.textContent.length;
      }
    }
    var st = function (e) {
      (this.cm = e),
        (this.prevInput = ''),
        (this.pollingFast = !1),
        (this.polling = new qe()),
        (this.hasSelection = !1),
        (this.composing = null),
        (this.resetting = !1);
    };
    (st.prototype.init = function (e) {
      var t = this,
        n = this,
        r = this.cm;
      this.createField(e);
      var i = this.textarea;
      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
        y && (i.style.width = '0px'),
        Fe(i, 'input', function () {
          s && p >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
        }),
        Fe(i, 'paste', function (l) {
          ot(r, l) ||
            rs(l, r) ||
            ((r.state.pasteIncoming = +new Date()), n.fastPoll());
        });
      function a(l) {
        if (!ot(r, l)) {
          if (r.somethingSelected())
            zi({ lineWise: !1, text: r.getSelections() });
          else if (r.options.lineWiseCopyCut) {
            var u = is(r);
            zi({ lineWise: !0, text: u.text }),
              l.type == 'cut'
                ? r.setSelections(u.ranges, null, ke)
                : ((n.prevInput = ''),
                  (i.value = u.text.join(`
`)),
                  q(i));
          } else return;
          l.type == 'cut' && (r.state.cutIncoming = +new Date());
        }
      }
      Fe(i, 'cut', a),
        Fe(i, 'copy', a),
        Fe(e.scroller, 'paste', function (l) {
          if (!(lr(e, l) || ot(r, l))) {
            if (!i.dispatchEvent) {
              (r.state.pasteIncoming = +new Date()), n.focus();
              return;
            }
            var u = new Event('paste');
            (u.clipboardData = l.clipboardData), i.dispatchEvent(u);
          }
        }),
        Fe(e.lineSpace, 'selectstart', function (l) {
          lr(e, l) || kt(l);
        }),
        Fe(i, 'compositionstart', function () {
          var l = r.getCursor('from');
          n.composing && n.composing.range.clear(),
            (n.composing = {
              start: l,
              range: r.markText(l, r.getCursor('to'), {
                className: 'CodeMirror-composing',
              }),
            });
        }),
        Fe(i, 'compositionend', function () {
          n.composing &&
            (n.poll(), n.composing.range.clear(), (n.composing = null));
        });
    }),
      (st.prototype.createField = function (e) {
        (this.wrapper = os()), (this.textarea = this.wrapper.firstChild);
        var t = this.cm.options;
        Ko(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
      }),
      (st.prototype.screenReaderLabelChanged = function (e) {
        e
          ? this.textarea.setAttribute('aria-label', e)
          : this.textarea.removeAttribute('aria-label');
      }),
      (st.prototype.prepareSelection = function () {
        var e = this.cm,
          t = e.display,
          n = e.doc,
          r = Ya(e);
        if (e.options.moveInputWithCursor) {
          var i = Xt(e, n.sel.primary().head, 'div'),
            a = t.wrapper.getBoundingClientRect(),
            l = t.lineDiv.getBoundingClientRect();
          (r.teTop = Math.max(
            0,
            Math.min(t.wrapper.clientHeight - 10, i.top + l.top - a.top)
          )),
            (r.teLeft = Math.max(
              0,
              Math.min(t.wrapper.clientWidth - 10, i.left + l.left - a.left)
            ));
        }
        return r;
      }),
      (st.prototype.showSelection = function (e) {
        var t = this.cm,
          n = t.display;
        V(n.cursorDiv, e.cursors),
          V(n.selectionDiv, e.selection),
          e.teTop != null &&
            ((this.wrapper.style.top = e.teTop + 'px'),
            (this.wrapper.style.left = e.teLeft + 'px'));
      }),
      (st.prototype.reset = function (e) {
        if (!(this.contextMenuPending || (this.composing && e))) {
          var t = this.cm;
          if (((this.resetting = !0), t.somethingSelected())) {
            this.prevInput = '';
            var n = t.getSelection();
            (this.textarea.value = n),
              t.state.focused && q(this.textarea),
              s && p >= 9 && (this.hasSelection = n);
          } else
            e ||
              ((this.prevInput = this.textarea.value = ''),
              s && p >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }),
      (st.prototype.getField = function () {
        return this.textarea;
      }),
      (st.prototype.supportsTouch = function () {
        return !1;
      }),
      (st.prototype.focus = function () {
        if (
          this.cm.options.readOnly != 'nocursor' &&
          (!M || B(ze(this.textarea)) != this.textarea)
        )
          try {
            this.textarea.focus();
          } catch {}
      }),
      (st.prototype.blur = function () {
        this.textarea.blur();
      }),
      (st.prototype.resetPosition = function () {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }),
      (st.prototype.receivedFocus = function () {
        this.slowPoll();
      }),
      (st.prototype.slowPoll = function () {
        var e = this;
        this.pollingFast ||
          this.polling.set(this.cm.options.pollInterval, function () {
            e.poll(), e.cm.state.focused && e.slowPoll();
          });
      }),
      (st.prototype.fastPoll = function () {
        var e = !1,
          t = this;
        t.pollingFast = !0;
        function n() {
          var r = t.poll();
          !r && !e
            ? ((e = !0), t.polling.set(60, n))
            : ((t.pollingFast = !1), t.slowPoll());
        }
        t.polling.set(20, n);
      }),
      (st.prototype.poll = function () {
        var e = this,
          t = this.cm,
          n = this.textarea,
          r = this.prevInput;
        if (
          this.contextMenuPending ||
          this.resetting ||
          !t.state.focused ||
          (hr(n) && !r && !this.composing) ||
          t.isReadOnly() ||
          t.options.disableInput ||
          t.state.keySeq
        )
          return !1;
        var i = n.value;
        if (i == r && !t.somethingSelected()) return !1;
        if (
          (s && p >= 9 && this.hasSelection === i) ||
          (H && /[\uf700-\uf7ff]/.test(i))
        )
          return t.display.input.reset(), !1;
        if (t.doc.sel == t.display.selForContextMenu) {
          var a = i.charCodeAt(0);
          if ((a == 8203 && !r && (r = '\u200B'), a == 8666))
            return this.reset(), this.cm.execCommand('undo');
        }
        for (
          var l = 0, u = Math.min(r.length, i.length);
          l < u && r.charCodeAt(l) == i.charCodeAt(l);

        )
          ++l;
        return (
          Nt(t, function () {
            $o(
              t,
              i.slice(l),
              r.length - l,
              null,
              e.composing ? '*compose' : null
            ),
              i.length > 1e3 ||
              i.indexOf(`
`) > -1
                ? (n.value = e.prevInput = '')
                : (e.prevInput = i),
              e.composing &&
                (e.composing.range.clear(),
                (e.composing.range = t.markText(
                  e.composing.start,
                  t.getCursor('to'),
                  { className: 'CodeMirror-composing' }
                )));
          }),
          !0
        );
      }),
      (st.prototype.ensurePolled = function () {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }),
      (st.prototype.onKeyPress = function () {
        s && p >= 9 && (this.hasSelection = null), this.fastPoll();
      }),
      (st.prototype.onContextMenu = function (e) {
        var t = this,
          n = t.cm,
          r = n.display,
          i = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var a = Mr(n, e),
          l = r.scroller.scrollTop;
        if (!a || d) return;
        var u = n.options.resetSelectionOnContextMenu;
        u && n.doc.sel.contains(a) == -1 && gt(n, wt)(n.doc, yr(a), ke);
        var f = i.style.cssText,
          m = t.wrapper.style.cssText,
          A = t.wrapper.offsetParent.getBoundingClientRect();
        (t.wrapper.style.cssText = 'position: static'),
          (i.style.cssText =
            `position: absolute; width: 30px; height: 30px;
      top: ` +
            (e.clientY - A.top - 5) +
            'px; left: ' +
            (e.clientX - A.left - 5) +
            `px;
      z-index: 1000; background: ` +
            (s ? 'rgba(255, 255, 255, .05)' : 'transparent') +
            `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
        var P;
        g && (P = i.ownerDocument.defaultView.scrollY),
          r.input.focus(),
          g && i.ownerDocument.defaultView.scrollTo(null, P),
          r.input.reset(),
          n.somethingSelected() || (i.value = t.prevInput = ' '),
          (t.contextMenuPending = Y),
          (r.selForContextMenu = n.doc.sel),
          clearTimeout(r.detectingSelectAll);
        function J() {
          if (i.selectionStart != null) {
            var ue = n.somethingSelected(),
              me = '\u200B' + (ue ? i.value : '');
            (i.value = '\u21DA'),
              (i.value = me),
              (t.prevInput = ue ? '' : '\u200B'),
              (i.selectionStart = 1),
              (i.selectionEnd = me.length),
              (r.selForContextMenu = n.doc.sel);
          }
        }
        function Y() {
          if (
            t.contextMenuPending == Y &&
            ((t.contextMenuPending = !1),
            (t.wrapper.style.cssText = m),
            (i.style.cssText = f),
            s && p < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = l)),
            i.selectionStart != null)
          ) {
            (!s || (s && p < 9)) && J();
            var ue = 0,
              me = function () {
                r.selForContextMenu == n.doc.sel &&
                i.selectionStart == 0 &&
                i.selectionEnd > 0 &&
                t.prevInput == '\u200B'
                  ? gt(n, Ll)(n)
                  : ue++ < 10
                    ? (r.detectingSelectAll = setTimeout(me, 500))
                    : ((r.selForContextMenu = null), r.input.reset());
              };
            r.detectingSelectAll = setTimeout(me, 200);
          }
        }
        if ((s && p >= 9 && J(), F)) {
          dr(e);
          var ie = function () {
            _t(window, 'mouseup', ie), setTimeout(Y, 20);
          };
          Fe(window, 'mouseup', ie);
        } else setTimeout(Y, 50);
      }),
      (st.prototype.readOnlyChanged = function (e) {
        e || this.reset(),
          (this.textarea.disabled = e == 'nocursor'),
          (this.textarea.readOnly = !!e);
      }),
      (st.prototype.setUneditable = function () {}),
      (st.prototype.needsContentAttribute = !1);
    function _d(e, t) {
      if (
        ((t = t ? ge(t) : {}),
        (t.value = e.value),
        !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
        !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
        t.autofocus == null)
      ) {
        var n = B(ze(e));
        t.autofocus =
          n == e || (e.getAttribute('autofocus') != null && n == document.body);
      }
      function r() {
        e.value = u.getValue();
      }
      var i;
      if (e.form && (Fe(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
        var a = e.form;
        i = a.submit;
        try {
          var l = (a.submit = function () {
            r(), (a.submit = i), a.submit(), (a.submit = l);
          });
        } catch {}
      }
      (t.finishInit = function (f) {
        (f.save = r),
          (f.getTextArea = function () {
            return e;
          }),
          (f.toTextArea = function () {
            (f.toTextArea = isNaN),
              r(),
              e.parentNode.removeChild(f.getWrapperElement()),
              (e.style.display = ''),
              e.form &&
                (_t(e.form, 'submit', r),
                !t.leaveSubmitMethodAlone &&
                  typeof e.form.submit == 'function' &&
                  (e.form.submit = i));
          });
      }),
        (e.style.display = 'none');
      var u = tt(function (f) {
        return e.parentNode.insertBefore(f, e.nextSibling);
      }, t);
      return u;
    }
    function kd(e) {
      (e.off = _t),
        (e.on = Fe),
        (e.wheelEventPixels = zf),
        (e.Doc = Mt),
        (e.splitLines = Bt),
        (e.countColumn = Oe),
        (e.findColumn = Ge),
        (e.isWordChar = we),
        (e.Pass = Ze),
        (e.signal = it),
        (e.Line = Xr),
        (e.changeEnd = xr),
        (e.scrollbarModel = rl),
        (e.Pos = ne),
        (e.cmpPos = ye),
        (e.modes = Wr),
        (e.mimeModes = Kt),
        (e.resolveMode = Ur),
        (e.getMode = $r),
        (e.modeExtensions = gr),
        (e.extendMode = Kr),
        (e.copyState = Vt),
        (e.startState = Gr),
        (e.innerMode = _n),
        (e.commands = $n),
        (e.keyMap = ur),
        (e.keyName = Bl),
        (e.isModifierKey = Rl),
        (e.lookupKey = un),
        (e.normalizeKeyMap = Qf),
        (e.StringStream = at),
        (e.SharedTextMarker = Bn),
        (e.TextMarker = kr),
        (e.LineWidget = Hn),
        (e.e_preventDefault = kt),
        (e.e_stopPropagation = Hr),
        (e.e_stop = dr),
        (e.addClass = le),
        (e.contains = I),
        (e.rmClass = Q),
        (e.keyNames = wr);
    }
    pd(tt), vd(tt);
    var wd = 'iter insert remove copy getEditor constructor'.split(' ');
    for (var Ai in Mt.prototype)
      Mt.prototype.hasOwnProperty(Ai) &&
        Se(wd, Ai) < 0 &&
        (tt.prototype[Ai] = (function (e) {
          return function () {
            return e.apply(this.doc, arguments);
          };
        })(Mt.prototype[Ai]));
    return (
      Wt(Mt),
      (tt.inputStyles = { textarea: st, contenteditable: Qe }),
      (tt.defineMode = function (e) {
        !tt.defaults.mode && e != 'null' && (tt.defaults.mode = e),
          Gt.apply(this, arguments);
      }),
      (tt.defineMIME = Cr),
      tt.defineMode('null', function () {
        return {
          token: function (e) {
            return e.skipToEnd();
          },
        };
      }),
      tt.defineMIME('text/plain', 'null'),
      (tt.defineExtension = function (e, t) {
        tt.prototype[e] = t;
      }),
      (tt.defineDocExtension = function (e, t) {
        Mt.prototype[e] = t;
      }),
      (tt.fromTextArea = _d),
      kd(tt),
      (tt.version = '5.65.16'),
      tt
    );
  });
});
var Yn = Ke((us, cs) => {
  (function (o) {
    typeof us == 'object' && typeof cs == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.overlayMode = function (h, v, C) {
      return {
        startState: function () {
          return {
            base: o.startState(h),
            overlay: o.startState(v),
            basePos: 0,
            baseCur: null,
            overlayPos: 0,
            overlayCur: null,
            streamSeen: null,
          };
        },
        copyState: function (b) {
          return {
            base: o.copyState(h, b.base),
            overlay: o.copyState(v, b.overlay),
            basePos: b.basePos,
            baseCur: null,
            overlayPos: b.overlayPos,
            overlayCur: null,
          };
        },
        token: function (b, S) {
          return (
            (b != S.streamSeen ||
              Math.min(S.basePos, S.overlayPos) < b.start) &&
              ((S.streamSeen = b), (S.basePos = S.overlayPos = b.start)),
            b.start == S.basePos &&
              ((S.baseCur = h.token(b, S.base)), (S.basePos = b.pos)),
            b.start == S.overlayPos &&
              ((b.pos = b.start),
              (S.overlayCur = v.token(b, S.overlay)),
              (S.overlayPos = b.pos)),
            (b.pos = Math.min(S.basePos, S.overlayPos)),
            S.overlayCur == null
              ? S.baseCur
              : (S.baseCur != null && S.overlay.combineTokens) ||
                  (C && S.overlay.combineTokens == null)
                ? S.baseCur + ' ' + S.overlayCur
                : S.overlayCur
          );
        },
        indent:
          h.indent &&
          function (b, S, s) {
            return h.indent(b.base, S, s);
          },
        electricChars: h.electricChars,
        innerMode: function (b) {
          return { state: b.base, mode: h };
        },
        blankLine: function (b) {
          var S, s;
          return (
            h.blankLine && (S = h.blankLine(b.base)),
            v.blankLine && (s = v.blankLine(b.overlay)),
            s == null ? S : C && S != null ? S + ' ' + s : s
          );
        },
      };
    };
  });
});
var ps = Ke((fs, ds) => {
  (function (o) {
    typeof fs == 'object' && typeof ds == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    var h = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
      v = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
      C = /[*+-]\s/;
    o.commands.newlineAndIndentContinueMarkdownList = function (S) {
      if (S.getOption('disableInput')) return o.Pass;
      for (var s = S.listSelections(), p = [], g = 0; g < s.length; g++) {
        var L = s[g].head,
          x = S.getStateAfter(L.line),
          c = o.innerMode(S.getMode(), x);
        if (c.mode.name !== 'markdown' && c.mode.helperType !== 'markdown') {
          S.execCommand('newlineAndIndent');
          return;
        } else x = c.state;
        var d = x.list !== !1,
          w = x.quote !== 0,
          E = S.getLine(L.line),
          z = h.exec(E),
          y = /^\s*$/.test(E.slice(0, L.ch));
        if (!s[g].empty() || (!d && !w) || !z || y) {
          S.execCommand('newlineAndIndent');
          return;
        }
        if (v.test(E)) {
          var R = w && />\s*$/.test(E),
            M = !/>\s*$/.test(E);
          (R || M) &&
            S.replaceRange(
              '',
              { line: L.line, ch: 0 },
              { line: L.line, ch: L.ch + 1 }
            ),
            (p[g] = `
`);
        } else {
          var H = z[1],
            Z = z[5],
            ee = !(C.test(z[2]) || z[2].indexOf('>') >= 0),
            re = ee ? parseInt(z[3], 10) + 1 + z[4] : z[2].replace('x', ' ');
          (p[g] =
            `
` +
            H +
            re +
            Z),
            ee && b(S, L);
        }
      }
      S.replaceSelections(p);
    };
    function b(S, s) {
      var p = s.line,
        g = 0,
        L = 0,
        x = h.exec(S.getLine(p)),
        c = x[1];
      do {
        g += 1;
        var d = p + g,
          w = S.getLine(d),
          E = h.exec(w);
        if (E) {
          var z = E[1],
            y = parseInt(x[3], 10) + g - L,
            R = parseInt(E[3], 10),
            M = R;
          if (c === z && !isNaN(R))
            y === R && (M = R + 1),
              y > R && (M = y + 1),
              S.replaceRange(
                w.replace(h, z + M + E[4] + E[5]),
                { line: d, ch: 0 },
                { line: d, ch: w.length }
              );
          else {
            if (c.length > z.length || (c.length < z.length && g === 1)) return;
            L += 1;
          }
        }
      } while (E);
    }
  });
});
var ms = Ke((hs, gs) => {
  (function (o) {
    typeof hs == 'object' && typeof gs == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    o.defineOption('placeholder', '', function (p, g, L) {
      var x = L && L != o.Init;
      if (g && !x)
        p.on('blur', b),
          p.on('change', S),
          p.on('swapDoc', S),
          o.on(
            p.getInputField(),
            'compositionupdate',
            (p.state.placeholderCompose = function () {
              C(p);
            })
          ),
          S(p);
      else if (!g && x) {
        p.off('blur', b),
          p.off('change', S),
          p.off('swapDoc', S),
          o.off(
            p.getInputField(),
            'compositionupdate',
            p.state.placeholderCompose
          ),
          h(p);
        var c = p.getWrapperElement();
        c.className = c.className.replace(' CodeMirror-empty', '');
      }
      g && !p.hasFocus() && b(p);
    });
    function h(p) {
      p.state.placeholder &&
        (p.state.placeholder.parentNode.removeChild(p.state.placeholder),
        (p.state.placeholder = null));
    }
    function v(p) {
      h(p);
      var g = (p.state.placeholder = document.createElement('pre'));
      (g.style.cssText = 'height: 0; overflow: visible'),
        (g.style.direction = p.getOption('direction')),
        (g.className = 'CodeMirror-placeholder CodeMirror-line-like');
      var L = p.getOption('placeholder');
      typeof L == 'string' && (L = document.createTextNode(L)),
        g.appendChild(L),
        p.display.lineSpace.insertBefore(g, p.display.lineSpace.firstChild);
    }
    function C(p) {
      setTimeout(function () {
        var g = !1;
        if (p.lineCount() == 1) {
          var L = p.getInputField();
          g =
            L.nodeName == 'TEXTAREA'
              ? !p.getLine(0).length
              : !/[^\u200b]/.test(
                  L.querySelector('.CodeMirror-line').textContent
                );
        }
        g ? v(p) : h(p);
      }, 20);
    }
    function b(p) {
      s(p) && v(p);
    }
    function S(p) {
      var g = p.getWrapperElement(),
        L = s(p);
      (g.className =
        g.className.replace(' CodeMirror-empty', '') +
        (L ? ' CodeMirror-empty' : '')),
        L ? v(p) : h(p);
    }
    function s(p) {
      return p.lineCount() === 1 && p.getLine(0) === '';
    }
  });
});
var ys = Ke((vs, bs) => {
  (function (o) {
    typeof vs == 'object' && typeof bs == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineOption('styleSelectedText', !1, function (x, c, d) {
      var w = d && d != o.Init;
      c && !w
        ? ((x.state.markedSelection = []),
          (x.state.markedSelectionStyle =
            typeof c == 'string' ? c : 'CodeMirror-selectedtext'),
          g(x),
          x.on('cursorActivity', h),
          x.on('change', v))
        : !c &&
          w &&
          (x.off('cursorActivity', h),
          x.off('change', v),
          p(x),
          (x.state.markedSelection = x.state.markedSelectionStyle = null));
    });
    function h(x) {
      x.state.markedSelection &&
        x.operation(function () {
          L(x);
        });
    }
    function v(x) {
      x.state.markedSelection &&
        x.state.markedSelection.length &&
        x.operation(function () {
          p(x);
        });
    }
    var C = 8,
      b = o.Pos,
      S = o.cmpPos;
    function s(x, c, d, w) {
      if (S(c, d) != 0)
        for (
          var E = x.state.markedSelection,
            z = x.state.markedSelectionStyle,
            y = c.line;
          ;

        ) {
          var R = y == c.line ? c : b(y, 0),
            M = y + C,
            H = M >= d.line,
            Z = H ? d : b(M, 0),
            ee = x.markText(R, Z, { className: z });
          if ((w == null ? E.push(ee) : E.splice(w++, 0, ee), H)) break;
          y = M;
        }
    }
    function p(x) {
      for (var c = x.state.markedSelection, d = 0; d < c.length; ++d)
        c[d].clear();
      c.length = 0;
    }
    function g(x) {
      p(x);
      for (var c = x.listSelections(), d = 0; d < c.length; d++)
        s(x, c[d].from(), c[d].to());
    }
    function L(x) {
      if (!x.somethingSelected()) return p(x);
      if (x.listSelections().length > 1) return g(x);
      var c = x.getCursor('start'),
        d = x.getCursor('end'),
        w = x.state.markedSelection;
      if (!w.length) return s(x, c, d);
      var E = w[0].find(),
        z = w[w.length - 1].find();
      if (
        !E ||
        !z ||
        d.line - c.line <= C ||
        S(c, z.to) >= 0 ||
        S(d, E.from) <= 0
      )
        return g(x);
      for (; S(c, E.from) > 0; ) w.shift().clear(), (E = w[0].find());
      for (
        S(c, E.from) < 0 &&
        (E.to.line - c.line < C
          ? (w.shift().clear(), s(x, c, E.to, 0))
          : s(x, c, E.from, 0));
        S(d, z.to) < 0;

      )
        w.pop().clear(), (z = w[w.length - 1].find());
      S(d, z.to) > 0 &&
        (d.line - z.from.line < C
          ? (w.pop().clear(), s(x, z.from, d))
          : s(x, z.to, d));
    }
  });
});
var ks = Ke((xs, _s) => {
  (function (o) {
    typeof xs == 'object' && typeof _s == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    var h = o.Pos;
    function v(y) {
      var R = y.flags;
      return (
        R ??
        (y.ignoreCase ? 'i' : '') +
          (y.global ? 'g' : '') +
          (y.multiline ? 'm' : '')
      );
    }
    function C(y, R) {
      for (var M = v(y), H = M, Z = 0; Z < R.length; Z++)
        H.indexOf(R.charAt(Z)) == -1 && (H += R.charAt(Z));
      return M == H ? y : new RegExp(y.source, H);
    }
    function b(y) {
      return /\\s|\\n|\n|\\W|\\D|\[\^/.test(y.source);
    }
    function S(y, R, M) {
      R = C(R, 'g');
      for (var H = M.line, Z = M.ch, ee = y.lastLine(); H <= ee; H++, Z = 0) {
        R.lastIndex = Z;
        var re = y.getLine(H),
          N = R.exec(re);
        if (N)
          return {
            from: h(H, N.index),
            to: h(H, N.index + N[0].length),
            match: N,
          };
      }
    }
    function s(y, R, M) {
      if (!b(R)) return S(y, R, M);
      R = C(R, 'gm');
      for (var H, Z = 1, ee = M.line, re = y.lastLine(); ee <= re; ) {
        for (var N = 0; N < Z && !(ee > re); N++) {
          var F = y.getLine(ee++);
          H =
            H == null
              ? F
              : H +
                `
` +
                F;
        }
        (Z = Z * 2), (R.lastIndex = M.ch);
        var D = R.exec(H);
        if (D) {
          var Q = H.slice(0, D.index).split(`
`),
            j = D[0].split(`
`),
            V = M.line + Q.length - 1,
            _ = Q[Q.length - 1].length;
          return {
            from: h(V, _),
            to: h(
              V + j.length - 1,
              j.length == 1 ? _ + j[0].length : j[j.length - 1].length
            ),
            match: D,
          };
        }
      }
    }
    function p(y, R, M) {
      for (var H, Z = 0; Z <= y.length; ) {
        R.lastIndex = Z;
        var ee = R.exec(y);
        if (!ee) break;
        var re = ee.index + ee[0].length;
        if (re > y.length - M) break;
        (!H || re > H.index + H[0].length) && (H = ee), (Z = ee.index + 1);
      }
      return H;
    }
    function g(y, R, M) {
      R = C(R, 'g');
      for (var H = M.line, Z = M.ch, ee = y.firstLine(); H >= ee; H--, Z = -1) {
        var re = y.getLine(H),
          N = p(re, R, Z < 0 ? 0 : re.length - Z);
        if (N)
          return {
            from: h(H, N.index),
            to: h(H, N.index + N[0].length),
            match: N,
          };
      }
    }
    function L(y, R, M) {
      if (!b(R)) return g(y, R, M);
      R = C(R, 'gm');
      for (
        var H,
          Z = 1,
          ee = y.getLine(M.line).length - M.ch,
          re = M.line,
          N = y.firstLine();
        re >= N;

      ) {
        for (var F = 0; F < Z && re >= N; F++) {
          var D = y.getLine(re--);
          H =
            H == null
              ? D
              : D +
                `
` +
                H;
        }
        Z *= 2;
        var Q = p(H, R, ee);
        if (Q) {
          var j = H.slice(0, Q.index).split(`
`),
            V = Q[0].split(`
`),
            _ = re + j.length,
            K = j[j.length - 1].length;
          return {
            from: h(_, K),
            to: h(
              _ + V.length - 1,
              V.length == 1 ? K + V[0].length : V[V.length - 1].length
            ),
            match: Q,
          };
        }
      }
    }
    var x, c;
    String.prototype.normalize
      ? ((x = function (y) {
          return y.normalize('NFD').toLowerCase();
        }),
        (c = function (y) {
          return y.normalize('NFD');
        }))
      : ((x = function (y) {
          return y.toLowerCase();
        }),
        (c = function (y) {
          return y;
        }));
    function d(y, R, M, H) {
      if (y.length == R.length) return M;
      for (var Z = 0, ee = M + Math.max(0, y.length - R.length); ; ) {
        if (Z == ee) return Z;
        var re = (Z + ee) >> 1,
          N = H(y.slice(0, re)).length;
        if (N == M) return re;
        N > M ? (ee = re) : (Z = re + 1);
      }
    }
    function w(y, R, M, H) {
      if (!R.length) return null;
      var Z = H ? x : c,
        ee = Z(R).split(/\r|\n\r?/);
      e: for (
        var re = M.line, N = M.ch, F = y.lastLine() + 1 - ee.length;
        re <= F;
        re++, N = 0
      ) {
        var D = y.getLine(re).slice(N),
          Q = Z(D);
        if (ee.length == 1) {
          var j = Q.indexOf(ee[0]);
          if (j == -1) continue e;
          var M = d(D, Q, j, Z) + N;
          return {
            from: h(re, d(D, Q, j, Z) + N),
            to: h(re, d(D, Q, j + ee[0].length, Z) + N),
          };
        } else {
          var V = Q.length - ee[0].length;
          if (Q.slice(V) != ee[0]) continue e;
          for (var _ = 1; _ < ee.length - 1; _++)
            if (Z(y.getLine(re + _)) != ee[_]) continue e;
          var K = y.getLine(re + ee.length - 1),
            X = Z(K),
            I = ee[ee.length - 1];
          if (X.slice(0, I.length) != I) continue e;
          return {
            from: h(re, d(D, Q, V, Z) + N),
            to: h(re + ee.length - 1, d(K, X, I.length, Z)),
          };
        }
      }
    }
    function E(y, R, M, H) {
      if (!R.length) return null;
      var Z = H ? x : c,
        ee = Z(R).split(/\r|\n\r?/);
      e: for (
        var re = M.line, N = M.ch, F = y.firstLine() - 1 + ee.length;
        re >= F;
        re--, N = -1
      ) {
        var D = y.getLine(re);
        N > -1 && (D = D.slice(0, N));
        var Q = Z(D);
        if (ee.length == 1) {
          var j = Q.lastIndexOf(ee[0]);
          if (j == -1) continue e;
          return {
            from: h(re, d(D, Q, j, Z)),
            to: h(re, d(D, Q, j + ee[0].length, Z)),
          };
        } else {
          var V = ee[ee.length - 1];
          if (Q.slice(0, V.length) != V) continue e;
          for (var _ = 1, M = re - ee.length + 1; _ < ee.length - 1; _++)
            if (Z(y.getLine(M + _)) != ee[_]) continue e;
          var K = y.getLine(re + 1 - ee.length),
            X = Z(K);
          if (X.slice(X.length - ee[0].length) != ee[0]) continue e;
          return {
            from: h(re + 1 - ee.length, d(K, X, K.length - ee[0].length, Z)),
            to: h(re, d(D, Q, V.length, Z)),
          };
        }
      }
    }
    function z(y, R, M, H) {
      (this.atOccurrence = !1),
        (this.afterEmptyMatch = !1),
        (this.doc = y),
        (M = M ? y.clipPos(M) : h(0, 0)),
        (this.pos = { from: M, to: M });
      var Z;
      typeof H == 'object' ? (Z = H.caseFold) : ((Z = H), (H = null)),
        typeof R == 'string'
          ? (Z == null && (Z = !1),
            (this.matches = function (ee, re) {
              return (ee ? E : w)(y, R, re, Z);
            }))
          : ((R = C(R, 'gm')),
            !H || H.multiline !== !1
              ? (this.matches = function (ee, re) {
                  return (ee ? L : s)(y, R, re);
                })
              : (this.matches = function (ee, re) {
                  return (ee ? g : S)(y, R, re);
                }));
    }
    (z.prototype = {
      findNext: function () {
        return this.find(!1);
      },
      findPrevious: function () {
        return this.find(!0);
      },
      find: function (y) {
        var R = this.doc.clipPos(y ? this.pos.from : this.pos.to);
        if (
          this.afterEmptyMatch &&
          this.atOccurrence &&
          ((R = h(R.line, R.ch)),
          y
            ? (R.ch--,
              R.ch < 0 &&
                (R.line--, (R.ch = (this.doc.getLine(R.line) || '').length)))
            : (R.ch++,
              R.ch > (this.doc.getLine(R.line) || '').length &&
                ((R.ch = 0), R.line++)),
          o.cmpPos(R, this.doc.clipPos(R)) != 0)
        )
          return (this.atOccurrence = !1);
        var M = this.matches(y, R);
        if (((this.afterEmptyMatch = M && o.cmpPos(M.from, M.to) == 0), M))
          return (this.pos = M), (this.atOccurrence = !0), this.pos.match || !0;
        var H = h(y ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
        return (this.pos = { from: H, to: H }), (this.atOccurrence = !1);
      },
      from: function () {
        if (this.atOccurrence) return this.pos.from;
      },
      to: function () {
        if (this.atOccurrence) return this.pos.to;
      },
      replace: function (y, R) {
        if (this.atOccurrence) {
          var M = o.splitLines(y);
          this.doc.replaceRange(M, this.pos.from, this.pos.to, R),
            (this.pos.to = h(
              this.pos.from.line + M.length - 1,
              M[M.length - 1].length + (M.length == 1 ? this.pos.from.ch : 0)
            ));
        }
      },
    }),
      o.defineExtension('getSearchCursor', function (y, R, M) {
        return new z(this.doc, y, R, M);
      }),
      o.defineDocExtension('getSearchCursor', function (y, R, M) {
        return new z(this, y, R, M);
      }),
      o.defineExtension('selectMatches', function (y, R) {
        for (
          var M = [], H = this.getSearchCursor(y, this.getCursor('from'), R);
          H.findNext() && !(o.cmpPos(H.to(), this.getCursor('to')) > 0);

        )
          M.push({ anchor: H.from(), head: H.to() });
        M.length && this.setSelections(M, 0);
      });
  });
});
var Vo = Ke((ws, Ss) => {
  (function (o) {
    typeof ws == 'object' && typeof Ss == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(I, B, le, xe, q, T) {
      (this.indented = I),
        (this.column = B),
        (this.type = le),
        (this.info = xe),
        (this.align = q),
        (this.prev = T);
    }
    function v(I, B, le, xe) {
      var q = I.indented;
      return (
        I.context &&
          I.context.type == 'statement' &&
          le != 'statement' &&
          (q = I.context.indented),
        (I.context = new h(q, B, le, xe, null, I.context))
      );
    }
    function C(I) {
      var B = I.context.type;
      return (
        (B == ')' || B == ']' || B == '}') && (I.indented = I.context.indented),
        (I.context = I.context.prev)
      );
    }
    function b(I, B, le) {
      if (
        B.prevToken == 'variable' ||
        B.prevToken == 'type' ||
        /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(I.string.slice(0, le)) ||
        (B.typeAtEndOfLine && I.column() == I.indentation())
      )
        return !0;
    }
    function S(I) {
      for (;;) {
        if (!I || I.type == 'top') return !0;
        if (I.type == '}' && I.prev.info != 'namespace') return !1;
        I = I.prev;
      }
    }
    o.defineMode('clike', function (I, B) {
      var le = I.indentUnit,
        xe = B.statementIndentUnit || le,
        q = B.dontAlignCalls,
        T = B.keywords || {},
        de = B.types || {},
        ze = B.builtin || {},
        pe = B.blockKeywords || {},
        Ee = B.defKeywords || {},
        ge = B.atoms || {},
        Oe = B.hooks || {},
        qe = B.multiLineStrings,
        Se = B.indentStatements !== !1,
        je = B.indentSwitch !== !1,
        Ze = B.namespaceSeparator,
        ke = B.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
        Je = B.numberStart || /[\d\.]/,
        He =
          B.number ||
          /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
        Ge = B.isOperatorChar || /[+\-*&%=<>!?|\/]/,
        U = B.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
        G = B.isReservedIdentifier || !1,
        ce,
        Be;
      function te(we, Me) {
        var Le = we.next();
        if (Oe[Le]) {
          var $ = Oe[Le](we, Me);
          if ($ !== !1) return $;
        }
        if (Le == '"' || Le == "'")
          return (Me.tokenize = fe(Le)), Me.tokenize(we, Me);
        if (Je.test(Le)) {
          if ((we.backUp(1), we.match(He))) return 'number';
          we.next();
        }
        if (ke.test(Le)) return (ce = Le), null;
        if (Le == '/') {
          if (we.eat('*')) return (Me.tokenize = oe), oe(we, Me);
          if (we.eat('/')) return we.skipToEnd(), 'comment';
        }
        if (Ge.test(Le)) {
          for (; !we.match(/^\/[\/*]/, !1) && we.eat(Ge); );
          return 'operator';
        }
        if ((we.eatWhile(U), Ze)) for (; we.match(Ze); ) we.eatWhile(U);
        var W = we.current();
        return p(T, W)
          ? (p(pe, W) && (ce = 'newstatement'),
            p(Ee, W) && (Be = !0),
            'keyword')
          : p(de, W)
            ? 'type'
            : p(ze, W) || (G && G(W))
              ? (p(pe, W) && (ce = 'newstatement'), 'builtin')
              : p(ge, W)
                ? 'atom'
                : 'variable';
      }
      function fe(we) {
        return function (Me, Le) {
          for (var $ = !1, W, se = !1; (W = Me.next()) != null; ) {
            if (W == we && !$) {
              se = !0;
              break;
            }
            $ = !$ && W == '\\';
          }
          return (se || !($ || qe)) && (Le.tokenize = null), 'string';
        };
      }
      function oe(we, Me) {
        for (var Le = !1, $; ($ = we.next()); ) {
          if ($ == '/' && Le) {
            Me.tokenize = null;
            break;
          }
          Le = $ == '*';
        }
        return 'comment';
      }
      function Ue(we, Me) {
        B.typeFirstDefinitions &&
          we.eol() &&
          S(Me.context) &&
          (Me.typeAtEndOfLine = b(we, Me, we.pos));
      }
      return {
        startState: function (we) {
          return {
            tokenize: null,
            context: new h((we || 0) - le, 0, 'top', null, !1),
            indented: 0,
            startOfLine: !0,
            prevToken: null,
          };
        },
        token: function (we, Me) {
          var Le = Me.context;
          if (
            (we.sol() &&
              (Le.align == null && (Le.align = !1),
              (Me.indented = we.indentation()),
              (Me.startOfLine = !0)),
            we.eatSpace())
          )
            return Ue(we, Me), null;
          ce = Be = null;
          var $ = (Me.tokenize || te)(we, Me);
          if ($ == 'comment' || $ == 'meta') return $;
          if (
            (Le.align == null && (Le.align = !0),
            ce == ';' ||
              ce == ':' ||
              (ce == ',' && we.match(/^\s*(?:\/\/.*)?$/, !1)))
          )
            for (; Me.context.type == 'statement'; ) C(Me);
          else if (ce == '{') v(Me, we.column(), '}');
          else if (ce == '[') v(Me, we.column(), ']');
          else if (ce == '(') v(Me, we.column(), ')');
          else if (ce == '}') {
            for (; Le.type == 'statement'; ) Le = C(Me);
            for (Le.type == '}' && (Le = C(Me)); Le.type == 'statement'; )
              Le = C(Me);
          } else
            ce == Le.type
              ? C(Me)
              : Se &&
                (((Le.type == '}' || Le.type == 'top') && ce != ';') ||
                  (Le.type == 'statement' && ce == 'newstatement')) &&
                v(Me, we.column(), 'statement', we.current());
          if (
            ($ == 'variable' &&
              (Me.prevToken == 'def' ||
                (B.typeFirstDefinitions &&
                  b(we, Me, we.start) &&
                  S(Me.context) &&
                  we.match(/^\s*\(/, !1))) &&
              ($ = 'def'),
            Oe.token)
          ) {
            var W = Oe.token(we, Me, $);
            W !== void 0 && ($ = W);
          }
          return (
            $ == 'def' && B.styleDefs === !1 && ($ = 'variable'),
            (Me.startOfLine = !1),
            (Me.prevToken = Be ? 'def' : $ || ce),
            Ue(we, Me),
            $
          );
        },
        indent: function (we, Me) {
          if (
            (we.tokenize != te && we.tokenize != null) ||
            (we.typeAtEndOfLine && S(we.context))
          )
            return o.Pass;
          var Le = we.context,
            $ = Me && Me.charAt(0),
            W = $ == Le.type;
          if (
            (Le.type == 'statement' && $ == '}' && (Le = Le.prev),
            B.dontIndentStatements)
          )
            for (
              ;
              Le.type == 'statement' && B.dontIndentStatements.test(Le.info);

            )
              Le = Le.prev;
          if (Oe.indent) {
            var se = Oe.indent(we, Le, Me, le);
            if (typeof se == 'number') return se;
          }
          var De = Le.prev && Le.prev.info == 'switch';
          if (B.allmanIndentation && /[{(]/.test($)) {
            for (; Le.type != 'top' && Le.type != '}'; ) Le = Le.prev;
            return Le.indented;
          }
          return Le.type == 'statement'
            ? Le.indented + ($ == '{' ? 0 : xe)
            : Le.align && (!q || Le.type != ')')
              ? Le.column + (W ? 0 : 1)
              : Le.type == ')' && !W
                ? Le.indented + xe
                : Le.indented +
                  (W ? 0 : le) +
                  (!W && De && !/^(?:case|default)\b/.test(Me) ? le : 0);
        },
        electricInput: je
          ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
          : /^\s*[{}]$/,
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        blockCommentContinue: ' * ',
        lineComment: '//',
        fold: 'brace',
      };
    });
    function s(I) {
      for (var B = {}, le = I.split(' '), xe = 0; xe < le.length; ++xe)
        B[le[xe]] = !0;
      return B;
    }
    function p(I, B) {
      return typeof I == 'function' ? I(B) : I.propertyIsEnumerable(B);
    }
    var g =
        'auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran',
      L =
        'alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq',
      x =
        'bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available',
      c =
        'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT',
      d = s('int long char short double float unsigned signed void bool'),
      w = s('SEL instancetype id Class Protocol BOOL');
    function E(I) {
      return p(d, I) || /.+_t$/.test(I);
    }
    function z(I) {
      return E(I) || p(w, I);
    }
    var y = 'case do else for if switch while struct enum union',
      R = 'struct enum union';
    function M(I, B) {
      if (!B.startOfLine) return !1;
      for (var le, xe = null; (le = I.peek()); ) {
        if (le == '\\' && I.match(/^.$/)) {
          xe = M;
          break;
        } else if (le == '/' && I.match(/^\/[\/\*]/, !1)) break;
        I.next();
      }
      return (B.tokenize = xe), 'meta';
    }
    function H(I, B) {
      return B.prevToken == 'type' ? 'type' : !1;
    }
    function Z(I) {
      return !I || I.length < 2 || I[0] != '_'
        ? !1
        : I[1] == '_' || I[1] !== I[1].toLowerCase();
    }
    function ee(I) {
      return I.eatWhile(/[\w\.']/), 'number';
    }
    function re(I, B) {
      if ((I.backUp(1), I.match(/^(?:R|u8R|uR|UR|LR)/))) {
        var le = I.match(/^"([^\s\\()]{0,16})\(/);
        return le
          ? ((B.cpp11RawStringDelim = le[1]), (B.tokenize = D), D(I, B))
          : !1;
      }
      return I.match(/^(?:u8|u|U|L)/)
        ? I.match(/^["']/, !1)
          ? 'string'
          : !1
        : (I.next(), !1);
    }
    function N(I) {
      var B = /(\w+)::~?(\w+)$/.exec(I);
      return B && B[1] == B[2];
    }
    function F(I, B) {
      for (var le; (le = I.next()) != null; )
        if (le == '"' && !I.eat('"')) {
          B.tokenize = null;
          break;
        }
      return 'string';
    }
    function D(I, B) {
      var le = B.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&'),
        xe = I.match(new RegExp('.*?\\)' + le + '"'));
      return xe ? (B.tokenize = null) : I.skipToEnd(), 'string';
    }
    function Q(I, B) {
      typeof I == 'string' && (I = [I]);
      var le = [];
      function xe(T) {
        if (T) for (var de in T) T.hasOwnProperty(de) && le.push(de);
      }
      xe(B.keywords),
        xe(B.types),
        xe(B.builtin),
        xe(B.atoms),
        le.length &&
          ((B.helperType = I[0]), o.registerHelper('hintWords', I[0], le));
      for (var q = 0; q < I.length; ++q) o.defineMIME(I[q], B);
    }
    Q(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
      name: 'clike',
      keywords: s(g),
      types: E,
      blockKeywords: s(y),
      defKeywords: s(R),
      typeFirstDefinitions: !0,
      atoms: s('NULL true false'),
      isReservedIdentifier: Z,
      hooks: { '#': M, '*': H },
      modeProps: { fold: ['brace', 'include'] },
    }),
      Q(['text/x-c++src', 'text/x-c++hdr'], {
        name: 'clike',
        keywords: s(g + ' ' + L),
        types: E,
        blockKeywords: s(y + ' class try catch'),
        defKeywords: s(R + ' class namespace'),
        typeFirstDefinitions: !0,
        atoms: s('true false NULL nullptr'),
        dontIndentStatements: /^template$/,
        isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
        isReservedIdentifier: Z,
        hooks: {
          '#': M,
          '*': H,
          u: re,
          U: re,
          L: re,
          R: re,
          0: ee,
          1: ee,
          2: ee,
          3: ee,
          4: ee,
          5: ee,
          6: ee,
          7: ee,
          8: ee,
          9: ee,
          token: function (I, B, le) {
            if (
              le == 'variable' &&
              I.peek() == '(' &&
              (B.prevToken == ';' ||
                B.prevToken == null ||
                B.prevToken == '}') &&
              N(I.current())
            )
              return 'def';
          },
        },
        namespaceSeparator: '::',
        modeProps: { fold: ['brace', 'include'] },
      }),
      Q('text/x-java', {
        name: 'clike',
        keywords: s(
          'abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface'
        ),
        types: s(
          'var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void'
        ),
        blockKeywords: s('catch class do else finally for if switch try while'),
        defKeywords: s('class interface enum @interface'),
        typeFirstDefinitions: !0,
        atoms: s('true false null'),
        number:
          /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
        hooks: {
          '@': function (I) {
            return I.match('interface', !1)
              ? !1
              : (I.eatWhile(/[\w\$_]/), 'meta');
          },
          '"': function (I, B) {
            return I.match(/""$/) ? ((B.tokenize = j), B.tokenize(I, B)) : !1;
          },
        },
        modeProps: { fold: ['brace', 'import'] },
      }),
      Q('text/x-csharp', {
        name: 'clike',
        keywords: s(
          'abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield'
        ),
        types: s(
          'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong'
        ),
        blockKeywords: s(
          'catch class do else finally for foreach if struct switch try while'
        ),
        defKeywords: s('class interface namespace record struct var'),
        typeFirstDefinitions: !0,
        atoms: s('true false null'),
        hooks: {
          '@': function (I, B) {
            return I.eat('"')
              ? ((B.tokenize = F), F(I, B))
              : (I.eatWhile(/[\w\$_]/), 'meta');
          },
        },
      });
    function j(I, B) {
      for (var le = !1; !I.eol(); ) {
        if (!le && I.match('"""')) {
          B.tokenize = null;
          break;
        }
        le = I.next() == '\\' && !le;
      }
      return 'string';
    }
    function V(I) {
      return function (B, le) {
        for (var xe; (xe = B.next()); )
          if (xe == '*' && B.eat('/'))
            if (I == 1) {
              le.tokenize = null;
              break;
            } else return (le.tokenize = V(I - 1)), le.tokenize(B, le);
          else if (xe == '/' && B.eat('*'))
            return (le.tokenize = V(I + 1)), le.tokenize(B, le);
        return 'comment';
      };
    }
    Q('text/x-scala', {
      name: 'clike',
      keywords: s(
        'abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble'
      ),
      types: s(
        'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void'
      ),
      multiLineStrings: !0,
      blockKeywords: s(
        'catch class enum do else finally for forSome if match switch try while'
      ),
      defKeywords: s('class enum def object package trait type val var'),
      atoms: s('true false null'),
      indentStatements: !1,
      indentSwitch: !1,
      isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
      hooks: {
        '@': function (I) {
          return I.eatWhile(/[\w\$_]/), 'meta';
        },
        '"': function (I, B) {
          return I.match('""') ? ((B.tokenize = j), B.tokenize(I, B)) : !1;
        },
        "'": function (I) {
          return I.match(/^(\\[^'\s]+|[^\\'])'/)
            ? 'string-2'
            : (I.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom');
        },
        '=': function (I, B) {
          var le = B.context;
          return le.type == '}' && le.align && I.eat('>')
            ? ((B.context = new h(
                le.indented,
                le.column,
                le.type,
                le.info,
                null,
                le.prev
              )),
              'operator')
            : !1;
        },
        '/': function (I, B) {
          return I.eat('*') ? ((B.tokenize = V(1)), B.tokenize(I, B)) : !1;
        },
      },
      modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
    });
    function _(I) {
      return function (B, le) {
        for (var xe = !1, q, T = !1; !B.eol(); ) {
          if (!I && !xe && B.match('"')) {
            T = !0;
            break;
          }
          if (I && B.match('"""')) {
            T = !0;
            break;
          }
          (q = B.next()),
            !xe && q == '$' && B.match('{') && B.skipTo('}'),
            (xe = !xe && q == '\\' && !I);
        }
        return (T || !I) && (le.tokenize = null), 'string';
      };
    }
    Q('text/x-kotlin', {
      name: 'clike',
      keywords: s(
        'package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value'
      ),
      types: s(
        'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit'
      ),
      intendSwitch: !1,
      indentStatements: !1,
      multiLineStrings: !0,
      number:
        /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
      blockKeywords: s(
        'catch class do else finally for if where try while enum'
      ),
      defKeywords: s('class val var object interface fun'),
      atoms: s('true false null this'),
      hooks: {
        '@': function (I) {
          return I.eatWhile(/[\w\$_]/), 'meta';
        },
        '*': function (I, B) {
          return B.prevToken == '.' ? 'variable' : 'operator';
        },
        '"': function (I, B) {
          return (B.tokenize = _(I.match('""'))), B.tokenize(I, B);
        },
        '/': function (I, B) {
          return I.eat('*') ? ((B.tokenize = V(1)), B.tokenize(I, B)) : !1;
        },
        indent: function (I, B, le, xe) {
          var q = le && le.charAt(0);
          if ((I.prevToken == '}' || I.prevToken == ')') && le == '')
            return I.indented;
          if (
            (I.prevToken == 'operator' && le != '}' && I.context.type != '}') ||
            (I.prevToken == 'variable' && q == '.') ||
            ((I.prevToken == '}' || I.prevToken == ')') && q == '.')
          )
            return xe * 2 + B.indented;
          if (B.align && B.type == '}')
            return (
              B.indented + (I.context.type == (le || '').charAt(0) ? 0 : xe)
            );
        },
      },
      modeProps: { closeBrackets: { triples: '"' } },
    }),
      Q(['x-shader/x-vertex', 'x-shader/x-fragment'], {
        name: 'clike',
        keywords: s(
          'sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout'
        ),
        types: s(
          'float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4'
        ),
        blockKeywords: s('for while do if else struct'),
        builtin: s(
          'radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4'
        ),
        atoms: s(
          'true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers'
        ),
        indentSwitch: !1,
        hooks: { '#': M },
        modeProps: { fold: ['brace', 'include'] },
      }),
      Q('text/x-nesc', {
        name: 'clike',
        keywords: s(
          g +
            ' as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends'
        ),
        types: E,
        blockKeywords: s(y),
        atoms: s('null true false'),
        hooks: { '#': M },
        modeProps: { fold: ['brace', 'include'] },
      }),
      Q('text/x-objectivec', {
        name: 'clike',
        keywords: s(g + ' ' + x),
        types: z,
        builtin: s(c),
        blockKeywords: s(
          y + ' @synthesize @try @catch @finally @autoreleasepool @synchronized'
        ),
        defKeywords: s(R + ' @interface @implementation @protocol @class'),
        dontIndentStatements: /^@.*$/,
        typeFirstDefinitions: !0,
        atoms: s('YES NO NULL Nil nil true false nullptr'),
        isReservedIdentifier: Z,
        hooks: { '#': M, '*': H },
        modeProps: { fold: ['brace', 'include'] },
      }),
      Q('text/x-objectivec++', {
        name: 'clike',
        keywords: s(g + ' ' + x + ' ' + L),
        types: z,
        builtin: s(c),
        blockKeywords: s(
          y +
            ' @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch'
        ),
        defKeywords: s(
          R + ' @interface @implementation @protocol @class class namespace'
        ),
        dontIndentStatements: /^@.*$|^template$/,
        typeFirstDefinitions: !0,
        atoms: s('YES NO NULL Nil nil true false nullptr'),
        isReservedIdentifier: Z,
        hooks: {
          '#': M,
          '*': H,
          u: re,
          U: re,
          L: re,
          R: re,
          0: ee,
          1: ee,
          2: ee,
          3: ee,
          4: ee,
          5: ee,
          6: ee,
          7: ee,
          8: ee,
          9: ee,
          token: function (I, B, le) {
            if (
              le == 'variable' &&
              I.peek() == '(' &&
              (B.prevToken == ';' ||
                B.prevToken == null ||
                B.prevToken == '}') &&
              N(I.current())
            )
              return 'def';
          },
        },
        namespaceSeparator: '::',
        modeProps: { fold: ['brace', 'include'] },
      }),
      Q('text/x-squirrel', {
        name: 'clike',
        keywords: s(
          'base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static'
        ),
        types: E,
        blockKeywords: s(
          'case catch class else for foreach if switch try while'
        ),
        defKeywords: s('function local class'),
        typeFirstDefinitions: !0,
        atoms: s('true false null'),
        hooks: { '#': M },
        modeProps: { fold: ['brace', 'include'] },
      });
    var K = null;
    function X(I) {
      return function (B, le) {
        for (var xe = !1, q, T = !1; !B.eol(); ) {
          if (!xe && B.match('"') && (I == 'single' || B.match('""'))) {
            T = !0;
            break;
          }
          if (!xe && B.match('``')) {
            (K = X(I)), (T = !0);
            break;
          }
          (q = B.next()), (xe = I == 'single' && !xe && q == '\\');
        }
        return T && (le.tokenize = null), 'string';
      };
    }
    Q('text/x-ceylon', {
      name: 'clike',
      keywords: s(
        'abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while'
      ),
      types: function (I) {
        var B = I.charAt(0);
        return B === B.toUpperCase() && B !== B.toLowerCase();
      },
      blockKeywords: s(
        'case catch class dynamic else finally for function if interface module new object switch try while'
      ),
      defKeywords: s(
        'class dynamic function interface module object package value'
      ),
      builtin: s(
        'abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable'
      ),
      isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
      isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
      numberStart: /[\d#$]/,
      number:
        /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
      multiLineStrings: !0,
      typeFirstDefinitions: !0,
      atoms: s('true false null larger smaller equal empty finished'),
      indentSwitch: !1,
      styleDefs: !1,
      hooks: {
        '@': function (I) {
          return I.eatWhile(/[\w\$_]/), 'meta';
        },
        '"': function (I, B) {
          return (
            (B.tokenize = X(I.match('""') ? 'triple' : 'single')),
            B.tokenize(I, B)
          );
        },
        '`': function (I, B) {
          return !K || !I.match('`')
            ? !1
            : ((B.tokenize = K), (K = null), B.tokenize(I, B));
        },
        "'": function (I) {
          return I.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
        },
        token: function (I, B, le) {
          if ((le == 'variable' || le == 'type') && B.prevToken == '.')
            return 'variable-2';
        },
      },
      modeProps: { fold: ['brace', 'import'], closeBrackets: { triples: '"' } },
    });
  });
});
var Cs = Ke((Ts, Ls) => {
  (function (o) {
    typeof Ts == 'object' && typeof Ls == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('cmake', function () {
      var h = /({)?[a-zA-Z0-9_]+(})?/;
      function v(b, S) {
        for (var s, p, g = !1; !b.eol() && (s = b.next()) != S.pending; ) {
          if (s === '$' && p != '\\' && S.pending == '"') {
            g = !0;
            break;
          }
          p = s;
        }
        return (
          g && b.backUp(1),
          s == S.pending ? (S.continueString = !1) : (S.continueString = !0),
          'string'
        );
      }
      function C(b, S) {
        var s = b.next();
        return s === '$'
          ? b.match(h)
            ? 'variable-2'
            : 'variable'
          : S.continueString
            ? (b.backUp(1), v(b, S))
            : b.match(/(\s+)?\w+\(/) || b.match(/(\s+)?\w+\ \(/)
              ? (b.backUp(1), 'def')
              : s == '#'
                ? (b.skipToEnd(), 'comment')
                : s == "'" || s == '"'
                  ? ((S.pending = s), v(b, S))
                  : s == '(' || s == ')'
                    ? 'bracket'
                    : s.match(/[0-9]/)
                      ? 'number'
                      : (b.eatWhile(/[\w-]/), null);
      }
      return {
        startState: function () {
          var b = {};
          return (
            (b.inDefinition = !1),
            (b.inInclude = !1),
            (b.continueString = !1),
            (b.pending = !1),
            b
          );
        },
        token: function (b, S) {
          return b.eatSpace() ? null : C(b, S);
        },
      };
    }),
      o.defineMIME('text/x-cmake', 'cmake');
  });
});
var gn = Ke((Es, zs) => {
  (function (o) {
    typeof Es == 'object' && typeof zs == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('css', function (F, D) {
      var Q = D.inline;
      D.propertyKeywords || (D = o.resolveMode('text/css'));
      var j = F.indentUnit,
        V = D.tokenHooks,
        _ = D.documentTypes || {},
        K = D.mediaTypes || {},
        X = D.mediaFeatures || {},
        I = D.mediaValueKeywords || {},
        B = D.propertyKeywords || {},
        le = D.nonStandardPropertyKeywords || {},
        xe = D.fontProperties || {},
        q = D.counterDescriptors || {},
        T = D.colorKeywords || {},
        de = D.valueKeywords || {},
        ze = D.allowNested,
        pe = D.lineComment,
        Ee = D.supportsAtComponent === !0,
        ge = F.highlightNonStandardPropertyKeywords !== !1,
        Oe,
        qe;
      function Se(te, fe) {
        return (Oe = fe), te;
      }
      function je(te, fe) {
        var oe = te.next();
        if (V[oe]) {
          var Ue = V[oe](te, fe);
          if (Ue !== !1) return Ue;
        }
        if (oe == '@') return te.eatWhile(/[\w\\\-]/), Se('def', te.current());
        if (oe == '=' || ((oe == '~' || oe == '|') && te.eat('=')))
          return Se(null, 'compare');
        if (oe == '"' || oe == "'")
          return (fe.tokenize = Ze(oe)), fe.tokenize(te, fe);
        if (oe == '#') return te.eatWhile(/[\w\\\-]/), Se('atom', 'hash');
        if (oe == '!') return te.match(/^\s*\w*/), Se('keyword', 'important');
        if (/\d/.test(oe) || (oe == '.' && te.eat(/\d/)))
          return te.eatWhile(/[\w.%]/), Se('number', 'unit');
        if (oe === '-') {
          if (/[\d.]/.test(te.peek()))
            return te.eatWhile(/[\w.%]/), Se('number', 'unit');
          if (te.match(/^-[\w\\\-]*/))
            return (
              te.eatWhile(/[\w\\\-]/),
              te.match(/^\s*:/, !1)
                ? Se('variable-2', 'variable-definition')
                : Se('variable-2', 'variable')
            );
          if (te.match(/^\w+-/)) return Se('meta', 'meta');
        } else
          return /[,+>*\/]/.test(oe)
            ? Se(null, 'select-op')
            : oe == '.' && te.match(/^-?[_a-z][_a-z0-9-]*/i)
              ? Se('qualifier', 'qualifier')
              : /[:;{}\[\]\(\)]/.test(oe)
                ? Se(null, oe)
                : te.match(/^[\w-.]+(?=\()/)
                  ? (/^(url(-prefix)?|domain|regexp)$/i.test(te.current()) &&
                      (fe.tokenize = ke),
                    Se('variable callee', 'variable'))
                  : /[\w\\\-]/.test(oe)
                    ? (te.eatWhile(/[\w\\\-]/), Se('property', 'word'))
                    : Se(null, null);
      }
      function Ze(te) {
        return function (fe, oe) {
          for (var Ue = !1, we; (we = fe.next()) != null; ) {
            if (we == te && !Ue) {
              te == ')' && fe.backUp(1);
              break;
            }
            Ue = !Ue && we == '\\';
          }
          return (
            (we == te || (!Ue && te != ')')) && (oe.tokenize = null),
            Se('string', 'string')
          );
        };
      }
      function ke(te, fe) {
        return (
          te.next(),
          te.match(/^\s*[\"\')]/, !1)
            ? (fe.tokenize = null)
            : (fe.tokenize = Ze(')')),
          Se(null, '(')
        );
      }
      function Je(te, fe, oe) {
        (this.type = te), (this.indent = fe), (this.prev = oe);
      }
      function He(te, fe, oe, Ue) {
        return (
          (te.context = new Je(
            oe,
            fe.indentation() + (Ue === !1 ? 0 : j),
            te.context
          )),
          oe
        );
      }
      function Ge(te) {
        return (
          te.context.prev && (te.context = te.context.prev), te.context.type
        );
      }
      function U(te, fe, oe) {
        return Be[oe.context.type](te, fe, oe);
      }
      function G(te, fe, oe, Ue) {
        for (var we = Ue || 1; we > 0; we--) oe.context = oe.context.prev;
        return U(te, fe, oe);
      }
      function ce(te) {
        var fe = te.current().toLowerCase();
        de.hasOwnProperty(fe)
          ? (qe = 'atom')
          : T.hasOwnProperty(fe)
            ? (qe = 'keyword')
            : (qe = 'variable');
      }
      var Be = {};
      return (
        (Be.top = function (te, fe, oe) {
          if (te == '{') return He(oe, fe, 'block');
          if (te == '}' && oe.context.prev) return Ge(oe);
          if (Ee && /@component/i.test(te))
            return He(oe, fe, 'atComponentBlock');
          if (/^@(-moz-)?document$/i.test(te))
            return He(oe, fe, 'documentTypes');
          if (/^@(media|supports|(-moz-)?document|import)$/i.test(te))
            return He(oe, fe, 'atBlock');
          if (/^@(font-face|counter-style)/i.test(te))
            return (oe.stateArg = te), 'restricted_atBlock_before';
          if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(te))
            return 'keyframes';
          if (te && te.charAt(0) == '@') return He(oe, fe, 'at');
          if (te == 'hash') qe = 'builtin';
          else if (te == 'word') qe = 'tag';
          else {
            if (te == 'variable-definition') return 'maybeprop';
            if (te == 'interpolation') return He(oe, fe, 'interpolation');
            if (te == ':') return 'pseudo';
            if (ze && te == '(') return He(oe, fe, 'parens');
          }
          return oe.context.type;
        }),
        (Be.block = function (te, fe, oe) {
          if (te == 'word') {
            var Ue = fe.current().toLowerCase();
            return B.hasOwnProperty(Ue)
              ? ((qe = 'property'), 'maybeprop')
              : le.hasOwnProperty(Ue)
                ? ((qe = ge ? 'string-2' : 'property'), 'maybeprop')
                : ze
                  ? ((qe = fe.match(/^\s*:(?:\s|$)/, !1) ? 'property' : 'tag'),
                    'block')
                  : ((qe += ' error'), 'maybeprop');
          } else
            return te == 'meta'
              ? 'block'
              : !ze && (te == 'hash' || te == 'qualifier')
                ? ((qe = 'error'), 'block')
                : Be.top(te, fe, oe);
        }),
        (Be.maybeprop = function (te, fe, oe) {
          return te == ':' ? He(oe, fe, 'prop') : U(te, fe, oe);
        }),
        (Be.prop = function (te, fe, oe) {
          if (te == ';') return Ge(oe);
          if (te == '{' && ze) return He(oe, fe, 'propBlock');
          if (te == '}' || te == '{') return G(te, fe, oe);
          if (te == '(') return He(oe, fe, 'parens');
          if (
            te == 'hash' &&
            !/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(
              fe.current()
            )
          )
            qe += ' error';
          else if (te == 'word') ce(fe);
          else if (te == 'interpolation') return He(oe, fe, 'interpolation');
          return 'prop';
        }),
        (Be.propBlock = function (te, fe, oe) {
          return te == '}'
            ? Ge(oe)
            : te == 'word'
              ? ((qe = 'property'), 'maybeprop')
              : oe.context.type;
        }),
        (Be.parens = function (te, fe, oe) {
          return te == '{' || te == '}'
            ? G(te, fe, oe)
            : te == ')'
              ? Ge(oe)
              : te == '('
                ? He(oe, fe, 'parens')
                : te == 'interpolation'
                  ? He(oe, fe, 'interpolation')
                  : (te == 'word' && ce(fe), 'parens');
        }),
        (Be.pseudo = function (te, fe, oe) {
          return te == 'meta'
            ? 'pseudo'
            : te == 'word'
              ? ((qe = 'variable-3'), oe.context.type)
              : U(te, fe, oe);
        }),
        (Be.documentTypes = function (te, fe, oe) {
          return te == 'word' && _.hasOwnProperty(fe.current())
            ? ((qe = 'tag'), oe.context.type)
            : Be.atBlock(te, fe, oe);
        }),
        (Be.atBlock = function (te, fe, oe) {
          if (te == '(') return He(oe, fe, 'atBlock_parens');
          if (te == '}' || te == ';') return G(te, fe, oe);
          if (te == '{') return Ge(oe) && He(oe, fe, ze ? 'block' : 'top');
          if (te == 'interpolation') return He(oe, fe, 'interpolation');
          if (te == 'word') {
            var Ue = fe.current().toLowerCase();
            Ue == 'only' || Ue == 'not' || Ue == 'and' || Ue == 'or'
              ? (qe = 'keyword')
              : K.hasOwnProperty(Ue)
                ? (qe = 'attribute')
                : X.hasOwnProperty(Ue)
                  ? (qe = 'property')
                  : I.hasOwnProperty(Ue)
                    ? (qe = 'keyword')
                    : B.hasOwnProperty(Ue)
                      ? (qe = 'property')
                      : le.hasOwnProperty(Ue)
                        ? (qe = ge ? 'string-2' : 'property')
                        : de.hasOwnProperty(Ue)
                          ? (qe = 'atom')
                          : T.hasOwnProperty(Ue)
                            ? (qe = 'keyword')
                            : (qe = 'error');
          }
          return oe.context.type;
        }),
        (Be.atComponentBlock = function (te, fe, oe) {
          return te == '}'
            ? G(te, fe, oe)
            : te == '{'
              ? Ge(oe) && He(oe, fe, ze ? 'block' : 'top', !1)
              : (te == 'word' && (qe = 'error'), oe.context.type);
        }),
        (Be.atBlock_parens = function (te, fe, oe) {
          return te == ')'
            ? Ge(oe)
            : te == '{' || te == '}'
              ? G(te, fe, oe, 2)
              : Be.atBlock(te, fe, oe);
        }),
        (Be.restricted_atBlock_before = function (te, fe, oe) {
          return te == '{'
            ? He(oe, fe, 'restricted_atBlock')
            : te == 'word' && oe.stateArg == '@counter-style'
              ? ((qe = 'variable'), 'restricted_atBlock_before')
              : U(te, fe, oe);
        }),
        (Be.restricted_atBlock = function (te, fe, oe) {
          return te == '}'
            ? ((oe.stateArg = null), Ge(oe))
            : te == 'word'
              ? ((oe.stateArg == '@font-face' &&
                  !xe.hasOwnProperty(fe.current().toLowerCase())) ||
                (oe.stateArg == '@counter-style' &&
                  !q.hasOwnProperty(fe.current().toLowerCase()))
                  ? (qe = 'error')
                  : (qe = 'property'),
                'maybeprop')
              : 'restricted_atBlock';
        }),
        (Be.keyframes = function (te, fe, oe) {
          return te == 'word'
            ? ((qe = 'variable'), 'keyframes')
            : te == '{'
              ? He(oe, fe, 'top')
              : U(te, fe, oe);
        }),
        (Be.at = function (te, fe, oe) {
          return te == ';'
            ? Ge(oe)
            : te == '{' || te == '}'
              ? G(te, fe, oe)
              : (te == 'word' ? (qe = 'tag') : te == 'hash' && (qe = 'builtin'),
                'at');
        }),
        (Be.interpolation = function (te, fe, oe) {
          return te == '}'
            ? Ge(oe)
            : te == '{' || te == ';'
              ? G(te, fe, oe)
              : (te == 'word'
                  ? (qe = 'variable')
                  : te != 'variable' &&
                    te != '(' &&
                    te != ')' &&
                    (qe = 'error'),
                'interpolation');
        }),
        {
          startState: function (te) {
            return {
              tokenize: null,
              state: Q ? 'block' : 'top',
              stateArg: null,
              context: new Je(Q ? 'block' : 'top', te || 0, null),
            };
          },
          token: function (te, fe) {
            if (!fe.tokenize && te.eatSpace()) return null;
            var oe = (fe.tokenize || je)(te, fe);
            return (
              oe && typeof oe == 'object' && ((Oe = oe[1]), (oe = oe[0])),
              (qe = oe),
              Oe != 'comment' && (fe.state = Be[fe.state](Oe, te, fe)),
              qe
            );
          },
          indent: function (te, fe) {
            var oe = te.context,
              Ue = fe && fe.charAt(0),
              we = oe.indent;
            return (
              oe.type == 'prop' && (Ue == '}' || Ue == ')') && (oe = oe.prev),
              oe.prev &&
                (Ue == '}' &&
                (oe.type == 'block' ||
                  oe.type == 'top' ||
                  oe.type == 'interpolation' ||
                  oe.type == 'restricted_atBlock')
                  ? ((oe = oe.prev), (we = oe.indent))
                  : ((Ue == ')' &&
                      (oe.type == 'parens' || oe.type == 'atBlock_parens')) ||
                      (Ue == '{' &&
                        (oe.type == 'at' || oe.type == 'atBlock'))) &&
                    (we = Math.max(0, oe.indent - j))),
              we
            );
          },
          electricChars: '}',
          blockCommentStart: '/*',
          blockCommentEnd: '*/',
          blockCommentContinue: ' * ',
          lineComment: pe,
          fold: 'brace',
        }
      );
    });
    function h(F) {
      for (var D = {}, Q = 0; Q < F.length; ++Q) D[F[Q].toLowerCase()] = !0;
      return D;
    }
    var v = ['domain', 'regexp', 'url', 'url-prefix'],
      C = h(v),
      b = [
        'all',
        'aural',
        'braille',
        'handheld',
        'print',
        'projection',
        'screen',
        'tty',
        'tv',
        'embossed',
      ],
      S = h(b),
      s = [
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'device-width',
        'min-device-width',
        'max-device-width',
        'device-height',
        'min-device-height',
        'max-device-height',
        'aspect-ratio',
        'min-aspect-ratio',
        'max-aspect-ratio',
        'device-aspect-ratio',
        'min-device-aspect-ratio',
        'max-device-aspect-ratio',
        'color',
        'min-color',
        'max-color',
        'color-index',
        'min-color-index',
        'max-color-index',
        'monochrome',
        'min-monochrome',
        'max-monochrome',
        'resolution',
        'min-resolution',
        'max-resolution',
        'scan',
        'grid',
        'orientation',
        'device-pixel-ratio',
        'min-device-pixel-ratio',
        'max-device-pixel-ratio',
        'pointer',
        'any-pointer',
        'hover',
        'any-hover',
        'prefers-color-scheme',
        'dynamic-range',
        'video-dynamic-range',
      ],
      p = h(s),
      g = [
        'landscape',
        'portrait',
        'none',
        'coarse',
        'fine',
        'on-demand',
        'hover',
        'interlace',
        'progressive',
        'dark',
        'light',
        'standard',
        'high',
      ],
      L = h(g),
      x = [
        'align-content',
        'align-items',
        'align-self',
        'alignment-adjust',
        'alignment-baseline',
        'all',
        'anchor-point',
        'animation',
        'animation-delay',
        'animation-direction',
        'animation-duration',
        'animation-fill-mode',
        'animation-iteration-count',
        'animation-name',
        'animation-play-state',
        'animation-timing-function',
        'appearance',
        'azimuth',
        'backdrop-filter',
        'backface-visibility',
        'background',
        'background-attachment',
        'background-blend-mode',
        'background-clip',
        'background-color',
        'background-image',
        'background-origin',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-repeat',
        'background-size',
        'baseline-shift',
        'binding',
        'bleed',
        'block-size',
        'bookmark-label',
        'bookmark-level',
        'bookmark-state',
        'bookmark-target',
        'border',
        'border-bottom',
        'border-bottom-color',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-bottom-style',
        'border-bottom-width',
        'border-collapse',
        'border-color',
        'border-image',
        'border-image-outset',
        'border-image-repeat',
        'border-image-slice',
        'border-image-source',
        'border-image-width',
        'border-left',
        'border-left-color',
        'border-left-style',
        'border-left-width',
        'border-radius',
        'border-right',
        'border-right-color',
        'border-right-style',
        'border-right-width',
        'border-spacing',
        'border-style',
        'border-top',
        'border-top-color',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-top-style',
        'border-top-width',
        'border-width',
        'bottom',
        'box-decoration-break',
        'box-shadow',
        'box-sizing',
        'break-after',
        'break-before',
        'break-inside',
        'caption-side',
        'caret-color',
        'clear',
        'clip',
        'color',
        'color-profile',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-color',
        'column-rule-style',
        'column-rule-width',
        'column-span',
        'column-width',
        'columns',
        'contain',
        'content',
        'counter-increment',
        'counter-reset',
        'crop',
        'cue',
        'cue-after',
        'cue-before',
        'cursor',
        'direction',
        'display',
        'dominant-baseline',
        'drop-initial-after-adjust',
        'drop-initial-after-align',
        'drop-initial-before-adjust',
        'drop-initial-before-align',
        'drop-initial-size',
        'drop-initial-value',
        'elevation',
        'empty-cells',
        'fit',
        'fit-content',
        'fit-position',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'float',
        'float-offset',
        'flow-from',
        'flow-into',
        'font',
        'font-family',
        'font-feature-settings',
        'font-kerning',
        'font-language-override',
        'font-optical-sizing',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-synthesis',
        'font-variant',
        'font-variant-alternates',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-position',
        'font-variation-settings',
        'font-weight',
        'gap',
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-auto-rows',
        'grid-column',
        'grid-column-end',
        'grid-column-gap',
        'grid-column-start',
        'grid-gap',
        'grid-row',
        'grid-row-end',
        'grid-row-gap',
        'grid-row-start',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'hanging-punctuation',
        'height',
        'hyphens',
        'icon',
        'image-orientation',
        'image-rendering',
        'image-resolution',
        'inline-box-align',
        'inset',
        'inset-block',
        'inset-block-end',
        'inset-block-start',
        'inset-inline',
        'inset-inline-end',
        'inset-inline-start',
        'isolation',
        'justify-content',
        'justify-items',
        'justify-self',
        'left',
        'letter-spacing',
        'line-break',
        'line-height',
        'line-height-step',
        'line-stacking',
        'line-stacking-ruby',
        'line-stacking-shift',
        'line-stacking-strategy',
        'list-style',
        'list-style-image',
        'list-style-position',
        'list-style-type',
        'margin',
        'margin-bottom',
        'margin-left',
        'margin-right',
        'margin-top',
        'marks',
        'marquee-direction',
        'marquee-loop',
        'marquee-play-count',
        'marquee-speed',
        'marquee-style',
        'mask-clip',
        'mask-composite',
        'mask-image',
        'mask-mode',
        'mask-origin',
        'mask-position',
        'mask-repeat',
        'mask-size',
        'mask-type',
        'max-block-size',
        'max-height',
        'max-inline-size',
        'max-width',
        'min-block-size',
        'min-height',
        'min-inline-size',
        'min-width',
        'mix-blend-mode',
        'move-to',
        'nav-down',
        'nav-index',
        'nav-left',
        'nav-right',
        'nav-up',
        'object-fit',
        'object-position',
        'offset',
        'offset-anchor',
        'offset-distance',
        'offset-path',
        'offset-position',
        'offset-rotate',
        'opacity',
        'order',
        'orphans',
        'outline',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',
        'overflow',
        'overflow-style',
        'overflow-wrap',
        'overflow-x',
        'overflow-y',
        'padding',
        'padding-bottom',
        'padding-left',
        'padding-right',
        'padding-top',
        'page',
        'page-break-after',
        'page-break-before',
        'page-break-inside',
        'page-policy',
        'pause',
        'pause-after',
        'pause-before',
        'perspective',
        'perspective-origin',
        'pitch',
        'pitch-range',
        'place-content',
        'place-items',
        'place-self',
        'play-during',
        'position',
        'presentation-level',
        'punctuation-trim',
        'quotes',
        'region-break-after',
        'region-break-before',
        'region-break-inside',
        'region-fragment',
        'rendering-intent',
        'resize',
        'rest',
        'rest-after',
        'rest-before',
        'richness',
        'right',
        'rotate',
        'rotation',
        'rotation-point',
        'row-gap',
        'ruby-align',
        'ruby-overhang',
        'ruby-position',
        'ruby-span',
        'scale',
        'scroll-behavior',
        'scroll-margin',
        'scroll-margin-block',
        'scroll-margin-block-end',
        'scroll-margin-block-start',
        'scroll-margin-bottom',
        'scroll-margin-inline',
        'scroll-margin-inline-end',
        'scroll-margin-inline-start',
        'scroll-margin-left',
        'scroll-margin-right',
        'scroll-margin-top',
        'scroll-padding',
        'scroll-padding-block',
        'scroll-padding-block-end',
        'scroll-padding-block-start',
        'scroll-padding-bottom',
        'scroll-padding-inline',
        'scroll-padding-inline-end',
        'scroll-padding-inline-start',
        'scroll-padding-left',
        'scroll-padding-right',
        'scroll-padding-top',
        'scroll-snap-align',
        'scroll-snap-type',
        'shape-image-threshold',
        'shape-inside',
        'shape-margin',
        'shape-outside',
        'size',
        'speak',
        'speak-as',
        'speak-header',
        'speak-numeral',
        'speak-punctuation',
        'speech-rate',
        'stress',
        'string-set',
        'tab-size',
        'table-layout',
        'target',
        'target-name',
        'target-new',
        'target-position',
        'text-align',
        'text-align-last',
        'text-combine-upright',
        'text-decoration',
        'text-decoration-color',
        'text-decoration-line',
        'text-decoration-skip',
        'text-decoration-skip-ink',
        'text-decoration-style',
        'text-emphasis',
        'text-emphasis-color',
        'text-emphasis-position',
        'text-emphasis-style',
        'text-height',
        'text-indent',
        'text-justify',
        'text-orientation',
        'text-outline',
        'text-overflow',
        'text-rendering',
        'text-shadow',
        'text-size-adjust',
        'text-space-collapse',
        'text-transform',
        'text-underline-position',
        'text-wrap',
        'top',
        'touch-action',
        'transform',
        'transform-origin',
        'transform-style',
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function',
        'translate',
        'unicode-bidi',
        'user-select',
        'vertical-align',
        'visibility',
        'voice-balance',
        'voice-duration',
        'voice-family',
        'voice-pitch',
        'voice-range',
        'voice-rate',
        'voice-stress',
        'voice-volume',
        'volume',
        'white-space',
        'widows',
        'width',
        'will-change',
        'word-break',
        'word-spacing',
        'word-wrap',
        'writing-mode',
        'z-index',
        'clip-path',
        'clip-rule',
        'mask',
        'enable-background',
        'filter',
        'flood-color',
        'flood-opacity',
        'lighting-color',
        'stop-color',
        'stop-opacity',
        'pointer-events',
        'color-interpolation',
        'color-interpolation-filters',
        'color-rendering',
        'fill',
        'fill-opacity',
        'fill-rule',
        'image-rendering',
        'marker',
        'marker-end',
        'marker-mid',
        'marker-start',
        'paint-order',
        'shape-rendering',
        'stroke',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
        'text-rendering',
        'baseline-shift',
        'dominant-baseline',
        'glyph-orientation-horizontal',
        'glyph-orientation-vertical',
        'text-anchor',
        'writing-mode',
      ],
      c = h(x),
      d = [
        'accent-color',
        'aspect-ratio',
        'border-block',
        'border-block-color',
        'border-block-end',
        'border-block-end-color',
        'border-block-end-style',
        'border-block-end-width',
        'border-block-start',
        'border-block-start-color',
        'border-block-start-style',
        'border-block-start-width',
        'border-block-style',
        'border-block-width',
        'border-inline',
        'border-inline-color',
        'border-inline-end',
        'border-inline-end-color',
        'border-inline-end-style',
        'border-inline-end-width',
        'border-inline-start',
        'border-inline-start-color',
        'border-inline-start-style',
        'border-inline-start-width',
        'border-inline-style',
        'border-inline-width',
        'content-visibility',
        'margin-block',
        'margin-block-end',
        'margin-block-start',
        'margin-inline',
        'margin-inline-end',
        'margin-inline-start',
        'overflow-anchor',
        'overscroll-behavior',
        'padding-block',
        'padding-block-end',
        'padding-block-start',
        'padding-inline',
        'padding-inline-end',
        'padding-inline-start',
        'scroll-snap-stop',
        'scrollbar-3d-light-color',
        'scrollbar-arrow-color',
        'scrollbar-base-color',
        'scrollbar-dark-shadow-color',
        'scrollbar-face-color',
        'scrollbar-highlight-color',
        'scrollbar-shadow-color',
        'scrollbar-track-color',
        'searchfield-cancel-button',
        'searchfield-decoration',
        'searchfield-results-button',
        'searchfield-results-decoration',
        'shape-inside',
        'zoom',
      ],
      w = h(d),
      E = [
        'font-display',
        'font-family',
        'src',
        'unicode-range',
        'font-variant',
        'font-feature-settings',
        'font-stretch',
        'font-weight',
        'font-style',
      ],
      z = h(E),
      y = [
        'additive-symbols',
        'fallback',
        'negative',
        'pad',
        'prefix',
        'range',
        'speak-as',
        'suffix',
        'symbols',
        'system',
      ],
      R = h(y),
      M = [
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkgrey',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkslategrey',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dimgrey',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'gold',
        'goldenrod',
        'gray',
        'grey',
        'green',
        'greenyellow',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavender',
        'lavenderblush',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightgrey',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslategray',
        'lightslategrey',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'oldlace',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'rebeccapurple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'slategrey',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'turquoise',
        'violet',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen',
      ],
      H = h(M),
      Z = [
        'above',
        'absolute',
        'activeborder',
        'additive',
        'activecaption',
        'afar',
        'after-white-space',
        'ahead',
        'alias',
        'all',
        'all-scroll',
        'alphabetic',
        'alternate',
        'always',
        'amharic',
        'amharic-abegede',
        'antialiased',
        'appworkspace',
        'arabic-indic',
        'armenian',
        'asterisks',
        'attr',
        'auto',
        'auto-flow',
        'avoid',
        'avoid-column',
        'avoid-page',
        'avoid-region',
        'axis-pan',
        'background',
        'backwards',
        'baseline',
        'below',
        'bidi-override',
        'binary',
        'bengali',
        'blink',
        'block',
        'block-axis',
        'blur',
        'bold',
        'bolder',
        'border',
        'border-box',
        'both',
        'bottom',
        'break',
        'break-all',
        'break-word',
        'brightness',
        'bullets',
        'button',
        'buttonface',
        'buttonhighlight',
        'buttonshadow',
        'buttontext',
        'calc',
        'cambodian',
        'capitalize',
        'caps-lock-indicator',
        'caption',
        'captiontext',
        'caret',
        'cell',
        'center',
        'checkbox',
        'circle',
        'cjk-decimal',
        'cjk-earthly-branch',
        'cjk-heavenly-stem',
        'cjk-ideographic',
        'clear',
        'clip',
        'close-quote',
        'col-resize',
        'collapse',
        'color',
        'color-burn',
        'color-dodge',
        'column',
        'column-reverse',
        'compact',
        'condensed',
        'conic-gradient',
        'contain',
        'content',
        'contents',
        'content-box',
        'context-menu',
        'continuous',
        'contrast',
        'copy',
        'counter',
        'counters',
        'cover',
        'crop',
        'cross',
        'crosshair',
        'cubic-bezier',
        'currentcolor',
        'cursive',
        'cyclic',
        'darken',
        'dashed',
        'decimal',
        'decimal-leading-zero',
        'default',
        'default-button',
        'dense',
        'destination-atop',
        'destination-in',
        'destination-out',
        'destination-over',
        'devanagari',
        'difference',
        'disc',
        'discard',
        'disclosure-closed',
        'disclosure-open',
        'document',
        'dot-dash',
        'dot-dot-dash',
        'dotted',
        'double',
        'down',
        'drop-shadow',
        'e-resize',
        'ease',
        'ease-in',
        'ease-in-out',
        'ease-out',
        'element',
        'ellipse',
        'ellipsis',
        'embed',
        'end',
        'ethiopic',
        'ethiopic-abegede',
        'ethiopic-abegede-am-et',
        'ethiopic-abegede-gez',
        'ethiopic-abegede-ti-er',
        'ethiopic-abegede-ti-et',
        'ethiopic-halehame-aa-er',
        'ethiopic-halehame-aa-et',
        'ethiopic-halehame-am-et',
        'ethiopic-halehame-gez',
        'ethiopic-halehame-om-et',
        'ethiopic-halehame-sid-et',
        'ethiopic-halehame-so-et',
        'ethiopic-halehame-ti-er',
        'ethiopic-halehame-ti-et',
        'ethiopic-halehame-tig',
        'ethiopic-numeric',
        'ew-resize',
        'exclusion',
        'expanded',
        'extends',
        'extra-condensed',
        'extra-expanded',
        'fantasy',
        'fast',
        'fill',
        'fill-box',
        'fixed',
        'flat',
        'flex',
        'flex-end',
        'flex-start',
        'footnotes',
        'forwards',
        'from',
        'geometricPrecision',
        'georgian',
        'grayscale',
        'graytext',
        'grid',
        'groove',
        'gujarati',
        'gurmukhi',
        'hand',
        'hangul',
        'hangul-consonant',
        'hard-light',
        'hebrew',
        'help',
        'hidden',
        'hide',
        'higher',
        'highlight',
        'highlighttext',
        'hiragana',
        'hiragana-iroha',
        'horizontal',
        'hsl',
        'hsla',
        'hue',
        'hue-rotate',
        'icon',
        'ignore',
        'inactiveborder',
        'inactivecaption',
        'inactivecaptiontext',
        'infinite',
        'infobackground',
        'infotext',
        'inherit',
        'initial',
        'inline',
        'inline-axis',
        'inline-block',
        'inline-flex',
        'inline-grid',
        'inline-table',
        'inset',
        'inside',
        'intrinsic',
        'invert',
        'italic',
        'japanese-formal',
        'japanese-informal',
        'justify',
        'kannada',
        'katakana',
        'katakana-iroha',
        'keep-all',
        'khmer',
        'korean-hangul-formal',
        'korean-hanja-formal',
        'korean-hanja-informal',
        'landscape',
        'lao',
        'large',
        'larger',
        'left',
        'level',
        'lighter',
        'lighten',
        'line-through',
        'linear',
        'linear-gradient',
        'lines',
        'list-item',
        'listbox',
        'listitem',
        'local',
        'logical',
        'loud',
        'lower',
        'lower-alpha',
        'lower-armenian',
        'lower-greek',
        'lower-hexadecimal',
        'lower-latin',
        'lower-norwegian',
        'lower-roman',
        'lowercase',
        'ltr',
        'luminosity',
        'malayalam',
        'manipulation',
        'match',
        'matrix',
        'matrix3d',
        'media-play-button',
        'media-slider',
        'media-sliderthumb',
        'media-volume-slider',
        'media-volume-sliderthumb',
        'medium',
        'menu',
        'menulist',
        'menulist-button',
        'menutext',
        'message-box',
        'middle',
        'min-intrinsic',
        'mix',
        'mongolian',
        'monospace',
        'move',
        'multiple',
        'multiple_mask_images',
        'multiply',
        'myanmar',
        'n-resize',
        'narrower',
        'ne-resize',
        'nesw-resize',
        'no-close-quote',
        'no-drop',
        'no-open-quote',
        'no-repeat',
        'none',
        'normal',
        'not-allowed',
        'nowrap',
        'ns-resize',
        'numbers',
        'numeric',
        'nw-resize',
        'nwse-resize',
        'oblique',
        'octal',
        'opacity',
        'open-quote',
        'optimizeLegibility',
        'optimizeSpeed',
        'oriya',
        'oromo',
        'outset',
        'outside',
        'outside-shape',
        'overlay',
        'overline',
        'padding',
        'padding-box',
        'painted',
        'page',
        'paused',
        'persian',
        'perspective',
        'pinch-zoom',
        'plus-darker',
        'plus-lighter',
        'pointer',
        'polygon',
        'portrait',
        'pre',
        'pre-line',
        'pre-wrap',
        'preserve-3d',
        'progress',
        'push-button',
        'radial-gradient',
        'radio',
        'read-only',
        'read-write',
        'read-write-plaintext-only',
        'rectangle',
        'region',
        'relative',
        'repeat',
        'repeating-linear-gradient',
        'repeating-radial-gradient',
        'repeating-conic-gradient',
        'repeat-x',
        'repeat-y',
        'reset',
        'reverse',
        'rgb',
        'rgba',
        'ridge',
        'right',
        'rotate',
        'rotate3d',
        'rotateX',
        'rotateY',
        'rotateZ',
        'round',
        'row',
        'row-resize',
        'row-reverse',
        'rtl',
        'run-in',
        'running',
        's-resize',
        'sans-serif',
        'saturate',
        'saturation',
        'scale',
        'scale3d',
        'scaleX',
        'scaleY',
        'scaleZ',
        'screen',
        'scroll',
        'scrollbar',
        'scroll-position',
        'se-resize',
        'searchfield',
        'searchfield-cancel-button',
        'searchfield-decoration',
        'searchfield-results-button',
        'searchfield-results-decoration',
        'self-start',
        'self-end',
        'semi-condensed',
        'semi-expanded',
        'separate',
        'sepia',
        'serif',
        'show',
        'sidama',
        'simp-chinese-formal',
        'simp-chinese-informal',
        'single',
        'skew',
        'skewX',
        'skewY',
        'skip-white-space',
        'slide',
        'slider-horizontal',
        'slider-vertical',
        'sliderthumb-horizontal',
        'sliderthumb-vertical',
        'slow',
        'small',
        'small-caps',
        'small-caption',
        'smaller',
        'soft-light',
        'solid',
        'somali',
        'source-atop',
        'source-in',
        'source-out',
        'source-over',
        'space',
        'space-around',
        'space-between',
        'space-evenly',
        'spell-out',
        'square',
        'square-button',
        'start',
        'static',
        'status-bar',
        'stretch',
        'stroke',
        'stroke-box',
        'sub',
        'subpixel-antialiased',
        'svg_masks',
        'super',
        'sw-resize',
        'symbolic',
        'symbols',
        'system-ui',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row',
        'table-row-group',
        'tamil',
        'telugu',
        'text',
        'text-bottom',
        'text-top',
        'textarea',
        'textfield',
        'thai',
        'thick',
        'thin',
        'threeddarkshadow',
        'threedface',
        'threedhighlight',
        'threedlightshadow',
        'threedshadow',
        'tibetan',
        'tigre',
        'tigrinya-er',
        'tigrinya-er-abegede',
        'tigrinya-et',
        'tigrinya-et-abegede',
        'to',
        'top',
        'trad-chinese-formal',
        'trad-chinese-informal',
        'transform',
        'translate',
        'translate3d',
        'translateX',
        'translateY',
        'translateZ',
        'transparent',
        'ultra-condensed',
        'ultra-expanded',
        'underline',
        'unidirectional-pan',
        'unset',
        'up',
        'upper-alpha',
        'upper-armenian',
        'upper-greek',
        'upper-hexadecimal',
        'upper-latin',
        'upper-norwegian',
        'upper-roman',
        'uppercase',
        'urdu',
        'url',
        'var',
        'vertical',
        'vertical-text',
        'view-box',
        'visible',
        'visibleFill',
        'visiblePainted',
        'visibleStroke',
        'visual',
        'w-resize',
        'wait',
        'wave',
        'wider',
        'window',
        'windowframe',
        'windowtext',
        'words',
        'wrap',
        'wrap-reverse',
        'x-large',
        'x-small',
        'xor',
        'xx-large',
        'xx-small',
      ],
      ee = h(Z),
      re = v
        .concat(b)
        .concat(s)
        .concat(g)
        .concat(x)
        .concat(d)
        .concat(M)
        .concat(Z);
    o.registerHelper('hintWords', 'css', re);
    function N(F, D) {
      for (var Q = !1, j; (j = F.next()) != null; ) {
        if (Q && j == '/') {
          D.tokenize = null;
          break;
        }
        Q = j == '*';
      }
      return ['comment', 'comment'];
    }
    o.defineMIME('text/css', {
      documentTypes: C,
      mediaTypes: S,
      mediaFeatures: p,
      mediaValueKeywords: L,
      propertyKeywords: c,
      nonStandardPropertyKeywords: w,
      fontProperties: z,
      counterDescriptors: R,
      colorKeywords: H,
      valueKeywords: ee,
      tokenHooks: {
        '/': function (F, D) {
          return F.eat('*') ? ((D.tokenize = N), N(F, D)) : !1;
        },
      },
      name: 'css',
    }),
      o.defineMIME('text/x-scss', {
        mediaTypes: S,
        mediaFeatures: p,
        mediaValueKeywords: L,
        propertyKeywords: c,
        nonStandardPropertyKeywords: w,
        colorKeywords: H,
        valueKeywords: ee,
        fontProperties: z,
        allowNested: !0,
        lineComment: '//',
        tokenHooks: {
          '/': function (F, D) {
            return F.eat('/')
              ? (F.skipToEnd(), ['comment', 'comment'])
              : F.eat('*')
                ? ((D.tokenize = N), N(F, D))
                : ['operator', 'operator'];
          },
          ':': function (F) {
            return F.match(/^\s*\{/, !1) ? [null, null] : !1;
          },
          $: function (F) {
            return (
              F.match(/^[\w-]+/),
              F.match(/^\s*:/, !1)
                ? ['variable-2', 'variable-definition']
                : ['variable-2', 'variable']
            );
          },
          '#': function (F) {
            return F.eat('{') ? [null, 'interpolation'] : !1;
          },
        },
        name: 'css',
        helperType: 'scss',
      }),
      o.defineMIME('text/x-less', {
        mediaTypes: S,
        mediaFeatures: p,
        mediaValueKeywords: L,
        propertyKeywords: c,
        nonStandardPropertyKeywords: w,
        colorKeywords: H,
        valueKeywords: ee,
        fontProperties: z,
        allowNested: !0,
        lineComment: '//',
        tokenHooks: {
          '/': function (F, D) {
            return F.eat('/')
              ? (F.skipToEnd(), ['comment', 'comment'])
              : F.eat('*')
                ? ((D.tokenize = N), N(F, D))
                : ['operator', 'operator'];
          },
          '@': function (F) {
            return F.eat('{')
              ? [null, 'interpolation']
              : F.match(
                    /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                    !1
                  )
                ? !1
                : (F.eatWhile(/[\w\\\-]/),
                  F.match(/^\s*:/, !1)
                    ? ['variable-2', 'variable-definition']
                    : ['variable-2', 'variable']);
          },
          '&': function () {
            return ['atom', 'atom'];
          },
        },
        name: 'css',
        helperType: 'less',
      }),
      o.defineMIME('text/x-gss', {
        documentTypes: C,
        mediaTypes: S,
        mediaFeatures: p,
        propertyKeywords: c,
        nonStandardPropertyKeywords: w,
        fontProperties: z,
        counterDescriptors: R,
        colorKeywords: H,
        valueKeywords: ee,
        supportsAtComponent: !0,
        tokenHooks: {
          '/': function (F, D) {
            return F.eat('*') ? ((D.tokenize = N), N(F, D)) : !1;
          },
        },
        name: 'css',
        helperType: 'gss',
      });
  });
});
var Ds = Ke((Ms, As) => {
  (function (o) {
    typeof Ms == 'object' && typeof As == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('diff', function () {
      var h = { '+': 'positive', '-': 'negative', '@': 'meta' };
      return {
        token: function (v) {
          var C = v.string.search(/[\t ]+?$/);
          if (!v.sol() || C === 0)
            return (
              v.skipToEnd(),
              ('error ' + (h[v.string.charAt(0)] || '')).replace(/ $/, '')
            );
          var b = h[v.peek()] || v.skipToEnd();
          return C === -1 ? v.skipToEnd() : (v.pos = C), b;
        },
      };
    }),
      o.defineMIME('text/x-diff', 'diff');
  });
});
var mn = Ke((qs, Is) => {
  (function (o) {
    typeof qs == 'object' && typeof Is == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    var h = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0,
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0,
        },
        contextGrabbers: {
          dd: { dd: !0, dt: !0 },
          dt: { dd: !0, dt: !0 },
          li: { li: !0 },
          option: { option: !0, optgroup: !0 },
          optgroup: { optgroup: !0 },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0,
          },
          rp: { rp: !0, rt: !0 },
          rt: { rp: !0, rt: !0 },
          tbody: { tbody: !0, tfoot: !0 },
          td: { td: !0, th: !0 },
          tfoot: { tbody: !0 },
          th: { td: !0, th: !0 },
          thead: { tbody: !0, tfoot: !0 },
          tr: { tr: !0 },
        },
        doNotIndent: { pre: !0 },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0,
      },
      v = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1,
      };
    o.defineMode('xml', function (C, b) {
      var S = C.indentUnit,
        s = {},
        p = b.htmlMode ? h : v;
      for (var g in p) s[g] = p[g];
      for (var g in b) s[g] = b[g];
      var L, x;
      function c(_, K) {
        function X(le) {
          return (K.tokenize = le), le(_, K);
        }
        var I = _.next();
        if (I == '<')
          return _.eat('!')
            ? _.eat('[')
              ? _.match('CDATA[')
                ? X(E('atom', ']]>'))
                : null
              : _.match('--')
                ? X(E('comment', '-->'))
                : _.match('DOCTYPE', !0, !0)
                  ? (_.eatWhile(/[\w\._\-]/), X(z(1)))
                  : null
            : _.eat('?')
              ? (_.eatWhile(/[\w\._\-]/),
                (K.tokenize = E('meta', '?>')),
                'meta')
              : ((L = _.eat('/') ? 'closeTag' : 'openTag'),
                (K.tokenize = d),
                'tag bracket');
        if (I == '&') {
          var B;
          return (
            _.eat('#')
              ? _.eat('x')
                ? (B = _.eatWhile(/[a-fA-F\d]/) && _.eat(';'))
                : (B = _.eatWhile(/[\d]/) && _.eat(';'))
              : (B = _.eatWhile(/[\w\.\-:]/) && _.eat(';')),
            B ? 'atom' : 'error'
          );
        } else return _.eatWhile(/[^&<]/), null;
      }
      c.isInText = !0;
      function d(_, K) {
        var X = _.next();
        if (X == '>' || (X == '/' && _.eat('>')))
          return (
            (K.tokenize = c),
            (L = X == '>' ? 'endTag' : 'selfcloseTag'),
            'tag bracket'
          );
        if (X == '=') return (L = 'equals'), null;
        if (X == '<') {
          (K.tokenize = c), (K.state = Z), (K.tagName = K.tagStart = null);
          var I = K.tokenize(_, K);
          return I ? I + ' tag error' : 'tag error';
        } else
          return /[\'\"]/.test(X)
            ? ((K.tokenize = w(X)),
              (K.stringStartCol = _.column()),
              K.tokenize(_, K))
            : (_.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
      }
      function w(_) {
        var K = function (X, I) {
          for (; !X.eol(); )
            if (X.next() == _) {
              I.tokenize = d;
              break;
            }
          return 'string';
        };
        return (K.isInAttribute = !0), K;
      }
      function E(_, K) {
        return function (X, I) {
          for (; !X.eol(); ) {
            if (X.match(K)) {
              I.tokenize = c;
              break;
            }
            X.next();
          }
          return _;
        };
      }
      function z(_) {
        return function (K, X) {
          for (var I; (I = K.next()) != null; ) {
            if (I == '<') return (X.tokenize = z(_ + 1)), X.tokenize(K, X);
            if (I == '>')
              if (_ == 1) {
                X.tokenize = c;
                break;
              } else return (X.tokenize = z(_ - 1)), X.tokenize(K, X);
          }
          return 'meta';
        };
      }
      function y(_) {
        return _ && _.toLowerCase();
      }
      function R(_, K, X) {
        (this.prev = _.context),
          (this.tagName = K || ''),
          (this.indent = _.indented),
          (this.startOfLine = X),
          (s.doNotIndent.hasOwnProperty(K) ||
            (_.context && _.context.noIndent)) &&
            (this.noIndent = !0);
      }
      function M(_) {
        _.context && (_.context = _.context.prev);
      }
      function H(_, K) {
        for (var X; ; ) {
          if (
            !_.context ||
            ((X = _.context.tagName),
            !s.contextGrabbers.hasOwnProperty(y(X)) ||
              !s.contextGrabbers[y(X)].hasOwnProperty(y(K)))
          )
            return;
          M(_);
        }
      }
      function Z(_, K, X) {
        return _ == 'openTag'
          ? ((X.tagStart = K.column()), ee)
          : _ == 'closeTag'
            ? re
            : Z;
      }
      function ee(_, K, X) {
        return _ == 'word'
          ? ((X.tagName = K.current()), (x = 'tag'), D)
          : s.allowMissingTagName && _ == 'endTag'
            ? ((x = 'tag bracket'), D(_, K, X))
            : ((x = 'error'), ee);
      }
      function re(_, K, X) {
        if (_ == 'word') {
          var I = K.current();
          return (
            X.context &&
              X.context.tagName != I &&
              s.implicitlyClosed.hasOwnProperty(y(X.context.tagName)) &&
              M(X),
            (X.context && X.context.tagName == I) || s.matchClosing === !1
              ? ((x = 'tag'), N)
              : ((x = 'tag error'), F)
          );
        } else
          return s.allowMissingTagName && _ == 'endTag'
            ? ((x = 'tag bracket'), N(_, K, X))
            : ((x = 'error'), F);
      }
      function N(_, K, X) {
        return _ != 'endTag' ? ((x = 'error'), N) : (M(X), Z);
      }
      function F(_, K, X) {
        return (x = 'error'), N(_, K, X);
      }
      function D(_, K, X) {
        if (_ == 'word') return (x = 'attribute'), Q;
        if (_ == 'endTag' || _ == 'selfcloseTag') {
          var I = X.tagName,
            B = X.tagStart;
          return (
            (X.tagName = X.tagStart = null),
            _ == 'selfcloseTag' || s.autoSelfClosers.hasOwnProperty(y(I))
              ? H(X, I)
              : (H(X, I), (X.context = new R(X, I, B == X.indented))),
            Z
          );
        }
        return (x = 'error'), D;
      }
      function Q(_, K, X) {
        return _ == 'equals'
          ? j
          : (s.allowMissing || (x = 'error'), D(_, K, X));
      }
      function j(_, K, X) {
        return _ == 'string'
          ? V
          : _ == 'word' && s.allowUnquoted
            ? ((x = 'string'), D)
            : ((x = 'error'), D(_, K, X));
      }
      function V(_, K, X) {
        return _ == 'string' ? V : D(_, K, X);
      }
      return {
        startState: function (_) {
          var K = {
            tokenize: c,
            state: Z,
            indented: _ || 0,
            tagName: null,
            tagStart: null,
            context: null,
          };
          return _ != null && (K.baseIndent = _), K;
        },
        token: function (_, K) {
          if (
            (!K.tagName && _.sol() && (K.indented = _.indentation()),
            _.eatSpace())
          )
            return null;
          L = null;
          var X = K.tokenize(_, K);
          return (
            (X || L) &&
              X != 'comment' &&
              ((x = null),
              (K.state = K.state(L || X, _, K)),
              x && (X = x == 'error' ? X + ' error' : x)),
            X
          );
        },
        indent: function (_, K, X) {
          var I = _.context;
          if (_.tokenize.isInAttribute)
            return _.tagStart == _.indented
              ? _.stringStartCol + 1
              : _.indented + S;
          if (I && I.noIndent) return o.Pass;
          if (_.tokenize != d && _.tokenize != c)
            return X ? X.match(/^(\s*)/)[0].length : 0;
          if (_.tagName)
            return s.multilineTagIndentPastTag !== !1
              ? _.tagStart + _.tagName.length + 2
              : _.tagStart + S * (s.multilineTagIndentFactor || 1);
          if (s.alignCDATA && /<!\[CDATA\[/.test(K)) return 0;
          var B = K && /^<(\/)?([\w_:\.-]*)/.exec(K);
          if (B && B[1])
            for (; I; )
              if (I.tagName == B[2]) {
                I = I.prev;
                break;
              } else if (s.implicitlyClosed.hasOwnProperty(y(I.tagName)))
                I = I.prev;
              else break;
          else if (B)
            for (; I; ) {
              var le = s.contextGrabbers[y(I.tagName)];
              if (le && le.hasOwnProperty(y(B[2]))) I = I.prev;
              else break;
            }
          for (; I && I.prev && !I.startOfLine; ) I = I.prev;
          return I ? I.indent + S : _.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: '<!--',
        blockCommentEnd: '-->',
        configuration: s.htmlMode ? 'html' : 'xml',
        helperType: s.htmlMode ? 'html' : 'xml',
        skipAttribute: function (_) {
          _.state == j && (_.state = D);
        },
        xmlCurrentTag: function (_) {
          return _.tagName
            ? { name: _.tagName, close: _.type == 'closeTag' }
            : null;
        },
        xmlCurrentContext: function (_) {
          for (var K = [], X = _.context; X; X = X.prev) K.push(X.tagName);
          return K.reverse();
        },
      };
    }),
      o.defineMIME('text/xml', 'xml'),
      o.defineMIME('application/xml', 'xml'),
      o.mimeModes.hasOwnProperty('text/html') ||
        o.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
  });
});
var vn = Ke((Fs, Ns) => {
  (function (o) {
    typeof Fs == 'object' && typeof Ns == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('javascript', function (h, v) {
      var C = h.indentUnit,
        b = v.statementIndent,
        S = v.jsonld,
        s = v.json || S,
        p = v.trackScope !== !1,
        g = v.typescript,
        L = v.wordCharacters || /[\w$\xa1-\uffff]/,
        x = (function () {
          function k(pt) {
            return { type: pt, style: 'keyword' };
          }
          var O = k('keyword a'),
            ae = k('keyword b'),
            he = k('keyword c'),
            ne = k('keyword d'),
            ye = k('operator'),
            Xe = { type: 'atom', style: 'atom' };
          return {
            if: k('if'),
            while: O,
            with: O,
            else: ae,
            do: ae,
            try: ae,
            finally: ae,
            return: ne,
            break: ne,
            continue: ne,
            new: k('new'),
            delete: he,
            void: he,
            throw: he,
            debugger: k('debugger'),
            var: k('var'),
            const: k('var'),
            let: k('var'),
            function: k('function'),
            catch: k('catch'),
            for: k('for'),
            switch: k('switch'),
            case: k('case'),
            default: k('default'),
            in: ye,
            typeof: ye,
            instanceof: ye,
            true: Xe,
            false: Xe,
            null: Xe,
            undefined: Xe,
            NaN: Xe,
            Infinity: Xe,
            this: k('this'),
            class: k('class'),
            super: k('atom'),
            yield: he,
            export: k('export'),
            import: k('import'),
            extends: he,
            await: he,
          };
        })(),
        c = /[+\-*&%=<>!?|~^@]/,
        d =
          /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function w(k) {
        for (var O = !1, ae, he = !1; (ae = k.next()) != null; ) {
          if (!O) {
            if (ae == '/' && !he) return;
            ae == '[' ? (he = !0) : he && ae == ']' && (he = !1);
          }
          O = !O && ae == '\\';
        }
      }
      var E, z;
      function y(k, O, ae) {
        return (E = k), (z = ae), O;
      }
      function R(k, O) {
        var ae = k.next();
        if (ae == '"' || ae == "'")
          return (O.tokenize = M(ae)), O.tokenize(k, O);
        if (ae == '.' && k.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return y('number', 'number');
        if (ae == '.' && k.match('..')) return y('spread', 'meta');
        if (/[\[\]{}\(\),;\:\.]/.test(ae)) return y(ae);
        if (ae == '=' && k.eat('>')) return y('=>', 'operator');
        if (ae == '0' && k.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return y('number', 'number');
        if (/\d/.test(ae))
          return (
            k.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
            y('number', 'number')
          );
        if (ae == '/')
          return k.eat('*')
            ? ((O.tokenize = H), H(k, O))
            : k.eat('/')
              ? (k.skipToEnd(), y('comment', 'comment'))
              : jt(k, O, 1)
                ? (w(k),
                  k.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                  y('regexp', 'string-2'))
                : (k.eat('='), y('operator', 'operator', k.current()));
        if (ae == '`') return (O.tokenize = Z), Z(k, O);
        if (ae == '#' && k.peek() == '!')
          return k.skipToEnd(), y('meta', 'meta');
        if (ae == '#' && k.eatWhile(L)) return y('variable', 'property');
        if (
          (ae == '<' && k.match('!--')) ||
          (ae == '-' && k.match('->') && !/\S/.test(k.string.slice(0, k.start)))
        )
          return k.skipToEnd(), y('comment', 'comment');
        if (c.test(ae))
          return (
            (ae != '>' || !O.lexical || O.lexical.type != '>') &&
              (k.eat('=')
                ? (ae == '!' || ae == '=') && k.eat('=')
                : /[<>*+\-|&?]/.test(ae) &&
                  (k.eat(ae), ae == '>' && k.eat(ae))),
            ae == '?' && k.eat('.')
              ? y('.')
              : y('operator', 'operator', k.current())
          );
        if (L.test(ae)) {
          k.eatWhile(L);
          var he = k.current();
          if (O.lastType != '.') {
            if (x.propertyIsEnumerable(he)) {
              var ne = x[he];
              return y(ne.type, ne.style, he);
            }
            if (
              he == 'async' &&
              k.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
            )
              return y('async', 'keyword', he);
          }
          return y('variable', 'variable', he);
        }
      }
      function M(k) {
        return function (O, ae) {
          var he = !1,
            ne;
          if (S && O.peek() == '@' && O.match(d))
            return (ae.tokenize = R), y('jsonld-keyword', 'meta');
          for (; (ne = O.next()) != null && !(ne == k && !he); )
            he = !he && ne == '\\';
          return he || (ae.tokenize = R), y('string', 'string');
        };
      }
      function H(k, O) {
        for (var ae = !1, he; (he = k.next()); ) {
          if (he == '/' && ae) {
            O.tokenize = R;
            break;
          }
          ae = he == '*';
        }
        return y('comment', 'comment');
      }
      function Z(k, O) {
        for (var ae = !1, he; (he = k.next()) != null; ) {
          if (!ae && (he == '`' || (he == '$' && k.eat('{')))) {
            O.tokenize = R;
            break;
          }
          ae = !ae && he == '\\';
        }
        return y('quasi', 'string-2', k.current());
      }
      var ee = '([{}])';
      function re(k, O) {
        O.fatArrowAt && (O.fatArrowAt = null);
        var ae = k.string.indexOf('=>', k.start);
        if (!(ae < 0)) {
          if (g) {
            var he = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
              k.string.slice(k.start, ae)
            );
            he && (ae = he.index);
          }
          for (var ne = 0, ye = !1, Xe = ae - 1; Xe >= 0; --Xe) {
            var pt = k.string.charAt(Xe),
              Et = ee.indexOf(pt);
            if (Et >= 0 && Et < 3) {
              if (!ne) {
                ++Xe;
                break;
              }
              if (--ne == 0) {
                pt == '(' && (ye = !0);
                break;
              }
            } else if (Et >= 3 && Et < 6) ++ne;
            else if (L.test(pt)) ye = !0;
            else if (/["'\/`]/.test(pt))
              for (; ; --Xe) {
                if (Xe == 0) return;
                var Zr = k.string.charAt(Xe - 1);
                if (Zr == pt && k.string.charAt(Xe - 2) != '\\') {
                  Xe--;
                  break;
                }
              }
            else if (ye && !ne) {
              ++Xe;
              break;
            }
          }
          ye && !ne && (O.fatArrowAt = Xe);
        }
      }
      var N = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        'jsonld-keyword': !0,
      };
      function F(k, O, ae, he, ne, ye) {
        (this.indented = k),
          (this.column = O),
          (this.type = ae),
          (this.prev = ne),
          (this.info = ye),
          he != null && (this.align = he);
      }
      function D(k, O) {
        if (!p) return !1;
        for (var ae = k.localVars; ae; ae = ae.next)
          if (ae.name == O) return !0;
        for (var he = k.context; he; he = he.prev)
          for (var ae = he.vars; ae; ae = ae.next) if (ae.name == O) return !0;
      }
      function Q(k, O, ae, he, ne) {
        var ye = k.cc;
        for (
          j.state = k,
            j.stream = ne,
            j.marked = null,
            j.cc = ye,
            j.style = O,
            k.lexical.hasOwnProperty('align') || (k.lexical.align = !0);
          ;

        ) {
          var Xe = ye.length ? ye.pop() : s ? Se : Oe;
          if (Xe(ae, he)) {
            for (; ye.length && ye[ye.length - 1].lex; ) ye.pop()();
            return j.marked
              ? j.marked
              : ae == 'variable' && D(k, he)
                ? 'variable-2'
                : O;
          }
        }
      }
      var j = { state: null, column: null, marked: null, cc: null };
      function V() {
        for (var k = arguments.length - 1; k >= 0; k--) j.cc.push(arguments[k]);
      }
      function _() {
        return V.apply(null, arguments), !0;
      }
      function K(k, O) {
        for (var ae = O; ae; ae = ae.next) if (ae.name == k) return !0;
        return !1;
      }
      function X(k) {
        var O = j.state;
        if (((j.marked = 'def'), !!p)) {
          if (O.context) {
            if (O.lexical.info == 'var' && O.context && O.context.block) {
              var ae = I(k, O.context);
              if (ae != null) {
                O.context = ae;
                return;
              }
            } else if (!K(k, O.localVars)) {
              O.localVars = new xe(k, O.localVars);
              return;
            }
          }
          v.globalVars &&
            !K(k, O.globalVars) &&
            (O.globalVars = new xe(k, O.globalVars));
        }
      }
      function I(k, O) {
        if (O)
          if (O.block) {
            var ae = I(k, O.prev);
            return ae ? (ae == O.prev ? O : new le(ae, O.vars, !0)) : null;
          } else
            return K(k, O.vars) ? O : new le(O.prev, new xe(k, O.vars), !1);
        else return null;
      }
      function B(k) {
        return (
          k == 'public' ||
          k == 'private' ||
          k == 'protected' ||
          k == 'abstract' ||
          k == 'readonly'
        );
      }
      function le(k, O, ae) {
        (this.prev = k), (this.vars = O), (this.block = ae);
      }
      function xe(k, O) {
        (this.name = k), (this.next = O);
      }
      var q = new xe('this', new xe('arguments', null));
      function T() {
        (j.state.context = new le(j.state.context, j.state.localVars, !1)),
          (j.state.localVars = q);
      }
      function de() {
        (j.state.context = new le(j.state.context, j.state.localVars, !0)),
          (j.state.localVars = null);
      }
      T.lex = de.lex = !0;
      function ze() {
        (j.state.localVars = j.state.context.vars),
          (j.state.context = j.state.context.prev);
      }
      ze.lex = !0;
      function pe(k, O) {
        var ae = function () {
          var he = j.state,
            ne = he.indented;
          if (he.lexical.type == 'stat') ne = he.lexical.indented;
          else
            for (
              var ye = he.lexical;
              ye && ye.type == ')' && ye.align;
              ye = ye.prev
            )
              ne = ye.indented;
          he.lexical = new F(ne, j.stream.column(), k, null, he.lexical, O);
        };
        return (ae.lex = !0), ae;
      }
      function Ee() {
        var k = j.state;
        k.lexical.prev &&
          (k.lexical.type == ')' && (k.indented = k.lexical.indented),
          (k.lexical = k.lexical.prev));
      }
      Ee.lex = !0;
      function ge(k) {
        function O(ae) {
          return ae == k
            ? _()
            : k == ';' || ae == '}' || ae == ')' || ae == ']'
              ? V()
              : _(O);
        }
        return O;
      }
      function Oe(k, O) {
        return k == 'var'
          ? _(pe('vardef', O), Hr, ge(';'), Ee)
          : k == 'keyword a'
            ? _(pe('form'), Ze, Oe, Ee)
            : k == 'keyword b'
              ? _(pe('form'), Oe, Ee)
              : k == 'keyword d'
                ? j.stream.match(/^\s*$/, !1)
                  ? _()
                  : _(pe('stat'), Je, ge(';'), Ee)
                : k == 'debugger'
                  ? _(ge(';'))
                  : k == '{'
                    ? _(pe('}'), de, De, Ee, ze)
                    : k == ';'
                      ? _()
                      : k == 'if'
                        ? (j.state.lexical.info == 'else' &&
                            j.state.cc[j.state.cc.length - 1] == Ee &&
                            j.state.cc.pop()(),
                          _(pe('form'), Ze, Oe, Ee, Br))
                        : k == 'function'
                          ? _(Bt)
                          : k == 'for'
                            ? _(pe('form'), de, ei, Oe, ze, Ee)
                            : k == 'class' || (g && O == 'interface')
                              ? ((j.marked = 'keyword'),
                                _(pe('form', k == 'class' ? k : O), Wr, Ee))
                              : k == 'variable'
                                ? g && O == 'declare'
                                  ? ((j.marked = 'keyword'), _(Oe))
                                  : g &&
                                      (O == 'module' ||
                                        O == 'enum' ||
                                        O == 'type') &&
                                      j.stream.match(/^\s*\w/, !1)
                                    ? ((j.marked = 'keyword'),
                                      O == 'enum'
                                        ? _(Ae)
                                        : O == 'type'
                                          ? _(ti, ge('operator'), Pe, ge(';'))
                                          : _(
                                              pe('form'),
                                              Ct,
                                              ge('{'),
                                              pe('}'),
                                              De,
                                              Ee,
                                              Ee
                                            ))
                                    : g && O == 'namespace'
                                      ? ((j.marked = 'keyword'),
                                        _(pe('form'), Se, Oe, Ee))
                                      : g && O == 'abstract'
                                        ? ((j.marked = 'keyword'), _(Oe))
                                        : _(pe('stat'), Ue)
                                : k == 'switch'
                                  ? _(
                                      pe('form'),
                                      Ze,
                                      ge('{'),
                                      pe('}', 'switch'),
                                      de,
                                      De,
                                      Ee,
                                      Ee,
                                      ze
                                    )
                                  : k == 'case'
                                    ? _(Se, ge(':'))
                                    : k == 'default'
                                      ? _(ge(':'))
                                      : k == 'catch'
                                        ? _(pe('form'), T, qe, Oe, Ee, ze)
                                        : k == 'export'
                                          ? _(pe('stat'), Ur, Ee)
                                          : k == 'import'
                                            ? _(pe('stat'), gr, Ee)
                                            : k == 'async'
                                              ? _(Oe)
                                              : O == '@'
                                                ? _(Se, Oe)
                                                : V(
                                                    pe('stat'),
                                                    Se,
                                                    ge(';'),
                                                    Ee
                                                  );
      }
      function qe(k) {
        if (k == '(') return _($t, ge(')'));
      }
      function Se(k, O) {
        return ke(k, O, !1);
      }
      function je(k, O) {
        return ke(k, O, !0);
      }
      function Ze(k) {
        return k != '(' ? V() : _(pe(')'), Je, ge(')'), Ee);
      }
      function ke(k, O, ae) {
        if (j.state.fatArrowAt == j.stream.start) {
          var he = ae ? Be : ce;
          if (k == '(') return _(T, pe(')'), W($t, ')'), Ee, ge('=>'), he, ze);
          if (k == 'variable') return V(T, Ct, ge('=>'), he, ze);
        }
        var ne = ae ? Ge : He;
        return N.hasOwnProperty(k)
          ? _(ne)
          : k == 'function'
            ? _(Bt, ne)
            : k == 'class' || (g && O == 'interface')
              ? ((j.marked = 'keyword'), _(pe('form'), to, Ee))
              : k == 'keyword c' || k == 'async'
                ? _(ae ? je : Se)
                : k == '('
                  ? _(pe(')'), Je, ge(')'), Ee, ne)
                  : k == 'operator' || k == 'spread'
                    ? _(ae ? je : Se)
                    : k == '['
                      ? _(pe(']'), at, Ee, ne)
                      : k == '{'
                        ? se(Me, '}', null, ne)
                        : k == 'quasi'
                          ? V(U, ne)
                          : k == 'new'
                            ? _(te(ae))
                            : _();
      }
      function Je(k) {
        return k.match(/[;\}\)\],]/) ? V() : V(Se);
      }
      function He(k, O) {
        return k == ',' ? _(Je) : Ge(k, O, !1);
      }
      function Ge(k, O, ae) {
        var he = ae == !1 ? He : Ge,
          ne = ae == !1 ? Se : je;
        if (k == '=>') return _(T, ae ? Be : ce, ze);
        if (k == 'operator')
          return /\+\+|--/.test(O) || (g && O == '!')
            ? _(he)
            : g && O == '<' && j.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
              ? _(pe('>'), W(Pe, '>'), Ee, he)
              : O == '?'
                ? _(Se, ge(':'), ne)
                : _(ne);
        if (k == 'quasi') return V(U, he);
        if (k != ';') {
          if (k == '(') return se(je, ')', 'call', he);
          if (k == '.') return _(we, he);
          if (k == '[') return _(pe(']'), Je, ge(']'), Ee, he);
          if (g && O == 'as') return (j.marked = 'keyword'), _(Pe, he);
          if (k == 'regexp')
            return (
              (j.state.lastType = j.marked = 'operator'),
              j.stream.backUp(j.stream.pos - j.stream.start - 1),
              _(ne)
            );
        }
      }
      function U(k, O) {
        return k != 'quasi'
          ? V()
          : O.slice(O.length - 2) != '${'
            ? _(U)
            : _(Je, G);
      }
      function G(k) {
        if (k == '}')
          return (j.marked = 'string-2'), (j.state.tokenize = Z), _(U);
      }
      function ce(k) {
        return re(j.stream, j.state), V(k == '{' ? Oe : Se);
      }
      function Be(k) {
        return re(j.stream, j.state), V(k == '{' ? Oe : je);
      }
      function te(k) {
        return function (O) {
          return O == '.'
            ? _(k ? oe : fe)
            : O == 'variable' && g
              ? _(Ft, k ? Ge : He)
              : V(k ? je : Se);
        };
      }
      function fe(k, O) {
        if (O == 'target') return (j.marked = 'keyword'), _(He);
      }
      function oe(k, O) {
        if (O == 'target') return (j.marked = 'keyword'), _(Ge);
      }
      function Ue(k) {
        return k == ':' ? _(Ee, Oe) : V(He, ge(';'), Ee);
      }
      function we(k) {
        if (k == 'variable') return (j.marked = 'property'), _();
      }
      function Me(k, O) {
        if (k == 'async') return (j.marked = 'property'), _(Me);
        if (k == 'variable' || j.style == 'keyword') {
          if (((j.marked = 'property'), O == 'get' || O == 'set')) return _(Le);
          var ae;
          return (
            g &&
              j.state.fatArrowAt == j.stream.start &&
              (ae = j.stream.match(/^\s*:\s*/, !1)) &&
              (j.state.fatArrowAt = j.stream.pos + ae[0].length),
            _($)
          );
        } else {
          if (k == 'number' || k == 'string')
            return (j.marked = S ? 'property' : j.style + ' property'), _($);
          if (k == 'jsonld-keyword') return _($);
          if (g && B(O)) return (j.marked = 'keyword'), _(Me);
          if (k == '[') return _(Se, nt, ge(']'), $);
          if (k == 'spread') return _(je, $);
          if (O == '*') return (j.marked = 'keyword'), _(Me);
          if (k == ':') return V($);
        }
      }
      function Le(k) {
        return k != 'variable' ? V($) : ((j.marked = 'property'), _(Bt));
      }
      function $(k) {
        if (k == ':') return _(je);
        if (k == '(') return V(Bt);
      }
      function W(k, O, ae) {
        function he(ne, ye) {
          if (ae ? ae.indexOf(ne) > -1 : ne == ',') {
            var Xe = j.state.lexical;
            return (
              Xe.info == 'call' && (Xe.pos = (Xe.pos || 0) + 1),
              _(function (pt, Et) {
                return pt == O || Et == O ? V() : V(k);
              }, he)
            );
          }
          return ne == O || ye == O
            ? _()
            : ae && ae.indexOf(';') > -1
              ? V(k)
              : _(ge(O));
        }
        return function (ne, ye) {
          return ne == O || ye == O ? _() : V(k, he);
        };
      }
      function se(k, O, ae) {
        for (var he = 3; he < arguments.length; he++) j.cc.push(arguments[he]);
        return _(pe(O, ae), W(k, O), Ee);
      }
      function De(k) {
        return k == '}' ? _() : V(Oe, De);
      }
      function nt(k, O) {
        if (g) {
          if (k == ':') return _(Pe);
          if (O == '?') return _(nt);
        }
      }
      function dt(k, O) {
        if (g && (k == ':' || O == 'in')) return _(Pe);
      }
      function Pt(k) {
        if (g && k == ':')
          return j.stream.match(/^\s*\w+\s+is\b/, !1) ? _(Se, It, Pe) : _(Pe);
      }
      function It(k, O) {
        if (O == 'is') return (j.marked = 'keyword'), _();
      }
      function Pe(k, O) {
        if (O == 'keyof' || O == 'typeof' || O == 'infer' || O == 'readonly')
          return (j.marked = 'keyword'), _(O == 'typeof' ? je : Pe);
        if (k == 'variable' || O == 'void') return (j.marked = 'type'), _(Ht);
        if (O == '|' || O == '&') return _(Pe);
        if (k == 'string' || k == 'number' || k == 'atom') return _(Ht);
        if (k == '[') return _(pe(']'), W(Pe, ']', ','), Ee, Ht);
        if (k == '{') return _(pe('}'), Fe, Ee, Ht);
        if (k == '(') return _(W(ot, ')'), xt, Ht);
        if (k == '<') return _(W(Pe, '>'), Pe);
        if (k == 'quasi') return V(_t, Ht);
      }
      function xt(k) {
        if (k == '=>') return _(Pe);
      }
      function Fe(k) {
        return k.match(/[\}\)\]]/)
          ? _()
          : k == ',' || k == ';'
            ? _(Fe)
            : V(nr, Fe);
      }
      function nr(k, O) {
        if (k == 'variable' || j.style == 'keyword')
          return (j.marked = 'property'), _(nr);
        if (O == '?' || k == 'number' || k == 'string') return _(nr);
        if (k == ':') return _(Pe);
        if (k == '[') return _(ge('variable'), dt, ge(']'), nr);
        if (k == '(') return V(hr, nr);
        if (!k.match(/[;\}\)\],]/)) return _();
      }
      function _t(k, O) {
        return k != 'quasi'
          ? V()
          : O.slice(O.length - 2) != '${'
            ? _(_t)
            : _(Pe, it);
      }
      function it(k) {
        if (k == '}')
          return (j.marked = 'string-2'), (j.state.tokenize = Z), _(_t);
      }
      function ot(k, O) {
        return (k == 'variable' && j.stream.match(/^\s*[?:]/, !1)) || O == '?'
          ? _(ot)
          : k == ':'
            ? _(Pe)
            : k == 'spread'
              ? _(ot)
              : V(Pe);
      }
      function Ht(k, O) {
        if (O == '<') return _(pe('>'), W(Pe, '>'), Ee, Ht);
        if (O == '|' || k == '.' || O == '&') return _(Pe);
        if (k == '[') return _(Pe, ge(']'), Ht);
        if (O == 'extends' || O == 'implements')
          return (j.marked = 'keyword'), _(Pe);
        if (O == '?') return _(Pe, ge(':'), Pe);
      }
      function Ft(k, O) {
        if (O == '<') return _(pe('>'), W(Pe, '>'), Ee, Ht);
      }
      function Wt() {
        return V(Pe, kt);
      }
      function kt(k, O) {
        if (O == '=') return _(Pe);
      }
      function Hr(k, O) {
        return O == 'enum'
          ? ((j.marked = 'keyword'), _(Ae))
          : V(Ct, nt, Ut, eo);
      }
      function Ct(k, O) {
        if (g && B(O)) return (j.marked = 'keyword'), _(Ct);
        if (k == 'variable') return X(O), _();
        if (k == 'spread') return _(Ct);
        if (k == '[') return se(yn, ']');
        if (k == '{') return se(dr, '}');
      }
      function dr(k, O) {
        return k == 'variable' && !j.stream.match(/^\s*:/, !1)
          ? (X(O), _(Ut))
          : (k == 'variable' && (j.marked = 'property'),
            k == 'spread'
              ? _(Ct)
              : k == '}'
                ? V()
                : k == '['
                  ? _(Se, ge(']'), ge(':'), dr)
                  : _(ge(':'), Ct, Ut));
      }
      function yn() {
        return V(Ct, Ut);
      }
      function Ut(k, O) {
        if (O == '=') return _(je);
      }
      function eo(k) {
        if (k == ',') return _(Hr);
      }
      function Br(k, O) {
        if (k == 'keyword b' && O == 'else')
          return _(pe('form', 'else'), Oe, Ee);
      }
      function ei(k, O) {
        if (O == 'await') return _(ei);
        if (k == '(') return _(pe(')'), xn, Ee);
      }
      function xn(k) {
        return k == 'var' ? _(Hr, pr) : k == 'variable' ? _(pr) : V(pr);
      }
      function pr(k, O) {
        return k == ')'
          ? _()
          : k == ';'
            ? _(pr)
            : O == 'in' || O == 'of'
              ? ((j.marked = 'keyword'), _(Se, pr))
              : V(Se, pr);
      }
      function Bt(k, O) {
        if (O == '*') return (j.marked = 'keyword'), _(Bt);
        if (k == 'variable') return X(O), _(Bt);
        if (k == '(') return _(T, pe(')'), W($t, ')'), Ee, Pt, Oe, ze);
        if (g && O == '<') return _(pe('>'), W(Wt, '>'), Ee, Bt);
      }
      function hr(k, O) {
        if (O == '*') return (j.marked = 'keyword'), _(hr);
        if (k == 'variable') return X(O), _(hr);
        if (k == '(') return _(T, pe(')'), W($t, ')'), Ee, Pt, ze);
        if (g && O == '<') return _(pe('>'), W(Wt, '>'), Ee, hr);
      }
      function ti(k, O) {
        if (k == 'keyword' || k == 'variable')
          return (j.marked = 'type'), _(ti);
        if (O == '<') return _(pe('>'), W(Wt, '>'), Ee);
      }
      function $t(k, O) {
        return (
          O == '@' && _(Se, $t),
          k == 'spread'
            ? _($t)
            : g && B(O)
              ? ((j.marked = 'keyword'), _($t))
              : g && k == 'this'
                ? _(nt, Ut)
                : V(Ct, nt, Ut)
        );
      }
      function to(k, O) {
        return k == 'variable' ? Wr(k, O) : Kt(k, O);
      }
      function Wr(k, O) {
        if (k == 'variable') return X(O), _(Kt);
      }
      function Kt(k, O) {
        if (O == '<') return _(pe('>'), W(Wt, '>'), Ee, Kt);
        if (O == 'extends' || O == 'implements' || (g && k == ','))
          return (
            O == 'implements' && (j.marked = 'keyword'), _(g ? Pe : Se, Kt)
          );
        if (k == '{') return _(pe('}'), Gt, Ee);
      }
      function Gt(k, O) {
        if (
          k == 'async' ||
          (k == 'variable' &&
            (O == 'static' || O == 'get' || O == 'set' || (g && B(O))) &&
            j.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
        )
          return (j.marked = 'keyword'), _(Gt);
        if (k == 'variable' || j.style == 'keyword')
          return (j.marked = 'property'), _(Cr, Gt);
        if (k == 'number' || k == 'string') return _(Cr, Gt);
        if (k == '[') return _(Se, nt, ge(']'), Cr, Gt);
        if (O == '*') return (j.marked = 'keyword'), _(Gt);
        if (g && k == '(') return V(hr, Gt);
        if (k == ';' || k == ',') return _(Gt);
        if (k == '}') return _();
        if (O == '@') return _(Se, Gt);
      }
      function Cr(k, O) {
        if (O == '!' || O == '?') return _(Cr);
        if (k == ':') return _(Pe, Ut);
        if (O == '=') return _(je);
        var ae = j.state.lexical.prev,
          he = ae && ae.info == 'interface';
        return V(he ? hr : Bt);
      }
      function Ur(k, O) {
        return O == '*'
          ? ((j.marked = 'keyword'), _(Gr, ge(';')))
          : O == 'default'
            ? ((j.marked = 'keyword'), _(Se, ge(';')))
            : k == '{'
              ? _(W($r, '}'), Gr, ge(';'))
              : V(Oe);
      }
      function $r(k, O) {
        if (O == 'as') return (j.marked = 'keyword'), _(ge('variable'));
        if (k == 'variable') return V(je, $r);
      }
      function gr(k) {
        return k == 'string'
          ? _()
          : k == '('
            ? V(Se)
            : k == '.'
              ? V(He)
              : V(Kr, Vt, Gr);
      }
      function Kr(k, O) {
        return k == '{'
          ? se(Kr, '}')
          : (k == 'variable' && X(O),
            O == '*' && (j.marked = 'keyword'),
            _(_n));
      }
      function Vt(k) {
        if (k == ',') return _(Kr, Vt);
      }
      function _n(k, O) {
        if (O == 'as') return (j.marked = 'keyword'), _(Kr);
      }
      function Gr(k, O) {
        if (O == 'from') return (j.marked = 'keyword'), _(Se);
      }
      function at(k) {
        return k == ']' ? _() : V(W(je, ']'));
      }
      function Ae() {
        return V(pe('form'), Ct, ge('{'), pe('}'), W(ir, '}'), Ee, Ee);
      }
      function ir() {
        return V(Ct, Ut);
      }
      function kn(k, O) {
        return (
          k.lastType == 'operator' ||
          k.lastType == ',' ||
          c.test(O.charAt(0)) ||
          /[,.]/.test(O.charAt(0))
        );
      }
      function jt(k, O, ae) {
        return (
          (O.tokenize == R &&
            /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
              O.lastType
            )) ||
          (O.lastType == 'quasi' &&
            /\{\s*$/.test(k.string.slice(0, k.pos - (ae || 0))))
        );
      }
      return {
        startState: function (k) {
          var O = {
            tokenize: R,
            lastType: 'sof',
            cc: [],
            lexical: new F((k || 0) - C, 0, 'block', !1),
            localVars: v.localVars,
            context: v.localVars && new le(null, null, !1),
            indented: k || 0,
          };
          return (
            v.globalVars &&
              typeof v.globalVars == 'object' &&
              (O.globalVars = v.globalVars),
            O
          );
        },
        token: function (k, O) {
          if (
            (k.sol() &&
              (O.lexical.hasOwnProperty('align') || (O.lexical.align = !1),
              (O.indented = k.indentation()),
              re(k, O)),
            O.tokenize != H && k.eatSpace())
          )
            return null;
          var ae = O.tokenize(k, O);
          return E == 'comment'
            ? ae
            : ((O.lastType =
                E == 'operator' && (z == '++' || z == '--') ? 'incdec' : E),
              Q(O, ae, E, z, k));
        },
        indent: function (k, O) {
          if (k.tokenize == H || k.tokenize == Z) return o.Pass;
          if (k.tokenize != R) return 0;
          var ae = O && O.charAt(0),
            he = k.lexical,
            ne;
          if (!/^\s*else\b/.test(O))
            for (var ye = k.cc.length - 1; ye >= 0; --ye) {
              var Xe = k.cc[ye];
              if (Xe == Ee) he = he.prev;
              else if (Xe != Br && Xe != ze) break;
            }
          for (
            ;
            (he.type == 'stat' || he.type == 'form') &&
            (ae == '}' ||
              ((ne = k.cc[k.cc.length - 1]) &&
                (ne == He || ne == Ge) &&
                !/^[,\.=+\-*:?[\(]/.test(O)));

          )
            he = he.prev;
          b && he.type == ')' && he.prev.type == 'stat' && (he = he.prev);
          var pt = he.type,
            Et = ae == pt;
          return pt == 'vardef'
            ? he.indented +
                (k.lastType == 'operator' || k.lastType == ','
                  ? he.info.length + 1
                  : 0)
            : pt == 'form' && ae == '{'
              ? he.indented
              : pt == 'form'
                ? he.indented + C
                : pt == 'stat'
                  ? he.indented + (kn(k, O) ? b || C : 0)
                  : he.info == 'switch' && !Et && v.doubleIndentSwitch != !1
                    ? he.indented + (/^(?:case|default)\b/.test(O) ? C : 2 * C)
                    : he.align
                      ? he.column + (Et ? 0 : 1)
                      : he.indented + (Et ? 0 : C);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: s ? null : '/*',
        blockCommentEnd: s ? null : '*/',
        blockCommentContinue: s ? null : ' * ',
        lineComment: s ? null : '//',
        fold: 'brace',
        closeBrackets: '()[]{}\'\'""``',
        helperType: s ? 'json' : 'javascript',
        jsonldMode: S,
        jsonMode: s,
        expressionAllowed: jt,
        skipExpression: function (k) {
          Q(k, 'atom', 'atom', 'true', new o.StringStream('', 2, null));
        },
      };
    }),
      o.registerHelper('wordChars', 'javascript', /[\w$]/),
      o.defineMIME('text/javascript', 'javascript'),
      o.defineMIME('text/ecmascript', 'javascript'),
      o.defineMIME('application/javascript', 'javascript'),
      o.defineMIME('application/x-javascript', 'javascript'),
      o.defineMIME('application/ecmascript', 'javascript'),
      o.defineMIME('application/json', { name: 'javascript', json: !0 }),
      o.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
      o.defineMIME('application/manifest+json', {
        name: 'javascript',
        json: !0,
      }),
      o.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
      o.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
      o.defineMIME('application/typescript', {
        name: 'javascript',
        typescript: !0,
      });
  });
});
var Qn = Ke((Os, Ps) => {
  (function (o) {
    typeof Os == 'object' && typeof Ps == 'object'
      ? o(We(), mn(), vn(), gn())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../xml/xml',
              '../javascript/javascript',
              '../css/css',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    var h = {
      script: [
        ['lang', /(javascript|babel)/i, 'javascript'],
        [
          'type',
          /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
          'javascript',
        ],
        ['type', /./, 'text/plain'],
        [null, null, 'javascript'],
      ],
      style: [
        ['lang', /^css$/i, 'css'],
        ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
        ['type', /./, 'text/plain'],
        [null, null, 'css'],
      ],
    };
    function v(L, x, c) {
      var d = L.current(),
        w = d.search(x);
      return (
        w > -1
          ? L.backUp(d.length - w)
          : d.match(/<\/?$/) &&
            (L.backUp(d.length), L.match(x, !1) || L.match(d)),
        c
      );
    }
    var C = {};
    function b(L) {
      var x = C[L];
      return (
        x ||
        (C[L] = new RegExp('\\s+' + L + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`))
      );
    }
    function S(L, x) {
      var c = L.match(b(x));
      return c ? /^\s*(.*?)\s*$/.exec(c[2])[1] : '';
    }
    function s(L, x) {
      return new RegExp((x ? '^' : '') + '</\\s*' + L + '\\s*>', 'i');
    }
    function p(L, x) {
      for (var c in L)
        for (
          var d = x[c] || (x[c] = []), w = L[c], E = w.length - 1;
          E >= 0;
          E--
        )
          d.unshift(w[E]);
    }
    function g(L, x) {
      for (var c = 0; c < L.length; c++) {
        var d = L[c];
        if (!d[0] || d[1].test(S(x, d[0]))) return d[2];
      }
    }
    o.defineMode(
      'htmlmixed',
      function (L, x) {
        var c = o.getMode(L, {
            name: 'xml',
            htmlMode: !0,
            multilineTagIndentFactor: x.multilineTagIndentFactor,
            multilineTagIndentPastTag: x.multilineTagIndentPastTag,
            allowMissingTagName: x.allowMissingTagName,
          }),
          d = {},
          w = x && x.tags,
          E = x && x.scriptTypes;
        if ((p(h, d), w && p(w, d), E))
          for (var z = E.length - 1; z >= 0; z--)
            d.script.unshift(['type', E[z].matches, E[z].mode]);
        function y(R, M) {
          var H = c.token(R, M.htmlState),
            Z = /\btag\b/.test(H),
            ee;
          if (
            Z &&
            !/[<>\s\/]/.test(R.current()) &&
            (ee = M.htmlState.tagName && M.htmlState.tagName.toLowerCase()) &&
            d.hasOwnProperty(ee)
          )
            M.inTag = ee + ' ';
          else if (M.inTag && Z && />$/.test(R.current())) {
            var re = /^([\S]+) (.*)/.exec(M.inTag);
            M.inTag = null;
            var N = R.current() == '>' && g(d[re[1]], re[2]),
              F = o.getMode(L, N),
              D = s(re[1], !0),
              Q = s(re[1], !1);
            (M.token = function (j, V) {
              return j.match(D, !1)
                ? ((V.token = y), (V.localState = V.localMode = null), null)
                : v(j, Q, V.localMode.token(j, V.localState));
            }),
              (M.localMode = F),
              (M.localState = o.startState(F, c.indent(M.htmlState, '', '')));
          } else
            M.inTag && ((M.inTag += R.current()), R.eol() && (M.inTag += ' '));
          return H;
        }
        return {
          startState: function () {
            var R = o.startState(c);
            return {
              token: y,
              inTag: null,
              localMode: null,
              localState: null,
              htmlState: R,
            };
          },
          copyState: function (R) {
            var M;
            return (
              R.localState && (M = o.copyState(R.localMode, R.localState)),
              {
                token: R.token,
                inTag: R.inTag,
                localMode: R.localMode,
                localState: M,
                htmlState: o.copyState(c, R.htmlState),
              }
            );
          },
          token: function (R, M) {
            return M.token(R, M);
          },
          indent: function (R, M, H) {
            return !R.localMode || /^\s*<\//.test(M)
              ? c.indent(R.htmlState, M, H)
              : R.localMode.indent
                ? R.localMode.indent(R.localState, M, H)
                : o.Pass;
          },
          innerMode: function (R) {
            return {
              state: R.localState || R.htmlState,
              mode: R.localMode || c,
            };
          },
        };
      },
      'xml',
      'javascript',
      'css'
    ),
      o.defineMIME('text/html', 'htmlmixed');
  });
});
var Hs = Ke((js, Rs) => {
  (function (o) {
    typeof js == 'object' && typeof Rs == 'object'
      ? o(We(), Qn(), Yn())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../htmlmixed/htmlmixed',
              '../../addon/mode/overlay',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('django:inner', function () {
      var h = [
          'block',
          'endblock',
          'for',
          'endfor',
          'true',
          'false',
          'filter',
          'endfilter',
          'loop',
          'none',
          'self',
          'super',
          'if',
          'elif',
          'endif',
          'as',
          'else',
          'import',
          'with',
          'endwith',
          'without',
          'context',
          'ifequal',
          'endifequal',
          'ifnotequal',
          'endifnotequal',
          'extends',
          'include',
          'load',
          'comment',
          'endcomment',
          'empty',
          'url',
          'static',
          'trans',
          'blocktrans',
          'endblocktrans',
          'now',
          'regroup',
          'lorem',
          'ifchanged',
          'endifchanged',
          'firstof',
          'debug',
          'cycle',
          'csrf_token',
          'autoescape',
          'endautoescape',
          'spaceless',
          'endspaceless',
          'ssi',
          'templatetag',
          'verbatim',
          'endverbatim',
          'widthratio',
        ],
        v = [
          'add',
          'addslashes',
          'capfirst',
          'center',
          'cut',
          'date',
          'default',
          'default_if_none',
          'dictsort',
          'dictsortreversed',
          'divisibleby',
          'escape',
          'escapejs',
          'filesizeformat',
          'first',
          'floatformat',
          'force_escape',
          'get_digit',
          'iriencode',
          'join',
          'last',
          'length',
          'length_is',
          'linebreaks',
          'linebreaksbr',
          'linenumbers',
          'ljust',
          'lower',
          'make_list',
          'phone2numeric',
          'pluralize',
          'pprint',
          'random',
          'removetags',
          'rjust',
          'safe',
          'safeseq',
          'slice',
          'slugify',
          'stringformat',
          'striptags',
          'time',
          'timesince',
          'timeuntil',
          'title',
          'truncatechars',
          'truncatechars_html',
          'truncatewords',
          'truncatewords_html',
          'unordered_list',
          'upper',
          'urlencode',
          'urlize',
          'urlizetrunc',
          'wordcount',
          'wordwrap',
          'yesno',
        ],
        C = ['==', '!=', '<', '>', '<=', '>='],
        b = ['in', 'not', 'or', 'and'];
      (h = new RegExp('^\\b(' + h.join('|') + ')\\b')),
        (v = new RegExp('^\\b(' + v.join('|') + ')\\b')),
        (C = new RegExp('^\\b(' + C.join('|') + ')\\b')),
        (b = new RegExp('^\\b(' + b.join('|') + ')\\b'));
      function S(c, d) {
        if (c.match('{{')) return (d.tokenize = p), 'tag';
        if (c.match('{%')) return (d.tokenize = g), 'tag';
        if (c.match('{#')) return (d.tokenize = L), 'comment';
        for (; c.next() != null && !c.match(/\{[{%#]/, !1); );
        return null;
      }
      function s(c, d) {
        return function (w, E) {
          if (!E.escapeNext && w.eat(c)) E.tokenize = d;
          else {
            E.escapeNext && (E.escapeNext = !1);
            var z = w.next();
            z == '\\' && (E.escapeNext = !0);
          }
          return 'string';
        };
      }
      function p(c, d) {
        if (d.waitDot) {
          if (((d.waitDot = !1), c.peek() != '.')) return 'null';
          if (c.match(/\.\W+/)) return 'error';
          if (c.eat('.')) return (d.waitProperty = !0), 'null';
          throw Error('Unexpected error while waiting for property.');
        }
        if (d.waitPipe) {
          if (((d.waitPipe = !1), c.peek() != '|')) return 'null';
          if (c.match(/\.\W+/)) return 'error';
          if (c.eat('|')) return (d.waitFilter = !0), 'null';
          throw Error('Unexpected error while waiting for filter.');
        }
        return d.waitProperty && ((d.waitProperty = !1), c.match(/\b(\w+)\b/))
          ? ((d.waitDot = !0), (d.waitPipe = !0), 'property')
          : d.waitFilter && ((d.waitFilter = !1), c.match(v))
            ? 'variable-2'
            : c.eatSpace()
              ? ((d.waitProperty = !1), 'null')
              : c.match(/\b\d+(\.\d+)?\b/)
                ? 'number'
                : c.match("'")
                  ? ((d.tokenize = s("'", d.tokenize)), 'string')
                  : c.match('"')
                    ? ((d.tokenize = s('"', d.tokenize)), 'string')
                    : c.match(/\b(\w+)\b/) && !d.foundVariable
                      ? ((d.waitDot = !0), (d.waitPipe = !0), 'variable')
                      : c.match('}}')
                        ? ((d.waitProperty = null),
                          (d.waitFilter = null),
                          (d.waitDot = null),
                          (d.waitPipe = null),
                          (d.tokenize = S),
                          'tag')
                        : (c.next(), 'null');
      }
      function g(c, d) {
        if (d.waitDot) {
          if (((d.waitDot = !1), c.peek() != '.')) return 'null';
          if (c.match(/\.\W+/)) return 'error';
          if (c.eat('.')) return (d.waitProperty = !0), 'null';
          throw Error('Unexpected error while waiting for property.');
        }
        if (d.waitPipe) {
          if (((d.waitPipe = !1), c.peek() != '|')) return 'null';
          if (c.match(/\.\W+/)) return 'error';
          if (c.eat('|')) return (d.waitFilter = !0), 'null';
          throw Error('Unexpected error while waiting for filter.');
        }
        if (d.waitProperty && ((d.waitProperty = !1), c.match(/\b(\w+)\b/)))
          return (d.waitDot = !0), (d.waitPipe = !0), 'property';
        if (d.waitFilter && ((d.waitFilter = !1), c.match(v)))
          return 'variable-2';
        if (c.eatSpace()) return (d.waitProperty = !1), 'null';
        if (c.match(/\b\d+(\.\d+)?\b/)) return 'number';
        if (c.match("'")) return (d.tokenize = s("'", d.tokenize)), 'string';
        if (c.match('"')) return (d.tokenize = s('"', d.tokenize)), 'string';
        if (c.match(C)) return 'operator';
        if (c.match(b)) return 'keyword';
        var w = c.match(h);
        return w
          ? (w[0] == 'comment' && (d.blockCommentTag = !0), 'keyword')
          : c.match(/\b(\w+)\b/)
            ? ((d.waitDot = !0), (d.waitPipe = !0), 'variable')
            : c.match('%}')
              ? ((d.waitProperty = null),
                (d.waitFilter = null),
                (d.waitDot = null),
                (d.waitPipe = null),
                d.blockCommentTag
                  ? ((d.blockCommentTag = !1), (d.tokenize = x))
                  : (d.tokenize = S),
                'tag')
              : (c.next(), 'null');
      }
      function L(c, d) {
        return c.match(/^.*?#\}/) ? (d.tokenize = S) : c.skipToEnd(), 'comment';
      }
      function x(c, d) {
        return c.match(/\{%\s*endcomment\s*%\}/, !1)
          ? ((d.tokenize = g), c.match('{%'), 'tag')
          : (c.next(), 'comment');
      }
      return {
        startState: function () {
          return { tokenize: S };
        },
        token: function (c, d) {
          return d.tokenize(c, d);
        },
        blockCommentStart: '{% comment %}',
        blockCommentEnd: '{% endcomment %}',
      };
    }),
      o.defineMode('django', function (h) {
        var v = o.getMode(h, 'text/html'),
          C = o.getMode(h, 'django:inner');
        return o.overlayMode(v, C);
      }),
      o.defineMIME('text/x-django', 'django');
  });
});
var Di = Ke((Bs, Ws) => {
  (function (o) {
    typeof Bs == 'object' && typeof Ws == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    (o.defineSimpleMode = function (x, c) {
      o.defineMode(x, function (d) {
        return o.simpleMode(d, c);
      });
    }),
      (o.simpleMode = function (x, c) {
        h(c, 'start');
        var d = {},
          w = c.meta || {},
          E = !1;
        for (var z in c)
          if (z != w && c.hasOwnProperty(z))
            for (var y = (d[z] = []), R = c[z], M = 0; M < R.length; M++) {
              var H = R[M];
              y.push(new b(H, c)), (H.indent || H.dedent) && (E = !0);
            }
        var Z = {
          startState: function () {
            return {
              state: 'start',
              pending: null,
              local: null,
              localState: null,
              indent: E ? [] : null,
            };
          },
          copyState: function (re) {
            var N = {
              state: re.state,
              pending: re.pending,
              local: re.local,
              localState: null,
              indent: re.indent && re.indent.slice(0),
            };
            re.localState &&
              (N.localState = o.copyState(re.local.mode, re.localState)),
              re.stack && (N.stack = re.stack.slice(0));
            for (var F = re.persistentStates; F; F = F.next)
              N.persistentStates = {
                mode: F.mode,
                spec: F.spec,
                state:
                  F.state == re.localState
                    ? N.localState
                    : o.copyState(F.mode, F.state),
                next: N.persistentStates,
              };
            return N;
          },
          token: S(d, x),
          innerMode: function (re) {
            return re.local && { mode: re.local.mode, state: re.localState };
          },
          indent: L(d, w),
        };
        if (w) for (var ee in w) w.hasOwnProperty(ee) && (Z[ee] = w[ee]);
        return Z;
      });
    function h(x, c) {
      if (!x.hasOwnProperty(c))
        throw new Error('Undefined state ' + c + ' in simple mode');
    }
    function v(x, c) {
      if (!x) return /(?:)/;
      var d = '';
      return (
        x instanceof RegExp
          ? (x.ignoreCase && (d = 'i'), x.unicode && (d += 'u'), (x = x.source))
          : (x = String(x)),
        new RegExp((c === !1 ? '' : '^') + '(?:' + x + ')', d)
      );
    }
    function C(x) {
      if (!x) return null;
      if (x.apply) return x;
      if (typeof x == 'string') return x.replace(/\./g, ' ');
      for (var c = [], d = 0; d < x.length; d++)
        c.push(x[d] && x[d].replace(/\./g, ' '));
      return c;
    }
    function b(x, c) {
      (x.next || x.push) && h(c, x.next || x.push),
        (this.regex = v(x.regex)),
        (this.token = C(x.token)),
        (this.data = x);
    }
    function S(x, c) {
      return function (d, w) {
        if (w.pending) {
          var E = w.pending.shift();
          return (
            w.pending.length == 0 && (w.pending = null),
            (d.pos += E.text.length),
            E.token
          );
        }
        if (w.local)
          if (w.local.end && d.match(w.local.end)) {
            var z = w.local.endToken || null;
            return (w.local = w.localState = null), z;
          } else {
            var z = w.local.mode.token(d, w.localState),
              y;
            return (
              w.local.endScan &&
                (y = w.local.endScan.exec(d.current())) &&
                (d.pos = d.start + y.index),
              z
            );
          }
        for (var R = x[w.state], M = 0; M < R.length; M++) {
          var H = R[M],
            Z = (!H.data.sol || d.sol()) && d.match(H.regex);
          if (Z) {
            H.data.next
              ? (w.state = H.data.next)
              : H.data.push
                ? ((w.stack || (w.stack = [])).push(w.state),
                  (w.state = H.data.push))
                : H.data.pop &&
                  w.stack &&
                  w.stack.length &&
                  (w.state = w.stack.pop()),
              H.data.mode && p(c, w, H.data.mode, H.token),
              H.data.indent && w.indent.push(d.indentation() + c.indentUnit),
              H.data.dedent && w.indent.pop();
            var ee = H.token;
            if (
              (ee && ee.apply && (ee = ee(Z)),
              Z.length > 2 && H.token && typeof H.token != 'string')
            ) {
              for (var re = 2; re < Z.length; re++)
                Z[re] &&
                  (w.pending || (w.pending = [])).push({
                    text: Z[re],
                    token: H.token[re - 1],
                  });
              return d.backUp(Z[0].length - (Z[1] ? Z[1].length : 0)), ee[0];
            } else return ee && ee.join ? ee[0] : ee;
          }
        }
        return d.next(), null;
      };
    }
    function s(x, c) {
      if (x === c) return !0;
      if (!x || typeof x != 'object' || !c || typeof c != 'object') return !1;
      var d = 0;
      for (var w in x)
        if (x.hasOwnProperty(w)) {
          if (!c.hasOwnProperty(w) || !s(x[w], c[w])) return !1;
          d++;
        }
      for (var w in c) c.hasOwnProperty(w) && d--;
      return d == 0;
    }
    function p(x, c, d, w) {
      var E;
      if (d.persistent)
        for (var z = c.persistentStates; z && !E; z = z.next)
          (d.spec ? s(d.spec, z.spec) : d.mode == z.mode) && (E = z);
      var y = E ? E.mode : d.mode || o.getMode(x, d.spec),
        R = E ? E.state : o.startState(y);
      d.persistent &&
        !E &&
        (c.persistentStates = {
          mode: y,
          spec: d.spec,
          state: R,
          next: c.persistentStates,
        }),
        (c.localState = R),
        (c.local = {
          mode: y,
          end: d.end && v(d.end),
          endScan: d.end && d.forceEnd !== !1 && v(d.end, !1),
          endToken: w && w.join ? w[w.length - 1] : w,
        });
    }
    function g(x, c) {
      for (var d = 0; d < c.length; d++) if (c[d] === x) return !0;
    }
    function L(x, c) {
      return function (d, w, E) {
        if (d.local && d.local.mode.indent)
          return d.local.mode.indent(d.localState, w, E);
        if (
          d.indent == null ||
          d.local ||
          (c.dontIndentStates && g(d.state, c.dontIndentStates) > -1)
        )
          return o.Pass;
        var z = d.indent.length - 1,
          y = x[d.state];
        e: for (;;) {
          for (var R = 0; R < y.length; R++) {
            var M = y[R];
            if (M.data.dedent && M.data.dedentIfLineStart !== !1) {
              var H = M.regex.exec(w);
              if (H && H[0]) {
                z--,
                  (M.next || M.push) && (y = x[M.next || M.push]),
                  (w = w.slice(H[0].length));
                continue e;
              }
            }
          }
          break;
        }
        return z < 0 ? 0 : d.indent[z];
      };
    }
  });
});
var Ks = Ke((Us, $s) => {
  (function (o) {
    typeof Us == 'object' && typeof $s == 'object'
      ? o(We(), Di())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror', '../../addon/mode/simple'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    var h = 'from',
      v = new RegExp('^(\\s*)\\b(' + h + ')\\b', 'i'),
      C = ['run', 'cmd', 'entrypoint', 'shell'],
      b = new RegExp('^(\\s*)(' + C.join('|') + ')(\\s+\\[)', 'i'),
      S = 'expose',
      s = new RegExp('^(\\s*)(' + S + ')(\\s+)', 'i'),
      p = [
        'arg',
        'from',
        'maintainer',
        'label',
        'env',
        'add',
        'copy',
        'volume',
        'user',
        'workdir',
        'onbuild',
        'stopsignal',
        'healthcheck',
        'shell',
      ],
      g = [h, S].concat(C).concat(p),
      L = '(' + g.join('|') + ')',
      x = new RegExp('^(\\s*)' + L + '(\\s*)(#.*)?$', 'i'),
      c = new RegExp('^(\\s*)' + L + '(\\s+)', 'i');
    o.defineSimpleMode('dockerfile', {
      start: [
        { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
        { regex: v, token: [null, 'keyword'], sol: !0, next: 'from' },
        { regex: x, token: [null, 'keyword', null, 'error'], sol: !0 },
        { regex: b, token: [null, 'keyword', null], sol: !0, next: 'array' },
        { regex: s, token: [null, 'keyword', null], sol: !0, next: 'expose' },
        {
          regex: c,
          token: [null, 'keyword', null],
          sol: !0,
          next: 'arguments',
        },
        { regex: /./, token: null },
      ],
      from: [
        { regex: /\s*$/, token: null, next: 'start' },
        { regex: /(\s*)(#.*)$/, token: [null, 'error'], next: 'start' },
        { regex: /(\s*\S+\s+)(as)/i, token: [null, 'keyword'], next: 'start' },
        { token: null, next: 'start' },
      ],
      single: [
        { regex: /(?:[^\\']|\\.)/, token: 'string' },
        { regex: /'/, token: 'string', pop: !0 },
      ],
      double: [
        { regex: /(?:[^\\"]|\\.)/, token: 'string' },
        { regex: /"/, token: 'string', pop: !0 },
      ],
      array: [
        { regex: /\]/, token: null, next: 'start' },
        { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
      ],
      expose: [
        { regex: /\d+$/, token: 'number', next: 'start' },
        { regex: /[^\d]+$/, token: null, next: 'start' },
        { regex: /\d+/, token: 'number' },
        { regex: /[^\d]+/, token: null },
        { token: null, next: 'start' },
      ],
      arguments: [
        { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
        { regex: /"(?:[^\\"]|\\.)*"?$/, token: 'string', next: 'start' },
        { regex: /"/, token: 'string', push: 'double' },
        { regex: /'(?:[^\\']|\\.)*'?$/, token: 'string', next: 'start' },
        { regex: /'/, token: 'string', push: 'single' },
        { regex: /[^#"']+[\\`]$/, token: null },
        { regex: /[^#"']+$/, token: null, next: 'start' },
        { regex: /[^#"']+/, token: null },
        { token: null, next: 'start' },
      ],
      meta: { lineComment: '#' },
    }),
      o.defineMIME('text/x-dockerfile', 'dockerfile');
  });
});
var Xs = Ke((Gs, Zs) => {
  (function (o) {
    typeof Gs == 'object' && typeof Zs == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.modeInfo = [
      { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
      {
        name: 'PGP',
        mimes: [
          'application/pgp',
          'application/pgp-encrypted',
          'application/pgp-keys',
          'application/pgp-signature',
        ],
        mode: 'asciiarmor',
        ext: ['asc', 'pgp', 'sig'],
      },
      {
        name: 'ASN.1',
        mime: 'text/x-ttcn-asn',
        mode: 'asn.1',
        ext: ['asn', 'asn1'],
      },
      {
        name: 'Asterisk',
        mime: 'text/x-asterisk',
        mode: 'asterisk',
        file: /^extensions\.conf$/i,
      },
      {
        name: 'Brainfuck',
        mime: 'text/x-brainfuck',
        mode: 'brainfuck',
        ext: ['b', 'bf'],
      },
      { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
      {
        name: 'C++',
        mime: 'text/x-c++src',
        mode: 'clike',
        ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
        alias: ['cpp'],
      },
      {
        name: 'Cobol',
        mime: 'text/x-cobol',
        mode: 'cobol',
        ext: ['cob', 'cpy', 'cbl'],
      },
      {
        name: 'C#',
        mime: 'text/x-csharp',
        mode: 'clike',
        ext: ['cs'],
        alias: ['csharp', 'cs'],
      },
      {
        name: 'Clojure',
        mime: 'text/x-clojure',
        mode: 'clojure',
        ext: ['clj', 'cljc', 'cljx'],
      },
      {
        name: 'ClojureScript',
        mime: 'text/x-clojurescript',
        mode: 'clojure',
        ext: ['cljs'],
      },
      {
        name: 'Closure Stylesheets (GSS)',
        mime: 'text/x-gss',
        mode: 'css',
        ext: ['gss'],
      },
      {
        name: 'CMake',
        mime: 'text/x-cmake',
        mode: 'cmake',
        ext: ['cmake', 'cmake.in'],
        file: /^CMakeLists\.txt$/,
      },
      {
        name: 'CoffeeScript',
        mimes: [
          'application/vnd.coffeescript',
          'text/coffeescript',
          'text/x-coffeescript',
        ],
        mode: 'coffeescript',
        ext: ['coffee'],
        alias: ['coffee', 'coffee-script'],
      },
      {
        name: 'Common Lisp',
        mime: 'text/x-common-lisp',
        mode: 'commonlisp',
        ext: ['cl', 'lisp', 'el'],
        alias: ['lisp'],
      },
      {
        name: 'Cypher',
        mime: 'application/x-cypher-query',
        mode: 'cypher',
        ext: ['cyp', 'cypher'],
      },
      {
        name: 'Cython',
        mime: 'text/x-cython',
        mode: 'python',
        ext: ['pyx', 'pxd', 'pxi'],
      },
      { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
      { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
      { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
      { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
      {
        name: 'Dart',
        mimes: ['application/dart', 'text/x-dart'],
        mode: 'dart',
        ext: ['dart'],
      },
      {
        name: 'diff',
        mime: 'text/x-diff',
        mode: 'diff',
        ext: ['diff', 'patch'],
      },
      { name: 'Django', mime: 'text/x-django', mode: 'django' },
      {
        name: 'Dockerfile',
        mime: 'text/x-dockerfile',
        mode: 'dockerfile',
        file: /^Dockerfile$/,
      },
      { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
      {
        name: 'Dylan',
        mime: 'text/x-dylan',
        mode: 'dylan',
        ext: ['dylan', 'dyl', 'intr'],
      },
      { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
      { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
      { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
      { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
      { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
      {
        name: 'Embedded JavaScript',
        mime: 'application/x-ejs',
        mode: 'htmlembedded',
        ext: ['ejs'],
      },
      {
        name: 'Embedded Ruby',
        mime: 'application/x-erb',
        mode: 'htmlembedded',
        ext: ['erb'],
      },
      { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
      { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
      {
        name: 'Factor',
        mime: 'text/x-factor',
        mode: 'factor',
        ext: ['factor'],
      },
      { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
      {
        name: 'Forth',
        mime: 'text/x-forth',
        mode: 'forth',
        ext: ['forth', 'fth', '4th'],
      },
      {
        name: 'Fortran',
        mime: 'text/x-fortran',
        mode: 'fortran',
        ext: ['f', 'for', 'f77', 'f90', 'f95'],
      },
      {
        name: 'F#',
        mime: 'text/x-fsharp',
        mode: 'mllike',
        ext: ['fs'],
        alias: ['fsharp'],
      },
      { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
      {
        name: 'Gherkin',
        mime: 'text/x-feature',
        mode: 'gherkin',
        ext: ['feature'],
      },
      {
        name: 'GitHub Flavored Markdown',
        mime: 'text/x-gfm',
        mode: 'gfm',
        file: /^(readme|contributing|history)\.md$/i,
      },
      { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
      {
        name: 'Groovy',
        mime: 'text/x-groovy',
        mode: 'groovy',
        ext: ['groovy', 'gradle'],
        file: /^Jenkinsfile$/,
      },
      { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
      { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
      {
        name: 'Haskell (Literate)',
        mime: 'text/x-literate-haskell',
        mode: 'haskell-literate',
        ext: ['lhs'],
      },
      { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
      { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
      {
        name: 'ASP.NET',
        mime: 'application/x-aspx',
        mode: 'htmlembedded',
        ext: ['aspx'],
        alias: ['asp', 'aspx'],
      },
      {
        name: 'HTML',
        mime: 'text/html',
        mode: 'htmlmixed',
        ext: ['html', 'htm', 'handlebars', 'hbs'],
        alias: ['xhtml'],
      },
      { name: 'HTTP', mime: 'message/http', mode: 'http' },
      { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
      {
        name: 'Pug',
        mime: 'text/x-pug',
        mode: 'pug',
        ext: ['jade', 'pug'],
        alias: ['jade'],
      },
      { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
      {
        name: 'Java Server Pages',
        mime: 'application/x-jsp',
        mode: 'htmlembedded',
        ext: ['jsp'],
        alias: ['jsp'],
      },
      {
        name: 'JavaScript',
        mimes: [
          'text/javascript',
          'text/ecmascript',
          'application/javascript',
          'application/x-javascript',
          'application/ecmascript',
        ],
        mode: 'javascript',
        ext: ['js'],
        alias: ['ecmascript', 'js', 'node'],
      },
      {
        name: 'JSON',
        mimes: ['application/json', 'application/x-json'],
        mode: 'javascript',
        ext: ['json', 'map'],
        alias: ['json5'],
      },
      {
        name: 'JSON-LD',
        mime: 'application/ld+json',
        mode: 'javascript',
        ext: ['jsonld'],
        alias: ['jsonld'],
      },
      { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
      {
        name: 'Jinja2',
        mime: 'text/jinja2',
        mode: 'jinja2',
        ext: ['j2', 'jinja', 'jinja2'],
      },
      {
        name: 'Julia',
        mime: 'text/x-julia',
        mode: 'julia',
        ext: ['jl'],
        alias: ['jl'],
      },
      { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
      { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
      {
        name: 'LiveScript',
        mime: 'text/x-livescript',
        mode: 'livescript',
        ext: ['ls'],
        alias: ['ls'],
      },
      { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
      {
        name: 'Markdown',
        mime: 'text/x-markdown',
        mode: 'markdown',
        ext: ['markdown', 'md', 'mkd'],
      },
      { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
      { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
      {
        name: 'Mathematica',
        mime: 'text/x-mathematica',
        mode: 'mathematica',
        ext: ['m', 'nb', 'wl', 'wls'],
      },
      {
        name: 'Modelica',
        mime: 'text/x-modelica',
        mode: 'modelica',
        ext: ['mo'],
      },
      { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
      { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
      { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
      { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
      {
        name: 'Nginx',
        mime: 'text/x-nginx-conf',
        mode: 'nginx',
        file: /nginx.*\.conf$/i,
      },
      { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
      {
        name: 'NTriples',
        mimes: [
          'application/n-triples',
          'application/n-quads',
          'text/n-triples',
        ],
        mode: 'ntriples',
        ext: ['nt', 'nq'],
      },
      {
        name: 'Objective-C',
        mime: 'text/x-objectivec',
        mode: 'clike',
        ext: ['m'],
        alias: ['objective-c', 'objc'],
      },
      {
        name: 'Objective-C++',
        mime: 'text/x-objectivec++',
        mode: 'clike',
        ext: ['mm'],
        alias: ['objective-c++', 'objc++'],
      },
      {
        name: 'OCaml',
        mime: 'text/x-ocaml',
        mode: 'mllike',
        ext: ['ml', 'mli', 'mll', 'mly'],
      },
      { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
      { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
      {
        name: 'Pascal',
        mime: 'text/x-pascal',
        mode: 'pascal',
        ext: ['p', 'pas'],
      },
      { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
      { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
      {
        name: 'PHP',
        mimes: [
          'text/x-php',
          'application/x-httpd-php',
          'application/x-httpd-php-open',
        ],
        mode: 'php',
        ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
      },
      { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
      {
        name: 'Plain Text',
        mime: 'text/plain',
        mode: 'null',
        ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
      },
      { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
      { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
      {
        name: 'PowerShell',
        mime: 'application/x-powershell',
        mode: 'powershell',
        ext: ['ps1', 'psd1', 'psm1'],
      },
      {
        name: 'Properties files',
        mime: 'text/x-properties',
        mode: 'properties',
        ext: ['properties', 'ini', 'in'],
        alias: ['ini', 'properties'],
      },
      {
        name: 'ProtoBuf',
        mime: 'text/x-protobuf',
        mode: 'protobuf',
        ext: ['proto'],
      },
      {
        name: 'Python',
        mime: 'text/x-python',
        mode: 'python',
        ext: ['BUILD', 'bzl', 'py', 'pyw'],
        file: /^(BUCK|BUILD)$/,
      },
      { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
      { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
      {
        name: 'R',
        mime: 'text/x-rsrc',
        mode: 'r',
        ext: ['r', 'R'],
        alias: ['rscript'],
      },
      {
        name: 'reStructuredText',
        mime: 'text/x-rst',
        mode: 'rst',
        ext: ['rst'],
        alias: ['rst'],
      },
      { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
      { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
      {
        name: 'Ruby',
        mime: 'text/x-ruby',
        mode: 'ruby',
        ext: ['rb'],
        alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
      },
      { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
      { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
      { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
      { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
      {
        name: 'Scheme',
        mime: 'text/x-scheme',
        mode: 'scheme',
        ext: ['scm', 'ss'],
      },
      { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
      {
        name: 'Shell',
        mimes: ['text/x-sh', 'application/x-sh'],
        mode: 'shell',
        ext: ['sh', 'ksh', 'bash'],
        alias: ['bash', 'sh', 'zsh'],
        file: /^PKGBUILD$/,
      },
      {
        name: 'Sieve',
        mime: 'application/sieve',
        mode: 'sieve',
        ext: ['siv', 'sieve'],
      },
      {
        name: 'Slim',
        mimes: ['text/x-slim', 'application/x-slim'],
        mode: 'slim',
        ext: ['slim'],
      },
      {
        name: 'Smalltalk',
        mime: 'text/x-stsrc',
        mode: 'smalltalk',
        ext: ['st'],
      },
      { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
      { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
      {
        name: 'SML',
        mime: 'text/x-sml',
        mode: 'mllike',
        ext: ['sml', 'sig', 'fun', 'smackspec'],
      },
      {
        name: 'Soy',
        mime: 'text/x-soy',
        mode: 'soy',
        ext: ['soy'],
        alias: ['closure template'],
      },
      {
        name: 'SPARQL',
        mime: 'application/sparql-query',
        mode: 'sparql',
        ext: ['rq', 'sparql'],
        alias: ['sparul'],
      },
      {
        name: 'Spreadsheet',
        mime: 'text/x-spreadsheet',
        mode: 'spreadsheet',
        alias: ['excel', 'formula'],
      },
      { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
      { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
      {
        name: 'Squirrel',
        mime: 'text/x-squirrel',
        mode: 'clike',
        ext: ['nut'],
      },
      { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
      { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
      { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
      {
        name: 'LaTeX',
        mime: 'text/x-latex',
        mode: 'stex',
        ext: ['text', 'ltx', 'tex'],
        alias: ['tex'],
      },
      {
        name: 'SystemVerilog',
        mime: 'text/x-systemverilog',
        mode: 'verilog',
        ext: ['v', 'sv', 'svh'],
      },
      { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
      {
        name: 'Textile',
        mime: 'text/x-textile',
        mode: 'textile',
        ext: ['textile'],
      },
      { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
      { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
      { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
      { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
      {
        name: 'troff',
        mime: 'text/troff',
        mode: 'troff',
        ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      },
      {
        name: 'TTCN',
        mime: 'text/x-ttcn',
        mode: 'ttcn',
        ext: ['ttcn', 'ttcn3', 'ttcnpp'],
      },
      {
        name: 'TTCN_CFG',
        mime: 'text/x-ttcn-cfg',
        mode: 'ttcn-cfg',
        ext: ['cfg'],
      },
      { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
      {
        name: 'TypeScript',
        mime: 'application/typescript',
        mode: 'javascript',
        ext: ['ts'],
        alias: ['ts'],
      },
      {
        name: 'TypeScript-JSX',
        mime: 'text/typescript-jsx',
        mode: 'jsx',
        ext: ['tsx'],
        alias: ['tsx'],
      },
      { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
      {
        name: 'Web IDL',
        mime: 'text/x-webidl',
        mode: 'webidl',
        ext: ['webidl'],
      },
      { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
      {
        name: 'VBScript',
        mime: 'text/vbscript',
        mode: 'vbscript',
        ext: ['vbs'],
      },
      {
        name: 'Velocity',
        mime: 'text/velocity',
        mode: 'velocity',
        ext: ['vtl'],
      },
      { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
      { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
      {
        name: 'Vue.js Component',
        mimes: ['script/x-vue', 'text/x-vue'],
        mode: 'vue',
        ext: ['vue'],
      },
      {
        name: 'XML',
        mimes: ['application/xml', 'text/xml'],
        mode: 'xml',
        ext: ['xml', 'xsl', 'xsd', 'svg'],
        alias: ['rss', 'wsdl', 'xsd'],
      },
      {
        name: 'XQuery',
        mime: 'application/xquery',
        mode: 'xquery',
        ext: ['xy', 'xquery'],
      },
      { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
      {
        name: 'YAML',
        mimes: ['text/x-yaml', 'text/yaml'],
        mode: 'yaml',
        ext: ['yaml', 'yml'],
        alias: ['yml'],
      },
      { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
      {
        name: 'mscgen',
        mime: 'text/x-mscgen',
        mode: 'mscgen',
        ext: ['mscgen', 'mscin', 'msc'],
      },
      { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
      {
        name: 'msgenny',
        mime: 'text/x-msgenny',
        mode: 'mscgen',
        ext: ['msgenny'],
      },
      {
        name: 'WebAssembly',
        mime: 'text/webassembly',
        mode: 'wast',
        ext: ['wat', 'wast'],
      },
    ];
    for (var h = 0; h < o.modeInfo.length; h++) {
      var v = o.modeInfo[h];
      v.mimes && (v.mime = v.mimes[0]);
    }
    (o.findModeByMIME = function (C) {
      C = C.toLowerCase();
      for (var b = 0; b < o.modeInfo.length; b++) {
        var S = o.modeInfo[b];
        if (S.mime == C) return S;
        if (S.mimes) {
          for (var s = 0; s < S.mimes.length; s++)
            if (S.mimes[s] == C) return S;
        }
      }
      if (/\+xml$/.test(C)) return o.findModeByMIME('application/xml');
      if (/\+json$/.test(C)) return o.findModeByMIME('application/json');
    }),
      (o.findModeByExtension = function (C) {
        C = C.toLowerCase();
        for (var b = 0; b < o.modeInfo.length; b++) {
          var S = o.modeInfo[b];
          if (S.ext) {
            for (var s = 0; s < S.ext.length; s++) if (S.ext[s] == C) return S;
          }
        }
      }),
      (o.findModeByFileName = function (C) {
        for (var b = 0; b < o.modeInfo.length; b++) {
          var S = o.modeInfo[b];
          if (S.file && S.file.test(C)) return S;
        }
        var s = C.lastIndexOf('.'),
          p = s > -1 && C.substring(s + 1, C.length);
        if (p) return o.findModeByExtension(p);
      }),
      (o.findModeByName = function (C) {
        C = C.toLowerCase();
        for (var b = 0; b < o.modeInfo.length; b++) {
          var S = o.modeInfo[b];
          if (S.name.toLowerCase() == C) return S;
          if (S.alias) {
            for (var s = 0; s < S.alias.length; s++)
              if (S.alias[s].toLowerCase() == C) return S;
          }
        }
      });
  });
});
var Jo = Ke((Ys, Qs) => {
  (function (o) {
    typeof Ys == 'object' && typeof Qs == 'object'
      ? o(We(), mn(), Xs())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror', '../xml/xml', '../meta'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode(
      'markdown',
      function (h, v) {
        var C = o.getMode(h, 'text/html'),
          b = C.name == 'null';
        function S(q) {
          if (o.findModeByName) {
            var T = o.findModeByName(q);
            T && (q = T.mime || T.mimes[0]);
          }
          var de = o.getMode(h, q);
          return de.name == 'null' ? null : de;
        }
        v.highlightFormatting === void 0 && (v.highlightFormatting = !1),
          v.maxBlockquoteDepth === void 0 && (v.maxBlockquoteDepth = 0),
          v.taskLists === void 0 && (v.taskLists = !1),
          v.strikethrough === void 0 && (v.strikethrough = !1),
          v.emoji === void 0 && (v.emoji = !1),
          v.fencedCodeBlockHighlighting === void 0 &&
            (v.fencedCodeBlockHighlighting = !0),
          v.fencedCodeBlockDefaultMode === void 0 &&
            (v.fencedCodeBlockDefaultMode = 'text/plain'),
          v.xml === void 0 && (v.xml = !0),
          v.tokenTypeOverrides === void 0 && (v.tokenTypeOverrides = {});
        var s = {
          header: 'header',
          code: 'comment',
          quote: 'quote',
          list1: 'variable-2',
          list2: 'variable-3',
          list3: 'keyword',
          hr: 'hr',
          image: 'image',
          imageAltText: 'image-alt-text',
          imageMarker: 'image-marker',
          formatting: 'formatting',
          linkInline: 'link',
          linkEmail: 'link',
          linkText: 'link',
          linkHref: 'string',
          em: 'em',
          strong: 'strong',
          strikethrough: 'strikethrough',
          emoji: 'builtin',
        };
        for (var p in s)
          s.hasOwnProperty(p) &&
            v.tokenTypeOverrides[p] &&
            (s[p] = v.tokenTypeOverrides[p]);
        var g = /^([*\-_])(?:\s*\1){2,}\s*$/,
          L = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
          x = /^\[(x| )\](?=\s)/i,
          c = v.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
          d = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
          w = /^[^#!\[\]*_\\<>` "'(~:]+/,
          E = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
          z = /^\s*\[[^\]]+?\]:.*$/,
          y =
            /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
          R = '    ';
        function M(q, T, de) {
          return (T.f = T.inline = de), de(q, T);
        }
        function H(q, T, de) {
          return (T.f = T.block = de), de(q, T);
        }
        function Z(q) {
          return !q || !/\S/.test(q.string);
        }
        function ee(q) {
          if (
            ((q.linkTitle = !1),
            (q.linkHref = !1),
            (q.linkText = !1),
            (q.em = !1),
            (q.strong = !1),
            (q.strikethrough = !1),
            (q.quote = 0),
            (q.indentedCode = !1),
            q.f == N)
          ) {
            var T = b;
            if (!T) {
              var de = o.innerMode(C, q.htmlState);
              T =
                de.mode.name == 'xml' &&
                de.state.tagStart === null &&
                !de.state.context &&
                de.state.tokenize.isInText;
            }
            T && ((q.f = j), (q.block = re), (q.htmlState = null));
          }
          return (
            (q.trailingSpace = 0),
            (q.trailingSpaceNewLine = !1),
            (q.prevLine = q.thisLine),
            (q.thisLine = { stream: null }),
            null
          );
        }
        function re(q, T) {
          var de = q.column() === T.indentation,
            ze = Z(T.prevLine.stream),
            pe = T.indentedCode,
            Ee = T.prevLine.hr,
            ge = T.list !== !1,
            Oe = (T.listStack[T.listStack.length - 1] || 0) + 3;
          T.indentedCode = !1;
          var qe = T.indentation;
          if (
            T.indentationDiff === null &&
            ((T.indentationDiff = T.indentation), ge)
          ) {
            for (T.list = null; qe < T.listStack[T.listStack.length - 1]; )
              T.listStack.pop(),
                T.listStack.length
                  ? (T.indentation = T.listStack[T.listStack.length - 1])
                  : (T.list = !1);
            T.list !== !1 &&
              (T.indentationDiff = qe - T.listStack[T.listStack.length - 1]);
          }
          var Se =
              !ze &&
              !Ee &&
              !T.prevLine.header &&
              (!ge || !pe) &&
              !T.prevLine.fencedCodeEnd,
            je =
              (T.list === !1 || Ee || ze) && T.indentation <= Oe && q.match(g),
            Ze = null;
          if (
            T.indentationDiff >= 4 &&
            (pe || T.prevLine.fencedCodeEnd || T.prevLine.header || ze)
          )
            return q.skipToEnd(), (T.indentedCode = !0), s.code;
          if (q.eatSpace()) return null;
          if (
            de &&
            T.indentation <= Oe &&
            (Ze = q.match(c)) &&
            Ze[1].length <= 6
          )
            return (
              (T.quote = 0),
              (T.header = Ze[1].length),
              (T.thisLine.header = !0),
              v.highlightFormatting && (T.formatting = 'header'),
              (T.f = T.inline),
              D(T)
            );
          if (T.indentation <= Oe && q.eat('>'))
            return (
              (T.quote = de ? 1 : T.quote + 1),
              v.highlightFormatting && (T.formatting = 'quote'),
              q.eatSpace(),
              D(T)
            );
          if (
            !je &&
            !T.setext &&
            de &&
            T.indentation <= Oe &&
            (Ze = q.match(L))
          ) {
            var ke = Ze[1] ? 'ol' : 'ul';
            return (
              (T.indentation = qe + q.current().length),
              (T.list = !0),
              (T.quote = 0),
              T.listStack.push(T.indentation),
              (T.em = !1),
              (T.strong = !1),
              (T.code = !1),
              (T.strikethrough = !1),
              v.taskLists && q.match(x, !1) && (T.taskList = !0),
              (T.f = T.inline),
              v.highlightFormatting && (T.formatting = ['list', 'list-' + ke]),
              D(T)
            );
          } else {
            if (de && T.indentation <= Oe && (Ze = q.match(E, !0)))
              return (
                (T.quote = 0),
                (T.fencedEndRE = new RegExp(Ze[1] + '+ *$')),
                (T.localMode =
                  v.fencedCodeBlockHighlighting &&
                  S(Ze[2] || v.fencedCodeBlockDefaultMode)),
                T.localMode && (T.localState = o.startState(T.localMode)),
                (T.f = T.block = F),
                v.highlightFormatting && (T.formatting = 'code-block'),
                (T.code = -1),
                D(T)
              );
            if (
              T.setext ||
              ((!Se || !ge) &&
                !T.quote &&
                T.list === !1 &&
                !T.code &&
                !je &&
                !z.test(q.string) &&
                (Ze = q.lookAhead(1)) &&
                (Ze = Ze.match(d)))
            )
              return (
                T.setext
                  ? ((T.header = T.setext),
                    (T.setext = 0),
                    q.skipToEnd(),
                    v.highlightFormatting && (T.formatting = 'header'))
                  : ((T.header = Ze[0].charAt(0) == '=' ? 1 : 2),
                    (T.setext = T.header)),
                (T.thisLine.header = !0),
                (T.f = T.inline),
                D(T)
              );
            if (je)
              return q.skipToEnd(), (T.hr = !0), (T.thisLine.hr = !0), s.hr;
            if (q.peek() === '[') return M(q, T, I);
          }
          return M(q, T, T.inline);
        }
        function N(q, T) {
          var de = C.token(q, T.htmlState);
          if (!b) {
            var ze = o.innerMode(C, T.htmlState);
            ((ze.mode.name == 'xml' &&
              ze.state.tagStart === null &&
              !ze.state.context &&
              ze.state.tokenize.isInText) ||
              (T.md_inside && q.current().indexOf('>') > -1)) &&
              ((T.f = j), (T.block = re), (T.htmlState = null));
          }
          return de;
        }
        function F(q, T) {
          var de = T.listStack[T.listStack.length - 1] || 0,
            ze = T.indentation < de,
            pe = de + 3;
          if (
            T.fencedEndRE &&
            T.indentation <= pe &&
            (ze || q.match(T.fencedEndRE))
          ) {
            v.highlightFormatting && (T.formatting = 'code-block');
            var Ee;
            return (
              ze || (Ee = D(T)),
              (T.localMode = T.localState = null),
              (T.block = re),
              (T.f = j),
              (T.fencedEndRE = null),
              (T.code = 0),
              (T.thisLine.fencedCodeEnd = !0),
              ze ? H(q, T, T.block) : Ee
            );
          } else
            return T.localMode
              ? T.localMode.token(q, T.localState)
              : (q.skipToEnd(), s.code);
        }
        function D(q) {
          var T = [];
          if (q.formatting) {
            T.push(s.formatting),
              typeof q.formatting == 'string' &&
                (q.formatting = [q.formatting]);
            for (var de = 0; de < q.formatting.length; de++)
              T.push(s.formatting + '-' + q.formatting[de]),
                q.formatting[de] === 'header' &&
                  T.push(
                    s.formatting + '-' + q.formatting[de] + '-' + q.header
                  ),
                q.formatting[de] === 'quote' &&
                  (!v.maxBlockquoteDepth || v.maxBlockquoteDepth >= q.quote
                    ? T.push(
                        s.formatting + '-' + q.formatting[de] + '-' + q.quote
                      )
                    : T.push('error'));
          }
          if (q.taskOpen) return T.push('meta'), T.length ? T.join(' ') : null;
          if (q.taskClosed)
            return T.push('property'), T.length ? T.join(' ') : null;
          if (
            (q.linkHref
              ? T.push(s.linkHref, 'url')
              : (q.strong && T.push(s.strong),
                q.em && T.push(s.em),
                q.strikethrough && T.push(s.strikethrough),
                q.emoji && T.push(s.emoji),
                q.linkText && T.push(s.linkText),
                q.code && T.push(s.code),
                q.image && T.push(s.image),
                q.imageAltText && T.push(s.imageAltText, 'link'),
                q.imageMarker && T.push(s.imageMarker)),
            q.header && T.push(s.header, s.header + '-' + q.header),
            q.quote &&
              (T.push(s.quote),
              !v.maxBlockquoteDepth || v.maxBlockquoteDepth >= q.quote
                ? T.push(s.quote + '-' + q.quote)
                : T.push(s.quote + '-' + v.maxBlockquoteDepth)),
            q.list !== !1)
          ) {
            var ze = (q.listStack.length - 1) % 3;
            ze
              ? ze === 1
                ? T.push(s.list2)
                : T.push(s.list3)
              : T.push(s.list1);
          }
          return (
            q.trailingSpaceNewLine
              ? T.push('trailing-space-new-line')
              : q.trailingSpace &&
                T.push('trailing-space-' + (q.trailingSpace % 2 ? 'a' : 'b')),
            T.length ? T.join(' ') : null
          );
        }
        function Q(q, T) {
          if (q.match(w, !0)) return D(T);
        }
        function j(q, T) {
          var de = T.text(q, T);
          if (typeof de < 'u') return de;
          if (T.list) return (T.list = null), D(T);
          if (T.taskList) {
            var ze = q.match(x, !0)[1] === ' ';
            return (
              ze ? (T.taskOpen = !0) : (T.taskClosed = !0),
              v.highlightFormatting && (T.formatting = 'task'),
              (T.taskList = !1),
              D(T)
            );
          }
          if (
            ((T.taskOpen = !1),
            (T.taskClosed = !1),
            T.header && q.match(/^#+$/, !0))
          )
            return v.highlightFormatting && (T.formatting = 'header'), D(T);
          var pe = q.next();
          if (T.linkTitle) {
            T.linkTitle = !1;
            var Ee = pe;
            pe === '(' && (Ee = ')'),
              (Ee = (Ee + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1'));
            var ge = '^\\s*(?:[^' + Ee + '\\\\]+|\\\\\\\\|\\\\.)' + Ee;
            if (q.match(new RegExp(ge), !0)) return s.linkHref;
          }
          if (pe === '`') {
            var Oe = T.formatting;
            v.highlightFormatting && (T.formatting = 'code'), q.eatWhile('`');
            var qe = q.current().length;
            if (T.code == 0 && (!T.quote || qe == 1))
              return (T.code = qe), D(T);
            if (qe == T.code) {
              var Se = D(T);
              return (T.code = 0), Se;
            } else return (T.formatting = Oe), D(T);
          } else if (T.code) return D(T);
          if (pe === '\\' && (q.next(), v.highlightFormatting)) {
            var je = D(T),
              Ze = s.formatting + '-escape';
            return je ? je + ' ' + Ze : Ze;
          }
          if (pe === '!' && q.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
            return (
              (T.imageMarker = !0),
              (T.image = !0),
              v.highlightFormatting && (T.formatting = 'image'),
              D(T)
            );
          if (
            pe === '[' &&
            T.imageMarker &&
            q.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
          )
            return (
              (T.imageMarker = !1),
              (T.imageAltText = !0),
              v.highlightFormatting && (T.formatting = 'image'),
              D(T)
            );
          if (pe === ']' && T.imageAltText) {
            v.highlightFormatting && (T.formatting = 'image');
            var je = D(T);
            return (
              (T.imageAltText = !1), (T.image = !1), (T.inline = T.f = _), je
            );
          }
          if (pe === '[' && !T.image)
            return (
              (T.linkText && q.match(/^.*?\]/)) ||
                ((T.linkText = !0),
                v.highlightFormatting && (T.formatting = 'link')),
              D(T)
            );
          if (pe === ']' && T.linkText) {
            v.highlightFormatting && (T.formatting = 'link');
            var je = D(T);
            return (
              (T.linkText = !1),
              (T.inline = T.f = q.match(/\(.*?\)| ?\[.*?\]/, !1) ? _ : j),
              je
            );
          }
          if (
            pe === '<' &&
            q.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)
          ) {
            (T.f = T.inline = V),
              v.highlightFormatting && (T.formatting = 'link');
            var je = D(T);
            return je ? (je += ' ') : (je = ''), je + s.linkInline;
          }
          if (pe === '<' && q.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
            (T.f = T.inline = V),
              v.highlightFormatting && (T.formatting = 'link');
            var je = D(T);
            return je ? (je += ' ') : (je = ''), je + s.linkEmail;
          }
          if (
            v.xml &&
            pe === '<' &&
            q.match(
              /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
              !1
            )
          ) {
            var ke = q.string.indexOf('>', q.pos);
            if (ke != -1) {
              var Je = q.string.substring(q.start, ke);
              /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(Je) &&
                (T.md_inside = !0);
            }
            return q.backUp(1), (T.htmlState = o.startState(C)), H(q, T, N);
          }
          if (v.xml && pe === '<' && q.match(/^\/\w*?>/))
            return (T.md_inside = !1), 'tag';
          if (pe === '*' || pe === '_') {
            for (
              var He = 1, Ge = q.pos == 1 ? ' ' : q.string.charAt(q.pos - 2);
              He < 3 && q.eat(pe);

            )
              He++;
            var U = q.peek() || ' ',
              G = !/\s/.test(U) && (!y.test(U) || /\s/.test(Ge) || y.test(Ge)),
              ce = !/\s/.test(Ge) && (!y.test(Ge) || /\s/.test(U) || y.test(U)),
              Be = null,
              te = null;
            if (
              (He % 2 &&
                (!T.em && G && (pe === '*' || !ce || y.test(Ge))
                  ? (Be = !0)
                  : T.em == pe &&
                    ce &&
                    (pe === '*' || !G || y.test(U)) &&
                    (Be = !1)),
              He > 1 &&
                (!T.strong && G && (pe === '*' || !ce || y.test(Ge))
                  ? (te = !0)
                  : T.strong == pe &&
                    ce &&
                    (pe === '*' || !G || y.test(U)) &&
                    (te = !1)),
              te != null || Be != null)
            ) {
              v.highlightFormatting &&
                (T.formatting =
                  Be == null ? 'strong' : te == null ? 'em' : 'strong em'),
                Be === !0 && (T.em = pe),
                te === !0 && (T.strong = pe);
              var Se = D(T);
              return Be === !1 && (T.em = !1), te === !1 && (T.strong = !1), Se;
            }
          } else if (pe === ' ' && (q.eat('*') || q.eat('_'))) {
            if (q.peek() === ' ') return D(T);
            q.backUp(1);
          }
          if (v.strikethrough) {
            if (pe === '~' && q.eatWhile(pe)) {
              if (T.strikethrough) {
                v.highlightFormatting && (T.formatting = 'strikethrough');
                var Se = D(T);
                return (T.strikethrough = !1), Se;
              } else if (q.match(/^[^\s]/, !1))
                return (
                  (T.strikethrough = !0),
                  v.highlightFormatting && (T.formatting = 'strikethrough'),
                  D(T)
                );
            } else if (pe === ' ' && q.match('~~', !0)) {
              if (q.peek() === ' ') return D(T);
              q.backUp(2);
            }
          }
          if (
            v.emoji &&
            pe === ':' &&
            q.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
          ) {
            (T.emoji = !0), v.highlightFormatting && (T.formatting = 'emoji');
            var fe = D(T);
            return (T.emoji = !1), fe;
          }
          return (
            pe === ' ' &&
              (q.match(/^ +$/, !1)
                ? T.trailingSpace++
                : T.trailingSpace && (T.trailingSpaceNewLine = !0)),
            D(T)
          );
        }
        function V(q, T) {
          var de = q.next();
          if (de === '>') {
            (T.f = T.inline = j),
              v.highlightFormatting && (T.formatting = 'link');
            var ze = D(T);
            return ze ? (ze += ' ') : (ze = ''), ze + s.linkInline;
          }
          return q.match(/^[^>]+/, !0), s.linkInline;
        }
        function _(q, T) {
          if (q.eatSpace()) return null;
          var de = q.next();
          return de === '(' || de === '['
            ? ((T.f = T.inline = X(de === '(' ? ')' : ']')),
              v.highlightFormatting && (T.formatting = 'link-string'),
              (T.linkHref = !0),
              D(T))
            : 'error';
        }
        var K = {
          ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
          ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
        };
        function X(q) {
          return function (T, de) {
            var ze = T.next();
            if (ze === q) {
              (de.f = de.inline = j),
                v.highlightFormatting && (de.formatting = 'link-string');
              var pe = D(de);
              return (de.linkHref = !1), pe;
            }
            return T.match(K[q]), (de.linkHref = !0), D(de);
          };
        }
        function I(q, T) {
          return q.match(/^([^\]\\]|\\.)*\]:/, !1)
            ? ((T.f = B),
              q.next(),
              v.highlightFormatting && (T.formatting = 'link'),
              (T.linkText = !0),
              D(T))
            : M(q, T, j);
        }
        function B(q, T) {
          if (q.match(']:', !0)) {
            (T.f = T.inline = le),
              v.highlightFormatting && (T.formatting = 'link');
            var de = D(T);
            return (T.linkText = !1), de;
          }
          return q.match(/^([^\]\\]|\\.)+/, !0), s.linkText;
        }
        function le(q, T) {
          return q.eatSpace()
            ? null
            : (q.match(/^[^\s]+/, !0),
              q.peek() === void 0
                ? (T.linkTitle = !0)
                : q.match(
                    /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                    !0
                  ),
              (T.f = T.inline = j),
              s.linkHref + ' url');
        }
        var xe = {
          startState: function () {
            return {
              f: re,
              prevLine: { stream: null },
              thisLine: { stream: null },
              block: re,
              htmlState: null,
              indentation: 0,
              inline: j,
              text: Q,
              formatting: !1,
              linkText: !1,
              linkHref: !1,
              linkTitle: !1,
              code: 0,
              em: !1,
              strong: !1,
              header: 0,
              setext: 0,
              hr: !1,
              taskList: !1,
              list: !1,
              listStack: [],
              quote: 0,
              trailingSpace: 0,
              trailingSpaceNewLine: !1,
              strikethrough: !1,
              emoji: !1,
              fencedEndRE: null,
            };
          },
          copyState: function (q) {
            return {
              f: q.f,
              prevLine: q.prevLine,
              thisLine: q.thisLine,
              block: q.block,
              htmlState: q.htmlState && o.copyState(C, q.htmlState),
              indentation: q.indentation,
              localMode: q.localMode,
              localState: q.localMode
                ? o.copyState(q.localMode, q.localState)
                : null,
              inline: q.inline,
              text: q.text,
              formatting: !1,
              linkText: q.linkText,
              linkTitle: q.linkTitle,
              linkHref: q.linkHref,
              code: q.code,
              em: q.em,
              strong: q.strong,
              strikethrough: q.strikethrough,
              emoji: q.emoji,
              header: q.header,
              setext: q.setext,
              hr: q.hr,
              taskList: q.taskList,
              list: q.list,
              listStack: q.listStack.slice(0),
              quote: q.quote,
              indentedCode: q.indentedCode,
              trailingSpace: q.trailingSpace,
              trailingSpaceNewLine: q.trailingSpaceNewLine,
              md_inside: q.md_inside,
              fencedEndRE: q.fencedEndRE,
            };
          },
          token: function (q, T) {
            if (((T.formatting = !1), q != T.thisLine.stream)) {
              if (((T.header = 0), (T.hr = !1), q.match(/^\s*$/, !0)))
                return ee(T), null;
              if (
                ((T.prevLine = T.thisLine),
                (T.thisLine = { stream: q }),
                (T.taskList = !1),
                (T.trailingSpace = 0),
                (T.trailingSpaceNewLine = !1),
                !T.localState && ((T.f = T.block), T.f != N))
              ) {
                var de = q.match(/^\s*/, !0)[0].replace(/\t/g, R).length;
                if (((T.indentation = de), (T.indentationDiff = null), de > 0))
                  return null;
              }
            }
            return T.f(q, T);
          },
          innerMode: function (q) {
            return q.block == N
              ? { state: q.htmlState, mode: C }
              : q.localState
                ? { state: q.localState, mode: q.localMode }
                : { state: q, mode: xe };
          },
          indent: function (q, T, de) {
            return q.block == N && C.indent
              ? C.indent(q.htmlState, T, de)
              : q.localState && q.localMode.indent
                ? q.localMode.indent(q.localState, T, de)
                : o.Pass;
          },
          blankLine: ee,
          getType: D,
          blockCommentStart: '<!--',
          blockCommentEnd: '-->',
          closeBrackets: '()[]{}\'\'""``',
          fold: 'markdown',
        };
        return xe;
      },
      'xml'
    ),
      o.defineMIME('text/markdown', 'markdown'),
      o.defineMIME('text/x-markdown', 'markdown');
  });
});
var eu = Ke((Vs, Js) => {
  (function (o) {
    typeof Vs == 'object' && typeof Js == 'object'
      ? o(We(), Jo(), Yn())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../markdown/markdown',
              '../../addon/mode/overlay',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    var h =
      /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
    o.defineMode(
      'gfm',
      function (v, C) {
        var b = 0;
        function S(L) {
          return (L.code = !1), null;
        }
        var s = {
            startState: function () {
              return { code: !1, codeBlock: !1, ateSpace: !1 };
            },
            copyState: function (L) {
              return {
                code: L.code,
                codeBlock: L.codeBlock,
                ateSpace: L.ateSpace,
              };
            },
            token: function (L, x) {
              if (((x.combineTokens = null), x.codeBlock))
                return L.match(/^```+/)
                  ? ((x.codeBlock = !1), null)
                  : (L.skipToEnd(), null);
              if ((L.sol() && (x.code = !1), L.sol() && L.match(/^```+/)))
                return L.skipToEnd(), (x.codeBlock = !0), null;
              if (L.peek() === '`') {
                L.next();
                var c = L.pos;
                L.eatWhile('`');
                var d = 1 + L.pos - c;
                return (
                  x.code ? d === b && (x.code = !1) : ((b = d), (x.code = !0)),
                  null
                );
              } else if (x.code) return L.next(), null;
              if (L.eatSpace()) return (x.ateSpace = !0), null;
              if (
                (L.sol() || x.ateSpace) &&
                ((x.ateSpace = !1), C.gitHubSpice !== !1)
              ) {
                if (
                  L.match(
                    /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/
                  )
                )
                  return (x.combineTokens = !0), 'link';
                if (
                  L.match(
                    /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/
                  )
                )
                  return (x.combineTokens = !0), 'link';
              }
              return L.match(h) &&
                L.string.slice(L.start - 2, L.start) != '](' &&
                (L.start == 0 || /\W/.test(L.string.charAt(L.start - 1)))
                ? ((x.combineTokens = !0), 'link')
                : (L.next(), null);
            },
            blankLine: S,
          },
          p = { taskLists: !0, strikethrough: !0, emoji: !0 };
        for (var g in C) p[g] = C[g];
        return (p.name = 'markdown'), o.overlayMode(o.getMode(v, p), s);
      },
      'markdown'
    ),
      o.defineMIME('text/x-gfm', 'gfm');
  });
});
var nu = Ke((tu, ru) => {
  (function (o) {
    typeof tu == 'object' && typeof ru == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('go', function (h) {
      var v = h.indentUnit,
        C = {
          break: !0,
          case: !0,
          chan: !0,
          const: !0,
          continue: !0,
          default: !0,
          defer: !0,
          else: !0,
          fallthrough: !0,
          for: !0,
          func: !0,
          go: !0,
          goto: !0,
          if: !0,
          import: !0,
          interface: !0,
          map: !0,
          package: !0,
          range: !0,
          return: !0,
          select: !0,
          struct: !0,
          switch: !0,
          type: !0,
          var: !0,
          bool: !0,
          byte: !0,
          complex64: !0,
          complex128: !0,
          float32: !0,
          float64: !0,
          int8: !0,
          int16: !0,
          int32: !0,
          int64: !0,
          string: !0,
          uint8: !0,
          uint16: !0,
          uint32: !0,
          uint64: !0,
          int: !0,
          uint: !0,
          uintptr: !0,
          error: !0,
          rune: !0,
          any: !0,
          comparable: !0,
        },
        b = {
          true: !0,
          false: !0,
          iota: !0,
          nil: !0,
          append: !0,
          cap: !0,
          close: !0,
          complex: !0,
          copy: !0,
          delete: !0,
          imag: !0,
          len: !0,
          make: !0,
          new: !0,
          panic: !0,
          print: !0,
          println: !0,
          real: !0,
          recover: !0,
        },
        S = /[+\-*&^%:=<>!|\/]/,
        s;
      function p(w, E) {
        var z = w.next();
        if (z == '"' || z == "'" || z == '`')
          return (E.tokenize = g(z)), E.tokenize(w, E);
        if (/[\d\.]/.test(z))
          return (
            z == '.'
              ? w.match(/^[0-9_]+([eE][\-+]?[0-9_]+)?/)
              : z == '0'
                ? w.match(/^[xX][0-9a-fA-F_]+/) || w.match(/^[0-7_]+/)
                : w.match(/^[0-9_]*\.?[0-9_]*([eE][\-+]?[0-9_]+)?/),
            'number'
          );
        if (/[\[\]{}\(\),;\:\.]/.test(z)) return (s = z), null;
        if (z == '/') {
          if (w.eat('*')) return (E.tokenize = L), L(w, E);
          if (w.eat('/')) return w.skipToEnd(), 'comment';
        }
        if (S.test(z)) return w.eatWhile(S), 'operator';
        w.eatWhile(/[\w\$_\xa1-\uffff]/);
        var y = w.current();
        return C.propertyIsEnumerable(y)
          ? ((y == 'case' || y == 'default') && (s = 'case'), 'keyword')
          : b.propertyIsEnumerable(y)
            ? 'atom'
            : 'variable';
      }
      function g(w) {
        return function (E, z) {
          for (var y = !1, R, M = !1; (R = E.next()) != null; ) {
            if (R == w && !y) {
              M = !0;
              break;
            }
            y = !y && w != '`' && R == '\\';
          }
          return (M || !(y || w == '`')) && (z.tokenize = p), 'string';
        };
      }
      function L(w, E) {
        for (var z = !1, y; (y = w.next()); ) {
          if (y == '/' && z) {
            E.tokenize = p;
            break;
          }
          z = y == '*';
        }
        return 'comment';
      }
      function x(w, E, z, y, R) {
        (this.indented = w),
          (this.column = E),
          (this.type = z),
          (this.align = y),
          (this.prev = R);
      }
      function c(w, E, z) {
        return (w.context = new x(w.indented, E, z, null, w.context));
      }
      function d(w) {
        if (w.context.prev) {
          var E = w.context.type;
          return (
            (E == ')' || E == ']' || E == '}') &&
              (w.indented = w.context.indented),
            (w.context = w.context.prev)
          );
        }
      }
      return {
        startState: function (w) {
          return {
            tokenize: null,
            context: new x((w || 0) - v, 0, 'top', !1),
            indented: 0,
            startOfLine: !0,
          };
        },
        token: function (w, E) {
          var z = E.context;
          if (
            (w.sol() &&
              (z.align == null && (z.align = !1),
              (E.indented = w.indentation()),
              (E.startOfLine = !0),
              z.type == 'case' && (z.type = '}')),
            w.eatSpace())
          )
            return null;
          s = null;
          var y = (E.tokenize || p)(w, E);
          return (
            y == 'comment' ||
              (z.align == null && (z.align = !0),
              s == '{'
                ? c(E, w.column(), '}')
                : s == '['
                  ? c(E, w.column(), ']')
                  : s == '('
                    ? c(E, w.column(), ')')
                    : s == 'case'
                      ? (z.type = 'case')
                      : ((s == '}' && z.type == '}') || s == z.type) && d(E),
              (E.startOfLine = !1)),
            y
          );
        },
        indent: function (w, E) {
          if (w.tokenize != p && w.tokenize != null) return o.Pass;
          var z = w.context,
            y = E && E.charAt(0);
          if (z.type == 'case' && /^(?:case|default)\b/.test(E))
            return (w.context.type = '}'), z.indented;
          var R = y == z.type;
          return z.align ? z.column + (R ? 0 : 1) : z.indented + (R ? 0 : v);
        },
        electricChars: '{}):',
        closeBrackets: '()[]{}\'\'""``',
        fold: 'brace',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        lineComment: '//',
      };
    }),
      o.defineMIME('text/x-go', 'go');
  });
});
var au = Ke((iu, ou) => {
  (function (o) {
    typeof iu == 'object' && typeof ou == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('http', function () {
      function h(L, x) {
        return L.skipToEnd(), (x.cur = p), 'error';
      }
      function v(L, x) {
        return L.match(/^HTTP\/\d\.\d/)
          ? ((x.cur = C), 'keyword')
          : L.match(/^[A-Z]+/) && /[ \t]/.test(L.peek())
            ? ((x.cur = S), 'keyword')
            : h(L, x);
      }
      function C(L, x) {
        var c = L.match(/^\d+/);
        if (!c) return h(L, x);
        x.cur = b;
        var d = Number(c[0]);
        return d >= 100 && d < 200
          ? 'positive informational'
          : d >= 200 && d < 300
            ? 'positive success'
            : d >= 300 && d < 400
              ? 'positive redirect'
              : d >= 400 && d < 500
                ? 'negative client-error'
                : d >= 500 && d < 600
                  ? 'negative server-error'
                  : 'error';
      }
      function b(L, x) {
        return L.skipToEnd(), (x.cur = p), null;
      }
      function S(L, x) {
        return L.eatWhile(/\S/), (x.cur = s), 'string-2';
      }
      function s(L, x) {
        return L.match(/^HTTP\/\d\.\d$/) ? ((x.cur = p), 'keyword') : h(L, x);
      }
      function p(L) {
        return L.sol() && !L.eat(/[ \t]/)
          ? L.match(/^.*?:/)
            ? 'atom'
            : (L.skipToEnd(), 'error')
          : (L.skipToEnd(), 'string');
      }
      function g(L) {
        return L.skipToEnd(), null;
      }
      return {
        token: function (L, x) {
          var c = x.cur;
          return c != p && c != g && L.eatSpace() ? null : c(L, x);
        },
        blankLine: function (L) {
          L.cur = g;
        },
        startState: function () {
          return { cur: v };
        },
      };
    }),
      o.defineMIME('message/http', 'http');
  });
});
var uu = Ke((lu, su) => {
  (function (o) {
    typeof lu == 'object' && typeof su == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('jinja2', function () {
      var h = [
          'and',
          'as',
          'block',
          'endblock',
          'by',
          'cycle',
          'debug',
          'else',
          'elif',
          'extends',
          'filter',
          'endfilter',
          'firstof',
          'do',
          'for',
          'endfor',
          'if',
          'endif',
          'ifchanged',
          'endifchanged',
          'ifequal',
          'endifequal',
          'ifnotequal',
          'set',
          'raw',
          'endraw',
          'endifnotequal',
          'in',
          'include',
          'load',
          'not',
          'now',
          'or',
          'parsed',
          'regroup',
          'reversed',
          'spaceless',
          'call',
          'endcall',
          'macro',
          'endmacro',
          'endspaceless',
          'ssi',
          'templatetag',
          'openblock',
          'closeblock',
          'openvariable',
          'closevariable',
          'without',
          'context',
          'openbrace',
          'closebrace',
          'opencomment',
          'closecomment',
          'widthratio',
          'url',
          'with',
          'endwith',
          'get_current_language',
          'trans',
          'endtrans',
          'noop',
          'blocktrans',
          'endblocktrans',
          'get_available_languages',
          'get_current_language_bidi',
          'pluralize',
          'autoescape',
          'endautoescape',
        ],
        v = /^[+\-*&%=<>!?|~^]/,
        C = /^[:\[\(\{]/,
        b = ['true', 'false'],
        S = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
      (h = new RegExp('((' + h.join(')|(') + '))\\b')),
        (b = new RegExp('((' + b.join(')|(') + '))\\b'));
      function s(p, g) {
        var L = p.peek();
        if (g.incomment)
          return (
            p.skipTo('#}')
              ? (p.eatWhile(/\#|}/), (g.incomment = !1))
              : p.skipToEnd(),
            'comment'
          );
        if (g.intag) {
          if (g.operator) {
            if (((g.operator = !1), p.match(b))) return 'atom';
            if (p.match(S)) return 'number';
          }
          if (g.sign) {
            if (((g.sign = !1), p.match(b))) return 'atom';
            if (p.match(S)) return 'number';
          }
          if (g.instring)
            return L == g.instring && (g.instring = !1), p.next(), 'string';
          if (L == "'" || L == '"') return (g.instring = L), p.next(), 'string';
          if (g.inbraces > 0 && L == ')') p.next(), g.inbraces--;
          else if (L == '(') p.next(), g.inbraces++;
          else if (g.inbrackets > 0 && L == ']') p.next(), g.inbrackets--;
          else if (L == '[') p.next(), g.inbrackets++;
          else {
            if (
              !g.lineTag &&
              (p.match(g.intag + '}') || (p.eat('-') && p.match(g.intag + '}')))
            )
              return (g.intag = !1), 'tag';
            if (p.match(v)) return (g.operator = !0), 'operator';
            if (p.match(C)) g.sign = !0;
            else {
              if (p.column() == 1 && g.lineTag && p.match(h)) return 'keyword';
              if (p.eat(' ') || p.sol()) {
                if (p.match(h)) return 'keyword';
                if (p.match(b)) return 'atom';
                if (p.match(S)) return 'number';
                p.sol() && p.next();
              } else p.next();
            }
          }
          return 'variable';
        } else if (p.eat('{')) {
          if (p.eat('#'))
            return (
              (g.incomment = !0),
              p.skipTo('#}')
                ? (p.eatWhile(/\#|}/), (g.incomment = !1))
                : p.skipToEnd(),
              'comment'
            );
          if ((L = p.eat(/\{|%/)))
            return (
              (g.intag = L),
              (g.inbraces = 0),
              (g.inbrackets = 0),
              L == '{' && (g.intag = '}'),
              p.eat('-'),
              'tag'
            );
        } else if (p.eat('#')) {
          if (p.peek() == '#') return p.skipToEnd(), 'comment';
          if (!p.eol())
            return (
              (g.intag = !0),
              (g.lineTag = !0),
              (g.inbraces = 0),
              (g.inbrackets = 0),
              'tag'
            );
        }
        p.next();
      }
      return {
        startState: function () {
          return { tokenize: s, inbrackets: 0, inbraces: 0 };
        },
        token: function (p, g) {
          var L = g.tokenize(p, g);
          return (
            p.eol() &&
              g.lineTag &&
              !g.instring &&
              g.inbraces == 0 &&
              g.inbrackets == 0 &&
              ((g.intag = !1), (g.lineTag = !1)),
            L
          );
        },
        blockCommentStart: '{#',
        blockCommentEnd: '#}',
        lineComment: '##',
      };
    }),
      o.defineMIME('text/jinja2', 'jinja2');
  });
});
var du = Ke((cu, fu) => {
  (function (o) {
    typeof cu == 'object' && typeof fu == 'object'
      ? o(We(), mn(), vn())
      : typeof define == 'function' && define.amd
        ? define(
            ['../../lib/codemirror', '../xml/xml', '../javascript/javascript'],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(C, b, S, s) {
      (this.state = C), (this.mode = b), (this.depth = S), (this.prev = s);
    }
    function v(C) {
      return new h(
        o.copyState(C.mode, C.state),
        C.mode,
        C.depth,
        C.prev && v(C.prev)
      );
    }
    o.defineMode(
      'jsx',
      function (C, b) {
        var S = o.getMode(C, {
            name: 'xml',
            allowMissing: !0,
            multilineTagIndentPastTag: !1,
            allowMissingTagName: !0,
          }),
          s = o.getMode(C, (b && b.base) || 'javascript');
        function p(c) {
          var d = c.tagName;
          c.tagName = null;
          var w = S.indent(c, '', '');
          return (c.tagName = d), w;
        }
        function g(c, d) {
          return d.context.mode == S ? L(c, d, d.context) : x(c, d, d.context);
        }
        function L(c, d, w) {
          if (w.depth == 2)
            return (
              c.match(/^.*?\*\//) ? (w.depth = 1) : c.skipToEnd(), 'comment'
            );
          if (c.peek() == '{') {
            S.skipAttribute(w.state);
            var E = p(w.state),
              z = w.state.context;
            if (z && c.match(/^[^>]*>\s*$/, !1)) {
              for (; z.prev && !z.startOfLine; ) z = z.prev;
              z.startOfLine
                ? (E -= C.indentUnit)
                : w.prev.state.lexical && (E = w.prev.state.lexical.indented);
            } else w.depth == 1 && (E += C.indentUnit);
            return (
              (d.context = new h(o.startState(s, E), s, 0, d.context)), null
            );
          }
          if (w.depth == 1) {
            if (c.peek() == '<')
              return (
                S.skipAttribute(w.state),
                (d.context = new h(
                  o.startState(S, p(w.state)),
                  S,
                  0,
                  d.context
                )),
                null
              );
            if (c.match('//')) return c.skipToEnd(), 'comment';
            if (c.match('/*')) return (w.depth = 2), g(c, d);
          }
          var y = S.token(c, w.state),
            R = c.current(),
            M;
          return (
            /\btag\b/.test(y)
              ? />$/.test(R)
                ? w.state.context
                  ? (w.depth = 0)
                  : (d.context = d.context.prev)
                : /^</.test(R) && (w.depth = 1)
              : !y && (M = R.indexOf('{')) > -1 && c.backUp(R.length - M),
            y
          );
        }
        function x(c, d, w) {
          if (
            c.peek() == '<' &&
            !c.match(/^<([^<>]|<[^>]*>)+,\s*>/, !1) &&
            s.expressionAllowed(c, w.state)
          )
            return (
              (d.context = new h(
                o.startState(S, s.indent(w.state, '', '')),
                S,
                0,
                d.context
              )),
              s.skipExpression(w.state),
              null
            );
          var E = s.token(c, w.state);
          if (!E && w.depth != null) {
            var z = c.current();
            z == '{'
              ? w.depth++
              : z == '}' && --w.depth == 0 && (d.context = d.context.prev);
          }
          return E;
        }
        return {
          startState: function () {
            return { context: new h(o.startState(s), s) };
          },
          copyState: function (c) {
            return { context: v(c.context) };
          },
          token: g,
          indent: function (c, d, w) {
            return c.context.mode.indent(c.context.state, d, w);
          },
          innerMode: function (c) {
            return c.context;
          },
        };
      },
      'xml',
      'javascript'
    ),
      o.defineMIME('text/jsx', 'jsx'),
      o.defineMIME('text/typescript-jsx', {
        name: 'jsx',
        base: { name: 'javascript', typescript: !0 },
      });
  });
});
var gu = Ke((pu, hu) => {
  (function (o) {
    typeof pu == 'object' && typeof hu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('nginx', function (h) {
      function v(w) {
        for (var E = {}, z = w.split(' '), y = 0; y < z.length; ++y)
          E[z[y]] = !0;
        return E;
      }
      var C = v(
          'break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23'
        ),
        b = v(
          'http mail events server types location upstream charset_map limit_except if geo map'
        ),
        S = v(
          'include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files'
        ),
        s = h.indentUnit,
        p;
      function g(w, E) {
        return (p = E), w;
      }
      function L(w, E) {
        w.eatWhile(/[\w\$_]/);
        var z = w.current();
        if (C.propertyIsEnumerable(z)) return 'keyword';
        if (b.propertyIsEnumerable(z)) return 'variable-2';
        if (S.propertyIsEnumerable(z)) return 'string-2';
        var y = w.next();
        if (y == '@') return w.eatWhile(/[\w\\\-]/), g('meta', w.current());
        if (y == '/' && w.eat('*')) return (E.tokenize = x), x(w, E);
        if (y == '<' && w.eat('!')) return (E.tokenize = c), c(w, E);
        if (y == '=') g(null, 'compare');
        else
          return (y == '~' || y == '|') && w.eat('=')
            ? g(null, 'compare')
            : y == '"' || y == "'"
              ? ((E.tokenize = d(y)), E.tokenize(w, E))
              : y == '#'
                ? (w.skipToEnd(), g('comment', 'comment'))
                : y == '!'
                  ? (w.match(/^\s*\w*/), g('keyword', 'important'))
                  : /\d/.test(y)
                    ? (w.eatWhile(/[\w.%]/), g('number', 'unit'))
                    : /[,.+>*\/]/.test(y)
                      ? g(null, 'select-op')
                      : /[;{}:\[\]]/.test(y)
                        ? g(null, y)
                        : (w.eatWhile(/[\w\\\-]/), g('variable', 'variable'));
      }
      function x(w, E) {
        for (var z = !1, y; (y = w.next()) != null; ) {
          if (z && y == '/') {
            E.tokenize = L;
            break;
          }
          z = y == '*';
        }
        return g('comment', 'comment');
      }
      function c(w, E) {
        for (var z = 0, y; (y = w.next()) != null; ) {
          if (z >= 2 && y == '>') {
            E.tokenize = L;
            break;
          }
          z = y == '-' ? z + 1 : 0;
        }
        return g('comment', 'comment');
      }
      function d(w) {
        return function (E, z) {
          for (var y = !1, R; (R = E.next()) != null && !(R == w && !y); )
            y = !y && R == '\\';
          return y || (z.tokenize = L), g('string', 'string');
        };
      }
      return {
        startState: function (w) {
          return { tokenize: L, baseIndent: w || 0, stack: [] };
        },
        token: function (w, E) {
          if (w.eatSpace()) return null;
          p = null;
          var z = E.tokenize(w, E),
            y = E.stack[E.stack.length - 1];
          return (
            p == 'hash' && y == 'rule'
              ? (z = 'atom')
              : z == 'variable' &&
                (y == 'rule'
                  ? (z = 'number')
                  : (!y || y == '@media{') && (z = 'tag')),
            y == 'rule' && /^[\{\};]$/.test(p) && E.stack.pop(),
            p == '{'
              ? y == '@media'
                ? (E.stack[E.stack.length - 1] = '@media{')
                : E.stack.push('{')
              : p == '}'
                ? E.stack.pop()
                : p == '@media'
                  ? E.stack.push('@media')
                  : y == '{' && p != 'comment' && E.stack.push('rule'),
            z
          );
        },
        indent: function (w, E) {
          var z = w.stack.length;
          return (
            /^\}/.test(E) &&
              (z -= w.stack[w.stack.length - 1] == 'rule' ? 2 : 1),
            w.baseIndent + z * s
          );
        },
        electricChars: '}',
      };
    }),
      o.defineMIME('text/x-nginx-conf', 'nginx');
  });
});
var bu = Ke((mu, vu) => {
  (function (o) {
    typeof mu == 'object' && typeof vu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('pascal', function () {
      function h(L) {
        for (var x = {}, c = L.split(' '), d = 0; d < c.length; ++d)
          x[c[d]] = !0;
        return x;
      }
      var v = h(
          'absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write'
        ),
        C = { null: !0 },
        b = /[+\-*&%=<>!?|\/]/;
      function S(L, x) {
        var c = L.next();
        if (c == '#' && x.startOfLine) return L.skipToEnd(), 'meta';
        if (c == '"' || c == "'") return (x.tokenize = s(c)), x.tokenize(L, x);
        if (c == '(' && L.eat('*')) return (x.tokenize = p), p(L, x);
        if (c == '{') return (x.tokenize = g), g(L, x);
        if (/[\[\]\(\),;\:\.]/.test(c)) return null;
        if (/\d/.test(c)) return L.eatWhile(/[\w\.]/), 'number';
        if (c == '/' && L.eat('/')) return L.skipToEnd(), 'comment';
        if (b.test(c)) return L.eatWhile(b), 'operator';
        L.eatWhile(/[\w\$_]/);
        var d = L.current();
        return v.propertyIsEnumerable(d)
          ? 'keyword'
          : C.propertyIsEnumerable(d)
            ? 'atom'
            : 'variable';
      }
      function s(L) {
        return function (x, c) {
          for (var d = !1, w, E = !1; (w = x.next()) != null; ) {
            if (w == L && !d) {
              E = !0;
              break;
            }
            d = !d && w == '\\';
          }
          return (E || !d) && (c.tokenize = null), 'string';
        };
      }
      function p(L, x) {
        for (var c = !1, d; (d = L.next()); ) {
          if (d == ')' && c) {
            x.tokenize = null;
            break;
          }
          c = d == '*';
        }
        return 'comment';
      }
      function g(L, x) {
        for (var c; (c = L.next()); )
          if (c == '}') {
            x.tokenize = null;
            break;
          }
        return 'comment';
      }
      return {
        startState: function () {
          return { tokenize: null };
        },
        token: function (L, x) {
          if (L.eatSpace()) return null;
          var c = (x.tokenize || S)(L, x);
          return c == 'comment' || c == 'meta', c;
        },
        electricChars: '{}',
      };
    }),
      o.defineMIME('text/x-pascal', 'pascal');
  });
});
var _u = Ke((yu, xu) => {
  (function (o) {
    typeof yu == 'object' && typeof xu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('perl', function () {
      var S = {
          '->': 4,
          '++': 4,
          '--': 4,
          '**': 4,
          '=~': 4,
          '!~': 4,
          '*': 4,
          '/': 4,
          '%': 4,
          x: 4,
          '+': 4,
          '-': 4,
          '.': 4,
          '<<': 4,
          '>>': 4,
          '<': 4,
          '>': 4,
          '<=': 4,
          '>=': 4,
          lt: 4,
          gt: 4,
          le: 4,
          ge: 4,
          '==': 4,
          '!=': 4,
          '<=>': 4,
          eq: 4,
          ne: 4,
          cmp: 4,
          '~~': 4,
          '&': 4,
          '|': 4,
          '^': 4,
          '&&': 4,
          '||': 4,
          '//': 4,
          '..': 4,
          '...': 4,
          '?': 4,
          ':': 4,
          '=': 4,
          '+=': 4,
          '-=': 4,
          '*=': 4,
          ',': 4,
          '=>': 4,
          '::': 4,
          not: 4,
          and: 4,
          or: 4,
          xor: 4,
          BEGIN: [5, 1],
          END: [5, 1],
          PRINT: [5, 1],
          PRINTF: [5, 1],
          GETC: [5, 1],
          READ: [5, 1],
          READLINE: [5, 1],
          DESTROY: [5, 1],
          TIE: [5, 1],
          TIEHANDLE: [5, 1],
          UNTIE: [5, 1],
          STDIN: 5,
          STDIN_TOP: 5,
          STDOUT: 5,
          STDOUT_TOP: 5,
          STDERR: 5,
          STDERR_TOP: 5,
          $ARG: 5,
          $_: 5,
          '@ARG': 5,
          '@_': 5,
          $LIST_SEPARATOR: 5,
          '$"': 5,
          $PROCESS_ID: 5,
          $PID: 5,
          $$: 5,
          $REAL_GROUP_ID: 5,
          $GID: 5,
          '$(': 5,
          $EFFECTIVE_GROUP_ID: 5,
          $EGID: 5,
          '$)': 5,
          $PROGRAM_NAME: 5,
          $0: 5,
          $SUBSCRIPT_SEPARATOR: 5,
          $SUBSEP: 5,
          '$;': 5,
          $REAL_USER_ID: 5,
          $UID: 5,
          '$<': 5,
          $EFFECTIVE_USER_ID: 5,
          $EUID: 5,
          '$>': 5,
          $a: 5,
          $b: 5,
          $COMPILING: 5,
          '$^C': 5,
          $DEBUGGING: 5,
          '$^D': 5,
          '${^ENCODING}': 5,
          $ENV: 5,
          '%ENV': 5,
          $SYSTEM_FD_MAX: 5,
          '$^F': 5,
          '@F': 5,
          '${^GLOBAL_PHASE}': 5,
          '$^H': 5,
          '%^H': 5,
          '@INC': 5,
          '%INC': 5,
          $INPLACE_EDIT: 5,
          '$^I': 5,
          '$^M': 5,
          $OSNAME: 5,
          '$^O': 5,
          '${^OPEN}': 5,
          $PERLDB: 5,
          '$^P': 5,
          $SIG: 5,
          '%SIG': 5,
          $BASETIME: 5,
          '$^T': 5,
          '${^TAINT}': 5,
          '${^UNICODE}': 5,
          '${^UTF8CACHE}': 5,
          '${^UTF8LOCALE}': 5,
          $PERL_VERSION: 5,
          '$^V': 5,
          '${^WIN32_SLOPPY_STAT}': 5,
          $EXECUTABLE_NAME: 5,
          '$^X': 5,
          $1: 5,
          $MATCH: 5,
          '$&': 5,
          '${^MATCH}': 5,
          $PREMATCH: 5,
          '$`': 5,
          '${^PREMATCH}': 5,
          $POSTMATCH: 5,
          "$'": 5,
          '${^POSTMATCH}': 5,
          $LAST_PAREN_MATCH: 5,
          '$+': 5,
          $LAST_SUBMATCH_RESULT: 5,
          '$^N': 5,
          '@LAST_MATCH_END': 5,
          '@+': 5,
          '%LAST_PAREN_MATCH': 5,
          '%+': 5,
          '@LAST_MATCH_START': 5,
          '@-': 5,
          '%LAST_MATCH_START': 5,
          '%-': 5,
          $LAST_REGEXP_CODE_RESULT: 5,
          '$^R': 5,
          '${^RE_DEBUG_FLAGS}': 5,
          '${^RE_TRIE_MAXBUF}': 5,
          $ARGV: 5,
          '@ARGV': 5,
          ARGV: 5,
          ARGVOUT: 5,
          $OUTPUT_FIELD_SEPARATOR: 5,
          $OFS: 5,
          '$,': 5,
          $INPUT_LINE_NUMBER: 5,
          $NR: 5,
          '$.': 5,
          $INPUT_RECORD_SEPARATOR: 5,
          $RS: 5,
          '$/': 5,
          $OUTPUT_RECORD_SEPARATOR: 5,
          $ORS: 5,
          '$\\': 5,
          $OUTPUT_AUTOFLUSH: 5,
          '$|': 5,
          $ACCUMULATOR: 5,
          '$^A': 5,
          $FORMAT_FORMFEED: 5,
          '$^L': 5,
          $FORMAT_PAGE_NUMBER: 5,
          '$%': 5,
          $FORMAT_LINES_LEFT: 5,
          '$-': 5,
          $FORMAT_LINE_BREAK_CHARACTERS: 5,
          '$:': 5,
          $FORMAT_LINES_PER_PAGE: 5,
          '$=': 5,
          $FORMAT_TOP_NAME: 5,
          '$^': 5,
          $FORMAT_NAME: 5,
          '$~': 5,
          '${^CHILD_ERROR_NATIVE}': 5,
          $EXTENDED_OS_ERROR: 5,
          '$^E': 5,
          $EXCEPTIONS_BEING_CAUGHT: 5,
          '$^S': 5,
          $WARNING: 5,
          '$^W': 5,
          '${^WARNING_BITS}': 5,
          $OS_ERROR: 5,
          $ERRNO: 5,
          '$!': 5,
          '%OS_ERROR': 5,
          '%ERRNO': 5,
          '%!': 5,
          $CHILD_ERROR: 5,
          '$?': 5,
          $EVAL_ERROR: 5,
          '$@': 5,
          $OFMT: 5,
          '$#': 5,
          '$*': 5,
          $ARRAY_BASE: 5,
          '$[': 5,
          $OLD_PERL_VERSION: 5,
          '$]': 5,
          if: [1, 1],
          elsif: [1, 1],
          else: [1, 1],
          while: [1, 1],
          unless: [1, 1],
          for: [1, 1],
          foreach: [1, 1],
          abs: 1,
          accept: 1,
          alarm: 1,
          atan2: 1,
          bind: 1,
          binmode: 1,
          bless: 1,
          bootstrap: 1,
          break: 1,
          caller: 1,
          chdir: 1,
          chmod: 1,
          chomp: 1,
          chop: 1,
          chown: 1,
          chr: 1,
          chroot: 1,
          close: 1,
          closedir: 1,
          connect: 1,
          continue: [1, 1],
          cos: 1,
          crypt: 1,
          dbmclose: 1,
          dbmopen: 1,
          default: 1,
          defined: 1,
          delete: 1,
          die: 1,
          do: 1,
          dump: 1,
          each: 1,
          endgrent: 1,
          endhostent: 1,
          endnetent: 1,
          endprotoent: 1,
          endpwent: 1,
          endservent: 1,
          eof: 1,
          eval: 1,
          exec: 1,
          exists: 1,
          exit: 1,
          exp: 1,
          fcntl: 1,
          fileno: 1,
          flock: 1,
          fork: 1,
          format: 1,
          formline: 1,
          getc: 1,
          getgrent: 1,
          getgrgid: 1,
          getgrnam: 1,
          gethostbyaddr: 1,
          gethostbyname: 1,
          gethostent: 1,
          getlogin: 1,
          getnetbyaddr: 1,
          getnetbyname: 1,
          getnetent: 1,
          getpeername: 1,
          getpgrp: 1,
          getppid: 1,
          getpriority: 1,
          getprotobyname: 1,
          getprotobynumber: 1,
          getprotoent: 1,
          getpwent: 1,
          getpwnam: 1,
          getpwuid: 1,
          getservbyname: 1,
          getservbyport: 1,
          getservent: 1,
          getsockname: 1,
          getsockopt: 1,
          given: 1,
          glob: 1,
          gmtime: 1,
          goto: 1,
          grep: 1,
          hex: 1,
          import: 1,
          index: 1,
          int: 1,
          ioctl: 1,
          join: 1,
          keys: 1,
          kill: 1,
          last: 1,
          lc: 1,
          lcfirst: 1,
          length: 1,
          link: 1,
          listen: 1,
          local: 2,
          localtime: 1,
          lock: 1,
          log: 1,
          lstat: 1,
          m: null,
          map: 1,
          mkdir: 1,
          msgctl: 1,
          msgget: 1,
          msgrcv: 1,
          msgsnd: 1,
          my: 2,
          new: 1,
          next: 1,
          no: 1,
          oct: 1,
          open: 1,
          opendir: 1,
          ord: 1,
          our: 2,
          pack: 1,
          package: 1,
          pipe: 1,
          pop: 1,
          pos: 1,
          print: 1,
          printf: 1,
          prototype: 1,
          push: 1,
          q: null,
          qq: null,
          qr: null,
          quotemeta: null,
          qw: null,
          qx: null,
          rand: 1,
          read: 1,
          readdir: 1,
          readline: 1,
          readlink: 1,
          readpipe: 1,
          recv: 1,
          redo: 1,
          ref: 1,
          rename: 1,
          require: 1,
          reset: 1,
          return: 1,
          reverse: 1,
          rewinddir: 1,
          rindex: 1,
          rmdir: 1,
          s: null,
          say: 1,
          scalar: 1,
          seek: 1,
          seekdir: 1,
          select: 1,
          semctl: 1,
          semget: 1,
          semop: 1,
          send: 1,
          setgrent: 1,
          sethostent: 1,
          setnetent: 1,
          setpgrp: 1,
          setpriority: 1,
          setprotoent: 1,
          setpwent: 1,
          setservent: 1,
          setsockopt: 1,
          shift: 1,
          shmctl: 1,
          shmget: 1,
          shmread: 1,
          shmwrite: 1,
          shutdown: 1,
          sin: 1,
          sleep: 1,
          socket: 1,
          socketpair: 1,
          sort: 1,
          splice: 1,
          split: 1,
          sprintf: 1,
          sqrt: 1,
          srand: 1,
          stat: 1,
          state: 1,
          study: 1,
          sub: 1,
          substr: 1,
          symlink: 1,
          syscall: 1,
          sysopen: 1,
          sysread: 1,
          sysseek: 1,
          system: 1,
          syswrite: 1,
          tell: 1,
          telldir: 1,
          tie: 1,
          tied: 1,
          time: 1,
          times: 1,
          tr: null,
          truncate: 1,
          uc: 1,
          ucfirst: 1,
          umask: 1,
          undef: 1,
          unlink: 1,
          unpack: 1,
          unshift: 1,
          untie: 1,
          use: 1,
          utime: 1,
          values: 1,
          vec: 1,
          wait: 1,
          waitpid: 1,
          wantarray: 1,
          warn: 1,
          when: 1,
          write: 1,
          y: null,
        },
        s = 'string-2',
        p = /[goseximacplud]/;
      function g(c, d, w, E, z) {
        return (
          (d.chain = null),
          (d.style = null),
          (d.tail = null),
          (d.tokenize = function (y, R) {
            for (var M = !1, H, Z = 0; (H = y.next()); ) {
              if (H === w[Z] && !M)
                return (
                  w[++Z] !== void 0
                    ? ((R.chain = w[Z]), (R.style = E), (R.tail = z))
                    : z && y.eatWhile(z),
                  (R.tokenize = x),
                  E
                );
              M = !M && H == '\\';
            }
            return E;
          }),
          d.tokenize(c, d)
        );
      }
      function L(c, d, w) {
        return (
          (d.tokenize = function (E, z) {
            return E.string == w && (z.tokenize = x), E.skipToEnd(), 'string';
          }),
          d.tokenize(c, d)
        );
      }
      function x(c, d) {
        if (c.eatSpace()) return null;
        if (d.chain) return g(c, d, d.chain, d.style, d.tail);
        if (
          c.match(
            /^(\-?((\d[\d_]*)?\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F_]+|0b[01_]+|\d[\d_]*(e[+-]?\d+)?)/
          )
        )
          return 'number';
        if (c.match(/^<<(?=[_a-zA-Z])/))
          return c.eatWhile(/\w/), L(c, d, c.current().substr(2));
        if (c.sol() && c.match(/^\=item(?!\w)/)) return L(c, d, '=cut');
        var w = c.next();
        if (w == '"' || w == "'") {
          if (v(c, 3) == '<<' + w) {
            var E = c.pos;
            c.eatWhile(/\w/);
            var z = c.current().substr(1);
            if (z && c.eat(w)) return L(c, d, z);
            c.pos = E;
          }
          return g(c, d, [w], 'string');
        }
        if (w == 'q') {
          var y = h(c, -2);
          if (!(y && /\w/.test(y))) {
            if (((y = h(c, 0)), y == 'x')) {
              if (((y = h(c, 1)), y == '('))
                return b(c, 2), g(c, d, [')'], s, p);
              if (y == '[') return b(c, 2), g(c, d, [']'], s, p);
              if (y == '{') return b(c, 2), g(c, d, ['}'], s, p);
              if (y == '<') return b(c, 2), g(c, d, ['>'], s, p);
              if (/[\^'"!~\/]/.test(y))
                return b(c, 1), g(c, d, [c.eat(y)], s, p);
            } else if (y == 'q') {
              if (((y = h(c, 1)), y == '('))
                return b(c, 2), g(c, d, [')'], 'string');
              if (y == '[') return b(c, 2), g(c, d, [']'], 'string');
              if (y == '{') return b(c, 2), g(c, d, ['}'], 'string');
              if (y == '<') return b(c, 2), g(c, d, ['>'], 'string');
              if (/[\^'"!~\/]/.test(y))
                return b(c, 1), g(c, d, [c.eat(y)], 'string');
            } else if (y == 'w') {
              if (((y = h(c, 1)), y == '('))
                return b(c, 2), g(c, d, [')'], 'bracket');
              if (y == '[') return b(c, 2), g(c, d, [']'], 'bracket');
              if (y == '{') return b(c, 2), g(c, d, ['}'], 'bracket');
              if (y == '<') return b(c, 2), g(c, d, ['>'], 'bracket');
              if (/[\^'"!~\/]/.test(y))
                return b(c, 1), g(c, d, [c.eat(y)], 'bracket');
            } else if (y == 'r') {
              if (((y = h(c, 1)), y == '('))
                return b(c, 2), g(c, d, [')'], s, p);
              if (y == '[') return b(c, 2), g(c, d, [']'], s, p);
              if (y == '{') return b(c, 2), g(c, d, ['}'], s, p);
              if (y == '<') return b(c, 2), g(c, d, ['>'], s, p);
              if (/[\^'"!~\/]/.test(y))
                return b(c, 1), g(c, d, [c.eat(y)], s, p);
            } else if (/[\^'"!~\/(\[{<]/.test(y)) {
              if (y == '(') return b(c, 1), g(c, d, [')'], 'string');
              if (y == '[') return b(c, 1), g(c, d, [']'], 'string');
              if (y == '{') return b(c, 1), g(c, d, ['}'], 'string');
              if (y == '<') return b(c, 1), g(c, d, ['>'], 'string');
              if (/[\^'"!~\/]/.test(y)) return g(c, d, [c.eat(y)], 'string');
            }
          }
        }
        if (w == 'm') {
          var y = h(c, -2);
          if (!(y && /\w/.test(y)) && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y)) {
            if (/[\^'"!~\/]/.test(y)) return g(c, d, [y], s, p);
            if (y == '(') return g(c, d, [')'], s, p);
            if (y == '[') return g(c, d, [']'], s, p);
            if (y == '{') return g(c, d, ['}'], s, p);
            if (y == '<') return g(c, d, ['>'], s, p);
          }
        }
        if (w == 's') {
          var y = /[\/>\]})\w]/.test(h(c, -2));
          if (!y && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y))
            return y == '['
              ? g(c, d, [']', ']'], s, p)
              : y == '{'
                ? g(c, d, ['}', '}'], s, p)
                : y == '<'
                  ? g(c, d, ['>', '>'], s, p)
                  : y == '('
                    ? g(c, d, [')', ')'], s, p)
                    : g(c, d, [y, y], s, p);
        }
        if (w == 'y') {
          var y = /[\/>\]})\w]/.test(h(c, -2));
          if (!y && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y))
            return y == '['
              ? g(c, d, [']', ']'], s, p)
              : y == '{'
                ? g(c, d, ['}', '}'], s, p)
                : y == '<'
                  ? g(c, d, ['>', '>'], s, p)
                  : y == '('
                    ? g(c, d, [')', ')'], s, p)
                    : g(c, d, [y, y], s, p);
        }
        if (w == 't') {
          var y = /[\/>\]})\w]/.test(h(c, -2));
          if (
            !y &&
            ((y = c.eat('r')), y && ((y = c.eat(/[(\[{<\^'"!~\/]/)), y))
          )
            return y == '['
              ? g(c, d, [']', ']'], s, p)
              : y == '{'
                ? g(c, d, ['}', '}'], s, p)
                : y == '<'
                  ? g(c, d, ['>', '>'], s, p)
                  : y == '('
                    ? g(c, d, [')', ')'], s, p)
                    : g(c, d, [y, y], s, p);
        }
        if (w == '`') return g(c, d, [w], 'variable-2');
        if (w == '/')
          return /~\s*$/.test(v(c)) ? g(c, d, [w], s, p) : 'operator';
        if (w == '$') {
          var E = c.pos;
          if (
            c.eatWhile(/\d/) ||
            (c.eat('{') && c.eatWhile(/\d/) && c.eat('}'))
          )
            return 'variable-2';
          c.pos = E;
        }
        if (/[$@%]/.test(w)) {
          var E = c.pos;
          if (
            (c.eat('^') && c.eat(/[A-Z]/)) ||
            (!/[@$%&]/.test(h(c, -2)) &&
              c.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/))
          ) {
            var y = c.current();
            if (S[y]) return 'variable-2';
          }
          c.pos = E;
        }
        if (
          /[$@%&]/.test(w) &&
          (c.eatWhile(/[\w$]/) ||
            (c.eat('{') && c.eatWhile(/[\w$]/) && c.eat('}')))
        ) {
          var y = c.current();
          return S[y] ? 'variable-2' : 'variable';
        }
        if (w == '#' && h(c, -2) != '$') return c.skipToEnd(), 'comment';
        if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(w)) {
          var E = c.pos;
          if ((c.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/), S[c.current()]))
            return 'operator';
          c.pos = E;
        }
        if (w == '_' && c.pos == 1) {
          if (C(c, 6) == '_END__') return g(c, d, ['\0'], 'comment');
          if (C(c, 7) == '_DATA__') return g(c, d, ['\0'], 'variable-2');
          if (C(c, 7) == '_C__') return g(c, d, ['\0'], 'string');
        }
        if (/\w/.test(w)) {
          var E = c.pos;
          if (
            h(c, -2) == '{' &&
            (h(c, 0) == '}' || (c.eatWhile(/\w/) && h(c, 0) == '}'))
          )
            return 'string';
          c.pos = E;
        }
        if (/[A-Z]/.test(w)) {
          var R = h(c, -2),
            E = c.pos;
          if ((c.eatWhile(/[A-Z_]/), /[\da-z]/.test(h(c, 0)))) c.pos = E;
          else {
            var y = S[c.current()];
            return y
              ? (y[1] && (y = y[0]),
                R != ':'
                  ? y == 1
                    ? 'keyword'
                    : y == 2
                      ? 'def'
                      : y == 3
                        ? 'atom'
                        : y == 4
                          ? 'operator'
                          : y == 5
                            ? 'variable-2'
                            : 'meta'
                  : 'meta')
              : 'meta';
          }
        }
        if (/[a-zA-Z_]/.test(w)) {
          var R = h(c, -2);
          c.eatWhile(/\w/);
          var y = S[c.current()];
          return y
            ? (y[1] && (y = y[0]),
              R != ':'
                ? y == 1
                  ? 'keyword'
                  : y == 2
                    ? 'def'
                    : y == 3
                      ? 'atom'
                      : y == 4
                        ? 'operator'
                        : y == 5
                          ? 'variable-2'
                          : 'meta'
                : 'meta')
            : 'meta';
        }
        return null;
      }
      return {
        startState: function () {
          return { tokenize: x, chain: null, style: null, tail: null };
        },
        token: function (c, d) {
          return (d.tokenize || x)(c, d);
        },
        lineComment: '#',
      };
    }),
      o.registerHelper('wordChars', 'perl', /[\w$]/),
      o.defineMIME('text/x-perl', 'perl');
    function h(S, s) {
      return S.string.charAt(S.pos + (s || 0));
    }
    function v(S, s) {
      if (s) {
        var p = S.pos - s;
        return S.string.substr(p >= 0 ? p : 0, s);
      } else return S.string.substr(0, S.pos - 1);
    }
    function C(S, s) {
      var p = S.string.length,
        g = p - S.pos + 1;
      return S.string.substr(S.pos, s && s < p ? s : g);
    }
    function b(S, s) {
      var p = S.pos + s,
        g;
      p <= 0
        ? (S.pos = 0)
        : p >= (g = S.string.length - 1)
          ? (S.pos = g)
          : (S.pos = p);
    }
  });
});
var Su = Ke((ku, wu) => {
  (function (o) {
    typeof ku == 'object' && typeof wu == 'object'
      ? o(We(), Qn(), Vo())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../htmlmixed/htmlmixed',
              '../clike/clike',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(L) {
      for (var x = {}, c = L.split(' '), d = 0; d < c.length; ++d) x[c[d]] = !0;
      return x;
    }
    function v(L, x, c) {
      return L.length == 0
        ? C(x)
        : function (d, w) {
            for (var E = L[0], z = 0; z < E.length; z++)
              if (d.match(E[z][0]))
                return (w.tokenize = v(L.slice(1), x)), E[z][1];
            return (w.tokenize = C(x, c)), 'string';
          };
    }
    function C(L, x) {
      return function (c, d) {
        return b(c, d, L, x);
      };
    }
    function b(L, x, c, d) {
      if ((d !== !1 && L.match('${', !1)) || L.match('{$', !1))
        return (x.tokenize = null), 'string';
      if (d !== !1 && L.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/))
        return (
          L.match('[', !1) &&
            (x.tokenize = v(
              [
                [['[', null]],
                [
                  [/\d[\w\.]*/, 'number'],
                  [/\$[a-zA-Z_][a-zA-Z0-9_]*/, 'variable-2'],
                  [/[\w\$]+/, 'variable'],
                ],
                [[']', null]],
              ],
              c,
              d
            )),
          L.match(/^->\w/, !1) &&
            (x.tokenize = v([[['->', null]], [[/[\w]+/, 'variable']]], c, d)),
          'variable-2'
        );
      for (
        var w = !1;
        !L.eol() &&
        (w ||
          d === !1 ||
          (!L.match('{$', !1) &&
            !L.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1)));

      ) {
        if (!w && L.match(c)) {
          (x.tokenize = null), x.tokStack.pop(), x.tokStack.pop();
          break;
        }
        w = L.next() == '\\' && !w;
      }
      return 'string';
    }
    var S =
        'abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile enum extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally readonly match',
      s =
        'true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__',
      p =
        'func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage memory_get_peak_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents file_put_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists array_intersect_key array_combine array_column pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count';
    o.registerHelper('hintWords', 'php', [S, s, p].join(' ').split(' ')),
      o.registerHelper('wordChars', 'php', /[\w$]/);
    var g = {
      name: 'clike',
      helperType: 'php',
      keywords: h(S),
      blockKeywords: h(
        'catch do else elseif for foreach if switch try while finally'
      ),
      defKeywords: h('class enum function interface namespace trait'),
      atoms: h(s),
      builtin: h(p),
      multiLineStrings: !0,
      hooks: {
        $: function (L) {
          return L.eatWhile(/[\w\$_]/), 'variable-2';
        },
        '<': function (L, x) {
          var c;
          if ((c = L.match(/^<<\s*/))) {
            var d = L.eat(/['"]/);
            L.eatWhile(/[\w\.]/);
            var w = L.current().slice(c[0].length + (d ? 2 : 1));
            if ((d && L.eat(d), w))
              return (
                (x.tokStack || (x.tokStack = [])).push(w, 0),
                (x.tokenize = C(w, d != "'")),
                'string'
              );
          }
          return !1;
        },
        '#': function (L) {
          for (; !L.eol() && !L.match('?>', !1); ) L.next();
          return 'comment';
        },
        '/': function (L) {
          if (L.eat('/')) {
            for (; !L.eol() && !L.match('?>', !1); ) L.next();
            return 'comment';
          }
          return !1;
        },
        '"': function (L, x) {
          return (
            (x.tokStack || (x.tokStack = [])).push('"', 0),
            (x.tokenize = C('"')),
            'string'
          );
        },
        '{': function (L, x) {
          return (
            x.tokStack &&
              x.tokStack.length &&
              x.tokStack[x.tokStack.length - 1]++,
            !1
          );
        },
        '}': function (L, x) {
          return (
            x.tokStack &&
              x.tokStack.length > 0 &&
              !--x.tokStack[x.tokStack.length - 1] &&
              (x.tokenize = C(x.tokStack[x.tokStack.length - 2])),
            !1
          );
        },
      },
    };
    o.defineMode(
      'php',
      function (L, x) {
        var c = o.getMode(L, (x && x.htmlMode) || 'text/html'),
          d = o.getMode(L, g);
        function w(E, z) {
          var y = z.curMode == d;
          if (
            (E.sol() &&
              z.pending &&
              z.pending != '"' &&
              z.pending != "'" &&
              (z.pending = null),
            y)
          )
            return y && z.php.tokenize == null && E.match('?>')
              ? ((z.curMode = c),
                (z.curState = z.html),
                z.php.context.prev || (z.php = null),
                'meta')
              : d.token(E, z.curState);
          if (E.match(/^<\?\w*/))
            return (
              (z.curMode = d),
              z.php || (z.php = o.startState(d, c.indent(z.html, '', ''))),
              (z.curState = z.php),
              'meta'
            );
          if (z.pending == '"' || z.pending == "'") {
            for (; !E.eol() && E.next() != z.pending; );
            var R = 'string';
          } else if (z.pending && E.pos < z.pending.end) {
            E.pos = z.pending.end;
            var R = z.pending.style;
          } else var R = c.token(E, z.curState);
          z.pending && (z.pending = null);
          var M = E.current(),
            H = M.search(/<\?/),
            Z;
          return (
            H != -1 &&
              (R == 'string' && (Z = M.match(/[\'\"]$/)) && !/\?>/.test(M)
                ? (z.pending = Z[0])
                : (z.pending = { end: E.pos, style: R }),
              E.backUp(M.length - H)),
            R
          );
        }
        return {
          startState: function () {
            var E = o.startState(c),
              z = x.startOpen ? o.startState(d) : null;
            return {
              html: E,
              php: z,
              curMode: x.startOpen ? d : c,
              curState: x.startOpen ? z : E,
              pending: null,
            };
          },
          copyState: function (E) {
            var z = E.html,
              y = o.copyState(c, z),
              R = E.php,
              M = R && o.copyState(d, R),
              H;
            return (
              E.curMode == c ? (H = y) : (H = M),
              {
                html: y,
                php: M,
                curMode: E.curMode,
                curState: H,
                pending: E.pending,
              }
            );
          },
          token: w,
          indent: function (E, z, y) {
            return (E.curMode != d && /^\s*<\//.test(z)) ||
              (E.curMode == d && /^\?>/.test(z))
              ? c.indent(E.html, z, y)
              : E.curMode.indent(E.curState, z, y);
          },
          blockCommentStart: '/*',
          blockCommentEnd: '*/',
          lineComment: '//',
          innerMode: function (E) {
            return { state: E.curState, mode: E.curMode };
          },
        };
      },
      'htmlmixed',
      'clike'
    ),
      o.defineMIME('application/x-httpd-php', 'php'),
      o.defineMIME('application/x-httpd-php-open', {
        name: 'php',
        startOpen: !0,
      }),
      o.defineMIME('text/x-php', g);
  });
});
var Cu = Ke((Tu, Lu) => {
  (function (o) {
    typeof Tu == 'object' && typeof Lu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(s) {
      return new RegExp('^((' + s.join(')|(') + '))\\b', 'i');
    }
    var v = [
        'package',
        'message',
        'import',
        'syntax',
        'required',
        'optional',
        'repeated',
        'reserved',
        'default',
        'extensions',
        'packed',
        'bool',
        'bytes',
        'double',
        'enum',
        'float',
        'string',
        'int32',
        'int64',
        'uint32',
        'uint64',
        'sint32',
        'sint64',
        'fixed32',
        'fixed64',
        'sfixed32',
        'sfixed64',
        'option',
        'service',
        'rpc',
        'returns',
      ],
      C = h(v);
    o.registerHelper('hintWords', 'protobuf', v);
    var b = new RegExp('^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*');
    function S(s) {
      return s.eatSpace()
        ? null
        : s.match('//')
          ? (s.skipToEnd(), 'comment')
          : s.match(/^[0-9\.+-]/, !1) &&
              (s.match(/^[+-]?0x[0-9a-fA-F]+/) ||
                s.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/) ||
                s.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))
            ? 'number'
            : s.match(/^"([^"]|(""))*"/) || s.match(/^'([^']|(''))*'/)
              ? 'string'
              : s.match(C)
                ? 'keyword'
                : s.match(b)
                  ? 'variable'
                  : (s.next(), null);
    }
    o.defineMode('protobuf', function () {
      return { token: S, fold: 'brace' };
    }),
      o.defineMIME('text/x-protobuf', 'protobuf');
  });
});
var Mu = Ke((Eu, zu) => {
  (function (o) {
    typeof Eu == 'object' && typeof zu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(p) {
      return new RegExp('^((' + p.join(')|(') + '))\\b');
    }
    var v = h(['and', 'or', 'not', 'is']),
      C = [
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'lambda',
        'pass',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
        'in',
        'False',
        'True',
      ],
      b = [
        'abs',
        'all',
        'any',
        'bin',
        'bool',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'filter',
        'float',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'hex',
        'id',
        'input',
        'int',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'locals',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'property',
        'range',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'vars',
        'zip',
        '__import__',
        'NotImplemented',
        'Ellipsis',
        '__debug__',
      ];
    o.registerHelper(
      'hintWords',
      'python',
      C.concat(b).concat(['exec', 'print'])
    );
    function S(p) {
      return p.scopes[p.scopes.length - 1];
    }
    o.defineMode('python', function (p, g) {
      for (
        var L = 'error',
          x = g.delimiters || g.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/,
          c = [
            g.singleOperators,
            g.doubleOperators,
            g.doubleDelimiters,
            g.tripleDelimiters,
            g.operators ||
              /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
          ],
          d = 0;
        d < c.length;
        d++
      )
        c[d] || c.splice(d--, 1);
      var w = g.hangingIndent || p.indentUnit,
        E = C,
        z = b;
      g.extra_keywords != null && (E = E.concat(g.extra_keywords)),
        g.extra_builtins != null && (z = z.concat(g.extra_builtins));
      var y = !(g.version && Number(g.version) < 3);
      if (y) {
        var R =
          g.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        (E = E.concat([
          'nonlocal',
          'None',
          'aiter',
          'anext',
          'async',
          'await',
          'breakpoint',
          'match',
          'case',
        ])),
          (z = z.concat(['ascii', 'bytes', 'exec', 'print']));
        var M = new RegExp(
          `^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,
          'i'
        );
      } else {
        var R = g.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        (E = E.concat(['exec', 'print'])),
          (z = z.concat([
            'apply',
            'basestring',
            'buffer',
            'cmp',
            'coerce',
            'execfile',
            'file',
            'intern',
            'long',
            'raw_input',
            'reduce',
            'reload',
            'unichr',
            'unicode',
            'xrange',
            'None',
          ]));
        var M = new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, 'i');
      }
      var H = h(E),
        Z = h(z);
      function ee(K, X) {
        var I = K.sol() && X.lastToken != '\\';
        if ((I && (X.indent = K.indentation()), I && S(X).type == 'py')) {
          var B = S(X).offset;
          if (K.eatSpace()) {
            var le = K.indentation();
            return (
              le > B
                ? D(X)
                : le < B && j(K, X) && K.peek() != '#' && (X.errorToken = !0),
              null
            );
          } else {
            var xe = re(K, X);
            return B > 0 && j(K, X) && (xe += ' ' + L), xe;
          }
        }
        return re(K, X);
      }
      function re(K, X, I) {
        if (K.eatSpace()) return null;
        if (!I && K.match(/^#.*/)) return 'comment';
        if (K.match(/^[0-9\.]/, !1)) {
          var B = !1;
          if (
            (K.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (B = !0),
            K.match(/^[\d_]+\.\d*/) && (B = !0),
            K.match(/^\.\d+/) && (B = !0),
            B)
          )
            return K.eat(/J/i), 'number';
          var le = !1;
          if (
            (K.match(/^0x[0-9a-f_]+/i) && (le = !0),
            K.match(/^0b[01_]+/i) && (le = !0),
            K.match(/^0o[0-7_]+/i) && (le = !0),
            K.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) &&
              (K.eat(/J/i), (le = !0)),
            K.match(/^0(?![\dx])/i) && (le = !0),
            le)
          )
            return K.eat(/L/i), 'number';
        }
        if (K.match(M)) {
          var xe = K.current().toLowerCase().indexOf('f') !== -1;
          return xe
            ? ((X.tokenize = N(K.current(), X.tokenize)), X.tokenize(K, X))
            : ((X.tokenize = F(K.current(), X.tokenize)), X.tokenize(K, X));
        }
        for (var q = 0; q < c.length; q++) if (K.match(c[q])) return 'operator';
        return K.match(x)
          ? 'punctuation'
          : X.lastToken == '.' && K.match(R)
            ? 'property'
            : K.match(H) || K.match(v)
              ? 'keyword'
              : K.match(Z)
                ? 'builtin'
                : K.match(/^(self|cls)\b/)
                  ? 'variable-2'
                  : K.match(R)
                    ? X.lastToken == 'def' || X.lastToken == 'class'
                      ? 'def'
                      : 'variable'
                    : (K.next(), I ? null : L);
      }
      function N(K, X) {
        for (; 'rubf'.indexOf(K.charAt(0).toLowerCase()) >= 0; )
          K = K.substr(1);
        var I = K.length == 1,
          B = 'string';
        function le(q) {
          return function (T, de) {
            var ze = re(T, de, !0);
            return (
              ze == 'punctuation' &&
                (T.current() == '{'
                  ? (de.tokenize = le(q + 1))
                  : T.current() == '}' &&
                    (q > 1 ? (de.tokenize = le(q - 1)) : (de.tokenize = xe))),
              ze
            );
          };
        }
        function xe(q, T) {
          for (; !q.eol(); )
            if ((q.eatWhile(/[^'"\{\}\\]/), q.eat('\\'))) {
              if ((q.next(), I && q.eol())) return B;
            } else {
              if (q.match(K)) return (T.tokenize = X), B;
              if (q.match('{{')) return B;
              if (q.match('{', !1))
                return (T.tokenize = le(0)), q.current() ? B : T.tokenize(q, T);
              if (q.match('}}')) return B;
              if (q.match('}')) return L;
              q.eat(/['"]/);
            }
          if (I) {
            if (g.singleLineStringErrors) return L;
            T.tokenize = X;
          }
          return B;
        }
        return (xe.isString = !0), xe;
      }
      function F(K, X) {
        for (; 'rubf'.indexOf(K.charAt(0).toLowerCase()) >= 0; )
          K = K.substr(1);
        var I = K.length == 1,
          B = 'string';
        function le(xe, q) {
          for (; !xe.eol(); )
            if ((xe.eatWhile(/[^'"\\]/), xe.eat('\\'))) {
              if ((xe.next(), I && xe.eol())) return B;
            } else {
              if (xe.match(K)) return (q.tokenize = X), B;
              xe.eat(/['"]/);
            }
          if (I) {
            if (g.singleLineStringErrors) return L;
            q.tokenize = X;
          }
          return B;
        }
        return (le.isString = !0), le;
      }
      function D(K) {
        for (; S(K).type != 'py'; ) K.scopes.pop();
        K.scopes.push({
          offset: S(K).offset + p.indentUnit,
          type: 'py',
          align: null,
        });
      }
      function Q(K, X, I) {
        var B = K.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : K.column() + 1;
        X.scopes.push({ offset: X.indent + w, type: I, align: B });
      }
      function j(K, X) {
        for (
          var I = K.indentation();
          X.scopes.length > 1 && S(X).offset > I;

        ) {
          if (S(X).type != 'py') return !0;
          X.scopes.pop();
        }
        return S(X).offset != I;
      }
      function V(K, X) {
        K.sol() && ((X.beginningOfLine = !0), (X.dedent = !1));
        var I = X.tokenize(K, X),
          B = K.current();
        if (X.beginningOfLine && B == '@')
          return K.match(R, !1) ? 'meta' : y ? 'operator' : L;
        if (
          (/\S/.test(B) && (X.beginningOfLine = !1),
          (I == 'variable' || I == 'builtin') &&
            X.lastToken == 'meta' &&
            (I = 'meta'),
          (B == 'pass' || B == 'return') && (X.dedent = !0),
          B == 'lambda' && (X.lambda = !0),
          B == ':' &&
            !X.lambda &&
            S(X).type == 'py' &&
            K.match(/^\s*(?:#|$)/, !1) &&
            D(X),
          B.length == 1 && !/string|comment/.test(I))
        ) {
          var le = '[({'.indexOf(B);
          if (
            (le != -1 && Q(K, X, '])}'.slice(le, le + 1)),
            (le = '])}'.indexOf(B)),
            le != -1)
          )
            if (S(X).type == B) X.indent = X.scopes.pop().offset - w;
            else return L;
        }
        return (
          X.dedent &&
            K.eol() &&
            S(X).type == 'py' &&
            X.scopes.length > 1 &&
            X.scopes.pop(),
          I
        );
      }
      var _ = {
        startState: function (K) {
          return {
            tokenize: ee,
            scopes: [{ offset: K || 0, type: 'py', align: null }],
            indent: K || 0,
            lastToken: null,
            lambda: !1,
            dedent: 0,
          };
        },
        token: function (K, X) {
          var I = X.errorToken;
          I && (X.errorToken = !1);
          var B = V(K, X);
          return (
            B &&
              B != 'comment' &&
              (X.lastToken =
                B == 'keyword' || B == 'punctuation' ? K.current() : B),
            B == 'punctuation' && (B = null),
            K.eol() && X.lambda && (X.lambda = !1),
            I ? B + ' ' + L : B
          );
        },
        indent: function (K, X) {
          if (K.tokenize != ee) return K.tokenize.isString ? o.Pass : 0;
          var I = S(K),
            B =
              I.type == X.charAt(0) ||
              (I.type == 'py' &&
                !K.dedent &&
                /^(else:|elif |except |finally:)/.test(X));
          return I.align != null
            ? I.align - (B ? 1 : 0)
            : I.offset - (B ? w : 0);
        },
        electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
        closeBrackets: { triples: `'"` },
        lineComment: '#',
        fold: 'indent',
      };
      return _;
    }),
      o.defineMIME('text/x-python', 'python');
    var s = function (p) {
      return p.split(' ');
    };
    o.defineMIME('text/x-cython', {
      name: 'python',
      extra_keywords: s(
        'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'
      ),
    });
  });
});
var qu = Ke((Au, Du) => {
  (function (o) {
    typeof Au == 'object' && typeof Du == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(g) {
      for (var L = {}, x = 0, c = g.length; x < c; ++x) L[g[x]] = !0;
      return L;
    }
    var v = [
        'alias',
        'and',
        'BEGIN',
        'begin',
        'break',
        'case',
        'class',
        'def',
        'defined?',
        'do',
        'else',
        'elsif',
        'END',
        'end',
        'ensure',
        'false',
        'for',
        'if',
        'in',
        'module',
        'next',
        'not',
        'or',
        'redo',
        'rescue',
        'retry',
        'return',
        'self',
        'super',
        'then',
        'true',
        'undef',
        'unless',
        'until',
        'when',
        'while',
        'yield',
        'nil',
        'raise',
        'throw',
        'catch',
        'fail',
        'loop',
        'callcc',
        'caller',
        'lambda',
        'proc',
        'public',
        'protected',
        'private',
        'require',
        'load',
        'require_relative',
        'extend',
        'autoload',
        '__END__',
        '__FILE__',
        '__LINE__',
        '__dir__',
      ],
      C = h(v),
      b = h([
        'def',
        'class',
        'case',
        'for',
        'while',
        'until',
        'module',
        'catch',
        'loop',
        'proc',
        'begin',
      ]),
      S = h(['end', 'until']),
      s = { '[': ']', '{': '}', '(': ')' },
      p = { ']': '[', '}': '{', ')': '(' };
    o.defineMode('ruby', function (g) {
      var L;
      function x(M, H, Z) {
        return Z.tokenize.push(M), M(H, Z);
      }
      function c(M, H) {
        if (M.sol() && M.match('=begin') && M.eol())
          return H.tokenize.push(R), 'comment';
        if (M.eatSpace()) return null;
        var Z = M.next(),
          ee;
        if (Z == '`' || Z == "'" || Z == '"')
          return x(z(Z, 'string', Z == '"' || Z == '`'), M, H);
        if (Z == '/') return d(M) ? x(z(Z, 'string-2', !0), M, H) : 'operator';
        if (Z == '%') {
          var re = 'string',
            N = !0;
          M.eat('s')
            ? (re = 'atom')
            : M.eat(/[WQ]/)
              ? (re = 'string')
              : M.eat(/[r]/)
                ? (re = 'string-2')
                : M.eat(/[wxq]/) && ((re = 'string'), (N = !1));
          var F = M.eat(/[^\w\s=]/);
          return F
            ? (s.propertyIsEnumerable(F) && (F = s[F]),
              x(z(F, re, N, !0), M, H))
            : 'operator';
        } else {
          if (Z == '#') return M.skipToEnd(), 'comment';
          if (
            Z == '<' &&
            (ee = M.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))
          )
            return x(y(ee[2], ee[1]), M, H);
          if (Z == '0')
            return (
              M.eat('x')
                ? M.eatWhile(/[\da-fA-F]/)
                : M.eat('b')
                  ? M.eatWhile(/[01]/)
                  : M.eatWhile(/[0-7]/),
              'number'
            );
          if (/\d/.test(Z))
            return (
              M.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), 'number'
            );
          if (Z == '?') {
            for (; M.match(/^\\[CM]-/); );
            return M.eat('\\') ? M.eatWhile(/\w/) : M.next(), 'string';
          } else {
            if (Z == ':')
              return M.eat("'")
                ? x(z("'", 'atom', !1), M, H)
                : M.eat('"')
                  ? x(z('"', 'atom', !0), M, H)
                  : M.eat(/[\<\>]/)
                    ? (M.eat(/[\<\>]/), 'atom')
                    : M.eat(/[\+\-\*\/\&\|\:\!]/)
                      ? 'atom'
                      : M.eat(/[a-zA-Z$@_\xa1-\uffff]/)
                        ? (M.eatWhile(/[\w$\xa1-\uffff]/),
                          M.eat(/[\?\!\=]/),
                          'atom')
                        : 'operator';
            if (Z == '@' && M.match(/^@?[a-zA-Z_\xa1-\uffff]/))
              return M.eat('@'), M.eatWhile(/[\w\xa1-\uffff]/), 'variable-2';
            if (Z == '$')
              return (
                M.eat(/[a-zA-Z_]/)
                  ? M.eatWhile(/[\w]/)
                  : M.eat(/\d/)
                    ? M.eat(/\d/)
                    : M.next(),
                'variable-3'
              );
            if (/[a-zA-Z_\xa1-\uffff]/.test(Z))
              return (
                M.eatWhile(/[\w\xa1-\uffff]/),
                M.eat(/[\?\!]/),
                M.eat(':') ? 'atom' : 'ident'
              );
            if (
              Z == '|' &&
              (H.varList || H.lastTok == '{' || H.lastTok == 'do')
            )
              return (L = '|'), null;
            if (/[\(\)\[\]{}\\;]/.test(Z)) return (L = Z), null;
            if (Z == '-' && M.eat('>')) return 'arrow';
            if (/[=+\-\/*:\.^%<>~|]/.test(Z)) {
              var D = M.eatWhile(/[=+\-\/*:\.^%<>~|]/);
              return Z == '.' && !D && (L = '.'), 'operator';
            } else return null;
          }
        }
      }
      function d(M) {
        for (
          var H = M.pos, Z = 0, ee, re = !1, N = !1;
          (ee = M.next()) != null;

        )
          if (N) N = !1;
          else {
            if ('[{('.indexOf(ee) > -1) Z++;
            else if (']})'.indexOf(ee) > -1) {
              if ((Z--, Z < 0)) break;
            } else if (ee == '/' && Z == 0) {
              re = !0;
              break;
            }
            N = ee == '\\';
          }
        return M.backUp(M.pos - H), re;
      }
      function w(M) {
        return (
          M || (M = 1),
          function (H, Z) {
            if (H.peek() == '}') {
              if (M == 1)
                return (
                  Z.tokenize.pop(), Z.tokenize[Z.tokenize.length - 1](H, Z)
                );
              Z.tokenize[Z.tokenize.length - 1] = w(M - 1);
            } else
              H.peek() == '{' && (Z.tokenize[Z.tokenize.length - 1] = w(M + 1));
            return c(H, Z);
          }
        );
      }
      function E() {
        var M = !1;
        return function (H, Z) {
          return M
            ? (Z.tokenize.pop(), Z.tokenize[Z.tokenize.length - 1](H, Z))
            : ((M = !0), c(H, Z));
        };
      }
      function z(M, H, Z, ee) {
        return function (re, N) {
          var F = !1,
            D;
          for (
            N.context.type === 'read-quoted-paused' &&
            ((N.context = N.context.prev), re.eat('}'));
            (D = re.next()) != null;

          ) {
            if (D == M && (ee || !F)) {
              N.tokenize.pop();
              break;
            }
            if (Z && D == '#' && !F) {
              if (re.eat('{')) {
                M == '}' &&
                  (N.context = { prev: N.context, type: 'read-quoted-paused' }),
                  N.tokenize.push(w());
                break;
              } else if (/[@\$]/.test(re.peek())) {
                N.tokenize.push(E());
                break;
              }
            }
            F = !F && D == '\\';
          }
          return H;
        };
      }
      function y(M, H) {
        return function (Z, ee) {
          return (
            H && Z.eatSpace(),
            Z.match(M) ? ee.tokenize.pop() : Z.skipToEnd(),
            'string'
          );
        };
      }
      function R(M, H) {
        return (
          M.sol() && M.match('=end') && M.eol() && H.tokenize.pop(),
          M.skipToEnd(),
          'comment'
        );
      }
      return {
        startState: function () {
          return {
            tokenize: [c],
            indented: 0,
            context: { type: 'top', indented: -g.indentUnit },
            continuedLine: !1,
            lastTok: null,
            varList: !1,
          };
        },
        token: function (M, H) {
          (L = null), M.sol() && (H.indented = M.indentation());
          var Z = H.tokenize[H.tokenize.length - 1](M, H),
            ee,
            re = L;
          if (Z == 'ident') {
            var N = M.current();
            (Z =
              H.lastTok == '.'
                ? 'property'
                : C.propertyIsEnumerable(M.current())
                  ? 'keyword'
                  : /^[A-Z]/.test(N)
                    ? 'tag'
                    : H.lastTok == 'def' || H.lastTok == 'class' || H.varList
                      ? 'def'
                      : 'variable'),
              Z == 'keyword' &&
                ((re = N),
                b.propertyIsEnumerable(N)
                  ? (ee = 'indent')
                  : S.propertyIsEnumerable(N)
                    ? (ee = 'dedent')
                    : (((N == 'if' || N == 'unless') &&
                        M.column() == M.indentation()) ||
                        (N == 'do' && H.context.indented < H.indented)) &&
                      (ee = 'indent'));
          }
          return (
            (L || (Z && Z != 'comment')) && (H.lastTok = re),
            L == '|' && (H.varList = !H.varList),
            ee == 'indent' || /[\(\[\{]/.test(L)
              ? (H.context = {
                  prev: H.context,
                  type: L || Z,
                  indented: H.indented,
                })
              : (ee == 'dedent' || /[\)\]\}]/.test(L)) &&
                H.context.prev &&
                (H.context = H.context.prev),
            M.eol() && (H.continuedLine = L == '\\' || Z == 'operator'),
            Z
          );
        },
        indent: function (M, H) {
          if (M.tokenize[M.tokenize.length - 1] != c) return o.Pass;
          var Z = H && H.charAt(0),
            ee = M.context,
            re =
              ee.type == p[Z] ||
              (ee.type == 'keyword' &&
                /^(?:end|until|else|elsif|when|rescue)\b/.test(H));
          return (
            ee.indented +
            (re ? 0 : g.indentUnit) +
            (M.continuedLine ? g.indentUnit : 0)
          );
        },
        electricInput: /^\s*(?:end|rescue|elsif|else|\})$/,
        lineComment: '#',
        fold: 'indent',
      };
    }),
      o.defineMIME('text/x-ruby', 'ruby'),
      o.registerHelper('hintWords', 'ruby', v);
  });
});
var Nu = Ke((Iu, Fu) => {
  (function (o) {
    typeof Iu == 'object' && typeof Fu == 'object'
      ? o(We(), Di())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror', '../../addon/mode/simple'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineSimpleMode('rust', {
      start: [
        { regex: /b?"/, token: 'string', next: 'string' },
        { regex: /b?r"/, token: 'string', next: 'string_raw' },
        { regex: /b?r#+"/, token: 'string', next: 'string_raw_hash' },
        {
          regex:
            /'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/,
          token: 'string-2',
        },
        {
          regex: /b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/,
          token: 'string-2',
        },
        {
          regex:
            /(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,
          token: 'number',
        },
        {
          regex:
            /(let(?:\s+mut)?|fn|enum|mod|struct|type|union)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,
          token: ['keyword', null, 'def'],
        },
        {
          regex:
            /(?:abstract|alignof|as|async|await|box|break|continue|const|crate|do|dyn|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
          token: 'keyword',
        },
        {
          regex:
            /\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/,
          token: 'atom',
        },
        { regex: /\b(?:true|false|Some|None|Ok|Err)\b/, token: 'builtin' },
        {
          regex: /\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,
          token: ['keyword', null, 'def'],
        },
        { regex: /#!?\[.*\]/, token: 'meta' },
        { regex: /\/\/.*/, token: 'comment' },
        { regex: /\/\*/, token: 'comment', next: 'comment' },
        { regex: /[-+\/*=<>!]+/, token: 'operator' },
        { regex: /[a-zA-Z_]\w*!/, token: 'variable-3' },
        { regex: /[a-zA-Z_]\w*/, token: 'variable' },
        { regex: /[\{\[\(]/, indent: !0 },
        { regex: /[\}\]\)]/, dedent: !0 },
      ],
      string: [
        { regex: /"/, token: 'string', next: 'start' },
        { regex: /(?:[^\\"]|\\(?:.|$))*/, token: 'string' },
      ],
      string_raw: [
        { regex: /"/, token: 'string', next: 'start' },
        { regex: /[^"]*/, token: 'string' },
      ],
      string_raw_hash: [
        { regex: /"#+/, token: 'string', next: 'start' },
        { regex: /(?:[^"]|"(?!#))*/, token: 'string' },
      ],
      comment: [
        { regex: /.*?\*\//, token: 'comment', next: 'start' },
        { regex: /.*/, token: 'comment' },
      ],
      meta: {
        dontIndentStates: ['comment'],
        electricInput: /^\s*\}$/,
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        lineComment: '//',
        fold: 'brace',
      },
    }),
      o.defineMIME('text/x-rustsrc', 'rust'),
      o.defineMIME('text/rust', 'rust');
  });
});
var ea = Ke((Ou, Pu) => {
  (function (o) {
    typeof Ou == 'object' && typeof Pu == 'object'
      ? o(We(), gn())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror', '../css/css'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode(
      'sass',
      function (h) {
        var v = o.mimeModes['text/css'],
          C = v.propertyKeywords || {},
          b = v.colorKeywords || {},
          S = v.valueKeywords || {},
          s = v.fontProperties || {};
        function p(N) {
          return new RegExp('^' + N.join('|'));
        }
        var g = ['true', 'false', 'null', 'auto'],
          L = new RegExp('^' + g.join('|')),
          x = [
            '\\(',
            '\\)',
            '=',
            '>',
            '<',
            '==',
            '>=',
            '<=',
            '\\+',
            '-',
            '\\!=',
            '/',
            '\\*',
            '%',
            'and',
            'or',
            'not',
            ';',
            '\\{',
            '\\}',
            ':',
          ],
          c = p(x),
          d = /^::?[a-zA-Z_][\w\-]*/,
          w;
        function E(N) {
          return !N.peek() || N.match(/\s+$/, !1);
        }
        function z(N, F) {
          var D = N.peek();
          return D === ')'
            ? (N.next(), (F.tokenizer = ee), 'operator')
            : D === '('
              ? (N.next(), N.eatSpace(), 'operator')
              : D === "'" || D === '"'
                ? ((F.tokenizer = R(N.next())), 'string')
                : ((F.tokenizer = R(')', !1)), 'string');
        }
        function y(N, F) {
          return function (D, Q) {
            return D.sol() && D.indentation() <= N
              ? ((Q.tokenizer = ee), ee(D, Q))
              : (F && D.skipTo('*/')
                  ? (D.next(), D.next(), (Q.tokenizer = ee))
                  : D.skipToEnd(),
                'comment');
          };
        }
        function R(N, F) {
          F == null && (F = !0);
          function D(Q, j) {
            var V = Q.next(),
              _ = Q.peek(),
              K = Q.string.charAt(Q.pos - 2),
              X = (V !== '\\' && _ === N) || (V === N && K !== '\\');
            return X
              ? (V !== N && F && Q.next(),
                E(Q) && (j.cursorHalf = 0),
                (j.tokenizer = ee),
                'string')
              : V === '#' && _ === '{'
                ? ((j.tokenizer = M(D)), Q.next(), 'operator')
                : 'string';
          }
          return D;
        }
        function M(N) {
          return function (F, D) {
            return F.peek() === '}'
              ? (F.next(), (D.tokenizer = N), 'operator')
              : ee(F, D);
          };
        }
        function H(N) {
          if (N.indentCount == 0) {
            N.indentCount++;
            var F = N.scopes[0].offset,
              D = F + h.indentUnit;
            N.scopes.unshift({ offset: D });
          }
        }
        function Z(N) {
          N.scopes.length != 1 && N.scopes.shift();
        }
        function ee(N, F) {
          var D = N.peek();
          if (N.match('/*'))
            return (F.tokenizer = y(N.indentation(), !0)), F.tokenizer(N, F);
          if (N.match('//'))
            return (F.tokenizer = y(N.indentation(), !1)), F.tokenizer(N, F);
          if (N.match('#{')) return (F.tokenizer = M(ee)), 'operator';
          if (D === '"' || D === "'")
            return N.next(), (F.tokenizer = R(D)), 'string';
          if (F.cursorHalf) {
            if (
              (D === '#' &&
                (N.next(), N.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))) ||
              N.match(/^-?[0-9\.]+/)
            )
              return E(N) && (F.cursorHalf = 0), 'number';
            if (N.match(/^(px|em|in)\b/))
              return E(N) && (F.cursorHalf = 0), 'unit';
            if (N.match(L)) return E(N) && (F.cursorHalf = 0), 'keyword';
            if (N.match(/^url/) && N.peek() === '(')
              return (F.tokenizer = z), E(N) && (F.cursorHalf = 0), 'atom';
            if (D === '$')
              return (
                N.next(),
                N.eatWhile(/[\w-]/),
                E(N) && (F.cursorHalf = 0),
                'variable-2'
              );
            if (D === '!')
              return (
                N.next(),
                (F.cursorHalf = 0),
                N.match(/^[\w]+/) ? 'keyword' : 'operator'
              );
            if (N.match(c)) return E(N) && (F.cursorHalf = 0), 'operator';
            if (N.eatWhile(/[\w-]/))
              return (
                E(N) && (F.cursorHalf = 0),
                (w = N.current().toLowerCase()),
                S.hasOwnProperty(w)
                  ? 'atom'
                  : b.hasOwnProperty(w)
                    ? 'keyword'
                    : C.hasOwnProperty(w)
                      ? ((F.prevProp = N.current().toLowerCase()), 'property')
                      : 'tag'
              );
            if (E(N)) return (F.cursorHalf = 0), null;
          } else {
            if (D === '-' && N.match(/^-\w+-/)) return 'meta';
            if (D === '.') {
              if ((N.next(), N.match(/^[\w-]+/))) return H(F), 'qualifier';
              if (N.peek() === '#') return H(F), 'tag';
            }
            if (D === '#') {
              if ((N.next(), N.match(/^[\w-]+/))) return H(F), 'builtin';
              if (N.peek() === '#') return H(F), 'tag';
            }
            if (D === '$') return N.next(), N.eatWhile(/[\w-]/), 'variable-2';
            if (N.match(/^-?[0-9\.]+/)) return 'number';
            if (N.match(/^(px|em|in)\b/)) return 'unit';
            if (N.match(L)) return 'keyword';
            if (N.match(/^url/) && N.peek() === '(')
              return (F.tokenizer = z), 'atom';
            if (D === '=' && N.match(/^=[\w-]+/)) return H(F), 'meta';
            if (D === '+' && N.match(/^\+[\w-]+/)) return 'variable-3';
            if (
              (D === '@' && N.match('@extend') && (N.match(/\s*[\w]/) || Z(F)),
              N.match(
                /^@(else if|if|media|else|for|each|while|mixin|function)/
              ))
            )
              return H(F), 'def';
            if (D === '@') return N.next(), N.eatWhile(/[\w-]/), 'def';
            if (N.eatWhile(/[\w-]/))
              if (N.match(/ *: *[\w-\+\$#!\("']/, !1)) {
                w = N.current().toLowerCase();
                var Q = F.prevProp + '-' + w;
                return C.hasOwnProperty(Q)
                  ? 'property'
                  : C.hasOwnProperty(w)
                    ? ((F.prevProp = w), 'property')
                    : s.hasOwnProperty(w)
                      ? 'property'
                      : 'tag';
              } else
                return N.match(/ *:/, !1)
                  ? (H(F),
                    (F.cursorHalf = 1),
                    (F.prevProp = N.current().toLowerCase()),
                    'property')
                  : (N.match(/ *,/, !1) || H(F), 'tag');
            if (D === ':')
              return N.match(d)
                ? 'variable-3'
                : (N.next(), (F.cursorHalf = 1), 'operator');
          }
          return N.match(c) ? 'operator' : (N.next(), null);
        }
        function re(N, F) {
          N.sol() && (F.indentCount = 0);
          var D = F.tokenizer(N, F),
            Q = N.current();
          if (((Q === '@return' || Q === '}') && Z(F), D !== null)) {
            for (
              var j = N.pos - Q.length,
                V = j + h.indentUnit * F.indentCount,
                _ = [],
                K = 0;
              K < F.scopes.length;
              K++
            ) {
              var X = F.scopes[K];
              X.offset <= V && _.push(X);
            }
            F.scopes = _;
          }
          return D;
        }
        return {
          startState: function () {
            return {
              tokenizer: ee,
              scopes: [{ offset: 0, type: 'sass' }],
              indentCount: 0,
              cursorHalf: 0,
              definedVars: [],
              definedMixins: [],
            };
          },
          token: function (N, F) {
            var D = re(N, F);
            return (F.lastToken = { style: D, content: N.current() }), D;
          },
          indent: function (N) {
            return N.scopes[0].offset;
          },
          blockCommentStart: '/*',
          blockCommentEnd: '*/',
          lineComment: '//',
          fold: 'indent',
        };
      },
      'css'
    ),
      o.defineMIME('text/x-sass', 'sass');
  });
});
var Hu = Ke((ju, Ru) => {
  (function (o) {
    typeof ju == 'object' && typeof Ru == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('shell', function () {
      var h = {};
      function v(d, w) {
        for (var E = 0; E < w.length; E++) h[w[E]] = d;
      }
      var C = ['true', 'false'],
        b = [
          'if',
          'then',
          'do',
          'else',
          'elif',
          'while',
          'until',
          'for',
          'in',
          'esac',
          'fi',
          'fin',
          'fil',
          'done',
          'exit',
          'set',
          'unset',
          'export',
          'function',
        ],
        S = [
          'ab',
          'awk',
          'bash',
          'beep',
          'cat',
          'cc',
          'cd',
          'chown',
          'chmod',
          'chroot',
          'clear',
          'cp',
          'curl',
          'cut',
          'diff',
          'echo',
          'find',
          'gawk',
          'gcc',
          'get',
          'git',
          'grep',
          'hg',
          'kill',
          'killall',
          'ln',
          'ls',
          'make',
          'mkdir',
          'openssl',
          'mv',
          'nc',
          'nl',
          'node',
          'npm',
          'ping',
          'ps',
          'restart',
          'rm',
          'rmdir',
          'sed',
          'service',
          'sh',
          'shopt',
          'shred',
          'source',
          'sort',
          'sleep',
          'ssh',
          'start',
          'stop',
          'su',
          'sudo',
          'svn',
          'tee',
          'telnet',
          'top',
          'touch',
          'vi',
          'vim',
          'wall',
          'wc',
          'wget',
          'who',
          'write',
          'yes',
          'zsh',
        ];
      o.registerHelper('hintWords', 'shell', C.concat(b, S)),
        v('atom', C),
        v('keyword', b),
        v('builtin', S);
      function s(d, w) {
        if (d.eatSpace()) return null;
        var E = d.sol(),
          z = d.next();
        if (z === '\\') return d.next(), null;
        if (z === "'" || z === '"' || z === '`')
          return (
            w.tokens.unshift(p(z, z === '`' ? 'quote' : 'string')), c(d, w)
          );
        if (z === '#')
          return E && d.eat('!')
            ? (d.skipToEnd(), 'meta')
            : (d.skipToEnd(), 'comment');
        if (z === '$') return w.tokens.unshift(L), c(d, w);
        if (z === '+' || z === '=') return 'operator';
        if (z === '-') return d.eat('-'), d.eatWhile(/\w/), 'attribute';
        if (z == '<') {
          if (d.match('<<')) return 'operator';
          var y = d.match(/^<-?\s*['"]?([^'"]*)['"]?/);
          if (y) return w.tokens.unshift(x(y[1])), 'string-2';
        }
        if (/\d/.test(z) && (d.eatWhile(/\d/), d.eol() || !/\w/.test(d.peek())))
          return 'number';
        d.eatWhile(/[\w-]/);
        var R = d.current();
        return d.peek() === '=' && /\w+/.test(R)
          ? 'def'
          : h.hasOwnProperty(R)
            ? h[R]
            : null;
      }
      function p(d, w) {
        var E = d == '(' ? ')' : d == '{' ? '}' : d;
        return function (z, y) {
          for (var R, M = !1; (R = z.next()) != null; ) {
            if (R === E && !M) {
              y.tokens.shift();
              break;
            } else if (R === '$' && !M && d !== "'" && z.peek() != E) {
              (M = !0), z.backUp(1), y.tokens.unshift(L);
              break;
            } else {
              if (!M && d !== E && R === d)
                return y.tokens.unshift(p(d, w)), c(z, y);
              if (!M && /['"]/.test(R) && !/['"]/.test(d)) {
                y.tokens.unshift(g(R, 'string')), z.backUp(1);
                break;
              }
            }
            M = !M && R === '\\';
          }
          return w;
        };
      }
      function g(d, w) {
        return function (E, z) {
          return (z.tokens[0] = p(d, w)), E.next(), c(E, z);
        };
      }
      var L = function (d, w) {
        w.tokens.length > 1 && d.eat('$');
        var E = d.next();
        return /['"({]/.test(E)
          ? ((w.tokens[0] = p(
              E,
              E == '(' ? 'quote' : E == '{' ? 'def' : 'string'
            )),
            c(d, w))
          : (/\d/.test(E) || d.eatWhile(/\w/), w.tokens.shift(), 'def');
      };
      function x(d) {
        return function (w, E) {
          return (
            w.sol() && w.string == d && E.tokens.shift(),
            w.skipToEnd(),
            'string-2'
          );
        };
      }
      function c(d, w) {
        return (w.tokens[0] || s)(d, w);
      }
      return {
        startState: function () {
          return { tokens: [] };
        },
        token: function (d, w) {
          return c(d, w);
        },
        closeBrackets: '()[]{}\'\'""``',
        lineComment: '#',
        fold: 'brace',
      };
    }),
      o.defineMIME('text/x-sh', 'shell'),
      o.defineMIME('application/x-sh', 'shell');
  });
});
var Uu = Ke((Bu, Wu) => {
  (function (o) {
    typeof Bu == 'object' && typeof Wu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('sql', function (g, L) {
      var x = L.client || {},
        c = L.atoms || { false: !0, true: !0, null: !0 },
        d = L.builtin || s(p),
        w = L.keywords || s(S),
        E = L.operatorChars || /^[*+\-%<>!=&|~^\/]/,
        z = L.support || {},
        y = L.hooks || {},
        R = L.dateSQL || { date: !0, time: !0, timestamp: !0 },
        M = L.backslashStringEscapes !== !1,
        H = L.brackets || /^[\{}\(\)\[\]]/,
        Z = L.punctuation || /^[;.,:]/;
      function ee(Q, j) {
        var V = Q.next();
        if (y[V]) {
          var _ = y[V](Q, j);
          if (_ !== !1) return _;
        }
        if (
          z.hexNumber &&
          ((V == '0' && Q.match(/^[xX][0-9a-fA-F]+/)) ||
            ((V == 'x' || V == 'X') && Q.match(/^'[0-9a-fA-F]*'/)))
        )
          return 'number';
        if (
          z.binaryNumber &&
          (((V == 'b' || V == 'B') && Q.match(/^'[01]*'/)) ||
            (V == '0' && Q.match(/^b[01]+/)))
        )
          return 'number';
        if (V.charCodeAt(0) > 47 && V.charCodeAt(0) < 58)
          return (
            Q.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),
            z.decimallessFloat && Q.match(/^\.(?!\.)/),
            'number'
          );
        if (V == '?' && (Q.eatSpace() || Q.eol() || Q.eat(';')))
          return 'variable-3';
        if (V == "'" || (V == '"' && z.doubleQuote))
          return (j.tokenize = re(V)), j.tokenize(Q, j);
        if (
          ((z.nCharCast && (V == 'n' || V == 'N')) ||
            (z.charsetCast && V == '_' && Q.match(/[a-z][a-z0-9]*/i))) &&
          (Q.peek() == "'" || Q.peek() == '"')
        )
          return 'keyword';
        if (
          z.escapeConstant &&
          (V == 'e' || V == 'E') &&
          (Q.peek() == "'" || (Q.peek() == '"' && z.doubleQuote))
        )
          return (
            (j.tokenize = function (X, I) {
              return (I.tokenize = re(X.next(), !0))(X, I);
            }),
            'keyword'
          );
        if (z.commentSlashSlash && V == '/' && Q.eat('/'))
          return Q.skipToEnd(), 'comment';
        if (
          (z.commentHash && V == '#') ||
          (V == '-' && Q.eat('-') && (!z.commentSpaceRequired || Q.eat(' ')))
        )
          return Q.skipToEnd(), 'comment';
        if (V == '/' && Q.eat('*'))
          return (j.tokenize = N(1)), j.tokenize(Q, j);
        if (V == '.') {
          if (z.zerolessFloat && Q.match(/^(?:\d+(?:e[+-]?\d+)?)/i))
            return 'number';
          if (Q.match(/^\.+/)) return null;
          if (Q.match(/^[\w\d_$#]+/)) return 'variable-2';
        } else {
          if (E.test(V)) return Q.eatWhile(E), 'operator';
          if (H.test(V)) return 'bracket';
          if (Z.test(V)) return Q.eatWhile(Z), 'punctuation';
          if (
            V == '{' &&
            (Q.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) ||
              Q.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))
          )
            return 'number';
          Q.eatWhile(/^[_\w\d]/);
          var K = Q.current().toLowerCase();
          return R.hasOwnProperty(K) &&
            (Q.match(/^( )+'[^']*'/) || Q.match(/^( )+"[^"]*"/))
            ? 'number'
            : c.hasOwnProperty(K)
              ? 'atom'
              : d.hasOwnProperty(K)
                ? 'type'
                : w.hasOwnProperty(K)
                  ? 'keyword'
                  : x.hasOwnProperty(K)
                    ? 'builtin'
                    : null;
        }
      }
      function re(Q, j) {
        return function (V, _) {
          for (var K = !1, X; (X = V.next()) != null; ) {
            if (X == Q && !K) {
              _.tokenize = ee;
              break;
            }
            K = (M || j) && !K && X == '\\';
          }
          return 'string';
        };
      }
      function N(Q) {
        return function (j, V) {
          var _ = j.match(/^.*?(\/\*|\*\/)/);
          return (
            _
              ? _[1] == '/*'
                ? (V.tokenize = N(Q + 1))
                : Q > 1
                  ? (V.tokenize = N(Q - 1))
                  : (V.tokenize = ee)
              : j.skipToEnd(),
            'comment'
          );
        };
      }
      function F(Q, j, V) {
        j.context = {
          prev: j.context,
          indent: Q.indentation(),
          col: Q.column(),
          type: V,
        };
      }
      function D(Q) {
        (Q.indent = Q.context.indent), (Q.context = Q.context.prev);
      }
      return {
        startState: function () {
          return { tokenize: ee, context: null };
        },
        token: function (Q, j) {
          if (
            (Q.sol() &&
              j.context &&
              j.context.align == null &&
              (j.context.align = !1),
            j.tokenize == ee && Q.eatSpace())
          )
            return null;
          var V = j.tokenize(Q, j);
          if (V == 'comment') return V;
          j.context && j.context.align == null && (j.context.align = !0);
          var _ = Q.current();
          return (
            _ == '('
              ? F(Q, j, ')')
              : _ == '['
                ? F(Q, j, ']')
                : j.context && j.context.type == _ && D(j),
            V
          );
        },
        indent: function (Q, j) {
          var V = Q.context;
          if (!V) return o.Pass;
          var _ = j.charAt(0) == V.type;
          return V.align
            ? V.col + (_ ? 0 : 1)
            : V.indent + (_ ? 0 : g.indentUnit);
        },
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        lineComment: z.commentSlashSlash ? '//' : z.commentHash ? '#' : '--',
        closeBrackets: '()[]{}\'\'""``',
        config: L,
      };
    });
    function h(g) {
      for (var L; (L = g.next()) != null; )
        if (L == '`' && !g.eat('`')) return 'variable-2';
      return (
        g.backUp(g.current().length - 1), g.eatWhile(/\w/) ? 'variable-2' : null
      );
    }
    function v(g) {
      for (var L; (L = g.next()) != null; )
        if (L == '"' && !g.eat('"')) return 'variable-2';
      return (
        g.backUp(g.current().length - 1), g.eatWhile(/\w/) ? 'variable-2' : null
      );
    }
    function C(g) {
      return (
        g.eat('@') &&
          (g.match('session.'), g.match('local.'), g.match('global.')),
        g.eat("'")
          ? (g.match(/^.*'/), 'variable-2')
          : g.eat('"')
            ? (g.match(/^.*"/), 'variable-2')
            : g.eat('`')
              ? (g.match(/^.*`/), 'variable-2')
              : g.match(/^[0-9a-zA-Z$\.\_]+/)
                ? 'variable-2'
                : null
      );
    }
    function b(g) {
      return g.eat('N')
        ? 'atom'
        : g.match(/^[a-zA-Z.#!?]/)
          ? 'variable-2'
          : null;
    }
    var S =
      'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ';
    function s(g) {
      for (var L = {}, x = g.split(' '), c = 0; c < x.length; ++c) L[x[c]] = !0;
      return L;
    }
    var p =
      'bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric';
    o.defineMIME('text/x-sql', {
      name: 'sql',
      keywords: s(S + 'begin'),
      builtin: s(p),
      atoms: s('false true null unknown'),
      dateSQL: s('date time timestamp'),
      support: s('doubleQuote binaryNumber hexNumber'),
    }),
      o.defineMIME('text/x-mssql', {
        name: 'sql',
        client: s(
          '$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id'
        ),
        keywords: s(
          S +
            'begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with'
        ),
        builtin: s(
          'bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table '
        ),
        atoms: s(
          'is not null like and or in left right between inner outer join all any some cross unpivot pivot exists'
        ),
        operatorChars: /^[*+\-%<>!=^\&|\/]/,
        brackets: /^[\{}\(\)]/,
        punctuation: /^[;.,:/]/,
        backslashStringEscapes: !1,
        dateSQL: s('date datetimeoffset datetime2 smalldatetime datetime time'),
        hooks: { '@': C },
      }),
      o.defineMIME('text/x-mysql', {
        name: 'sql',
        client: s(
          'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
        ),
        keywords: s(
          S +
            'accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
        ),
        builtin: s(
          'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
        ),
        atoms: s('false true null unknown'),
        operatorChars: /^[*+\-%<>!=&|^]/,
        dateSQL: s('date time timestamp'),
        support: s(
          'decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
        ),
        hooks: { '@': C, '`': h, '\\': b },
      }),
      o.defineMIME('text/x-mariadb', {
        name: 'sql',
        client: s(
          'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
        ),
        keywords: s(
          S +
            'accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group group_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
        ),
        builtin: s(
          'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
        ),
        atoms: s('false true null unknown'),
        operatorChars: /^[*+\-%<>!=&|^]/,
        dateSQL: s('date time timestamp'),
        support: s(
          'decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
        ),
        hooks: { '@': C, '`': h, '\\': b },
      }),
      o.defineMIME('text/x-sqlite', {
        name: 'sql',
        client: s(
          'auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width'
        ),
        keywords: s(
          S +
            'abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without'
        ),
        builtin: s(
          'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real'
        ),
        atoms: s('null current_date current_time current_timestamp'),
        operatorChars: /^[*+\-%<>!=&|/~]/,
        dateSQL: s('date time timestamp datetime'),
        support: s('decimallessFloat zerolessFloat'),
        identifierQuote: '"',
        hooks: { '@': C, ':': C, '?': C, $: C, '"': v, '`': h },
      }),
      o.defineMIME('text/x-cassandra', {
        name: 'sql',
        client: {},
        keywords: s(
          'add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime'
        ),
        builtin: s(
          'ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint'
        ),
        atoms: s('false true infinity NaN'),
        operatorChars: /^[<>=]/,
        dateSQL: {},
        support: s('commentSlashSlash decimallessFloat'),
        hooks: {},
      }),
      o.defineMIME('text/x-plsql', {
        name: 'sql',
        client: s(
          'appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap'
        ),
        keywords: s(
          'abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work'
        ),
        builtin: s(
          'abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml'
        ),
        operatorChars: /^[*\/+\-%<>!=~]/,
        dateSQL: s('date time timestamp'),
        support: s(
          'doubleQuote nCharCast zerolessFloat binaryNumber hexNumber'
        ),
      }),
      o.defineMIME('text/x-hive', {
        name: 'sql',
        keywords: s(
          'select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year'
        ),
        builtin: s(
          'bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar'
        ),
        atoms: s('false true null unknown'),
        operatorChars: /^[*+\-%<>!=]/,
        dateSQL: s('date timestamp'),
        support: s('doubleQuote binaryNumber hexNumber'),
      }),
      o.defineMIME('text/x-pgsql', {
        name: 'sql',
        client: s('source'),
        keywords: s(
          S +
            'a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone'
        ),
        builtin: s(
          'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time zone timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
        ),
        atoms: s('false true null unknown'),
        operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
        backslashStringEscapes: !1,
        dateSQL: s('date time timestamp'),
        support: s(
          'decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant'
        ),
      }),
      o.defineMIME('text/x-gql', {
        name: 'sql',
        keywords: s(
          'ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where'
        ),
        atoms: s('false true'),
        builtin: s(
          'blob datetime first key __key__ string integer double boolean null'
        ),
        operatorChars: /^[*+\-%<>!=]/,
      }),
      o.defineMIME('text/x-gpsql', {
        name: 'sql',
        client: s('source'),
        keywords: s(
          'abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone'
        ),
        builtin: s(
          'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
        ),
        atoms: s('false true null unknown'),
        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
        dateSQL: s('date time timestamp'),
        support: s(
          'decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast'
        ),
      }),
      o.defineMIME('text/x-sparksql', {
        name: 'sql',
        keywords: s(
          'add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases data dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with'
        ),
        builtin: s(
          'abs acos acosh add_months aggregate and any approx_count_distinct approx_percentile array array_contains array_distinct array_except array_intersect array_join array_max array_min array_position array_remove array_repeat array_sort array_union arrays_overlap arrays_zip ascii asin asinh assert_true atan atan2 atanh avg base64 between bigint bin binary bit_and bit_count bit_get bit_length bit_or bit_xor bool_and bool_or boolean bround btrim cardinality case cast cbrt ceil ceiling char char_length character_length chr coalesce collect_list collect_set concat concat_ws conv corr cos cosh cot count count_if count_min_sketch covar_pop covar_samp crc32 cume_dist current_catalog current_database current_date current_timestamp current_timezone current_user date date_add date_format date_from_unix_date date_part date_sub date_trunc datediff day dayofmonth dayofweek dayofyear decimal decode degrees delimited dense_rank div double e element_at elt encode every exists exp explode explode_outer expm1 extract factorial filter find_in_set first first_value flatten float floor forall format_number format_string from_csv from_json from_unixtime from_utc_timestamp get_json_object getbit greatest grouping grouping_id hash hex hour hypot if ifnull in initcap inline inline_outer input_file_block_length input_file_block_start input_file_name inputformat instr int isnan isnotnull isnull java_method json_array_length json_object_keys json_tuple kurtosis lag last last_day last_value lcase lead least left length levenshtein like ln locate log log10 log1p log2 lower lpad ltrim make_date make_dt_interval make_interval make_timestamp make_ym_interval map map_concat map_entries map_filter map_from_arrays map_from_entries map_keys map_values map_zip_with max max_by md5 mean min min_by minute mod monotonically_increasing_id month months_between named_struct nanvl negative next_day not now nth_value ntile nullif nvl nvl2 octet_length or outputformat overlay parse_url percent_rank percentile percentile_approx pi pmod posexplode posexplode_outer position positive pow power printf quarter radians raise_error rand randn random rank rcfile reflect regexp regexp_extract regexp_extract_all regexp_like regexp_replace repeat replace reverse right rint rlike round row_number rpad rtrim schema_of_csv schema_of_json second sentences sequence sequencefile serde session_window sha sha1 sha2 shiftleft shiftright shiftrightunsigned shuffle sign signum sin sinh size skewness slice smallint some sort_array soundex space spark_partition_id split sqrt stack std stddev stddev_pop stddev_samp str_to_map string struct substr substring substring_index sum tan tanh textfile timestamp timestamp_micros timestamp_millis timestamp_seconds tinyint to_csv to_date to_json to_timestamp to_unix_timestamp to_utc_timestamp transform transform_keys transform_values translate trim trunc try_add try_divide typeof ucase unbase64 unhex uniontype unix_date unix_micros unix_millis unix_seconds unix_timestamp upper uuid var_pop var_samp variance version weekday weekofyear when width_bucket window xpath xpath_boolean xpath_double xpath_float xpath_int xpath_long xpath_number xpath_short xpath_string xxhash64 year zip_with'
        ),
        atoms: s('false true null'),
        operatorChars: /^[*\/+\-%<>!=~&|^]/,
        dateSQL: s('date time timestamp'),
        support: s('doubleQuote zerolessFloat'),
      }),
      o.defineMIME('text/x-esper', {
        name: 'sql',
        client: s('source'),
        keywords: s(
          'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window'
        ),
        builtin: {},
        atoms: s('false true null'),
        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
        dateSQL: s('time'),
        support: s('decimallessFloat zerolessFloat binaryNumber hexNumber'),
      }),
      o.defineMIME('text/x-trino', {
        name: 'sql',
        keywords: s(
          'abs absent acos add admin after all all_match alter analyze and any any_match approx_distinct approx_most_frequent approx_percentile approx_set arbitrary array_agg array_distinct array_except array_intersect array_join array_max array_min array_position array_remove array_sort array_union arrays_overlap as asc asin at at_timezone atan atan2 authorization avg bar bernoulli beta_cdf between bing_tile bing_tile_at bing_tile_coordinates bing_tile_polygon bing_tile_quadkey bing_tile_zoom_level bing_tiles_around bit_count bitwise_and bitwise_and_agg bitwise_left_shift bitwise_not bitwise_or bitwise_or_agg bitwise_right_shift bitwise_right_shift_arithmetic bitwise_xor bool_and bool_or both by call cardinality cascade case cast catalogs cbrt ceil ceiling char2hexint checksum chr classify coalesce codepoint column columns combinations comment commit committed concat concat_ws conditional constraint contains contains_sequence convex_hull_agg copartition corr cos cosh cosine_similarity count count_if covar_pop covar_samp crc32 create cross cube cume_dist current current_catalog current_date current_groups current_path current_role current_schema current_time current_timestamp current_timezone current_user data date_add date_diff date_format date_parse date_trunc day day_of_month day_of_week day_of_year deallocate default define definer degrees delete dense_rank deny desc describe descriptor distinct distributed dow doy drop e element_at else empty empty_approx_set encoding end error escape evaluate_classifier_predictions every except excluding execute exists exp explain extract false features fetch filter final first first_value flatten floor following for format format_datetime format_number from from_base from_base32 from_base64 from_base64url from_big_endian_32 from_big_endian_64 from_encoded_polyline from_geojson_geometry from_hex from_ieee754_32 from_ieee754_64 from_iso8601_date from_iso8601_timestamp from_iso8601_timestamp_nanos from_unixtime from_unixtime_nanos from_utf8 full functions geometric_mean geometry_from_hadoop_shape geometry_invalid_reason geometry_nearest_points geometry_to_bing_tiles geometry_union geometry_union_agg grant granted grants graphviz great_circle_distance greatest group grouping groups hamming_distance hash_counts having histogram hmac_md5 hmac_sha1 hmac_sha256 hmac_sha512 hour human_readable_seconds if ignore in including index infinity initial inner input insert intersect intersection_cardinality into inverse_beta_cdf inverse_normal_cdf invoker io is is_finite is_infinite is_json_scalar is_nan isolation jaccard_index join json_array json_array_contains json_array_get json_array_length json_exists json_extract json_extract_scalar json_format json_object json_parse json_query json_size json_value keep key keys kurtosis lag last last_day_of_month last_value lateral lead leading learn_classifier learn_libsvm_classifier learn_libsvm_regressor learn_regressor least left length level levenshtein_distance like limit line_interpolate_point line_interpolate_points line_locate_point listagg ln local localtime localtimestamp log log10 log2 logical lower lpad ltrim luhn_check make_set_digest map_agg map_concat map_entries map_filter map_from_entries map_keys map_union map_values map_zip_with match match_recognize matched matches materialized max max_by md5 measures merge merge_set_digest millisecond min min_by minute mod month multimap_agg multimap_from_entries murmur3 nan natural next nfc nfd nfkc nfkd ngrams no none none_match normal_cdf normalize not now nth_value ntile null nullif nulls numeric_histogram object objectid_timestamp of offset omit on one only option or order ordinality outer output over overflow parse_data_size parse_datetime parse_duration partition partitions passing past path pattern per percent_rank permute pi position pow power preceding prepare privileges properties prune qdigest_agg quarter quotes radians rand random range rank read recursive reduce reduce_agg refresh regexp_count regexp_extract regexp_extract_all regexp_like regexp_position regexp_replace regexp_split regr_intercept regr_slope regress rename render repeat repeatable replace reset respect restrict returning reverse revoke rgb right role roles rollback rollup round row_number rows rpad rtrim running scalar schema schemas second security seek select sequence serializable session set sets sha1 sha256 sha512 show shuffle sign simplify_geometry sin skewness skip slice some soundex spatial_partitioning spatial_partitions split split_part split_to_map split_to_multimap spooky_hash_v2_32 spooky_hash_v2_64 sqrt st_area st_asbinary st_astext st_boundary st_buffer st_centroid st_contains st_convexhull st_coorddim st_crosses st_difference st_dimension st_disjoint st_distance st_endpoint st_envelope st_envelopeaspts st_equals st_exteriorring st_geometries st_geometryfromtext st_geometryn st_geometrytype st_geomfrombinary st_interiorringn st_interiorrings st_intersection st_intersects st_isclosed st_isempty st_isring st_issimple st_isvalid st_length st_linefromtext st_linestring st_multipoint st_numgeometries st_numinteriorring st_numpoints st_overlaps st_point st_pointn st_points st_polygon st_relate st_startpoint st_symdifference st_touches st_union st_within st_x st_xmax st_xmin st_y st_ymax st_ymin start starts_with stats stddev stddev_pop stddev_samp string strpos subset substr substring sum system table tables tablesample tan tanh tdigest_agg text then ties timestamp_objectid timezone_hour timezone_minute to to_base to_base32 to_base64 to_base64url to_big_endian_32 to_big_endian_64 to_char to_date to_encoded_polyline to_geojson_geometry to_geometry to_hex to_ieee754_32 to_ieee754_64 to_iso8601 to_milliseconds to_spherical_geography to_timestamp to_unixtime to_utf8 trailing transaction transform transform_keys transform_values translate trim trim_array true truncate try try_cast type typeof uescape unbounded uncommitted unconditional union unique unknown unmatched unnest update upper url_decode url_encode url_extract_fragment url_extract_host url_extract_parameter url_extract_path url_extract_port url_extract_protocol url_extract_query use user using utf16 utf32 utf8 validate value value_at_quantile values values_at_quantiles var_pop var_samp variance verbose version view week week_of_year when where width_bucket wilson_interval_lower wilson_interval_upper window with with_timezone within without word_stem work wrapper write xxhash64 year year_of_week yow zip zip_with'
        ),
        builtin: s(
          'array bigint bingtile boolean char codepoints color date decimal double function geometry hyperloglog int integer interval ipaddress joniregexp json json2016 jsonpath kdbtree likepattern map model objectid p4hyperloglog precision qdigest re2jregexp real regressor row setdigest smallint sphericalgeography tdigest time timestamp tinyint uuid varbinary varchar zone'
        ),
        atoms: s('false true null unknown'),
        operatorChars: /^[[\]|<>=!\-+*/%]/,
        dateSQL: s('date time timestamp zone'),
        support: s('decimallessFloat zerolessFloat hexNumber'),
      });
  });
});
var ta = Ke(($u, Ku) => {
  (function (o) {
    typeof $u == 'object' && typeof Ku == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('stylus', function (M) {
      for (
        var H = M.indentUnit,
          Z = '',
          ee = y(h),
          re = /^(a|b|i|s|col|em)$/i,
          N = y(S),
          F = y(s),
          D = y(L),
          Q = y(g),
          j = y(v),
          V = z(v),
          _ = y(b),
          K = y(C),
          X = y(p),
          I = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/,
          B = z(x),
          le = y(c),
          xe = new RegExp(/^\-(moz|ms|o|webkit)-/i),
          q = y(d),
          T = '',
          de = {},
          ze,
          pe,
          Ee,
          ge;
        Z.length < H;

      )
        Z += ' ';
      function Oe($, W) {
        if (
          ((T = $.string.match(
            /(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/
          )),
          (W.context.line.firstWord = T ? T[0].replace(/^\s*/, '') : ''),
          (W.context.line.indent = $.indentation()),
          (ze = $.peek()),
          $.match('//'))
        )
          return $.skipToEnd(), ['comment', 'comment'];
        if ($.match('/*')) return (W.tokenize = qe), qe($, W);
        if (ze == '"' || ze == "'")
          return $.next(), (W.tokenize = Se(ze)), W.tokenize($, W);
        if (ze == '@')
          return $.next(), $.eatWhile(/[\w\\-]/), ['def', $.current()];
        if (ze == '#') {
          if (
            ($.next(),
            $.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i))
          )
            return ['atom', 'atom'];
          if ($.match(/^[a-z][\w-]*/i)) return ['builtin', 'hash'];
        }
        return $.match(xe)
          ? ['meta', 'vendor-prefixes']
          : $.match(/^-?[0-9]?\.?[0-9]/)
            ? ($.eatWhile(/[a-z%]/i), ['number', 'unit'])
            : ze == '!'
              ? ($.next(),
                [
                  $.match(/^(important|optional)/i) ? 'keyword' : 'operator',
                  'important',
                ])
              : ze == '.' && $.match(/^\.[a-z][\w-]*/i)
                ? ['qualifier', 'qualifier']
                : $.match(V)
                  ? ($.peek() == '(' && (W.tokenize = je), ['property', 'word'])
                  : $.match(/^[a-z][\w-]*\(/i)
                    ? ($.backUp(1), ['keyword', 'mixin'])
                    : $.match(/^(\+|-)[a-z][\w-]*\(/i)
                      ? ($.backUp(1), ['keyword', 'block-mixin'])
                      : $.string.match(/^\s*&/) && $.match(/^[-_]+[a-z][\w-]*/)
                        ? ['qualifier', 'qualifier']
                        : $.match(/^(\/|&)(-|_|:|\.|#|[a-z])/)
                          ? ($.backUp(1), ['variable-3', 'reference'])
                          : $.match(/^&{1}\s*$/)
                            ? ['variable-3', 'reference']
                            : $.match(B)
                              ? ['operator', 'operator']
                              : $.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i)
                                ? $.match(/^(\.|\[)[\w-\'\"\]]+/i, !1) &&
                                  !U($.current())
                                  ? ($.match('.'),
                                    ['variable-2', 'variable-name'])
                                  : ['variable-2', 'word']
                                : $.match(I)
                                  ? ['operator', $.current()]
                                  : /[:;,{}\[\]\(\)]/.test(ze)
                                    ? ($.next(), [null, ze])
                                    : ($.next(), [null, null]);
      }
      function qe($, W) {
        for (var se = !1, De; (De = $.next()) != null; ) {
          if (se && De == '/') {
            W.tokenize = null;
            break;
          }
          se = De == '*';
        }
        return ['comment', 'comment'];
      }
      function Se($) {
        return function (W, se) {
          for (var De = !1, nt; (nt = W.next()) != null; ) {
            if (nt == $ && !De) {
              $ == ')' && W.backUp(1);
              break;
            }
            De = !De && nt == '\\';
          }
          return (
            (nt == $ || (!De && $ != ')')) && (se.tokenize = null),
            ['string', 'string']
          );
        };
      }
      function je($, W) {
        return (
          $.next(),
          $.match(/\s*[\"\')]/, !1)
            ? (W.tokenize = null)
            : (W.tokenize = Se(')')),
          [null, '(']
        );
      }
      function Ze($, W, se, De) {
        (this.type = $),
          (this.indent = W),
          (this.prev = se),
          (this.line = De || { firstWord: '', indent: 0 });
      }
      function ke($, W, se, De) {
        return (
          (De = De >= 0 ? De : H),
          ($.context = new Ze(se, W.indentation() + De, $.context)),
          se
        );
      }
      function Je($, W) {
        var se = $.context.indent - H;
        return (
          (W = W || !1),
          ($.context = $.context.prev),
          W && ($.context.indent = se),
          $.context.type
        );
      }
      function He($, W, se) {
        return de[se.context.type]($, W, se);
      }
      function Ge($, W, se, De) {
        for (var nt = De || 1; nt > 0; nt--) se.context = se.context.prev;
        return He($, W, se);
      }
      function U($) {
        return $.toLowerCase() in ee;
      }
      function G($) {
        return ($ = $.toLowerCase()), $ in N || $ in X;
      }
      function ce($) {
        return $.toLowerCase() in le;
      }
      function Be($) {
        return $.toLowerCase().match(xe);
      }
      function te($) {
        var W = $.toLowerCase(),
          se = 'variable-2';
        return (
          U($)
            ? (se = 'tag')
            : ce($)
              ? (se = 'block-keyword')
              : G($)
                ? (se = 'property')
                : W in D || W in q
                  ? (se = 'atom')
                  : W == 'return' || W in Q
                    ? (se = 'keyword')
                    : $.match(/^[A-Z]/) && (se = 'string'),
          se
        );
      }
      function fe($, W) {
        return (
          (Me(W) &&
            ($ == '{' || $ == ']' || $ == 'hash' || $ == 'qualifier')) ||
          $ == 'block-mixin'
        );
      }
      function oe($, W) {
        return $ == '{' && W.match(/^\s*\$?[\w-]+/i, !1);
      }
      function Ue($, W) {
        return $ == ':' && W.match(/^[a-z-]+/, !1);
      }
      function we($) {
        return $.sol() || $.string.match(new RegExp('^\\s*' + R($.current())));
      }
      function Me($) {
        return $.eol() || $.match(/^\s*$/, !1);
      }
      function Le($) {
        var W = /^\s*[-_]*[a-z0-9]+[\w-]*/i,
          se = typeof $ == 'string' ? $.match(W) : $.string.match(W);
        return se ? se[0].replace(/^\s*/, '') : '';
      }
      return (
        (de.block = function ($, W, se) {
          if (($ == 'comment' && we(W)) || ($ == ',' && Me(W)) || $ == 'mixin')
            return ke(se, W, 'block', 0);
          if (oe($, W)) return ke(se, W, 'interpolation');
          if (
            Me(W) &&
            $ == ']' &&
            !/^\s*(\.|#|:|\[|\*|&)/.test(W.string) &&
            !U(Le(W))
          )
            return ke(se, W, 'block', 0);
          if (fe($, W)) return ke(se, W, 'block');
          if ($ == '}' && Me(W)) return ke(se, W, 'block', 0);
          if ($ == 'variable-name')
            return W.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || ce(Le(W))
              ? ke(se, W, 'variableName')
              : ke(se, W, 'variableName', 0);
          if ($ == '=')
            return !Me(W) && !ce(Le(W))
              ? ke(se, W, 'block', 0)
              : ke(se, W, 'block');
          if ($ == '*' && (Me(W) || W.match(/\s*(,|\.|#|\[|:|{)/, !1)))
            return (ge = 'tag'), ke(se, W, 'block');
          if (Ue($, W)) return ke(se, W, 'pseudo');
          if (/@(font-face|media|supports|(-moz-)?document)/.test($))
            return ke(se, W, Me(W) ? 'block' : 'atBlock');
          if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test($))
            return ke(se, W, 'keyframes');
          if (/@extends?/.test($)) return ke(se, W, 'extend', 0);
          if ($ && $.charAt(0) == '@')
            return W.indentation() > 0 && G(W.current().slice(1))
              ? ((ge = 'variable-2'), 'block')
              : /(@import|@require|@charset)/.test($)
                ? ke(se, W, 'block', 0)
                : ke(se, W, 'block');
          if ($ == 'reference' && Me(W)) return ke(se, W, 'block');
          if ($ == '(') return ke(se, W, 'parens');
          if ($ == 'vendor-prefixes') return ke(se, W, 'vendorPrefixes');
          if ($ == 'word') {
            var De = W.current();
            if (((ge = te(De)), ge == 'property'))
              return we(W) ? ke(se, W, 'block', 0) : ((ge = 'atom'), 'block');
            if (ge == 'tag') {
              if (
                (/embed|menu|pre|progress|sub|table/.test(De) && G(Le(W))) ||
                W.string.match(
                  new RegExp('\\[\\s*' + De + '|' + De + '\\s*\\]')
                )
              )
                return (ge = 'atom'), 'block';
              if (
                re.test(De) &&
                ((we(W) && W.string.match(/=/)) ||
                  (!we(W) &&
                    !W.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) &&
                    !U(Le(W))))
              )
                return (
                  (ge = 'variable-2'),
                  ce(Le(W)) ? 'block' : ke(se, W, 'block', 0)
                );
              if (Me(W)) return ke(se, W, 'block');
            }
            if (ge == 'block-keyword')
              return (
                (ge = 'keyword'),
                W.current(/(if|unless)/) && !we(W)
                  ? 'block'
                  : ke(se, W, 'block')
              );
            if (De == 'return') return ke(se, W, 'block', 0);
            if (ge == 'variable-2' && W.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/))
              return ke(se, W, 'block');
          }
          return se.context.type;
        }),
        (de.parens = function ($, W, se) {
          if ($ == '(') return ke(se, W, 'parens');
          if ($ == ')')
            return se.context.prev.type == 'parens'
              ? Je(se)
              : (W.string.match(/^[a-z][\w-]*\(/i) && Me(W)) ||
                  ce(Le(W)) ||
                  /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(Le(W)) ||
                  (!W.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && U(Le(W)))
                ? ke(se, W, 'block')
                : W.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) ||
                    W.string.match(/^\s*(\(|\)|[0-9])/) ||
                    W.string.match(/^\s+[a-z][\w-]*\(/i) ||
                    W.string.match(/^\s+[\$-]?[a-z]/i)
                  ? ke(se, W, 'block', 0)
                  : Me(W)
                    ? ke(se, W, 'block')
                    : ke(se, W, 'block', 0);
          if (
            ($ &&
              $.charAt(0) == '@' &&
              G(W.current().slice(1)) &&
              (ge = 'variable-2'),
            $ == 'word')
          ) {
            var De = W.current();
            (ge = te(De)),
              ge == 'tag' && re.test(De) && (ge = 'variable-2'),
              (ge == 'property' || De == 'to') && (ge = 'atom');
          }
          return $ == 'variable-name'
            ? ke(se, W, 'variableName')
            : Ue($, W)
              ? ke(se, W, 'pseudo')
              : se.context.type;
        }),
        (de.vendorPrefixes = function ($, W, se) {
          return $ == 'word'
            ? ((ge = 'property'), ke(se, W, 'block', 0))
            : Je(se);
        }),
        (de.pseudo = function ($, W, se) {
          return G(Le(W.string))
            ? Ge($, W, se)
            : (W.match(/^[a-z-]+/),
              (ge = 'variable-3'),
              Me(W) ? ke(se, W, 'block') : Je(se));
        }),
        (de.atBlock = function ($, W, se) {
          if ($ == '(') return ke(se, W, 'atBlock_parens');
          if (fe($, W)) return ke(se, W, 'block');
          if (oe($, W)) return ke(se, W, 'interpolation');
          if ($ == 'word') {
            var De = W.current().toLowerCase();
            if (
              (/^(only|not|and|or)$/.test(De)
                ? (ge = 'keyword')
                : j.hasOwnProperty(De)
                  ? (ge = 'tag')
                  : K.hasOwnProperty(De)
                    ? (ge = 'attribute')
                    : _.hasOwnProperty(De)
                      ? (ge = 'property')
                      : F.hasOwnProperty(De)
                        ? (ge = 'string-2')
                        : (ge = te(W.current())),
              ge == 'tag' && Me(W))
            )
              return ke(se, W, 'block');
          }
          return (
            $ == 'operator' &&
              /^(not|and|or)$/.test(W.current()) &&
              (ge = 'keyword'),
            se.context.type
          );
        }),
        (de.atBlock_parens = function ($, W, se) {
          if ($ == '{' || $ == '}') return se.context.type;
          if ($ == ')')
            return Me(W) ? ke(se, W, 'block') : ke(se, W, 'atBlock');
          if ($ == 'word') {
            var De = W.current().toLowerCase();
            return (
              (ge = te(De)),
              /^(max|min)/.test(De) && (ge = 'property'),
              ge == 'tag' &&
                (re.test(De) ? (ge = 'variable-2') : (ge = 'atom')),
              se.context.type
            );
          }
          return de.atBlock($, W, se);
        }),
        (de.keyframes = function ($, W, se) {
          return W.indentation() == '0' &&
            (($ == '}' && we(W)) ||
              $ == ']' ||
              $ == 'hash' ||
              $ == 'qualifier' ||
              U(W.current()))
            ? Ge($, W, se)
            : $ == '{'
              ? ke(se, W, 'keyframes')
              : $ == '}'
                ? we(W)
                  ? Je(se, !0)
                  : ke(se, W, 'keyframes')
                : $ == 'unit' && /^[0-9]+\%$/.test(W.current())
                  ? ke(se, W, 'keyframes')
                  : $ == 'word' &&
                      ((ge = te(W.current())), ge == 'block-keyword')
                    ? ((ge = 'keyword'), ke(se, W, 'keyframes'))
                    : /@(font-face|media|supports|(-moz-)?document)/.test($)
                      ? ke(se, W, Me(W) ? 'block' : 'atBlock')
                      : $ == 'mixin'
                        ? ke(se, W, 'block', 0)
                        : se.context.type;
        }),
        (de.interpolation = function ($, W, se) {
          return (
            $ == '{' && Je(se) && ke(se, W, 'block'),
            $ == '}'
              ? W.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) ||
                (W.string.match(/^\s*[a-z]/i) && U(Le(W)))
                ? ke(se, W, 'block')
                : !W.string.match(/^(\{|\s*\&)/) || W.match(/\s*[\w-]/, !1)
                  ? ke(se, W, 'block', 0)
                  : ke(se, W, 'block')
              : $ == 'variable-name'
                ? ke(se, W, 'variableName', 0)
                : ($ == 'word' &&
                    ((ge = te(W.current())), ge == 'tag' && (ge = 'atom')),
                  se.context.type)
          );
        }),
        (de.extend = function ($, W, se) {
          return $ == '[' || $ == '='
            ? 'extend'
            : $ == ']'
              ? Je(se)
              : $ == 'word'
                ? ((ge = te(W.current())), 'extend')
                : Je(se);
        }),
        (de.variableName = function ($, W, se) {
          return $ == 'string' ||
            $ == '[' ||
            $ == ']' ||
            W.current().match(/^(\.|\$)/)
            ? (W.current().match(/^\.[\w-]+/i) && (ge = 'variable-2'),
              'variableName')
            : Ge($, W, se);
        }),
        {
          startState: function ($) {
            return {
              tokenize: null,
              state: 'block',
              context: new Ze('block', $ || 0, null),
            };
          },
          token: function ($, W) {
            return !W.tokenize && $.eatSpace()
              ? null
              : ((pe = (W.tokenize || Oe)($, W)),
                pe && typeof pe == 'object' && ((Ee = pe[1]), (pe = pe[0])),
                (ge = pe),
                (W.state = de[W.state](Ee, $, W)),
                ge);
          },
          indent: function ($, W, se) {
            var De = $.context,
              nt = W && W.charAt(0),
              dt = De.indent,
              Pt = Le(W),
              It = se.match(/^\s*/)[0].replace(/\t/g, Z).length,
              Pe = $.context.prev ? $.context.prev.line.firstWord : '',
              xt = $.context.prev ? $.context.prev.line.indent : It;
            return (
              De.prev &&
              ((nt == '}' &&
                (De.type == 'block' ||
                  De.type == 'atBlock' ||
                  De.type == 'keyframes')) ||
                (nt == ')' &&
                  (De.type == 'parens' || De.type == 'atBlock_parens')) ||
                (nt == '{' && De.type == 'at'))
                ? (dt = De.indent - H)
                : /(\})/.test(nt) ||
                  (/@|\$|\d/.test(nt) ||
                  /^\{/.test(W) ||
                  /^\s*\/(\/|\*)/.test(W) ||
                  /^\s*\/\*/.test(Pe) ||
                  /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(W) ||
                  /^(\+|-)?[a-z][\w-]*\(/i.test(W) ||
                  /^return/.test(W) ||
                  ce(Pt)
                    ? (dt = It)
                    : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(nt) || U(Pt)
                      ? /\,\s*$/.test(Pe)
                        ? (dt = xt)
                        : /^\s+/.test(se) &&
                            (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(Pe) || U(Pe))
                          ? (dt = It <= xt ? xt : xt + H)
                          : (dt = It)
                      : !/,\s*$/.test(se) &&
                        (Be(Pt) || G(Pt)) &&
                        (ce(Pe)
                          ? (dt = It <= xt ? xt : xt + H)
                          : /^\{/.test(Pe)
                            ? (dt = It <= xt ? It : xt + H)
                            : Be(Pe) || G(Pe)
                              ? (dt = It >= xt ? xt : It)
                              : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(Pe) ||
                                  /=\s*$/.test(Pe) ||
                                  U(Pe) ||
                                  /^\$[\w-\.\[\]\'\"]/.test(Pe)
                                ? (dt = xt + H)
                                : (dt = It))),
              dt
            );
          },
          electricChars: '}',
          blockCommentStart: '/*',
          blockCommentEnd: '*/',
          blockCommentContinue: ' * ',
          lineComment: '//',
          fold: 'indent',
        }
      );
    });
    var h = [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'bgsound',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'nobr',
        'noframes',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
      ],
      v = ['domain', 'regexp', 'url-prefix', 'url'],
      C = [
        'all',
        'aural',
        'braille',
        'handheld',
        'print',
        'projection',
        'screen',
        'tty',
        'tv',
        'embossed',
      ],
      b = [
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'device-width',
        'min-device-width',
        'max-device-width',
        'device-height',
        'min-device-height',
        'max-device-height',
        'aspect-ratio',
        'min-aspect-ratio',
        'max-aspect-ratio',
        'device-aspect-ratio',
        'min-device-aspect-ratio',
        'max-device-aspect-ratio',
        'color',
        'min-color',
        'max-color',
        'color-index',
        'min-color-index',
        'max-color-index',
        'monochrome',
        'min-monochrome',
        'max-monochrome',
        'resolution',
        'min-resolution',
        'max-resolution',
        'scan',
        'grid',
        'dynamic-range',
        'video-dynamic-range',
      ],
      S = [
        'align-content',
        'align-items',
        'align-self',
        'alignment-adjust',
        'alignment-baseline',
        'anchor-point',
        'animation',
        'animation-delay',
        'animation-direction',
        'animation-duration',
        'animation-fill-mode',
        'animation-iteration-count',
        'animation-name',
        'animation-play-state',
        'animation-timing-function',
        'appearance',
        'azimuth',
        'backface-visibility',
        'background',
        'background-attachment',
        'background-clip',
        'background-color',
        'background-image',
        'background-origin',
        'background-position',
        'background-repeat',
        'background-size',
        'baseline-shift',
        'binding',
        'bleed',
        'bookmark-label',
        'bookmark-level',
        'bookmark-state',
        'bookmark-target',
        'border',
        'border-bottom',
        'border-bottom-color',
        'border-bottom-left-radius',
        'border-bottom-right-radius',
        'border-bottom-style',
        'border-bottom-width',
        'border-collapse',
        'border-color',
        'border-image',
        'border-image-outset',
        'border-image-repeat',
        'border-image-slice',
        'border-image-source',
        'border-image-width',
        'border-left',
        'border-left-color',
        'border-left-style',
        'border-left-width',
        'border-radius',
        'border-right',
        'border-right-color',
        'border-right-style',
        'border-right-width',
        'border-spacing',
        'border-style',
        'border-top',
        'border-top-color',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-top-style',
        'border-top-width',
        'border-width',
        'bottom',
        'box-decoration-break',
        'box-shadow',
        'box-sizing',
        'break-after',
        'break-before',
        'break-inside',
        'caption-side',
        'clear',
        'clip',
        'color',
        'color-profile',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-color',
        'column-rule-style',
        'column-rule-width',
        'column-span',
        'column-width',
        'columns',
        'content',
        'counter-increment',
        'counter-reset',
        'crop',
        'cue',
        'cue-after',
        'cue-before',
        'cursor',
        'direction',
        'display',
        'dominant-baseline',
        'drop-initial-after-adjust',
        'drop-initial-after-align',
        'drop-initial-before-adjust',
        'drop-initial-before-align',
        'drop-initial-size',
        'drop-initial-value',
        'elevation',
        'empty-cells',
        'fit',
        'fit-position',
        'flex',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-grow',
        'flex-shrink',
        'flex-wrap',
        'float',
        'float-offset',
        'flow-from',
        'flow-into',
        'font',
        'font-feature-settings',
        'font-family',
        'font-kerning',
        'font-language-override',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-synthesis',
        'font-variant',
        'font-variant-alternates',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-position',
        'font-weight',
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-auto-position',
        'grid-auto-rows',
        'grid-column',
        'grid-column-end',
        'grid-column-start',
        'grid-row',
        'grid-row-end',
        'grid-row-start',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'hanging-punctuation',
        'height',
        'hyphens',
        'icon',
        'image-orientation',
        'image-rendering',
        'image-resolution',
        'inline-box-align',
        'justify-content',
        'left',
        'letter-spacing',
        'line-break',
        'line-height',
        'line-stacking',
        'line-stacking-ruby',
        'line-stacking-shift',
        'line-stacking-strategy',
        'list-style',
        'list-style-image',
        'list-style-position',
        'list-style-type',
        'margin',
        'margin-bottom',
        'margin-left',
        'margin-right',
        'margin-top',
        'marker-offset',
        'marks',
        'marquee-direction',
        'marquee-loop',
        'marquee-play-count',
        'marquee-speed',
        'marquee-style',
        'max-height',
        'max-width',
        'min-height',
        'min-width',
        'move-to',
        'nav-down',
        'nav-index',
        'nav-left',
        'nav-right',
        'nav-up',
        'object-fit',
        'object-position',
        'opacity',
        'order',
        'orphans',
        'outline',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',
        'overflow',
        'overflow-style',
        'overflow-wrap',
        'overflow-x',
        'overflow-y',
        'padding',
        'padding-bottom',
        'padding-left',
        'padding-right',
        'padding-top',
        'page',
        'page-break-after',
        'page-break-before',
        'page-break-inside',
        'page-policy',
        'pause',
        'pause-after',
        'pause-before',
        'perspective',
        'perspective-origin',
        'pitch',
        'pitch-range',
        'play-during',
        'position',
        'presentation-level',
        'punctuation-trim',
        'quotes',
        'region-break-after',
        'region-break-before',
        'region-break-inside',
        'region-fragment',
        'rendering-intent',
        'resize',
        'rest',
        'rest-after',
        'rest-before',
        'richness',
        'right',
        'rotation',
        'rotation-point',
        'ruby-align',
        'ruby-overhang',
        'ruby-position',
        'ruby-span',
        'shape-image-threshold',
        'shape-inside',
        'shape-margin',
        'shape-outside',
        'size',
        'speak',
        'speak-as',
        'speak-header',
        'speak-numeral',
        'speak-punctuation',
        'speech-rate',
        'stress',
        'string-set',
        'tab-size',
        'table-layout',
        'target',
        'target-name',
        'target-new',
        'target-position',
        'text-align',
        'text-align-last',
        'text-decoration',
        'text-decoration-color',
        'text-decoration-line',
        'text-decoration-skip',
        'text-decoration-style',
        'text-emphasis',
        'text-emphasis-color',
        'text-emphasis-position',
        'text-emphasis-style',
        'text-height',
        'text-indent',
        'text-justify',
        'text-outline',
        'text-overflow',
        'text-shadow',
        'text-size-adjust',
        'text-space-collapse',
        'text-transform',
        'text-underline-position',
        'text-wrap',
        'top',
        'transform',
        'transform-origin',
        'transform-style',
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function',
        'unicode-bidi',
        'vertical-align',
        'visibility',
        'voice-balance',
        'voice-duration',
        'voice-family',
        'voice-pitch',
        'voice-range',
        'voice-rate',
        'voice-stress',
        'voice-volume',
        'volume',
        'white-space',
        'widows',
        'width',
        'will-change',
        'word-break',
        'word-spacing',
        'word-wrap',
        'z-index',
        'clip-path',
        'clip-rule',
        'mask',
        'enable-background',
        'filter',
        'flood-color',
        'flood-opacity',
        'lighting-color',
        'stop-color',
        'stop-opacity',
        'pointer-events',
        'color-interpolation',
        'color-interpolation-filters',
        'color-rendering',
        'fill',
        'fill-opacity',
        'fill-rule',
        'image-rendering',
        'marker',
        'marker-end',
        'marker-mid',
        'marker-start',
        'shape-rendering',
        'stroke',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',
        'text-rendering',
        'baseline-shift',
        'dominant-baseline',
        'glyph-orientation-horizontal',
        'glyph-orientation-vertical',
        'text-anchor',
        'writing-mode',
        'font-smoothing',
        'osx-font-smoothing',
      ],
      s = [
        'scrollbar-arrow-color',
        'scrollbar-base-color',
        'scrollbar-dark-shadow-color',
        'scrollbar-face-color',
        'scrollbar-highlight-color',
        'scrollbar-shadow-color',
        'scrollbar-3d-light-color',
        'scrollbar-track-color',
        'shape-inside',
        'searchfield-cancel-button',
        'searchfield-decoration',
        'searchfield-results-button',
        'searchfield-results-decoration',
        'zoom',
      ],
      p = [
        'font-family',
        'src',
        'unicode-range',
        'font-variant',
        'font-feature-settings',
        'font-stretch',
        'font-weight',
        'font-style',
      ],
      g = [
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'gold',
        'goldenrod',
        'gray',
        'grey',
        'green',
        'greenyellow',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavender',
        'lavenderblush',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslategray',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'oldlace',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'rebeccapurple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'turquoise',
        'violet',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen',
      ],
      L = [
        'above',
        'absolute',
        'activeborder',
        'additive',
        'activecaption',
        'afar',
        'after-white-space',
        'ahead',
        'alias',
        'all',
        'all-scroll',
        'alphabetic',
        'alternate',
        'always',
        'amharic',
        'amharic-abegede',
        'antialiased',
        'appworkspace',
        'arabic-indic',
        'armenian',
        'asterisks',
        'attr',
        'auto',
        'avoid',
        'avoid-column',
        'avoid-page',
        'avoid-region',
        'background',
        'backwards',
        'baseline',
        'below',
        'bidi-override',
        'binary',
        'bengali',
        'blink',
        'block',
        'block-axis',
        'bold',
        'bolder',
        'border',
        'border-box',
        'both',
        'bottom',
        'break',
        'break-all',
        'break-word',
        'bullets',
        'button',
        'buttonface',
        'buttonhighlight',
        'buttonshadow',
        'buttontext',
        'calc',
        'cambodian',
        'capitalize',
        'caps-lock-indicator',
        'caption',
        'captiontext',
        'caret',
        'cell',
        'center',
        'checkbox',
        'circle',
        'cjk-decimal',
        'cjk-earthly-branch',
        'cjk-heavenly-stem',
        'cjk-ideographic',
        'clear',
        'clip',
        'close-quote',
        'col-resize',
        'collapse',
        'column',
        'compact',
        'condensed',
        'conic-gradient',
        'contain',
        'content',
        'contents',
        'content-box',
        'context-menu',
        'continuous',
        'copy',
        'counter',
        'counters',
        'cover',
        'crop',
        'cross',
        'crosshair',
        'currentcolor',
        'cursive',
        'cyclic',
        'dashed',
        'decimal',
        'decimal-leading-zero',
        'default',
        'default-button',
        'destination-atop',
        'destination-in',
        'destination-out',
        'destination-over',
        'devanagari',
        'disc',
        'discard',
        'disclosure-closed',
        'disclosure-open',
        'document',
        'dot-dash',
        'dot-dot-dash',
        'dotted',
        'double',
        'down',
        'e-resize',
        'ease',
        'ease-in',
        'ease-in-out',
        'ease-out',
        'element',
        'ellipse',
        'ellipsis',
        'embed',
        'end',
        'ethiopic',
        'ethiopic-abegede',
        'ethiopic-abegede-am-et',
        'ethiopic-abegede-gez',
        'ethiopic-abegede-ti-er',
        'ethiopic-abegede-ti-et',
        'ethiopic-halehame-aa-er',
        'ethiopic-halehame-aa-et',
        'ethiopic-halehame-am-et',
        'ethiopic-halehame-gez',
        'ethiopic-halehame-om-et',
        'ethiopic-halehame-sid-et',
        'ethiopic-halehame-so-et',
        'ethiopic-halehame-ti-er',
        'ethiopic-halehame-ti-et',
        'ethiopic-halehame-tig',
        'ethiopic-numeric',
        'ew-resize',
        'expanded',
        'extends',
        'extra-condensed',
        'extra-expanded',
        'fantasy',
        'fast',
        'fill',
        'fixed',
        'flat',
        'flex',
        'footnotes',
        'forwards',
        'from',
        'geometricPrecision',
        'georgian',
        'graytext',
        'groove',
        'gujarati',
        'gurmukhi',
        'hand',
        'hangul',
        'hangul-consonant',
        'hebrew',
        'help',
        'hidden',
        'hide',
        'high',
        'higher',
        'highlight',
        'highlighttext',
        'hiragana',
        'hiragana-iroha',
        'horizontal',
        'hsl',
        'hsla',
        'icon',
        'ignore',
        'inactiveborder',
        'inactivecaption',
        'inactivecaptiontext',
        'infinite',
        'infobackground',
        'infotext',
        'inherit',
        'initial',
        'inline',
        'inline-axis',
        'inline-block',
        'inline-flex',
        'inline-table',
        'inset',
        'inside',
        'intrinsic',
        'invert',
        'italic',
        'japanese-formal',
        'japanese-informal',
        'justify',
        'kannada',
        'katakana',
        'katakana-iroha',
        'keep-all',
        'khmer',
        'korean-hangul-formal',
        'korean-hanja-formal',
        'korean-hanja-informal',
        'landscape',
        'lao',
        'large',
        'larger',
        'left',
        'level',
        'lighter',
        'line-through',
        'linear',
        'linear-gradient',
        'lines',
        'list-item',
        'listbox',
        'listitem',
        'local',
        'logical',
        'loud',
        'lower',
        'lower-alpha',
        'lower-armenian',
        'lower-greek',
        'lower-hexadecimal',
        'lower-latin',
        'lower-norwegian',
        'lower-roman',
        'lowercase',
        'ltr',
        'malayalam',
        'match',
        'matrix',
        'matrix3d',
        'media-play-button',
        'media-slider',
        'media-sliderthumb',
        'media-volume-slider',
        'media-volume-sliderthumb',
        'medium',
        'menu',
        'menulist',
        'menulist-button',
        'menutext',
        'message-box',
        'middle',
        'min-intrinsic',
        'mix',
        'mongolian',
        'monospace',
        'move',
        'multiple',
        'myanmar',
        'n-resize',
        'narrower',
        'ne-resize',
        'nesw-resize',
        'no-close-quote',
        'no-drop',
        'no-open-quote',
        'no-repeat',
        'none',
        'normal',
        'not-allowed',
        'nowrap',
        'ns-resize',
        'numbers',
        'numeric',
        'nw-resize',
        'nwse-resize',
        'oblique',
        'octal',
        'open-quote',
        'optimizeLegibility',
        'optimizeSpeed',
        'oriya',
        'oromo',
        'outset',
        'outside',
        'outside-shape',
        'overlay',
        'overline',
        'padding',
        'padding-box',
        'painted',
        'page',
        'paused',
        'persian',
        'perspective',
        'plus-darker',
        'plus-lighter',
        'pointer',
        'polygon',
        'portrait',
        'pre',
        'pre-line',
        'pre-wrap',
        'preserve-3d',
        'progress',
        'push-button',
        'radial-gradient',
        'radio',
        'read-only',
        'read-write',
        'read-write-plaintext-only',
        'rectangle',
        'region',
        'relative',
        'repeat',
        'repeating-linear-gradient',
        'repeating-radial-gradient',
        'repeating-conic-gradient',
        'repeat-x',
        'repeat-y',
        'reset',
        'reverse',
        'rgb',
        'rgba',
        'ridge',
        'right',
        'rotate',
        'rotate3d',
        'rotateX',
        'rotateY',
        'rotateZ',
        'round',
        'row-resize',
        'rtl',
        'run-in',
        'running',
        's-resize',
        'sans-serif',
        'scale',
        'scale3d',
        'scaleX',
        'scaleY',
        'scaleZ',
        'scroll',
        'scrollbar',
        'scroll-position',
        'se-resize',
        'searchfield',
        'searchfield-cancel-button',
        'searchfield-decoration',
        'searchfield-results-button',
        'searchfield-results-decoration',
        'semi-condensed',
        'semi-expanded',
        'separate',
        'serif',
        'show',
        'sidama',
        'simp-chinese-formal',
        'simp-chinese-informal',
        'single',
        'skew',
        'skewX',
        'skewY',
        'skip-white-space',
        'slide',
        'slider-horizontal',
        'slider-vertical',
        'sliderthumb-horizontal',
        'sliderthumb-vertical',
        'slow',
        'small',
        'small-caps',
        'small-caption',
        'smaller',
        'solid',
        'somali',
        'source-atop',
        'source-in',
        'source-out',
        'source-over',
        'space',
        'spell-out',
        'square',
        'square-button',
        'standard',
        'start',
        'static',
        'status-bar',
        'stretch',
        'stroke',
        'sub',
        'subpixel-antialiased',
        'super',
        'sw-resize',
        'symbolic',
        'symbols',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row',
        'table-row-group',
        'tamil',
        'telugu',
        'text',
        'text-bottom',
        'text-top',
        'textarea',
        'textfield',
        'thai',
        'thick',
        'thin',
        'threeddarkshadow',
        'threedface',
        'threedhighlight',
        'threedlightshadow',
        'threedshadow',
        'tibetan',
        'tigre',
        'tigrinya-er',
        'tigrinya-er-abegede',
        'tigrinya-et',
        'tigrinya-et-abegede',
        'to',
        'top',
        'trad-chinese-formal',
        'trad-chinese-informal',
        'translate',
        'translate3d',
        'translateX',
        'translateY',
        'translateZ',
        'transparent',
        'ultra-condensed',
        'ultra-expanded',
        'underline',
        'up',
        'upper-alpha',
        'upper-armenian',
        'upper-greek',
        'upper-hexadecimal',
        'upper-latin',
        'upper-norwegian',
        'upper-roman',
        'uppercase',
        'urdu',
        'url',
        'var',
        'vertical',
        'vertical-text',
        'visible',
        'visibleFill',
        'visiblePainted',
        'visibleStroke',
        'visual',
        'w-resize',
        'wait',
        'wave',
        'wider',
        'window',
        'windowframe',
        'windowtext',
        'words',
        'x-large',
        'x-small',
        'xor',
        'xx-large',
        'xx-small',
        'bicubic',
        'optimizespeed',
        'grayscale',
        'row',
        'row-reverse',
        'wrap',
        'wrap-reverse',
        'column-reverse',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'unset',
      ],
      x = [
        'in',
        'and',
        'or',
        'not',
        'is not',
        'is a',
        'is',
        'isnt',
        'defined',
        'if unless',
      ],
      c = ['for', 'if', 'else', 'unless', 'from', 'to'],
      d = [
        'null',
        'true',
        'false',
        'href',
        'title',
        'type',
        'not-allowed',
        'readonly',
        'disabled',
      ],
      w = [
        '@font-face',
        '@keyframes',
        '@media',
        '@viewport',
        '@page',
        '@host',
        '@supports',
        '@block',
        '@css',
      ],
      E = h.concat(v, C, b, S, s, g, L, p, x, c, d, w);
    function z(M) {
      return (
        (M = M.sort(function (H, Z) {
          return Z > H;
        })),
        new RegExp('^((' + M.join(')|(') + '))\\b')
      );
    }
    function y(M) {
      for (var H = {}, Z = 0; Z < M.length; ++Z) H[M[Z]] = !0;
      return H;
    }
    function R(M) {
      return M.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    o.registerHelper('hintWords', 'stylus', E),
      o.defineMIME('text/x-styl', 'stylus');
  });
});
var Xu = Ke((Gu, Zu) => {
  (function (o) {
    typeof Gu == 'object' && typeof Zu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    function h(N) {
      for (var F = {}, D = 0; D < N.length; D++) F[N[D]] = !0;
      return F;
    }
    var v = h([
        '_',
        'var',
        'let',
        'actor',
        'class',
        'enum',
        'extension',
        'import',
        'protocol',
        'struct',
        'func',
        'typealias',
        'associatedtype',
        'open',
        'public',
        'internal',
        'fileprivate',
        'private',
        'deinit',
        'init',
        'new',
        'override',
        'self',
        'subscript',
        'super',
        'convenience',
        'dynamic',
        'final',
        'indirect',
        'lazy',
        'required',
        'static',
        'unowned',
        'unowned(safe)',
        'unowned(unsafe)',
        'weak',
        'as',
        'is',
        'break',
        'case',
        'continue',
        'default',
        'else',
        'fallthrough',
        'for',
        'guard',
        'if',
        'in',
        'repeat',
        'switch',
        'where',
        'while',
        'defer',
        'return',
        'inout',
        'mutating',
        'nonmutating',
        'isolated',
        'nonisolated',
        'catch',
        'do',
        'rethrows',
        'throw',
        'throws',
        'async',
        'await',
        'try',
        'didSet',
        'get',
        'set',
        'willSet',
        'assignment',
        'associativity',
        'infix',
        'left',
        'none',
        'operator',
        'postfix',
        'precedence',
        'precedencegroup',
        'prefix',
        'right',
        'Any',
        'AnyObject',
        'Type',
        'dynamicType',
        'Self',
        'Protocol',
        '__COLUMN__',
        '__FILE__',
        '__FUNCTION__',
        '__LINE__',
      ]),
      C = h([
        'var',
        'let',
        'actor',
        'class',
        'enum',
        'extension',
        'import',
        'protocol',
        'struct',
        'func',
        'typealias',
        'associatedtype',
        'for',
      ]),
      b = h(['true', 'false', 'nil', 'self', 'super', '_']),
      S = h([
        'Array',
        'Bool',
        'Character',
        'Dictionary',
        'Double',
        'Float',
        'Int',
        'Int8',
        'Int16',
        'Int32',
        'Int64',
        'Never',
        'Optional',
        'Set',
        'String',
        'UInt8',
        'UInt16',
        'UInt32',
        'UInt64',
        'Void',
      ]),
      s = '+-/*%=|&<>~^?!',
      p = ':;,.(){}[]',
      g = /^\-?0b[01][01_]*/,
      L = /^\-?0o[0-7][0-7_]*/,
      x =
        /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,
      c = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,
      d = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,
      w = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,
      E = /^\#[A-Za-z]+/,
      z = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
    function y(N, F, D) {
      if ((N.sol() && (F.indented = N.indentation()), N.eatSpace()))
        return null;
      var Q = N.peek();
      if (Q == '/') {
        if (N.match('//')) return N.skipToEnd(), 'comment';
        if (N.match('/*')) return F.tokenize.push(H), H(N, F);
      }
      if (N.match(E)) return 'builtin';
      if (N.match(z)) return 'attribute';
      if (N.match(g) || N.match(L) || N.match(x) || N.match(c)) return 'number';
      if (N.match(w)) return 'property';
      if (s.indexOf(Q) > -1) return N.next(), 'operator';
      if (p.indexOf(Q) > -1) return N.next(), N.match('..'), 'punctuation';
      var j;
      if ((j = N.match(/("""|"|')/))) {
        var V = M.bind(null, j[0]);
        return F.tokenize.push(V), V(N, F);
      }
      if (N.match(d)) {
        var _ = N.current();
        return S.hasOwnProperty(_)
          ? 'variable-2'
          : b.hasOwnProperty(_)
            ? 'atom'
            : v.hasOwnProperty(_)
              ? (C.hasOwnProperty(_) && (F.prev = 'define'), 'keyword')
              : D == 'define'
                ? 'def'
                : 'variable';
      }
      return N.next(), null;
    }
    function R() {
      var N = 0;
      return function (F, D, Q) {
        var j = y(F, D, Q);
        if (j == 'punctuation') {
          if (F.current() == '(') ++N;
          else if (F.current() == ')') {
            if (N == 0)
              return (
                F.backUp(1),
                D.tokenize.pop(),
                D.tokenize[D.tokenize.length - 1](F, D)
              );
            --N;
          }
        }
        return j;
      };
    }
    function M(N, F, D) {
      for (var Q = N.length == 1, j, V = !1; (j = F.peek()); )
        if (V) {
          if ((F.next(), j == '(')) return D.tokenize.push(R()), 'string';
          V = !1;
        } else {
          if (F.match(N)) return D.tokenize.pop(), 'string';
          F.next(), (V = j == '\\');
        }
      return Q && D.tokenize.pop(), 'string';
    }
    function H(N, F) {
      for (var D; (D = N.next()); )
        if (D === '/' && N.eat('*')) F.tokenize.push(H);
        else if (D === '*' && N.eat('/')) {
          F.tokenize.pop();
          break;
        }
      return 'comment';
    }
    function Z(N, F, D) {
      (this.prev = N), (this.align = F), (this.indented = D);
    }
    function ee(N, F) {
      var D = F.match(/^\s*($|\/[\/\*])/, !1) ? null : F.column() + 1;
      N.context = new Z(N.context, D, N.indented);
    }
    function re(N) {
      N.context &&
        ((N.indented = N.context.indented), (N.context = N.context.prev));
    }
    o.defineMode('swift', function (N) {
      return {
        startState: function () {
          return { prev: null, context: null, indented: 0, tokenize: [] };
        },
        token: function (F, D) {
          var Q = D.prev;
          D.prev = null;
          var j = D.tokenize[D.tokenize.length - 1] || y,
            V = j(F, D, Q);
          if (
            (!V || V == 'comment' ? (D.prev = Q) : D.prev || (D.prev = V),
            V == 'punctuation')
          ) {
            var _ = /[\(\[\{]|([\]\)\}])/.exec(F.current());
            _ && (_[1] ? re : ee)(D, F);
          }
          return V;
        },
        indent: function (F, D) {
          var Q = F.context;
          if (!Q) return 0;
          var j = /^[\]\}\)]/.test(D);
          return Q.align != null
            ? Q.align - (j ? 1 : 0)
            : Q.indented + (j ? 0 : N.indentUnit);
        },
        electricInput: /^\s*[\)\}\]]$/,
        lineComment: '//',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        fold: 'brace',
        closeBrackets: '()[]{}\'\'""``',
      };
    }),
      o.defineMIME('text/x-swift', 'swift');
  });
});
var Vu = Ke((Yu, Qu) => {
  (function (o) {
    typeof Yu == 'object' && typeof Qu == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('coffeescript', function (h, v) {
      var C = 'error';
      function b(F) {
        return new RegExp('^((' + F.join(')|(') + '))\\b');
      }
      var S =
          /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
        s = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
        p = /^[_A-Za-z$][_A-Za-z$0-9]*/,
        g = /^@[_A-Za-z$][_A-Za-z$0-9]*/,
        L = b(['and', 'or', 'not', 'is', 'isnt', 'in', 'instanceof', 'typeof']),
        x = [
          'for',
          'while',
          'loop',
          'if',
          'unless',
          'else',
          'switch',
          'try',
          'catch',
          'finally',
          'class',
        ],
        c = [
          'break',
          'by',
          'continue',
          'debugger',
          'delete',
          'do',
          'in',
          'of',
          'new',
          'return',
          'then',
          'this',
          '@',
          'throw',
          'when',
          'until',
          'extends',
        ],
        d = b(x.concat(c));
      x = b(x);
      var w = /^('{3}|\"{3}|['\"])/,
        E = /^(\/{3}|\/)/,
        z = [
          'Infinity',
          'NaN',
          'undefined',
          'null',
          'true',
          'false',
          'on',
          'off',
          'yes',
          'no',
        ],
        y = b(z);
      function R(F, D) {
        if (F.sol()) {
          D.scope.align === null && (D.scope.align = !1);
          var Q = D.scope.offset;
          if (F.eatSpace()) {
            var j = F.indentation();
            return j > Q && D.scope.type == 'coffee'
              ? 'indent'
              : j < Q
                ? 'dedent'
                : null;
          } else Q > 0 && ee(F, D);
        }
        if (F.eatSpace()) return null;
        var V = F.peek();
        if (F.match('####')) return F.skipToEnd(), 'comment';
        if (F.match('###')) return (D.tokenize = H), D.tokenize(F, D);
        if (V === '#') return F.skipToEnd(), 'comment';
        if (F.match(/^-?[0-9\.]/, !1)) {
          var _ = !1;
          if (
            (F.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (_ = !0),
            F.match(/^-?\d+\.\d*/) && (_ = !0),
            F.match(/^-?\.\d+/) && (_ = !0),
            _)
          )
            return F.peek() == '.' && F.backUp(1), 'number';
          var K = !1;
          if (
            (F.match(/^-?0x[0-9a-f]+/i) && (K = !0),
            F.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (K = !0),
            F.match(/^-?0(?![\dx])/i) && (K = !0),
            K)
          )
            return 'number';
        }
        if (F.match(w))
          return (D.tokenize = M(F.current(), !1, 'string')), D.tokenize(F, D);
        if (F.match(E)) {
          if (F.current() != '/' || F.match(/^.*\//, !1))
            return (
              (D.tokenize = M(F.current(), !0, 'string-2')), D.tokenize(F, D)
            );
          F.backUp(1);
        }
        return F.match(S) || F.match(L)
          ? 'operator'
          : F.match(s)
            ? 'punctuation'
            : F.match(y)
              ? 'atom'
              : F.match(g) || (D.prop && F.match(p))
                ? 'property'
                : F.match(d)
                  ? 'keyword'
                  : F.match(p)
                    ? 'variable'
                    : (F.next(), C);
      }
      function M(F, D, Q) {
        return function (j, V) {
          for (; !j.eol(); )
            if ((j.eatWhile(/[^'"\/\\]/), j.eat('\\'))) {
              if ((j.next(), D && j.eol())) return Q;
            } else {
              if (j.match(F)) return (V.tokenize = R), Q;
              j.eat(/['"\/]/);
            }
          return (
            D && (v.singleLineStringErrors ? (Q = C) : (V.tokenize = R)), Q
          );
        };
      }
      function H(F, D) {
        for (; !F.eol(); ) {
          if ((F.eatWhile(/[^#]/), F.match('###'))) {
            D.tokenize = R;
            break;
          }
          F.eatWhile('#');
        }
        return 'comment';
      }
      function Z(F, D, Q) {
        Q = Q || 'coffee';
        for (var j = 0, V = !1, _ = null, K = D.scope; K; K = K.prev)
          if (K.type === 'coffee' || K.type == '}') {
            j = K.offset + h.indentUnit;
            break;
          }
        Q !== 'coffee'
          ? ((V = null), (_ = F.column() + F.current().length))
          : D.scope.align && (D.scope.align = !1),
          (D.scope = {
            offset: j,
            type: Q,
            prev: D.scope,
            align: V,
            alignOffset: _,
          });
      }
      function ee(F, D) {
        if (D.scope.prev)
          if (D.scope.type === 'coffee') {
            for (var Q = F.indentation(), j = !1, V = D.scope; V; V = V.prev)
              if (Q === V.offset) {
                j = !0;
                break;
              }
            if (!j) return !0;
            for (; D.scope.prev && D.scope.offset !== Q; )
              D.scope = D.scope.prev;
            return !1;
          } else return (D.scope = D.scope.prev), !1;
      }
      function re(F, D) {
        var Q = D.tokenize(F, D),
          j = F.current();
        j === 'return' && (D.dedent = !0),
          (((j === '->' || j === '=>') && F.eol()) || Q === 'indent') &&
            Z(F, D);
        var V = '[({'.indexOf(j);
        if (
          (V !== -1 && Z(F, D, '])}'.slice(V, V + 1)),
          x.exec(j) && Z(F, D),
          j == 'then' && ee(F, D),
          Q === 'dedent' && ee(F, D))
        )
          return C;
        if (((V = '])}'.indexOf(j)), V !== -1)) {
          for (; D.scope.type == 'coffee' && D.scope.prev; )
            D.scope = D.scope.prev;
          D.scope.type == j && (D.scope = D.scope.prev);
        }
        return (
          D.dedent &&
            F.eol() &&
            (D.scope.type == 'coffee' &&
              D.scope.prev &&
              (D.scope = D.scope.prev),
            (D.dedent = !1)),
          Q
        );
      }
      var N = {
        startState: function (F) {
          return {
            tokenize: R,
            scope: { offset: F || 0, type: 'coffee', prev: null, align: !1 },
            prop: !1,
            dedent: 0,
          };
        },
        token: function (F, D) {
          var Q = D.scope.align === null && D.scope;
          Q && F.sol() && (Q.align = !1);
          var j = re(F, D);
          return (
            j &&
              j != 'comment' &&
              (Q && (Q.align = !0),
              (D.prop = j == 'punctuation' && F.current() == '.')),
            j
          );
        },
        indent: function (F, D) {
          if (F.tokenize != R) return 0;
          var Q = F.scope,
            j = D && '])}'.indexOf(D.charAt(0)) > -1;
          if (j) for (; Q.type == 'coffee' && Q.prev; ) Q = Q.prev;
          var V = j && Q.type === D.charAt(0);
          return Q.align
            ? Q.alignOffset - (V ? 1 : 0)
            : (V ? Q.prev : Q).offset;
        },
        lineComment: '#',
        fold: 'indent',
      };
      return N;
    }),
      o.defineMIME('application/vnd.coffeescript', 'coffeescript'),
      o.defineMIME('text/x-coffeescript', 'coffeescript'),
      o.defineMIME('text/coffeescript', 'coffeescript');
  });
});
var tc = Ke((Ju, ec) => {
  (function (o) {
    typeof Ju == 'object' && typeof ec == 'object'
      ? o(We(), vn(), gn(), Qn())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../javascript/javascript',
              '../css/css',
              '../htmlmixed/htmlmixed',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode(
      'pug',
      function (h) {
        var v = 'keyword',
          C = 'meta',
          b = 'builtin',
          S = 'qualifier',
          s = { '{': '}', '(': ')', '[': ']' },
          p = o.getMode(h, 'javascript');
        function g() {
          (this.javaScriptLine = !1),
            (this.javaScriptLineExcludesColon = !1),
            (this.javaScriptArguments = !1),
            (this.javaScriptArgumentsDepth = 0),
            (this.isInterpolating = !1),
            (this.interpolationNesting = 0),
            (this.jsState = o.startState(p)),
            (this.restOfLine = ''),
            (this.isIncludeFiltered = !1),
            (this.isEach = !1),
            (this.lastTag = ''),
            (this.scriptType = ''),
            (this.isAttrs = !1),
            (this.attrsNest = []),
            (this.inAttributeName = !0),
            (this.attributeIsType = !1),
            (this.attrValue = ''),
            (this.indentOf = 1 / 0),
            (this.indentToken = ''),
            (this.innerMode = null),
            (this.innerState = null),
            (this.innerModeForLine = !1);
        }
        g.prototype.copy = function () {
          var U = new g();
          return (
            (U.javaScriptLine = this.javaScriptLine),
            (U.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon),
            (U.javaScriptArguments = this.javaScriptArguments),
            (U.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth),
            (U.isInterpolating = this.isInterpolating),
            (U.interpolationNesting = this.interpolationNesting),
            (U.jsState = o.copyState(p, this.jsState)),
            (U.innerMode = this.innerMode),
            this.innerMode &&
              this.innerState &&
              (U.innerState = o.copyState(this.innerMode, this.innerState)),
            (U.restOfLine = this.restOfLine),
            (U.isIncludeFiltered = this.isIncludeFiltered),
            (U.isEach = this.isEach),
            (U.lastTag = this.lastTag),
            (U.scriptType = this.scriptType),
            (U.isAttrs = this.isAttrs),
            (U.attrsNest = this.attrsNest.slice()),
            (U.inAttributeName = this.inAttributeName),
            (U.attributeIsType = this.attributeIsType),
            (U.attrValue = this.attrValue),
            (U.indentOf = this.indentOf),
            (U.indentToken = this.indentToken),
            (U.innerModeForLine = this.innerModeForLine),
            U
          );
        };
        function L(U, G) {
          if (
            (U.sol() &&
              ((G.javaScriptLine = !1), (G.javaScriptLineExcludesColon = !1)),
            G.javaScriptLine)
          ) {
            if (G.javaScriptLineExcludesColon && U.peek() === ':') {
              (G.javaScriptLine = !1), (G.javaScriptLineExcludesColon = !1);
              return;
            }
            var ce = p.token(U, G.jsState);
            return U.eol() && (G.javaScriptLine = !1), ce || !0;
          }
        }
        function x(U, G) {
          if (G.javaScriptArguments) {
            if (G.javaScriptArgumentsDepth === 0 && U.peek() !== '(') {
              G.javaScriptArguments = !1;
              return;
            }
            if (
              (U.peek() === '('
                ? G.javaScriptArgumentsDepth++
                : U.peek() === ')' && G.javaScriptArgumentsDepth--,
              G.javaScriptArgumentsDepth === 0)
            ) {
              G.javaScriptArguments = !1;
              return;
            }
            var ce = p.token(U, G.jsState);
            return ce || !0;
          }
        }
        function c(U) {
          if (U.match(/^yield\b/)) return 'keyword';
        }
        function d(U) {
          if (U.match(/^(?:doctype) *([^\n]+)?/)) return C;
        }
        function w(U, G) {
          if (U.match('#{'))
            return (
              (G.isInterpolating = !0),
              (G.interpolationNesting = 0),
              'punctuation'
            );
        }
        function E(U, G) {
          if (G.isInterpolating) {
            if (U.peek() === '}') {
              if ((G.interpolationNesting--, G.interpolationNesting < 0))
                return U.next(), (G.isInterpolating = !1), 'punctuation';
            } else U.peek() === '{' && G.interpolationNesting++;
            return p.token(U, G.jsState) || !0;
          }
        }
        function z(U, G) {
          if (U.match(/^case\b/)) return (G.javaScriptLine = !0), v;
        }
        function y(U, G) {
          if (U.match(/^when\b/))
            return (
              (G.javaScriptLine = !0), (G.javaScriptLineExcludesColon = !0), v
            );
        }
        function R(U) {
          if (U.match(/^default\b/)) return v;
        }
        function M(U, G) {
          if (U.match(/^extends?\b/)) return (G.restOfLine = 'string'), v;
        }
        function H(U, G) {
          if (U.match(/^append\b/)) return (G.restOfLine = 'variable'), v;
        }
        function Z(U, G) {
          if (U.match(/^prepend\b/)) return (G.restOfLine = 'variable'), v;
        }
        function ee(U, G) {
          if (U.match(/^block\b *(?:(prepend|append)\b)?/))
            return (G.restOfLine = 'variable'), v;
        }
        function re(U, G) {
          if (U.match(/^include\b/)) return (G.restOfLine = 'string'), v;
        }
        function N(U, G) {
          if (U.match(/^include:([a-zA-Z0-9\-]+)/, !1) && U.match('include'))
            return (G.isIncludeFiltered = !0), v;
        }
        function F(U, G) {
          if (G.isIncludeFiltered) {
            var ce = B(U, G);
            return (G.isIncludeFiltered = !1), (G.restOfLine = 'string'), ce;
          }
        }
        function D(U, G) {
          if (U.match(/^mixin\b/)) return (G.javaScriptLine = !0), v;
        }
        function Q(U, G) {
          if (U.match(/^\+([-\w]+)/))
            return (
              U.match(/^\( *[-\w]+ *=/, !1) ||
                ((G.javaScriptArguments = !0),
                (G.javaScriptArgumentsDepth = 0)),
              'variable'
            );
          if (U.match('+#{', !1))
            return U.next(), (G.mixinCallAfter = !0), w(U, G);
        }
        function j(U, G) {
          if (G.mixinCallAfter)
            return (
              (G.mixinCallAfter = !1),
              U.match(/^\( *[-\w]+ *=/, !1) ||
                ((G.javaScriptArguments = !0),
                (G.javaScriptArgumentsDepth = 0)),
              !0
            );
        }
        function V(U, G) {
          if (U.match(/^(if|unless|else if|else)\b/))
            return (G.javaScriptLine = !0), v;
        }
        function _(U, G) {
          if (U.match(/^(- *)?(each|for)\b/)) return (G.isEach = !0), v;
        }
        function K(U, G) {
          if (G.isEach) {
            if (U.match(/^ in\b/))
              return (G.javaScriptLine = !0), (G.isEach = !1), v;
            if (U.sol() || U.eol()) G.isEach = !1;
            else if (U.next()) {
              for (; !U.match(/^ in\b/, !1) && U.next(); );
              return 'variable';
            }
          }
        }
        function X(U, G) {
          if (U.match(/^while\b/)) return (G.javaScriptLine = !0), v;
        }
        function I(U, G) {
          var ce;
          if ((ce = U.match(/^(\w(?:[-:\w]*\w)?)\/?/)))
            return (
              (G.lastTag = ce[1].toLowerCase()),
              G.lastTag === 'script' &&
                (G.scriptType = 'application/javascript'),
              'tag'
            );
        }
        function B(U, G) {
          if (U.match(/^:([\w\-]+)/)) {
            var ce;
            return (
              h &&
                h.innerModes &&
                (ce = h.innerModes(U.current().substring(1))),
              ce || (ce = U.current().substring(1)),
              typeof ce == 'string' && (ce = o.getMode(h, ce)),
              je(U, G, ce),
              'atom'
            );
          }
        }
        function le(U, G) {
          if (U.match(/^(!?=|-)/))
            return (G.javaScriptLine = !0), 'punctuation';
        }
        function xe(U) {
          if (U.match(/^#([\w-]+)/)) return b;
        }
        function q(U) {
          if (U.match(/^\.([\w-]+)/)) return S;
        }
        function T(U, G) {
          if (U.peek() == '(')
            return (
              U.next(),
              (G.isAttrs = !0),
              (G.attrsNest = []),
              (G.inAttributeName = !0),
              (G.attrValue = ''),
              (G.attributeIsType = !1),
              'punctuation'
            );
        }
        function de(U, G) {
          if (G.isAttrs) {
            if (
              (s[U.peek()] && G.attrsNest.push(s[U.peek()]),
              G.attrsNest[G.attrsNest.length - 1] === U.peek())
            )
              G.attrsNest.pop();
            else if (U.eat(')')) return (G.isAttrs = !1), 'punctuation';
            if (G.inAttributeName && U.match(/^[^=,\)!]+/))
              return (
                (U.peek() === '=' || U.peek() === '!') &&
                  ((G.inAttributeName = !1),
                  (G.jsState = o.startState(p)),
                  G.lastTag === 'script' &&
                  U.current().trim().toLowerCase() === 'type'
                    ? (G.attributeIsType = !0)
                    : (G.attributeIsType = !1)),
                'attribute'
              );
            var ce = p.token(U, G.jsState);
            if (
              (G.attributeIsType &&
                ce === 'string' &&
                (G.scriptType = U.current().toString()),
              G.attrsNest.length === 0 &&
                (ce === 'string' || ce === 'variable' || ce === 'keyword'))
            )
              try {
                return (
                  Function(
                    '',
                    'var x ' +
                      G.attrValue.replace(/,\s*$/, '').replace(/^!/, '')
                  ),
                  (G.inAttributeName = !0),
                  (G.attrValue = ''),
                  U.backUp(U.current().length),
                  de(U, G)
                );
              } catch {}
            return (G.attrValue += U.current()), ce || !0;
          }
        }
        function ze(U, G) {
          if (U.match(/^&attributes\b/))
            return (
              (G.javaScriptArguments = !0),
              (G.javaScriptArgumentsDepth = 0),
              'keyword'
            );
        }
        function pe(U) {
          if (U.sol() && U.eatSpace()) return 'indent';
        }
        function Ee(U, G) {
          if (U.match(/^ *\/\/(-)?([^\n]*)/))
            return (
              (G.indentOf = U.indentation()),
              (G.indentToken = 'comment'),
              'comment'
            );
        }
        function ge(U) {
          if (U.match(/^: */)) return 'colon';
        }
        function Oe(U, G) {
          if (U.match(/^(?:\| ?| )([^\n]+)/)) return 'string';
          if (U.match(/^(<[^\n]*)/, !1))
            return (
              je(U, G, 'htmlmixed'), (G.innerModeForLine = !0), Ze(U, G, !0)
            );
        }
        function qe(U, G) {
          if (U.eat('.')) {
            var ce = null;
            return (
              G.lastTag === 'script' &&
              G.scriptType.toLowerCase().indexOf('javascript') != -1
                ? (ce = G.scriptType.toLowerCase().replace(/"|'/g, ''))
                : G.lastTag === 'style' && (ce = 'css'),
              je(U, G, ce),
              'dot'
            );
          }
        }
        function Se(U) {
          return U.next(), null;
        }
        function je(U, G, ce) {
          (ce = o.mimeModes[ce] || ce),
            (ce = (h.innerModes && h.innerModes(ce)) || ce),
            (ce = o.mimeModes[ce] || ce),
            (ce = o.getMode(h, ce)),
            (G.indentOf = U.indentation()),
            ce && ce.name !== 'null'
              ? (G.innerMode = ce)
              : (G.indentToken = 'string');
        }
        function Ze(U, G, ce) {
          if (
            U.indentation() > G.indentOf ||
            (G.innerModeForLine && !U.sol()) ||
            ce
          )
            return G.innerMode
              ? (G.innerState ||
                  (G.innerState = G.innerMode.startState
                    ? o.startState(G.innerMode, U.indentation())
                    : {}),
                U.hideFirstChars(G.indentOf + 2, function () {
                  return G.innerMode.token(U, G.innerState) || !0;
                }))
              : (U.skipToEnd(), G.indentToken);
          U.sol() &&
            ((G.indentOf = 1 / 0),
            (G.indentToken = null),
            (G.innerMode = null),
            (G.innerState = null));
        }
        function ke(U, G) {
          if ((U.sol() && (G.restOfLine = ''), G.restOfLine)) {
            U.skipToEnd();
            var ce = G.restOfLine;
            return (G.restOfLine = ''), ce;
          }
        }
        function Je() {
          return new g();
        }
        function He(U) {
          return U.copy();
        }
        function Ge(U, G) {
          var ce =
            Ze(U, G) ||
            ke(U, G) ||
            E(U, G) ||
            F(U, G) ||
            K(U, G) ||
            de(U, G) ||
            L(U, G) ||
            x(U, G) ||
            j(U, G) ||
            c(U) ||
            d(U) ||
            w(U, G) ||
            z(U, G) ||
            y(U, G) ||
            R(U) ||
            M(U, G) ||
            H(U, G) ||
            Z(U, G) ||
            ee(U, G) ||
            re(U, G) ||
            N(U, G) ||
            D(U, G) ||
            Q(U, G) ||
            V(U, G) ||
            _(U, G) ||
            X(U, G) ||
            I(U, G) ||
            B(U, G) ||
            le(U, G) ||
            xe(U) ||
            q(U) ||
            T(U, G) ||
            ze(U, G) ||
            pe(U) ||
            Oe(U, G) ||
            Ee(U, G) ||
            ge(U) ||
            qe(U, G) ||
            Se(U);
          return ce === !0 ? null : ce;
        }
        return { startState: Je, copyState: He, token: Ge };
      },
      'javascript',
      'css',
      'htmlmixed'
    ),
      o.defineMIME('text/x-pug', 'pug'),
      o.defineMIME('text/x-jade', 'pug');
  });
});
var ic = Ke((rc, nc) => {
  (function (o) {
    typeof rc == 'object' && typeof nc == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.multiplexingMode = function (h) {
      var v = Array.prototype.slice.call(arguments, 1);
      function C(b, S, s, p) {
        if (typeof S == 'string') {
          var g = b.indexOf(S, s);
          return p && g > -1 ? g + S.length : g;
        }
        var L = S.exec(s ? b.slice(s) : b);
        return L ? L.index + s + (p ? L[0].length : 0) : -1;
      }
      return {
        startState: function () {
          return {
            outer: o.startState(h),
            innerActive: null,
            inner: null,
            startingInner: !1,
          };
        },
        copyState: function (b) {
          return {
            outer: o.copyState(h, b.outer),
            innerActive: b.innerActive,
            inner: b.innerActive && o.copyState(b.innerActive.mode, b.inner),
            startingInner: b.startingInner,
          };
        },
        token: function (b, S) {
          if (S.innerActive) {
            var E = S.innerActive,
              p = b.string;
            if (!E.close && b.sol())
              return (S.innerActive = S.inner = null), this.token(b, S);
            var x =
              E.close && !S.startingInner
                ? C(p, E.close, b.pos, E.parseDelimiters)
                : -1;
            if (x == b.pos && !E.parseDelimiters)
              return (
                b.match(E.close),
                (S.innerActive = S.inner = null),
                E.delimStyle && E.delimStyle + ' ' + E.delimStyle + '-close'
              );
            x > -1 && (b.string = p.slice(0, x));
            var z = E.mode.token(b, S.inner);
            return (
              x > -1
                ? (b.string = p)
                : b.pos > b.start && (S.startingInner = !1),
              x == b.pos &&
                E.parseDelimiters &&
                (S.innerActive = S.inner = null),
              E.innerStyle &&
                (z ? (z = z + ' ' + E.innerStyle) : (z = E.innerStyle)),
              z
            );
          } else {
            for (var s = 1 / 0, p = b.string, g = 0; g < v.length; ++g) {
              var L = v[g],
                x = C(p, L.open, b.pos);
              if (x == b.pos) {
                L.parseDelimiters || b.match(L.open),
                  (S.startingInner = !!L.parseDelimiters),
                  (S.innerActive = L);
                var c = 0;
                if (h.indent) {
                  var d = h.indent(S.outer, '', '');
                  d !== o.Pass && (c = d);
                }
                return (
                  (S.inner = o.startState(L.mode, c)),
                  L.delimStyle && L.delimStyle + ' ' + L.delimStyle + '-open'
                );
              } else x != -1 && x < s && (s = x);
            }
            s != 1 / 0 && (b.string = p.slice(0, s));
            var w = h.token(b, S.outer);
            return s != 1 / 0 && (b.string = p), w;
          }
        },
        indent: function (b, S, s) {
          var p = b.innerActive ? b.innerActive.mode : h;
          return p.indent
            ? p.indent(b.innerActive ? b.inner : b.outer, S, s)
            : o.Pass;
        },
        blankLine: function (b) {
          var S = b.innerActive ? b.innerActive.mode : h;
          if (
            (S.blankLine && S.blankLine(b.innerActive ? b.inner : b.outer),
            b.innerActive)
          )
            b.innerActive.close ===
              `
` && (b.innerActive = b.inner = null);
          else
            for (var s = 0; s < v.length; ++s) {
              var p = v[s];
              p.open ===
                `
` &&
                ((b.innerActive = p),
                (b.inner = o.startState(
                  p.mode,
                  S.indent ? S.indent(b.outer, '', '') : 0
                )));
            }
        },
        electricChars: h.electricChars,
        innerMode: function (b) {
          return b.inner
            ? { state: b.inner, mode: b.innerActive.mode }
            : { state: b.outer, mode: h };
        },
      };
    };
  });
});
var lc = Ke((oc, ac) => {
  (function (o) {
    typeof oc == 'object' && typeof ac == 'object'
      ? o(We(), Di(), ic())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../../addon/mode/simple',
              '../../addon/mode/multiplex',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineSimpleMode('handlebars-tags', {
      start: [
        { regex: /\{\{\{/, push: 'handlebars_raw', token: 'tag' },
        { regex: /\{\{!--/, push: 'dash_comment', token: 'comment' },
        { regex: /\{\{!/, push: 'comment', token: 'comment' },
        { regex: /\{\{/, push: 'handlebars', token: 'tag' },
      ],
      handlebars_raw: [{ regex: /\}\}\}/, pop: !0, token: 'tag' }],
      handlebars: [
        { regex: /\}\}/, pop: !0, token: 'tag' },
        { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
        { regex: /'(?:[^\\']|\\.)*'?/, token: 'string' },
        { regex: />|[#\/]([A-Za-z_]\w*)/, token: 'keyword' },
        { regex: /(?:else|this)\b/, token: 'keyword' },
        { regex: /\d+/i, token: 'number' },
        { regex: /=|~|@|true|false/, token: 'atom' },
        { regex: /(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/, token: 'variable-2' },
      ],
      dash_comment: [
        { regex: /--\}\}/, pop: !0, token: 'comment' },
        { regex: /./, token: 'comment' },
      ],
      comment: [
        { regex: /\}\}/, pop: !0, token: 'comment' },
        { regex: /./, token: 'comment' },
      ],
      meta: { blockCommentStart: '{{--', blockCommentEnd: '--}}' },
    }),
      o.defineMode('handlebars', function (h, v) {
        var C = o.getMode(h, 'handlebars-tags');
        return !v || !v.base
          ? C
          : o.multiplexingMode(o.getMode(h, v.base), {
              open: '{{',
              close: /\}\}\}?/,
              mode: C,
              parseDelimiters: !0,
            });
      }),
      o.defineMIME('text/x-handlebars-template', 'handlebars');
  });
});
var cc = Ke((sc, uc) => {
  (function (o) {
    'use strict';
    typeof sc == 'object' && typeof uc == 'object'
      ? o(We(), Yn(), mn(), vn(), Vu(), gn(), ea(), ta(), tc(), lc())
      : typeof define == 'function' && define.amd
        ? define(
            [
              '../../lib/codemirror',
              '../../addon/mode/overlay',
              '../xml/xml',
              '../javascript/javascript',
              '../coffeescript/coffeescript',
              '../css/css',
              '../sass/sass',
              '../stylus/stylus',
              '../pug/pug',
              '../handlebars/handlebars',
            ],
            o
          )
        : o(CodeMirror);
  })(function (o) {
    var h = {
      script: [
        ['lang', /coffee(script)?/, 'coffeescript'],
        [
          'type',
          /^(?:text|application)\/(?:x-)?coffee(?:script)?$/,
          'coffeescript',
        ],
        ['lang', /^babel$/, 'javascript'],
        ['type', /^text\/babel$/, 'javascript'],
        ['type', /^text\/ecmascript-\d+$/, 'javascript'],
      ],
      style: [
        ['lang', /^stylus$/i, 'stylus'],
        ['lang', /^sass$/i, 'sass'],
        ['lang', /^less$/i, 'text/x-less'],
        ['lang', /^scss$/i, 'text/x-scss'],
        ['type', /^(text\/)?(x-)?styl(us)?$/i, 'stylus'],
        ['type', /^text\/sass/i, 'sass'],
        ['type', /^(text\/)?(x-)?scss$/i, 'text/x-scss'],
        ['type', /^(text\/)?(x-)?less$/i, 'text/x-less'],
      ],
      template: [
        ['lang', /^vue-template$/i, 'vue'],
        ['lang', /^pug$/i, 'pug'],
        ['lang', /^handlebars$/i, 'handlebars'],
        ['type', /^(text\/)?(x-)?pug$/i, 'pug'],
        ['type', /^text\/x-handlebars-template$/i, 'handlebars'],
        [null, null, 'vue-template'],
      ],
    };
    o.defineMode('vue-template', function (v, C) {
      var b = {
        token: function (S) {
          if (S.match(/^\{\{.*?\}\}/)) return 'meta mustache';
          for (; S.next() && !S.match('{{', !1); );
          return null;
        },
      };
      return o.overlayMode(o.getMode(v, C.backdrop || 'text/html'), b);
    }),
      o.defineMode(
        'vue',
        function (v) {
          return o.getMode(v, { name: 'htmlmixed', tags: h });
        },
        'htmlmixed',
        'xml',
        'javascript',
        'coffeescript',
        'css',
        'sass',
        'stylus',
        'pug',
        'handlebars'
      ),
      o.defineMIME('script/x-vue', 'vue'),
      o.defineMIME('text/x-vue', 'vue');
  });
});
var pc = Ke((fc, dc) => {
  (function (o) {
    typeof fc == 'object' && typeof dc == 'object'
      ? o(We())
      : typeof define == 'function' && define.amd
        ? define(['../../lib/codemirror'], o)
        : o(CodeMirror);
  })(function (o) {
    'use strict';
    o.defineMode('yaml', function () {
      var h = ['true', 'false', 'on', 'off', 'yes', 'no'],
        v = new RegExp('\\b((' + h.join(')|(') + '))$', 'i');
      return {
        token: function (C, b) {
          var S = C.peek(),
            s = b.escaped;
          if (
            ((b.escaped = !1),
            S == '#' && (C.pos == 0 || /\s/.test(C.string.charAt(C.pos - 1))))
          )
            return C.skipToEnd(), 'comment';
          if (C.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return 'string';
          if (b.literal && C.indentation() > b.keyCol)
            return C.skipToEnd(), 'string';
          if ((b.literal && (b.literal = !1), C.sol())) {
            if (
              ((b.keyCol = 0),
              (b.pair = !1),
              (b.pairStart = !1),
              C.match('---') || C.match('...'))
            )
              return 'def';
            if (C.match(/\s*-\s+/)) return 'meta';
          }
          if (C.match(/^(\{|\}|\[|\])/))
            return (
              S == '{'
                ? b.inlinePairs++
                : S == '}'
                  ? b.inlinePairs--
                  : S == '['
                    ? b.inlineList++
                    : b.inlineList--,
              'meta'
            );
          if (b.inlineList > 0 && !s && S == ',') return C.next(), 'meta';
          if (b.inlinePairs > 0 && !s && S == ',')
            return (
              (b.keyCol = 0),
              (b.pair = !1),
              (b.pairStart = !1),
              C.next(),
              'meta'
            );
          if (b.pairStart) {
            if (C.match(/^\s*(\||\>)\s*/)) return (b.literal = !0), 'meta';
            if (C.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) return 'variable-2';
            if (
              (b.inlinePairs == 0 && C.match(/^\s*-?[0-9\.\,]+\s?$/)) ||
              (b.inlinePairs > 0 && C.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))
            )
              return 'number';
            if (C.match(v)) return 'keyword';
          }
          return !b.pair &&
            C.match(
              /^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^\s,\[\]{}#&*!|>'"%@`])[^#:]*(?=:($|\s))/
            )
            ? ((b.pair = !0), (b.keyCol = C.indentation()), 'atom')
            : b.pair && C.match(/^:\s*/)
              ? ((b.pairStart = !0), 'meta')
              : ((b.pairStart = !1), (b.escaped = S == '\\'), C.next(), null);
        },
        startState: function () {
          return {
            pair: !1,
            pairStart: !1,
            keyCol: 0,
            inlinePairs: 0,
            inlineList: 0,
            literal: !1,
            escaped: !1,
          };
        },
        lineComment: '#',
        fold: 'indent',
      };
    }),
      o.defineMIME('text/x-yaml', 'yaml'),
      o.defineMIME('text/yaml', 'yaml');
  });
});
var $d = {};
function qd(o) {
  for (var h; (h = Md.exec(o)) !== null; ) {
    var v = h[0];
    if (v.indexOf('target=') === -1) {
      var C = v.replace(/>$/, ' target="_blank">');
      o = o.replace(v, C);
    }
  }
  return o;
}
function Id(o) {
  for (
    var h = new DOMParser(),
      v = h.parseFromString(o, 'text/html'),
      C = v.getElementsByTagName('li'),
      b = 0;
    b < C.length;
    b++
  )
    for (var S = C[b], s = 0; s < S.children.length; s++) {
      var p = S.children[s];
      p instanceof HTMLInputElement &&
        p.type === 'checkbox' &&
        ((S.style.marginLeft = '-1.5em'), (S.style.listStyleType = 'none'));
    }
  return v.documentElement.innerHTML;
}
function vc(o) {
  return (
    mc ? (o = o.replace('Ctrl', 'Cmd')) : (o = o.replace('Cmd', 'Ctrl')), o
  );
}
function Fd(o, h, v, C) {
  var b = qi(o, !1, h, v, 'button', C);
  b.classList.add('easymde-dropdown'),
    (b.onclick = function () {
      b.focus();
    });
  var S = document.createElement('div');
  S.className = 'easymde-dropdown-content';
  for (var s = 0; s < o.children.length; s++) {
    var p = o.children[s],
      g;
    typeof p == 'string' && p in Pr
      ? (g = qi(Pr[p], !0, h, v, 'button', C))
      : (g = qi(p, !0, h, v, 'button', C)),
      g.addEventListener(
        'click',
        function (L) {
          L.stopPropagation();
        },
        !1
      ),
      S.appendChild(g);
  }
  return b.appendChild(S), b;
}
function qi(o, h, v, C, b, S) {
  o = o || {};
  var s = document.createElement(b);
  if (o.attributes)
    for (var p in o.attributes)
      Object.prototype.hasOwnProperty.call(o.attributes, p) &&
        s.setAttribute(p, o.attributes[p]);
  (s.className = o.name),
    s.setAttribute('type', b),
    (v = v ?? !0),
    o.text && (s.innerText = o.text),
    o.name && o.name in C && (Vn[o.name] = o.action),
    o.title &&
      v &&
      ((s.title = Od(o.title, o.action, C)),
      mc &&
        ((s.title = s.title.replace('Ctrl', '\u2318')),
        (s.title = s.title.replace('Alt', '\u2325')))),
    o.title && s.setAttribute('aria-label', o.title),
    o.noDisable && s.classList.add('no-disable'),
    o.noMobile && s.classList.add('no-mobile');
  var g = [];
  typeof o.className < 'u' && (g = o.className.split(' '));
  for (var L = [], x = 0; x < g.length; x++) {
    var c = g[x];
    c.match(/^fa([srlb]|(-[\w-]*)|$)/) ? L.push(c) : s.classList.add(c);
  }
  if (((s.tabIndex = -1), L.length > 0)) {
    for (var d = document.createElement('i'), w = 0; w < L.length; w++) {
      var E = L[w];
      d.classList.add(E);
    }
    s.appendChild(d);
  }
  return (
    typeof o.icon < 'u' && (s.innerHTML = o.icon),
    o.action &&
      h &&
      (typeof o.action == 'function'
        ? (s.onclick = function (z) {
            z.preventDefault(), o.action(S);
          })
        : typeof o.action == 'string' &&
          (s.onclick = function (z) {
            z.preventDefault(), window.open(o.action, '_blank');
          })),
    s
  );
}
function Nd() {
  var o = document.createElement('i');
  return (o.className = 'separator'), (o.innerHTML = '|'), o;
}
function Od(o, h, v) {
  var C,
    b = o;
  return h && ((C = Dd(h)), v[C] && (b += ' (' + vc(v[C]) + ')')), b;
}
function Tr(o, h) {
  h = h || o.getCursor('start');
  var v = o.getTokenAt(h);
  if (!v.type) return {};
  for (var C = v.type.split(' '), b = {}, S, s, p = 0; p < C.length; p++)
    (S = C[p]),
      S === 'strong'
        ? (b.bold = !0)
        : S === 'variable-2'
          ? ((s = o.getLine(h.line)),
            /^\s*\d+\.\s/.test(s)
              ? (b['ordered-list'] = !0)
              : (b['unordered-list'] = !0))
          : S === 'atom'
            ? (b.quote = !0)
            : S === 'em'
              ? (b.italic = !0)
              : S === 'quote'
                ? (b.quote = !0)
                : S === 'strikethrough'
                  ? (b.strikethrough = !0)
                  : S === 'comment'
                    ? (b.code = !0)
                    : S === 'link' && !b.image
                      ? (b.link = !0)
                      : S === 'image'
                        ? (b.image = !0)
                        : S.match(/^header(-[1-6])?$/) &&
                          (b[S.replace('header', 'heading')] = !0);
  return b;
}
function jr(o) {
  var h = o.codemirror;
  h.setOption('fullScreen', !h.getOption('fullScreen')),
    h.getOption('fullScreen')
      ? ((hc = document.body.style.overflow),
        (document.body.style.overflow = 'hidden'))
      : (document.body.style.overflow = hc);
  var v = h.getWrapperElement(),
    C = v.nextSibling;
  if (C.classList.contains('editor-preview-active-side'))
    if (o.options.sideBySideFullscreen === !1) {
      var b = v.parentNode;
      h.getOption('fullScreen')
        ? b.classList.remove('sided--no-fullscreen')
        : b.classList.add('sided--no-fullscreen');
    } else bn(o);
  if (
    (o.options.onToggleFullScreen &&
      o.options.onToggleFullScreen(h.getOption('fullScreen') || !1),
    typeof o.options.maxHeight < 'u' &&
      (h.getOption('fullScreen')
        ? (h.getScrollerElement().style.removeProperty('height'),
          C.style.removeProperty('height'))
        : ((h.getScrollerElement().style.height = o.options.maxHeight),
          o.setPreviewMaxHeight())),
    o.toolbar_div.classList.toggle('fullscreen'),
    o.toolbarElements && o.toolbarElements.fullscreen)
  ) {
    var S = o.toolbarElements.fullscreen;
    S.classList.toggle('active');
  }
}
function Fi(o) {
  sa(o, 'bold', o.options.blockStyles.bold);
}
function Ni(o) {
  sa(o, 'italic', o.options.blockStyles.italic);
}
function Oi(o) {
  sa(o, 'strikethrough', '~~');
}
function Pi(o) {
  var h = o.options.blockStyles.code;
  function v(K) {
    if (typeof K != 'object')
      throw (
        "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " +
        typeof K +
        ': ' +
        K
      );
    return (
      K.styles &&
      K.styles[2] &&
      K.styles[2].indexOf('formatting-code-block') !== -1
    );
  }
  function C(K) {
    return K.state.base.base || K.state.base;
  }
  function b(K, X, I, B, le) {
    (I = I || K.getLineHandle(X)),
      (B = B || K.getTokenAt({ line: X, ch: 1 })),
      (le =
        le || (!!I.text && K.getTokenAt({ line: X, ch: I.text.length - 1 })));
    var xe = B.type ? B.type.split(' ') : [];
    return le && C(le).indentedCode
      ? 'indented'
      : xe.indexOf('comment') === -1
        ? !1
        : C(B).fencedChars || C(le).fencedChars || v(I)
          ? 'fenced'
          : 'single';
  }
  function S(K, X, I, B) {
    var le = X.line + 1,
      xe = I.line + 1,
      q = X.line !== I.line,
      T =
        B +
        `
`,
      de =
        `
` + B;
    q && xe++,
      q &&
        I.ch === 0 &&
        ((de =
          B +
          `
`),
        xe--),
      Rr(K, !1, [T, de]),
      K.setSelection({ line: le, ch: 0 }, { line: xe, ch: 0 });
  }
  var s = o.codemirror,
    p = s.getCursor('start'),
    g = s.getCursor('end'),
    L = s.getTokenAt({ line: p.line, ch: p.ch || 1 }),
    x = s.getLineHandle(p.line),
    c = b(s, p.line, x, L),
    d,
    w,
    E;
  if (c === 'single') {
    var z = x.text.slice(0, p.ch).replace('`', ''),
      y = x.text.slice(p.ch).replace('`', '');
    s.replaceRange(
      z + y,
      { line: p.line, ch: 0 },
      { line: p.line, ch: 99999999999999 }
    ),
      p.ch--,
      p !== g && g.ch--,
      s.setSelection(p, g),
      s.focus();
  } else if (c === 'fenced')
    if (p.line !== g.line || p.ch !== g.ch) {
      for (d = p.line; d >= 0 && ((x = s.getLineHandle(d)), !v(x)); d--);
      var R = s.getTokenAt({ line: d, ch: 1 }),
        M = C(R).fencedChars,
        H,
        Z,
        ee,
        re;
      v(s.getLineHandle(p.line))
        ? ((H = ''), (Z = p.line))
        : v(s.getLineHandle(p.line - 1))
          ? ((H = ''), (Z = p.line - 1))
          : ((H =
              M +
              `
`),
            (Z = p.line)),
        v(s.getLineHandle(g.line))
          ? ((ee = ''), (re = g.line), g.ch === 0 && (re += 1))
          : g.ch !== 0 && v(s.getLineHandle(g.line + 1))
            ? ((ee = ''), (re = g.line + 1))
            : ((ee =
                M +
                `
`),
              (re = g.line + 1)),
        g.ch === 0 && (re -= 1),
        s.operation(function () {
          s.replaceRange(
            ee,
            { line: re, ch: 0 },
            { line: re + (ee ? 0 : 1), ch: 0 }
          ),
            s.replaceRange(
              H,
              { line: Z, ch: 0 },
              { line: Z + (H ? 0 : 1), ch: 0 }
            );
        }),
        s.setSelection(
          { line: Z + (H ? 1 : 0), ch: 0 },
          { line: re + (H ? 1 : -1), ch: 0 }
        ),
        s.focus();
    } else {
      var N = p.line;
      if (
        (v(s.getLineHandle(p.line)) &&
          (b(s, p.line + 1) === 'fenced'
            ? ((d = p.line), (N = p.line + 1))
            : ((w = p.line), (N = p.line - 1))),
        d === void 0)
      )
        for (d = N; d >= 0 && ((x = s.getLineHandle(d)), !v(x)); d--);
      if (w === void 0)
        for (
          E = s.lineCount(), w = N;
          w < E && ((x = s.getLineHandle(w)), !v(x));
          w++
        );
      s.operation(function () {
        s.replaceRange('', { line: d, ch: 0 }, { line: d + 1, ch: 0 }),
          s.replaceRange('', { line: w - 1, ch: 0 }, { line: w, ch: 0 });
      }),
        s.focus();
    }
  else if (c === 'indented') {
    if (p.line !== g.line || p.ch !== g.ch)
      (d = p.line), (w = g.line), g.ch === 0 && w--;
    else {
      for (d = p.line; d >= 0; d--)
        if (
          ((x = s.getLineHandle(d)),
          !x.text.match(/^\s*$/) && b(s, d, x) !== 'indented')
        ) {
          d += 1;
          break;
        }
      for (E = s.lineCount(), w = p.line; w < E; w++)
        if (
          ((x = s.getLineHandle(w)),
          !x.text.match(/^\s*$/) && b(s, w, x) !== 'indented')
        ) {
          w -= 1;
          break;
        }
    }
    var F = s.getLineHandle(w + 1),
      D = F && s.getTokenAt({ line: w + 1, ch: F.text.length - 1 }),
      Q = D && C(D).indentedCode;
    Q &&
      s.replaceRange(
        `
`,
        { line: w + 1, ch: 0 }
      );
    for (var j = d; j <= w; j++) s.indentLine(j, 'subtract');
    s.focus();
  } else {
    var V = p.line === g.line && p.ch === g.ch && p.ch === 0,
      _ = p.line !== g.line;
    V || _ ? S(s, p, g, h) : Rr(s, !1, ['`', '`']);
  }
}
function ji(o) {
  la(o.codemirror, 'quote');
}
function Jn(o) {
  Lr(o.codemirror, 'smaller');
}
function Ri(o) {
  Lr(o.codemirror, 'bigger');
}
function Hi(o) {
  Lr(o.codemirror, void 0, 1);
}
function Bi(o) {
  Lr(o.codemirror, void 0, 2);
}
function Wi(o) {
  Lr(o.codemirror, void 0, 3);
}
function na(o) {
  Lr(o.codemirror, void 0, 4);
}
function ia(o) {
  Lr(o.codemirror, void 0, 5);
}
function oa(o) {
  Lr(o.codemirror, void 0, 6);
}
function Ui(o) {
  var h = o.codemirror,
    v = '*';
  ['-', '+', '*'].includes(o.options.unorderedListStyle) &&
    (v = o.options.unorderedListStyle),
    la(h, 'unordered-list', v);
}
function $i(o) {
  la(o.codemirror, 'ordered-list');
}
function Ki(o) {
  Pd(o.codemirror);
}
function Gi(o) {
  var h = o.options,
    v = 'https://';
  if (h.promptURLs) {
    var C = prompt(h.promptTexts.link, v);
    if (!C) return !1;
    v = bc(C);
  }
  xc(o, 'link', h.insertTexts.link, v);
}
function Zi(o) {
  var h = o.options,
    v = 'https://';
  if (h.promptURLs) {
    var C = prompt(h.promptTexts.image, v);
    if (!C) return !1;
    v = bc(C);
  }
  xc(o, 'image', h.insertTexts.image, v);
}
function bc(o) {
  return encodeURI(o).replace(/([\\()])/g, '\\$1');
}
function aa(o) {
  o.openBrowseFileWindow();
}
function yc(o, h) {
  var v = o.codemirror,
    C = Tr(v),
    b = o.options,
    S = h.substr(h.lastIndexOf('/') + 1),
    s = S.substring(S.lastIndexOf('.') + 1)
      .replace(/\?.*$/, '')
      .toLowerCase();
  if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'apng', 'avif', 'webp'].includes(s))
    Rr(v, C.image, b.insertTexts.uploadedImage, h);
  else {
    var p = b.insertTexts.link;
    (p[0] = '[' + S), Rr(v, C.link, p, h);
  }
  o.updateStatusBar(
    'upload-image',
    o.options.imageTexts.sbOnUploaded.replace('#image_name#', S)
  ),
    setTimeout(function () {
      o.updateStatusBar('upload-image', o.options.imageTexts.sbInit);
    }, 1e3);
}
function Xi(o) {
  var h = o.codemirror,
    v = Tr(h),
    C = o.options;
  Rr(h, v.table, C.insertTexts.table);
}
function Yi(o) {
  var h = o.codemirror,
    v = Tr(h),
    C = o.options;
  Rr(h, v.image, C.insertTexts.horizontalRule);
}
function Qi(o) {
  var h = o.codemirror;
  h.undo(), h.focus();
}
function Vi(o) {
  var h = o.codemirror;
  h.redo(), h.focus();
}
function bn(o) {
  var h = o.codemirror,
    v = h.getWrapperElement(),
    C = v.nextSibling,
    b = o.toolbarElements && o.toolbarElements['side-by-side'],
    S = !1,
    s = v.parentNode;
  C.classList.contains('editor-preview-active-side')
    ? (o.options.sideBySideFullscreen === !1 &&
        s.classList.remove('sided--no-fullscreen'),
      C.classList.remove('editor-preview-active-side'),
      b && b.classList.remove('active'),
      v.classList.remove('CodeMirror-sided'))
    : (setTimeout(function () {
        h.getOption('fullScreen') ||
          (o.options.sideBySideFullscreen === !1
            ? s.classList.add('sided--no-fullscreen')
            : jr(o)),
          C.classList.add('editor-preview-active-side');
      }, 1),
      b && b.classList.add('active'),
      v.classList.add('CodeMirror-sided'),
      (S = !0));
  var p = v.lastChild;
  if (p.classList.contains('editor-preview-active')) {
    p.classList.remove('editor-preview-active');
    var g = o.toolbarElements.preview,
      L = o.toolbar_div;
    g.classList.remove('active'), L.classList.remove('disabled-for-preview');
  }
  var x = function () {
    var d = o.options.previewRender(o.value(), C);
    d != null && (C.innerHTML = d);
  };
  if (
    (h.sideBySideRenderingFunction || (h.sideBySideRenderingFunction = x), S)
  ) {
    var c = o.options.previewRender(o.value(), C);
    c != null && (C.innerHTML = c),
      h.on('update', h.sideBySideRenderingFunction);
  } else h.off('update', h.sideBySideRenderingFunction);
  h.refresh();
}
function Ji(o) {
  var h = o.codemirror,
    v = h.getWrapperElement(),
    C = o.toolbar_div,
    b = o.options.toolbar ? o.toolbarElements.preview : !1,
    S = v.lastChild,
    s = h.getWrapperElement().nextSibling;
  if (
    (s.classList.contains('editor-preview-active-side') && bn(o),
    !S || !S.classList.contains('editor-preview-full'))
  ) {
    if (
      ((S = document.createElement('div')),
      (S.className = 'editor-preview-full'),
      o.options.previewClass)
    )
      if (Array.isArray(o.options.previewClass))
        for (var p = 0; p < o.options.previewClass.length; p++)
          S.classList.add(o.options.previewClass[p]);
      else
        typeof o.options.previewClass == 'string' &&
          S.classList.add(o.options.previewClass);
    v.appendChild(S);
  }
  S.classList.contains('editor-preview-active')
    ? (S.classList.remove('editor-preview-active'),
      b &&
        (b.classList.remove('active'),
        C.classList.remove('disabled-for-preview')))
    : (setTimeout(function () {
        S.classList.add('editor-preview-active');
      }, 1),
      b &&
        (b.classList.add('active'), C.classList.add('disabled-for-preview')));
  var g = o.options.previewRender(o.value(), S);
  g !== null && (S.innerHTML = g);
}
function Rr(o, h, v, C) {
  if (
    !o.getWrapperElement().lastChild.classList.contains('editor-preview-active')
  ) {
    var b,
      S = v[0],
      s = v[1],
      p = {},
      g = {};
    Object.assign(p, o.getCursor('start')),
      Object.assign(g, o.getCursor('end')),
      C && ((S = S.replace('#url#', C)), (s = s.replace('#url#', C))),
      h
        ? ((b = o.getLine(p.line)),
          (S = b.slice(0, p.ch)),
          (s = b.slice(p.ch)),
          o.replaceRange(S + s, { line: p.line, ch: 0 }))
        : ((b = o.getSelection()),
          o.replaceSelection(S + b + s),
          (p.ch += S.length),
          p !== g && (g.ch += S.length)),
      o.setSelection(p, g),
      o.focus();
  }
}
function Lr(o, h, v) {
  if (
    !o.getWrapperElement().lastChild.classList.contains('editor-preview-active')
  ) {
    for (
      var C = o.getCursor('start'), b = o.getCursor('end'), S = C.line;
      S <= b.line;
      S++
    )
      (function (s) {
        var p = o.getLine(s),
          g = p.search(/[^#]/);
        h !== void 0
          ? g <= 0
            ? h == 'bigger'
              ? (p = '###### ' + p)
              : (p = '# ' + p)
            : g == 6 && h == 'smaller'
              ? (p = p.substr(7))
              : g == 1 && h == 'bigger'
                ? (p = p.substr(2))
                : h == 'bigger'
                  ? (p = p.substr(1))
                  : (p = '#' + p)
          : g <= 0
            ? (p = '#'.repeat(v) + ' ' + p)
            : g == v
              ? (p = p.substr(g + 1))
              : (p = '#'.repeat(v) + ' ' + p.substr(g + 1)),
          o.replaceRange(
            p,
            { line: s, ch: 0 },
            { line: s, ch: 99999999999999 }
          );
      })(S);
    o.focus();
  }
}
function la(o, h, v) {
  if (
    !o.getWrapperElement().lastChild.classList.contains('editor-preview-active')
  ) {
    for (
      var C = /^(\s*)(\*|-|\+|\d*\.)(\s+)/,
        b = /^\s*/,
        S = Tr(o),
        s = o.getCursor('start'),
        p = o.getCursor('end'),
        g = { quote: /^(\s*)>\s+/, 'unordered-list': C, 'ordered-list': C },
        L = function (E, z) {
          var y = { quote: '>', 'unordered-list': v, 'ordered-list': '%%i.' };
          return y[E].replace('%%i', z);
        },
        x = function (E, z) {
          var y = {
              quote: '>',
              'unordered-list': '\\' + v,
              'ordered-list': '\\d+.',
            },
            R = new RegExp(y[E]);
          return z && R.test(z);
        },
        c = function (E, z, y) {
          var R = C.exec(z),
            M = L(E, d);
          return (
            R !== null
              ? (x(E, R[2]) && (M = ''),
                (z = R[1] + M + R[3] + z.replace(b, '').replace(g[E], '$1')))
              : y == !1 && (z = M + ' ' + z),
            z
          );
        },
        d = 1,
        w = s.line;
      w <= p.line;
      w++
    )
      (function (E) {
        var z = o.getLine(E);
        S[h]
          ? (z = z.replace(g[h], '$1'))
          : (h == 'unordered-list' && (z = c('ordered-list', z, !0)),
            (z = c(h, z, !1)),
            (d += 1)),
          o.replaceRange(
            z,
            { line: E, ch: 0 },
            { line: E, ch: 99999999999999 }
          );
      })(w);
    o.focus();
  }
}
function xc(o, h, v, C) {
  if (!(!o.codemirror || o.isPreviewActive())) {
    var b = o.codemirror,
      S = Tr(b),
      s = S[h];
    if (!s) {
      Rr(b, s, v, C);
      return;
    }
    var p = b.getCursor('start'),
      g = b.getCursor('end'),
      L = b.getLine(p.line),
      x = L.slice(0, p.ch),
      c = L.slice(p.ch);
    h == 'link'
      ? (x = x.replace(/(.*)[^!]\[/, '$1'))
      : h == 'image' && (x = x.replace(/(.*)!\[$/, '$1')),
      (c = c.replace(/]\(.*?\)/, '')),
      b.replaceRange(
        x + c,
        { line: p.line, ch: 0 },
        { line: p.line, ch: 99999999999999 }
      ),
      (p.ch -= v[0].length),
      p !== g && (g.ch -= v[0].length),
      b.setSelection(p, g),
      b.focus();
  }
}
function sa(o, h, v, C) {
  if (!(!o.codemirror || o.isPreviewActive())) {
    C = typeof C > 'u' ? v : C;
    var b = o.codemirror,
      S = Tr(b),
      s,
      p = v,
      g = C,
      L = b.getCursor('start'),
      x = b.getCursor('end');
    S[h]
      ? ((s = b.getLine(L.line)),
        (p = s.slice(0, L.ch)),
        (g = s.slice(L.ch)),
        h == 'bold'
          ? ((p = p.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, '')),
            (g = g.replace(/(\*\*|__)/, '')))
          : h == 'italic'
            ? ((p = p.replace(/(\*|_)(?![\s\S]*(\*|_))/, '')),
              (g = g.replace(/(\*|_)/, '')))
            : h == 'strikethrough' &&
              ((p = p.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, '')),
              (g = g.replace(/(\*\*|~~)/, ''))),
        b.replaceRange(
          p + g,
          { line: L.line, ch: 0 },
          { line: L.line, ch: 99999999999999 }
        ),
        h == 'bold' || h == 'strikethrough'
          ? ((L.ch -= 2), L !== x && (x.ch -= 2))
          : h == 'italic' && ((L.ch -= 1), L !== x && (x.ch -= 1)))
      : ((s = b.getSelection()),
        h == 'bold'
          ? ((s = s.split('**').join('')), (s = s.split('__').join('')))
          : h == 'italic'
            ? ((s = s.split('*').join('')), (s = s.split('_').join('')))
            : h == 'strikethrough' && (s = s.split('~~').join('')),
        b.replaceSelection(p + s + g),
        (L.ch += v.length),
        (x.ch = L.ch + s.length)),
      b.setSelection(L, x),
      b.focus();
  }
}
function Pd(o) {
  if (
    !o.getWrapperElement().lastChild.classList.contains('editor-preview-active')
  )
    for (
      var h = o.getCursor('start'), v = o.getCursor('end'), C, b = h.line;
      b <= v.line;
      b++
    )
      (C = o.getLine(b)),
        (C = C.replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, '')),
        o.replaceRange(C, { line: b, ch: 0 }, { line: b, ch: 99999999999999 });
}
function Ii(o, h) {
  if (Math.abs(o) < 1024) return '' + o + h[0];
  var v = 0;
  do (o /= 1024), ++v;
  while (Math.abs(o) >= 1024 && v < h.length);
  return '' + o.toFixed(1) + h[v];
}
function _c(o, h) {
  for (var v in h)
    Object.prototype.hasOwnProperty.call(h, v) &&
      (h[v] instanceof Array
        ? (o[v] = h[v].concat(o[v] instanceof Array ? o[v] : []))
        : h[v] !== null &&
            typeof h[v] == 'object' &&
            h[v].constructor === Object
          ? (o[v] = _c(o[v] || {}, h[v]))
          : (o[v] = h[v]));
  return o;
}
function fr(o) {
  for (var h = 1; h < arguments.length; h++) o = _c(o, arguments[h]);
  return o;
}
function gc(o) {
  var h =
      /[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
    v = o.match(h),
    C = 0;
  if (v === null) return C;
  for (var b = 0; b < v.length; b++)
    v[b].charCodeAt(0) >= 19968 ? (C += v[b].length) : (C += 1);
  return C;
}
function Te(o) {
  (o = o || {}), (o.parent = this);
  var h = !0;
  if (
    (o.autoDownloadFontAwesome === !1 && (h = !1),
    o.autoDownloadFontAwesome !== !0)
  )
    for (var v = document.styleSheets, C = 0; C < v.length; C++)
      v[C].href &&
        v[C].href.indexOf('//maxcdn.bootstrapcdn.com/font-awesome/') > -1 &&
        (h = !1);
  if (h) {
    var b = document.createElement('link');
    (b.rel = 'stylesheet'),
      (b.href =
        'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'),
      document.getElementsByTagName('head')[0].appendChild(b);
  }
  if (o.element) this.element = o.element;
  else if (o.element === null) {
    console.log('EasyMDE: Error. No element was found.');
    return;
  }
  if (o.toolbar === void 0) {
    o.toolbar = [];
    for (var S in Pr)
      Object.prototype.hasOwnProperty.call(Pr, S) &&
        (S.indexOf('separator-') != -1 && o.toolbar.push('|'),
        (Pr[S].default === !0 ||
          (o.showIcons &&
            o.showIcons.constructor === Array &&
            o.showIcons.indexOf(S) != -1)) &&
          o.toolbar.push(S));
  }
  if (
    (Object.prototype.hasOwnProperty.call(o, 'previewClass') ||
      (o.previewClass = 'editor-preview'),
    Object.prototype.hasOwnProperty.call(o, 'status') ||
      ((o.status = ['autosave', 'lines', 'words', 'cursor']),
      o.uploadImage && o.status.unshift('upload-image')),
    o.previewRender ||
      (o.previewRender = function (p) {
        return this.parent.markdown(p);
      }),
    (o.parsingConfig = fr({ highlightFormatting: !0 }, o.parsingConfig || {})),
    (o.insertTexts = fr({}, jd, o.insertTexts || {})),
    (o.promptTexts = fr({}, Rd, o.promptTexts || {})),
    (o.blockStyles = fr({}, Bd, o.blockStyles || {})),
    o.autosave != null &&
      (o.autosave.timeFormat = fr({}, Hd, o.autosave.timeFormat || {})),
    (o.iconClassMap = fr({}, et, o.iconClassMap || {})),
    (o.shortcuts = fr({}, Ad, o.shortcuts || {})),
    (o.maxHeight = o.maxHeight || void 0),
    (o.direction = o.direction || 'ltr'),
    typeof o.maxHeight < 'u'
      ? (o.minHeight = o.maxHeight)
      : (o.minHeight = o.minHeight || '300px'),
    (o.errorCallback =
      o.errorCallback ||
      function (p) {
        alert(p);
      }),
    (o.uploadImage = o.uploadImage || !1),
    (o.imageMaxSize = o.imageMaxSize || 2097152),
    (o.imageAccept =
      o.imageAccept || 'image/png, image/jpeg, image/gif, image/avif'),
    (o.imageTexts = fr({}, Wd, o.imageTexts || {})),
    (o.errorMessages = fr({}, Ud, o.errorMessages || {})),
    (o.imagePathAbsolute = o.imagePathAbsolute || !1),
    (o.imageCSRFName = o.imageCSRFName || 'csrfmiddlewaretoken'),
    (o.imageCSRFHeader = o.imageCSRFHeader || !1),
    o.autosave != null &&
      o.autosave.unique_id != null &&
      o.autosave.unique_id != '' &&
      (o.autosave.uniqueId = o.autosave.unique_id),
    o.overlayMode &&
      o.overlayMode.combine === void 0 &&
      (o.overlayMode.combine = !0),
    (this.options = o),
    this.render(),
    o.initialValue &&
      (!this.options.autosave ||
        this.options.autosave.foundSavedValue !== !0) &&
      this.value(o.initialValue),
    o.uploadImage)
  ) {
    var s = this;
    this.codemirror.on('dragenter', function (p, g) {
      s.updateStatusBar('upload-image', s.options.imageTexts.sbOnDragEnter),
        g.stopPropagation(),
        g.preventDefault();
    }),
      this.codemirror.on('dragend', function (p, g) {
        s.updateStatusBar('upload-image', s.options.imageTexts.sbInit),
          g.stopPropagation(),
          g.preventDefault();
      }),
      this.codemirror.on('dragleave', function (p, g) {
        s.updateStatusBar('upload-image', s.options.imageTexts.sbInit),
          g.stopPropagation(),
          g.preventDefault();
      }),
      this.codemirror.on('dragover', function (p, g) {
        s.updateStatusBar('upload-image', s.options.imageTexts.sbOnDragEnter),
          g.stopPropagation(),
          g.preventDefault();
      }),
      this.codemirror.on('drop', function (p, g) {
        g.stopPropagation(),
          g.preventDefault(),
          o.imageUploadFunction
            ? s.uploadImagesUsingCustomFunction(
                o.imageUploadFunction,
                g.dataTransfer.files
              )
            : s.uploadImages(g.dataTransfer.files);
      }),
      this.codemirror.on('paste', function (p, g) {
        o.imageUploadFunction
          ? s.uploadImagesUsingCustomFunction(
              o.imageUploadFunction,
              g.clipboardData.files
            )
          : s.uploadImages(g.clipboardData.files);
      });
  }
}
function kc() {
  if (typeof localStorage == 'object')
    try {
      localStorage.setItem('smde_localStorage', 1),
        localStorage.removeItem('smde_localStorage');
    } catch {
      return !1;
    }
  else return !1;
  return !0;
}
var mc,
  Md,
  Vn,
  Ad,
  Dd,
  ra,
  hc,
  et,
  Pr,
  jd,
  Rd,
  Hd,
  Bd,
  Wd,
  Ud,
  wc = Cd(() => {
    (mc = /Mac/.test(navigator.platform)),
      (Md = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g)),
      (Vn = {
        toggleBold: Fi,
        toggleItalic: Ni,
        drawLink: Gi,
        toggleHeadingSmaller: Jn,
        toggleHeadingBigger: Ri,
        drawImage: Zi,
        toggleBlockquote: ji,
        toggleOrderedList: $i,
        toggleUnorderedList: Ui,
        toggleCodeBlock: Pi,
        togglePreview: Ji,
        toggleStrikethrough: Oi,
        toggleHeading1: Hi,
        toggleHeading2: Bi,
        toggleHeading3: Wi,
        toggleHeading4: na,
        toggleHeading5: ia,
        toggleHeading6: oa,
        cleanBlock: Ki,
        drawTable: Xi,
        drawHorizontalRule: Yi,
        undo: Qi,
        redo: Vi,
        toggleSideBySide: bn,
        toggleFullScreen: jr,
      }),
      (Ad = {
        toggleBold: 'Cmd-B',
        toggleItalic: 'Cmd-I',
        drawLink: 'Cmd-K',
        toggleHeadingSmaller: 'Cmd-H',
        toggleHeadingBigger: 'Shift-Cmd-H',
        toggleHeading1: 'Ctrl+Alt+1',
        toggleHeading2: 'Ctrl+Alt+2',
        toggleHeading3: 'Ctrl+Alt+3',
        toggleHeading4: 'Ctrl+Alt+4',
        toggleHeading5: 'Ctrl+Alt+5',
        toggleHeading6: 'Ctrl+Alt+6',
        cleanBlock: 'Cmd-E',
        drawImage: 'Cmd-Alt-I',
        toggleBlockquote: "Cmd-'",
        toggleOrderedList: 'Cmd-Alt-L',
        toggleUnorderedList: 'Cmd-L',
        toggleCodeBlock: 'Cmd-Alt-C',
        togglePreview: 'Cmd-P',
        toggleSideBySide: 'F9',
        toggleFullScreen: 'F11',
      }),
      (Dd = function (o) {
        for (var h in Vn) if (Vn[h] === o) return h;
        return null;
      }),
      (ra = function () {
        var o = !1;
        return (
          (function (h) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
              h
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                h.substr(0, 4)
              )) &&
              (o = !0);
          })(navigator.userAgent || navigator.vendor || window.opera),
          o
        );
      });
    hc = '';
    (et = {
      bold: 'fa fa-bold',
      italic: 'fa fa-italic',
      strikethrough: 'fa fa-strikethrough',
      heading: 'fa fa-header fa-heading',
      'heading-smaller': 'fa fa-header fa-heading header-smaller',
      'heading-bigger': 'fa fa-header fa-heading header-bigger',
      'heading-1': 'fa fa-header fa-heading header-1',
      'heading-2': 'fa fa-header fa-heading header-2',
      'heading-3': 'fa fa-header fa-heading header-3',
      code: 'fa fa-code',
      quote: 'fa fa-quote-left',
      'ordered-list': 'fa fa-list-ol',
      'unordered-list': 'fa fa-list-ul',
      'clean-block': 'fa fa-eraser',
      link: 'fa fa-link',
      image: 'fa fa-image',
      'upload-image': 'fa fa-image',
      table: 'fa fa-table',
      'horizontal-rule': 'fa fa-minus',
      preview: 'fa fa-eye',
      'side-by-side': 'fa fa-columns',
      fullscreen: 'fa fa-arrows-alt',
      guide: 'fa fa-question-circle',
      undo: 'fa fa-undo',
      redo: 'fa fa-repeat fa-redo',
    }),
      (Pr = {
        bold: {
          name: 'bold',
          action: Fi,
          className: et.bold,
          title: 'Bold',
          default: !0,
        },
        italic: {
          name: 'italic',
          action: Ni,
          className: et.italic,
          title: 'Italic',
          default: !0,
        },
        strikethrough: {
          name: 'strikethrough',
          action: Oi,
          className: et.strikethrough,
          title: 'Strikethrough',
        },
        heading: {
          name: 'heading',
          action: Jn,
          className: et.heading,
          title: 'Heading',
          default: !0,
        },
        'heading-smaller': {
          name: 'heading-smaller',
          action: Jn,
          className: et['heading-smaller'],
          title: 'Smaller Heading',
        },
        'heading-bigger': {
          name: 'heading-bigger',
          action: Ri,
          className: et['heading-bigger'],
          title: 'Bigger Heading',
        },
        'heading-1': {
          name: 'heading-1',
          action: Hi,
          className: et['heading-1'],
          title: 'Big Heading',
        },
        'heading-2': {
          name: 'heading-2',
          action: Bi,
          className: et['heading-2'],
          title: 'Medium Heading',
        },
        'heading-3': {
          name: 'heading-3',
          action: Wi,
          className: et['heading-3'],
          title: 'Small Heading',
        },
        'separator-1': { name: 'separator-1' },
        code: { name: 'code', action: Pi, className: et.code, title: 'Code' },
        quote: {
          name: 'quote',
          action: ji,
          className: et.quote,
          title: 'Quote',
          default: !0,
        },
        'unordered-list': {
          name: 'unordered-list',
          action: Ui,
          className: et['unordered-list'],
          title: 'Generic List',
          default: !0,
        },
        'ordered-list': {
          name: 'ordered-list',
          action: $i,
          className: et['ordered-list'],
          title: 'Numbered List',
          default: !0,
        },
        'clean-block': {
          name: 'clean-block',
          action: Ki,
          className: et['clean-block'],
          title: 'Clean block',
        },
        'separator-2': { name: 'separator-2' },
        link: {
          name: 'link',
          action: Gi,
          className: et.link,
          title: 'Create Link',
          default: !0,
        },
        image: {
          name: 'image',
          action: Zi,
          className: et.image,
          title: 'Insert Image',
          default: !0,
        },
        'upload-image': {
          name: 'upload-image',
          action: aa,
          className: et['upload-image'],
          title: 'Import an image',
        },
        table: {
          name: 'table',
          action: Xi,
          className: et.table,
          title: 'Insert Table',
        },
        'horizontal-rule': {
          name: 'horizontal-rule',
          action: Yi,
          className: et['horizontal-rule'],
          title: 'Insert Horizontal Line',
        },
        'separator-3': { name: 'separator-3' },
        preview: {
          name: 'preview',
          action: Ji,
          className: et.preview,
          noDisable: !0,
          title: 'Toggle Preview',
          default: !0,
        },
        'side-by-side': {
          name: 'side-by-side',
          action: bn,
          className: et['side-by-side'],
          noDisable: !0,
          noMobile: !0,
          title: 'Toggle Side by Side',
          default: !0,
        },
        fullscreen: {
          name: 'fullscreen',
          action: jr,
          className: et.fullscreen,
          noDisable: !0,
          noMobile: !0,
          title: 'Toggle Fullscreen',
          default: !0,
        },
        'separator-4': { name: 'separator-4' },
        guide: {
          name: 'guide',
          action: 'https://www.markdownguide.org/basic-syntax/',
          className: et.guide,
          noDisable: !0,
          title: 'Markdown Guide',
          default: !0,
        },
        'separator-5': { name: 'separator-5' },
        undo: {
          name: 'undo',
          action: Qi,
          className: et.undo,
          noDisable: !0,
          title: 'Undo',
        },
        redo: {
          name: 'redo',
          action: Vi,
          className: et.redo,
          noDisable: !0,
          title: 'Redo',
        },
      }),
      (jd = {
        link: ['[', '](#url#)'],
        image: ['![', '](#url#)'],
        uploadedImage: ['![](#url#)', ''],
        table: [
          '',
          `

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |

`,
        ],
        horizontalRule: [
          '',
          `

-----

`,
        ],
      }),
      (Rd = { link: 'URL for the link:', image: 'URL of the image:' }),
      (Hd = {
        locale: 'en-US',
        format: { hour: '2-digit', minute: '2-digit' },
      }),
      (Bd = { bold: '**', code: '```', italic: '*' }),
      (Wd = {
        sbInit: 'Attach files by drag and dropping or pasting from clipboard.',
        sbOnDragEnter: 'Drop image to upload it.',
        sbOnDrop: 'Uploading image #images_names#...',
        sbProgress: 'Uploading #file_name#: #progress#%',
        sbOnUploaded: 'Uploaded #image_name#',
        sizeUnits: ' B, KB, MB',
      }),
      (Ud = {
        noFileGiven: 'You must select a file.',
        typeNotAllowed: 'This image type is not allowed.',
        fileTooLarge: `Image #image_name# is too big (#image_size#).
Maximum file size is #image_max_size#.`,
        importError:
          'Something went wrong when uploading the image #image_name#.',
      });
    Te.prototype.uploadImages = function (o, h, v) {
      if (o.length !== 0) {
        for (var C = [], b = 0; b < o.length; b++)
          C.push(o[b].name), this.uploadImage(o[b], h, v);
        this.updateStatusBar(
          'upload-image',
          this.options.imageTexts.sbOnDrop.replace(
            '#images_names#',
            C.join(', ')
          )
        );
      }
    };
    Te.prototype.uploadImagesUsingCustomFunction = function (o, h) {
      if (h.length !== 0) {
        for (var v = [], C = 0; C < h.length; C++)
          v.push(h[C].name), this.uploadImageUsingCustomFunction(o, h[C]);
        this.updateStatusBar(
          'upload-image',
          this.options.imageTexts.sbOnDrop.replace(
            '#images_names#',
            v.join(', ')
          )
        );
      }
    };
    Te.prototype.updateStatusBar = function (o, h) {
      if (this.gui.statusbar) {
        var v = this.gui.statusbar.getElementsByClassName(o);
        v.length === 1
          ? (this.gui.statusbar.getElementsByClassName(o)[0].textContent = h)
          : v.length === 0
            ? console.log('EasyMDE: status bar item ' + o + ' was not found.')
            : console.log(
                'EasyMDE: Several status bar items named ' + o + ' was found.'
              );
      }
    };
    Te.prototype.markdown = function (o) {
      if (marked) {
        var h;
        if (
          (this.options &&
          this.options.renderingConfig &&
          this.options.renderingConfig.markedOptions
            ? (h = this.options.renderingConfig.markedOptions)
            : (h = {}),
          this.options &&
          this.options.renderingConfig &&
          this.options.renderingConfig.singleLineBreaks === !1
            ? (h.breaks = !1)
            : (h.breaks = !0),
          this.options &&
            this.options.renderingConfig &&
            this.options.renderingConfig.codeSyntaxHighlighting === !0)
        ) {
          var v = this.options.renderingConfig.hljs || window.hljs;
          v &&
            (h.highlight = function (b, S) {
              return S && v.getLanguage(S)
                ? v.highlight(S, b).value
                : v.highlightAuto(b).value;
            });
        }
        marked.setOptions(h);
        var C = marked.parse(o);
        return (
          this.options.renderingConfig &&
            typeof this.options.renderingConfig.sanitizerFunction ==
              'function' &&
            (C = this.options.renderingConfig.sanitizerFunction.call(this, C)),
          (C = qd(C)),
          (C = Id(C)),
          C
        );
      }
    };
    Te.prototype.render = function (o) {
      if (
        (o ||
          (o = this.element || document.getElementsByTagName('textarea')[0]),
        this._rendered && this._rendered === o)
      )
        return;
      this.element = o;
      var h = this.options,
        v = this,
        C = {};
      for (var b in h.shortcuts)
        h.shortcuts[b] !== null &&
          Vn[b] !== null &&
          (function (y) {
            C[vc(h.shortcuts[y])] = function () {
              var R = Vn[y];
              typeof R == 'function'
                ? R(v)
                : typeof R == 'string' && window.open(R, '_blank');
            };
          })(b);
      (C.Enter = 'newlineAndIndentContinueMarkdownList'),
        (C.Tab = 'tabAndIndentMarkdownList'),
        (C['Shift-Tab'] = 'shiftTabAndUnindentMarkdownList'),
        (C.Esc = function (y) {
          y.getOption('fullScreen') && jr(v);
        }),
        (this.documentOnKeyDown = function (y) {
          (y = y || window.event),
            y.keyCode == 27 && v.codemirror.getOption('fullScreen') && jr(v);
        }),
        document.addEventListener('keydown', this.documentOnKeyDown, !1);
      var S, s;
      h.overlayMode
        ? (CodeMirror.defineMode('overlay-mode', function (y) {
            return CodeMirror.overlayMode(
              CodeMirror.getMode(
                y,
                h.spellChecker !== !1 ? 'spell-checker' : 'gfm'
              ),
              h.overlayMode.mode,
              h.overlayMode.combine
            );
          }),
          (S = 'overlay-mode'),
          (s = h.parsingConfig),
          (s.gitHubSpice = !1))
        : ((S = h.parsingConfig), (S.name = 'gfm'), (S.gitHubSpice = !1)),
        h.spellChecker !== !1 &&
          ((S = 'spell-checker'),
          (s = h.parsingConfig),
          (s.name = 'gfm'),
          (s.gitHubSpice = !1),
          typeof h.spellChecker == 'function'
            ? h.spellChecker({ codeMirrorInstance: CodeMirror })
            : CodeMirrorSpellChecker({ codeMirrorInstance: CodeMirror }));
      function p(y, R, M) {
        return { addNew: !1 };
      }
      if (
        ((CodeMirror.getMode('php').mime = 'text/x-php'),
        (this.codemirror = CodeMirror.fromTextArea(o, {
          mode: S,
          backdrop: s,
          theme: h.theme != null ? h.theme : 'easymde',
          tabSize: h.tabSize != null ? h.tabSize : 2,
          indentUnit: h.tabSize != null ? h.tabSize : 2,
          indentWithTabs: h.indentWithTabs !== !1,
          lineNumbers: h.lineNumbers === !0,
          autofocus: h.autofocus === !0,
          extraKeys: C,
          direction: h.direction,
          lineWrapping: h.lineWrapping !== !1,
          allowDropFileTypes: ['text/plain'],
          placeholder: h.placeholder || o.getAttribute('placeholder') || '',
          styleSelectedText:
            h.styleSelectedText != null ? h.styleSelectedText : !ra(),
          scrollbarStyle:
            h.scrollbarStyle != null ? h.scrollbarStyle : 'native',
          configureMouse: p,
          inputStyle:
            h.inputStyle != null
              ? h.inputStyle
              : ra()
                ? 'contenteditable'
                : 'textarea',
          spellcheck: h.nativeSpellcheck != null ? h.nativeSpellcheck : !0,
          autoRefresh: h.autoRefresh != null ? h.autoRefresh : !1,
        })),
        (this.codemirror.getScrollerElement().style.minHeight = h.minHeight),
        typeof h.maxHeight < 'u' &&
          (this.codemirror.getScrollerElement().style.height = h.maxHeight),
        h.forceSync === !0)
      ) {
        var g = this.codemirror;
        g.on('change', function () {
          g.save();
        });
      }
      this.gui = {};
      var L = document.createElement('div');
      L.classList.add('EasyMDEContainer'),
        L.setAttribute('role', 'application');
      var x = this.codemirror.getWrapperElement();
      x.parentNode.insertBefore(L, x),
        L.appendChild(x),
        h.toolbar !== !1 && (this.gui.toolbar = this.createToolbar()),
        h.status !== !1 && (this.gui.statusbar = this.createStatusbar()),
        h.autosave != null &&
          h.autosave.enabled === !0 &&
          (this.autosave(),
          this.codemirror.on('change', function () {
            clearTimeout(v._autosave_timeout),
              (v._autosave_timeout = setTimeout(
                function () {
                  v.autosave();
                },
                v.options.autosave.submit_delay ||
                  v.options.autosave.delay ||
                  1e3
              ));
          }));
      function c(y, R) {
        var M,
          H = window
            .getComputedStyle(document.querySelector('.CodeMirror-sizer'))
            .width.replace('px', '');
        return y < H ? (M = R + 'px') : (M = (R / y) * 100 + '%'), M;
      }
      var d = this;
      function w(y, R) {
        y.setAttribute('data-img-src', R.url),
          y.setAttribute(
            'style',
            '--bg-image:url(' +
              R.url +
              ');--width:' +
              R.naturalWidth +
              'px;--height:' +
              c(R.naturalWidth, R.naturalHeight)
          ),
          d.codemirror.setSize();
      }
      function E() {
        h.previewImagesInEditor &&
          L.querySelectorAll('.cm-image-marker').forEach(function (y) {
            var R = y.parentElement;
            if (
              R.innerText.match(/^!\[.*?\]\(.*\)/g) &&
              !R.hasAttribute('data-img-src')
            ) {
              var M = R.innerText.match('\\((.*)\\)');
              if (
                (window.EMDEimagesCache || (window.EMDEimagesCache = {}),
                M && M.length >= 2)
              ) {
                var H = M[1];
                if (h.imagesPreviewHandler) {
                  var Z = h.imagesPreviewHandler(M[1]);
                  typeof Z == 'string' && (H = Z);
                }
                if (window.EMDEimagesCache[H]) w(R, window.EMDEimagesCache[H]);
                else {
                  var ee = document.createElement('img');
                  (ee.onload = function () {
                    (window.EMDEimagesCache[H] = {
                      naturalWidth: ee.naturalWidth,
                      naturalHeight: ee.naturalHeight,
                      url: H,
                    }),
                      w(R, window.EMDEimagesCache[H]);
                  }),
                    (ee.src = H);
                }
              }
            }
          });
      }
      this.codemirror.on('update', function () {
        E();
      }),
        (this.gui.sideBySide = this.createSideBySide()),
        (this._rendered = this.element),
        (h.autofocus === !0 || o.autofocus) && this.codemirror.focus();
      var z = this.codemirror;
      setTimeout(
        function () {
          z.refresh();
        }.bind(z),
        0
      );
    };
    Te.prototype.cleanup = function () {
      document.removeEventListener('keydown', this.documentOnKeyDown);
    };
    Te.prototype.autosave = function () {
      if (kc()) {
        var o = this;
        if (
          this.options.autosave.uniqueId == null ||
          this.options.autosave.uniqueId == ''
        ) {
          console.log(
            'EasyMDE: You must set a uniqueId to use the autosave feature'
          );
          return;
        }
        this.options.autosave.binded !== !0 &&
          (o.element.form != null &&
            o.element.form != null &&
            o.element.form.addEventListener('submit', function () {
              clearTimeout(o.autosaveTimeoutId),
                (o.autosaveTimeoutId = void 0),
                localStorage.removeItem('smde_' + o.options.autosave.uniqueId);
            }),
          (this.options.autosave.binded = !0)),
          this.options.autosave.loaded !== !0 &&
            (typeof localStorage.getItem(
              'smde_' + this.options.autosave.uniqueId
            ) == 'string' &&
              localStorage.getItem('smde_' + this.options.autosave.uniqueId) !=
                '' &&
              (this.codemirror.setValue(
                localStorage.getItem('smde_' + this.options.autosave.uniqueId)
              ),
              (this.options.autosave.foundSavedValue = !0)),
            (this.options.autosave.loaded = !0));
        var h = o.value();
        h !== ''
          ? localStorage.setItem('smde_' + this.options.autosave.uniqueId, h)
          : localStorage.removeItem('smde_' + this.options.autosave.uniqueId);
        var v = document.getElementById('autosaved');
        if (v != null && v != null && v != '') {
          var C = new Date(),
            b = new Intl.DateTimeFormat(
              [this.options.autosave.timeFormat.locale, 'en-US'],
              this.options.autosave.timeFormat.format
            ).format(C),
            S =
              this.options.autosave.text == null
                ? 'Autosaved: '
                : this.options.autosave.text;
          v.innerHTML = S + b;
        }
      } else
        console.log('EasyMDE: localStorage not available, cannot autosave');
    };
    Te.prototype.clearAutosavedValue = function () {
      if (kc()) {
        if (
          this.options.autosave == null ||
          this.options.autosave.uniqueId == null ||
          this.options.autosave.uniqueId == ''
        ) {
          console.log(
            'EasyMDE: You must set a uniqueId to clear the autosave value'
          );
          return;
        }
        localStorage.removeItem('smde_' + this.options.autosave.uniqueId);
      } else
        console.log('EasyMDE: localStorage not available, cannot autosave');
    };
    Te.prototype.openBrowseFileWindow = function (o, h) {
      var v = this,
        C = this.gui.toolbar.getElementsByClassName('imageInput')[0];
      C.click();
      function b(S) {
        v.options.imageUploadFunction
          ? v.uploadImagesUsingCustomFunction(
              v.options.imageUploadFunction,
              S.target.files
            )
          : v.uploadImages(S.target.files, o, h),
          C.removeEventListener('change', b);
      }
      C.addEventListener('change', b);
    };
    Te.prototype.uploadImage = function (o, h, v) {
      var C = this;
      h =
        h ||
        function (L) {
          yc(C, L);
        };
      function b(g) {
        C.updateStatusBar('upload-image', g),
          setTimeout(function () {
            C.updateStatusBar('upload-image', C.options.imageTexts.sbInit);
          }, 1e4),
          v && typeof v == 'function' && v(g),
          C.options.errorCallback(g);
      }
      function S(g) {
        var L = C.options.imageTexts.sizeUnits.split(',');
        return g
          .replace('#image_name#', o.name)
          .replace('#image_size#', Ii(o.size, L))
          .replace('#image_max_size#', Ii(C.options.imageMaxSize, L));
      }
      if (o.size > this.options.imageMaxSize) {
        b(S(this.options.errorMessages.fileTooLarge));
        return;
      }
      var s = new FormData();
      s.append('image', o),
        C.options.imageCSRFToken &&
          !C.options.imageCSRFHeader &&
          s.append(C.options.imageCSRFName, C.options.imageCSRFToken);
      var p = new XMLHttpRequest();
      (p.upload.onprogress = function (g) {
        if (g.lengthComputable) {
          var L = '' + Math.round((g.loaded * 100) / g.total);
          C.updateStatusBar(
            'upload-image',
            C.options.imageTexts.sbProgress
              .replace('#file_name#', o.name)
              .replace('#progress#', L)
          );
        }
      }),
        p.open('POST', this.options.imageUploadEndpoint),
        C.options.imageCSRFToken &&
          C.options.imageCSRFHeader &&
          p.setRequestHeader(C.options.imageCSRFName, C.options.imageCSRFToken),
        (p.onload = function () {
          try {
            var g = JSON.parse(this.responseText);
          } catch {
            console.error('EasyMDE: The server did not return a valid json.'),
              b(S(C.options.errorMessages.importError));
            return;
          }
          this.status === 200 && g && !g.error && g.data && g.data.filePath
            ? h(
                (C.options.imagePathAbsolute
                  ? ''
                  : window.location.origin + '/') + g.data.filePath
              )
            : g.error && g.error in C.options.errorMessages
              ? b(S(C.options.errorMessages[g.error]))
              : g.error
                ? b(S(g.error))
                : (console.error(
                    'EasyMDE: Received an unexpected response after uploading the image.' +
                      this.status +
                      ' (' +
                      this.statusText +
                      ')'
                  ),
                  b(S(C.options.errorMessages.importError)));
        }),
        (p.onerror = function (g) {
          console.error(
            'EasyMDE: An unexpected error occurred when trying to upload the image.' +
              g.target.status +
              ' (' +
              g.target.statusText +
              ')'
          ),
            b(C.options.errorMessages.importError);
        }),
        p.send(s);
    };
    Te.prototype.uploadImageUsingCustomFunction = function (o, h) {
      var v = this;
      function C(s) {
        yc(v, s);
      }
      function b(s) {
        var p = S(s);
        v.updateStatusBar('upload-image', p),
          setTimeout(function () {
            v.updateStatusBar('upload-image', v.options.imageTexts.sbInit);
          }, 1e4),
          v.options.errorCallback(p);
      }
      function S(s) {
        var p = v.options.imageTexts.sizeUnits.split(',');
        return s
          .replace('#image_name#', h.name)
          .replace('#image_size#', Ii(h.size, p))
          .replace('#image_max_size#', Ii(v.options.imageMaxSize, p));
      }
      o.apply(this, [h, C, b]);
    };
    Te.prototype.setPreviewMaxHeight = function () {
      var o = this.codemirror,
        h = o.getWrapperElement(),
        v = h.nextSibling,
        C = parseInt(window.getComputedStyle(h).paddingTop),
        b = parseInt(window.getComputedStyle(h).borderTopWidth),
        S = parseInt(this.options.maxHeight),
        s = S + C * 2 + b * 2,
        p = s.toString() + 'px';
      v.style.height = p;
    };
    Te.prototype.createSideBySide = function () {
      var o = this.codemirror,
        h = o.getWrapperElement(),
        v = h.nextSibling;
      if (!v || !v.classList.contains('editor-preview-side')) {
        if (
          ((v = document.createElement('div')),
          (v.className = 'editor-preview-side'),
          this.options.previewClass)
        )
          if (Array.isArray(this.options.previewClass))
            for (var C = 0; C < this.options.previewClass.length; C++)
              v.classList.add(this.options.previewClass[C]);
          else
            typeof this.options.previewClass == 'string' &&
              v.classList.add(this.options.previewClass);
        h.parentNode.insertBefore(v, h.nextSibling);
      }
      if (
        (typeof this.options.maxHeight < 'u' && this.setPreviewMaxHeight(),
        this.options.syncSideBySidePreviewScroll === !1)
      )
        return v;
      var b = !1,
        S = !1;
      return (
        o.on('scroll', function (s) {
          if (b) {
            b = !1;
            return;
          }
          S = !0;
          var p = s.getScrollInfo().height - s.getScrollInfo().clientHeight,
            g = parseFloat(s.getScrollInfo().top) / p,
            L = (v.scrollHeight - v.clientHeight) * g;
          v.scrollTop = L;
        }),
        (v.onscroll = function () {
          if (S) {
            S = !1;
            return;
          }
          b = !0;
          var s = v.scrollHeight - v.clientHeight,
            p = parseFloat(v.scrollTop) / s,
            g = (o.getScrollInfo().height - o.getScrollInfo().clientHeight) * p;
          o.scrollTo(0, g);
        }),
        v
      );
    };
    Te.prototype.createToolbar = function (o) {
      if (((o = o || this.options.toolbar), !(!o || o.length === 0))) {
        var h;
        for (h = 0; h < o.length; h++) Pr[o[h]] != null && (o[h] = Pr[o[h]]);
        var v = document.createElement('div');
        (v.className = 'editor-toolbar'), v.setAttribute('role', 'toolbar');
        var C = this,
          b = {};
        for (C.toolbar = o, h = 0; h < o.length; h++)
          if (
            !(o[h].name == 'guide' && C.options.toolbarGuideIcon === !1) &&
            !(
              C.options.hideIcons &&
              C.options.hideIcons.indexOf(o[h].name) != -1
            ) &&
            !(
              (o[h].name == 'fullscreen' || o[h].name == 'side-by-side') &&
              ra()
            )
          ) {
            if (o[h] === '|') {
              for (var S = !1, s = h + 1; s < o.length; s++)
                o[s] !== '|' &&
                  (!C.options.hideIcons ||
                    C.options.hideIcons.indexOf(o[s].name) == -1) &&
                  (S = !0);
              if (!S) continue;
            }
            (function (L) {
              var x;
              if (
                (L === '|'
                  ? (x = Nd())
                  : L.children
                    ? (x = Fd(L, C.options.toolbarTips, C.options.shortcuts, C))
                    : (x = qi(
                        L,
                        !0,
                        C.options.toolbarTips,
                        C.options.shortcuts,
                        'button',
                        C
                      )),
                (b[L.name || L] = x),
                v.appendChild(x),
                L.name === 'upload-image')
              ) {
                var c = document.createElement('input');
                (c.className = 'imageInput'),
                  (c.type = 'file'),
                  (c.multiple = !0),
                  (c.name = 'image'),
                  (c.accept = C.options.imageAccept),
                  (c.style.display = 'none'),
                  (c.style.opacity = 0),
                  v.appendChild(c);
              }
            })(o[h]);
          }
        (C.toolbar_div = v), (C.toolbarElements = b);
        var p = this.codemirror;
        p.on('cursorActivity', function () {
          var L = Tr(p);
          for (var x in b)
            (function (c) {
              var d = b[c];
              L[c]
                ? d.classList.add('active')
                : c != 'fullscreen' &&
                  c != 'side-by-side' &&
                  d.classList.remove('active');
            })(x);
        });
        var g = p.getWrapperElement();
        return g.parentNode.insertBefore(v, g), v;
      }
    };
    Te.prototype.createStatusbar = function (o) {
      o = o || this.options.status;
      var h = this.options,
        v = this.codemirror;
      if (!(!o || o.length === 0)) {
        var C = [],
          b,
          S,
          s,
          p;
        for (b = 0; b < o.length; b++)
          if (
            ((S = void 0), (s = void 0), (p = void 0), typeof o[b] == 'object')
          )
            C.push({
              className: o[b].className,
              defaultValue: o[b].defaultValue,
              onUpdate: o[b].onUpdate,
              onActivity: o[b].onActivity,
            });
          else {
            var g = o[b];
            g === 'words'
              ? ((p = function (w) {
                  w.innerHTML = gc(v.getValue());
                }),
                (S = function (w) {
                  w.innerHTML = gc(v.getValue());
                }))
              : g === 'lines'
                ? ((p = function (w) {
                    w.innerHTML = v.lineCount();
                  }),
                  (S = function (w) {
                    w.innerHTML = v.lineCount();
                  }))
                : g === 'cursor'
                  ? ((p = function (w) {
                      w.innerHTML = '1:1';
                    }),
                    (s = function (w) {
                      var E = v.getCursor(),
                        z = E.line + 1,
                        y = E.ch + 1;
                      w.innerHTML = z + ':' + y;
                    }))
                  : g === 'autosave'
                    ? (p = function (w) {
                        h.autosave != null &&
                          h.autosave.enabled === !0 &&
                          w.setAttribute('id', 'autosaved');
                      })
                    : g === 'upload-image' &&
                      (p = function (w) {
                        w.innerHTML = h.imageTexts.sbInit;
                      }),
              C.push({
                className: g,
                defaultValue: p,
                onUpdate: S,
                onActivity: s,
              });
          }
        var L = document.createElement('div');
        for (L.className = 'editor-statusbar', b = 0; b < C.length; b++) {
          var x = C[b],
            c = document.createElement('span');
          (c.className = x.className),
            typeof x.defaultValue == 'function' && x.defaultValue(c),
            typeof x.onUpdate == 'function' &&
              this.codemirror.on(
                'update',
                (function (w, E) {
                  return function () {
                    E.onUpdate(w);
                  };
                })(c, x)
              ),
            typeof x.onActivity == 'function' &&
              this.codemirror.on(
                'cursorActivity',
                (function (w, E) {
                  return function () {
                    E.onActivity(w);
                  };
                })(c, x)
              ),
            L.appendChild(c);
        }
        var d = this.codemirror.getWrapperElement();
        return d.parentNode.insertBefore(L, d.nextSibling), L;
      }
    };
    Te.prototype.value = function (o) {
      var h = this.codemirror;
      if (o === void 0) return h.getValue();
      if ((h.getDoc().setValue(o), this.isPreviewActive())) {
        var v = h.getWrapperElement(),
          C = v.lastChild,
          b = this.options.previewRender(o, C);
        b !== null && (C.innerHTML = b);
      }
      return this;
    };
    Te.toggleBold = Fi;
    Te.toggleItalic = Ni;
    Te.toggleStrikethrough = Oi;
    Te.toggleBlockquote = ji;
    Te.toggleHeadingSmaller = Jn;
    Te.toggleHeadingBigger = Ri;
    Te.toggleHeading1 = Hi;
    Te.toggleHeading2 = Bi;
    Te.toggleHeading3 = Wi;
    Te.toggleHeading4 = na;
    Te.toggleHeading5 = ia;
    Te.toggleHeading6 = oa;
    Te.toggleCodeBlock = Pi;
    Te.toggleUnorderedList = Ui;
    Te.toggleOrderedList = $i;
    Te.cleanBlock = Ki;
    Te.drawLink = Gi;
    Te.drawImage = Zi;
    Te.drawUploadedImage = aa;
    Te.drawTable = Xi;
    Te.drawHorizontalRule = Yi;
    Te.undo = Qi;
    Te.redo = Vi;
    Te.togglePreview = Ji;
    Te.toggleSideBySide = bn;
    Te.toggleFullScreen = jr;
    Te.prototype.toggleBold = function () {
      Fi(this);
    };
    Te.prototype.toggleItalic = function () {
      Ni(this);
    };
    Te.prototype.toggleStrikethrough = function () {
      Oi(this);
    };
    Te.prototype.toggleBlockquote = function () {
      ji(this);
    };
    Te.prototype.toggleHeadingSmaller = function () {
      Jn(this);
    };
    Te.prototype.toggleHeadingBigger = function () {
      Ri(this);
    };
    Te.prototype.toggleHeading1 = function () {
      Hi(this);
    };
    Te.prototype.toggleHeading2 = function () {
      Bi(this);
    };
    Te.prototype.toggleHeading3 = function () {
      Wi(this);
    };
    Te.prototype.toggleHeading4 = function () {
      na(this);
    };
    Te.prototype.toggleHeading5 = function () {
      ia(this);
    };
    Te.prototype.toggleHeading6 = function () {
      oa(this);
    };
    Te.prototype.toggleCodeBlock = function () {
      Pi(this);
    };
    Te.prototype.toggleUnorderedList = function () {
      Ui(this);
    };
    Te.prototype.toggleOrderedList = function () {
      $i(this);
    };
    Te.prototype.cleanBlock = function () {
      Ki(this);
    };
    Te.prototype.drawLink = function () {
      Gi(this);
    };
    Te.prototype.drawImage = function () {
      Zi(this);
    };
    Te.prototype.drawUploadedImage = function () {
      aa(this);
    };
    Te.prototype.drawTable = function () {
      Xi(this);
    };
    Te.prototype.drawHorizontalRule = function () {
      Yi(this);
    };
    Te.prototype.undo = function () {
      Qi(this);
    };
    Te.prototype.redo = function () {
      Vi(this);
    };
    Te.prototype.togglePreview = function () {
      Ji(this);
    };
    Te.prototype.toggleSideBySide = function () {
      bn(this);
    };
    Te.prototype.toggleFullScreen = function () {
      jr(this);
    };
    Te.prototype.isPreviewActive = function () {
      var o = this.codemirror,
        h = o.getWrapperElement(),
        v = h.lastChild;
      return v.classList.contains('editor-preview-active');
    };
    Te.prototype.isSideBySideActive = function () {
      var o = this.codemirror,
        h = o.getWrapperElement(),
        v = h.nextSibling;
      return v.classList.contains('editor-preview-active-side');
    };
    Te.prototype.isFullscreenActive = function () {
      var o = this.codemirror;
      return o.getOption('fullScreen');
    };
    Te.prototype.getState = function () {
      var o = this.codemirror;
      return Tr(o);
    };
    Te.prototype.toTextArea = function () {
      var o = this.codemirror,
        h = o.getWrapperElement(),
        v = h.parentNode;
      v &&
        (this.gui.toolbar && v.removeChild(this.gui.toolbar),
        this.gui.statusbar && v.removeChild(this.gui.statusbar),
        this.gui.sideBySide && v.removeChild(this.gui.sideBySide)),
        v.parentNode.insertBefore(h, v),
        v.remove(),
        o.toTextArea(),
        this.autosaveTimeoutId &&
          (clearTimeout(this.autosaveTimeoutId),
          (this.autosaveTimeoutId = void 0),
          this.clearAutosavedValue());
    };
    window.EasyMDE = Te;
  });
window.CodeMirror = We();
We();
Yn();
ps();
ms();
ys();
ks();
Vo();
Cs();
gn();
Ds();
Hs();
Ks();
eu();
nu();
Qn();
au();
vn();
uu();
du();
Jo();
gu();
bu();
_u();
Su();
Cu();
Mu();
qu();
Nu();
ea();
Hu();
Uu();
ta();
Xu();
cc();
mn();
pc();
wc();
CodeMirror.commands.tabAndIndentMarkdownList = function (o) {
  var h = o.listSelections(),
    v = h[0].head,
    C = o.getStateAfter(v.line),
    b = C.list !== !1;
  if (b) {
    o.execCommand('indentMore');
    return;
  }
  if (o.options.indentWithTabs) {
    o.execCommand('insertTab');
    return;
  }
  var S = Array(o.options.tabSize + 1).join(' ');
  o.replaceSelection(S);
};
CodeMirror.commands.shiftTabAndUnindentMarkdownList = function (o) {
  var h = o.listSelections(),
    v = h[0].head,
    C = o.getStateAfter(v.line),
    b = C.list !== !1;
  if (b) {
    o.execCommand('indentLess');
    return;
  }
  if (o.options.indentWithTabs) {
    o.execCommand('insertTab');
    return;
  }
  var S = Array(o.options.tabSize + 1).join(' ');
  o.replaceSelection(S);
};
function Kd({
  isLiveDebounced: o,
  isLiveOnBlur: h,
  liveDebounce: v,
  maxHeight: C,
  minHeight: b,
  placeholder: S,
  state: s,
  translations: p,
  toolbarButtons: g,
  uploadFileAttachmentUsing: L,
}) {
  return {
    editor: null,
    state: s,
    init: async function () {
      this.$root._editor &&
        (this.$root._editor.toTextArea(), (this.$root._editor = null)),
        (this.$root._editor = this.editor =
          new EasyMDE({
            autoDownloadFontAwesome: !1,
            autoRefresh: !0,
            autoSave: !1,
            element: this.$refs.editor,
            imageAccept: 'image/png, image/jpeg, image/gif, image/avif',
            imageUploadFunction: L,
            initialValue: this.state ?? '',
            maxHeight: C,
            minHeight: b,
            placeholder: S,
            previewImagesInEditor: !0,
            spellChecker: !1,
            status: [{ className: 'upload-image', defaultValue: '' }],
            toolbar: this.getToolbar(),
            uploadImage: !0,
          })),
        this.editor.codemirror.setOption(
          'direction',
          document.documentElement?.dir ?? 'ltr'
        ),
        this.editor.codemirror.on('changes', (x, c) => {
          try {
            let d = c[c.length - 1];
            if (d.origin === '+input') {
              let w = '(https://)',
                E = d.text[d.text.length - 1];
              if (E.endsWith(w) && E !== '[]' + w) {
                let z = d.from,
                  y = d.to,
                  M = d.text.length > 1 ? 0 : z.ch;
                setTimeout(() => {
                  x.setSelection(
                    { line: y.line, ch: M + E.lastIndexOf('(') + 1 },
                    { line: y.line, ch: M + E.lastIndexOf(')') }
                  );
                }, 25);
              }
            }
          } catch {}
        }),
        this.editor.codemirror.on(
          'change',
          Alpine.debounce(() => {
            this.editor &&
              ((this.state = this.editor.value()),
              o && this.$wire.call('$refresh'));
          }, v ?? 300)
        ),
        h &&
          this.editor.codemirror.on('blur', () => this.$wire.call('$refresh')),
        this.$watch('state', () => {
          this.editor &&
            (this.editor.codemirror.hasFocus() ||
              Alpine.raw(this.editor).value(this.state ?? ''));
        });
    },
    destroy: function () {
      this.editor.cleanup(), (this.editor = null);
    },
    getToolbar: function () {
      let x = [];
      return (
        g.includes('bold') &&
          x.push({
            name: 'bold',
            action: EasyMDE.toggleBold,
            title: p.toolbar_buttons?.bold,
          }),
        g.includes('italic') &&
          x.push({
            name: 'italic',
            action: EasyMDE.toggleItalic,
            title: p.toolbar_buttons?.italic,
          }),
        g.includes('strike') &&
          x.push({
            name: 'strikethrough',
            action: EasyMDE.toggleStrikethrough,
            title: p.toolbar_buttons?.strike,
          }),
        g.includes('link') &&
          x.push({
            name: 'link',
            action: EasyMDE.drawLink,
            title: p.toolbar_buttons?.link,
          }),
        ['bold', 'italic', 'strike', 'link'].some((c) => g.includes(c)) &&
          ['heading'].some((c) => g.includes(c)) &&
          x.push('|'),
        g.includes('heading') &&
          x.push({
            name: 'heading',
            action: EasyMDE.toggleHeadingSmaller,
            title: p.toolbar_buttons?.heading,
          }),
        ['heading'].some((c) => g.includes(c)) &&
          ['blockquote', 'codeBlock', 'bulletList', 'orderedList'].some((c) =>
            g.includes(c)
          ) &&
          x.push('|'),
        g.includes('blockquote') &&
          x.push({
            name: 'quote',
            action: EasyMDE.toggleBlockquote,
            title: p.toolbar_buttons?.blockquote,
          }),
        g.includes('codeBlock') &&
          x.push({
            name: 'code',
            action: EasyMDE.toggleCodeBlock,
            title: p.toolbar_buttons?.code_block,
          }),
        g.includes('bulletList') &&
          x.push({
            name: 'unordered-list',
            action: EasyMDE.toggleUnorderedList,
            title: p.toolbar_buttons?.bullet_list,
          }),
        g.includes('orderedList') &&
          x.push({
            name: 'ordered-list',
            action: EasyMDE.toggleOrderedList,
            title: p.toolbar_buttons?.ordered_list,
          }),
        ['blockquote', 'codeBlock', 'bulletList', 'orderedList'].some((c) =>
          g.includes(c)
        ) &&
          ['table', 'attachFiles'].some((c) => g.includes(c)) &&
          x.push('|'),
        g.includes('table') &&
          x.push({
            name: 'table',
            action: EasyMDE.drawTable,
            title: p.toolbar_buttons?.table,
          }),
        g.includes('attachFiles') &&
          x.push({
            name: 'upload-image',
            action: EasyMDE.drawUploadedImage,
            title: p.toolbar_buttons?.attach_files,
          }),
        ['table', 'attachFiles'].some((c) => g.includes(c)) &&
          ['undo', 'redo'].some((c) => g.includes(c)) &&
          x.push('|'),
        g.includes('undo') &&
          x.push({
            name: 'undo',
            action: EasyMDE.undo,
            title: p.toolbar_buttons?.undo,
          }),
        g.includes('redo') &&
          x.push({
            name: 'redo',
            action: EasyMDE.redo,
            title: p.toolbar_buttons?.redo,
          }),
        x
      );
    },
  };
}
export { Kd as default };
