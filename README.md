# Follow The Money Website

* [Installation](#installation)

* [Technology Stack](#technology-stack)

* [Project Folder Structure](#project-folder-structure)

* [Working Page Routes](#working-page-routes)

* [API Routes](#api-routes)

* [Testing](#testing)

* [Plans For The Future](#plans-for-the-future)


## Installation

* Clone the repository and then run `npm install`.
* Make sure you have PostgreSQL installed on the device and set up using the SQL schema in the project root.
* Run `npm run dev` in the command line to start the local server.
* Enjoy!

## Technology Stack
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
- [PostgreSQL Schema](#postgresql-schema)

### Components

- **Analytics/**: Contains components dealing with the analytics route.
- **Authentication/**: Contains the component that checks if the user is authenticated then proceeds to navigate to the login page or index page depending on that.
- **Communities/**: *In Progress*.
- **Feed/**: Contains components for the Feed page. This includes posts, friend requests, and radio controls in the sidebar.
- **Friend/**: Contains components related to the page for a specific friend.
- **Friends/**: Contains components related to the friends page, which contains all the user's friends.
- **Login/**: Contains components related to login and sign-up.
- **Messages/**: Contains components for the messages page.
- **Player/**: Contains components for the audio player component at the bottom of the page.
- **Playlists/**: Contains components for the playlist page.
- **Searchbar/**: Contains components for the searchbar.
- **Sidebar/**: Contains components for the persistent sidebar on the left of the page.
- **User/**: Contains components for the user and notification icons.

### Database

`queries.js` contains the configurations for the PostgreSQL database.

### Pages

Because the project is using Next.js, the page routes are put in the pages folder and are automatically added to routing. The folder contains:

- *api/*: This folder and its subfolders contain the Next.js API Routes.
- *_app.js*: This is a custom \_app.js file because of the need to include the persistent sidebar and audio player.
- *analytics.js*: The analytics page route.
- *communities.js*: The communities page route.
- *events.js*: The events page route.
- *feed.js*: The feed page route.
- *friend.js*: The specific friend page route.
- *friends.js*: The friends page route.
- *index.js*: The initial page route, defaults to feed.
- *login.js*: The login page route.
- *messages.js*: The messages page route.
- *playlists.js*: The playlists page route.
- *podcasts.js*: The podcasts page route.
- *radio.js*: The radio page route.
- *settings.js*: The settings page route.
- *user-analytics.js*: The user-analytics page route.

### Server

This folder contains a node server used primarily for testing. It contains:

- **routes/**: Contains the API functions that are used in the server.
  * *friend-request.js*: Contains CRUD functions for friend requests.
  * *messages.js*: Contains CRUD functions for messages.
  * *notifications.js*: Contains CRUD functions for notifications.
  * *podcast.js*: Contains CRUD functions for podcasts.
  * *posts.js*: Contains CRUD functions for posts.
  * *users.js*: Contains CRUD functions for users.
- **tests/**: Contains tests for the API functions. Supertest in combination with Jest is used for testing.
  * *friend-request.test.js*: Contains tests for friend requests.
  * *messages.test.js*: Contains tests for messages.
  * *notifications.test.js*: Contains tests for notifications.
  * *podcasts.test.js*: Contains tests for podcasts.
  * *posts.test.js*: Contains tests for posts.
  * *users.test.js*: Contains tests for users.
- **server.js**: Contains the express server used mainly for the purpose of testing the API functions. There is the possibility of using this as a replacement to Next.js if ever the project moves to using pure React.js.

### Static

This folder contains folders that are not meant to change in production, usually images, videos and general CSS files. It contains:

- **favicon.ico**: This is the website icon.
- **assets/**: This folder contains CSS, Javascript files and images used in the project.
  - **css/**:
    * *pages/*: Contains page specific CSS files.
    * *bootstrap.min.css*: Bootstrap CSS file.
    * *style.css*: Main general CSS file.
  - **img/**: Contains images.
  - **js/**: Contains Javascript files.
    * *bootstrap.js*: Bootstrap Javascript file
    
### Next Configuration

`next.config.js` is the file that contains custom Next.js configurations and plugins. At the point of writing this documentation, it contains plugins that allow the use of CSS and images in the project.

### PostgreSQL Schema

`follow-the-money.sql` contains the sql schema that can be queried using a tool like [pgAdmin](https://www.pgadmin.org/) to create the same database that was used for testing and implementation. All tests should pass if schema is queried properly.


## Working Page Routes

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

The RESTful API, under the server folder in tests, are tested using Express.js, [Jest](https://jestjs.io/), [Supertest](https://www.npmjs.com/package/supertest) and PostgreSQL, with the functions under the routes folder. Below are the API that have been tested:

- *users*
- *posts*
- *podcasts*
- *notifications*
- *messages*
- *friend-requests*

At the point of writing this documentation all tests are passing all **25 tests** are passing, with CRUD capabilities.

## Plans For The Future

- While a good number of routes are working, most of them do not serve dynamic content. The goal is to have all pages serve completely dynamic content.
- There are still some API left to be created and some existing ones have yet to be implemented.
- Next.js might be scrapped out in favour of using purely React.js for the frontend and Node.js for the backend. `server.js` in the server folder can be used for the backend given it is already working and only needs to be slightly modified.
- Some pages need to be turned into proper components.
- Duplicate components to be removed.
