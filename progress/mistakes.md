# Лог ошибок (по паттернам)

Каждая ошибка: дата · тема · неверное → верное · **тег паттерна** · счётчик повторов.
Если тег повторяется ≥3 раз → приоритетная точка для закрепления.
Статус: `open` (работаем) · `fixed` (3 верных подряд).

| Дата | Тема | Неверно → Верно | Тег | Счётчик | Статус |
|---|---|---|---|---|---|
| 2026-06-25 | профессия | *Jag jobbar lärare* → *Jag jobbar **som** lärare* | som-as | 1 | learning |
| 2026-06-25 | отрицание | *Jag jobbar som inte lärare* → *Jag jobbar **inte** som lärare* | inte-position | 1 | fixed (верно в сессии 3) |
| 2026-06-25 | письмо D1 | *inbjuden* → *inbjudan* | lex | 1 | open |
| 2026-06-25 | письмо D1 | *Jag ska glad att...* → *Jag blir glad / ska bli glad* | modal-vocab | 1 | open |
| 2026-06-25 | письмо D1 | *Vad ska jag ta?* → *Vad ska jag ta med?* | lex | 1 | open |
| 2026-06-25 | письмо D2 | *Det är ledsen att...* → *Det är ledsamt / Vad tråkigt att...* | adjective-kongruens | 1 | open |
| 2026-06-25 | письмо D2 | *jag kan ta papper* → *jag kan lämna papperna* | lex/definite | 1 | open |
| 2026-06-25 | письмо D2 | *Jag önskar du att vara frisk* → *Hoppas du blir frisk snart! / Krya på dig!* | lex | 1 | open |
| 2026-06-25 | множ.число | *böker* → *böcker* (en bok, неправильное) | plural | 2 | fixed/mastered (ворота 10/10) |
| 2026-06-25 | местоимение | *Han har två systrar* (у неё) → *Hon har* | pronoun-han-hon | 1 | fixed (сессия 3 верно) |
| 2026-06-25 | глагол | *läsar* → *läser* (läsa — группа -er) | verb-group | 1 | fixed |
| 2026-06-25 | множ.число | *två tidning* → *två tidningar* (-ar к новому слову) | plural | 1 | fixed |
| 2026-06-25 | множ.число | *veckor* — не знал -or-паттерн (en-слова на -a) | plural-or | 1 | fixed |
| 2026-06-25 | frågeord | *Var du arbetar* → *Var arbetar du* | v2-question | 1 | fixed |
| 2026-06-25 | профессия | *arbetade om lärare* → *arbetade **som** lärare* (om/som) | som-as | 1 | fixed |
| 2026-06-25 | dåtid | *läsede* → *läste* (över-regularisering) | tempus | 1 | fixed |
| 2026-06-26 | предлог | *i kontor / i skola* → *på kontoret / på skolan* | prep-på | 2 | fixed (сессия 3 верно) |
| 2026-06-26 | местоимение | №9 *Hon* (по-русски «он») → *Han* | pronoun-han-hon | 2 | fixed |
| 2026-06-26 | орфография | *leste→läste, Hesingfors→Helsingfors, engenjör→ingenjör* | spelling | 3 | open |
| 2026-06-26 | лексика | *lärde* → *studerade* | lex/verb | 1 | open |
| 2026-06-26 | артикль | *på kontor* ➡️ *på ett kontor / på kontoret* | definite | 1 | open |
| 2026-06-26 | орфография | *contoret ➡️ kontoret*, *rumet ➡️ rummet* | spelling | 5 | open |
| 2026-06-26 | глагол | *köpar ➡️ köper* (köpa — группа -er) | verb-group | 2 | fixed (исправлено) |
| 2026-06-26 | согласование | *Huset är liten ➡️ litet*, *det är dyr ➡️ dyrt*, *inte dyr, men vacker ➡️ dyrt, men vackert* | adjective-kongruens | 4 | open |
| 2026-06-26 | местоимение | *ja hyr en ➡️ jag hyr den* | pronoun-it | 1 | fixed (дрилл пройден) |
| 2026-06-26 | определенность | *Jag gillar den land ➡️ det här landet* (ett-слово) | definite | 2 | open |
| 2026-06-26 | определенность | *det är nyt huset ➡️ det är ett nytt hus* (indef после det är) | definite | 3 | open |

## Теги паттернов (шпаргалка)
- `v2` — порядок слов: глагол не на 2-м месте после начального слова.
- `v2-question` — вопрос не с глагола.
- `inte-position` — «inte» не после спрягаемого глагола.
- `adverb-position` — наречие не после глагола (gärna/inte/alltid).
- `tempus` — ошибка времени (nutid/dåtid/perfekt).
- `definite` — определённая форма (en/ett, суффикс, неопределенная после det är). ⭐ приоритет
- `adjective-kongruens` — согласование прилагательного. ⭐ приоритет
- `som-as` — пропуск «som» в `jobba/arbeta som + профессия`.
- `modal-vocab` — модальный + не-глагол / лишнее att.
- `lex` — лексическая ошибка/ложный когнат.
- `spelling` — диакритика, пропуск/удвоение букв. ⭐ приоритет

## Приоритет для закрепления (≥3 повторов → критично)
- `spelling` — 5 повторов (контор, руммет, диакритика). Ловить при проверках.
- `adjective-kongruens` — 4 повтора. Нужен плотный дрилл на ett-согласование (dyrt, vackert, litet, stort).
- `definite` — 3 повтора. Разобраться с использованием определенного/неопределенного артикля после `det är`.
