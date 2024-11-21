import firstRoomBg from '../assets/rooms/first/bg.jpg';
import secondRoomBg from '../assets/rooms/second/bg.jpg';
import thirdRoomBg from '../assets/rooms/third/bg.jpg';

import gannibalPreview from '../assets/rooms/first/exhibits/gannibal.png';
import boxPreview from '../assets/rooms/first/exhibits/box.png';
import spoonPreview from '../assets/rooms/first/exhibits/spoon.png';

import firstRoomGuide from '../assets/rooms/first/guide.mp3';
import secondRoomGuide from '../assets/rooms/second/guide.mp3';

import Person1 from '../assets/rooms/secret/person1.png';
import Person2 from '../assets/rooms/secret/person2.png';
import Person3 from '../assets/rooms/secret/person3.png';

const QUIZ_DATA_1 = [
  {
    text: 'В каком здании вы находитесь?',
    answers: ['«гостевой флигель»', '«господский дом»', '«людская»'],
    right_answers: 0,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'Сколько всего имений было у А.П. Ганнибала под Петербургом?',
    answers: ['4', '3', '2'],
    right_answers: 0,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'Как в XVIII веке назывался инженер, занимающийся строительством крепостей и оборонительных сооружений?',
    answers: ['«инженер-фортификатор»', '«инженер-строитель»', '«инженер-конструктор»'],
    right_answers: 0,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'К какому веку относятся самые ранние находки на территории усадьбы?',
    answers: ['XVIII век', 'XIX век', 'XX век'],
    right_answers: 1,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'Когда венчались родители А.С. Пушкина?',
    answers: ['«28 сентября 1796 года»', '«28 декабря 1796 года»', '«28 декабря 1799 года»'],
    right_answers: 0,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
];

const EXHIBITS_DATA = [
  {
    name: 'gannibal',
    route: 'gannibal',
    img: gannibalPreview,
    preview: gannibalPreview,
    threejs: 'gannibal',
    description: {
      img: Person1,
      text: [
        'Ложка чайная из подарочного комплекта столовых приборов на крещение внука Абрама Ганнибала Вениамина Петровича Ганнибала (1780–1839).',
        'Ложка лаконичной формы с овальной неглубокой лопастью, плоским плавно расширяющимся к концу черенком, прямоугольным в сечении.',
      ],
    },
  },
  {
    name: 'box',
    route: 'box',
    img: boxPreview,
    preview: boxPreview,
    threejs: 'gannibal',
    description: {
      img: Person1,
      text: [
        'Ложка чайная из подарочного комплекта столовых приборов на крещение внука Абрама Ганнибала Вениамина Петровича Ганнибала (1780–1839).',
        'Ложка лаконичной формы с овальной неглубокой лопастью, плоским плавно расширяющимся к концу черенком, прямоугольным в сечении.',
      ],
    },
  },
  {
    name: 'ложка чайная «на зубок»',
    route: 'spoon',
    img: spoonPreview,
    preview: spoonPreview,
    threejs: 'box',
    description: {
      img: Person1,
      text: [
        'Ложка чайная из подарочного комплекта столовых приборов на крещение внука Абрама Ганнибала Вениамина Петровича Ганнибала (1780–1839).',
        'Ложка лаконичной формы с овальной неглубокой лопастью, плоским плавно расширяющимся к концу черенком, прямоугольным в сечении.',
      ],
    },
  },
];

export const ROOMS_DATA = [
  {
    name: 'Зал 1',
    route: 'first',
    bgImg: firstRoomBg,
    audio: firstRoomGuide,
    exhibits: [
      EXHIBITS_DATA[0],
      EXHIBITS_DATA[1],
      EXHIBITS_DATA[2],
      EXHIBITS_DATA[1],
      EXHIBITS_DATA[1],
      EXHIBITS_DATA[1],
    ],
    quiz: QUIZ_DATA_1,
    quizTexts: {
      startPage: (
        <>
          А вы знаете, где находитесь? Предлагаем несколько вариантов… <br /> Начните викторину.
        </>
      ),
      endPageGood:
        'Вы хорошо ориентируетесь на территории усадьбы, можете отличить «гостевой флигель» от «людской», знаете сколько имений было у Ганнибала. ',
      endPageBad:
        'Возможно, вам стоит прогуляться по усадьбе, еще раз изучить отличия «инженера-конструктора» от «инженера-фортификатор». Попробуйте пройти викторину снова.',
    },
  },
  {
    name: 'Зал 2',
    route: 'second',
    bgImg: secondRoomBg,
    audio: secondRoomGuide,
    exhibits: [EXHIBITS_DATA[2], EXHIBITS_DATA[1], EXHIBITS_DATA[0]],
    quiz: QUIZ_DATA_1,
    quizTexts: {
      startPage: (
        <>А вы знаете, где находитесь? Предлагаем несколько вариантов…Начните викторину.</>
      ),
      endPageGood:
        'Вы хорошо ориентируетесь на территории усадьбы, можете отличить «гостевой флигель» от «людской», знаете сколько имений было у Ганнибала. ',
      endPageBad:
        'Возможно, вам стоит прогуляться по усадьбе, еще раз изучить отличия «инженера-конструктора» от «инженера-фортификатор». Попробуйте пройти викторину снова.',
    },
  },
  {
    name: 'Зал 3',
    route: 'third',
    bgImg: thirdRoomBg,
    audio: firstRoomGuide,
    exhibits: [EXHIBITS_DATA[1], EXHIBITS_DATA[2], EXHIBITS_DATA[0]],
    quiz: QUIZ_DATA_1,
    quizTexts: {
      startPage: (
        <>А вы знаете, где находитесь? Предлагаем несколько вариантов… Начните викторину.</>
      ),
      endPageGood:
        'Вы хорошо ориентируетесь на территории усадьбы, можете отличить «гостевой флигель» от «людской», знаете сколько имений было у Ганнибала. ',
      endPageBad:
        'Возможно, вам стоит прогуляться по усадьбе, еще раз изучить отличия «инженера-конструктора» от «инженера-фортификатор». Попробуйте пройти викторину снова.',
    },
  },
];

export const PERSONS = [
  {
    name: `Абрам Петрович Ганнибал`,
    info: `Русский военный инженер, генерал-аншеф.`,
    image: Person1,
    story: (
      <>
        Личность Абрама Петровича — крестника и сподвижника Петра I, прадеда великого русского поэта
        Александра Сергеевича Пушкина, вызывает неподдельный интерес уже не одно столетие. Арап
        Петра Великого стал свидетелем и участником важных исторических процессов и событий XVIII
        столетия, застал восемь монархов на русском троне и множество знаковых государственных
        деятелей.
        <br />
        <br />
        Абрам Петрович Ганнибал значительную часть своей жизни посвятил службе на благо государства
        Российского. Начав службу ещё при Петре I, он будет заниматься подготовкой будущих
        инженеров, затем ему предстоит отстаивать государственные интересы в Прибалтике. В период
        русско-шведской войны 1741-1743 гг., генерал-майор Абрам Ганнибал будет обер-комендантом
        важного стратегического объекта, а именно - Ревельской крепости. Немалую пользу он принесет
        на службе в Санкт-Петербурге, где будет служить в Корпусе военных инженеров, а затем и
        возглавит его. 23 октября 1759 года А.П. Ганнибал был произведен в генерал-аншефы, с
        назначением главным директором ладожских каналов и комиссии Кронштадтских и Рогервикских
        строений. Государственная служба Абрама Петровича завершится 9 июня 1762 года.
        <br />
        <br />
        В 1759 году Ганнибал приобрел в Копорском уезде мызу Суйда с прилежащими к ней деревнями.
        Именно здесь, после выхода в отставку он «начал вторично, как мудрец, деревенскую жизнь в
        тишине и покое».
        <br />
        <br />
        Абрам Петрович продолжал приносить немалую пользу государству. Так, именно в Суйде ему
        удалось обустроить первые поля в Санкт-Петербургской губернии по выращиванию «земляных
        яблок».
      </>
    ),
  },
  {
    name: `Иван Абрамович Ганнибал`,
    info: 'Текст текст текст',
    image: Person2,
    story: (
      <>
        Среди сыновей «арапа Петра Великого» наиболее выдающейся личностью был, безусловно, И.А.
        Ганнибал, родившийся 5 июня 1735 года в Карьякюла близ Ревеля. Будучи уже в 1744 году
        9-летним мальчиком, зачислен на военную службу, затем обучался в шляхетском кадетском
        корпусе, после окончания служил в артиллерии, участвовал во многих морских сражениях,
        проявив мужество, храбрость и изобретательность.
        <br />
        <br />
        Во время русско-турецкой войны (1768-1774) И.А. Ганнибал в ранге бригадира командовал
        десантным отрядом в 2500 человек, отправленным с эскадрой адмирала Г. А. Спиридова в июле
        1769 года из Балтийского в Средиземное море. В районе Греческого архипелага он с тремя
        кораблями и десантным отрядом взял после 6- дневной бомбардировки 10 апреля 1770 года
        турецкую приморскую крепость Наварин, за что был награждён орденом св. Георгия 3-й степени.
        В Чесменском морском сражении 24-26 июня того же года, будучи цейхмейстером (начальником
        артиллерии) соединённой русской эскадры графа А.Г. Орлова, И.А. Ганнибал отличился при
        изготовлении брандеров и своей искусностью в управлении артиллерийским огнём содействовал
        уничтожению турецкого флота.
        <br />
        <br />
        25 июля 1778 года Ивану Абрамовичу было поручено построить город Херсон с крепостью, главным
        командиром которой он назначался. Ганнибал довольно ответственно подошёл к строительству, и
        уже через три года город получил свой облик в виде многочисленных построек.
        <br />
        <br />
        1 января 1779 года И.А. Ганнибал был произведён в генерал-поручики с сохранением должности
        генерал-цейхмейстера. Помимо ордена св. Георгия 3-й степени он был награждён орденом св.
        Анны 1-й степени (1775), св. Александра Невского (1781) и св. Владимира 1-й степени (1783).
        <br />
        <br />
        И.А. Ганнибал скончался в Петербурге 66-летним бездетным холостяком 12 октября 1801 года и
        был погребён на Лазаревском кладбище Александро- Невской лавры.{' '}
      </>
    ),
  },
  {
    name: `Надежда Осиповна Ганнибал`,
    info: 'Текст текст текст',
    image: Person3,
    story: (
      <>
        21 июня (ст.) 1775 года на свет появилась Надежда Осиповна Ганнибал, в замужестве Пушкина.
        Ей будет суждено стать матерью великого поэта Александра Сергеевича Пушкина.
        <br />
        <br />
        Надежда Осиповна Пушкина получила светское образование, знала французскую литературу,
        свободно чувствовала себя в светском обществе. Окружающие восхищались её красотой, называли
        прекрасной креолкой.
        <br />
        <br />
        28 сентября 1796 года она обвенчалась с Сергеем Львовичем Пушкиным в церкви Воскресения
        Христова в Суйде.
      </>
    ),
  },
  {
    name: `Осип Абрамович Ганнибал`,
    info: 'Текст текст текст',
    image: Person3,
    story: (
      <>
        Третий сын А.П. Ганнибала, Осип Абрамович, родился в Ревеле 20 января 1744 года. Он служил в
        артиллерии (поручик в 1762 году, майор с 29 декабря 1770 года) и вышел в отставку в чине
        капитана 2-го ранга, затем поступил на гражданскую службу, сначала заседателем Псковского
        совестного суда и советником Псковского наместнического правления (1778), а с 6 апреля 1780
        года советником Санкт-Петербургского Губернского правления.
        <br />
        <br />
        В 1772 году Осип женился на дочери бывшего тамбовского воеводы Алексея Федоровича Пушкина,
        Марии. Молодые жили сначала в Муроме, но когда Мария Алексеевна в связи с долгами мужа
        «принужденною нашлась продать приданную свою деревню в Ярославском уезде», «она испросила у
        отца мужа своего ему прощение и позволение к нему приехать», после чего они поселились в
        Суйде.
        <br />
        <br />
        В 1776 году Осип покинул её с малолетней Надеждой и супруги разменялись так называемыми
        “разлучными письмами”.
        <br />
        <br />
        Последние годы своей жизни О.А. Ганнибал провёл безвыездно (возможно лишь изредка покидая) в
        унаследованном псковском имении Михайловском. В 1806 году он умер, 62 лет от роду, и имение
        досталось его жене, Марии Алексеевне и их единственной дочери Надежде Осиповне.
      </>
    ),
  },
  {
    name: `Мария Алексеевна Пушкина`,
    info: 'Текст текст текст',
    image: Person3,
    story: (
      <>
        Бабушка А. С. Пушкина Мария Алексеевна Ганнибал родилась 20 (31) января 1745 года в
        Нижегородской губернии, с двух лет жила в с. Кореневщино (Покровское тож) под Липецком.
        <br />
        <br />
        В начале 1770-х годов в Тамбовской губернии близ Сокольска, в так называемом «Заводе» —
        поселке Липских железоделательных заводов, устроенных еще Петром I, который с 1779 года
        получил статус уездного города и название Липецк. Недалеко от заводов в имении Покровское
        (Кореневщино) проживал Алексей Федорович Пушкин (1717‒1777), капитан Российской
        императорской армии, участник Русско-турецкой войны 1735‒1739 годов и воевода Сокольска,
        входившего в Тамбовское наместничество.
        <br />
        <br />
        Для осмотра заводов из столицы был командирован капитан морской артиллерии Осип Абрамович
        Ганнибал, третий сын Абрама Петровича. Он бывал в имении Алексея Федоровича и познакомился
        там с его дочерью Марией Алексеевной Пушкиной (1745‒1818). Быстро набрав очередные долги,
        Осип искал возможность поправить свое положение и, недолго думая, посватался к засидевшейся
        в девках дочери Алексея Федоровича. Тот дал согласие, венчание состоялось в Вознесенском
        соборе 9 ноября 1772 года.
        <br />
        <br />
        Молодожены какое-то время проживали близ заводов в Муроме, затем перебрались в Петербург где
        поселились у родной тетки Марии Алексеевны. После примирения Осипа Абрамовича с отцом в чем
        большую роль сыграла Мария Алексеевна супруги переезжают в Суйду.
        <br />
        <br />
        Так, для четы Ганнибалов начался новый период жизни, связанный с мызами А.П. Ганнибала -
        Суйдой и Руново, расположенными в 50 верстах от столицы. 26 лет жизни с 1774 по 1800 год
        связывали Марию Алексеевну Ганнибал с этими местами. Об этом времени Мария Алексеевна будет
        рассказывать своему любимому внуку Александру.
      </>
    ),
  },
  {
    name: `Сергей Львович Пушкин`,
    info: 'Текст текст текст',
    image: Person3,
    story: (
      <>
        3 июня (23 мая по ст. стилю) 1770 года родился Сергей Львович Пушкин. Сын богатого помещика.
        Получив светское воспитание, часто блистал в салонных собраниях своей остротой ума и
        эрудицией. Писал стихи как на французском, так и на русском языке. Имел живой интерес к
        литературе, также был знаком с такими деятелями своего времени, как Карамзин, Батюшков,
        Жуковский и т.д. Был вхож в круг знакомств Марии Алексеевны Ганнибал, ур. Пушкиной, где и
        познакомился с ее дочерью Надеждой. Благодаря сохранившемуся документу, а именно записи в
        метрической книге церкви Воскресения Христова, мы знаем, что 28 сентября 1796 года здесь
        венчались «Лейб-гвардии Измайловского полку поручик отрок Сергей Львович сын Пушкин,
        артиллерии морской 2-го ранга капитана Осипа Абрамовича Ганнибала с дочерью его девицей
        Надеждой Осиповой, оба первым браком». После свадьбы молодые поселились «в Измайловском
        полку», а в сезон проживали на мызе Руново и в Суйде.
        <br />
        <br />
        Служба была не самым любимым занятием Сергея Львовича, хотя он с юных лет был записан в
        гвардию, служил в Измайловском полку, а затем в лейб-гвардии егерском полку. Выйдя в
        отставку, с семьей переехал в Москву, хотя в дальнейшем состоял на службе по комиссариатской
        части. Согласно церковным документам последнее посещение Суйдовской церкви отмечено в
        феврале 1799 года, незадолго до рождения второго ребенка, Александра. В январе 1817 года
        окончательно вышел в отставку с чином статского советника.
        <br />
        <br />В Нижегородской губернии у Сергея Львовича было около семи тысяч десятин земли и более
        тысячи крепостных крестьян. Однако из-за нежелания заниматься делами поместий, они пришли в
        упадок. Управляющий Михаил Колашников был нечист на руку и надлежащим образом своих
        обязанностей не исполнял.
      </>
    ),
  },
  {
    name: `Арина Родионовна`,
    info: 'Текст текст текст',
    image: Person3,
    story: (
      <>
        Ирина Родионова родилась 10 апреля (ст.ст) 1758 года на мызе Суйда Копорского уезда
        Петербургской губернии в семье крепостных Родиона Яковлева и Лукерьи Кирилловой. Здесь же
        она росла и бывала в господской мызе своего барина Ганнибала, у которого конюхом служил брат
        Арины Семён Родионов.
        <br />
        <br />
        В семье Родиона Яковлева было семеро детей. После ранней смерти отца, семья осталась без
        мужской опоры и Арине рано пришлось взять на себя взрослые обязанности и заботу о младших. В
        22 года ее выдали замуж за Федора Матфеева, крепостного А.П. Ганнибала из соседней мызы
        Руново. Свадьба состоялась 5 февраля 1781 года, незадолго до кончины супругов Ганнибалов.
        <br />
        <br />
        В 1792 году Арину взяла в дом Мария Алексеевна Ганнибал, урожденная Пушкина, проживавшая в
        сезон на мызе Руново и в Суйде. За верную службу пожаловала Арине отдельную избу в деревне
        Кобрино.
        <br />
        <br />
        Особо теплые отношения связывали Марию Алексеевну и Арину Родионовну. Не смотря на разницу в
        сословиях и образовании, они обе ценили свое общение. Арина Родионовна всегда была при Марии
        Алексеевне, а Мария Алексеевна при своей дочери Надежде. По совету Марии Алексеевны, Арину
        взяли в кормилицы к Ольге Сергеевне – первенцу Сергея Львовича и Надежды Осиповны Пушкиных,
        поскольку она была кормящей для своего четвертого ребенка, сына Стефана. А уже через год
        Арина переехала с семьей Пушкиных в Москву.
        <br />
        <br />
        В семье Пушкиных, как водилось в то время в дворянских семьях, детям давали французское
        воспитание. Родному же языку Александра Пушкина учила его бабушка и няня, Няня была
        неиссякаемым источником русского фольклора, которым пронизано творчество поэта. Пушкин
        посвящал няне стихи, рисовал ее портреты на своих рукописях и с любовью называл ее «мамой».
        <br />
        <br />
        Богатство фольклора Суйдинской земли вылилось в сказаниях Арины, которые так любил ее
        воспитанник Александр и использовал в своих произведениях. Одно из них про «море-Лукоморье».
        Можно сказать «аринино Лукоморье», образ которого есть и в известном нам пушкинском
        Лукоморье из предисловия к «Руслану и Людмиле».
        <br />
        <br />И в годы ссылки Пушкина в Михайловское она рядом с ним и глубокое уважение к няне,
        простой деревенской женщине, сквозит в словах поэта: «вы, кажется, раз ее видели: она –
        единственная моя подруга…». Все товарищи, друзья и добрые знакомые поэта знали ее или
        слышали о ней и любили ее. Последний год жизни Арина Родионовна провела в доме сестры поэта,
        Ольги Сергеевны Павлищевой (урожденной Пушкиной) в Петербурге, где 31 июля 1828 года
        скончалась. Смерть ее опечалила не только семью Пушкиных и Александра Сергеевича, но и его
        друзей. «Если грядущее поколение будет чтить мое имя, должна быть не забыта и эта бедная
        старушка» Пушкин А.С.
      </>
    ),
  },
];

export const MAP_POINTS = [
  {
    name: 'точка 1',
    info: 'Ложка чайная из подарочного комплекта столовых приборов на крещение внука Абрама Ганнибала Вениамина Петровича Ганнибала (1780–1839). Ложка чайная из подарочного комплекта столовых приборов на крещение внука Абрама Ганнибала Вениамина Петровича Ганнибала (1780–1839). Ложка чайная из подарочного комплекта столовых приборов на крещение внука Абрама Ганнибала Вениамина Петровича Ганнибала (1780–1839)',
    img: Person1,
    top: 210,
    left: 310,
  },
  {
    name: 'точка 2',
    info: 'крутое здание 2',
    img: Person2,
    top: 290,
    left: 120,
  },
  {
    name: 'точка 3',
    info: 'крутое здание 3',
    img: Person3,
    top: 170,
    left: 400,
  },
  {
    name: 'точка 4',
    info: 'крутое здание 4',
    img: Person1,
    top: 400,
    left: 500,
  },
];
