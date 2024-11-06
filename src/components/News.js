import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../Style/News.css";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Roger Åberg",
      title: "Följ valet direkt på hemskärmen",
      description:
        "För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…",
      url: "https://feber.se/mobil/folj-valet-direkt-pa-hemskarmen/473649/",
      urlToImage: "https://static.feber.se/article_images/60/38/13/603813.jpg",
      publishedAt: "2024-11-05T14:20:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21737 chars]",
    },
    {
      source: {
        id: null,
        name: "Europapress.es",
      },
      author: null,
      title:
        "Las ventas de coches en Alemania se recuperan un 6% en octubre, hasta las 231.992 unidades",
      description:
        "Las matriculaciones de turismos y todoterreno en Alemania durante el mes de octubre llegaron a las 231.992 unidades, un 6% más que en el mismo mes del año pasado, según los datos de la Oficina Federal de Vehículos Motorizados (KBA, por sus siglas en alemán) p…",
      url: "https://www.europapress.es/motor/sector-00644/noticia-ventas-coche-alemania-recuperan-octubre-231992-unidades-20241105151536.html",
      urlToImage:
        "https://img.europapress.es/fotoweb/fotonoticia_20241105151536_1200.jpg",
      publishedAt: "2024-11-05T14:15:36Z",
      content:
        "Volkswagen se mantiene como la marca con más ventas en el país y crecen sus matriculaciones un 26,2% pese a su crisis interna\r\n MADRID, 5 Nov. (EUROPA PRESS) - \r\n Las matriculaciones de turismos y to… [+2642 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Bruce Brown",
      title: "Zero Motorcycles expands line with lighter, lower-cost models",
      description:
        'Zero plans to roll out six new sub-$10,000 models during the next two years in an "All Access" strategy to meet the needs of additional riders.',
      url: "https://www.digitaltrends.com/cars/zero-motorcycle-reveals-two-lightweight-off-road-electric-motorcycles/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/11/A-rider-sitting-on-a-Zero-XE-watching-another-rider-doing-donuts-in-the-dirt-on-a-Zero-XB.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-11-05T14:15:32Z",
      content:
        "Zero Motorcycles announced its 2025 lineup with two new lightweight electric on- and off-road models that expand its reach to the e-bike and light e-motorcycle markets. Zero’s current electric commut… [+5488 chars]",
    },
    {
      source: {
        id: null,
        name: "BFMTV",
      },
      author: "Kesso Diallo",
      title:
        '"Je suis foutu": Elon Musk va-t-il vraiment tout perdre en cas de défaite de Donald Trump?',
      description:
        "Ce mardi 5 janvier a lieu l’élection présidentielle aux États-Unis. La victoire de Donald Trump ou de Kamala Harris est susceptible d’avoir un impact sur Elon Musk. Mais à quel point?",
      url: "https://www.bfmtv.com/tech/actualites/je-suis-foutu-elon-musk-va-t-il-vraiment-tout-perdre-en-cas-de-defaite-de-donald-trump_AV-202411050609.html",
      urlToImage:
        "https://images.bfmtv.com/2ht8pnDADxvsELAXDzugNCTYUaI=/0x0:1920x1080/1920x0/images/Elon-Musk-lors-d-un-meeting-de-Donald-Trump-au-Madison-Square-Garden-New-York-le-27-octobre-2024-1970476.jpg",
      publishedAt: "2024-11-05T14:11:54Z",
      content:
        'Ce mardi 5 janvier a lieu lélection présidentielle aux États-Unis. La victoire de Donald Trump ou de Kamala Harris est susceptible davoir un impact sur Elon Musk. Mais à quel point?\r\n"Sil perd, je su… [+10533 chars]',
    },
    {
      source: {
        id: null,
        name: "Terra.com.br",
      },
      author: "Reuters",
      title:
        'Musk diz agora ser "inútil" fabricar um Tesla de US$25 mil para motoristas humanos',
      description:
        "Quando a Reuters informou em abril que a Tesla havia descartado os planos de fabricar um veículo ...",
      url: "https://www.terra.com.br/economia/musk-diz-agora-ser-inutil-fabricar-um-tesla-de-us25-mil-para-motoristas-humanos,5092b91c813e2c1b87c4f663ae341e94i4aakjuh.html",
      urlToImage:
        "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
      publishedAt: "2024-11-05T14:08:59Z",
      content:
        "Quando a Reuters informou em abril que a Tesla havia descartado os planos de fabricar um veículo elétrico de última geração ao preço de 25.000 dólares, as ações da montadora despencaram. O presidente… [+2948 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Roger Åberg",
      title: "Tibber släpper ny version av Pulse",
      description:
        "Pulse CT sitter direkt på kablarna\n\n\n\n\n\n\nLastbalansering, realtidsmätning och sånt är inte supersexigt kanske, men det är bra saker. Nu släpper Tibber sin fjärde Pulse i ordningen och denna heter Pulse CT. Man sätter den på sin elmätare och så kan man direkt …",
      url: "https://feber.se/pryl/tibber-slapper-ny-version-av-pulse/473645/",
      urlToImage: "https://static.feber.se/article_images/60/38/09/603809.jpeg",
      publishedAt: "2024-11-05T14:00:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+22199 chars]",
    },
    {
      source: {
        id: null,
        name: "Autobild.de",
      },
      author: "AUTO BILD",
      title: "Mehr Geld für Tesla-Mitarbeiter in Grünheide",
      description:
        "Der US-Autobauer Tesla hebt in seinem einzigen europäischen Werk in Grünheide bei Berlin die Löhne an. Einen Tarifvertrag gibt es am Standort nicht.",
      url: "https://www.autobild.de/artikel/tesla-erhoeht-gehaelter-in-gruenheide-meldung-27645551.html",
      urlToImage:
        "https://i.auto-bild.de/ir_img/3/8/4/3/7/9/3/Tesla_16_9-0f2d4b5514068f46.jpg?impolicy=og_images",
      publishedAt: "2024-11-05T13:58:00Z",
      content:
        "(dpa/AUTO BILD/KI) Die rund 12.000 Beschäftigten des US-Elektroautobauers Tesla am Standort Grünheide bei Berlin erhalten eine Gehaltserhöhung. Ab dem 1. November dieses Jahres werden die Gehälter um… [+1357 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Jean-Baptiste Passieux",
      title:
        "La Chine attaque l’Union européenne au sujet des voitures électriques : pourquoi cela pourrait se retourner contre nous",
      description:
        "La hausse des taxes douanières décidée par la Commission européenne sur les voitures électriques produites en Chine est officiellement mise en place. La réponse de la Chine ne s'est pas faite attendre : elle vient de déposer une plainte contre l'Union europée…",
      url: "https://www.frandroid.com/survoltes/voitures-electriques/2391950_la-chine-attaque-lunion-europeenne-au-sujet-des-voitures-electriques-pourquoi-cela-pourrait-se-retourner-contre-nous",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/11/xiaomi-su7-ultra-00007-1200x872-1.jpg",
      publishedAt: "2024-11-05T13:56:16Z",
      content:
        "La hausse des taxes douanières décidée par la Commission européenne sur les voitures électriques produites en Chine est officiellement mise en place. La réponse de la Chine ne s’est pas faite attendr… [+3695 chars]",
    },
    {
      source: {
        id: null,
        name: "Francetvinfo.fr",
      },
      author: null,
      title: "La police californienne s'équipe avec des Cybertrucks de Tesla",
      description:
        "Pour la première fois aux États-Unis une police municipale, celle d'Irvine, s’équipe de cet énorme véhicule de Tesla, au look futuriste.",
      url: "https://www.francetvinfo.fr/replay-radio/bientot-chez-vous/la-police-californienne-s-equipe-avec-des-cybertrucks-de-tesla_6851804.html",
      urlToImage:
        "https://www.francetvinfo.fr/pictures/6WEKOb3Xje3sD8L53n_3q3hEk0c/0x0:555x313/1500x843/2024/11/05/cybertruck-irvine-672a19a7bd6a2665747975.png",
      publishedAt: "2024-11-05T13:56:03Z",
      content:
        "Irvine est une ville de 300 000 habitants, au sud de Los Angeles, en Californie, régulièrement bien placée au classement des municipalités les plus sûres et les plus agréables du pays. En octobre 202… [+2541 chars]",
    },
    {
      source: {
        id: null,
        name: "Shifter.no",
      },
      author: "Redaksjonen shifter.no",
      title: "Nå starter Otovo Tesla-salget",
      description: "Tilbyr tyske kunder Teslas skalerbare batteriløsning.",
      url: "https://www.shifter.no/nyheter/na-starter-otovo-tesla-salget/360017",
      urlToImage:
        "https://image.shifter.no/360023.jpg?imageId=360023&x=0&y=0&cropw=100&croph=100&panox=0&panoy=0&panow=100&panoh=100&width=1200&height=683",
      publishedAt: "2024-11-05T13:55:10Z",
      content:
        "Denne uken lanserer vi vårt samarbeid med Tesla for å gjøre deres nye og oppgraderte Powerwall 3 tilgjengelig for kunder i Tyskland som ønsker moderne løsninger for energilagring og fleksibilitet. \r\n… [+1166 chars]",
    },
    {
      source: {
        id: null,
        name: "Dagospia.com",
      },
      author: null,
      title:
        "MO SO’ DAZI NOSTRI! – LA CONTROMOSSA DEL DRAGONE: SI RIVOLGE AL WTO, L’ORGANIZZAZIONE MONDIALE DEL COMMERCIO, CONTRO I DAZI SULLE AUTO ELETTRICHE CINESI IMPOSTI DALL’UE – E FINCHÉ LA BATTAGLIA LEGALE NON SARÀ RISOLTA, PECHINO HA ORDINATO ALLE CASE AUTOMOBILISTICHE, CONTROLLATE DIRETTAMENTE O INDIRETTAMENTE DALLO STATO, DI STOPPARE I PROGETTI PER INVESTIMENTI IN NUOVI SITI PRODUTTIVI IN EUROPA...",
      description:
        'Estratto dell’articolo di Diego Longhin per "la Repubblica"   XI JINPING E URSULA VON DER LEYEN La Cina porta i dazi di Buxelles contro le e-car di fronte alla Wto, l’organizzazione mondiale del commercio. A parole l’Europa e il Paese del Dragone dicono di vo…',
      url: "https://www.dagospia.com/rubrica-4/business/mo-so-rsquo-dazi-nostri-ndash-contromossa-dragone-si-rivolge-413723.htm",
      urlToImage:
        "https://cdn-static.dagospia.com/img/patch/06-2024/xi-jinping-dazi-auto-cina-cinesi-unione-europea-europa-ue-2002088.jpg",
      publishedAt: "2024-11-05T13:53:00Z",
      content:
        'Estratto dell’articolo di Diego Longhin per "la Repubblica"\r\nXI JINPING E URSULA VON DER LEYEN \r\nLa Cina porta i dazi di Buxelles contro le e-car di fronte alla Wto, l’organizzazione mondiale del com… [+2504 chars]',
    },
    {
      source: {
        id: "t3n",
        name: "T3n",
      },
      author: "Marvin Fuhrmann",
      title:
        "Wieso Elon Musk Trump unterstützt - und wieso er Kamala Harris fürchtet",
      description:
        "Die Wahl in den USA biegt auf die Zielgerade ein. Eine wichtige Person im Wahlkampf war und ist Elon Musk, der sich auf die Seite von Donald Trump gestellt hat. Warum Musk den Republikaner nicht nur mit seinem Geld unterstützt. Nicht nur Kamala Harris und Don…",
      url: "https://t3n.de/news/wieso-elon-musk-trump-unterstuetzt-und-wieso-er-kamala-harris-fuerchtet-1655554/",
      urlToImage:
        "https://t3n.de/news/wp-content/uploads/2023/10/shutterstock_2318800285.jpg",
      publishedAt: "2024-11-05T13:45:08Z",
      content:
        "Nicht nur Kamala Harris und Donald Trump haben im Laufe des US-Wahlkampfs 2024 Schlagzeilen gemacht. Immer wieder tauchte darin auch Tesla-CEO Elon Musk auf. Allem voran durch seine öffentliche Unter… [+7221 chars]",
    },
    {
      source: {
        id: null,
        name: "Fontanka.ru",
      },
      author: "Багликова Ирина",
      title:
        "Убиенная белка, отстреленное ухо, Трамп в McDonald's и мусоровозе. Самая яркая президентская кампания в США",
      description: "Самые странные выборы в Соединенных Штатах завершаются.",
      url: "https://www.fontanka.ru/2024/11/05/74298929/",
      urlToImage:
        "https://www.fontanka.ru/html-to-img/image?hash=6ezY7my2c_8kr4R4oYwLnw&ts=1730814664&url=https%3A%2F%2Fwww.fontanka.ru%2Fog-image%2Farticle-id5933132%2F&width=1200",
      publishedAt: "2024-11-05T13:43:02Z",
      content:
        ". 5 4 . «» , 47- : « ».\r\n 2024 - . .\r\n 80- :   78 ,   81 . , 4 - .   , ,     , . , , .\r\n - , , . , , . . , , .\r\n . , , , 60 .\r\n . , , . 14 . , .\r\n , . , , , , .   . - , .\r\n . 15 - -47. , , . , GoPro.… [+648 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Frode Wikesjö",
      title: "Släpptrailer för Empire of the Ants",
      description:
        "Simant?\n\n\n\n\n\n\n\n\n\n\nHär har vi släpptrailern för Empire of the Ants som släpps till PlayStation 5, Xbox Series X/S och Windows nu på torsdag. \n\nSjälva spelet är ett strategispel där man ska kontrollera ett gäng myror. Spelet är baserat på Bernard Werbers roman …",
      url: "https://feber.se/spel/slapptrailer-for-empire-of-the-ants/473643/",
      urlToImage: "https://i.ytimg.com/vi/xJDlwPZqv28/hqdefault.jpg",
      publishedAt: "2024-11-05T13:40:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21685 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Marie Lizak",
      title:
        "Rivale de la Renault 5 E-Tech, la Kia électrique à moins de 25 000 euros se montre indiscrète",
      description:
        "La marque coréenne Kia est actuellement en train de développer son futur EV2, un petit SUV électrique abordable, qui devrait coûter moins de 25 000 euros. Ce dernier rivalisera notamment avec la Renault 5 E-Tech et la Citroën ë-C3.",
      url: "https://www.frandroid.com/marques/kia/2391898_rivale-de-la-renault-5-e-tech-la-kia-electrique-a-moins-de-25-000-euros-se-montre-indiscrete",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/11/kia-ev9-72-1200x800-1.jpg",
      publishedAt: "2024-11-05T13:34:51Z",
      content:
        "La marque coréenne Kia est actuellement en train de développer son futur EV2, un petit SUV électrique abordable, qui devrait coûter moins de 25 000 euros. Ce dernier rivalisera notamment avec la Rena… [+4096 chars]",
    },
    {
      source: {
        id: null,
        name: "Bright.nl",
      },
      author: "info@bright.nl (Erwin Vogelaar)",
      title:
        "Elon Musk wil geen Tesla-smartphone maken, maar doet het misschien toch",
      description:
        "De ceo van Tesla schoof aan bij de Joe Rogan Experience, om te praten over de verkiezingen in de Verenigde Staten. Daar vertelde Musk ook wat over een mogelijke Tesla-smartphone.",
      url: "https://www.bright.nl/nieuws/1236498/elon-musk-wil-geen-tesla-smartphone-maken-maar-doet-het-misschien-toch.html",
      urlToImage:
        "https://webp.br.cdn.pxr.nl/news/2024/11/05/346b7342022efeddc091b101b4e59d29d24ff172.jpg?width=1200",
      publishedAt: "2024-11-05T13:28:54Z",
      content:
        "De ceo van Tesla schoof aan bij de Joe Rogan Experience, om te praten over de verkiezingen in de Verenigde Staten. Daar vertelde Musk ook wat over een mogelijke Tesla-smartphone.\r\nEr gaan al langer g… [+853 chars]",
    },
    {
      source: {
        id: null,
        name: "Süddeutsche Zeitung",
      },
      author: "Von Klaus Kloiber",
      title: "Wallfahrten in Bayern: Leonhardi mit Tesla statt Pferden?",
      description:
        "In Bayern ist Leonhardi-Hochsaison, überall wallfahren derzeit Pferdegespanne umher. Nun fordern Tierschützer ein Pferdeverbot. Nur: Wer soll nach dem traditionellen Schnapsausschank denn dann die Wägen ziehen?",
      url: "https://www.sueddeutsche.de/bayern/bayern-leonhardi-wallfahrt-pferde-verbot-peta-schnaps-lux.4kgdcuvtbCLtzqaEwognkx",
      urlToImage:
        "https://www.sueddeutsche.de/2024/11/05/2e1a2c49-e3b3-49d8-a53c-242c4b95e557.jpeg?q=60&fm=webp&width=1200&rect=0%2C24%2C3000%2C1688",
      publishedAt: "2024-11-05T13:27:47Z",
      content:
        "Hufgeklapper bestimmt zurzeit die Geräuschkulisse Bayerns: Prachtvolle Pferdegespanne ziehen Wägen mit Jung- und Schalkfrauen, Blaskapellen und allerlei Politprominenz zu Ehren des Heiligen Leonhard … [+2212 chars]",
    },
    {
      source: {
        id: null,
        name: "Ixbt.com",
      },
      author: "jin@ixbt.com (Jin)",
      title: "Илон Маск назвал условие для выпуска фирменного смартфона Tesla",
      description:
        "Генеральный директор компании Илон Маск заявил в подкасте Джо Рогану, что Tesla могла бы выпустить смартфон, но пока не ведет работы над ним. Маск заявил, что Tesla выпустит телефон, если Google и Apple будут цензурировать приложения компаний, которые управля…",
      url: "https://www.ixbt.com/news/2024/11/05/ilon-mask-nazval-uslovie-dlja-vypuska-firmennogo-smartfona-tesla-.html",
      urlToImage:
        "https://www.ixbt.com/img/n1/news/2024/10/2/ixbtmedia_elon_musk_holding_Tesla_smartphone_--v_6.1_e3f0bdbe-f06a-4334-aa6a-966ac410fca6_1_large.png",
      publishedAt: "2024-11-05T13:24:00Z",
      content:
        ", Tesla , .\r\n , Tesla , Google Apple , .\r\n«, », — , , Tesla, ,  Android iOS, , .\r\n« , - », — .\r\n Apple Google/Android  - , , , , , .",
    },
    {
      source: {
        id: null,
        name: "YEN.COM.GH",
      },
      author: "Kofi Owusu",
      title:
        'Kwaku Manu Praises Osei Kwame Despite For Buying A Cybertruck: "He Is The First African To Own One"',
      description:
        "Actor Kwaku Manu has reacted to Dr Osei Kwame Despite's purchase of a Tesla Cybertruck. He said that the businessman was the first African to buy the car.",
      url: "https://yen.com.gh/entertainment/celebrities/270462-kwaku-manu-praises-osei-kwame-buying-a-cybertruck-african/",
      urlToImage:
        "https://cdn.yen.com.gh/images/1200x675/3129f73a2ee499af.jpeg?v=1",
      publishedAt: "2024-11-05T13:22:31Z",
      content:
        "<ul><li>Kwaku Manu, in an interview, spoke about businessman Dr Osei Kwame Despite's newly purchased Tesla Cybertruck</li><li>The comic actor shared that Dr Osei Kwame Despite informed him he had ord… [+3166 chars]",
    },
    {
      source: {
        id: null,
        name: "Freerepublic.com",
      },
      author: null,
      title: "Embarrassing to say the least",
      description:
        "OK, I am completely embarrassed by one of our own who is exactly what the main stream media paints us as. My wife who is German was trying to pull into a strip mall in Anchorage Alaska to drop off some dry cleaning. The lady in front of her Was an elderly Asi…",
      url: "https://freerepublic.com/focus/f-chat/4275852/posts",
      urlToImage: null,
      publishedAt: "2024-11-05T13:22:04Z",
      content:
        "Skip to comments.\r\nEmbarrassing to say the least Posted on 11/05/2024 5:22:04 AM PST by Bigbrown\r\nOK, I am completely embarrassed by one of our own who is exactly what the main stream media paints us… [+6029 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Roger Åberg",
      title: "Det här smarta låset syns inte alls",
      description:
        'Diplomat lanserar gömt lås från Yale i ytterdörren\n\n\n\n\n\n\n\n\n\n\n\n\nDiplomat samarbetar nära Yale och vi skrev i mars om deras samarbete där ett lite mer normalt smart lås har integrerats med dörren. Då skrev vi att det var osynligt, för man ser inte de "smarta" d…',
      url: "https://feber.se/pryl/det-har-smarta-laset-syns-inte-alls/473646/",
      urlToImage: "https://static.feber.se/article_images/60/38/10/603810.jpg",
      publishedAt: "2024-11-05T13:20:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+22073 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "thestreet.com",
      title:
        "Tesla employees shared horror stories behind its illusive product",
      description:
        'held an event at the Warner Bros. backlot titled "We, Robot" on Oct. 10, and in addition to being a product showcase that previewed future products like the driverless Cybercab, Robovan, and the Optimus humanoid robot, it was a celebration of a vision of the …',
      url: "https://biztoc.com/x/086f0a35b634447d",
      urlToImage: "https://biztoc.com/cdn/086f0a35b634447d_s.webp",
      publishedAt: "2024-11-05T13:17:15Z",
      content:
        'held an event at the Warner Bros. backlot titled "We, Robot" on Oct. 10, and in addition to being a product showcase that previewed future products like the driverless Cybercab, Robovan, and the Opti… [+147 chars]',
    },
    {
      source: {
        id: null,
        name: "Süddeutsche Zeitung",
      },
      author: "Süddeutsche Zeitung",
      title:
        "Automobilindustrie: Tesla-Beschäftigte erhalten vier Prozent mehr Geld",
      description:
        "Der US-Autohersteller hebt in seinem einzigen europäischen Werk in Grünheide bei Berlin die Löhne an. Einen Tarifvertrag gibt es an dem Standort nicht.",
      url: "https://www.sueddeutsche.de/wirtschaft/tesla-gruenheide-loehne-lux.4ueeb6sF5DQaNSocFR7KeF",
      urlToImage:
        "https://www.sueddeutsche.de/2024/11/05/eb003c5c-1a37-4df6-b498-ac07c9f77d2e.jpeg?q=60&fm=webp&width=1200&rect=0%2C159%2C3000%2C1688",
      publishedAt: "2024-11-05T13:12:45Z",
      content:
        "Der US-Autohersteller hebt in seinem einzigen europäischen Werk in Grünheide bei Berlin die Löhne an. Einen Tarifvertrag gibt es an dem Standort nicht.Die rund 12 000 Beschäftigten des US-Elektroauto… [+1349 chars]",
    },
    {
      source: {
        id: null,
        name: "InfoQ.com",
      },
      author: "Tejas Kumar",
      title:
        "Presentation: The Latest in the World of Web Engineering (Featuring AI)",
      description:
        "Tejas Kumar overviews web engineering in relation to AI, AI engineering, Intelligent Answering Engines, an update on CSS, HTML, JavaScript, and personal health and productivity. By Tejas Kumar",
      url: "https://www.infoq.com/presentations/web-engineering-ai/",
      urlToImage:
        "https://res.infoq.com/presentations/web-engineering-ai/en/mediumimage/Tejas-Kumar-medium-1726125649097.jpg",
      publishedAt: "2024-11-05T13:12:00Z",
      content:
        "Transcript\r\nKumar: My name is Tejas. I've been building on the web for over 20 years at various places, either as a consultant or as an employee. I've had the privilege of working at some really grea… [+40186 chars]",
    },
    {
      source: {
        id: null,
        name: "Mobilenet.cz",
      },
      author: "Ioannis Papadopoulos",
      title:
        "Fenomén jménem Tesla Phone: co by Elona Muska donutilo k jeho výrobě?",
      description:
        "Elon Musk uvedl, že smartphony nechce vyrábět, tedy za předpokladu, že by k tomu nebyl donucen. Motivací by mu mohl být přístup společností Apple a Google.",
      url: "https://mobilenet.cz/clanky/fenomen-jmenem-tesla-phone-co-by-elona-muska-donutilo-k-jeho-vyrobe-51406",
      urlToImage: "https://cdn.24net.cz/1/obrazek/ikonka-371653",
      publishedAt: "2024-11-05T13:05:00Z",
      content:
        "Technologický zázrak jménem Tesla mete a nemusíte mít rádi, rozhodn vak této spolenosti nelze upít, jak moc promnila souasný automobilový prmysl. Podobn revoluní by pak podle mnohých mohl být i smart… [+2032 chars]",
    },
    {
      source: {
        id: null,
        name: "Terra.com.br",
      },
      author: "Rolling Stone Brasil",
      title:
        "Grimes sai em defesa de Olivia Rodrigo e manda indireta para Elon Musk; entenda",
      description:
        "Grimes concorda com Olivia Rodrigo . Em entrevista à Netflix publicada na última sexta-feira, ...",
      url: "https://www.terra.com.br/diversao/grimes-sai-em-defesa-de-olivia-rodrigo-e-manda-indireta-para-elon-musk-entenda,a31bffbba29cc69f76ebcc8bfbb688fbb8xaieqv.html",
      urlToImage:
        "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/11/05/1354501913-elon-musk-e-grimes-foto-theo-wargogetty-images-olivia-rodrigo-foto-frazer-harrisongetty-images.jpg",
      publishedAt: "2024-11-05T13:02:44Z",
      content:
        "Grimes concorda com Olivia Rodrigo. Em entrevista à Netflix publicada na última sexta-feira, 1º, a Rodrigo explicou o significado das diversas camisetas que usou durante shows da Guts World Tour, inc… [+1593 chars]",
    },
    {
      source: {
        id: null,
        name: "N-tv.de",
      },
      author: "n-tv NACHRICHTEN",
      title:
        "Ohne Tarifvertrag: Tesla in Grünheide erhöht noch mal die Gehälter",
      description:
        "Während etwa bei BMW in Leipzig noch gestreikt wird, steigen die Löhne im deutschen Tesla-Werk zum zweiten Mal in diesem Jahr. Fabrikchef Thierig lobt die Unabhängigkeit des US-Autobauers. Die IG Metall hingegen sieht die Arbeitsbedingungen vor Ort kritisch.",
      url: "https://www.n-tv.de/wirtschaft/Tesla-in-Gruenheide-erhoeht-noch-mal-die-Gehaelter-article25338257.html",
      urlToImage:
        "https://bilder2.n-tv.de/img/incoming/crop25338277/6251325619-cImg_16_9-w1200/475113070.jpg",
      publishedAt: "2024-11-05T13:02:22Z",
      content:
        "Während etwa bei BMW in Leipzig noch gestreikt wird, steigen die Löhne im deutschen Tesla-Werk zum zweiten Mal in diesem Jahr. Fabrikchef Thierig lobt die Unabhängigkeit des US-Autobauers. Die IG Met… [+1746 chars]",
    },
    {
      source: {
        id: null,
        name: "Habr.com",
      },
      author: "Realife (RUVDS.com)",
      title:
        "Как AMD выкрутилась и научилась воспроизводить операции ядер CUDA на своих видеокартах. История ROCm",
      description:
        "Как AMD смогла обойти монополию NVIDIA в мире ИИ? История о том, как команда AMD создала ROCm\r\n — технологию, позволяющую запускать CUDA-приложения на своих видеокартах. Как компании удалось совершить этот технологический прорыв? Разберём путь от первых экспе…",
      url: "https://habr.com/ru/companies/ruvds/articles/847792/#post-content-body",
      urlToImage:
        "https://habrastorage.org/webt/l4/wk/fr/l4wkfrvydk4ean0pnbhrynz0bym.jpeg",
      publishedAt: "2024-11-05T13:01:23Z",
      content:
        "AMD NVIDIA ? , AMD ROCm , CUDA- . ? HSA ROCm, . , ROCm Windows Linux, . CUDA\r\n. , 2006 NvidiaGeForce 8800CUDA. high-end , Nvidia, , , RTX 3090, . CUDA 2006 , . , . CUDA- , , . GPU , . . Pascal \r\nNvid… [+3402 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Alberto de la Torre",
      title:
        'China denuncia a Europa ante la OMC: califica los aranceles al coche eléctrico de ataque a una "innovación independiente"',
      description:
        "Quedaba sólo una noche para Halloween pero la pesadilla de los aranceles se le adelantó al coche eléctrico chino. Era 30 de octubre cuando la Comisión Europea confirmó que empezaría a cobrar una tasa adicional a todos los coches eléctricos llegados desde Chin…",
      url: "https://www.xataka.com/movilidad/china-denuncia-a-europa-omc-califica-aranceles-al-coche-electrico-ataque-a-innovacion-independiente",
      urlToImage:
        "https://i.blogs.es/aaccfc/mg-4_ev-2023-wallpaper/840_560.jpeg",
      publishedAt: "2024-11-05T13:00:39Z",
      content:
        "Quedaba sólo una noche para Halloween pero la pesadilla de los aranceles se le adelantó al coche eléctrico chino. Era 30 de octubre cuando la Comisión Europea confirmó que empezaría a cobrar una tasa… [+3692 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Trefis Team, Contributor, \n Trefis Team, Contributor\n https://www.forbes.com/sites/greatspeculations/people/trefis/",
      title: "How Li Auto Stock Could 2x",
      description:
        "XPeng delivered 23,917 vehicles, a record for the company, up about 19% compared to last year.",
      url: "https://www.forbes.com/sites/greatspeculations/2024/11/05/how-li-auto-stock-could-2x/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/67297dff2ffb2d72ccc7149a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2024-11-05T13:00:00Z",
      content:
        "A new energy vehicle is seen at a Li Auto store in Shanghai, China, on September 26, 2024. (Photo by ... [+] Costfoto/NurPhoto via Getty Images)\r\nNurPhoto via Getty Images\r\nLi Auto , the largest of t… [+4700 chars]",
    },
    {
      source: {
        id: null,
        name: "Caradisiac.com",
      },
      author: "Michel Holtz",
      title: "L'élection américaine est aussi une histoire de voitures",
      description:
        "L'INFO DU JOUR - L'élection américaine, dont l'issue devrait être connue plus ou moins rapidement, oppose deux visions de l'automobile US. Mais si Kamala Harris va certainement prolonger l'action de son prédécesseur en faveur de la voiture électrique, Donald …",
      url: "https://www.caradisiac.com/l-election-americaine-est-aussi-une-histoire-de-voitures-212070.htm",
      urlToImage:
        "https://images.caradisiac.com/logos/5/5/8/1/285581/S9-l-election-americaine-est-aussi-une-histoire-de-voitures-212070.jpg",
      publishedAt: "2024-11-05T13:00:00Z",
      content:
        "Kamala Harris, lors d'un meeting en Pennsylvanie le 4 novembre. crédit Photo DAVID MUSE/EPA/MaxPPP.\r\nOn ignore tout des opinions politiques de Carlos Tavares. En revanche, si le patron de Stellantis … [+4954 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Hugo Engström",
      title: "Meta börjar erbjuda sin AI till USA:s militär",
      description:
        "Äntligen?\n\n\n\n\n\n\nMeta har nu börjat låta amerikanska myndigheter använda deras AI-modell Llama för landets säkerhet. Detta sker trots att Metas policy förbjuder användning av Llama 3 för militära ändamål och spionage. \n\nMeta samarbetar med företag som Amazon o…",
      url: "https://feber.se/internet/meta-borjar-erbjuda-sin-ai-till-usas-militar/473644/",
      urlToImage: "https://static.feber.se/article_images/60/38/07/603807.jpg",
      publishedAt: "2024-11-05T13:00:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21765 chars]",
    },
    {
      source: {
        id: null,
        name: "Overclockers.ru",
      },
      author: "Михаил Андреев",
      title:
        "Илон Маск заявил, что голливудских актёров склоняют к поддержке Камалы Харрис",
      description: "Вы не поняли, это демократия, свобода и равенство такие.",
      url: "https://overclockers.ru/world/show/137565/ilon-mask-zayavil-chto-gollivudskih-akterov-sklonyajut-k-podderzhke-kamaly-harris",
      urlToImage:
        "https://overclockers.ru/st/images/preview/a3M5c1F6uBvhbHLW.jpg",
      publishedAt: "2024-11-05T12:53:12Z",
      content:
        ", , , , , , . , .\r\n, , Tesla SpaceX , . , « - » , « , ». , , , , , «» .\r\n, . , , , .\r\n ( 6 ). , ( - ). , , . ... ? , , , . .",
    },
    {
      source: {
        id: "focus",
        name: "Focus",
      },
      author: "FOCUS online",
      title:
        "Nach der US-Wahl - Börsen nach dem Trump-Sieg: Bitcoin, Tesla, Zinsen steigen - deutsche Autoaktien brechen ein",
      description:
        "Donald Trump ist zurück im Weißen Haus. Er hat die Wahl Überraschend klar gewonnen. Trumps Sieg bewegt auch die Finanzmärkte. Verfolgen Sie in diesem Live-Ticker die Reaktionen der Börse und lesen Sie die Einschätzungen von Ökonomen und Kapitalmarkt-Experten.",
      url: "https://www.focus.de/finanzen/boerse/trump-gewinnt-praesidentschaftswahl-in-den-usa-wie-die-boersen-auf-die-us-wahl-reagieren_id_260453837.html",
      urlToImage:
        "https://p6.focus.de/img/fotos/id_260455943/wahlkampf-in-den-usa-84008385.jpg?im=Crop%3D%280%2C252%2C2999%2C1499%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=1c59111f806357a7b57bcb259c219782acada9125fcf6bf34de46b5ac1b8c1d9",
      publishedAt: "2024-11-05T12:53:08Z",
      content:
        "<ul><li>\r\nKommentare</li><li>\r\nE-Mail</li><li>\r\nTeilen</li><li>\r\nMehr</li><li>\r\nTwitter</li><li>\r\nDrucken</li><li>\r\nFeedback</li><li>\r\nFehler meldenSie haben einen Fehler gefunden?\r\nBitte markieren S… [+12998 chars]",
    },
    {
      source: {
        id: null,
        name: "The Conversation Africa",
      },
      author:
        "Thomas Cheney, Vice Chancellors Research Fellow, Northumbria Law School, Northumbria University, Newcastle",
      title:
        "Elon Musk has gone all in for Trump – here’s what’s at stake for the world’s richest man in the US election",
      description:
        "The outcome of the election could have important implications for the world’s richest man.",
      url: "https://theconversation.com/elon-musk-has-gone-all-in-for-trump-heres-whats-at-stake-for-the-worlds-richest-man-in-the-us-election-242794",
      urlToImage:
        "https://images.theconversation.com/files/629780/original/file-20241104-15-scgl6e.jpg?ixlib=rb-4.1.0&rect=8%2C143%2C5982%2C2991&q=45&auto=format&w=1356&h=668&fit=crop",
      publishedAt: "2024-11-05T12:45:12Z",
      content:
        "Elon Musk is supporting Donald Trump in his quest to regain the American presidency. He has committed millions of dollars to a pro-Trump “political action committee” (PAC) and has appeared alongside … [+3999 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "businessinsider.com",
      title: "Tesla criticizes Biden's plan to ban Chinese tech in cars",
      description:
        "Elon Musk has criticized the Biden administration's tariffs on Chinese EV companies, despite previously warning they would \"demolish\" Western automakers without intervention.\nSlaven Vlasic/Getty Images\nTesla has criticized the US government's plans to ban Chi…",
      url: "https://biztoc.com/x/84191e83c8b35cc5",
      urlToImage: "https://biztoc.com/cdn/807/og.png",
      publishedAt: "2024-11-05T12:43:15Z",
      content:
        'Elon Musk has criticized the Biden administration\'s tariffs on Chinese EV companies, despite previously warning they would "demolish" Western automakers without intervention.Slaven Vlasic/Getty Image… [+144 chars]',
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Hugo Engström",
      title: "Xbox lanserar AI-chattbot",
      description:
        'För supportproblem\n\n\n\n\n\n\nMicrosoft har börjat testa en ny AI-driven chattbot för Xbox, som Xbox Insiders i USA nu kan prova. Chattboten, som kallas "Xbox Support Virtual Agent", är designad för att hjälpa gamers att lösa supportproblem med sina konsoler och s…',
      url: "https://feber.se/spel/xbox-lanserar-ai-chattbot/473642/",
      urlToImage: "https://static.feber.se/article_images/60/38/06/603806.jpg",
      publishedAt: "2024-11-05T12:40:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21508 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: null,
      title:
        "As Americans head to the polls, social media companies are in the spotlight",
      description:
        "Social media companies are under intense pressure to squash the spread of disinformation on their platforms during the 2024 elections",
      url: "https://www.cnbc.com/2024/11/05/on-election-day-social-media-companies-meta-x-youtube-in-spotlight-.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108032148-1726012511722-gettyimages-2170530155-zawrzel-uspresid240910_npLsG.jpeg?v=1726012581&w=1920&h=1080",
      publishedAt: "2024-11-05T12:35:49Z",
      content:
        "Kamala Harris and Donald J. Trump social media sites on X, formerly known as Twitter, are displayed on mobile phones screens for illustration photo. \r\nWith Americans heading to the polls on Election … [+15058 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Tom Carter",
      title: "Tesla criticizes Biden's plan to ban Chinese tech in cars",
      description:
        'Tesla said the proposed ban on Chinese-developed software would create a "massive and ultimately unnecessary regulatory reporting regime."',
      url: "https://www.businessinsider.com/tesla-criticizes-biden-plan-to-ban-chinese-tech-in-cars-2024-11",
      urlToImage:
        "https://i.insider.com/672a0171192f525898560ca0?width=1200&format=jpeg",
      publishedAt: "2024-11-05T12:35:01Z",
      content:
        'Elon Musk has criticized the Biden administration\'s tariffs on Chinese EV companies, despite previously warning they would "demolish" Western automakers without intervention.Slaven Vlasic/Getty Image… [+2252 chars]',
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "aol.com",
      title:
        "Musk now says it's 'pointless' to build a $25,000 Tesla for human drivers",
      description:
        "When Reuters reported in April that Tesla had scrapped plans for a long-promised, next-generation $25,000 electric vehicle, the automaker’s stock plunged. Chief Executive Elon Musk rushed to respond on X, his social-media network.\n“Reuters is lying,” he poste…",
      url: "https://biztoc.com/x/97ca90bcc86276d6",
      urlToImage: "https://biztoc.com/cdn/97ca90bcc86276d6_s.webp",
      publishedAt: "2024-11-05T12:32:48Z",
      content:
        "When Reuters reported in April that Tesla had scrapped plans for a long-promised, next-generation $25,000 electric vehicle, the automakers stock plunged. Chief Executive Elon Musk rushed to respond o… [+139 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-05T12:32:39Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "Investing.com",
      },
      author: "Reuters",
      title:
        "Musk now says it's 'pointless' to build a $25,000 Tesla for human drivers",
      description:
        "Musk now says it's 'pointless' to build a $25,000 Tesla for human drivers",
      url: "https://www.investing.com/news/stock-market-news/musk-now-says-its-pointless-to-build-a-25000-tesla-for-human-drivers-3701721",
      urlToImage:
        "https://i-invdn-com.investing.com/news/tesla_x_800x533_L_1411990960.jpg",
      publishedAt: "2024-11-05T12:31:56Z",
      content:
        "By Chris Kirkham\r\n(Reuters) -When Reuters reported in April that Tesla (NASDAQ:TSLA) had scrapped plans for a long-promised, next-generation $25,000 electric vehicle, the automakers stock plunged. Ch… [+4595 chars]",
    },
    {
      source: {
        id: "the-american-conservative",
        name: "The American Conservative",
      },
      author: "Spencer Neale",
      title: "Rogan Endorses Trump",
      description:
        "The former president landed podcaster’s endorsement on Election Eve.\nThe post Rogan Endorses Trump appeared first on The American Conservative.",
      url: "https://www.theamericanconservative.com/rogan-endorses-trump/",
      urlToImage:
        "https://www.theamericanconservative.com/wp-content/uploads/2024/11/shutterstock_2535902297-scaled-e1730494712558.jpg",
      publishedAt: "2024-11-05T12:30:00Z",
      content:
        "The podcaster Joe Rogan officially endorsed the former President Donald Trumps reelection bid Monday evening. \r\nIn an Election Eve post to , Rogan released a new interview with billionaire Elon Musk … [+1270 chars]",
    },
    {
      source: {
        id: null,
        name: "The Federalist",
      },
      author: "Shawn Fleetwood",
      title:
        "Elon Musk Predicts Kamala Harris Will ‘Shut Down’ X If Elected President",
      description:
        "Elon Musk predicted on Monday that Kamala Harris will weaponize the Justice Department to shut down X if elected president this week.",
      url: "https://thefederalist.com/2024/11/05/elon-musk-predicts-kamala-harris-will-shut-down-x-if-elected-president/",
      urlToImage:
        "https://thefederalist.com/wp-content/uploads/2024/11/Elon-Musk.png",
      publishedAt: "2024-11-05T12:24:51Z",
      content:
        "X owner Elon Musk predicted on Monday that Kamala Harris will weaponize the Justice Department to shut down the free speech platform if elected president this week. The moment came during the SpaceX … [+2953 chars]",
    },
    {
      source: {
        id: null,
        name: "Securityaffairs.com",
      },
      author: "Pierluigi Paganini",
      title:
        "U.S. CISA adds PTZOptics camera bugs to its Known Exploited Vulnerabilities catalog",
      description:
        "U.S. Cybersecurity and Infrastructure Security Agency (CISA) adds PTZOptics PT30X-SDI/NDI camera bugs to its Known Exploited Vulnerabilities catalog. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added the following vulnerabilities to its K…",
      url: "https://securityaffairs.com/170595/security/u-s-cisa-adds-ptzoptics-camera-bugs-to-its-known-exploited-vulnerabilities-catalog.html",
      urlToImage:
        "https://securityaffairs.com/wp-content/uploads/2024/11/image-2.png",
      publishedAt: "2024-11-05T12:23:37Z",
      content:
        "U.S. CISA adds PTZOptics camera bugs to its Known Exploited Vulnerabilities catalog\r\n | Canadian authorities arrested alleged Snowflake hacker\r\n | Android flaw CVE-2024-43093 may be under limited, ta… [+114075 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Roger Åberg",
      title: "Nu får man gratis fraktpåse med Vinted",
      description:
        "Samarbetar med Postnord\n\n\n\n\n\n\nVinted har slagit stort bland kidsen och de säljer begagnade kläder till höger och vänster. Vilket ju är bra. Dels för att de gör det själva (vi gamlingar fattar inte den där appen) men det gör också att saker används längre och …",
      url: "https://feber.se/internet/nu-far-man-gratis-fraktpase-med-vinted/473648/",
      urlToImage: "https://static.feber.se/article_images/60/38/11/603811.jpg",
      publishedAt: "2024-11-05T12:20:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21862 chars]",
    },
    {
      source: {
        id: null,
        name: "Ixbt.com",
      },
      author: "jin@ixbt.com (Jin)",
      title: "Роуминг между Россией и Белоруссией отменят 1 марта 2025",
      description:
        "Союзное государство договорилось от отмене роуминга между Россией и Белоруссией. Совет министров Союзного государства России и Белоруссии одобрил около 20 документов на последнем заседании. По словам Председателя Правительства РФ Михаила Мишустина, доступные …",
      url: "https://www.ixbt.com/news/2024/11/05/rouming-mezhdu-rossiej-i-belorussiej-otmenjon.html",
      urlToImage:
        "https://www.ixbt.com/img/n1/news/2024/10/2/TASS_60260556_large.jpg",
      publishedAt: "2024-11-05T12:19:00Z",
      content:
        ". 20 .\r\n   ,   1 2025 \r\n , . - , « , ».\r\n , 25 . , – .\r\n 2021 . - 2024 .\r\n. Tesla \r\n<ul><li> 1 2025: 2021 2</li><li> 15:093 . Tesla . , </li><li> 15:011 Tank 300 1200 . BAIC BJ40e. 15 </li><li> 14:56… [+2579 chars]",
    },
    {
      source: {
        id: null,
        name: "Gagadget.com",
      },
      author: "gagadget.com",
      title:
        "Илон Маск будет готов выпустить Tesla Phone, если его вынудят Apple и Google",
      description:
        "Илон Маск заявил, что Tesla не собирается выпускать смартфон, если только Google и Apple не начнут цензурировать приложения и выступать в роли строгих контролеров.",
      url: "https://gagadget.com/ru/526419-ilon-mask-budet-gotov-vyipustit-tesla-phone-esli-ego-vyinudyat-apple-i-google/",
      urlToImage:
        "https://gagadget.com/media/cache/33/4f/334fd2a90d322f6f009c4119bfde3429.jpg",
      publishedAt: "2024-11-05T12:18:10Z",
      content:
        ", Tesla , Google Apple .\r\nJoe Rogan Experience , Tesla Android iOS, . , Tesla , Apple Google .\r\n , Tesla , , Starlink .\r\n Android iOS , Microsoft Windows Phone. Android ,   Amazon   Fire Phone 2014 .… [+49 chars]",
    },
    {
      source: {
        id: null,
        name: "Ixbt.com",
      },
      author: "dima0782",
      title: "Илон Маск дал ответ по поводу производства смартфонов Tesla",
      description:
        "Илон Маск дал четкий ответ на заявления о смартфоне Tesla, которые часто звучат в последнее время. В интервью известному ведущему подкаста Джо Рогану Маск заявил, что у Tesla действительно есть...Читать дальше",
      url: "https://www.ixbt.com/live/mobile/ilon-mask-dal-otvet-po-povodu-proizvodstva-smartfonov-tesla.html",
      urlToImage:
        "https://img.ixbt.site/live/topics/preview/00/08/76/51/a68143f2da.jpg",
      publishedAt: "2024-11-05T12:07:59Z",
      content:
        "Tesla, . , Tesla , .\r\n : « , Tesla Linux. », — , .\r\n« Apple Google - , , , , , », — . Apple Google.\r\n, , , , . , Tesla . , , ,  — .\r\n « — » (brain-computer interfaces, BCI) . , . , Neuralink, . , , ,… [+57 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Emily Crane",
      title:
        "Elon Musk convinced Kamala Harris will ‘freaking shut down’ X if elected president",
      description:
        "“There’s no way that the Kamala Harris puppet regime would allow X to exist,” the billionaire said during a lengthy sit-down on “The Joe Rogan Experience” podcast on Monday.",
      url: "https://nypost.com/2024/11/05/us-news/elon-musk-convinced-kamala-harris-will-freaking-shut-down-x-if-elected/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/11/93077439.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-11-05T12:04:13Z",
      content:
        "Elon Musk is convinced Vice President Kamala Harris will shut down X if she wins the election, claiming her administration will “sic the DOJ” on his social media giant. \r\nTheres no way that the Kamal… [+1759 chars]",
    },
    {
      source: {
        id: null,
        name: "Diariomotor.com",
      },
      author: "David Durán",
      title:
        "Ya es un hecho, tenemos un nuevo superventas imparable, y además irrompible con 15 años de garantía, que está triunfando en España",
      description:
        "Siempre es interesante estudiar mes a mes cómo evoluciona el mercado a través de las matriculaciones en España. Ahí es donde uno puede ver lo que compran los españoles, la diferencia o concordancia con respecto al resto de Europa y cómo se van creando o desha…",
      url: "https://www.diariomotor.com/noticia/matriculaciones-espana-octubre-2024/",
      urlToImage:
        "https://www.diariomotor.com/imagenes/2021/09/toyota-yaris-cross-2021-0921-085.jpg?width=1200",
      publishedAt: "2024-11-05T12:00:35Z",
      content:
        "Siempre es interesante estudiar mes a mes cómo evoluciona el mercado a través de las matriculaciones en España. Ahí es donde uno puede ver lo que compran los españoles, la diferencia o concordancia c… [+5102 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Roger Åberg",
      title: "Nu hittar du det bästa från Feber i toppen",
      description:
        "Det ni tummat mest, ett klick bort\n\n\n\n\n\n\nSom ni kanske har märkt så har det förändrats lite i toppen här på Feber. Ut med det gamla, in med det nya! Eller så mycket nytt är det kanske inte, men vi har städat ut lite gammalt. Istället för att ha stora, flådiga…",
      url: "https://feber.se/nu-hittar-du-det-basta-fran-feber-i-toppen/473633/",
      urlToImage: "https://static.feber.se/article_images/60/37/93/603793.jpg",
      publishedAt: "2024-11-05T12:00:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21686 chars]",
    },
    {
      source: {
        id: "der-tagesspiegel",
        name: "Der Tagesspiegel",
      },
      author: "Der Tagesspiegel",
      title: "Autoindustrie: Tesla-Beschäftigte erhalten 4 Prozent mehr Geld",
      description:
        "Der US-Autobauer Tesla hebt in seinem einzigen europäischen Werk in Grünheide bei Berlin die Löhne an. Einen Tarifvertrag gibt es am Standort nicht.",
      url: "https://www.tagesspiegel.de/berlin/autoindustrie-tesla-beschaftigte-erhalten-4-prozent-mehr-geld-12648644.html",
      urlToImage:
        "https://www.tagesspiegel.de/images/12648641/alternates/BASE_16_9_W1400/1730807468000/weitere-entwicklung-beim-protest-gegen-tesla-autofabrik.jpeg",
      publishedAt: "2024-11-05T11:51:08Z",
      content:
        "Die rund 12.000 Beschäftigten des US-Elektroautobauers Tesla in Grünheide bei Berlin bekommen mehr Geld. Wie das Unternehmen mitteilte, werden die Gehälter der Mitarbeiter zum 1. November um 4 Prozen… [+1310 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET France",
      },
      author: "Alex Scotti",
      title: "L'humanité en route pour Mars ? L'IA dit Kamala, Musk dit Trump",
      description:
        "D’après un éminent chercheur en intelligence artificielle de chez Meta, Elon Musk ne choisirait pas le bon camp pour les élections américaines. Kamala Harris aurait en effet plus de cordes à son arc pour faire avancer les projets spatiaux du milliardaire accr…",
      url: "https://www.cnetfrance.fr/news/lhumanite-en-route-pour-mars-lia-dit-kamala-musk-dit-trump-419637.htm",
      urlToImage:
        "https://sf1.cnetfrance.fr/wp-content/uploads/cnet/2024/11/element5-digital-ls8kc0p9haa-unsplash.jpg",
      publishedAt: "2024-11-05T11:45:46Z",
      content:
        "Des claques se perdent en cette fin de campagne pour la présidence américaine. Alors que les partisans de Trump utilisent un écureuil pour influencer les élections, Elon Musk a été gentiment remis da… [+2521 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      title:
        "China And The Fed Are Quietly Adding To A ‘Perfect Storm’ That Could Be About To Blow Up The Bitcoin Price",
      description:
        'Traders are braced for the Fed and China to feed into a "perfect storm" for the bitcoin price in the fourth quarter...',
      url: "https://www.forbes.com/sites/digital-assets/2024/11/05/china-and-the-fed-are-quietly-adding-to-a-perfect-storm-that-could-be-about-to-blow-up-the-bitcoin-price/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/633c2741f081733a2a78b209/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2024-11-05T11:45:09Z",
      content:
        "Bitcoin and crypto prices are braced for volatility through the U.S. election, with odds on the Polymarket prediction platform suddenly narrowing.\r\nUnlock over $3,000 in perks including unparalleled … [+4710 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Thomas Handley",
      title:
        "Xiaomi acelera en la carrera de los coches eléctricos: del sueño a rivalizar con Tesla en solo tres años",
      description:
        "Con una rapidez sin precedentes, Xiaomi ha pasado de anunciar su intención de producir coches eléctricos a competir directamente con Tesla y Porsche. Desde la presentación del SU7 hasta sus éxitos en ventas y rendimiento, estos son los momentos clave de un as…",
      url: "https://es.gizmodo.com/xiaomi-acelera-en-la-carrera-de-los-coches-electricos-del-sueno-a-rivalizar-con-tesla-en-solo-tres-anos-2000133881",
      urlToImage:
        "https://es.gizmodo.com/app/uploads/2024/11/Auto-electrico-xiaomi-SU7.jpg",
      publishedAt: "2024-11-05T11:38:33Z",
      content:
        "En marzo de 2021, Xiaomi sorprendía al mundo con el anuncio de su incursión en el sector automotriz, despertando la expectativa de miles de fanáticos de la marca. A lo largo de tres años, la compañía… [+2888 chars]",
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Theo Burman",
      title: "Five Highlights from Donald Trump's Final Rally in Michigan",
      description:
        "Trump returned to Grand Rapids, Michigan, for his final rally before Election Day.",
      url: "https://www.newsweek.com/donald-trump-rally-grand-rapids-michigan-highlights-election-1980266",
      urlToImage:
        "https://d.newsweek.com/en/full/2512438/donald-trumps-last-rally.jpg",
      publishedAt: "2024-11-05T11:34:36Z",
      content:
        "Former President Donald Trump returned to Grand Rapids, Michigan, on Monday for what is possibly his final political rally as a presidential candidate.\r\nTrump has said he won't run for president in 2… [+5765 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-05T11:33:29Z",
      content: "[Removed]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Alexander Hall",
      title:
        "Elon Musk warns if Harris wins she will 'sic the DOJ' on X to shut it down",
      description:
        "As the 2024 presidential election draws closer, billionaire Elon Musk warned podcaster Joe Rogan that the fate of free speech on the X platform weighs in the balance",
      url: "https://www.foxnews.com/media/elon-musk-warns-harris-wins-she-sic-doj-x-shut-down",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/11/elon-musk-on-rogan.png",
      publishedAt: "2024-11-05T11:30:04Z",
      content:
        "Tesla founder Elon Musk warned Monday that a President Kamala Harris would use the levers of power to shut down X.\r\nMusk, who famously acquired the platform for billions of dollars to protect free sp… [+2871 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Reuters",
      title:
        "Elon Musk now says it's 'pointless' to build a $25,000 Tesla for human drivers",
      description:
        'Tesla CEO Elon Musk has confirmed the company scrapped plans for a $25,000 electric car for human drivers. Musk stated that such a vehicle would be "pointless" without full autonomy. Instead, Tesla will focus on its "Cybercab," a fully autonomous robotaxi wit…',
      url: "https://economictimes.indiatimes.com/industry/renewables/elon-musk-now-says-its-pointless-to-build-a-25000-tesla-for-human-drivers/articleshow/114980586.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-114980634,width-1200,height-630,imgsize-77302,overlay-economictimes/articleshow.jpg",
      publishedAt: "2024-11-05T11:29:48Z",
      content:
        "When Reuters reported in April that Tesla had scrapped plans for a long-promised, next-generation $25,000 electric vehicle, the automaker's stock plunged. Chief Executive Elon Musk rushed to respond … [+4880 chars]",
    },
    {
      source: {
        id: "bild",
        name: "Bild",
      },
      author: "Frank  Schneider (Sport)",
      title:
        "Olympiasiegerin hat penisähnliche Klitoris - Brisantes Gutachten zur „männlichen Boxerin“ enthüllt!",
      description:
        "Neue Beweise zeigen, dass die algerische Goldmedaillengewinnerin Imane Khelif bei den Olympischen Spielen in Paris als Mann angetreten sein könnte.",
      url: "https://www.bild.de/sport/olympia/olympia-skandal-neue-gutachten-zu-maennlicher-boxerin-imane-khelif-aufgetaucht-6729c460ebdb8724738e8eaf",
      urlToImage:
        "https://images.bild.de/6729c460ebdb8724738e8eaf/6ba0df820322b6a9e5316844f457fdc6,1a380ceb?w=1280",
      publishedAt: "2024-11-05T11:29:36Z",
      content:
        "Sie gewann bei den Olympischen Spielen in Paris als männliche Boxerin Gold im Frauen-Boxen und sorgte damit für eine Riesen-Diskussion. Jetzt sind Unterlagen aufgetaucht, die belegen würden, dass Ima… [+3284 chars]",
    },
    {
      source: {
        id: null,
        name: "Thepinknews.com",
      },
      author: "Amelia Hansford",
      title:
        "Joe Rogan endorses Donald Trump for president, surprising absolutely no one",
      description:
        "Joe Rogan has pulled the most Joe Rogan move ever by endorsing Donald Trump for president. The 57-year-old podcaster expressed his support for the Republican presidential candidate in a post on social media. Influenced, he says, by the “great and powerful Elo…",
      url: "https://www.thepinknews.com/2024/11/05/joe-rogan-donald-trump-endorsement/",
      urlToImage:
        "https://www.thepinknews.com/wp-content/uploads/2024/11/Joe-Rogan.jpg",
      publishedAt: "2024-11-05T11:19:49Z",
      content:
        "Joe Rogan has pulled the most Joe Rogan move ever by endorsing Donald Trump for president.\r\nThe 57-year-old podcaster expressed his support for the Republican presidential candidate in a post on soci… [+2424 chars]",
    },
    {
      source: {
        id: null,
        name: "Securityaffairs.com",
      },
      author: "Pierluigi Paganini",
      title: "Canadian authorities arrested alleged Snowflake hacker",
      description:
        "Canadian authorities arrested a suspect linked to multiple hacks following a breach of cloud data platform Snowflake earlier this year. Canadian law enforcement agencies arrested a suspect, Alexander “Connor” Moucka (aka Judische and Waifu), who is accused of…",
      url: "https://securityaffairs.com/170587/cyber-crime/canadian-authorities-arrested-snowflake-hacker.html",
      urlToImage:
        "https://securityaffairs.com/wp-content/uploads/2024/11/image-9.png",
      publishedAt: "2024-11-05T11:19:40Z",
      content:
        "Canadian authorities arrested alleged Snowflake hacker\r\n | Android flaw CVE-2024-43093 may be under limited, targeted exploitation\r\n | July 2024 ransomware attack on the City of Columbus impacted 500… [+113987 chars]",
    },
    {
      source: {
        id: null,
        name: "DIE WELT",
      },
      author: "Frank Schneider",
      title:
        "Brisante Gutachten im Fall der umstrittenen Olympia-Boxerin Khelif aufgetaucht",
      description:
        "Die algerische Boxerin Imane Khelif zählte bei Olympia zu den umstrittensten Sportlerinnen. Es tobte eine Geschlechterdiskussion und Kontroverse um ihr Startrecht. Sie gewann Gold, aber nicht den Kampf gegen die Zweifel an ihrer Person. Zwei Gutachten liefern…",
      url: "https://www.welt.de/sport/olympia/article254357674/Olympiasiegerin-Imane-Khelif-Zwei-Gutachten-im-Fall-der-umstrittenen-Boxerin-aufgetaucht.html",
      urlToImage:
        "https://img.welt.de/img/sport/olympia/mobile254358870/0587931037-ci16x9-w1200/Olympian-Portraits-From-Around-The-Globe-Olympic-Games-Paris-20.jpg",
      publishedAt: "2024-11-05T11:18:12Z",
      content:
        "Die algerische Boxerin Imane Khelif zählte bei Olympia zu den umstrittensten Sportlerinnen. Es tobte eine Geschlechterdiskussion und Kontroverse um ihr Startrecht. Sie gewann Gold, aber nicht den Kam… [+2854 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "reuters.com",
      title:
        "Musk now says it's 'pointless' to build a $25,000 Tesla for human drivers",
      description:
        "When Reuters reported in April that Tesla had scrapped plans for a long-promised, next-generation $25,000 electric vehicle, the automaker’s stock plunged. Chief Executive Elon Musk rushed to respond on X, his social-media network.",
      url: "https://biztoc.com/x/3efc78a05356f919",
      urlToImage: "https://biztoc.com/cdn/3efc78a05356f919_s.webp",
      publishedAt: "2024-11-05T11:14:08Z",
      content:
        "When Reuters reported in April that Tesla had scrapped plans for a long-promised, next-generation $25,000 electric vehicle, the automakers stock plunged. Chief Executive Elon Musk rushed to respond o… [+87 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-05T11:13:07Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Musk now says it's 'pointless' to build a $25,000 Tesla for human drivers",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_ccba18ec-6660-4d28-a660-859b5debdefd",
      urlToImage: null,
      publishedAt: "2024-11-05T11:08:19Z",
      content:
        "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "Rg.ru",
      },
      author: null,
      title:
        "Уязвимость в видеокарте Nvidia позволяет взломать почти любой компьютер",
      description:
        "Nvidia нашла восемь уязвимостей в драйверах всех своих графических ускорителей.",
      url: "https://rg.ru/2024/11/05/uiazvimost-v-videokarte-nvidia-pozvoliaet-vzlomat-pochti-liuboj-kompiuter.html",
      urlToImage:
        "https://cdnstatic.rg.ru/images/rg-social-dummy-logo-650x360.jpg",
      publishedAt: "2024-11-05T11:04:18Z",
      content:
        "- 7 8 CVE. GeForce, RTX, Quadro, NVS Tesla, WccfTech.\r\n, Nvidia, Nvidia VGPU. , .\r\n . Windows - 566.03/553.24/538.95, Tesla - 553.24/538.95.\r\n Samsung.",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Ramón Varela",
      title:
        "Si tienes una tarjeta Nvidia, actualiza inmediatamente: hay importantes vulnerabilidades de seguridad",
      description:
        "<!--cache-->Nvidia urge a actualizar los drivers a las últimas versiones en varios modelos de sus populares tarjetas gráficas, incluyendo GeForce.<!--aa--->Nvidia alerta sobre graves problemas de seguridad en los drivers de varios modelos de GPU (GeForce, RTX…",
      url: "https://vandal.elespanol.com/noticia/1350775516/si-tienes-una-tarjeta-nvidia-actualiza-inmediatamente-hay-importantes-vulnerabilidades-de-seguridad/",
      urlToImage:
        "https://media.vandal.net/ivandal/12/63/1200x630/11/11-2024/5/202411511572872_1.jpg",
      publishedAt: "2024-11-05T11:04:00Z",
      content:
        "Nvidia alerta sobre graves problemas de seguridad en los drivers de varios modelos de GPU (GeForce, RTX, Quadro, NVS y Tesla), y recomienda urgentemente actualizar a la última versión. De no hacerlo,… [+1320 chars]",
    },
    {
      source: {
        id: null,
        name: "Iltalehti.fi",
      },
      author: null,
      title:
        "Oho, mikä sähköauto Suomeen – Kiihtyvyys 3,5 s, toimintamatka yli 600 km, hinta noin 50 000 euroa",
      description:
        "Kiinalainen Hongqi -automerkki rantautui Suomeen härskin mahtipontisella E-HS9g SUVillaan vuoden alussa. Nyt nähdään kiinalaisyllättäjän seuraava askel – uusi EH7 tarjoilee teslamaisen hillittyjä muotoja. Hongqi E-SH9g sai katsojat reagoimaan auton ulkonäköön…",
      url: "https://www.iltalehti.fi/autotestit/a/4d5acd87-db57-4001-b09c-5d7bb24134a6",
      urlToImage:
        "https://img.ilcdn.fi/RcgYgpWjdxv6dVP-ry2S-HHEHaI=/1200x630/top/filters:watermark(assets.ilcdn.fi/ilsome_v2.jpg,25,0,0)/img-s3.ilcdn.fi/e6fe6781c2d19c02418f81508d21c37561f4cc99cb2518b73218d32c0311e5c5.jpg",
      publishedAt: "2024-11-05T11:02:06Z",
      content:
        "Hongqi E-SH9g sai katsojat reagoimaan auton ulkonäköön. Iltalehden ensikoeajossa autoa peukuteltiin ja osoiteltiin. Hongqin muodoissa oli jotakin samaa kuin Rolls-Royce Cullinan SUVin muodoissa ja ku… [+5792 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Frode Wikesjö",
      title: "Digitalt verktyg ska ersätta sjuksköterskor",
      description:
        "Kritiseras för patientsäkerhetsrisker\n\n\n\n\n\n\nSVT rapporterar om att Doktor24 planerar att ersätta sina sjuksköterskor med ett digitalt bedömningsverktyg för att hantera digitala vårdbesök. Inte helt oväntat har detta beslut mött kritik från Läkarförbundet, som…",
      url: "https://feber.se/internet/digitalt-verktyg-ska-ersatta-sjukskoterskor/473641/",
      urlToImage: "https://static.feber.se/article_images/60/38/05/603805.jpg",
      publishedAt: "2024-11-05T11:00:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+22393 chars]",
    },
    {
      source: {
        id: null,
        name: "Overclockers.ru",
      },
      author: "g1tarist",
      title:
        "General Motors и Ford спорят, кто занимает второе место в США по производству электрокаров",
      description: "Первое место несомненно - за Tesla.",
      url: "https://overclockers.ru/blog/letsplay/show/189345/General-Motors-i-Ford-sporyat-kto-zanimaet-vtoroe-mesto-v-SShA-po-proizvodstvu-elektrokarov",
      urlToImage: "https://overclockers.ru/st/legacy/blog/422417/582490_O.png",
      publishedAt: "2024-11-05T10:45:41Z",
      content:
        ". Tesla, 2 General Motors (GM) Ford.\r\nGM , 3 2024 32 , 2 . Chevrolet Silverado, Blazer. Equinox EV, GMC Hummer EV Cadillac Lyriq.\r\n 2016 GM 370 , 300 000 . , GM, . LG Samsung SDI.\r\n Ford GM. Ford, , … [+63 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Reuters",
      title: "Futures calm as Wall Street braces for U.S. election day",
      description:
        "Both Republican candidate Donald Trump and Democrat Kamala Harris predicted victory in the final day of campaigning, with polls showing the race as extremely...",
      url: "https://finance.yahoo.com/news/futures-calm-wall-street-braces-104527162.html",
      urlToImage:
        "https://media.zenfs.com/en/reuters-finance.com/fcd07c32c51648cbff55fd620203c170",
      publishedAt: "2024-11-05T10:45:27Z",
      content:
        "(Reuters) - U.S. stock index futures were steady on Tuesday ahead of election day voting, with traders girding up for volatile trading over the coming few sessions until a clear winner is declared.\r\n… [+2345 chars]",
    },
    {
      source: {
        id: null,
        name: "Hvg.hu",
      },
      author: "hvg@hvg.hu",
      title:
        "A Nobel-díjas Stiglitz feltette a kérdést, hogy mit jelentene Trump-Musk féle gazdaság a világnak és nem volt elégedett azzal, amit talált",
      description:
        "„Az amerikaiak többsége szegényebbé válna, rosszabbul és rövidebb ideig élne, ha megvalósulna Donald Trump víziója, mely járadékos kapitalizmust jelent, ahol a haverok járnak jól, mert csökkentenék az adókat és a piac szabályozását” &#8211; hangsúlyozza a Nob…",
      url: "https://hvg.hu/gazdasag/20241105_A-Nobel-dijas-Stiglitz-feltette-a-kerdest-hogy-mit-jelentene-Trump-Musk-fele-gazdasag-a-vilagnak-es-nem-volt-elegedett-azzal-amit-talalt",
      urlToImage:
        "https://img.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/65c50321-c8f4-44b3-a25e-73f8d6a25b51.jpg",
      publishedAt: "2024-11-05T10:33:52Z",
      content:
        "Trump egyre többet ígér a kampányban, de képtelen lesz betartani ígéreteit, hiszen lehetetlen a cégek és a szupergazdagok adóját csökkenteni, miközben finanszírozzuk  a katonai kiadásokat és a társad… [+3405 chars]",
    },
    {
      source: {
        id: null,
        name: "Titanic-magazin.de",
      },
      author: "Titanic",
      title: "Quo vadis, Wolfsburg?",
      description:
        "Wegen der angekündigten Werksschließungen und Entlassungen bei VW geht in der Autostadt die Angst vor dem totalen Bankrott des Konzerns um. Was geschieht, wenn sich Wolfsburg ohne die wirtschaftliche Power eines Riesenkonzerns zu einem...",
      url: "https://www.titanic-magazin.de/news/quo-vadis-wolfsburg-14433/",
      urlToImage:
        "https://www.titanic-magazin.de/fileadmin/core/images/social_media_icons/titaniclogo.png",
      publishedAt: "2024-11-05T10:33:00Z",
      content:
        "Wegen der angekündigten Werksschließungen und Entlassungen bei VW geht in der Autostadt die Angst vor dem totalen Bankrott des Konzerns um. Was geschieht, wenn sich Wolfsburg ohne die wirtschaftliche… [+4337 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.abc.es",
      },
      author: "(abc)",
      title:
        "Elecciones Estados Unidos, en directo: ganador según las encuestas, votaciones, resultados y última hora de Trump y Kamala Harris en directo hoy",
      description:
        "Sigue en directo la última hora de las elecciones en Estados Unidos, con el resultado según las encuestas, votaciones y todo lo que suceda con Donald Trump y Kamala Harris hoy",
      url: "https://www.abc.es/internacional/elecciones-estados-unidos-directo-ganado-resultado-sondeos-ultima-hora-donald-trump-kamala-harris-hoy-20241105172328-di.html",
      urlToImage:
        "https://s3.abcstatics.com/abc/www/multimedia/internacional/2024/11/05/directo-eeuu-1920x1080-k5sB--1200x630@diario_abc.jpg",
      publishedAt: "2024-11-05T10:31:26Z",
      content:
        "Sigue en directo la última hora de las elecciones en Estados Unidos, con el resultado, el ganador, los sondeos y todo lo que suceda con Donald Trump y Kamala Harris hoy.Algunos votantes en el Escuela… [+6645 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Hugo Engström",
      title: "Windows Hello på låsskärmen får nytt utseende",
      description:
        "Rullas ut för Windows Insider nu\n\n\n\n\n\n\nMicrosoft har släppt en ny förhandsversion av Windows Insider (version 22635.4440), där de främsta nyheterna handlar om att förbättra Windows Hello. Företaget har designat nya ikoner som kommer att symbolisera inloggning…",
      url: "https://feber.se/pc/windows-hello-pa-lasskarmen-far-nytt-utseende/473638/",
      urlToImage: "https://static.feber.se/article_images/60/38/01/603801.jpg",
      publishedAt: "2024-11-05T10:30:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+21331 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Roger Åberg",
      title: "Nu kommer Air Jordans till Fortnite",
      description:
        'Sneakers hittar in i spelet\n\n\n\n\n\n\n\n\n\n\n\n\nEn uppdatering är på gång till Fortnite och en del av denna är att riktiga sneakers är på väg in. Den första dojan som hittar in är en riktig klassiker, nämligen Air Jordan 1, närmare bestämt varianten som kallas för "B…',
      url: "https://feber.se/spel/nu-kommer-air-jordans-till-fortnite/473669/",
      urlToImage: "https://static.feber.se/article_images/60/38/44/603844.jpg",
      publishedAt: "2024-11-05T10:30:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+22473 chars]",
    },
    {
      source: {
        id: null,
        name: "Sopitas.com",
      },
      author: "Sopibecario",
      title:
        "Rifas falsas: Elon Musk seguirá dando dinero durante elecciones en Estados Unidos",
      description:
        "De ser reales, quién sabe… Pero ahora que se descubrió que las rifas de Elon Musk eran puro montaje, un juez de Pensilvania permitió que el...\nThe post Rifas falsas: Elon Musk seguirá dando dinero durante elecciones en Estados Unidos appeared first on Sopitas…",
      url: "https://www.sopitas.com/noticias/rifas-elon-musk-elecciones-estados-unidos-donald-trump/",
      urlToImage:
        "https://www.sopitas.com/wp-content/uploads/2024/03/elon-musk-demanda-openia-chatgpt-3-e1730802008344.jpg",
      publishedAt: "2024-11-05T10:25:37Z",
      content:
        'Lo que necesitas saber:\r\nElon Musk se ha revelado como abierto seguidor de Donald Trump, así que sus "rifas" son una evidente forma de intervenir a favor del republicano en la elección presidencial.\r… [+2151 chars]',
    },
    {
      source: {
        id: null,
        name: "Netzpiloten.de",
      },
      author: "Stefan Reismann",
      title: "Lohnt sich Factorio 2024?",
      description:
        "Factorio ist eines dieser Steam-Phänomene, die einen überraschen. 2016 gestartet, erfreut es sich seitdem ungebrochener Beliebtheit. 97% positive Rezensionen auf Steam und konstant steigende Spielerzahlen sprechen für sich. Mit Space Age ist über 8 Jahre nach…",
      url: "https://www.netzpiloten.de/lohnt-sich-factorio-2024/",
      urlToImage:
        "https://www.netzpiloten.de/wp-content/uploads/2024/11/lohnt-sich-factorio-800x800-1.jpg",
      publishedAt: "2024-11-05T10:19:26Z",
      content:
        "Factorioist eines dieser Steam-Phänomene, die einen überraschen. 2016 gestartet, erfreut es sich seitdem ungebrochener Beliebtheit. 97% positive Rezensionen auf Steam und konstant steigende Spielerza… [+17187 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-05T10:16:41Z",
      content: "[Removed]",
    },
    {
      source: {
        id: "t3n",
        name: "T3n",
      },
      author: "Jörn Brien",
      title:
        "Tesla: Wie ein Software-Update dafür sorgt, dass ein Mann nicht mehr in sein Auto einsteigen kann",
      description:
        "Nach jahrelangen Ankündigungen hat Tesla im September die Herbeirufen-Funktion erweitert – allerdings nicht zur Freude aller Fahrer:innen. Denn das entsprechende Software-Update hat dafür gesorgt, dass ein Mann nicht mehr in sein Auto kommt.weiterlesen auf t3…",
      url: "https://t3n.de/news/tesla-software-update-fehler-1655453/",
      urlToImage:
        "https://t3n.de/news/wp-content/uploads/2023/11/tesla-service-ahead.jpg",
      publishedAt: "2024-11-05T10:15:51Z",
      content:
        "Geht es nach der Vision von Tesla, lassen sich die Fahrzeuge künftig einfach herbeirufen. Dabei soll es irgendwann auch ganz egal sein, wo die Fahrer:innen und wo ihre Auto stehen. Ein paar Klicks in… [+2370 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Nika Shakhnazarova",
      title:
        "Elon Musk and ex Grimes search for LA mansion to share with his other children’s moms: report",
      description:
        "Still, the exes are reportedly not looking to rekindle their romance despite the unconventional lifestyle change.",
      url: "https://nypost.com/2024/11/05/entertainment/elon-musk-and-ex-grimes-search-for-la-mansion-to-share-with-his-other-childrens-moms-report/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/11/93074634.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-11-05T10:11:45Z",
      content:
        "Elon Musk and his ex-girlfriend Grimes have begun searching for a Los Angeles mansion they could move into with Musk’s other baby mamas, according to a new report.\r\nThe exes, who dated on and off bet… [+2613 chars]",
    },
    {
      source: {
        id: null,
        name: "Tudocelular.com",
      },
      author: "Tudocelular.com",
      title:
        "Tesla Phone: Elon Musk revela condição para montadora lançar um celular",
      description:
        "Elon Musk confirmou hoje que a Tesla não lançará um celular.",
      url: "https://www.tudocelular.com/mercado/noticias/n228079/tesla-phone-elon-musk-montadora-lancar-celular.html",
      urlToImage: "https://t2.tudocdn.net/653986?w=1920",
      publishedAt: "2024-11-05T10:09:00Z",
      content:
        "Vários rumores sobre um celular da Tesla circulam há anos na internet, alguns citando um Tesla Phone e outros um Cyberphone. Entretanto, Elon Musk derrubou estas especulações durante uma entrevista, … [+1178 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "businessinsider.com",
      title: "BYD's hybrid popularity catches up to Tesla in China",
      description:
        "Tesla Model 3 vehicles at the company's factory in Shanghai, China.\nREUTERS/Aly Song/File Photo\nTesla is falling behind in China as BYD's hybrids take off.\nHybrid sales have helped to drive up overall plug-in sales in China this year.\nThe results come amid a …",
      url: "https://biztoc.com/x/0bc37a11b51d7d2f",
      urlToImage: "https://biztoc.com/cdn/0bc37a11b51d7d2f_s.webp",
      publishedAt: "2024-11-05T10:06:51Z",
      content:
        "Tesla Model 3 vehicles at the company's factory in Shanghai, China.REUTERS/Aly Song/File PhotoTesla is falling behind in China as BYD's hybrids take off.Hybrid sales have helped to drive up overall p… [+141 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Joe Rogan gives backing to Donald Trump in US election",
      description:
        "The podcaster's backing could prove influential with young men - a demographic Trump has worked hard to court.",
      url: "https://www.bbc.com/news/articles/cp9z2p3vr48o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/f0ac/live/57eab1f0-9b5c-11ef-a9f5-252f62549e4d.jpg",
      publishedAt: "2024-11-05T10:06:00Z",
      content:
        "Joe Rogan has given his endorsement to Donald Trump as Americans head to the polls in Tuesday's presidential election.\r\nThe podcaster said he was giving the Republican his backing after being convinc… [+3096 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "nnaughton@insider.com (Nora Naughton)",
      title: "BYD's hybrid popularity catches up to Tesla in China",
      description:
        "Tesla's sales slip comes amid a record year for competitor BYD in the ever-important Chinese market.",
      url: "https://www.businessinsider.com/tesla-china-sales-drop-byd-hybrids-2024-11",
      urlToImage:
        "https://i.insider.com/6729451d192f5258985602fe?width=1200&format=jpeg",
      publishedAt: "2024-11-05T10:00:02Z",
      content:
        "Tesla's sales are slipping in China in the latest sign of trouble for Elon Musk's car company.\r\nTesla's Shanghai factory shipped 68,280 Model 3s and Model Ys in October, down 5.3% from the same month… [+1939 chars]",
    },
    {
      source: {
        id: null,
        name: "L'Usine Nouvelle",
      },
      author: "Léna Corot",
      title:
        "Relancée par l'IA générative, la robotique humanoïde n’a pas dit son dernier mot",
      description:
        "L’intelligence artificielle générative a remis la robotique humanoïde au goût du jour. Des start-up se concurrencent pour réaliser un premier robot pour l’industrie. «De toute ma carrière je n’ai jamais vu autant de robots humanoïdes.» Le directeur de recherc…",
      url: "https://www.usinenouvelle.com/editorial/relancee-par-l-ia-generative-la-robotique-humanoide-n-a-pas-dit-son-dernier-mot.N2221325",
      urlToImage:
        "https://www.usinenouvelle.com/mediatheque/4/4/5/001504544_896x598_c.png",
      publishedAt: "2024-11-05T10:00:00Z",
      content:
        "«De toute ma carrière je nai jamais vu autant de robots humanoïdes.» Le directeur de recherche dans ce domaine au CNRS, Abderrahmane Kheddar, a été impressionné par le salon mondial de la robotique, … [+5906 chars]",
    },
    {
      source: {
        id: null,
        name: "Feber.se",
      },
      author: "Hugo Engström",
      title: "Kolla på början av Smile 2 hemma nu",
      description:
        "Men du måste le hela tiden\n\n\n\n\n\n\n\n\n\n\nNu kan du se de första sju minuterna av skräckfilmen Smile 2 gratis online, men det finns en hake: du måste le hela tiden. Paramount kör nämligen en kampanj med en sajt som använder din webbkamera, och om du slutar le, ens…",
      url: "https://feber.se/film/kolla-pa-borjan-av-smile-2-hemma-nu/473637/",
      urlToImage: "https://i.ytimg.com/vi/0HY6QFlBzUY/hqdefault.jpg",
      publishedAt: "2024-11-05T10:00:00Z",
      content:
        "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+20966 chars]",
    },
    {
      source: {
        id: null,
        name: "Startupi.com.br",
      },
      author: "Tiago Souza",
      title:
        "Startup de IA de Elon Musk busca novo aporte e mira avaliação de US$ 40 bilhões",
      description:
        "Startupi\n\nStartup de IA de Elon Musk busca novo aporte e mira avaliação de US$ 40 bilhões\nSegundo fontes da Agência Bloomberg, a startup de inteligência artificial (IA) de Elon Musk, xAI, está em busca de uma nova rodada de investimentos que poderá levar sua …",
      url: "https://startupi.com.br/xai-de-elon-musk-projeta-us-40-bilhoes/",
      urlToImage:
        "https://startupi.com.br/wp-content/uploads/2023/05/elon-musk.png",
      publishedAt: "2024-11-05T10:00:00Z",
      content:
        "Segundo fontes da Agência Bloomberg, a startup de inteligência artificial (IA) de Elon Musk, xAI, está em busca de uma nova rodada de investimentos que poderá levar sua avaliação de mercado para até … [+5053 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Stefan Paravicini",
      title: "Tesla erhöht Gehälter in Grünheide",
      description:
        "Tesla erhöht die Gehälter der Belegschaft am einzigen europäischen Produktionsstandort. Zuvor hatte eine Umfrage ergeben, dass sich viele der etwa 12.000 Beschäftigten überlastet fühlen.",
      url: "https://www.faz.net/aktuell/wirtschaft/tesla-in-gruenheide-vier-prozent-mehr-gehalt-fuer-12-000-beschaeftigte-110090502.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/aktuell/wirtschaft/845106560/1.10085165/facebook_teaser/die-mitarbeiter-des-tesla.jpg",
      publishedAt: "2024-11-05T09:58:19Z",
      content:
        "Für die Beschäftigten in der Produktion handele es sich schon um die zweite Gehaltsanpassung im laufenden Jahr, nachdem die Entgelte im Februar bezogen auf das Jahresentgelt pauschal um 2500 Euro ang… [+3065 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "finance.yahoo.com",
      title: "Tesla increases wages at German gigafactory by 4%",
      description:
        'Tesla has raised the wages of all employees at its gigafactory outside Berlin by 4% since the start of November, the U.S. carmaker said on Tuesday.\n"Immediately after the announcement of the transfer of 500 temporary workers to permanent, unlimited employment…',
      url: "https://biztoc.com/x/25a9ea6985acd0c9",
      urlToImage: "https://biztoc.com/cdn/807/og.png",
      publishedAt: "2024-11-05T09:55:30Z",
      content:
        'Tesla has raised the wages of all employees at its gigafactory outside Berlin by 4% since the start of November, the U.S. carmaker said on Tuesday."Immediately after the announcement of the transfer … [+156 chars]',
    },
    {
      source: {
        id: null,
        name: "Hdblog.it",
      },
      author: "HDblog.it",
      title:
        "La lotteria milionaria di Musk può continuare perché... non è una lotteria",
      description:
        "Gli avvocati del PAC hanno ammesso che i vincitori non sono scelti a caso, ma sono di fatto portavoce a pagamento.",
      url: "https://www.hdblog.it/internet/articoli/n598333/elon-musk-lotteria-milione-dollari-continua/",
      urlToImage: "https://hd2.tudocdn.net/1055131?w=1920",
      publishedAt: "2024-11-05T09:55:00Z",
      content:
        "Un giudice di Philadelphia ha stabilito che la “lotteria” da un milione di dollari al giorno di Elon Musk può continuare, respingendo la mozione di emergenza del procuratore Larry Krasner. Diciamo “l… [+1914 chars]",
    },
    {
      source: {
        id: null,
        name: "Bolsamania.com",
      },
      author: "redaccion@bolsamania.com (Álvaro Estévez)",
      title:
        "Expectación total en el bitcoin y las criptos con las elecciones de Estados Unidos",
      description:
        "Pocos movimientos en el mercado de las criptomonedas. El bitcoin (BTC) cotiza bastante plano y se sitúa justo por debajo de los 69.000 dólares después de llegar a perder los 68.000 en las últimas 24 horas. Por su parte, el ethereum (ETH) cede con moderación h…",
      url: "https://www.bolsamania.com/noticias/criptodivisas/expectacion-total-bitcoin-elecciones-eeuu--17920850.html",
      urlToImage:
        "https://img6.s3wfg.com/web/img/images_uploaded/2/2/ep_archivo_-_bitcoin_20230728131403.jpg",
      publishedAt: "2024-11-05T09:48:38Z",
      content:
        "Pocos movimientos en el mercado de las criptomonedas. El bitcoin (BTC) cotiza bastante plano y se sitúa justo por debajo de los 69.000 dólares después de llegar a perder los 68.000 en las últimas 24 … [+3996 chars]",
    },
    {
      source: {
        id: null,
        name: "Energyskeptic.com",
      },
      author: "energyskeptic",
      title:
        "Battery Energy storage batteries (BESS) too complex to ever be commercial",
      description:
        "Source: RWE connects its first utility-scale battery storage project to the California grid Preface.  In 2024 if all of the BESS battery storage time were added up, they could store 8 of the 8,760 hours of annual electricity generated in … Continue reading →",
      url: "https://energyskeptic.com/2024/battery-energy-storage-batteries-bess-too-complex-to-ever-be-commercial/",
      urlToImage: null,
      publishedAt: "2024-11-05T09:47:14Z",
      content:
        "Source: RWE connects its first utility-scale battery storage project to the California grid\r\nPreface.  In 2024 if all of the BESS battery storage time were added up, they could store 8 of the 8,760 h… [+13473 chars]",
    },
    {
      source: {
        id: null,
        name: "Korrespondent.net",
      },
      author: "1",
      title: "Tesla на буксирі корови: незвичний протест у Китаї",
      description:
        "У Китаї власник Tesla, розчарований відмовою автосалону забрати його авто на ремонт, прив’язав до машини корову й тягнув електрокар через центр міста.",
      url: "https://ua.korrespondent.net/world/4729234-Tesla-na-buksyri-korovy-nezvychnyi-protest-u-kytai",
      urlToImage: "https://kor.ill.in.ua/m/1260x900/4264474.png",
      publishedAt: "2024-11-05T09:46:00Z",
      content:
        ': , Tesla . , .\r\n, , Tesla . "" , .\r\n, Tesla .\r\n, 29- .\r\n Tesla 12%\r\n .net Telegram WhatsApp. https://t.me/korrespondentnetWhatsApp',
    },
    {
      source: {
        id: null,
        name: "Overclockers.ru",
      },
      author: "g1tarist",
      title:
        "The Boring Company Илона Маска построила туннель для доставки Tesla и Cybertruck в стиле Fallout",
      description:
        "Это авто теперь будут быстро доставлять с завода на стоянку.",
      url: "https://overclockers.ru/blog/letsplay/show/189321/The-Boring-Company-Ilona-Maska-postroila-tunnel-dlya-dostavki-Tesla-i-Cybertruck-v-stile-Fallout",
      urlToImage: "https://overclockers.ru/st/legacy/blog/422417/582451_O.png",
      publishedAt: "2024-11-05T09:40:41Z",
      content:
        ", The Boring Company, Gigafactory . Tesla Model Y Cybertruck .\r\n 130. , . , Fallout.\r\nThe Boring Company, , . . , , .\r\n The Boring Company . , .\r\n , .",
    },
    {
      source: {
        id: null,
        name: "Giornalettismo.com",
      },
      author: "Enzo Boldi",
      title: "Il caso della (finta) lotteria di Musk a sostegno di Trump",
      description:
        "La causa contro l'elargizione di un milione di dollari al giorno è stata respinta. Ma sono gli stessi avvocati del proprietario di X a svelare la \"farsa\"\nL'articolo Il caso della (finta) lotteria di Musk a sostegno di Trump proviene da Giornalettismo.",
      url: "https://www.giornalettismo.com/lotteria-elon-musk-falsa/",
      urlToImage:
        "https://static.nexilia.it/giornalettismo/2024/11/Lotteria-Elon-Musk.png",
      publishedAt: "2024-11-05T09:32:43Z",
      content:
        "La trasparenza non è senz’altro una delle virtù dell’uomo più ricco del mondo. E anche il caso della “lotteria” messa in piedi da Elon Musk a sostegno della candidatura di Donald Trump alla Casa Bian… [+2699 chars]",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author: "Antoine Roche",
      title:
        "Actualité : Failles critiques sur les cartes graphiques Nvidia : mettez vos pilotes à jour avant qu'il ne soit trop tard",
      description:
        "Pas moins de huit failles de sécurité affectent les logiciels et cartes graphiques de Nvidia. Heureusement, les derniers pilotes en date peuvent protéger votre système.",
      url: "https://www.lesnumeriques.com/carte-graphique/failles-critiques-sur-les-cartes-graphiques-nvidia-mettez-vos-pilotes-a-jour-avant-qu-il-ne-soit-trop-tard-n228408.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/news/22/228408/03523888-nvidia-signale-des-failles-de-securite-critiques-mettez-vos-drivers-de-gpu-a-jour-au-plus-vite__1200_678__0-51-3072-1663_wtmk.jpg",
      publishedAt: "2024-11-05T09:31:00Z",
      content:
        "Le 22 octobre dernier, Nvidia publiait de nouveaux pilotes pour ses GPU. Au-delà d'optimiser l'expérience de jeu pour plusieurs titres (Dragon Age : The Veilguard, Red Dead Redemption, Call of Duty :… [+2097 chars]",
    },
    {
      source: {
        id: null,
        name: "mobiFlip.de",
      },
      author: "Oliver Schwuchow",
      title: "Das „Verbrenner-Aus“ ab 2035 dürfte bleiben",
      description:
        "Es gibt immer mehr Stimmen in der EU, die das Verbrenner-Verbot ab 2035 doch eher kritisch sehen und es abschaffen wollen. Doch Apostolos Tzitzikostas möchte daran festhalten, wie auch an […]",
      url: "https://www.mobiflip.de/shortnews/das-verbrenner-aus-ab-2035-duerfte-bleiben/",
      urlToImage:
        "https://www.mobiflip.de/wp-content/uploads/2022/06/verbrenner.jpg",
      publishedAt: "2024-11-05T09:30:07Z",
      content:
        "Es gibt immer mehr Stimmen in der EU, die das Verbrenner-Verbot ab 2035 doch eher kritisch sehen und es abschaffen wollen. Doch Apostolos Tzitzikostas möchte daran festhalten, wie auch an den strenge… [+1637 chars]",
    },
  ];
  constructor() {
    super();
    console.log("NewsItem Constructor");
    this.state = { articles: this.articles };
  }

  render() {
    return (
      <div className="container my-3">
        <h1 id="heading" align="center">
          NewsUp - Top Headlines
        </h1>

        {/* Row 1 */}
        <div className="row">
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem
              title="Följ valet direkt på hemskärmen"
              description="För dig som verkligen vill följa på alla skärmar\n\n\n\n\n\n\nJag älskar liveaktiviteter, med dem kan man följa viktiga saker direkt på hemskärmen. Som hur det står i en pågående Bajen-match, hur långt det är kvar på parkeringen och hur många procent av flygplanet s…"
              imageUrl="https://static.feber.se/article_images/60/38/13/603813.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
