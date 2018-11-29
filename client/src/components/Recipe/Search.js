import React from 'react';
import { Link } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import { SEARCH_RECIPES } from 'queries';

class Search extends React.Component {

  state = {
    searchResults: []
  }

  handleChange = ({ searchRecipes }) => {
    this.setState({
      searchResults: searchRecipes
    });
  }

  render() {

    const { searchResults } = this.state;

    return (

    <ApolloConsumer>

      {(client) => (

        <div className="App">
          <input type="search" placehoder="Search for Recipes" onChange={async (event) => {

            event.persist();

            const { data } = await client.query({
              query: SEARCH_RECIPES,
              variables: { searchTerm: event.target.value }
            });

            this.handleChange(data);

          }}/>

          <ul>
            {searchResults.map(recipe => (
              <li key={recipe._id}>
                <Link to={`/recipes/${recipe._id}`}><h4>{recipe.name}</h4></Link>
                <p>{recipe.likes}</p>
              </li>
              ))}
          </ul>

        </div>
      )
    }

    </ApolloConsumer>

    );

};

}

export default Search;