import classes from './MealItemForm.module.css';
import React from 'react';
import Input from '../../UI/Input';
import uniqid from 'uniqid';

const MealItemForm = props => {
  const id = uniqid();
  return (
    <form className={classes.form}>
      <Input
        label="amount"
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
