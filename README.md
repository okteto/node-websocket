# Chat Application demo
This is an example of a websocket-based NodeJS application developed in an Okteto Cloud development environment.

1. Install the [Okteto CLI](https://okteto.com/docs/getting-started/installation)

1. Connect your CLI to your [Okteto Cloud](https://cloud.okteto.com) account: 
      
        okteto login 

      > If this is the first time you use Okteto Cloud, a free account will be automatically created for you).

1. Download the credentials: 

        okteto namespace

1. Launch your NodeJS development environment:

       okteto up --deploy

   > `okteto up` will deploy your development environment in Okteto Cloud and drop you on a remote shell. Any command that you  execute here will be executed in your remote development environment.

1. Install the required dependencies in your remote development environment: 

       okteto> npm install

1. Start the application in your remote development environment: 

       okteto> npm start

1. Go to [Okteto Cloud](https://cloud.okteto.com) and click on your 
development environment's URL (it will something like https://chat-*YOUR_GITHUB_ID*.cloud.okteto.net).

1. Start chatting!

Okteto will automatically synchronize your local changes to your remote development environment and `nodemon`will automatically detect then and reload the process. Open this project in your local IDE and try adding a background color to `views/index.js`, or add more logs to `server.js` and reload the page to see your changes instantly.

# Cleanup

Run `okteto down` when you are done to delete your remote development environment. You can use `okteto down -v` if you also want to delete the synchronization volume.

