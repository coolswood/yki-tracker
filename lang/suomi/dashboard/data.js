// Данные дашборда (suomi / финский). Обновляются в конце каждой сессии.
// Сейчас — пустой старт: студентка ещё не начинала. Заполняется инкрементально по мере сессий.
//
// Карта статуса ➡️ процент освоения:
//   new = 0% · learning = 30% · review = 70% · mastered = 100%
// Поля пункта опоры: n (название), pct, d (дельта за день), w (дельта за неделю).
// meta/ui — язык-специфичные настройки дашборда (весь видимый текст + форматтеры).

window.DASHBOARD = {
  meta: {
    lang: "suomi",
    htmlLang: "ru",
    locale: "ru-RU"
  },

  ui: {
    title: "YKI Suomi — готовность к экзамену",
    sub: "Экзамен: дату уточнить · фокус: kirjoittaminen (письмо) + puhuminen (говорение)",
    sectionReady: "Готовность",
    readyLab: "складывается из трёх опор ниже",
    legendDone: "освоено",
    legendLeft: "осталось выучить",
    sectionActivity: "Активность занятий",
    sessionsLabel: "Всего сессий:",
    streakLabel: "Стрик:",
    sectionDelta: "Динамика прогресса",
    deltaToday: "Сегодня",
    deltaWeek: "За неделю",
    deltaEmpty: "пока нет изменений",
    deltaNoUp: "нет улучшений",
    pillars: ["Грамматика", "Конструкции", "Темы экзамена"],
    pillarTitles: ["Опора 1 · Грамматические темы",
                   "Опора 2 · Конструкции для эссе",
                   "Опора 3 · Темы экзамена"],
    footer: "YKI Suomi · личный трекер · данные обновляются после каждой сессии",
    updatedPrefix: "обновлено: ",
    fmtSessions:  (n) => n + " " + _ruPlural(n, "сессия", "сессии", "сессий"),
    fmtStreak:    (n) => n + " " + _ruPlural(n, "день", "дня", "дней"),
    fmtDeltaUp:   (n) => "+" + n + " продвинулось",
    fmtDeltaDown: (n) => "−" + n + " регрессий"
  },

  updated: "старт — сессий пока не было",
  examDate: "уточнить",

  streak: 0,
  activity: {},

  // Пусто — заполняется после 1-й сессии (диагностики).
  // Грамматические темы для финского: падежи, типы глаголов, гармония гласных, consonant gradation и т.д.
  // См. lang/suomi/curriculum/grammar-essentials.md
  grammar: [],
  constructions: [],
  themes: [],

  milestones: [
    {t:"Первая сессия пройдена (диагностика)", done:false},
    {t:"Первый связный mini-текст о себе", done:false},
    {t:"Первая тема закрыта чисто через ворота", done:false},
    {t:"Первое письмо без крупных ошибок", done:false},
    {t:"10 сессий пройдено", done:false},
    {t:"Все 10 тем экзамена начаты", done:false},
    {t:"Mock-тест в темпе экзамена", done:false}
  ]
};

// Славянское правило плюрализования (1 / 2-4 / 5+). Общее для русского UI обеих дорожек.
function _ruPlural(n, one, few, many){
  const a=Math.abs(n)%100, l=a%10;
  return l===1&&a!==11 ? one : (l>=2&&l<=4&&(a<10||a>=20)) ? few : many;
}
