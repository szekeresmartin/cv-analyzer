
const criteria = [
  {
    title: "Az önéletrajz hossza",
    placeholder: "Az önéletrajzod legyen maximum két oldal Kezdőként 1 oldal az ideális, ha tapasztalt szakember vagy, akkor lehet nyugodtan 2 oldalas, de annál több ne legyen, maximum kivételes esetekben. Ugyanis ha a dokumentum túl hosszú, elveszik benne a lényeg, nem fogják végig olvasni, így könnyen a “nem” kupacba kerül. Nem az a cél, hogy minden tapasztalatodat felsorold, hanem az, hogy az adott pozícióhoz legjobban illeszkedő tapasztalatokat és eredményeket mutasd be."
  },
  {
    title: "Az önéletrajz formátuma",
    placeholder: "Használj PDF-et – formázás és kompatibilitás"
  },
  {
    title: "Canva vagy egyéb dizájn",
    placeholder: "Miért ne használj Canvát vagy látványos dizájnt?  Mert ezek nem ATS-kompatibilisek."
  },
  {
    title: "ATS-barát",
    placeholder: "Az ATS rövidítés az Applicant Tracking System angol kifejezésből származik, magyarul jelentkezőkövető rendszer vagy pályázókezelő rendszer a jelentése. Ez egy szoftver, amelyet a munkáltatók használnak a toborzási és kiválasztási folyamat kezelésére és automatizálására."
  },
  {
    title: "Formázási szabályok",
    placeholder: "Maradj a fekete-fehér, jól olvasható stílusnál. Betűtípus: Arial, Calibri, Verdana vagy Times New Roman. Betűméret: 11–12 pont, címsoroknál 13–14 pont. Fontos tudni, hogy ugyanaz a betűméret különböző betűtípusok esetén máshogy hat vizuálisan. Például az Arial betűtípus nagyobbnak tűnik, mint a Times New Roman, még ha mindkettőt 11 pontos méretben használod is. Ezért mindig nézd meg a teljes dokumentum kinézetét is, ne csak a számokat, előfordulhat, hogy egy másik betűtípusnál kisebb vagy nagyobb méret lesz a megfelelő az optimális olvashatóság és esztétikum érdekében. A szekciócímeknél használhatsz nagyobb betűméretet, de legfeljebb 2 ponttal nagyobbat, mint a törzsszöveg. Például: ha a szöveg 11 pontos, a címek legyenek maximum 13 pontosak. Egyetlen kivétel a neved, ez lehet ennél nagyobb (pl. 16–18 pont), hogy vizuálisan kiemelkedjen, és segítse az összkép egyensúlyát, különösen, ha sok a fehér tér az oldal tetején. A tartalom tagolásánál ügyelj arra is, hogy a cég neve és a betöltött pozíciód között legyen egy kis extra tér vagy kiemelés (pl. félkövér vagy új sor), így a toborzó könnyen átlátja, hol dolgoztál és milyen szerepben. Ez gyorsabb értelmezést, jobb benyomást eredményez. Használj szimpla vagy 1,5-es sorközt, sorkizárt vagy balra zárt elrendezést. A szekciók legyenek jól elkülönítve, egységes stílusban, félkövér vagy nagyobb betűs címsorokkal. Túl nagy margók (pl. 2,5–3 cm körül) optikailag kevesebb tartalmat mutatnak, így az önéletrajz üresnek vagy kevésbé tartalmasnak tűnhet, még akkor is, ha az információk relevánsak. Ha más pályázók szűkebb margót (pl. 1–1,25 cm) használnak, több információ fér el egy oldalon, és ez hatékonyabb, versenyképesebb benyomást kelthet. Viszont túl szűk margó (pl. 0,5 cm alatti) zavaró és zsúfolt lehet, ami rontja az olvashatóságot – ezt érdemes kerülni. Ha sok releváns tapasztalatod van, nyugodtan csökkentsd a margót 1,5–2 cm közé, hogy minden elférjen 1–2 oldalon- de mindig figyelj arra, hogy ne váljon zsúfolttá a dokumentum. Kerüld a rikító színeket az önéletrajzban! Ne használj élénk, rikító színeket (pl. neonzöld, élénkpiros, narancssárga háttér vagy szöveg). Ezek elvonják a figyelmet a tartalomról, zavaróak lehetnek a szemnek, és komolytalanná tehetik az összképet. A legjobb, ha visszafogott, semleges színeket használsz. Ügyelj a kontrasztra is, ne használj világos szöveget világos háttéren, és kerüld a sötét háttér és sötét szöveg kombinációkat. Nyomtatásnál sokszor fekete-fehér változatban nézik a CV-t – győződj meg róla, hogy úgy is jól olvasható marad."
  },
  {
    title: "Alapadatok",
    placeholder: "Név, telefonszám, professzionális Gmail-es e-mail cím, ne legyen becenév vagy születési év benne. Olyan e-mail cím, amely: tartalmazza a vezetéknevedet és keresztnevedet, például: kiss.mariagmail.com vagy maria.kiss87@gmail.com ha a név már foglalt, kis szám elfogadható nem tartalmaz becenevet, fantázianeveket vagy furcsa karaktereket:cica23gmail.com nagymokusgmail.com szabi1995gmail.com A Gmail-es e-mail cím professzionálisabb benyomást kelt, technikailag megbízhatóbb, és jobban kompatibilis az ATS (jelentkezőkezelő) rendszerekkel. A Citromail, Freemail vagy más elavult szolgáltatók használata régimódinak tűnhet, és akár azt is sugallhatja, hogy nem vagy naprakész digitálisan. A Gmail ráadásul stabil, biztonságos, és számos álláskeresési platformon előny. Az önéletrajz fejlécében a neved alá ne írd azt, hogy Önéletrajz, helyette tüntesd fel a munkakörödet vagy a megpályázott pozíció nevét."
  },
  {
    title: "LinkedIn profil",
    placeholder: "LinkedIn profil megadása önéletrajzban azért jó, mert kiegészíti a szakmai információkat, naprakész és részletes, növeli a hitelességet, és megkönnyíti a kapcsolatfelvételt a munkaadóval."
  },
  {
    title: "Mit ne adj meg",
    placeholder: "De ne add meg ezeket: lakcím, születési dátum, családi állapot, ezek diszkriminációs hátrányhoz vezethetnek. Miért? Lakcím alapján következtethetnek arra, hogy messze laksz, így kevésbé vagy kényelmes jelölt. Egy agglomerációban élő lehet hamarabb beérne autóval, mint egy városi tömegközlekedéssel. Születési dátum alapján életkor alapján hátrányos megkülönböztetés érhet. Családi állapot (pl. házas, gyermekes) miatt feltételezésekbe bocsátkozhatnak a munkaidővel, elérhetőséggel kapcsolatban. A lényeg: Csak azokat az információkat add meg, amelyek közvetlenül a szakmai alkalmasságodat bizonyítják. Az önéletrajz célja, hogy a képességeidre és tapasztalataidra irányítsa a figyelmet, ne a magánéletedre."
  },
  {
    title: "Fénykép",
    placeholder: "Fénykép nem kötelező, de ha van, legyen friss, ízléses, jó minőségű. Mikor érdemes fotót használni? Ha elvárás: Vannak iparágak (pl. modellkedés, színészet, vendéglátás), ahol természetes, hogy kérnek fotót. Ha úgy érzed, előnyös számodra: Egy jó minőségű, professzionális fotó erősítheti az első benyomást. Ha teszel bele fotót: Legyen friss, lehetőleg 5 éven belüli. Ne szelfi, nyaralós vagy túl laza kép legyen. Használj semleges hátteret és öltözz úgy, mintha állásinterjúra mennél. Ha nem kötelező, nyugodtan hagyd ki a fotót, és koncentrálj arra, hogy az önéletrajzod tartalmilag legyen erős."
  },
  {
    title: "Rólam rész",
    placeholder: "Az önéletrajz elején szerepeljen egy rövid, lényegre törő bevezető szöveg, amely Megfogalmazza, mi a célod ,Kiemeli az erősségeidet, Elmondja, mit keresel a következő munkahelyeden. Ez a szakasz irányt ad az olvasónak, és segít fókuszba helyezni a szakmai profilodat és haladó szintű készségeidet. Egy jól megírt bemutatkozás azonnal megragadja a figyelmet, és azt hangsúlyozza, miben vagy igazán értékes a munkáltató számára."
  },
  {
    title: "Tapasztalat - időrendiség",
    placeholder: "Minden tapasztalat legyen fordított időrendben – a legfrissebb kerüljön legfelülre."
  },
  {
    title: "Tapasztalat - felépítés",
    placeholder: "A pozíció neve legyen elöl, utána a cég neve, végül a dátum. A hónap megadása nem kötelező."
  },
  {
    title: "Tapasztalat - bullet pointok",
    placeholder: "Minden munkakörnél használj bullet pointokat, és emelj ki eredményeket is, például: 20%-kal növeltük az ügyfél-elégedettséget vagy irányításom alatt nem volt fluktuáció. Használj mérőszámokat, ahol csak lehet: százalékokat, pénzösszegeket, időmegtakarítást. Ezek kézzelfoghatóvá teszik az eredményeidet. Mindenhol derüljön ki, hogy milyen felelősségeid voltak, és milyen hatással voltál a cégre, csapatra vagy működésre. Használj erős igei kezdéseket, mint például: irányítottam, fejlesztettem, optimalizáltam, bevezettem, növeltem, csökkentettem, támogattam, egyeztettem. Ezek dinamizmust adnak a szövegnek, és szakmaiságot sugallnak. A szakmai tapasztalataidnál az első 2-3 bullet pointba mindig a legrelevánsabb feladatokat, eredményeket és használt eszközöket írd, különösen azokat, amelyek az álláshirdetésben is szerepelnek."
  },
  {
    title: "Pozíciómegnevezések és cégnév",
    placeholder: "A pozíciómegnevezések legyenek közérthetőek és érthetőek mindenki számára, még akkor is, ha a munkaszerződésedben más név szerepelt. Érdemes a megpályázni kívánt pozícióhoz igazítani a megnevezéseket: például ha korábban ügyvezető voltál, de most egy kisebb vezetői pozícióra jelentkezel, akkor érdemes az ügyvezető megnevezést úgy átalakítani, hogy reálisan tükrözze a megpályázott pozíciót. A pozíció megnevezése tükrözze azt, amit valójában végeztél. Kerüld a cégen belüli rövidítések vagy belső elnevezések használatát, mert ezek kívülállók számára érthetetlenek lehetnek. A cégek és iskolák megnevezésénél használd a mai, ismert elnevezéseket,  még akkor is, ha akkor más volt a cég neve, amikor ott dolgoztál vagy tanultál."
  },
  {
    title: "Releváns pozíciók",
    placeholder: "A legrelevánsabb pozíciókat részletesebben mutasd be. Az önéletrajzban azoknál a munkaköröknél időzz el bővebben, amelyek a legjobban kapcsolódnak a megpályázott álláshoz. Itt írj részletes feladatokat, eredményeket, használt rendszereket. Legfeljebb 15 év szakmai tapasztalatot részletezz. Az önéletrajzban elegendő az elmúlt 10–15 év szakmai tapasztalatait részletesen bemutatni. A korábbi, régebbi munkaköröket elég csak pozíciómegnevezéssel és cégnévvel felsorolni. Ezek már kevésbé relevánsak, és a lényeg, hogy a jelenlegi tudásodra és tapasztalataidra irányuljon a figyelem."
  },
  {
    title: "Készségek",
    placeholder: "A készségeket érdemes pontokba szedve, akár két oszlopban, áttekinthetően felsorolni. Fontos, hogy különválaszd a technikai, azaz hard készségeket, és a szociális, vagyis soft készségeket."
  },
  {
    title: "Technikai készségek",
    placeholder: "Fontos, hogy az önéletrajzodban a technikai készségeket is feltüntesd, még akkor is, ha nem informatikai területen dolgozol. Ide tartoznak például a számítógépes ismeretek (Macbook, PC használata), de ugyanígy az olyan szakmai eszközök, rendszerek és szoftverek is, mint az MS Excel, SAP, AETR, EKAER vagy bármilyen más gép, szabvány vagy jogszabály, amit jól ismersz és használsz a munkád során. Figyelj arra, hogy mindent betűzve, teljes névvel írj ki, ne rövidítéseket használj! Ez azért fontos, mert a technikai ismereteket nem minden esetben IT-szakemberek, hanem például HR-esek vagy más, technikai területhez kevésbé értő munkatársak is átnézik, és nekik így érthetőbb lesz, mit tudsz. Érdemes több álláshirdetést is megnézni, és megnézni, milyen készségeket kérnek-lehet, hogy olyasmid is szerepel, amivel te is rendelkezel, csak még nem gondoltál rá skillként."
  },
  {
    title: "Soft készségek",
    placeholder: "Soft készségeket viszont nem elég csak felsorolni, inkább a tapasztalataidnál mutasd be őket konkrét példákon keresztül.  Kerüld az általános, üres megfogalmazásokat, mint a „csapatjátékos” vagy a „jó kommunikációs készség”. Ezek bizonyítás nélkül nem hatásosak, és a legtöbb esetben semmitmondónak tűnnek. A személyes készségeidet akkor tudod igazán megmutatni, ha konkrét, mérhető eredményekkel támasztod alá őket. Például ahelyett, hogy csak azt írod, jó kommunikációs készséggel rendelkezem, sokkal ütősebb ez: Az információkat világosan és lényegretörően kommunikálom az ügyfeleinkkel, így 15%-kal nőtt az ügyfél-elégedettség. Vagy ahelyett, hogy problémamegoldó vagyok, inkább így: Gyors és hatékony megoldásaimmal sikerült elkerülnöm egy határidős projekt csúszását. Ezek a példák nemcsak üres általánosságok, hanem valós eredményeket mutatnak. Ez a különbség egy sablonos önéletrajz és egy ütős CV között."
  },

  {
    title: "Jogosítvány",
    placeholder: "Érdemes beleírni a B kategóriás jogosítványt az önéletrajzba, ha a pozíció megköveteli vagy előnyt jelenthet a vezetés (pl. területi képviselő, futár, szervizes munkák). Irodai munkánál nem feltétlen szükséges. Az Egyéb készségek részben elegendő ennyi: B kategóriás jogosítvány (aktív használat)."
  },

  {
    title: "Nyelvismeret",
    placeholder: "Fontos, hogy az önéletrajzban a nyelvtudásnál a jelenlegi, gyakorlati nyelvhasználati szintedet tüntesd fel. Megemlítheted a nyelvvizsgád szintjét is (pl. középfokú B2, felsőfokú C1), de ez önmagában nem mutatja meg, hogy most milyen szinten beszéled a nyelvet — például egy 5 évvel ezelőtti nyelvvizsga már nem feltétlenül tükrözi a valós tudásodat. Érdemes inkább azt megadni, hogy társalgási szintű, tárgyalóképes vagy folyékony nyelvtudásod van, és ha lehet, példákkal alátámasztani a nyelv aktív használatát. Ha az álláshirdetésben elvárás angol, német vagy bármilyen más nyelvtudás, akkor az önéletrajzot mindig az adott nyelven készítsd el – kivéve, ha kifejezetten más nyelvet kérnek."
  },
  {
    title: "Végzettség",
    placeholder: "Ha már van szakmai tapasztalatod, az oktatás menjen lejjebb. A munkaadók számára elsődleges a tapasztalat, hiszen az mutatja meg, milyen gyakorlati tudással rendelkezel. Ha már dolgoztál, ezért érdemes a szakmai tapasztalatot előre helyezni, az oktatás pedig csak kiegészítésként szerepeljen. Fordított sorrendben írd, a legfrissebb legyen legfelül. Ez a felépítés segíti a HR-eseket, hogy gyorsan lássák a legaktuálisabb végzettségeidet, ami általában a legrelevánsabb is a megpályázott pozíció szempontjából. Csak releváns végzettségeket tüntess fel – érettségi nem kell. Az általános iskolai vagy középiskolai végzettség már nem igazán számít, ha van felsőfokú diplomád. A munkaadók inkább a szakirányú tanulmányokra kíváncsiak, így csak azokat érdemes feltüntetni. Ha pályakezdő vagy, itt írhatsz részletesebben a szakdolgozatodról, projektekről. Még ha kevés munkatapasztalatod is van, az oktatás és az ahhoz kapcsolódó eredmények fontosak lehetnek. Írd le, miben voltál kiemelkedő az egyetemen vagy főiskolán, például ha kaptál Rektori vagy Dékáni dicséretet, vagy elnyertél tanulmányi ösztöndíjat. Vegyél bele egyéb jelentős eredményeket is: Részt vettél Tudományos Diákköri Konferencián (TDK), akár kari, akár országos szinten? OTDK-n is? Ezek komoly eredmények, főleg, ha helyezést vagy különdíjat szereztél. Ha voltál külföldi tanulmányi programon, például Erasmuson, ez szintén kiemelten fontos, mert azt mutatja, hogy tudsz alkalmazkodni, önálló vagy, és nem félsz új kihívásoktól. Plusz érték, ha van publikációd tudományos vagy szakmai folyóiratban, vagy ha a diplomamunkád dicsérettel lett kitüntetve. Ezek nemcsak jól mutatnak az önéletrajzban, hanem valós eredmények, amelyek azt üzenik rólad, hogy kitartó vagy, igényes a munkádra, és képes vagy többet nyújtani az átlagnál. Ezekkel az eredményekkel tudsz igazán kitűnni, amikor a HR-esek átnézik a pályázatodat. Ha még nem fejezted be a tanulmányaidat, de folyamatban vannak, ezt mindenképp tüntesd fel. Ez jelzi, hogy a végzettség megszerzése folyamatban van, és motivált vagy a tanulásban . Ha a pozíció megköveteli a végzettséget, és ez nálad nem teljesül, akkor szerepeltess olyan releváns alternatívákat, mint tréningek, tanúsítványok, szemináriumok, konferenciák, online képzések – vagy akár önállóan elsajátított tudás, ha az szorosan kapcsolódik a munkakörhöz."
  },
  {
    title: "Eredmények, díjak, ösztöndíjak",
    placeholder: "Ha kaptál pénzjutalmat, szakmai díjat, ösztöndíjat – mindenképp említsd meg! Az ilyen elismerések nagyon fontosak, mert konkrét bizonyítékai annak, hogy a munkádat vagy tanulmányaidat kiemelkedő módon értékelték mások. Ezek az eredmények mutatják, hogy nem csak átlagos teljesítményt nyújtasz, hanem valami pluszt tudsz adni. Konkrét példákkal érdemes dolgozni, hogy a HR-eseknek világos legyen, milyen típusú eredményről van szó: Például: Több negyedéves pénzjutalom kimagasló hatósági munkáért – ez azt jelzi, hogy a munkádban folyamatosan jól teljesítettél, és a feletteseid is értékelték ezt. Miért fontosak ezek az eredmények? Hitelességet adnak: Nemcsak azt állítod, hogy jó vagy valamiben, hanem bizonyítod is. Motivációról és elkötelezettségről árulkodnak: Ezek az elismerések azt mutatják, hogy igyekszel többet kihozni magadból, és kitartó vagy. Megkülönböztetnek a többi jelentkezőtől: Sok pályázó nem tünteti fel ezeket az eredményeket, pedig ezek könnyen lehetnek a döntő tényezők egy versenyhelyzetben."
  },
  {
    title: "Egyéb eredmények",
    placeholder: "Milyen további eredményeket, díjakat vagy ösztöndíjakat érdemes még megemlíteni? Tanulmányi ösztöndíjak, amelyeket a jó tanulmányi eredményedért kaptál. Versenyeken elért helyezések, különösen szakmai vagy tanulmányi versenyeken (például programozói verseny, marketingverseny). Munkahelyi elismerések, például Az év dolgozója, „Kiemelkedő projektvezető” vagy bármilyen más hivatalos díj. Tudományos elismerések, például publikációkért kapott díjak vagy kutatói ösztöndíjak. Egyéb elismerések, például önkéntes munkáért kapott díjak, társadalmi vagy közösségi munkában való kiemelkedő részvételért. Minden díjat vagy ösztöndíjat érdemes röviden megmagyarázni, ha nem teljesen egyértelmű, miben áll a jelentősége. Például: Kari tanulmányi ösztöndíj, amelyet a legjobb tanulmányi eredményért kaptam az évfolyamomon vagy Cégünk belső innovációs versenyén első helyezés."
  },
  {
    title: "Tagságok, szervezeti kapcsolatok",
    placeholder: "Mezőben előre elhelyezett szöveg: Mindenképp érdemes feltüntetni a szakmai vagy egyéb szervezetekben való tagságodat az önéletrajzban, mert nagyon előnyös lehet! Ha még nem vagy tag, érdemes csatlakozni, hiszen a tagságok számos pozitív üzenetet közvetítenek a leendő munkáltató felé: Bővíti a szakmai és személyes hálózatodat, ami hosszú távon akár álláslehetőségekhez vagy együttműködésekhez is vezethet. Kezdeményezőkészséget mutat, hiszen aktívan részt veszel egy közösség életében, és nem csak passzívan vársz a lehetőségekre. Ambíciót jelez, hogy fejlődni, tanulni és kapcsolódni szeretnél más szakemberekhez. Ugyanakkor fontos megjegyezni, hogy az önéletrajzba ne kerüljön be semmilyen, faji, vallásos vagy családi állapottal kapcsolatos tagság vagy szervezet, mert ezek személyes adatnak számítanak, és nem relevánsak a munkavállalás szempontjából. Önkéntes munka: Az önkéntes munkáidat mindig nevezd meg pontosan, mert ezek is értékes tapasztalatnak számítanak! Például: Lányszövetség pénztárosa Sportcsapat kapitánya Elnök, alelnök, titkár vagy tanácsadó testület tagja Az önkéntes tevékenységek nemcsak az elkötelezettségedet mutatják, hanem lehetőséget adnak arra is, hogy különféle készségeidet bemutasd, mint például: értékesítés (sales) tervezés (planning) pénzgyűjtés tárgyalástechnika marketing könyvelés Javasolt cím az önéletrajzban: Ez a rész jól megjeleníthető például így: Professional Memberships and Affiliations vagy magyarul Szakmai tagságok és szervezeti kapcsolatok"
  },
  {
    title: "Pozícióra szabás",
    placeholder: "Manapság az álláspályázatoknál már nem elég egyetlen, mindenhol ugyanúgy használt önéletrajzzal jelentkezni. Minden pozícióhoz egyedi, személyre szabott CV-t kell készíteni, amely pontosan illeszkedik az adott állás elvárásaihoz. Ez azt jelenti, hogy mindig olvasd el figyelmesen az álláshirdetést, és az abban szereplő kulcsszavakat, képességeket, elvárásokat építsd be az önéletrajzodba. Ez különösen fontos azért, mert a legtöbb nagyobb cég ma már ATS-t, azaz automatikus jelentkezéskezelő rendszert használ, amely ezek alapján szűri a beérkező anyagokat. Ha nem használod a megfelelő szavakat és kifejezéseket, nagy eséllyel ki sem kerül a CV-d a rostán. Az egyszerű, általános önéletrajz helyett érdemes pozíció-specifikus narratívát kialakítani, vagyis azt bemutatni, hogy pontosan mit keres a cég, és te milyen módon vagy képes arra válaszolni, megoldani a feladatokat. Így sokkal meggyőzőbb, relevánsabb anyagot nyújtasz be, amely jobban felkelti a HR-es vagy a vezető figyelmét. Ez a tudatos, célzott önéletrajz-készítés nem csak növeli az esélyeidet a meghívóra, hanem azt is mutatja, hogy komolyan vetted a jelentkezést, és valóban érted az adott pozíció követelményeit."
  },
  {
    title: "Linkek és digitális jelenlét",
    placeholder: "Manapság a digitális jelenlét egyre fontosabb része a szakmai megjelenésnek, ezért, ha rendelkezel saját portfólióval, szakmai bloggal, vagy akár egy a munkádhoz kapcsolódó YouTube-csatornával, mindenképp érdemes ezeket megemlíteni az önéletrajzodban. Ezek a linkek segíthetnek abban, hogy a munkáltató ne csak az írott anyagod alapján ítéljen meg, hanem közvetlenül megtekintse a munkáidat, bemutatóidat, vagy a szakterületedhez kapcsolódó tartalmaidat. Így még hitelesebbé válik a szakmai profilod, és megmutathatod az elhivatottságodat, kreativitásodat, valamint azokat a készségeket, amelyekkel kiemelkedsz a többi jelentkező közül. Fontos azonban, hogy csak akkor tüntesd fel ezeket a linkeket, ha a tartalom valóban igényes, profi színvonalú, és releváns a megpályázott pozíció szempontjából. Egy rendezetlen, elavult vagy nem kapcsolódó oldal vagy csatorna akár ronthatja is az összképet, ezért mindig gondosan válaszd meg, mit mutatsz meg a leendő munkáltatódnak. Ha nincs ilyen digitális felületed, de a munkád megkívánja, érdemes elgondolkodni ilyesmi létrehozásán, hiszen ez egy modern, erős kiegészítője lehet az önéletrajzodnak és a szakmai arculatodnak."
  },
  {
    title: "Pályamódosítóknak",
    placeholder: "Ha pályát váltasz, fontos, hogy egyértelműen kommunikáld, miért szeretnél az új területen dolgozni, és milyen korábbi tapasztalataid, képességeid segítenek ebben az átmenetben. Érdemes az önéletrajz elején vagy végén egy rövid, 1-2 mondatos összefoglalót elhelyezni, amely bemutatja, miben vagy erős, és hogyan tudod hasznosítani eddigi tudásodat az új pozícióban. Például: Hatósági szakterületen szerzett tapasztalataimat most a logisztika területén szeretném kamatoztatni, ahol strukturált gondolkodásommal, pontos adminisztrációs készségemmel és rendszerismeretemmel tudok értéket teremteni. Ezzel a rövid, lényegretörő zárással vagy bevezetéssel a HR-eseknek és vezetőknek segítesz megérteni, hogy milyen célok vezérelnek, és hogy az eddigi tapasztalataid hogyan illeszkednek az új szakmához. Ez az egy-két mondat segít kitűnni azok közül, akik csak általánosan keresnek állást, és megerősíti, hogy tudatosan készülsz az új területre."
  },
  {
    title: "Fizetési igény",
    placeholder: "Az önéletrajzban alapvetően nem szükséges megadni a fizetési igényt sőt, sok esetben ez inkább hátrány lehet. Csak akkor tüntesd fel, ha az álláshirdetésben külön kérik, különben hagyd ki ezt az információt."
  }
];

