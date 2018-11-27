const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    }
  },

  Mutation: {
    addRecipe: async (root, { name, description, category, instructions, username }, { Recipe }) => {
      const newRecipe = await new Recipe({
        name,
        description,
        category,
        instructions,
        username
      }).save();

      return newRecipe;
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      console.log('user');
      console.log(username);
      console.log(email);
      console.log(password);

      const user = await User.findOne({ username });

      console.log('user1');
      console.log(user);

      if (user) { throw new Error('User already exists'); }

      const newUser = await new User({
        username, email, password
      }).save();

      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    }
  }

};
