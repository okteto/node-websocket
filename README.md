# Chat Application demo
This is an example of a websocket-based application developed in Kubernetes using Okteto Cloud, Okteto and NodeJS.

1. Install the [Okteto CLI](https://okteto.com/docs/getting-started/installation)

1. Connect your CLI to your [Okteto Cloud](https://cloud.okteto.com) account: 
      
        okteto login 

      (if you don't have an account, it will automatically be created for you).

1. Download the credentials: 

        okteto namespace

1. Launch your NodeJS development environment:

       okteto up --deploy

1. Install the required dependencies in your remote development evironment: 

       okteto> npm install

1. Start the application: 

       okteto> npm start

1. Go to Okteto Cloud, and click on your 
development environment's URL (it will something like https://chat-*YOUR_GITHUB_ID*.cloud.okteto.net).

1. Start chatting!

Okteto will automatically synchronize your local changes to your remote development environment, and `nodemon`will automatically detect then and reload the process. Try adding a background color to `views/index.js`, or add more logs to `server.js` to try it out.

Run `okteto down` when you are done to delete your remote development environment.