const container = document.getElementById("criteria-container");

criteria.forEach((item) => {
  const div = document.createElement("div");
  div.className = "criteria";

  // Törlés gomb
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.title = "Törlés";
  deleteBtn.innerText = "❌";

  // Cím
  const title = document.createElement("h3");
  title.textContent = item.title;

  // Szövegmező szerkesztéshez
  const textarea = document.createElement("textarea");
  textarea.value = item.placeholder;

  // Print-re szánt div (nyomtatáskor jelenik meg)
  const printDiv = document.createElement("div");
  printDiv.className = "print-text";
  printDiv.textContent = item.placeholder;

  // Automatikus méretezés funkció
  const autoResize = () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  // Szöveg módosításkor frissítse a nyomtatási divet is
  textarea.addEventListener("input", () => {
    autoResize();
    printDiv.textContent = textarea.value;
  });

  setTimeout(() => {
    autoResize();
    printDiv.textContent = textarea.value;
  }, 0);

  // Törlés művelet
  deleteBtn.addEventListener("click", () => {
    div.remove();
  });

  // Összeállítás
  div.appendChild(deleteBtn);
  div.appendChild(title);
  div.appendChild(textarea);
  div.appendChild(printDiv);

  container.appendChild(div);
});


function downloadPDF() {
  window.print();
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
