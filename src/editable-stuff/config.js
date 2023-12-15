// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "MR _",
  middleName: "Cillian",
  lastName: "Murphy",
  message: " The world continues to evolve with technology... ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/alexpiciko",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/cillianmurphyofficiall/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
    },

    {
      image: "fa-discord",
      url: "https://discord.com//",
    },

    {
      image: "fa-telegram",
      url: "https://telegram.org//",
    },
  ],
};


const about = {
  show: true,
  heading: "About Tommy",
  imageLink: require("../editable-stuff/tomy.jpg"),
  imageSize: 340,
  message:
    "Tommy Shelby is a fictional character and the protagonist of the British period crime drama Peaky Blinders. He is played by Irish actor Cillian Murphy, who has won an Irish Film & Television Award and National Television Award for his portrayal of Shelby.0 While some of the characters in Peaky Blinders are based on real historical figures, Tommy Shelby did not actually exist...",
  resume: "https://drive.google.com/file/d/1GNE8RFBpCaf1pNLTFDZ9rML7fts4oFXd/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "DineshGarusinghege",
  reposLength: 20,
  specificRepos: [],
};
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Photoshop", value: 40 },
    { name: "UI/UX ", value: 20 },
    { name: "HTML/CSS", value: 55 },
    { name: "Java", value: 45 },
    { name: "JavaScript", value: 76 },
    { name: "MERN Stack", value: 75 },
    { name: "MSSQL/MYSQL/NoSQL", value: 80 },
    { name: "WordPress", value: 80 },
  ],
  softSkills: [
    { name: "Logo designinig", value: 95 },
    { name: "poster designe", value: 75 },
    { name: "cover page", value: 75 },
    { name: "Visiting card", value: 85 },
    { name: "invitation card", value: 75 },
    { name: "thank you card", value: 90 },
    { name: "calender designe", value: 70 },
    { name: "pensil art", value: 90 },
  ],
};


// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",

};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a web developer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "emailisnotfound@gmail.com",
};


export { navBar, mainBody, about, repos, skills, contact, getInTouch };
