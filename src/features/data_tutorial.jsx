import mapImg from "../assets/tutorial/map.png";
import bgImg from "../assets/tutorial/bgMap.jpg";
import hallImg from "../assets/tutorial/hall.png";
import quizImg from "../assets/tutorial/quiz.png";

export const TUTORIAL_DATA = [
  {
    name: 'Карта',
    img: mapImg,
    backgroundColor: '#333E2C',
    backgroundImg: bgImg,
    text: 'Исследуйте территорию дворянской усадьбы при помощи удобной интерактивной карты. Здесь вы сможете прослушать аудио и познакомиться со всеми объектами.'
  },
  {
    name: 'Залы',
    img: hallImg,
    backgroundColor: '#F5D9AD',
    backgroundImg: false,
    text: 'Посетите три выставочных зала и «секретную комнату». Узнайте больше о представителях рода Ганнибалов. В экспозиции доступно прослушивание аудио и представлены интерактивные 3D-экспонаты.'
  },
  {
    name: 'Викторины',
    img: quizImg,
    backgroundColor: '#333E2C',
    backgroundImg: bgImg,
    text: 'Проверяйте свои знания в викторинах и получайте секретные слова за правильные ответы. Назовите все слова музейному сотруднику и получите награду.'
  },
];
