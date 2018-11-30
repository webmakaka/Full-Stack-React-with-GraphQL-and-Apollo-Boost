import React from 'react';

import { ApolloConsumer } from 'react-apollo';
import { SEARCH_RECIPES } from 'queries';
import SearchItem from 'components/Recipe/SearchItem';


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
          <input type="search" 
            className="search"
            placehoder="Search for Recipes" onChange={async (event) => {

            event.persist();

            const { data } = await client.query({
              query: SEARCH_RECIPES,
              variables: { searchTerm: event.target.value }
            });

            this.handleChange(data);

          }}/>

          <ul>
            {searchResults.map(recipe => (
              <SearchItem key={recipe._id} {...recipe} />
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