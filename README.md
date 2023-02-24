# Almost Amazon
We are building an admin app that allows a store owner to login to the app and manage books and authors.

[User Restricted Deployed Sample](https://almost-amazon-webpack5.netlify.app/#)

<img width="1310" alt="aass" src="https://user-images.githubusercontent.com/29741570/199130815-08170a17-6c8f-4045-9703-79e94546b8cc.png">

We will be learning about the following:
- XHR requests
- Promises
- Firebase
- ERDs
- Postman
- CRUD

## Get Started
- Clone your repo
- Install app dependencies: `npm i`
- Start your server: `npm start`
  - The server starts the only error you should see is this one (which will be fixed after the Firebase Walkthrough is completed):
    ```js
    {
      code: "auth/invalid-api-key",
      message: "Your API key is invalid, please check you have copied it correctly.",
      a: null
    }
    ```
- Change `.sample.env` file name to `.env`


## TODO 1 - Get Setup
In preparation for next week, complete the following in lab:
- [Firebase Walkthrough Videos ~15 minutes](https://vimeo.com/showcase/codetracker-firebase)
  - Create a project called `Almost Amazon`
  - Add a Realtime Database
  - Create an app called `Almost Amazon`
  - Add Auth
  - Add the Keys to your `.env` file
  - Upload the sample data to Firebase
- Test the Firebase Setup
  - Start and stop your server
  - Go to the application it should look like this:
 
<img width="400" alt="Login Screen" src="https://user-images.githubusercontent.com/29741570/199130975-f6fb8884-ed5b-4d8b-9b7f-5a49b6f93975.png">

  - The API key error should also be gone
  - Clicking the button should open up a Google Popup. Select a user to sign in with.

    <img width="400" alt="Google Pop-Up" src="https://user-images.githubusercontent.com/29741570/199131213-6eb5c2cf-6353-4ec1-a543-312c61c7633d.png">

  - After signing in, there should be a Navbar
    - If your screen size is small, the Navbar might be collapsed like in the image below. Click on the hamburger button to open it.
 
<img width="400" alt="Logged In Screen" src="https://user-images.githubusercontent.com/29741570/199130976-2136b3dc-a7ca-46d6-a335-efc72fdf79e1.png">  
  - Click on the Log Out Button

 
 <img width="400" alt="Logout Button" src="https://user-images.githubusercontent.com/29741570/199130970-21e7de43-b6b4-4f01-aeec-961bccf64841.png">
  
  - This should bring back the Login Button

## TODO 2 - Look at the Code...
  - Take a look at the layout of the application. Start in `main.js` and follow the flow to get up to speed.
    - Look at the components, events, helpers, and views

## Technologies used
- Javascript
- Firebase Auth
- Firebase Realtime Database
- Bootstrap 5
- Webpack 5
