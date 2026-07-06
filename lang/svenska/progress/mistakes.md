# Лог ошибок (по паттернам)

Каждая ошибка: дата · тема · неверное → верное · **тег паттерна** · счётчик повторов.
Если тег повторяется ≥3 раз → приоритетная точка для закрепления.
Статус: `open` (работаем) · `fixed` (3 верных подряд).

| Дата | Тема | Неверно → Верно | Тег | Счётчик | Статус |
|---|---|---|---|---|---|
| 2026-06-25 | профессия | *Jag jobbar lärare* → *Jag jobbar **som** lärare* | som-as | 1 | learning |
| 2026-06-25 | отрицание | *Jag jobbar som inte lärare* → *Jag jobbar **inte** som lärare* | inte-position | 1 | fixed |
| 2026-06-25 | письмо D1 | *inbjuden* → *inbjudan* | lex | 1 | open |
| 2026-06-25 | письмо D1 | *Jag ska glad att...* → *Jag blir glad / ska bli glad* | modal-vocab | 1 | open |
| 2026-06-25 | письмо D1 | *Vad ska jag ta?* → *Vad ska jag ta med?* | lex | 1 | open |
| 2026-06-25 | письмо D2 | *Det är ledsen att...* → *Det är ledsamt / Vad tråkigt att...* | adjective-kongruens | 1 | open |
| 2026-06-25 | письмо D2 | *jag kan ta papper* → *jag kan lämna papperna* | lex/definite | 1 | open |
| 2026-06-25 | письмо D2 | *Jag önskar du att vara frisk* → *Hoppas du blir frisk snart! / Krya på dig!* | lex | 1 | open |
| 2026-06-25 | местоимение | *Han har två systrar* (у неё) → *Hon har* | pronoun-han-hon | 1 | fixed |
| 2026-06-25 | глагол | *läsar* → *läser* (läsa — группа -er) | verb-group | 1 | fixed |
| 2026-06-25 | frågeord | *Var du arbetar* → *Var arbetar du* | v2-question | 1 | fixed |
| 2026-06-26 | предлог | *i kontor / i skola* → *på kontoret / på skolan* | prep-på | 2 | fixed |
| 2026-06-26 | местоимение | №9 *Hon* ➡️ *Han* | pronoun-han-hon | 2 | fixed |
| 2026-06-26 | орфография | *leste→läste, Hesingfors→Helsingfors, engenjör→ingenjör* | spelling | 3 | open |
| 2026-06-26 | лексика | *lärde* → *studerade* | lex/verb | 1 | open |
| 2026-06-26 | артикль | *på kontor* ➡️ *på ett kontor / på kontoret* | definite | 1 | open |
| 2026-06-26 | орфография | *contoret ➡️ kontoret*, *rumet ➡️ rummet* | spelling | 5 | open |
| 2026-06-26 | глагол | *köpar ➡️ köper* | verb-group | 2 | fixed (но см. регрессию ниже) |
| 2026-06-26 | согласование | *Huset är liten ➡️ litet*, *det är dyr ➡️ dyrt* | adjective-kongruens | 4 | open |
| 2026-06-26 | местоимение | *ja hyr en ➡️ jag hyr den* | pronoun-it | 1 | fixed |
| 2026-06-26 | определенность | *Jag gillar den land ➡️ det här landet* | definite | 2 | open |
| 2026-06-26 | определенность | *det är nyt huset ➡️ det är ett nytt hus* | definite | 3 | open |
| 2026-06-28 | орфография | *durt ➡️ dyrt*, *systar ➡️ systrar*, *sovarum ➡️ sovrum* | spelling | 8 | open |
| 2026-06-28 | отрицание | *durt inte ➡️ inte dyrt* (позиция перед прил.) | inte-position | 2 | fixed (исправлено в дрилле) |
| 2026-06-28 | притяжательные | *ditt sovrummet ➡️ ditt sovrum*, *hans rummet ➡️ hans rum* | definite | 5 | fixed |
| 2026-06-28 | местоимение | *Hon rum ➡️ Hennes rum*, *De hus ➡️ Deras hus* | pronoun-possession | 2 | fixed |
| 2026-06-28 | порядок слов | *Var du bor? ➡️ Var bor du?* | v2-question | 2 | fixed |
| 2026-06-28 | глагол | *De köpar ➡️ De köper* (регрессия -er группы) | verb-group | 3 | fixed |
| 2026-06-28 | предлог | *söker på ➡️ söker* | lex | 2 | fixed |
| 2026-06-28 | порядок слов | *ett hus nutt ➡️ ett nytt hus* (прил. перед сущ.) | word-order | 1 | fixed |
| 2026-06-28 | лексика | *nutt* (в значении «сейчас») ➡️ *nu* | lex | 3 | fixed |
| 2026-06-29 | согласование | *mysig ➡️ mysigt* (ett-слово hus) | adjective-kongruens | 5 | open |
| 2026-06-29 | артикль | *bor i lägenhet ➡️ bor i en lägenhet* | article-missing | 1 | open |
| 2026-06-29 | определенность | *hyra ➡️ hyran* (конкретная аренда) | definite | 6 | open |
| 2026-06-29 | притяжательные | *min/din ny ➡️ min/din nya* (слабое прил.) | adjective-weak | 1 | open |
| 2026-06-30 | артикль | *bor i litet hus ➡️ bor i ett litet hus* | article-missing | 2 | open |
| 2026-06-30 | артикль | *vacker lägenhet ➡️ en vacker lägenhet* | article-missing | 3 | open |
| 2026-06-30 | глагол | *vill hyr ➡️ vill hyra* (инфинитив после модального) | verb-infinitive | 1 | open |
| 2026-06-30 | орфография | *programmarare ➡️ programmerare* | spelling | 9 | open |
| 2026-06-30 | род существительных | *på en kontor ➡️ på ett kontor* | definite | 7 | open |
| 2026-06-30 | согласование | *känner mig dåligt ➡️ känner mig dålig* | adjective-kongruens | 6 | open |
| 2026-06-30 | определенность | *till jobb ➡️ till jobbet* | definite | 8 | open |
| 2026-06-30 | порядок слов | *att måsta jag stanna ➡️ att jag måste stanna* | word-order-subclause | 1 | open |
| 2026-07-01 | разминка | *programmerar ➡️ programmerare* | spelling | 10 | open |
| 2026-07-01 | разминка | *i nytt kontor ➡️ på ett nytt kontor* | prep-på / article-missing | 1 | open |
| 2026-07-01 | разминка | *talar att ➡️ säger att* | lex | 1 | open |
| 2026-07-01 | разминка | *sister ➡️ syster* | spelling | 11 | open |
| 2026-07-01 | приглашение | *bjuda in i ➡️ bjuda in till* | prep | 1 | open |
| 2026-07-01 | приглашение | *vackert möbler ➡️ vackra möbler* | adjective-kongruens | 7 | open |
| 2026-07-01 | приглашение | *Vill komma du ➡️ Vill du komma* | v2-question | 3 | open |
| 2026-07-01 | диалог | *flytta ➡️ flyttar* | verb-group | 4 | open |
| 2026-07-01 | диалог | *i klockan ➡️ klockan* | time-preposition | 1 | open |
| 2026-07-01 | диалог | *Min vännor ➡️ Mina vänner* | pronoun-possession | 3 | open |
| 2026-07-01 | диалог | *till nytt hus ➡️ till ett nytt hus* | article-missing | 4 | open |
| 2026-07-02 | разминка | *systar ➡️ systrar* | spelling | 12 | open |
| 2026-07-02 | разминка | *vännor ➡️ vänner* | spelling | 12 | open |
| 2026-07-02 | разминка | *hjölpa ➡️ hjälpa* | spelling | 12 | open |
| 2026-07-02 | разминка | *clickan ➡️ klockan* | spelling | 12 | open |
| 2026-07-02 | разминка | *på nytt kontoret ➡️ på ett nytt kontor* | definite | 9 | open |
| 2026-07-02 | разминка | *köpar ➡️ köper* | verb-group | 5 | open |
| 2026-07-02 | дрилл | *Det finns tvättmaskin ➡️ Det finns en tvättmaskin* | article-missing | 5 | open |
| 2026-07-02 | дрилл | *maten är warma ➡️ maten är varm* | adjective-kongruens | 8 | open |
| 2026-07-02 | дрилл | *en kylskåp ➡️ kylskåpet* | definite | 9 | open |
| 2026-07-02 | дрилл | *gammla ➡️ gamla* | spelling | 13 | open |
| 2026-07-02 | дрилл | *tystar ➡️ tystare* | spelling | 13 | open |
| 2026-07-02 | цепочка | *eftersom kylskåpet arbetar inte ➡️ eftersom... inte fungerar* | word-order-subclause | 2 | open |
| 2026-07-02 | диалог | *Kan komma ni ➡️ Kan ni komma* | v2-question | 4 | fixed |
| 2026-07-03 | разминка | *du vänner ➡️ dina vänner* | pronoun-possession | 4 | fixed |
| 2026-07-03 | разминка | *Hannes ➡️ hennes* | lex | 1 | fixed |
| 2026-07-03 | разминка | *det här hus ➡️ det här huset* | definite | 10 | fixed |
| 2026-07-03 | дрилл | *gillar träna ➡️ gillar att träna* | verb-infinitive | 2 | fixed |
| 2026-07-03 | дрилл | *laga ➡️ laga mat* | lex | 2 | fixed |
| 2026-07-03 | дрилл | *men hon ofta ser ➡️ men hon ser ofta* | inte-position | 3 | fixed |
| 2026-07-04 | разминка | *i den parken ➡️ i den här parken* | definite | 11 | fixed |
| 2026-07-04 | разминка | *Jag ofta ser ➡️ Jag ser ofta* | inte-position | 4 | fixed |
| 2026-07-04 | дрилл | *lysnar ➡️ lyssnar* | spelling | 14 | open |
| 2026-07-04 | дрилл | *De vill bo inte ➡️ vill inte bo* | inte-position | 5 | fixed |
| 2026-07-04 | дрилл | *den här stad ➡️ den här staden* | definite | 12 | fixed |
| 2026-07-04 | диалог | *fräffas ➡️ träffas* | spelling | 15 | fixed |
| 2026-07-04 | диалог | *mitt här huset ➡️ mitt hus* | pronoun-possession | 5 | fixed |
| 2026-07-04 | диалог | *testaurang ➡️ restaurang* | spelling | 16 | fixed |
| 2026-07-04 | применение | *gö ➡️ gå* | spelling | 17 | open |
| 2026-07-04 | применение | *bada ➡️ badar* | verb-group | 6 | open |
| 2026-07-05 | разминка | *rom ➡️ rummet* | spelling | 18 | fixed |
| 2026-07-05 | разминка | *lyssner ➡️ lyssnar* | spelling | 19 | fixed |
| 2026-07-05 | разминка | *var ➡️ vår* | spelling | 20 | fixed |
| 2026-07-05 | разминка | *Mia ➡️ mina* | spelling | 21 | fixed |
| 2026-07-05 | разминка | *den här sjö ➡️ den här sjön* | definite | 13 | fixed |
| 2026-07-05 | дрилл | *mitt gammalt ➡️ mitt gamla* | adjective-weak | 2 | fixed |
| 2026-07-05 | дрилл | *dit ➡️ ditt* | spelling | 22 | fixed |
| 2026-07-05 | дрилл | *eftersom... tycka ➡️ tycker* | verb-group | 7 | fixed |
| 2026-07-05 | дрилл | *nya lägenheten ➡️ den nya lägenheten* | definite | 14 | fixed |
| 2026-07-05 | челлендж | *Värt ➡️ Vårt* | spelling | 23 | fixed |
| 2026-07-05 | челлендж | *en röd bil ➡️ den röda bilen* | definite | 15 | open |
| 2026-07-05 | челлендж | *Den här nya lägenhet ➡️ Den här nya lägenheten* | definite | 16 | fixed |
| 2026-07-05 | челлендж | *intressant boken ➡️ den intressanta boken* | definite | 17 | open |
| 2026-07-05 | челлендж | *fönstart ➡️ fönstret* | spelling | 24 | fixed |
| 2026-07-06 | разминка | *Dina vänner vill...* ➡️ *Vill dina vänner...* | v2-question | 5 | fixed |
| 2026-07-06 | разминка | *köpar* ➡️ *köper* | verb-group | 8 | fixed |
| 2026-07-06 | разминка | *ett mat* ➡️ *mat* | article-missing | 6 | open |
| 2026-07-06 | разминка | *Det här stort fönstert* ➡️ *Det här stora fönstret* | adjective-weak / spelling | 3 / 25 | open |
| 2026-07-06 | дрилл | *att lära sig han bra* ➡️ *att han lär sig bra* | word-order-subclause | 3 | fixed |
| 2026-07-06 | дрилл | *Chef ser* ➡️ *Chefen ser* | definite | 18 | fixed |
| 2026-07-06 | дрилл | *skriver mycket* ➡️ *ofta skriver* | inte-position | 6 | fixed |
| 2026-07-06 | контраст | *din/ditt här* ➡️ *den/det här* | pronoun-possession | 6 | fixed |
| 2026-07-06 | контраст | *veldigt* ➡️ *väldigt* | spelling | 26 | open |
| 2026-07-06 | контраст | *gammla* ➡️ *gamla* | spelling | 27 | open |
| 2026-07-06 | применение | *Jag här* ➡️ *Jag har* | spelling | 28 | open |

