import {createContext} from 'react';

export const LevelContext = createContext(1);

// i think this is bad design and it is confusing
// importing LevelContext in multiple components is very confusing

/**
 * my expectations - or would be design
 * attach this context to some global context object
 * so that the global now looks like const React.Context = {levelContext, ...}
 * the provider component doesn't have to import LevelContext
 * instead references this global context for the required variable and get its value
 * the user of the context should have it available since the parent has that context
 */

/**
 * creator
 * React.Context.create
 */

