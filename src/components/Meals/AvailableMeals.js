import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true); //* внчале http
      const response = await fetch(
        'https://react-http-53159-default-rtdb.firebaseio.com/meals.json',
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      } //Error

      const responseData = await response.json(); //наши данные в виде обьекта

      const loadedData = [];

      for (let key in responseData) {
        //*let key in responseData
        loadedData.push({
          id: key,
          //name: loadedData[key].name,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false); //*в конце http
    };

    fetchMeals().catch(error => {
      //Error
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    //JSX - error
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  if (isLoading) {
    //JSX
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
