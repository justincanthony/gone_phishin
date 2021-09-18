# Gone Phishin
## [Link to Deployed Site]()
## [Link to Project Spec] ()

## Table Of Contents
+ [Overview](#overview)
+ [Examples](#examples)
+ [Setup instructions](#setup-instructions)
+ [Learning Goals](#learning-goals)
+ [Future features](#future-features)
+ [Technologies used](#technologies-used)
+ [Contributors](#contributors)
+ [Reflections & Wins](#reflections-and-wins)

## Overview
+   When our team had the chance to dive into some independent learning of new technologies and build something creative we chose. We focused on react's built in `context api` for state management and `functional programming principles` to build a UI that to allow Phish fans to find and play any live Phish audio stream.

  - Browse by year.
  - Browse by show.
  - See a list of all tracks broken down by set.
  - Click on any song to play that track.
  - Use the years drop down from the years display or tracks display to be taken to the the years page to select another show.
  - Do you know the year you'd like to search? Would you like to bookmark your favorite shows? Use our react router features to bookmark and modify urls to get the data you'd like to see.
  - Enter Party Mode and watch the page change in front of you to a more party friendly style. 🤪 🎉 🎛️

## Set-up Instructions
  + Fork this repo by clicking the ```Fork``` button in the upper right of this page
  + Clone your new repo down to your local machine in your chosen directory
  + Type ```npm install``` into the command line to install all dependencies
  + Type ```npm start``` into to the command line to start the React app. A browser window will appear running a local host url

## Learning Goals
+ Our team learned several new technologies in the course of a week including React's context API and React hooks.
  - We chose to use React's context API to manage our application state. which allowed us to pass data through the component tree without having to pass props down manually at every level.
  - As the application grows, context will help our application stay organized and keep our code easier to read and manage as we start to use and manipulate shared state values from multiple components.  
  - Currently our application takes advantage of a party mode context called ThemeContext which allows multiple components to listen for state held in our ThemeContext (and shared by numerous components) that can be toggled on and off to change component styling.
  - Take a look at our ThemeContext, our ShowCard and our YearCard to see how state (theme, isPartyMode) is shared between components.
  - ThemeContext allowed us to take advantage of styled components as well, which allows us to write actual CSS in our Javascript 
  @ Nina or is this just inline styling?
  - We also have a context that holds show data that is shared amongst our components, including our all shows and all tracks data. In the future as more functionality is added, more components will need access to this state.
+ We also used React Hooks in our application which allowed us to use state without relying on a class component. We were able to 'hook into' React state and lifecycle features and work with advanced hooks like useContext.
+ We are currently collaborating with Phish.in and hoping to merge our mobile version of the application so that Phish fans have a mobile friendly of the desktop application.

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

## Our Amazing Contributors in No Particular Order
  + [Justin Anthony](https://github.com/justincanthony)
     - Favorite Phish Song: 
  + [Nina Brissey (Author)](https://github.com/ninabrissey)
    - Favorite Phish Song: 
   + [Stephanie Magdic (Author)](https://github.com/stephaniemagdic) 
    - Favorite Phish Song: 'She would have chose a Metallica Repo. 🤪 '

## Future Features
+ We hope to add more search option functionality, including search by venues, and by song.
+ We would like to add a reducer as opposed to state and integrate that with our showContext.

### Wins and Challenges
+
+