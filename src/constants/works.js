// import indovina from "../images/works/indovina.gif";
// import gameLab from "../images/works/gameLab.gif";
// import mudima from "../images/works/mudima.gif";
// import g1 from "../images/works/game1.png";
// import g2 from "../images/works/game2.png";
// import g3 from "../images/works/game3.png";

import site from "../images/works/site.png";
import showiz from "../images/works/showiz.png";
// import tea from "../images/works/tea.png";
import mvcc from "../images/works/mvcc.png";
import seek from "../images/works/Animal-Detection-Apps.png";
import spotify from "../images/works/spotify.png";
// import ecommerce from "../images/works/ecommerce.png";

import blackhorse from "../images/works/BlackHorse.jpg";
import caffedellearti from "../images/works/CaffeDelleArti.png";
import sam from "../images/works/Sam.png";
import lehibou from "../images/works/LeHibou.jpg";
import magnus from "../images/works/Magnus.png";
import friday from "../images/works/Friday.png";
import marvanza from "../images/works/Marvanza.png";

import choice from "../images/works/Choiches.png";
import leaf from "../images/works/Leaf.png";
import hands from "../images/works/Handshake.png";
import manMiddle from "../images/works/ManMiddle.png";
import manNowhere from "../images/works/ManNowhere.png";
import touch from "../images/works/Touch.png";
import fit from "../images/works/Fit.png";

const web = [
  {
    title: "Personal website",
    image: site,
    description: "My portfolio website",
    stack: "React.js, Tailwind CSS, Vite",
    duration: 0.13,
    link: "https://github.com/VarshithPabb1setty/Portfolio",
  },
  {
    title: "Showiz",
    image: showiz,
    description: "Showiz - A movie booking website",
    stack: "Node.Js, React.Js, MongoDB, AWS, Mantine",
    duration: 0.12,
    link: "https://github.com/gopinathsjsu/team-project-wizard",
  },
  {
    title: "Distributed Systems",
    image: mvcc,
    description: "Custom MVCC Implementation",
    stack: "Python, ZMQ, Pickle, Fast API, Hashlib",
    duration: 0.1,
    link: "https://github.com/KrishnaVPabbisetty/CMPE-273---Implementation-of-MVCC-using-Pickle/",
  },
  {
    title: "Advanced Mobile App Testing",
    image: seek,
    description: "Automation Testing on 'Seek by iNaturalist' App",
    stack: "Maven, Selenium, TestNG, Appium",
    duration: 0.1,
    link: "https://github.com/KrishnaVPabbisetty/seek-automation-test-script/",
  },
  {
    title: "Spotify Hit Song Prediction Analysis",
    image: spotify,
    description: "Predicting song success using ML",
    stack: "Pandas, Numpy, Matplotlib, Seaborn",
    duration: 0.14,
  },
];

// const multimedia = [
//   {
//     title: "Spotify Hit Song Prediction Analysis",
//     image: ,
//     description: "",
//     stack: "Pandas, Numpy, Matplotlib, Seaborn"
//     duration: 0.14,
//   }
// ];

// const itchGames = [
//   {
//     title: "Can I sleep now?",
//     image: g1,
//     description:
//       "A skill-based game in which you must dodge intrusive thoughts ",
//     stack: "Unity, C#",
//     duration: 0.17,
//     link: "https://lafayenbros.itch.io/can-i-sleep-now",
//   },
//   {
//     title: "Shaaade!",
//     image: g2,
//     description:
//       "A skill-based game in which you must choose from 4 shades of color, the lightest one",
//     stack: "Unity, C#",
//     duration: 0.18,
//     link: "https://lafayenbros.itch.io/shaaade",
//   },
//   {
//     title: "Generatore di scuse",
//     image: g3,
//     description: "A cute excuse simulator for not going out with friends",
//     stack: "Unity, C#",
//     duration: 0.19,
//     link: "https://lafayenbros.itch.io/generatore-di-scuse-per-non-uscire-con-gli-amici-la-sera",
//   },
// ];

const design = [
  {
    title: "Logo designs",
    image: [blackhorse, caffedellearti, sam, lehibou, magnus, marvanza, friday],
    description: "Some logos made for bands, associations and businesses",
    stack: "Photoshop, Illustrator",
    duration: 0.2,
  },
  {
    title: "Compositing",
    image: [hands, fit, leaf, choice, manMiddle, manNowhere, touch],
    description: "Some compositing work",
    stack: "Photoshop, Illustrator",
    duration: 0.21,
  },
];

export default {
  // multimedia,
  // itchGames,
  web,
  design,
};
