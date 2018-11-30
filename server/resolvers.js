const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find().sort({ createdDate: 'desc' });
      return allRecipes;
    },
    getRecipe: async (root, { _id }, { Recipe }) => {
      const recipe = await Recipe.findOne({ _id });
      return recipe;
    },
    searchRecipes: async (root, { searchTerm }, { Recipe }) => {
      if (searchTerm) {
        const searchResults = await Recipe.find({
          $text: { $search: searchTerm }
        }, {
          score: { $meta: 'textScore' }
        }).sort({
          score: {
            $meta: 'textScore'
          }
        });

        return searchResults;
      } else {
        const recipes = await Recipe.find().sort({ likes: 'desc', createdDate: 'desc' });
        return recipes;
      }
    },
    getUserRecipes: async (root, { username }, { Recipe }) => {
      const userRecipes = await Recipe.find({ username }).sort({
        createdDate: 'desc'
      });

      return userRecipes;
    },
    getCurrentUser: async (root, args, { currentUser, User }) => {
      console.log('resolvers: getCurrentUser');

      if (!currentUser) { return null; }

      const user = await User.findOne({ username: currentUser.username })
        .populate({
          path: 'favorites',
          model: 'Recipe'
        });

      console.log(user);

      return user;
    }
  },

  Mutation: {
    addRecipe: async (root, { name, imageUrl, description, category, instructions, username }, { Recipe }) => {
      const newRecipe = await new Recipe({
        name,
        imageUrl,
        description,
        category,
        instructions,
        username
      }).save();

      return newRecipe;
    },
    likeRecipe: async (root, { _id, username }, { Recipe, User }) => {
      const recipe = await Recipe.findOneAndUpdate({ _id }, { $inc: { likes: 1 } });
      const user = await User.findOneAndUpdate({ username }, { $addToSet: { favorites: _id } });

      return recipe;
    },
    unlikeRecipe: async (root, { _id, username }, { Recipe, User }) => {
      const recipe = await Recipe.findOneAndUpdate({ _id }, { $inc: { likes: -1 } });
      const user = await User.findOneAndUpdate({ username }, { $pull: { favorites: _id } });

      return recipe;
    },
    deleteUserRecipe: async (root, { _id }, { Recipe }) => {
      const recipe = await Recipe.findOneAndRemove({ _id });
      return recipe;
    },
    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });

      if (!user) { throw new Error('User not found!'); }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) { throw new Error('Invalid password!'); }

      return { token: createToken(user, process.env.SECRET, '1hr') };
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });

      if (user) { throw new Error('User already exists!'); }

      const newUser = await new User({
        username, email, password
      }).save();

      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    }
  }

};
