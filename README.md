# [Udemy, Reed Barger] Full-Stack React with GraphQL and Apollo Boost [2018, ENG]


<br/>

### 08. Create Mongoose Schemas

<br/>

### 09. Add Apollo-Express Middleware

<br/>

### 10. Create GraphQL Schema

<br/>

### 11. Add bodyParser Middleware and Root Query Type

http://localhost:3000/graphiql

<br/>

![Application](/img/pic-11-01.png?raw=true)


<br/>

### 12. Create First Mutation


```js

mutation {
  addRecipe(
    name: "Grilled Cheese Sandwich",
    description: "A tasty sandwich",
    category: "Sandwiches",
    instructions: "Grill it!"
  ) {
    name
    category
    description
    instructions
  }
  
}

```

<br/>

![Application](/img/pic-12-01.png?raw=true)

<br/>

### 13. Create First Query

```js
query {
  getAllRecipes {
    _id
    name
    category
    likes
    createdDate
  }
}
```

<br/>

### 14. Create React Application with create-react-app

    $ cd ../client/
    $ npx create-react-app .


<br/>

### 15. Clean Up App.js and Add Components Folder

    $ cd ../server/
    $ npm run dev

<br/>

### 16. Add Client Dependencies and Set Up ApolloClientApolloProvider

    $ cd client
    $ npm install --save graphql
    $ npm install --save react-apollo apollo-boost
    $ npm install --save jwt-decode

<br/>

### 17. Create Queries Folder, Write First Apollo Query

<br/>

### 18. Add cors Middleware to Prevent Cross-Origin Errors

<br/>

### 19. Add Skeleton CSS and Base Styles

<br/>

### 20. Create Signup Mutation

```js
mutation {
  signupUser(username: "John", email: "john@gmail.com", password: "John"){
    token
  }
}

```

<br/>

![Application](/img/pic-20-01.png?raw=true)

<br/>

### 21. Hash User Password with bcrypt

<br/>

### 22. Add Routing with react-router-dom

    $ npm install --save react-router-dom

<br/>

### 23. Add Form to Signup Component

<br/>

### 24. Manage Input State in Signup Form

<br/>

### 25. Add Mutation Component to Signup Component, Write SIGNUP_USER Apollo Mutation

<br/>

### 26. Add onSubmit to Signup Form, Run Signup Mutation on Client

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>  