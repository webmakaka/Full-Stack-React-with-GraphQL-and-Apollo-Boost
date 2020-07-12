import React from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from 'components/Spinner';
import LikeRecipe from 'components/Recipe/LikeRecipe';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries';

const RecipePage = ({ match }) => {

  const { _id } = match.params;

  return (
    <Query query={GET_RECIPE} variables={{ _id }} >

    { ( { data, loading, error} ) => {

      if (loading) return <Spinner/>;

      if (error) return <div>Error</div>;

      return (<div className="App">

        <h2>{data.getRecipe.name}</h2>

        <div 
          style={{ background: `url(${data.getRecipe.imageUrl}) center center / cover no-repeat` }}
        className="recipe-image"></div>

        <div className="recipe">
          <div className="recipe-header">
          
          <h2 className="recipe-name">
            <strong>{data.getRecipe.name}</strong>
          </h2>

          <h5>
            <strong>
              {data.getRecipe.category}
            </strong>
          </h5>
          <p>
            Creted by <strong>{data.getRecipe.username}</strong>
          </p>
          <p>
            {data.getRecipe.likes} <span role="img" aria-label="heart">❤️</span>
          </p>
          
          </div>

          <blockquote className="recipe-description">
            {data.getRecipe.description}
          </blockquote>

          <h3 className="recipe-instructions__title">Instructions</h3>
          
          <div 
            className="recipe-instructions"
            dangerouslySetInnerHTML={{ __html: data.getRecipe.instructions }}

          ></div>

          <LikeRecipe _id={_id} />

        </div>

      </div>);
    }}

    </Query>
  )
}

export default withRouter(RecipePage);