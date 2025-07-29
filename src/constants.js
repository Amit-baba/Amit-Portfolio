// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/GEHU_Logo.webp';
import bsaLogo from './assets/education_logo/kumaun-log0.png';
import vpsLogo from './assets/education_logo/Uk-logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/vs.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Node JS', logo: nodejsLogo },
      
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
    
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Graphic Era Hill University, Haldwani",
      date: "Aug 2023 - Aug 2025",
      grade: "7.61 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Graphic Era Hill University,Haldwani.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Kumaun University,Nainital",
      date: "Aug 2020 - Aug 2023",
      grade: "64.2%",
      desc: "I completed my Bachelor's degree in  Science (B.Sc.) from Kumaun University, Nainital.",
      degree: "Bsc(Physics,Chemistry,Mathematics)"

    },
    {
      id: 2,
      img: vpsLogo,
      school: "Uttarakhand Board of Education",
      date: "Apr 2017 - March 2019",
      grade: "78.2%",
      desc: "I completed my class 12 education from Uttarakhand Board of Education.",
      degree: "UBSE(XII) - PCM Group",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Uttarakhand Board of Education",
      date: "Apr 2016 - March 2017",
      grade: "81.2%",
      desc: "I completed my class 10 education from Uttarakhand Board Of Education.",
      degree: "uBSE(X), PCM Group",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Visitor Management System",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information.",
      image: githubdetLogo,
      tags: ["Tailwind CSS", "Next JS",],
      webapp: "#",
    },
   
    
    {
      id: 1,
      title: "My Portfolio",
      description:
        "An efficient and customizable NPM package for Personal Portfolio. Built using React.js,",
      tags: ["React JS", "Javascript", "NPM",],
      webapp: "#",
    },    
  ];  