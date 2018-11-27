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

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>  