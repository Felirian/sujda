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
    text: 'Старинное название бумаги, на которой хорошо видна сетка из поперечных и продольных полос',
    answers: ['верже', 'панта', 'панта'],
    right_answers: 2,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'Старинное название бумаги, на которой хорошо видна сетка из поперечных и продольных полос',
    answers: ['верже', 'панта', 'панта'],
    right_answers: 2,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'Старинное название бумаги, на которой хорошо видна сетка из поперечных и продольных полос',
    answers: ['верже', 'панта', 'панта'],
    right_answers: 2,
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
  },
  {
    name: 'Зал 2',
    route: 'second',
    bgImg: secondRoomBg,
    audio: secondRoomGuide,
    exhibits: [EXHIBITS_DATA[2], EXHIBITS_DATA[1], EXHIBITS_DATA[0]],
    quiz: QUIZ_DATA_1,
  },
  {
    name: 'Зал 3',
    route: 'third',
    bgImg: thirdRoomBg,
    audio: firstRoomGuide,
    exhibits: [EXHIBITS_DATA[1], EXHIBITS_DATA[2], EXHIBITS_DATA[0]],
    quiz: QUIZ_DATA_1,
  },
];

export const PERSONS = [
  {
    name: 'Абрам Петрович Ганнибал',
    info: 'Русский военный инженер, генерал-аншеф.',
    image: Person1,
    story:
      'В 1742 году императрица Елизавета Петровна пожаловала земли, входившие в состав Михайловской губы Воронецкого уезда Псковской провинции в «вечное» и потомственное владение А. П. Ганнибалу – крестнику и сподвижнику Петра I, прадеду (по материнской линии) А. С. Пушкина, увековечившего образ своего предка в романе (неоконченном) «Арап Петра Великого».',
  },
  {
    name: 'Сергей Львович Пушкин',
    info: 'Текст текст текст',
    image: Person2,
    story:
      'История номер 2 В 1742 году императрица Елизавета Петровна пожаловала земли, входившие в состав Михайловской губы Воронецкого уезда Псковской провинции в «вечное» и потомственное владение А. П. Ганнибалу – крестнику и сподвижнику Петра I, прадеду (по материнской линии) А. С. Пушкина, увековечившего образ своего предка в романе (неоконченном) «Арап Петра Великого».',
  },
  {
    name: 'Надежда Осиповна Пушкина',
    info: 'Текст текст текст',
    image: Person3,
    story:
      'История номер 3 В 1742 году императрица Елизавета Петровна пожаловала земли, входившие в состав Михайловской губы Воронецкого уезда Псковской провинции в «вечное» и потомственное владение А. П. Ганнибалу – крестнику и сподвижнику Петра I, прадеду (по материнской линии) А. С. Пушкина, увековечившего образ своего предка в романе (неоконченном) «Арап Петра Великого».',
  },
];
