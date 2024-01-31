import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';

const CategorySelector = ({ onCategorySelected }) => {
  const categories = useSelector(selectCategories);

  return (
    <select onChange={(e) => onCategorySelected(e.target.value)}>
      <option value="">Select a category</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;

