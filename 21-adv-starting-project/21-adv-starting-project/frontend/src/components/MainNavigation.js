import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) => {return isActive ? classes.active : undefined}}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({isActive}) => {return isActive ? classes.active : undefined}}>Events</NavLink>
          </li>
          <li>
            <NavLink to="new" className={({isActive}) => {return isActive ? classes.active : undefined}}>New Event</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

