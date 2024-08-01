import {LevelContext} from './LevelContext';

export default function Section ({level, children}) {
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}

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
 * provider
 * maybe import a method like provideContext from React: React.Context.provide
 * and not the created context object
 * we may not actually need the provider
 * and the componet stays as below
 */

// export default function Section ({children}) {
//     return (
//         <section className="section">
//             {children}
//         </section>
//     );
// }

// nb: the context is available at this level as well
// alternatively context could be created on this parent so that it is not global?????
// so that it is available only in this context (section of the tree?)

// import {createContext} from 'react';

// export const level = createContext(1);

// and available as the context object to the child, just like how the children object is available to every component