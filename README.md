# [Udemy, Reed Barger] Full-Stack React with GraphQL and Apollo Boost [2018, ENG]

**Final App:** <br/>
http://react-apollo-recipes.herokuapp.com/

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

<br/>

### 27. Create Error Component, Clear State Upon Submit, Add Form Validation

<br/>

![Application](/img/pic-27-01.png?raw=true)

<br/>

### 28. Create Signin Mutation on Backend

```js
mutation($username: String!, $password: String!) {
  signinUser(username: $username, password: $password){
    token
  }
}
```

<br/>

![Application](/img/pic-28-01.png?raw=true)


<br/>

### 29. Implement Signin Mutation on Client

<br/>

![Application](/img/pic-29-01.png?raw=true)

<br/>

### 30. Add Token to Local Storage, Put Token on Authorization Header

<br/>

### 31. Verify JWT on Backend to Get Current User


<br/>

### 32. Add getCurrentUser Query, Create withSession Component

<br/>

![Application](/img/pic-32-01.png?raw=true)

<br/>

### 33. Redirect Upon SigninSignup, Refetch getCurrentUser Query Upon Redirect

<br/>

### 34. Add Navbar Component, Add Search Component

<br/>

![Application](/img/pic-34-01.png?raw=true)

<br/>

### 35. Add Navbar Links For Auth User

<br/>

### 36. Make Navbar Dynamic, Add Custom Heading

<br/>

![Application](/img/pic-36-01.png?raw=true)

<br/>

### 37. Implement Signout Button

<br/>

### 38. Map Over Recipes, Create Recipe Item Component

<br/>

### 39. Create Recipe Page, Get Recipe Id From Path

<br/>

### 40. Add getRecipe Query in Backend, Run Query on Recipe Page

```js
query($_id:ID!) {
  getRecipe(_id: $_id) {
    _id
    name
    category
    description
    instructions
    createdDate
    likes
  }
}
```

<br/>

![Application](/img/pic-40-01.png?raw=true)

<br/>

![Application](/img/pic-40-02.png?raw=true)

<br/>

### 41. Output getRecipe Data to Recipe Page, Scaffold Add Recipe Form

<br/>

### 42. Make AddRecipe a Stateful Component

<br/>

![Application](/img/pic-42-01.png?raw=true)

<br/>

### 43. Implement addRecipe Mutation on Client

<br/>

![Application](/img/pic-43-01.png?raw=true)

<br/>

![Application](/img/pic-43-02.png?raw=true)


<br/>

### 44. Clear State and Redirect Upon addRecipe Mutation

<br/>

### 45. Learning and Implementing Optimistic UI

<br/>

### 46. Create searchRecipes Query on Backend, add Apollo Query to Search Component

<br/>

![Application](/img/pic-46-01.png?raw=true)

<br/>

### 47. Index Recipe Fields, Perform Search Query on Input Change Event

<br/>

![Application](/img/pic-47-01.png?raw=true)

<br/>

### 48. Add SearchItem Component

<br/>

### 49. Add UserInfo Component to Profile Page

<br/>

![Application](/img/pic-49-01.png?raw=true)

<br/>

### 50. Add UserRecipes Component to Profile Page, Implement getUserRecipes Query

<br/>

![Application](/img/pic-50-01.png?raw=true)

<br/>

### 51. Add Route Protection with withAuth Component

<br/>

### 52. Add and Implement deleteUserRecipe Mutation

<br/>

### 53. Add Optimistic UI to deleteUserRecipe Mutation

<br/>

### 54. Add refetchQueries to deleteUserRecipe Mutation

<br/>

### 55. Add refetchQueries to addRecipe Mutation

<br/>

### 56. Provide Default Text for User Without Recipes

<br/>

### 57. Create LikeRecipe Component and Hide If Not Auth

<br/>

### 58. Add and Implement likeRecipe Mutation

<br/>

### 59. Develop Client-side Logic to Properly Toggle Like

<br/>

### 60. Create and Implement unlikeRecipe Mutation with Optimistic UI

<br/>

### 61. Prepare for Deployment

<br/>

### 62. Use Fragments to Clean Up Queries

<br/>

### 63. Deploy to Heroku

-- skipped

<br/>

### 64. Add Additional CSS to Project

<br/>

### 65. Adds imageUrl field on Recipe model and imageUrl input in addRecipe

<br/>

### 66. Display Recipe Image on Home Page, Build Card

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>  