import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({_id, name, category }) => (
  <li>
    <Link to={`/recipes/${_id}`} ><h4>{name}</h4></Link>
    <p><strong>{category}</strong></p>
  </li>
)

export default RecipeItem; 