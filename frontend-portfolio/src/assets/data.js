

const projectList =[
    { name :"Bulk mailer Application",
      description:"A Bulk Mailer Application built using the MERN stack that allows users to upload email lists and send bulk emails efficiently using sendmailer.",
      gitLink:"https://github.com/swethasagadevan/bulkmailer-MERN.git",
      liveLink:"https://bulkmailer-mern-frontend.vercel.app/"
    },
    {name:"Netflix clone Website",
    description:"A simple full-stack Netflix-style login page built using React for the frontend and Node.js + Express for the backend. This project demonstrates authentication flow UI, API integration, form validation, and clean component structure.",
    gitLink:"https://github.com/swethasagadevan/netflix-login.git",
    liveLink:"netflix-login-lemon.vercel.app"
    },
    {name:"Apple clone Website",
    description:"A fully responsive Apple website clone built using React.js, inspired by the official Apple website.This project replicates Apple's clean design, animations, and product showcase layout while practicing modern front-end development skills.",
    gitLink:"https://github.com/swethasagadevan/apple-clone-website.git",
    liveLink:"https://apple-clone-website-zeta.vercel.app/"
    },
    {name:"Movie App",
    description:"A responsive movie browsing application built with React and Tailwind CSS. The app fetches movie data from an external API, supports pagination, and allows users to add movies to their WatchList.",
    gitLink:"https://github.com/swethasagadevan/movie-app.git",
    liveLink:"movie-app-six-opal.vercel.app"
    }
  ]

  export function getProjectList(){
    return projectList
  }