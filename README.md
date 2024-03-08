# Expression Evaluate Frontend Application

## Table of Contents

- [Project Layout](#project-layout)
- [Setting up the expressionfront project](#setting-up-the-expressionfront-project)
- [Setting up the expressionfront project with Docker](#setting-up-the-expressionfront-project-with-docker)
  - [Install Docker](#install-docker)
  - [Build and Run the Container](#build-and-run-the-container)
  - [Cleaning up the Container and Image](#cleaning-up-the-container-and-image)
- [Setting up the expressionfront project manually](#setting-up-the-expressionfront-project-manually)

---

## Project Layout
  
  Here is the my project layout and Architecture:
  
  ```
  expressionfront
   |__ public/
   |__ src/
      |__ api/
      |__ constants/
      |__ utils/
      |__ views/
      |__ App.js/
      |__ App.css/
      |__ index.js/
   |__ package.json
   |__ Dockerfile
   |__ docker-compose.yml
  ```
  
  ## Setting up the `expressionfront` project
  
  Start by cloning the project with the command:
  ```
  $ git clone https://github.com/vinod-patidar/expressionfront.git
  ```
  
  ## Setting up the `expressionfront` project with Docker

  For those that are not interested in setting up the project manually or would simply not have to worry about downloading node.js and its dependencies, there is a Dockerfile and docker-compose.yml file to help create a container with everything you would need to run the **expressionfront** application.

  ### Install Docker

  To make this as easy as possible, we will be using *Docker Compose* to create our container.

  - If you do not have Docker yet, start by downloading it if you are on a Mac or Windows:
  https://www.docker.com/products/docker-desktop

  - Or if you are on a Linux Distribution follow the directions here:
  https://docs.docker.com/compose/install/

  - To confirm you have Docker Compose, open up your terminal and run the command below:

  ```
  $ docker-compose --version
  docker-compose version 1.29.2, build 5becea4c
  ```
  
  ### Build and Run the Container
  - Go into the project root directory to build and run the container with:

  ```
  $ cd expressionfront/
  $ docker-compose up --build
  ```

  **This may take a few moments**
  
  Navigate to http://localhost:3000 to view the site on the local server.
  
  ### Cleaning up the Container and Image

  - To stop the container from running, use `<Ctrl-C>` twice.
  - To close down the container use the command:

  ```
  $ docker-compose down
  ```
  - Then to clean up the container and image which we are no longer using use the command:

  ```
  $ docker system prune -fa
  ```

  - Confirm that the container and image is no longer there with:

  ```
  $ docker system df -v
  ```
  
  ## Setting up the `expressionfront` project manually
  
  - If you either did not want to use Docker or was curious to setup the expressionfront application manually follow the directions below.
  
  - Start by installing the dependencies for React application:
  ```
  $ cd expressionfront/
  $ npm install
  ```
  
  Let's first check to see what our React frontend looks like.
  - To run the React server use the below command and run in terminal from root directory:
  ```
  $ npm start
  ```
  - Now, go to http://localhost:3000 in your browser.

  Create a Build for the production run below command in terminal from root directory.
  ```
  $ npm run build
  ```
  - App is ready to be deployed! check the `build` folder on the root.

  - That's it :)

  
