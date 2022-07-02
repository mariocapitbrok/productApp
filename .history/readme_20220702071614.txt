Deployed on Heroku
https://safe-scrubland-81747.herokuapp.com/

Heroku branch
https://git.heroku.com/safe-scrubland-81747.git

Installation:
1) Clone or unzip the project on your prefered folder
2) Change to frontend directory and run: npm install
3) After succesfully installing all dependencies go back to your root folder
4) Change to the backend directory and run: npm install
5) After installing all dependencies create a .env file on backend root folder
6) Copy this into your .env file:
PORT=<your port number>
MONGODB_URI=mongodb+srv://<your username>:<your password>@cluster0.18ikmbc.mongodb.net/<your mongodb database>?retryWrites=true&w=majority
TEST_MONGODB_URI=mongodb+srv://<your username>:<your password>@cluster0.18ikmbc.mongodb.net/<your mongodb test database>?retryWrites=true&w=majority
7) Create the same "Config Vars" at Heroky Host.
8) From the backendfolder use the next commands:
    run start: To start your backend application. This application has the build version of the frontend so it can run on your desired PORT at: http://localhost:<your port number>
    run dev: To start your backend application with Node Monitor (nodemon) 
    run build:ui: To build the frontend static version for production. 
    run deploy: To push your changes into Heroku Host.
    run deploy:full: To build the frontend for production and deploy to Heroku.
    run logs:prod: To log the Heroku logs.

