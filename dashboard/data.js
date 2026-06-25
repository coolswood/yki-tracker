window.DASHBOARD = {
  updated: "до первой сессии · ждём диагностику",
  level: { current: 2.0, delta: 0, history: [2.0] },
  streak: { days: 0, week: [0,0,0,0,0,0,0] },
  readiness: { phase: "Фаза 0 · Onboarding", done: 0, total: 180 },
  themes: [
    {n:"Семья",s:"new"},{n:"Работа/учёба",s:"new"},{n:"Жильё",s:"new"},
    {n:"Своб. время",s:"new"},{n:"Путешествия",s:"new"},{n:"Здоровье",s:"new"},
    {n:"Еда/покупки",s:"new"},{n:"Природа",s:"new"},{n:"Техника/медиа",s:"new"},{n:"Услуги",s:"new"}
  ],
  functions: [
    {n:"приветствовать",s:"new"},{n:"спрашивать",s:"new"},{n:"просить",s:"new"},
    {n:"благодарить",s:"new"},{n:"соглашаться",s:"new"},{n:"приглашать",s:"new"},
    {n:"отказываться",s:"new"},{n:"сравнивать",s:"new"},{n:"мнение",s:"new"},
    {n:"извиняться",s:"new"},{n:"предлагать",s:"new"},{n:"отменять",s:"new"}
  ],
  errors: [],
  fixed: 0, corrected: 0,
  milestones: [
    {t:"Первое письмо без крупных ошибок",done:false},
    {t:"10 сессий пройдено",done:false},
    {t:"Все 10 тем начаты",done:false},
    {t:"Mock-тест в темпе экзамена",done:false},
    {t:"Уровень 3 стабильно (5 сессий)",done:false}
  ]
};
