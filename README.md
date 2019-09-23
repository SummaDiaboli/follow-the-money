# Follow The Money Website

* [Installation](#installation)

* [Technology Used](#technology-used)

* [Project Folder Structure](#project-folder-structure)

* [Working Routes](#working-routes)

* [API Routes](#api-routes)

* [Testing](#testing)


## Installation

* Clone the repository and then run
```
npm install
```

* Make sure you have PostgreSQL installed on the device and set up using the SQL schema in the project root.

## Technology Used
- **Next.js**: This is the main technology the web app is built around. Next.js is a Server Side Rendering solution for         React. The Next.js API Routes are used to handle API related activities in the project. More information can be found on    [their website](https://nextjs.org/).
- **React**: The project is built using the javascript React library. There is an abundant use of functional components and       React Hooks in the project. More information can be found on [their website](https://reactjs.org/).
- **PostgreSQL**: The database used in the project is PostgreSQL because the features require a relational database and Postgre   is a tried and tested database. More information can be found on [their website](https://www.postgresql.org)
- **Bootstrap**: Components in the project are styled using [Bootstrap](https://getbootstrap.com/).
- **Node.js**: [Node.js](https://nodejs.org/en/) and to be more specific the [Express framework](https://expressjs.com) is      used in the server folder to create a node server that was used for testing the API.

## Project Folder Structure

- [Components](#components)
- [Database](#database)
- [Pages](#pages)
- [Server](#server)
- [Static](#static)
- [Next Configuration](#next-config)

### Components

- **Analytics**: Contains components dealing with the analytics route


## Working Routes

The pages are rendered but contain static data since they are still incomplete.

- */*: The index route and it defaults to feed if user is authenticated.
- */analytics*: Routes to analytics data page.
- */feed*: Routes to the user feed page. Is the default page if authenticated in.
- */friends*: Routes to friends page.
- */friend*: Routes to specific friend page.
- */login*: Routes to the login page. Contains the login and sign up forms for authenticating and registering the user.
- */playlists*: Routes to playlist page.
- */messages*: Routes to messages page.
- */user-analytics*: Routes to user analytics page.

## API Routes

API Routes are a certain way to structure folder and files in the pages folder in such a way that can api call to the same routes trigger an API. More about this can be found on the [Next.js website](https://nextjs.org/docs/#api-routes).

- *api/users*: Contains functions for fetching and creating users from the database.
- *api/users/[id]*: Contains functions dealing with specific users based on their id.

## Testing

The API, under the server folder in tests, are tested using Express.js, Jest, Supertest and PostgreSQL, with the functions under the routes folder. Below are the API that have been tested:

- users
- posts
- podcasts
- notifications
- messages
- friend-requests

At the point of writing this documentation all tests are passing all **25 tests** are passing.
