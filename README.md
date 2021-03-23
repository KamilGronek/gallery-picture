# Introduction

The application is a simple gallery picture based on the REST API Unsplash,
with request using the get method.

The purpose of the application is to be able to redirect results from MainPage to ResultPage by input.

The main role of the application is functionality. Built on the simple, tidy looking interface.

## Live preview

[Link to application]

"https://kamilgronek.github.io/Hand2Band/"

## Technologies

-React 17.0.1,
-Node:v12.16.1,
-Bootstrap: 4.6.0

## Construction:

The application has been divided into several components to separate the functional part and visual part.
Functional part as a AutoComplete contains input functionality.

MainPage and ResultPage are a collection of various functions needed by the code to run.

For better readability of the code, I split the ResultPage into two other components - ModalSide and ShowGallery.

## Autocomplete:

Due to the fact that the documentation does not offer autocomplete search
as it is described in the text of the task, I found it best
will use the endpoint used by Unsplash on the site
`https://unsplash.com/nautocomplete/${endpoint}`, but there was a problem with the CORS, so
I decided to make my server side application that would
was publishing one endpoint and was asking that endpoint
with which there was a problem.
I threw it all in
on Heroku - a cloud platform that provides free hosting.

View to server application based on express.js : https://github.com/KamilGronek/autocomplete-server

File Server.js contains all back-end code

## Run applications by create-react-app:

After downloading file to install node.modules environment, in terminal write the command:

```bash
npm install
```

To run the application, in terminal in the main path of the project first write the command:

```bash
cd client
```

and next

```bash
npm start
```