## Теги паттернов (шпаргалка)
- `v2` — порядок слов: глагол не на 2-м месте после начального слова.
- `v2-question` — вопрос не с глагола.
- `inte-position` — «inte» (и другие наречия) не после спрягаемого глагола или не перед прилагательным.
- `definite` — определённая форма (двойная определенность / отсутствие определенности). ⭐ приоритет
- `adjective-kongruens` — согласование прилагательного. ⭐ приоритет
- `pronoun-possession` — путаница личных и притяжательных местоимений (de/deras, hon/hennes).
- `verb-group` — ошибка окончания спряжения глагола.
- `spelling` — опечатки, диакритика. ⭐ приоритет
- `article-missing` — пропуск неопределенного артикля en/ett. ⭐ приоритет
- `adjective-weak` — слабая форма прилагательного после местоимения (-a). ⭐ приоритет
- `verb-infinitive` — пропуск att перед инфинитивом после глаголов чувств или после модальных глаголов.

## Приоритет для закрепления (≥3 повторов → критично)
- `spelling` — 28 повторов (опечатки при быстром вводе: rummet, vår, fönstret, ditt, väldigt, gamla, har). ⭐ приоритет
- `definite` — 18 повторов (ошибки типа *det här husет*, *den nya lägenheten*, *den röda bilen*, *chefen*). ⭐ приоритет
- `adjective-kongruens` — 8 повторов (ett-согласование, мн. число прилагательных).
- `inte-position` — 6 повторов (men hon ofta ser ➡️ men hon ser ofta, eftersom... ofta skriver). ⭐ приоритет
- `article-missing` — 6 повторов (пропуски en/ett перед прил + сущ, ett mat).
- `verb-group` — 8 повторов (окончания глаголов: bada ➡️ badar, tycka ➡️ tycker, köpa ➡️ köper). ⭐ приоритет
- `pronoun-possession` — 6 повторов (du vänner ➡️ dina vänner, ditt här ➡️ det här). ⭐ приоритет
- `v2-question` — 5 повторов (fixed).
- `adjective-weak` — 3 повтора (mitt gamla, det här stora).
- `verb-infinitive` — 2 повтора (fixed).
- `lex` — 2 повтора (fixed).
- `lex` (слово *nu*) — 3 повтора (fixed).
