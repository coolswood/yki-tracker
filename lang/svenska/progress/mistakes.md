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
| 2026-06-28 | притяжательные | *ditt sovrummet ➡️ ditt sovrum*, *hans rummet ➡️ hans rum* | definite | 5 | open |
| 2026-06-28 | местоимение | *Hon rum ➡️ Hennes rum*, *De hus ➡️ Deras hus* | pronoun-possession | 2 | open |
| 2026-06-28 | порядок слов | *Var du bor? ➡️ Var bor du?* | v2-question | 2 | open |
| 2026-06-28 | глагол | *De köpar ➡️ De köper* (регрессия -er группы) | verb-group | 3 | open |
| 2026-06-28 | предлог | *söker på ➡️ söker* | lex | 2 | open |
| 2026-06-28 | порядок слов | *ett hus nutt ➡️ ett nytt hus* (прил. перед сущ.) | word-order | 1 | open |
| 2026-06-28 | лексика | *nutt* (в значении «сейчас») ➡️ *nu* | lex | 3 | open |

## Теги паттернов (шпаргалка)
- `v2` — порядок слов: глагол не на 2-м месте после начального слова.
- `v2-question` — вопрос не с глагола.
- `inte-position` — «inte» не после спрягаемого глагола или не перед прилагательным.
- `definite` — определённая форма (двойная определенность после притяжательных местоимений). ⭐ приоритет
- `adjective-kongruens` — согласование прилагательного. ⭐ приоритет
- `pronoun-possession` — путаница личных и притяжательных местоимений (de/deras, hon/hennes). ⭐ приоритет
- `verb-group` — ошибка окончания спряжения глагола. ⭐ приоритет
- `spelling` — опечатки, диакритика. ⭐ приоритет

## Приоритет для закрепления (≥3 повторов → критично)
- `spelling` — 8 повторов. Особое внимание на y/u (dyrt, nytt, systrar).
- `definite` — 5 повторов (ошибки типа *ditt sovrummet*).
- `adjective-kongruens` — 4 повтора (ett-согласование).
- `verb-group` — 3 повтора (возврат к -er группе, köper).
- `lex` (слово *nu*) — 3 повтора.
