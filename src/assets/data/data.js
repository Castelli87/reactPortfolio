import van from "../Images/RentCamperVan1.png";
import api from "../Images/BE_NcNews1.png";
import news from "../Images/FE_NcNews3.png";
import van2 from "../Images/RentCamperVan2.png";

const projects = [
  {
    id: 1,
    title: "Rent a CamperVan",
    type: "Full Stack",
    category: "Mobile Application",
    desc: "Welcome to the Campervan App! This mobile application, built with MongoDB, React Native, Express, Node and Expo. Following Test Driven Development we used Jest and SuperTest. The app is designed to either find your perfect campervan for your trip or rent your campervan while your not using it.",

    img: van,
    live: "https://www.youtube.com/watch?v=EBsC1bUbI20",
    code: "https://github.com/779carney/camper-van-app",
    
    TechStack: [
      "MongoDB",
      "Mongoose",
      "ReactNative",
      "Express",
      "Expo",
      "AndroidStudio",
    ],
  },
  {
    id: 2,
    title: "NC-news",
    type: "Front End",
    category: "Web Application",
    img: news,
    live: "https://front-end-nc-news.netlify.app/",
    code: "https://github.com/Castelli87/nc-news",
    desc: "The NC-news Front-End project is an engaging news portal that seamlessly interacts with the NC-news API backend. Built using the React framework and styled with CSS, this user-centric application delivers an intuitive and visually appealing experience for news enthusiasts. The NC-news Front-End project combines the power of React and CSS to create an immersive news portal that seamlessly connects with the NC-news API. Offering a visually appealing, user-friendly, and responsive interface, this front-end solution complements the robustness of the backend, providing a complete and compelling news consumption platform.",
    TechStack: ["React", "CSS3"],
  },
  {
    id: 3,
    title: "NC-news Api",
    type: "Back End",
    category: "Web Application",
    img: api,
    live: "https://nc-news-iila.onrender.com/api",
    code: "https://github.com/Castelli87/be-nc-news",
    desc:'The NC-news API is a cutting-edge RESTful web service crafted with Node.js and Express.js, backed by PostgreSQL. It enables efficient Create, Read, Update, and Delete (CRUD) operations on a comprehensive collection of news articles, following a Test-Driven Development (TDD) approach using Jest.js. The NC-news API offers a solid foundation for crafting news-centric applications, delivering a seamless user experience with its secure, scalable, and developer-friendly architecture.',
    TechStack: ["Node.js", "Express.js", "Jest.js", "PostgresSQL"],
  },

];

export default projects;
