// Radce STK — data overena proti zakonu 56/2001 Sb., 361/2000 Sb. a oficialnim zdrojum MD CR
export const radce = [
  {
    slug: 'platnost-stk',
    titulo: 'Ověření platnosti STK online zdarma: podle VIN za minutu',
    corto: 'Platnost STK',
    icono: 'fa-calendar-check',
    gancho: 'Do kdy vám platí technická? Zjistíte to zdarma online.',
    quick: 'Platnost STK ověříte zdarma na oficiálním webu Ministerstva dopravy dataovozidlech.cz — stačí zadat VIN (17místný kód z techničáku). Přesné datum konce platnosti najdete i na Portálu dopravy. Orientačně ho prozradí červená nálepka na zadní registrační značce (měsíc a rok), ale pozor: STK neplatí do konce měsíce, nýbrž do konkrétního dne.',
    desc: 'Jak zdarma ověřit platnost STK online: oficiální nástroje Ministerstva dopravy (dataovozidlech.cz, Portál dopravy), co říká nálepka na značce a nejčastější mýty.',
    cuerpo: [
      ['p', 'Od roku 2024 se výsledky technických prohlídek evidují elektronicky a papírové protokoly ustupují — o to důležitější je vědět, kde se na termín podívat online. Dobrá zpráva: jde to zdarma a bez registrace.'],
      ['h2', 'Oficiální ověření zdarma (doporučeno)'],
      ['ol', ['Otevřete <a href="https://www.dataovozidlech.cz/">dataovozidlech.cz</a> — oficiální aplikaci Ministerstva dopravy nad Registrem silničních vozidel.', 'Zadejte <strong>VIN</strong> vozidla (17 znaků; najdete ho v osvědčení o registraci nebo vyražený na karoserii).', 'V detailu vozidla uvidíte datum poslední prohlídky i <strong>konec platnosti STK</strong>, včetně stavu tachometru z minulých kontrol.']],
      ['p', 'Stejné údaje najdete po přihlášení i na <a href="https://portaldopravy.cz/">Portálu dopravy</a> (s Identitou občana), kde vidíte všechna svá vozidla pohromadě. Historii kontrol a tachometru nabízí také oficiální <a href="https://www.kontrolatachometru.cz/">kontrolatachometru.cz</a>.'],
      ['h2', 'Co prozradí nálepka na značce'],
      ['p', 'Červená kontrolní nálepka na zadní registrační značce nese vyražený <strong>rok a měsíc</strong> konce platnosti. Je to ale jen orientační údaj — platnost končí <strong>konkrétním dnem</strong>, který odpovídá dni provedení poslední prohlídky. Rozšířený mýtus „platí to do konce měsíce" vás může stát pokutu.'],
      ['h2', 'Jak se platnost počítá'],
      ['ul', ['Nová lhůta běží <strong>ode dne provedení prohlídky</strong>, ne od konce té předchozí — když přijedete o měsíc dřív, o ten měsíc přicházíte.', 'Osobní auto: první STK po 4 letech, dále každé 2 roky. Ostatní kategorie v <a href="/lhuty-stk/">přehledu lhůt</a>.', 'Propadlá STK = <a href="/jizda-bez-stk/">pokuta a zákaz jízdy</a>; termín si hlídejte s předstihem, konec měsíce bývá na stanicích plný.']]
    ],
    faq: [
      ['Můžu platnost ověřit podle SPZ (registrační značky)?', 'Oficiální nástroje Ministerstva dopravy pracují s VIN, ne se SPZ — VIN je jednoznačný identifikátor vozidla. Komerční weby nabízející kontrolu „podle SPZ" čerpají z méně spolehlivých zdrojů a údaj nemusí být aktuální.'],
      ['Kde najdu VIN?', 'V osvědčení o registraci vozidla (ORV, „malý techničák"), na štítku za čelním sklem u řidiče, na rámu dveří nebo vyražený na karoserii. Je to vždy 17 znaků.'],
      ['Přišel jsem o nálepku — co teď?', 'Nálepka je jen kontrolní prvek; rozhodující je elektronická evidence. Náhradní nálepku vám vylepí kterákoli STK po ověření platné prohlídky v systému.'],
      ['Platí česká STK v zahraničí?', 'Ano, pravidelná technická prohlídka provedená v ČR je uznávána v celé EU. Při delším pobytu v zahraničí ale myslete na to, že prohlídku lze absolvovat jen na stanici v ČR.']
    ]
  },
  {
    slug: 'cena-stk',
    titulo: 'Kolik stojí STK v roce 2026: ceny prohlídky a emisí',
    corto: 'Cena STK',
    icono: 'fa-money-bill',
    gancho: 'Orientační ceník 2026 — a proč se ceny mezi stanicemi liší.',
    quick: 'Ceny STK nejsou centrálně regulované — každá stanice si určuje vlastní ceník. Za technickou prohlídku osobního auta včetně měření emisí zaplatíte v roce 2026 zpravidla 1 300 až 2 700 Kč (benzín a nafta podobně, LPG/CNG dráž). Motocykl vyjde na cca 700 až 1 100 Kč. Opakovaná prohlídka do 30 dnů bývá zhruba za polovinu.',
    desc: 'Kolik stojí technická kontrola v roce 2026: orientační ceny STK + emise pro auto, motorku a přívěs, proč se ceníky liší a jak ušetřit.',
    cuerpo: [
      ['p', 'Na rozdíl od správních poplatků si cenu technické prohlídky určuje každá stanice sama. Proto se stejná služba může o pár set korun lišit i mezi sousedními městy — a proto se vyplatí ceník znát dřív, než vyrazíte.'],
      ['h2', 'Orientační ceny 2026'],
      ['ul', ['<strong>Osobní auto (benzín/nafta), STK + emise:</strong> 1 300 – 2 700 Kč (samotná prohlídka cca 1 200–1 700 Kč, měření emisí 800–900 Kč).', '<strong>Vozidla na LPG/CNG:</strong> zpravidla od 2 000 Kč výš — měření je náročnější.', '<strong>Motocykl:</strong> cca 700 – 1 100 Kč.', '<strong>Přívěsný vozík:</strong> obvykle 500 – 900 Kč (emise se neměří).', '<strong>Opakovaná prohlídka do 30 dnů</strong> po neúspěchu: kontrolují se jen vytčené závady, cena bývá zhruba poloviční — detail v <a href="/opakovana-prohlidka/">samostatném článku</a>.', '<strong>Evidenční kontrola</strong> (při prodeji/přepisu): obvykle 500 – 1 000 Kč.']],
      ['h2', 'Proč se ceny liší a jak ušetřit'],
      ['ul', ['Stanice ve velkých městech a s nadstandardní otevírací dobou bývají dražší; menší stanice v okresních městech často nabídnou lepší cenu.', 'Obvolejte 2–3 stanice v okolí — v našem <a href="/stanice/">přehledu</a> má každá přímý telefon.', 'Nejezděte zbytečně brzy: nová platnost běží ode dne prohlídky, takže dřívějším termínem si platnost fakticky zkracujete.', 'Připravte vozidlo předem (<a href="/co-vzit-na-stk/">checklist</a>) — neúspěch znamená opakovanou prohlídku a další platbu.']],
      ['h2', 'Co v ceně není'],
      ['p', 'Případné opravy závad, výměna žárovek či pneumatik a u přestavěných vozidel revize LPG. Pokud stanice najde vážnou závadu (kategorie B), zaplatíte prohlídku i tak — proto se předběžná kontrola v servisu u starších vozů vyplatí.']
    ],
    faq: [
      ['Je někde oficiální ceník STK?', 'Ne — ceny nejsou regulované žádným předpisem, jde o smluvní ceny jednotlivých provozovatelů. Oficiální je pouze seznam autorizovaných stanic, který vede Ministerstvo dopravy.'],
      ['Platí se emise zvlášť?', 'Měření emisí je dnes součástí technické prohlídky a většina stanic účtuje balíček STK + emise dohromady. V ceníku ale položky často uvidíte rozepsané zvlášť.'],
      ['Kolik stojí STK u nákladního auta?', 'U vozidel nad 3,5 tuny počítejte zpravidla s 2 500 – 4 500 Kč podle kategorie; tyto vozy navíc jezdí na prohlídku každý rok.']
    ]
  },
  {
    slug: 'lhuty-stk',
    titulo: 'Lhůty STK 2026: kdy na technickou s autem, motorkou i přívěsem',
    corto: 'Lhůty STK',
    icono: 'fa-clock',
    gancho: 'Auto 4+2, motorka 6+4 — celá tabulka podle zákona.',
    quick: 'Intervaly technických prohlídek určuje § 40 zákona č. 56/2001 Sb.: osobní auto do 3,5 t jede poprvé po 4 letech a pak každé 2 roky. Motocykly mají po novele č. 130/2025 Sb. první prohlídku po 6 letech a dále každé 4 roky. Nákladní vozy nad 3,5 t, autobusy a taxi jezdí každý rok. Lhůta se vždy počítá ode dne provedení prohlídky.',
    desc: 'Kompletní lhůty technických prohlídek 2026 podle zákona 56/2001 Sb.: osobní auta, motocykly (novela 130/2025), přívěsy, nákladní vozy, autobusy, taxi a traktory.',
    cuerpo: [
      ['p', 'Jediná tabulka, kterou k termínům STK potřebujete — podle § 40 zákona č. 56/2001 Sb. v aktuálním znění.'],
      ['h2', 'Přehled lhůt podle kategorie'],
      ['ul', ['<strong>Osobní automobil do 3,5 t:</strong> první prohlídka po 4 letech od registrace, dále každé 2 roky.', '<strong>Nákladní vozidlo do 3,5 t a bržděný přívěs do 3,5 t:</strong> stejně — 4 roky a pak po 2 letech.', '<strong>Motocykl, tříkolka, čtyřkolka (kategorie L):</strong> první po 6 letech, dále každé 4 roky (interval prodloužila novela č. 130/2025 Sb.).', '<strong>Nebržděný přívěs do 750 kg:</strong> první po 6 letech, dále každé 4 roky.', '<strong>Nákladní vozidlo nad 3,5 t, autobus:</strong> první prohlídka po 1 roce, dále každý rok.', '<strong>Taxi a vozidla s právem přednostní jízdy:</strong> každý rok.', '<strong>Traktor do 40 km/h:</strong> první po 4 letech, dále každé 4 roky.']],
      ['h2', 'Tři pravidla, která řidiče nejčastěji nachytají'],
      ['ol', ['<strong>Lhůta běží ode dne prohlídky</strong>, ne od data expirace té minulé. Přijedete-li o dva měsíce dřív, platnost máte o dva měsíce kratší — ideální je jet v posledních dnech platnosti.', '<strong>Nálepka ukazuje jen měsíc a rok</strong> — platnost končí konkrétním dnem. Přesné datum si <a href="/platnost-stk/">ověřte online zdarma</a>.', '<strong>Žádná toleranční lhůta neexistuje:</strong> den po expiraci už je jízda přestupkem s <a href="/jizda-bez-stk/">pokutou</a>.']],
      ['h2', 'Speciální případy'],
      ['p', 'Dovezené vozidlo absolvuje prohlídku při registraci v ČR. Veteráni s testací mají vlastní režim. Při přestavbě (typicky LPG) je nutná mimořádná prohlídka. Evidenční kontrola při prodeji je samostatný úkon a platnost STK neprodlužuje.']
    ],
    faq: [
      ['Kdy má nové auto první STK?', 'Po 4 letech od první registrace. Pozor u předváděcích a zánovních vozů — lhůta se počítá od první registrace vozidla, ne od vaší koupě.'],
      ['Změnila novela 130/2025 něco pro osobní auta?', 'Hlavní změnou je prodloužení intervalu u motocyklů na 6+4 roky. U osobních aut zůstává režim 4 roky a poté každé 2 roky.'],
      ['Můžu na STK dřív, než mi končí platnost?', 'Můžete kdykoli — ale nová platnost poběží ode dne nové prohlídky, takže si zbývající dobu „umažete". Jet těsně před koncem platnosti je finančně nejvýhodnější.']
    ]
  },
  {
    slug: 'jizda-bez-stk',
    titulo: 'Jízda bez platné STK: pokuty 2026 a jak se rychle zlegalizovat',
    corto: 'Jízda bez STK',
    icono: 'fa-triangle-exclamation',
    gancho: 'Propadlá technická: co reálně hrozí a co dělat hned.',
    quick: 'Jízda s propadlou STK je přestupek podle zákona č. 361/2000 Sb.: na místě hrozí pokuta do 2 500 Kč. Pokud je vozidlo navíc v technicky nezpůsobilém stavu, sankce ve správním řízení může dosáhnout 10 000 Kč, přičtou se trestné body a hrozí i zákaz řízení na 6 až 12 měsíců. Vozidlo bez platné prohlídky nesmí na veřejnou komunikaci — ani „jen k STK".',
    desc: 'Pokuta za jízdu bez platné STK v roce 2026: kolik zaplatíte na místě a ve správním řízení, kdy hrozí body a zákaz řízení, co pojišťovna a jak se rychle zlegalizovat.',
    cuerpo: [
      ['p', 'Propadlá technická je jedním z nejčastějších „administrativních" prohřešků českých řidičů — a policie ji při kontrole odhalí za pár sekund nahlédnutím do registru. Tady je střízlivý přehled, co hrozí a jak z toho ven.'],
      ['h2', 'Sankce v kostce'],
      ['ul', ['<strong>Propadlá STK, vozidlo jinak v pořádku:</strong> pokuta příkazem na místě do <strong>2 500 Kč</strong>, bez trestných bodů.', '<strong>Vozidlo v technicky nezpůsobilém stavu</strong> (nebezpečné závady): ve správním řízení pokuta až <strong>10 000 Kč</strong>, <strong>trestné body</strong> a možný <strong>zákaz řízení na 6–12 měsíců</strong>; policie může na místě zakázat další jízdu.', '<strong>Pojišťovna:</strong> při nehodě s vozidlem bez platné STK riskujete krácení plnění nebo regres — škoda může jít za vámi.']],
      ['h2', 'Mýtus „jedu přece na STK"'],
      ['p', 'Zákon žádnou výjimku pro cestu na stanici nezná. Vozidlo s propadlou prohlídkou na pozemní komunikaci nesmí; v praxi bývá policie k řidiči mířícímu prokazatelně na STK shovívavá, ale právní nárok na toleranci neexistuje. Jistotu dává jedině odtah nebo převoz na vozíku.'],
      ['h2', 'Jak se zlegalizovat ve třech krocích'],
      ['ol', ['<a href="/platnost-stk/">Ověřte si přesné datum</a>, od kdy je prohlídka propadlá — rozhoduje den, ne měsíc na nálepce.', 'Zavolejte nejbližší stanici z našeho <a href="/stanice/">přehledu</a> a domluvte nejbližší termín; zmíňte, že máte propadlou STK.', 'Vozidlo na stanici dopravte v souladu se zákonem a projděte prohlídkou — od jejího dne běží nová platnost v plné délce.']],
      ['h2', 'Prevence na 30 vteřin'],
      ['p', 'Zapište si konec platnosti do kalendáře s měsíčním předstihem. Konec měsíce je na stanicích nejvytíženější — kdo jede o týden dřív (v rámci posledních dnů platnosti), vyhne se frontám i riziku, že volný termín nenajde.']
    ],
    faq: [
      ['Dostanu za propadlou STK trestné body?', 'Za samotnou propadlou prohlídku u jinak způsobilého vozidla body nehrozí — jen pokuta. Body a přísnější sankce nastupují, když je vozidlo v technicky nezpůsobilém stavu.'],
      ['Jak dlouho po expiraci můžu ještě jezdit?', 'Ani den. Platnost končí konkrétním datem a od následujícího dne je jízda přestupkem. Žádná ochranná lhůta v zákoně není.'],
      ['Auto dlouho stálo a STK propadla o roky — co s ním?', 'Nic se nedokládá zpětně: objednáte se na běžnou prohlídku a po jejím absolvování běží nová platnost. Na stanici ale vozidlo nesmíte dopravit po vlastní ose po veřejné komunikaci — použijte odtah.']
    ]
  },
  {
    slug: 'co-vzit-na-stk',
    titulo: 'Co vzít s sebou na STK a jak připravit auto: checklist 2026',
    corto: 'Co vzít na STK',
    icono: 'fa-list-check',
    gancho: 'Doklady + pětiminutová kontrola, díky které projdete napoprvé.',
    quick: 'Na technickou prohlídku potřebujete osvědčení o registraci vozidla (ORV, „malý techničák") a u přestavěných vozidel doklady k přestavbě (typicky LPG). Od roku 2024 je evidence elektronická, papírový protokol o emisích už nenoste. Zbytek je příprava vozidla: světla, kontrolky, pneumatiky a viditelné úniky kapalin — banality, na kterých padá nejvíc prohlídek.',
    desc: 'Co si vzít na STK v roce 2026: povinné doklady, co už nepotřebujete, a checklist přípravy vozidla podle nejčastějších závad (světla, kontrolky, pneu, koroze).',
    cuerpo: [
      ['p', 'Polovina neúspěchů na STK nejsou skryté technické vady, ale věci, které odhalíte doma za pět minut. Tady je kompletní příprava — papíry i vozidlo.'],
      ['h2', 'Doklady'],
      ['ul', ['<strong>Osvědčení o registraci vozidla</strong> (ORV / malý technický průkaz) — jediný dokument, který stanice potřebuje vždy.', '<strong>Doklady k přestavbě</strong> u vozidel na LPG/CNG (revize nádrže) a u jiných schválených přestaveb.', '<strong>Od 1. 1. 2024:</strong> velké technické průkazy se nevydávají a výsledky prohlídek se evidují elektronicky — papírové potvrzení o emisích s sebou nosit nemusíte.']],
      ['h2', 'Pětiminutový checklist vozidla'],
      ['ol', ['<strong>Světla:</strong> obrysová, potkávací, dálková, brzdová, blinkry, zpátečka, osvětlení SPZ — projděte s pomocníkem, prasklá žárovka je klasika.', '<strong>Kontrolky:</strong> svítící „check engine", ABS nebo airbag znamenají problém — nechte vyčíst a vyřešit předem.', '<strong>Pneumatiky:</strong> dezén min. 1,6 mm, bez viditelného poškození, stejný rozměr na nápravě dle techničáku.', '<strong>Skla a stěrače:</strong> prasklina ve stíraném poli řidiče vadí; lišty ať skutečně stírají.', '<strong>Úniky kapalin a koroze:</strong> olejové skvrny pod autem a prorezlé nosné části jsou vážné závady.', '<strong>Registrační značky:</strong> obě, čitelné, pevně uchycené.']],
      ['h2', 'Praktické tipy z praxe'],
      ['ul', ['Přijeďte s <strong>motorem zahřátým</strong> na provozní teplotu — emise studeného motoru dopadají hůř.', 'U starších vozů zvažte <strong>předběžnou prohlídku v servisu</strong>; oprava předem je levnější než opakovaná STK.', 'Vyklidit kufr nemusíte, ale technik potřebuje přístup k rezervě/povinné výbavě a VIN.']]
    ],
    faq: [
      ['Musí na STK jet majitel vozidla?', 'Ne — vozidlo může přistavit kdokoli, kdo předloží ORV. Plná moc se nevyžaduje.'],
      ['Kontroluje se na STK povinná výbava a lékárnička?', 'Předmětem prohlídky je technický stav vozidla podle vyhlášky č. 211/2018 Sb. Obsah lékárničky řeší pravidla provozu, nikoli STK — technik ale musí mít přístup k místům kontroly.'],
      ['Jak dlouho prohlídka trvá?', 'Samotný úkon 30–60 minut včetně emisí; s čekáním počítejte hodinu až dvě podle vytížení stanice. Termín po telefonu čekání výrazně zkrátí.']
    ]
  },
  {
    slug: 'opakovana-prohlidka',
    titulo: 'Neprošli jste STK? Závady A, B, C a opakovaná prohlídka do 30 dnů',
    corto: 'Opakovaná prohlídka',
    icono: 'fa-rotate-right',
    gancho: 'Co znamená vážná závada a jak projít napodruhé levněji.',
    quick: 'Závady na STK se dělí do tří kategorií: A (drobná — projdete s poznámkou), B (vážná — vozidlo je způsobilé jen 30 dnů, do té doby závadu odstraňte a absolvujte opakovanou prohlídku) a C (nebezpečná — vozidlo je technicky nezpůsobilé a nesmí dál jet). Opakovaná prohlídka do 30 dnů kontroluje jen vytčené závady a stojí zhruba polovinu.',
    desc: 'Co dělat, když vozidlo neprojde STK: rozdíl mezi závadami A, B a C, lhůta 30 dnů na opakovanou prohlídku, její cena a nejčastější chyby řidičů.',
    cuerpo: [
      ['p', '„Neprošel jsem" zní hrozivě, ale ve většině případů jde o závadu kategorie B s jasným postupem: opravit a do 30 dnů se vrátit. Tady je celý mechanismus.'],
      ['h2', 'Tři kategorie závad'],
      ['ul', ['<strong>A — drobná závada:</strong> nebrání provozu; prohlídkou procházíte, závadu odstraňte v rozumné době (např. mírně nefunkční ostřikovač).', '<strong>B — vážná závada:</strong> vozidlo je způsobilé k provozu jen na <strong>30 dnů</strong>. V této lhůtě závadu odstraňte a absolvujte <strong>opakovanou prohlídku</strong>; jinak platnost končí a začínáte znovu (a dráž).', '<strong>C — nebezpečná závada:</strong> vozidlo je <strong>technicky nezpůsobilé</strong> a na veřejnou komunikaci nesmí — ze stanice byste správně měli odjet odtahem.']],
      ['h2', 'Opakovaná prohlídka v praxi'],
      ['ol', ['Se závadou B máte <strong>30 kalendářních dnů</strong> ode dne prohlídky.', 'Opravu proveďte v servisu (nebo svépomocí, jde-li o banalitu typu žárovka).', 'Vraťte se <strong>ideálně na stejnou stanici</strong>: do 30 dnů se kontrolují jen vytčené závady (částečná prohlídka) a cena bývá zhruba poloviční oproti plné.', 'Po 30 dnech nebo na jiné stanici může být nutná plná prohlídka za plnou cenu — proto lhůtu nepropásněte.']],
      ['h2', 'Nejčastější závady kategorie B'],
      ['p', 'Statistiky prohlídek dlouhodobě vedou: nefunkční či špatně seřízená světla, nadměrná vůle v řízení a čepech, zkorodované brzdové trubky a nosné části, prasklé pružiny, nevyhovující emise a poškozené pneumatiky. Většině z nich předejdete <a href="/co-vzit-na-stk/">přípravou před první návštěvou</a>.']
    ],
    faq: [
      ['Můžu se závadou B normálně jezdit?', 'Ano, po dobu 30 dnů je vozidlo způsobilé k provozu — lhůta slouží právě k tomu, abyste závadu odstranili a dojeli na opakovanou prohlídku.'],
      ['Musím na opakovanou prohlídku na stejnou STK?', 'Nemusíte, ale vyplatí se to: stejná stanice do 30 dnů provádí částečnou prohlídku vytčených závad za nižší cenu. Jinde po vás mohou chtít plnou prohlídku.'],
      ['Co když to do 30 dnů nestihnu?', 'Lhůta propadá a čeká vás kompletní technická prohlídka za plnou cenu. Pokud mezitím skončila i platnost původní STK, platí navíc pravidla o jízdě bez platné prohlídky.']
    ]
  }
];
