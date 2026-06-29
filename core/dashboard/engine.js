/* core/dashboard/engine.js — общий движок рендера дашборда YKI.
   Язык-нейтральный: ВЕСЬ текст и pluralization берутся из window.DASHBOARD
   (поля `meta` и `ui`). Правится один раз для всех языковых дорожек.
   Ноль захардкоженных строк — это и устраняет merge-конфликты между языками. */
(function () {
  const D = window.DASHBOARD;
  if (!D) { document.body.innerHTML = '<p style="color:#c00;padding:20px">window.DASHBOARD не найден — подключи data.js перед engine.js</p>'; return; }
  const ui = D.ui || {};
  const $ = (s) => document.querySelector(s);
  const avg = (a) => a.length ? Math.round(a.reduce((s, x) => s + x.pct, 0) / a.length) : 0;
  const fmt = (n) => n + "%";

  // Метаданные документа — тоже из данных, чтобы обёртка index.html была одинаковой.
  if (D.meta && D.meta.htmlLang) document.documentElement.lang = D.meta.htmlLang;
  if (ui.title) document.title = ui.title;

  // Каркас страницы (динамические значения вставляются после).
  $("#app").innerHTML = `
    <div class="app">
      <header class="top">
        <div>
          <h1>${ui.title || ""}</h1>
          <div class="sub">${ui.sub || ""}</div>
        </div>
        <div class="pill" id="upd">—</div>
      </header>
      <div class="grid row-hero">
        <div class="card">
          <h2>${ui.sectionReady || ""} <span class="agg" id="readyPct">—</span></h2>
          <div class="ready">
            <div>
              <div class="big" id="readyBig">—<small>%</small></div>
              <div class="lab">${ui.readyLab || ""}</div>
            </div>
          </div>
          <div class="pillars" id="pillars"></div>
          <div class="legend">
            <span class="g"></span>${ui.legendDone || ""} &nbsp; <span class="r"></span>${ui.legendLeft || ""}
          </div>
        </div>
        <div class="card">
          <h2>${ui.sectionActivity || ""}</h2>
          <div class="activity-summary">
            ${ui.sessionsLabel || ""} <span id="actTotal">0</span> · ${ui.streakLabel || ""} <span id="actStreak">0</span>
          </div>
          <div class="calendar-wrapper"><div class="calendar-grid" id="calendarGrid"></div></div>
          <ul class="mlist" id="ms" style="margin-top:16px"></ul>
        </div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>${ui.pillarTitles[0]} <span class="agg" id="gAgg">—</span></h2>
        <div id="grammar"></div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>${ui.pillarTitles[1]} <span class="agg" id="cAgg">—</span></h2>
        <div id="constructions"></div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>${ui.pillarTitles[2]} <span class="agg" id="tAgg">—</span></h2>
        <div id="themes"></div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>${ui.sectionDelta || ""}</h2>
        <div class="delta-cols">
          <div><div class="delta-sum" id="todaySum"></div><div id="todayDelta"></div></div>
          <div><div class="delta-sum" id="weekSum"></div><div id="weekDelta"></div></div>
        </div>
      </div>
      <footer>${ui.footer || ""}</footer>
    </div>`;

  // Обновлено
  $("#upd").textContent = (ui.updatedPrefix || "") + (D.updated || "");

  // Календарь активности (20 недель, как GitHub-heatmap)
  const activity = D.activity || {};
  const grid = $("#calendarGrid");
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const currentMonday = new Date(today);
  currentMonday.setDate(today.getDate() + diffToMonday);
  const startDate = new Date(currentMonday);
  startDate.setDate(currentMonday.getDate() - 19 * 7);

  let html = "";
  let totalSessions = 0;
  const locale = (D.meta && D.meta.locale) || undefined;
  for (let i = 0; i < 20 * 7; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const dateStr = `${yyyy}-${mm}-${dd}`;
    const count = activity[dateStr] || 0;
    totalSessions += count;
    let level = 0;
    if (count === 1) level = 1;
    else if (count === 2) level = 2;
    else if (count > 2) level = 3;
    const isFuture = d > today;
    const cls = isFuture ? "future" : `level-${level}`;
    const options = { month: "short", day: "numeric" };
    const dateFormatted = d.toLocaleDateString(locale, options);
    const title = `${dateFormatted}: ${ui.fmtSessions ? ui.fmtSessions(count) : count}`;
    html += `<span class="${cls}" title="${title}"></span>`;
  }
  grid.innerHTML = html;
  $("#actTotal").textContent = totalSessions;
  $("#actStreak").textContent = ui.fmtStreak ? ui.fmtStreak(D.streak) : (D.streak || 0);

  // Три опоры + общая готовность
  const gAvg = avg(D.grammar), cAvg = avg(D.constructions), tAvg = avg(D.themes);
  const overall = Math.round((gAvg + cAvg + tAvg) / 3);
  $("#readyBig").innerHTML = overall + "<small>%</small>";
  $("#readyPct").textContent = fmt(overall);
  $("#gAgg").textContent = fmt(gAvg);
  $("#cAgg").textContent = fmt(cAvg);
  $("#tAgg").textContent = fmt(tAvg);

  const pillarNames = ui.pillars || [];
  const pillars = [
    { name: pillarNames[0] || "", pct: gAvg },
    { name: pillarNames[1] || "", pct: cAvg },
    { name: pillarNames[2] || "", pct: tAvg }
  ];
  $("#pillars").innerHTML = pillars.map(p =>
    `<div class="pillar"><span class="name">${p.name}</span>
     <span class="trk"><i style="width:${p.pct}%"></i></span>
     <span class="pc">${fmt(p.pct)}</span></div>`).join("");

  // Бары по опорам
  function renderBars(list, id) {
    const wrap = $("#" + id);
    wrap.innerHTML = list.map(x => {
      const cls = x.pct === 0 ? "bar zero" : "bar";
      let a = "flat", ac = "flat";
      if (x.d > 0) { a = "▲"; ac = "up"; } else if (x.d < 0) { a = "▼"; ac = "down"; }
      return `<div class="${cls}"><span class="name">${x.n}</span>
        <span class="arrow ${ac}">${a}</span>
        <span class="trk"><i style="width:${x.pct}%"></i></span>
        <span class="pc">${fmt(x.pct)}</span></div>`;
    }).join("");
  }
  renderBars(D.grammar, "grammar");
  renderBars(D.constructions, "constructions");
  renderBars(D.themes, "themes");

  // Вехи
  $("#ms").innerHTML = D.milestones.map(m =>
    `<li class="${m.done ? "done" : ""}"><span class="box"></span><span>${m.t}</span></li>`).join("");

  // Динамика (дельта за день / за неделю)
  function renderDelta(field, sumId, listId, title) {
    const all = [...D.grammar, ...D.constructions, ...D.themes];
    const movers = all.filter(x => x[field] !== 0).sort((a, b) => Math.abs(b[field]) - Math.abs(a[field]));
    const up = movers.filter(x => x[field] > 0).length;
    const down = movers.filter(x => x[field] < 0).length;
    const upTxt = up ? (ui.fmtDeltaUp ? ui.fmtDeltaUp(up) : `+${up}`) : (ui.deltaNoUp || "");
    const downTxt = down ? " · " + (ui.fmtDeltaDown ? ui.fmtDeltaDown(down) : `−${down}`) : "";
    $("#" + sumId).innerHTML = `<b>${title}:</b> <span class="up">${upTxt}</span>${down ? `<span class="down">${downTxt}</span>` : ""}`;
    $("#" + listId).innerHTML = movers.length
      ? movers.map(x => {
          const cls = x[field] > 0 ? "up" : "down", sign = x[field] > 0 ? "+" : "";
          return `<div class="drow"><span class="nm">${x.n}</span><span class="mv ${cls}">${sign}${x[field]}%</span></div>`;
        }).join("")
      : `<div class="empty">${ui.deltaEmpty || ""}</div>`;
  }
  renderDelta("d", "todaySum", "todayDelta", ui.deltaToday || "");
  renderDelta("w", "weekSum", "weekDelta", ui.deltaWeek || "");
})();
