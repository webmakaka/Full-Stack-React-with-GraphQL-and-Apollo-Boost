import React from 'react';

const RecipeItem = ({name, category }) => (
  <li>
    <h4>{name}</h4>
    <p><strong>{category}</strong></p>
  </li>
)

export default RecipeItem; 