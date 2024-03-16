import Html5 from "../images/icons/html5.svg";
import Css from "../images/icons/css.svg";
import Js from "../images/icons/js.svg";
import TailwindCSS from "../images/icons/tailwind.svg";
import Bootstrap from "../images/icons/bootstrap.svg";
import NodeJs from "../images/icons/nodejs.svg";
import ReactJs from "../images/icons/react.svg";
import MongoDB from "../images/icons/mongodb.svg";
import Npm from "../images/icons/npm.svg";
import Jquery from "../images/icons/jquery.svg";
import Git from "../images/icons/git.svg";
import GitHub from "../images/icons/github.svg";
// import Csharp from "../images/icons/csharp.svg";
// import Unity from "../images/icons/unity.svg";
// import Photshop from "../images/icons/photoshop.svg";
// import Illustrator from "../images/icons/illustrator.svg";
// import AfterEffects from "../images/icons/aftereffects.svg";
// import PremierePro from "../images/icons/premiere.svg";
import VisualStudioCode from "../images/icons/vscode.svg";
import Vite from "../images/icons/vite.svg";
import Kafka from "../images/icons/kafka.svg";
import PostgreSQL from "../images/icons/postgresql.svg";
import Python from "../images/icons/python.svg";
import MySQL from "../images/icons/mysql.svg";
import Parcel from "../images/icons/parcel.svg";
import SonarQube from "../images/icons/sonarqube.svg";
import Swagger from "../images/icons/swagger.svg";
import Kubernetes from "../images/icons/kubernetes.svg";
import Java from "../images/icons/java.svg";
import Grafana from "../images/icons/grafana.svg";
import Firebase from "../images/icons/firebase.svg";
import Express from "../images/icons/express.svg";
import CUDA from "../images/icons/cuda.svg";
import Mocha from "../images/icons/mocha.svg";
import Chai from "../images/icons/chai.svg";
import Azure from "../images/icons/azure.svg";
import AWS from "../images/icons/aws.svg";
import REDIS from "../images/icons/redis.svg";
import MaterialUI from "../images/icons/material-ui.png";
import RESTAPI from "../images/icons/restapi.png";

const skills = [
  { name: "HTML", icon: Html5, shadow: "shadow-orange-600/50", duration: 0.1 },
  { name: "CSS", icon: Css, shadow: "shadow-sky-700/50", duration: 0.12 },
  { name: "JS", icon: Js, shadow: "shadow-yellow-600/50", duration: 0.13 },
  {
    name: "JQUERY",
    icon: Jquery,
    shadow: "shadow-blue-600/50",
    duration: 0.14,
  },
  {
    name: "TAILWINDCSS",
    icon: TailwindCSS,
    shadow: "shadow-teal-600/50",
    duration: 0.15,
  },
  {
    name: "BOOTSTRAP",
    icon: Bootstrap,
    shadow: "shadow-violet-600/50",
    duration: 0.16,
  },
  {
    name: "REACTJS",
    icon: ReactJs,
    shadow: "shadow-cyan-600/50",
    duration: 0.17,
  },
  {
    name: "NODEJS",
    icon: NodeJs,
    shadow: "shadow-green-600/50",
    duration: 0.18,
  },
  {
    name: "MONGODB",
    icon: MongoDB,
    shadow: "shadow-lime-600/50",
    duration: 0.19,
  },
  { name: "NPM", icon: Npm, shadow: "shadow-red-600/50", duration: 0.2 },
  { name: "VITE", icon: Vite, shadow: "shadow-violet-600/50", duration: 0.21 },
  {
    name: "VSCODE",
    icon: VisualStudioCode,
    shadow: "shadow-cyan-600/50",
    duration: 0.22,
  },
  { name: "GIT", icon: Git, shadow: "shadow-red-600/50", duration: 0.23 },
  {
    name: "GITHUB",
    icon: GitHub,
    shadow: "shadow-black-600/50",
    duration: 0.24,
  },
  { name: "KAFKA", icon: Kafka, shadow: "shadow-black-600/50", duration: 0.25 },
  {
    name: "POSTGRESQL",
    icon: PostgreSQL,
    shadow: "shadow-blue-600/50",
    duration: 0.26,
  },
  {
    name: "PYTHON",
    icon: Python,
    shadow: "shadow-yellow-600/50",
    duration: 0.27,
  },
  { name: "MYSQL", icon: MySQL, shadow: "shadow-black-600/50", duration: 0.28 },
  { name: "PARCEL", icon: Parcel, shadow: "shadow-red-600/50", duration: 0.29 },
  {
    name: "SONARQUBE",
    icon: SonarQube,
    shadow: "shadow-blue-600/50",
    duration: 0.3,
  },
  {
    name: "SWAGGER",
    icon: Swagger,
    shadow: "shadow-green-600/50",
    duration: 0.31,
  },
  {
    name: "KUBERNETES",
    icon: Kubernetes,
    shadow: "shadow-blue-600/50",
    duration: 0.32,
  },
  {
    name: "GRAFANA",
    icon: Grafana,
    shadow: "shadow-orange-600/50",
    duration: 0.33,
  },
  {
    name: "FIREBASE",
    icon: Firebase,
    shadow: "shadow-yellow-600/50",
    duration: 0.34,
  },
  {
    name: "EXPRESS",
    icon: Express,
    shadow: "shadow-blue-600/50",
    duration: 0.35,
  },
  { name: "Java", icon: Java, shadow: "shadow-blue-600/50", duration: 0.36 },
  { name: "CUDA", icon: CUDA, shadow: "shadow-green-600/50", duration: 0.37 },
  { name: "MOCHA", icon: Mocha, shadow: "shadow-brown-600/50", duration: 0.38 },
  { name: "CHAI", icon: Chai, shadow: "shadow-red-600/50", duration: 0.39 },
  { name: "AZURE", icon: Azure, shadow: "shadow-blue-600/50", duration: 0.4 },
  { name: "AWS", icon: AWS, shadow: "shadow-orange-600/50", duration: 0.41 },
  {
    name: "RESTAPI",
    icon: RESTAPI,
    shadow: "shadow-black-600/50",
    duration: 0.42,
  },
  {
    name: "MaterialUI",
    icon: MaterialUI,
    shadow: "shadow-blue-600/50",
    duration: 0.43,
  },
  { name: "REDIS", icon: REDIS, shadow: "shadow-red-600/50", duration: 0.44 },
  //   { name: "KAFKA", icon: Kafka, shadow: "shadow-black/50", duration: 0.45 },
  //   { name: "KAFKA", icon: Kafka, shadow: "shadow-black/50", duration: 0.46 },

  // { name: "C#", icon: Csharp, shadow: "shadow-purple-600/50", duration: 0.25},
  // { name: "UNITY", icon: Unity, shadow: "shadow-slate-600/50", duration: 0.26},
  // { name: "PHOTOSHOP", icon: Photshop, shadow: "shadow-sky-600/50", duration: 0.27},
  // { name: "ILLUSTRATOR", icon: Illustrator, shadow: "shadow-orange-600/50", duration: 0.28},
  // { name: "PREMIERE PRO", icon: PremierePro, shadow: "shadow-fuchsia-600/50", duration: 0.29},
  // { name: "AFTER EFFECTS", icon: AfterEffects, shadow: "shadow-indigo-600/50", duration: 0.3}
];

export default skills;
