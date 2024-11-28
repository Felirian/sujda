import map1 from '../assets/map/img/1.jpg';
import map2 from '../assets/map/img/2.jpg';
import map3 from '../assets/map/img/3.jpg';
import map4_1 from '../assets/map/img/4_1.jpg';
import map4_2 from '../assets/map/img/4_2.jpg';
import map6_1 from '../assets/map/img/6_1.jpg';
import map6_2 from '../assets/map/img/6_2.jpg';
import map6_1_1 from '../assets/map/img/6_1_1.jpg';
import map7 from '../assets/map/img/7.jpg';
import map8 from '../assets/map/img/8.jpg';
import map9_1 from '../assets/map/img/9_1.jpg';
import map9_2 from '../assets/map/img/9_2.png';
import map12 from '../assets/map/img/12.jpg';
import map13 from '../assets/map/img/13.jpg';
import map14 from '../assets/map/img/14.jpg';
import map15 from '../assets/map/img/15.png';
import map16 from '../assets/map/img/16.jpg';
import map17 from '../assets/map/img/17.jpg';
import map18 from '../assets/map/img/18.jpg';
import map19 from '../assets/map/img/19.jpg';
import map20 from '../assets/map/img/20.jpg';
import map22 from '../assets/map/img/22.jpg';
import map23 from '../assets/map/img/23.jpg';
import map27 from '../assets/map/img/27.jpg';
import map28 from '../assets/map/img/28.jpg';
import map29 from '../assets/map/img/29.jpg';
import map30 from '../assets/map/img/30.jpg';
import map35_1 from '../assets/map/img/35_1.jpg';
import map35_2 from '../assets/map/img/35_2.jpg';
import map36 from '../assets/map/img/36.jpg';
import map37_1 from '../assets/map/img/37_1.jpeg';
import map37_2 from '../assets/map/img/37_2.jpg';
import map38_1 from '../assets/map/img/38_1.jpg';
import map38_2 from '../assets/map/img/38_2.jpg';

export const Clustering = (zoomValue, points) => {
  //радиус точек
  const calculateDistance = (pointA, pointB) => {
    const [x1, y1] = pointA.coordinates;
    const [x2, y2] = pointB.coordinates;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };
  //группировка точек
  const createCluster = (points, center) => {
    console.log(points);
    const avgX = points.reduce((sum, p) => sum + p.coordinates[0], 0) / points.length;
    const avgY = points.reduce((sum, p) => sum + p.coordinates[1], 0) / points.length;

    return {
      name: `group_${points.length}`,
      coordinates: [avgX, avgY],
      count: points.length,
      //points,
    };
  };

  const clusters = [];
  const visited = new Set();

  points.forEach((point) => {
    if (visited.has(point)) return;

    const cluster = [];
    const queue = [point];

    while (queue.length > 0) {
      const current = queue.pop();

      if (visited.has(current)) continue;

      visited.add(current);
      cluster.push(current);

      points.forEach((neighbor) => {
        if (!visited.has(neighbor) && calculateDistance(current, neighbor) <= zoomValue) {
          queue.push(neighbor);
        }
      });
    }

    if (cluster.length > 1) {
      clusters.push(createCluster(cluster, point));
    } else {
      clusters.push(cluster[0]);
    }
  });
  console.log(clusters);
  return clusters;
};

export const FILTERS = [
  'Жилые здания и села',
  'Хозяйственные здания',
  'Природные элементы',
  'Аллеи',
  'Парки',
  'Памятники',
  'Религиозные объекты',
];

