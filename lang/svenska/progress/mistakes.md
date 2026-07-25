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
| 2026-07-07 | Boende/YKI | *den lägenhet* ➡️ *lägenheten* | definite | 19 | open |
| 2026-07-07 | Boende/YKI | *den här ljus lägenheten* ➡️ *den här ljusa lägenheten* | adjective-weak | 4 | open |
| 2026-07-07 | Boende/YKI | *i center* ➡️ *i centrum* | lex | 3 | open |
| 2026-07-07 | YKI отказ | *Jag vill bor* ➡️ *Jag vill bo* | verb-infinitive | 3 | open |
| 2026-07-07 | YKI отказ | *närmare till centrum* ➡️ *närmare centrum* | prep/lex | 1 | open |
| 2026-07-07 | YKI перенос | *Kan komma jag...?* ➡️ *Kan jag komma...?* | v2-question | 6 | open |
| 2026-07-07 | YKI перенос | *eftersom jag har ett jobb* ➡️ *eftersom jag jobbar* | lex | 4 | open |
| 2026-07-08 | YKI перенос | *efter jobb* ➡️ *efter jobbet* | definite | 20 | open |
| 2026-07-08 | YKI отказ | *Tack för förslag* ➡️ *Tack för förslaget* | definite | 21 | open |
| 2026-07-08 | YKI отказ | *den här är* ➡️ *den är* | pronoun-it | 2 | open |
| 2026-07-08 | YKI отказ | *för dyra* ➡️ *för dyr* | adjective-kongruens | 9 | open |
| 2026-07-08 | YKI перенос | *på onsdagen* ➡️ *på onsdag* | time-preposition | 2 | open |
| 2026-07-08 | YKI благодарность | *Tack för hjälp?* ➡️ *Tack för hjälpen.* | definite | 22 | open |
| 2026-07-09 | повторение | *Tack för förslagen* ➡️ *Tack för förslaget* | definite | 23 | open |
| 2026-07-09 | Fritid | *gillar jag lyssnar* ➡️ *gillar jag att lyssna* | verb-infinitive | 4 | open |
| 2026-07-09 | Fritid | *träffas min vän* ➡️ *träffa min vän* | lex/verb | 2 | open |
| 2026-07-09 | Fritid | *komma till parken* ➡️ *gå till parken* | lex/verb | 3 | open |
| 2026-07-09 | Fritid | *kaffet* ➡️ *kafe* (место, без акцента принято) | lex | 5 | open |
| 2026-07-09 | Fritid | *drikka* ➡️ *dricka* | spelling | 29 | open |
| 2026-07-09 | Fritid | *i en annan kafe* ➡️ *på ett annat kafe* | article/adjective | 1 | open |
| 2026-07-09 | YKI Fritid | *förstaget* ➡️ *förslaget* | spelling | 30 | open |
| 2026-07-09 | причина/результат | *Idag är kallt* ➡️ *Idag är det kallt* | weather-det | 1 | open |
| 2026-07-09 | причина/результат | *eftersom jag vill inte...* ➡️ *så jag vill inte...* | connector-so | 1 | open |
| 2026-07-09 | причина/результат | *Idag arbetar jag eftersom jag kan inte komma* ➡️ *Idag jobbar jag, så jag kan inte komma* | connector-so | 2 | open |
| 2026-07-09 | причина/результат | *Idag är bra vädret* ➡️ *Idag är det bra väder* | weather-det | 2 | open |
| 2026-07-10 | причина/результат | *Det är kall idag eftersom...* ➡️ *Det är kallt idag, så...* | connector-so / weather-det | 3 / 3 | open |
| 2026-07-10 | погода/место | *Det är bra vädret... på parken* ➡️ *Det är bra väder... i parken* | weather-det / prep | 4 / 2 | open |
| 2026-07-10 | голосовое сообщение | *ringa tillbaka mig* ➡️ *ringa mig tillbaka* | word-order-phrase | 1 | open |
| 2026-07-10 | голосовое сообщение | *prata dig* ➡️ *prata med dig* | prep | 3 | open |
| 2026-07-10 | голосовое сообщение | *Om det passar dig, vi kan...* ➡️ *Om det passar dig, kan vi...* | v2 | 1 | open |
| 2026-07-12 | повторение | *prata dig* ➡️ *prata med dig* (затем 3 верных: #4, #5, #10) | prep | 4 | fixed |
| 2026-07-12 | повторение | *Idag är bra väder* ➡️ *Det är bra väder idag* | weather-det | 5 | open |
| 2026-07-12 | погода | *Det är kalt* ➡️ *Det är kallt* (двойная l: kall+t) | spelling | 31 | open |
| 2026-07-12 | погода | *Det är dålig vädre* ➡️ *Det är dåligt väder* (ett t-форма + неопред.) | adjective-kongruens / spelling | 10 / 32 | open |
| 2026-07-12 | Resor | *boka rommet* ➡️ *boka ett rum* (u не o; неопред. артикль) | spelling / definite | 33 / 24 | open |
| 2026-07-12 | Resor | *Stokholm* ➡️ *Stockholm* (ck) | spelling | 34 | open |
| 2026-07-12 | Resor | *biljett för en bus* ➡️ *en biljett till bussen* (артикль + till + ss) | article-missing / prep / spelling | 7 / 5 / 35 | open |
| 2026-07-12 | Resor/диалог | *kostar i två nätter* ➡️ *kostar det för två nätter* (формальный det + för) | weather-det / prep | 6 / 6 | open |
| 2026-07-12 | финал | *Ringer mig tillbaka* ➡️ *Ring mig tillbaka!* / *Kan du ringa mig tillbaka?* (повелит. = основа без -er) | verb-imperative | 1 | open |
| 2026-07-13 | YKI voicemail | *Jag ringer dig att fråga om vår planerar* ➡️ *Jag ringer dig **för att** fråga om **våra planer*** | phone-purpose / possessive-plural | 1 / 1 | learning |
| 2026-07-13 | YKI voicemail | *bjuda dig in en party* ➡️ *bjuda **in dig till en fest*** | invitation-particle / prep | 1 / 1 | fixed (3 верных вариации подряд) |
| 2026-07-13 | YKI voicemail | *på lördag ikväll* ➡️ *på lördag kväll* | time-expression | 1 | learning |
| 2026-07-13 | YKI voicemail | *imorgon förmiddag* («завтра днём») ➡️ *imorgon på eftermiddagen* | time-expression | 2 | learning |
| 2026-07-13 | YKI vårdcentral | *Hag har en feber* ➡️ *Jag har feber* | spelling / symptom-article | 36 / 1 | learning |
| 2026-07-13 | YKI vårdcentral | *hos läkare; Har du något ledig tid* ➡️ *hos **en** läkare; Har **ni någon ledig tid*** | article-missing / phone-register / adjective-agreement | 8 / 1 / 1 | learning |
| 2026-07-14 | YKI vårdcentral | *Har ni en ledigt tid idag / något tid idag* ➡️ *Har ni **någon ledig tid** idag?* | phone-register / adjective-agreement | 2 / 2 | learning |
| 2026-07-14 | Boende | *Idag vill jag ser en lägenhet* ➡️ *Idag vill jag **se** en lägenhet* | verb-infinitive | 5 | open |
| 2026-07-14 | Resor | *Hur kostar det för två nätter?* ➡️ *Hur **mycket** kostar det för två nätter?* | question-quantity | 1 | learning |
| 2026-07-15 | YKI vårdcentral | «тогда я хочу» → *Tack, då vill jag boka den tiden* (дискурсивное *då* + V2) | discourse-då | 1 | learning |
| 2026-07-15 | Resor | *myket; två mätter* → **mycket; två nätter** | spelling | 38 | open |
| 2026-07-15 | YKI vårdcentral | *en ledigt tid; hos läkare; lärare* → **någon ledig tid; hos en läkare** | phone-register / adjective-agreement / medical-lex | 3 / 3 / 1 | learning |
| 2026-07-15 | YKI встреча | *Då ses …; det passer bra* → **Då ses vi …; det passar bra** | discourse-då / spelling | 2 / 39 | fixed / open |
| 2026-07-16 | YKI voicemail | *fråga, kan du …* → **fråga om du kan …** | word-order-subclause | 4 | learning |
| 2026-07-16 | YKI voicemail | *Kan du ringer …* → **Kan du ringa …** | verb-infinitive | 6 | learning |
| 2026-07-16 | YKI voicemail | *Jag har hört om du är sjuk; så ringer mig tillbaka* → **Jag har hört att du är sjuk; Kan du ringa mig tillbaka?** | phone-purpose / verb-imperative | 2 / 2 | learning |
| 2026-07-18 | YKI voicemail | *Kan du ringer mig tillbaka?* → **Kan du ringa mig tillbaka?** | verb-infinitive | 7 | learning |
| 2026-07-18 | YKI vårdcentral | *Har du någon ledig tid?* → **Har ni någon ledig tid?** | phone-register | 4 | learning |
| 2026-07-18 | YKI vårdcentral | *Passar det du?* → **Passar det dig?** | object-pronoun | 1 | learning |
| 2026-07-18 | YKI vårdcentral | *Tack för hjälp* → **Tack för hjälpen** | definite | 25 | learning |
| 2026-07-18 | YKI vårdcentral | *jag kan komma* (нужно «не могу») → **jag kan inte komma** | inte-position | 7 | learning |
| 2026-07-20 | YKI во дворе | *Kan du spela fotboll?* (к нескольким мальчикам) → **Kan ni spela fotboll?** | pronoun-address | 1 | learning |
| 2026-07-22 | YKI во дворе | *annanställe* → **någon annanstans**; *andra sedan* → **andra sidan** | lex-location / spelling | 1 / 40 | learning |
| 2026-07-22 | YKI во дворе | *Snälla, spelar ...* → **Snälla, spela ...** | verb-imperative | 3 | learning |
| 2026-07-22 | plural | *Min vänner* → **Mina vänner** | pronoun-possession | 7 | learning |
| 2026-07-22 | plural | *De ljusa lägenheter; de stora hus* → **de ljusa lägenheterna; de stora husen** | plural-definite | 2 | learning |
| 2026-07-22 | plural | *meddelander; flera meddelandena* → **flera meddelanden; meddelandena** | plural-declension | 2 | learning |
| 2026-07-22 | plural | *De stora hus är ligger* → **De stora husen ligger** | extra-auxiliary | 1 | learning |
| 2026-07-24 | повторение plural | *De stora husen ligger i centrum* — **чисто** (3 хвоста закрыты в дрилле) | plural-definite / plural-declension / verb-imperative | — | fixed (сессия 26) |
| 2026-07-24 | место/диалог | *i andra sedan* → **på andra sidan av**; *på andra sedan av vägen* → **på andra sidan av vägen** | spelling / prep | 41 / 7 | learning |
| 2026-07-24 | место/диалог | *Ett kafe ligger* → **Kaféet ligger**; *en bank?* (конкретное) → **banken** | definite | 26 | learning |
| 2026-07-24 | место/диалог | *bredvid av kafeet* → **bredvid kafeet** (однословный предлог без av) | prep | 7 | learning |
| 2026-07-24 | финал/район | *i litet hus* → **i ett litet hus** (неопред. артикль) | article-missing | 8 | learning |
| 2026-07-24 | финал/район | *Jag också har* → **Jag har också** (наречие после глагола) | inte-position | 8 | learning |
| 2026-07-24 | финал/район | *Jag har busshållplatsen / matbutiken* → **ligger** (места «находятся», не «имеешь») | lex-verb | 1 | learning |
| 2026-07-24 | Mat & shopping | *backverk* → **bakverk** (корень от bake → одна k) | spelling | 42 | learning |
| 2026-07-24 | Mat & shopping | *Vad vill ha dig?* → **Vad vill du ha?** (вопр.слово + глагол + подлежащее + инфинитив; dig vs du) | v2-question / pronoun-subject | 7 / 1 | learning |
| 2026-07-24 | Mat & shopping | *Vad vill du dricka?* — **чисто** после разбора вопроса | v2-question | — | learning (закрыто в сессии 27) |

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
- `verb-infinitive` — форма инфинитива после модальных глаголов (*vill bo*, не *vill bor*) и `att` перед инфинитивом после глаголов чувств/предпочтений.

## Приоритет для закрепления (≥3 повторов → критично)
- `spelling` — 41 повтор (опечатки при быстром вводе: rummet, vår, fönstret, ditt, gamla, Stockholm, **sidan/седан**, bordet). ⭐ приоритет
- `definite` — 26 повторов (ошибки типа *det här huset*, *den nya lägenheten*, *lägenheten*, *förslaget*, *hjälpen*, *efter jobbet*, *boka rummet ➡️ ett rum*, **Kaféet/banken ligger**). ⭐ приоритет
- `adjective-kongruens` — 10 повторов (ett-согласование, мн. число прилагательных, *dyr/dyra*, *dåligt väder*).
- `inte-position` — 8 повторов (men hon ofta ser ➡️ men hon ser ofta, eftersom... ofta skriver, **Jag också har ➡️ Jag har också**). ⭐ приоритет
- `article-missing` — 8 повторов (пропуски en/ett перед прил + сущ, ett mat, *en biljett*, **i ett litet hus**). ⭐ приоритет
- `verb-group` — 8 повторов (окончания глаголов: bada ➡️ badar, tycka ➡️ tycker, köpa ➡️ köper). ⭐ приоритет
- `pronoun-possession` — 7 повторов (du vänner ➡️ dina vänner, *Min vänner* ➡️ *Mina vänner*). ⭐ приоритет
- `v2-question` — 6 повторов (регрессия в *Kan jag комма?*, снова open).
- `adjective-weak` — 4 повтора (mitt gamla, det här stora, den här ljusa).
- `verb-infinitive` — 4 повтора (*vill bo*, *gillar att lyssna/laga mat*).
- `connector-so` — 3 повтора (*eftersom* вместо *så* для «поэтому»). ⭐ приоритет
- `weather-det` — 6 повторов (*det är kallt / det är bra väder / kostar det*). ⭐ приоритет
- `prep` — 7 повторов (*prata med dig*, *i parken*, *kostar för*, *biljett till*, **bredvid без av**). ⭐ приоритет
- `word-order-phrase` — 1 повтор (*ringa mig tillbaka*). 🔒 fixed (3 подряд)
- `verb-imperative` — 3 повтора (*Ringer ➡️ Ring mig tillbaka!*, *spelar ➡️ spela!*) — в дрилле чисто (сессия 26). ⭐ приоритет
- `plural-definite` — закрыт в дрилле (сессия 26): *de ljusa lägenheterna*, *de stora husen* верны. На контроль в потоке.
- `plural-declension` — закрыт в дрилле (сессия 26): *flera meddelanden* ↔ *meddelandena* верны. На контроль в потоке.
- `lex-verb` — 1 повтор (*ligger* для общественных мест вместо *har*). learning.
- `lex` — 2 повтора (fixed).
- `lex` (слово *nu*) — 3 повтора (fixed).
- `prep/lex` — 1 повтор (*närmare centrum*, без *till*).
