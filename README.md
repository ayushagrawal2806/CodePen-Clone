# CodePen Clone

A CodePen clone built with React, Firebase Authentication, Firestore, and Vite.

## Overview

This project is a simplified version of CodePen, allowing users to write HTML, CSS, and JavaScript code snippets and see the live preview in real-time. It's built using React, Vite, Firebase Authentication for user authentication, and Firestore to store user data.

## Features

- Write HTML, CSS, and JavaScript code in separate editors.
- See live preview of the code in real-time.
- Save and access code snippets with user authentication.
- User authentication using Firebase Authentication.
- Store user data and code snippets in Firestore.

## Demo

You can view a live demo of the project [here](https://code-pen-clone-five.vercel.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/ayushagrawal2806/codepen-clone.git
```
2. Navigate into the project directory:
   
```bash
cd codepen-clone
```
3. Install dependencies:

```bash
npm install
```
## Setting up Firebase with Vite

To use Firebase services in your Vite project, follow these steps:

1. Create a Firebase project:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the instructions to create a new project.

2. Add Firebase to your web app:
   - In the Firebase console, select your project.
   - Click on the web icon (`</>`) to add Firebase to your web app.
   - Copy the Firebase configuration object provided.

3. Configure your project:
   - Create a `.env` file in the root directory of your project.
   - Add your Firebase configuration to the `.env` file. Example:

     ```
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

4. Install Firebase SDK:
   - Install the Firebase SDK packages using npm or yarn:

     ```bash
     npm install firebase
     ```

     ```bash
     yarn add firebase
     ```

5. Initialize Firebase in your Vite project:
   - Create a `firebase.js` file in the `src` directory of your project.
   - Add the following code to initialize Firebase with the configuration from your `.env` file:

     ```javascript
     import { initializeApp } from 'firebase/app';

     const firebaseConfig = {
       apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
       authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
       projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
       storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
       messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
       appId: import.meta.env.VITE_FIREBASE_APP_ID
     };

     // Initialize Firebase
     const app = initializeApp(firebaseConfig);

     export default app;
     ```

6. Start using Firebase services:
   - You can now use Firebase Authentication, Firestore, and other Firebase services in your Vite project. Import the initialized Firebase app (`firebase.js`) into your components or modules and start using Firebase services. Refer to the [Firebase documentation](https://firebase.google.com/docs) for more information on how to use these services.

## Usage

This section provides information on how to use the CodePen clone once it's set up and running.

### Writing Code

- Open the CodePen clone in your web browser.
- You'll see separate editors for HTML, CSS, and JavaScript on the left side of the screen.
- Write your HTML code in the HTML editor, CSS code in the CSS editor, and JavaScript code in the JavaScript editor.
- The live preview on the bottom side of the screen will update automatically as you type, showing you the result of your code.

### Saving Code Snippets

- To save your code snippet, click on the "Save" button.
- This will save your code snippet to your account.
- You can access your saved code snippets at any time by logging in to your account.

### User Authentication

- User authentication is handled through Firebase Authentication.
- You can sign up for an account or log in using an existing account.
- Once logged in, you'll have access to additional features such as saving code snippets and accessing your saved code snippets.

### Accessing Saved Code Snippets

- If you've saved a code snippet previously, you can access it by logging in to your account.
- Your saved code snippets will be displayed in a list, and you can click on any snippet to load it into the editors.

### Firestore Integration

- User data and saved code snippets are stored in Firestore.
- Firestore is used to store and retrieve user-specific data, such as saved code snippets and authentication information.

### Additional Features

- Experiment with the CodePen clone to explore additional features and functionalities.
- Feel free to customize and extend the project to suit your needs.





   


