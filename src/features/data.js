import firstRoomBg from '../assets/rooms/first/bg.jpg';
import secondRoomBg from '../assets/rooms/second/bg.jpg';

import gannibalPreview from '../assets/rooms/first/exhibits/gannibal.png';
import boxPreview from '../assets/rooms/first/exhibits/box.png';
import spoonPreview from '../assets/rooms/first/exhibits/spoon.png';

import firstRoomGuide from '../assets/rooms/first/guide.mp3';
import secondRoomGuide from '../assets/rooms/second/guide.mp3';

import Person1 from '../assets/rooms/secret/person3.png';
import Person2 from '../assets/rooms/secret/person2.png';
import Person3 from '../assets/rooms/secret/person3.png';

export const QUIZ_DATA_1 = [
  {
    text: 'Скульптурная композиция Летнего сада «Круговорот суток» включает в себя 4 скульптуры. «Полдень», «Закат», «Ночь» и четвертая, название которой отсылает нас к одной знаменитой достопримечательности Санкт-Петербурга. К какой именно? ',
    answers: ['Медный всадник ', 'Александровская колонна ', 'Крейсер «Аврора» ', 'Ростральные колонны '],
    right_answers: 2,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
  {
    text: 'Скульптурная композиция Летнего сада «Круговорот суток» включает в себя 4 скульптуры. «Полдень», «Закат», «Ночь» и четвертая, название которой отсылает нас к одной знаменитой достопримечательности Санкт-Петербурга. К какой именно? ',
    answers: ['Медный всадник ', 'Александровская колонна ', 'Крейсер «Аврора» ', 'Ростральные колонны '],
    right_answers: 2,
    explanation:
      'Четвертая скульптура называется «Аврора», посвященная древнеримской богине утренней зари. Соответственно, в круговороте суток она олицетворяет раннее утро.',
  },
];
const EXHIBITS_DATA = [
  { name: 'gannibal', img: gannibalPreview, threejs: false },
  { name: 'box', img: boxPreview, threejs: false },
  { name: 'spoon', img: spoonPreview, threejs: false },
];

export const ROOMS_DATA = [
  {
    name: 'Зал 1',
    route: 'first',
    bgImg: firstRoomBg,
    audio: firstRoomGuide,
    exhibits: [EXHIBITS_DATA[0], EXHIBITS_DATA[1], EXHIBITS_DATA[2]],
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
    bgImg: secondRoomBg,
    audio: firstRoomGuide,
    exhibits: [EXHIBITS_DATA[1], EXHIBITS_DATA[2], EXHIBITS_DATA[0]],
    quiz: QUIZ_DATA_1,
  },
];

export const PERSONS = [
  {
    name: 'чел челович1',
    info: 'gjgjgdjf dfkgdjgd',
    image: Person1
  },
  {
    name: 'чел челович2',
    info: 'gjgjgdjf dfkgdjgd',
    image: Person2
  },
  {
    name: 'чел челович3',
    info: 'gjgjgdjf dfkgdjgd',
    image: Person3
  },
]
