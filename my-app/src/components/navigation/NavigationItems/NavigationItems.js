import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
   <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/writes">Writes</NavigationItem>
        <NavigationItem link="/auth">Authentication</NavigationItem>
   </ul>
}

export default navigationItems;
