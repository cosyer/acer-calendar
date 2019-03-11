import fortuneData from "./fortuneData";
export default function(year, month, day) {
  var e,
    n,
    o,
    t,
    r,
    d,
    l,
    g,
    i,
    s,
    c,
    m,
    u,
    b,
    f,
    h,
    p = {
      good: [],
      bad: []
    },
    good,
    bad,
    v,
    D,
    M,
    A,
    I,
    x,
    y,
    Y,
    k,
    q,
    w,
    F,
    V,
    j,
    z,
    B,
    C,
    E,
    G,
    H,
    J;
  for (
    C = 37621 * year + 539 * (month + 1) + day,
      A = fortuneData,
      g = function() {
        for (j = [], D = 1; D <= 50; D++) {
          j.push(D);
        }
        return j;
      }.apply(this),
      m = null,
      c = null,
      s = null,
      d = null,
      // e = [     2635,     333387,     1701,     1748,     267701,     694, 2391,
      // 133423,     1175,     396438,     3402,     3749,     331177, 1453,     694,
      // 201326,     2350,     465197,     3221,     3402, 400202,     2901, 1386,
      // 267611,     605,     2349,     137515, 2709,     464533,     1738, 2901,
      // 330421,     1242,     2651, 199255,     1323,     529706, 3733, 1706, 398762,
      //     2741, 1206,     267438,     2647,     1318,   204070,   3477, 461653,
      // 1386,     2413,     330077,     1197, 2637,     268877,   3365, 531109, 2900,
      //     2922,     398042,     2395,     1179, 267415, 2635, 661067, 1701, 1748,
      // 398772, 2742,     2391, 330031,     1175, 1611, 200010,     3749,   527717,
      // 1452, 2742,     332397,     2350,     3222,     268949, 3402, 3493, 133973,
      // 1386,     464219,     605,    2349,   334123, 2709, 2890, 267946, 2773,
      // 592565,     1210,    2651,  395863, 1323,   2707, 265877 ], x = [     0,  31,
      // 59,     90, 120,   151,    181,  212, 243, 273,     304,     334 ],
      n = function(a, e) {
        return (a >> e) & 1;
      },
      f = function() {
        var o, t, r, l, g, i, u, b, f, h;
        for (
          u = 1 <= arguments.length ? a.call(arguments, 0) : [],
            d = 3 !== u.length ? new Date() : new Date(u[0], u[1], u[2]),
            h = null,
            l = null,
            g = null,
            t = null,
            o = !1,
            f = d.getYear(),
            f < 1900 && (f += 1900),
            h =
              365 * (f - 1921) +
              Math.floor((f - 1921) / 4) +
              x[d.getMonth()] +
              d.getDate() -
              38,
            d.getYear() % 4 === 0 && d.getMonth() > 1 && h++,
            l = r = 0;
          r < 255;
          l = ++r
        ) {
          for (t = e[l] < 4095 ? 11 : 12, g = i = b = t; i >= 0; g = i += -1) {
            if (h <= 29 + n(e[l], g)) {
              o = !0;
              break;
            }
            h = h - 29 - n(e[l], g);
          }
          if (o) break;
        }
        if (
          ((m = 1921 + l),
          (c = t - g + 1),
          (s = h),
          12 === t &&
            (c === Math.floor(e[l] / 65536) + 1 && (c = 1 - c),
            c > Math.floor(e[l] / 65536) + 1))
        )
          return c--;
      },
      r = function() {
        var a;
        return (
          (a = ""),
          (a += H.charAt((m - 4) % 10)),
          (a += b.charAt((m - 4) % 12)),
          (a += ""),
          (a += G.charAt((m - 4) % 12)),
          (a += "年 "),
          c < 1
            ? ((a += "闰"), (a += Y.charAt(-c - 1)))
            : (a += Y.charAt(c - 1)),
          (a += "月"),
          (a += s < 11 ? "初" : s < 20 ? "十" : s < 30 ? "廿" : "三十"),
          (s % 10 === 0 && 10 !== s) || (a += q.charAt((s - 1) % 10)),
          a
        );
      },
      t = function(a, e, n) {
        return a < 1921 || a > 2020
          ? ""
          : ((e = parseInt(e) > 0 ? e - 1 : 11), f(a, e, n), r());
      },
      o = function() {
        return (
          u.getFullYear() +
          "年" +
          (1 + u.getMonth()) +
          "月" +
          u.getDate() +
          "日 星期" +
          ["日", "一", "二", "三", "四", "五", "六"][u.getDay()]
        );
      },
      z = function(a, e) {
        var n, o, t, r;
        for (
          t = a % 11117, n = o = 0, r = 25 + e;
          0 <= r ? o < r : o > r;
          n = 0 <= r ? ++o : --o
        )
          (t *= t), (t %= 11117);
        return t;
      },
      E = z(C, 8) % 100,
      B = z(C, 4) % 100,
      good = [],
      v = M = 0,
      F = (z(C, 9) % 3) + 2;
    0 <= F ? M < F : M > F;
    v = 0 <= F ? ++M : --M
  )
    (k = parseInt(0.01 * E * A.length, 10)),
      (l = A[k]),
      (I = parseInt((z(C, 3 + v) % 100) * 0.01 * g.length, 10)),
      good.push({
        img: g[I],
        label: l.name,
        good: l.good
      }),
      A.splice(k, 1),
      g.splice(I, 1);
  for (
    bad = [], v = w = 0, V = (z(C, 7) % 3) + 2;
    0 <= V ? w < V : w > V;
    v = 0 <= V ? ++w : --w
  )
    (k = parseInt(0.01 * B * A.length, 10)),
      (l = A[k]),
      (I = parseInt((z(C, 2 + v) % 100) * 0.01 * g.length, 10)),
      bad.push({
        img: g[I],
        label: l.name,
        bad: l.bad
      }),
      A.splice(k, 1),
      g.splice(I, 1);

  p.good = good;
  p.bad = bad;
  return p;
}
