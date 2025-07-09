import React, { useState } from 'react';
import styles from './CategoryFilter.module.css';

const categories = ['Coffee', 'Bread'];

const CategoryFilter = ({ selected, onChange }) => {
  const [active, setActive] = useState(selected || categories[0]);

  const handleSelect = (cat) => {
    setActive(cat);
    if (onChange) onChange(cat);
  };

  return (
    <div className={styles.categoryFilter}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? styles.active : styles.button}
          onClick={() => handleSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
