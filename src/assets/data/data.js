 import van from '../Images/RentCamperVan1.png'
 import api from '../Images/BE_NcNews1.png'
 import news from '../Images/FE_NcNews3.png'
 import van2 from '../Images/RentCamperVan2.png'
 
 
 const projects = [
  {
    id: 1,
    title: "Rent a CamperVan",
    type: "Full Stack",
    category: "Mobile Application",
    img: van,
    TechStack: [
      "MongoDB",
      "Mongoose",
      "React Native",
      "Express",
      "Expo",
      "Android Studio",
    ],
  },
  {
    id: 2,
    title: "NC-news",
    type: "Front End",
    category: "Web Application",
    img: news,
    TechStack: ["React",'CSS3'],
  },
  {
    id: 3,
    title: "NC-news Api",
    type: "Back End",
    category: "Web Application",
  img:api,
    TechStack: ["Node.js", "Express.js", "Jest.js", "PostgresSQL"],
  },
  {
    id: 4,
    title: "random",
    type: "Full Stack",
    category: "Mobile Application",
    img: van2,
    TechStack: [
      "MongoDB",
      "Mongoose",
      "React Native",
      "Express",
      "Expo",
      "Android Studio",
    ],
  }
];

export default projects