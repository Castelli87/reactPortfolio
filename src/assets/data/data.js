import van from "../Images/RentCamperVan1.png";
import api from "../Images/BE_NcNews1.png";
import news from "../Images/FE_NcNews3.png";
import artMoment from "../Images/ArtMoment.png";
import recipes from "../Images/recipesBook.png"

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
    live: "https://beautiful-profiterole-ff85b4.netlify.app",
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
    desc: "The NC-news API is a cutting-edge RESTful web service crafted with Node.js and Express.js, backed by PostgreSQL. It enables efficient Create, Read, Update, and Delete (CRUD) operations on a comprehensive collection of news articles, following a Test-Driven Development (TDD) approach using Jest.js. The NC-news API offers a solid foundation for crafting news-centric applications, delivering a seamless user experience with its secure, scalable, and developer-friendly architecture.",
    TechStack: ["Node.js", "Express.js", "Jest.js", "PostgresSQL"],
  },
  {
    id: 4,
    title: "ArtMoment",
    type: "Front End",
    category: "Landing Page",
    img: artMoment,
    live: "https://castelli87.github.io/ArtMomentproject/#home",
    code: "https://github.com/Castelli87/ArtMomentproject",
    desc: " the ArtMoment Landing Page project. In this endeavor, aimed to capture the essence of creativity, design, and user engagement by crafting a captivating digital space for an imaginary event called ArtMoment.",
    TechStack: ["Bootstrap_5", "HTML"],
  },
  {
    id: 5,
    title: "Recipes Book",
    type: "Full Stack",
    category: "Web Application",
    img: recipes,
    live: "#",
    code: "https://github.com/Castelli87/recipes-onlinee-php",
    desc:"WORK IN PROGRESS, check the code on the git-hub repo ",
    /* desc: "Embark on a flavorful adventure through the digital pages of my Culinary Journey Recipe Book – a web project meticulously crafted using PHP, Bootstrap-5, and MySQL. This endeavor serves as a testament to my dedication to mastering PHP and its applications, offering a dynamic platform to consolidate my learning journey.More info into the README.md that you can found on my Git Hub", */
    TechStack: ["PHP","Bootstrap_5","MySQL"],
  },
];

export default projects;
