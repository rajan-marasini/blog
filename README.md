## Architecture

**Fronend (React.js)**

-   Components: Resuable UI components for the user interface.
-   Redux: State management for handling user authentication and blogs
-   React Router: Navigation and routing between different pages.
-   Axios: HTTP client for making API requests to the backend.

**Backend (Node.js, Express.js)**

-   RESTful APIs: Endpoints for user authentication, blogs and search functionalities.
-   Neon : Cloud-hosted Postgres database for storing user data, blogs, and application content.
-   Prisma: Object Relation Mapping (ORM) for interacting with Postgres from Node.js
-   JWT Authentication: JSON Web Tokens for secure user authentication and authorization.

**Database(Postgres)**

-   User Collections: User collection for storing user profiles and authentication data.
-   Blog collection: Stores user-generated blogs with associated metadata.

## Getting Started

-   Pre-requisite: You need to install the nodejs in your system: [node.js documentation](https://nodejs.org/docs/latest/api/documentation.html)

**1. Clone the Repository:**

```zsh
    git clone https://github.com/rajan-marasini/blog.git
    cd blog
```

**2. Install Dependencies:**

```zsh
    cd client && npm install
    cd ../server && npm install
```

**3. Setup the Environment Variable**

-   Create .env files in the server directory.
-   Configure environment variables such as database connection strings, and secret keys as given .env.sample.

**4. Start the development servers:**

-   Frontend

```zsh
    cd client && npm start
```

-   Backend

```zsh
    cd server && npm start
```

**5. Access the Application**

-   Open your browser and navigate to http://localhost:5173 to view the application.

**Thank you for using our Blog Application**
