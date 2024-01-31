import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../features/categories/categoriesSlice';

const AddCategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName) {
      // Assuming categories have a name and a unique ID
      dispatch(addCategory({ id: Date.now(), name: categoryName }));
      setCategoryName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Enter a new category"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategoryForm;
