import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/component/meals/MealGrid';
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          {' '}
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </div>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
