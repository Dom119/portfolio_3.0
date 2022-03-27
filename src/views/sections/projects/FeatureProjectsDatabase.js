const featureProjects = [
  {
    title: "Idea Board",
    desc: "A full-stack application written on Nodejs and React. Users can create new accounts, can login into the app by choosing their preferred account. Users then can manage their ideas. Each idea is saved automatically, together with messages for each action, make a nice user experience.",
    linkWeb: "https://github.com/Dom119/idea-board",
    linkGit: "https://github.com/Dom119/idea-board",
    photo: require("../../../assets/img/javaScriptProjectPhotos/ideaBoard.png"),
    technologies: ["ReactJs", "NodeJs", "Express", "react-router-dom"],
  },
  {
    title: "Weather Forecast Application",
    desc: "A real-time forecast weather application using Open-Weather-Map API, one of the most popular API in this field. It also uses a postcode API to suggest suburb name based on entered postcode. Users can choose multiple suburbs to display. The application shows current weather as well as forecast for the next 7 days. ",
    linkWeb: "https://weather-app-dom-le.herokuapp.com/",
    linkGit: "https://github.com/Dom119/weather-app",
    photo: require("../../../assets/img/javaScriptProjectPhotos/weatherApp.png"),
    technologies: ["React", "OpenWeatherMap API"],
  },
  {
    title: "Todo App",
    desc: "A useful To Do Application which allows users to perform CRUD (create, update, delete) their tasks. The application connect with localStorage in user's web browser so users can access their previous notes anytime they open their browser.",
    linkWeb: "https://dom119.github.io/todo-app-dom-le/",
    linkGit: "https://github.com/Dom119/todo-app-dom-le",
    photo: require("../../../assets/img/javaScriptProjectPhotos/todo2.png"),
    technologies: [],
  },
  {
    title: "Calculator",
    desc: "This calculator contains all logic of Algebra rule. It can allow users to calculate 4 basic calculations, plus it can calculate minus number, percentage number and number between 0 and 1. The logic behind it is a real challenge because developer need to handle string input and convert it to designed result.",
    linkWeb: "https://dom119.github.io/calculator-dom-le/",
    linkGit: "https://github.com/Dom119/calculator-dom-le",
    photo: require("../../../assets/img/javaScriptProjectPhotos/calculator.png"),
    technologies: [],
  },
  {
    title: "Caro Game",
    desc: "This application stimulate the famous Caro Game. Its special feature is that all the step is memorized in its our history which allow users to return to any step before.",
    linkWeb: "https://dom119.github.io/React-Caro-Game/",
    linkGit: "https://github.com/Dom119/React-Caro-Game",
    photo: require("../../../assets/img/javaScriptProjectPhotos/caroGame.png"),
    technologies: ["React", "History implementation"],
  },
  {
    title: "GitHub Explorer",
    desc: "This application mimics the search functionality of Github.com, it uses GitHub API which allows users to find GitHub users based on name and and see their most recent work as well as other information.",
    linkWeb: "https://dom119.github.io/React-Github-Finder/",
    linkGit: "https://github.com/Dom119/React-Github-Finder",
    photo: require("../../../assets/img/javaScriptProjectPhotos/gitHubFinder.png"),
    technologies: ["GitHub API"],
  },
  {
    title: "My Real Estate",
    desc: "This application is still in production, it will be available soon...This application mimics the main functionalities of RealEstate.com.au, using Domain API",
    linkWeb: "https://my-real-estate-dom-le.herokuapp.com/",
    linkGit: "https://github.com/Dom119/my-real-estate-final-project-ga",
    photo: require("../../../assets/img/javaScriptProjectPhotos/myRealEstate.png"),
    technologies: [
      "TypeScript",
      "React",
      "react-router-dom",
      "Redux",
      "NodeJs",
      "Express",
      "Domain API",
      "Firebase Authentication",
      "Styled Component",
    ],
  },
];

export default featureProjects;