export const POINTS_DATA = [
  {
    name: 'Господский дом',
    coordinates: [32.24, 29.9],
    info: (
      <>
        Господский дом располагался в центре господской мызы. Уничтожен в пожаре в 1897 году. О нем
        сохранилось мало информации. Вот описание 1873 года: «Усадебный дом владельца, деревянный на
        каменном фундаменте с мезонином, крыт лучиной». По другому описанию он был больше дома
        управляющего и имел обширную террасу, выходящую в сад. Еще одно описание оставила правнучка
        А.П. Ганнибала — Анна Семеновна Ганнибал, посетившая Суйду в 1912 году: «В парке стоял
        большой дом с обширной террасой, выходящей в сад. Большой дом сгорел, недавно только
        разобрали его фундамент».
      </>
    ),
    img: [map1],
    imgdesc: [<span>Место, где раньше стоял Господский дом</span>],
    filter: 0,
  },
  {
    name: 'Дом управляющего',
    coordinates: [31.3, 30.4],
    info: (
      <>
        Постройка XIX века выполнена следующим образом: первый этаж каменный, второй — деревянный,
        венчает дом высокая двускатная крыша со ступенчатым скатом. Архитектура отсылает нас к
        прибалтийскому и голландскому стилю. Считается, что первый этаж сохранил каменную основу со
        времен шведских владельцев. Одним из управляющих имением, проживавшим в этом доме, был
        Герман Германович Ланге. От качества работы управляющего зависели доход и состояние имения.
        После революции и национализации в нём проживали работники совхоза «Суйда», а в послевоенное
        время в здании была размещена столовая и магазин. По архивному описанию этого дома, он был
        чуть меньше господского и не имел террас, выходящих в сад.
      </>
    ),
    img: [map2],
    imgdesc: [],
    filter: 0,
  },
  {
    name: 'Конюшня',
    coordinates: [31.5, 31.1],
    info: (
      <>
        Усадебные конюшни представляют собой каменное строение для содержания лошадей, обычно
        разделенное на индивидуальные секции (стойла) для каждой лошади. Строение примыкало к дому
        управляющего (о чем свидетельствует дореволюционная фотография). В самой конюшне могли
        находиться помещения, такие как фуражная, инвентарная и т. д. Архивные данные указывают, что
        в период с 1917 по 1922 год количество лошадей составляло от 16 до 23. В конце 1960-х годов
        начались работы по переустройству здания в Дом культуры, который функционирует на протяжении
        уже многих десятилетий. В Доме культуры часто проходят мероприятия, связанные с историей
        Суйды.
      </>
    ),
    img: [map3],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Гостевой флигель',
    coordinates: [32.1, 30.5],
    info: (
      <>
        В XVIII-XIX веках флигели были одной из важных составляющих архитектурного комплекса
        городских и загородных имений. В них могли размещать как гостей, так и обедневших
        родственников, гувернеров и прислугу. Гостевой флигель в Суйде служил не только для приема
        гостей. С утратой господского дома в конце XIX века, хозяева имения также проживали именно в
        нем (в это время он выглядел, как на фотографии)
        <br />
        <br />
        В 1914 году в нем был размещен лазарет для раненых. После Октябрьской революции 1917 года в
        имении сформировалась сельскохозяйственная артель, преобразованная в 1919 году в совхоз
        «Суйда». В начале 1950-х годов небольшое каменное здание флигеля перестроили с целью
        увеличения его площади. Теперь здесь размещалась Ленинградская государственная селекционная
        станция «Суйда». В таком перестроенном виде мы можем его наблюдать и по сей день. От старины
        сохранились декоративные обрамления окон.
        <br />
        <b>Памятные доски на фасаде гостевого флигеля</b>
        <br />
        <br />
        1. Парные памятные доски на фасаде гостевого флигеля были установлены в 1954 году, благодаря
        первому «хранителю» Суйды XX века — Лбовскому Ангелису Николаевичу. Они рассказывают о
        людях, проживавших и бывавших на мызе Суйда со II половины XVIII века до начала XIX века.
        <br />
        2. Памятная доска на фасаде (со стороны двора, у крыльца) установлена в 1987 году и
        посвящена созданию одной из первых коммун, преобразованных в опытно-производственное
        хозяйство «Суйда» с селекционной лабораторией по выращиванию картофеля и зерновых.
      </>
    ),
    img: [map4_1, map4_2],
    imgdesc: [],
    filter: 0,
  },
  {
    name: 'Людская',
    coordinates: [32.2, 31.3],
    info: (
      <>
        Людская была еще одной из составляющих усадебного двора в имении. Располагалась рядом с
        гостевым флигелем. В людской проживали господские слуги и дворня.
      </>
    ),
    img: [],
    imgdesc: [],
    filter: 0,
  },
  {
    name: 'Оранжерея',
    coordinates: [32.0, 32.0],
    info: (
      <>
        В XVIII веке выращивание растений в специальных для этого помещениях становится
        распространенным явлением. Оранжереи были предметом гордости помещика, ведь в них он мог
        выращивал экзотические растения, которыми хвастался перед гостями усадьбы.
        <br />
        <br />В усадебном дворике располагаются оранжереи, в которых когда-то Абрам Петрович
        Ганнибал занимался выращиванием диковинных фруктов и растений.
      </>
    ),
    img: [map6_1, map6_2],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Каретный сарай',
    coordinates: [33.6, 29.4],
    info: (
      <>
        Располагался в конце подъездной аллеи со стороны дома егеря. Здание имело характерный для
        мызы стиль построек — из природного камня и красного кирпича. Было утрачено в 1970-е годы
        при застройке современного поселка Суйда.
      </>
    ),
    img: [map6_1_1],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Птичник',
    coordinates: [29.8, 36.3],
    info: (
      <>
        Птицеводство – древнейшая отрасль животноводства, но совсем не развитая в этих краях в
        середине XVIII века. <br />В одном из писем своим детям Абрам Ганнибал пишет о разведении в
        Суйде птицы и с удивлением замечает, что раньше в этих местах никто этим не занимался.
        Птицеводство получило развитие в XIX веке. Так к 1860-70-м годам русскую птицу и яйца
        закупают иностранные конторы, в основном из Германии и Великобритании.
      </>
    ),
    img: [map7],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Амбар и Молочный дом',
    coordinates: [33.0, 35.2],
    info: (
      <>
        Амбар – холодное строение для хранения зерна, муки и т. п., а также вещей, товаров. Амбар,
        как многие другие хозяйственные постройки был выполнен из красного кирпича и камня. Высокая
        крыша имела полувальмовую голландскую форму в две ступени по скату. Такая форма крыши
        характерна для многих построек мызы.
        <br />
        <br />
        Молочный дом в Суйде свидетельствовал о серьезном отношении владельцев к молочному
        хозяйству. Об этом можно узнать из статьи Земледельческой газеты 1913 года №3: «В имении
        Суйда содержится крупное стадо рогатого скота (с числом голов свыше 200 штук) двух пород –
        голландской и фюненской.
      </>
    ),
    img: [map8],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Хозяйственная часть мызы',
    coordinates: [31.3, 35.5],
    info: (
      <>
        Хозяйство А.П. Ганнибала состояло из скотных дворов, птичника, кузни, винокуренного завода,
        молочного дома, амбаров, риги (или овин) и водяной мельницы, расположенной на реке Суйда.
        Часть зданий была перестроена в XX веке, но некоторые из них сохранили свои старинные
        фундаменты и основы.
      </>
    ),
    img: [map9_1, map9_2],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Подъездная березовая аллея',
    coordinates: [30.6, 29.3],
    info: (
      <>
        Подъездная аллея предназначалась в основном для прибытия экипажей к господскому дому. В
        имении могло быть несколько аллей, как, например, в Суйде. Одна из них выполняла роль
        парадной. Такие аллеи были достаточно широкими, образовывая зеленые проспекты. Считается,
        что в Суйде у Ганнибалов подъездные аллеи были березовыми. В более позднее время в XIX и XX
        веках старые аллеи постепенно обновлялись. Линия подъездной аллеи продолжалась центральной
        аллеей регулярного парка.
      </>
    ),
    img: [],
    imgdesc: [],
    filter: 3,
  },
  {
    name: 'Подъездная березовая аллея',
    coordinates: [36.0, 25.5],
    info: (
      <>
        На самых ранних планах имения, обнаруженных в архивах, эта аллея является единственной
        подъездной аллеей в господскую мызу. Именно по ней в гости к Ганнибалам приезжали их дети с
        внуками, в том числе часто ездили родители Александра Пушкина — Надежда Осиповна и Сергей
        Львович.
      </>
    ),
    img: [],
    imgdesc: [],
    filter: 3,
  },
  {
    name: 'Регулярный парк',
    coordinates: [35.0, 29.8],
    info: (
      <>
        Раньше парки называли садами, в том числе и в пушкинские времена. А.П. Ганнибал создал сад в
        духе Петербурга: Верхний (регулярный) и Нижний (пейзажный). На территории все еще
        сохраняются деревья времен Ганнибалов.
        <br />
        <br />
        Регулярный сад во французском стиле имел четкую правильную геометрическую планировку с
        симметричными объектами. Деревья и кусты подвергались стрижке, в том числе и аллеи, которые
        образовывали стены «зеленых кабинетов». Для рядовых посадок использовали липы — они имеют
        густолиственную крону и прекрасно подходят для стрижки. Вдоль дорожек располагались вазоны с
        цветами, что было скорее редкостью, чем обыденностью для 18 века. По центру шла широкая
        дубовая аллея, являясь линией симметрии для рисунка парка.
      </>
    ),
    img: [map12],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Центральная дубовая аллея',
    coordinates: [34.0, 30.4],
    info: (
      <>
        Широкая дубовая аллея продолжает линию подъездной аллеи и проходит через весь верхний парк к
        пруду. Не смотря на многочисленные утраты, сохранился подлинный дуб этой аллеи времен Абрама
        Ганнибала. Деревья утрачены в 1930-40-е годы, а также в 1970-е годы застройки современного
        поселка Суйда.
      </>
    ),
    img: [map13],
    imgdesc: [],
    filter: 4,
  },
  {
    name: 'Дуб Ганнибала',
    coordinates: [35.0, 30.7],
    info: (
      <>
        Единственный дуб центральной дубовой аллеи, сохранившийся со времен А.П. Ганнибала. По
        свидетельству специалистов, ему более 250 лет.
      </>
    ),
    img: [map14],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Каменная скамья (диван)',
    coordinates: [35.4, 30.8],
    info: (
      <>
        По преданию, этот садовый объект появился благодаря Абраму Петровичу Ганнибалу, повелевшему
        высечь из валуна ледникового периода, скамью или сидушку, как раньше называли подобные
        садовые объекты. До 1976 года он располагался в пейзажной части сада, за прудом, на «мокром
        лугу» недалеко от «лукоморского» дуба с видом на восток. Название «диван» стали употреблять
        позже, когда это слово появилось в обиходе.
      </>
    ),
    img: [map15],
    imgdesc: [],
    filter: 5,
  },
  {
    name: 'Липовая аллея (фрагмент)',
    coordinates: [35.2, 31.2],
    info: (
      <>
        Фрагмент поперечной липовой аллеи. В регулярном парке были высажены мелколистные липы. Эта
        аллея была трехрядной. От третьего ряда сохранилось лишь пару деревьев.
      </>
    ),
    img: [map16],
    imgdesc: [],
    filter: 3,
  },
  {
    name: 'Пруд',
    coordinates: [36.5, 32.9],
    info: (
      <>
        Пруд создан на месте лощины, куда с севера собиралась вода. Он лежит в бассейне реки Суйда и
        связан с ней протоками, питающими пейзажный парк. За прудом, вдоль берега росли старинные
        дубы со времен XV-XVI веков. Один из них дожил до XX века, став прообразом дуба из
        суйдинского Лукоморья. Пруд имеет необычную форму и интересную легенду. <br />К 1712 году
        Петр I пожаловал Суйду своему сподвижнику, одному из героев Северной войны, Петру Матвеевичу
        Апраксину (1659-1728). По легенде, Апраксин приказал пленным шведам выкопать пруд в форме
        натянутого лука, направленного на побежденное Шведское королевство со стрелой в виде аллеи.
        Так пруд стал символом победы Русского государства над многолетним шведским владычеством.
      </>
    ),
    img: [map17],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Острова на пруду',
    coordinates: [36.0, 31.2],
    info: (
      <>
        Два одинаковых овальных острова, выложенных камнями, размещены симметрично по отношению к
        линии центральной дубовой аллеи регулярного парка. Когда-то к одному из них вел мостик, и
        стояла беседка.
      </>
    ),
    img: [map18],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Острова на пруду',
    coordinates: [35.77, 32.1],
    info: (
      <>
        Два одинаковых овальных острова, выложенных камнями, размещены симметрично по отношению к
        линии центральной дубовой аллеи регулярного парка. Когда-то к одному из них вел мостик, и
        стояла беседка.
      </>
    ),
    img: [map19],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Лукоморье Место «пушкинского» дуба (600-700 лет)',
    coordinates: [37.76, 32.8],
    info: (
      <>
        В этом месте до 2000 года рос старинный дуб, возраст которого был около 600-700 лет. Он был
        последним сохранившемся деревом дубовой аллеи владельцев Суйды времен XV века. Старый дуб,
        росший на излучине необычного пруда стал прообразом Лукоморья из сказки Арины Родионовны.
        Описание одного из чудес ее сказки А.С. Пушкин взял для пролога к поэме «Руслан и Людмила»:
        «Вот что чудо: у моря Лукомория стоит дуб, а на том дубу золотые цепи, а по тем цепям ходит
        кот; вверх идёт — сказки сказывает, вниз идёт — песни поёт».
      </>
    ),
    img: [map20],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Деревянная изба западного приусадебного двора',
    coordinates: [32.0, 28.9],
    info: (
      <>
        Единственная деревянная постройка западного приусадебного двора была перестроена после
        Великой Отечественной войны. В 1986 году на I Областном Пушкинском празднике в этом здании
        был открыт первый общественный музей в Суйде.
      </>
    ),
    img: [map22],
    imgdesc: [],
    filter: 0,
  },
  {
    name: 'Дом егеря',
    coordinates: [35.8, 26.2],
    info: (
      <>
        Егерь в имении находился на особом положении, поэтому у него был свой отдельный дом. Это был
        опытный, профессиональный охотник, который отвечал за организацию охоты, охотничьих собак,
        состояние и охрану охотничьих угодий. Профессия эта была преимущественно семейной,
        передавалась из поколения в поколение.
      </>
    ),
    img: [map23],
    imgdesc: [],
    filter: 0,
  },
  {
    name: 'Кузня',
    coordinates: [31.4, 33.0],
    info: (
      <>
        Кузнечное дело, первое среди всех ремесленных специальностей, вызывало необходимость
        специально оборудованного помещения. Внутреннее пространство было заполнено различным
        инструментом. Основное оборудование кузни состояло в большинстве из горна (устройство для
        нагревания железа и стали) и наковальни (твердая опора, на которой ковалось изделие).
        Кузницы обычно располагались на окраине из противопожарных соображений, так как в них при
        работе всегда было много огня и искр. Кузнец был уважаемым человеком, так как на его плечах
        лежало изготовление как сельскохозяйственных орудий, так и предметов быта.
        <br />
        Кузня в Суйде работала вплоть до 1980-х годов.
      </>
    ),
    img: [],
    imgdesc: [],
    filter: 1,
  },
  {
    name: 'Лиственницы',
    coordinates: [32.9, 30.5],
    info: (
      <>
        Одни из немногих старинных деревьев, сохранившихся с начала XIX века. Во времена Петра I и
        позднее из стволов лиственницы строили корабли, и до 1858 года их запрещено было продавать
        частным лицам. Лиственницы выдерживают сильнейшие морозы. По оценке специалистов, старшей из
        них более 200-сот лет.
      </>
    ),
    img: [map27],
    imgdesc: [],
    filter: 2,
  },
  {
    name: 'Солнечные часы',
    coordinates: [33.0, 30.1],
    info: (
      <>
        Перед господским домом размещались мраморные солнечные часы с видом на регулярный парк. В
        годы Великой Отечественной войны фашисты вывезли циферблат. В 1970-е годы часы перенесли в
        сторону от дороги, а позже они были утрачены.
      </>
    ),
    img: [map28],
    imgdesc: [],
    filter: 4,
  },
  {
    name: 'Егерская аллея еловая',
    coordinates: [35.8, 27.0],
    info: (
      <>
        Еловая аллея проходила от подъездной березовой аллеи вдоль западной стороны парка. По ней
        можно было доехать до реки Суйды и в охотничьи угодья. Сегодня она называется Парковой
        улицей и ведет к садоводству с названием Егерское.
      </>
    ),
    img: [map29],
    imgdesc: [],
    filter: 3,
  },
  {
    name: 'Пейзажный парк',
    coordinates: [36.5, 29.0],
    info: (
      <>
        Направление в садово-парковом искусстве, сложившееся в XVIII веке в Англии на контрасте с
        барочным регулярным парком во «французском стиле» Ленотра. В отличие от геометрических форм
        «французского» парка «английский» был наиболее приближен к естественному природному
        ландшафту: свободные поляны, рощи, аллеи, беседки, интересные садовые объекты, например,
        такие как грот. На сегодняшний день сохранилось около половины территории ганнибаловского
        нижнего парка, но здесь можно еще встретить липы и дубы того времени. Один из дубов хорошо
        виден на берегу пруда.
      </>
    ),
    img: [map30],
    imgdesc: [],
    filter: 4,
  },
  {
    name: 'Памятник Арине Родионовне в Селе Воскресенском. Место дома ее родителей, где она родилась и выросла.',
    coordinates: [18.25, 31.25],
    info: (
      <>
        Памятник установлен в 2010 году стараниями известного писателя, журналиста и сатирика М.Н.
        Задорнова. Автор В.В. Шевченко. На этом месте находился дом, где родилась и выросла
        крепостная А.П. Ганнибала, Ирина Родионова. С 1890 года здесь была построена
        Церковно-приходская школа.
        <br />
        <br />В 1954 году была открыта мемориальная доска, посвященная Арине Родионовне. Ее можно
        увидеть в музее. Позже, в этом здании находилась начальная школа, носившая имя Арины
        Родионовны. (утрачена в 1990) (фото 1959 г.)
      </>
    ),
    img: [map35_1, map35_2],
    imgdesc: [],
    filter: 5,
  },
  {
    name: 'Церковь Воскресения Христова (1992, современная, действующая)',
    coordinates: [25.5, 27],
    info: (
      <>
        Церковь поставлена в 1992 году в память о трех утраченных церквях Воскресения Христова в
        Суйде. Архитектор А.А. Семочкин. Поставлена на пересечении дорог, как раньше было принято
        ставить. Архитектурный стиль отличается от первой церкви, возведенной П.М. Апраксиным в 1718
        году. Строилась в тяжелый период «перестройки», буквально «с миру по нитке» силами местных
        общественников, проезжающих мимо и руководителей, лично откликающихся на просьбу помочь.
      </>
    ),
    img: [map36],
    imgdesc: [],
    filter: 6,
  },
  {
    name: 'Место первой церкви Воскресения Христова (1718) и захоронения А.П. Ганнибала',
    coordinates: [33.0, 22],
    info: (
      <>
        В этом месте находилась первая после шведского владычества православная церковь Воскресения
        Христова. Поставлена владельцем мызы Петром Матвеевичем Апраксиным в 1718 году. В ней
        венчались родители А.С. Пушкина, была крещена и венчана Арина Родионовна, а в 1781 году
        отпевали и похоронили напротив звонницы Абрама Петровича Ганнибала.
        <br />
        <br />
        Сегодня это место отмечено поклонным крестом, памятной доской и памятной стелой, посвященной
        А.П. Ганнибалу.
      </>
    ),
    img: [map37_1, map37_2],
    imgdesc: [],
    filter: 6,
  },
  {
    name: 'Мельница',
    coordinates: [65.0, 6],
    info: (
      <>
        В «Кратких экономических примечаниях Софийского уезда» за 1784 год сообщается, что на реке
        Суйда имеется «мучная мельница о двух поставах, которая действие имеет весь год». Это
        значит, что в зимнее время мельница не простаивала, а работала за счет подводного течения.
        Абрам Ганнибал, будучи талантливым, Мельницу, как и другие постройки проектировал сам. Абрам
        Ганнибал построил за время службы не одно водоливное сооружение.
      </>
    ),
    img: [map38_1, map38_2],
    imgdesc: [],
    filter: 4,
  },
];



