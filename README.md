# Final Project Requirements

* Must use React, Vue, or Angular in some way (even if minimal)

* Must use a Node and Express Web Server

* Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM  

* Must have both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with Data)

* Must utilize at least two libraries, packages, or technologies that we haven’t discussed

* Must allow for or involve the authentication of users in some way

* Must have a polished frontend / UI 

* Must have folder structure that meets MVC Paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../../01-Class-Content/10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)


Idea: Giphy battle app (GifBall-Z)

chat app with CRUD operations
-unique feature: gif battles
    -a topic is proposed in which contestants 'battle' for best use of gifs
            -What does this mean?
                -Both sides use the same array of GIFs (either based on user keyword [or randomized: stretch goal])
        -the battle's 'winner' is determined by upvote and downvote on the various gifs
    -uses giphy API
    -uses react
    -uses firebase
    -many tutorials to help clone reddit or stack overflow (and apply that to the giphy API)
    schema.org
    giphy api documentation/postman(test queries while waiting for the API key)
    JSON web token /JWT with react (for authentication)
    how to build a stack overflow clone in react (for upvote/downvote)
    API endpoints in Express
    Calls to API endpoints in Express via React for CRUD functionality
    Mongoose Schema as an ORM (is there a Mongoose schema library/schema generator?)
    Mlabs account for MongoDB hosting (connect with Heroku)
    Bootstrap for CSS (duh)

    List of compartmentalized functions/tasks...
        List of views... (which react components does this require)?
            Landing Page (first thing)
                Login Page (authentication?)
                    User Profile Page (avatar, stats, create/update user form)
            About page (description of the background purpose of the project, like what belongs in the ReadMe)

        Routes corresponding to the views
            Landing Page /home
                Login Page /login
                    profile page /profile/:userid(dynamic information)
            About page /about

    List of variables for use throughout:
        -userName
        -userPass
        -conversations (chat history with a specific user)
            -messages (single message to a specific user)
                -messageGif (indexed to a specific message)
        -gifResults (results of a keyword-indexed)
        -recipient

    Endpoints for CRUD functions (on the backend in express)
        -Look up how to write Express CRUD endpoints for 
        

Cruz' feedback:

-Firebase would be better for asyncrnous changes
Laravel?




