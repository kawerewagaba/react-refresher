import {useContext} from 'react';
import {LevelContext} from './LevelContext';

export default function Heading({children}) {
    const level = useContext(LevelContext);

    switch (level) {
        case 1: return <h1>{children}</h1>;
        case 2: return <h2>{children}</h2>;
        case 3: return <h3>{children}</h3>;
        case 4: return <h4>{children}</h4>;
        case 5: return <h5>{children}</h5>;
        case 6: return <h6>{children}</h6>;
        default: throw Error ('Unknown level: ' + level);
    }
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
 * creator
 * import createContext from react: React.Context.create
 */

/**
 * provider
 * maybe import a method like provideContext from React: React.Context.provide
 * and not the created context object
 */

/**
 * user
 * import useContext from React: React.Context.use
 * the value of the context should be available at React.Context.values.<key>
 * useContext('level') // pass the key for the context you are looking for
 * the component would like below
 */

// import {useContext} from 'react';

// export default function Heading({children}) {
//     const level = useContext('level');

//     switch (level) {
//         case 1: return <h1>{children}</h1>;
//         case 2: return <h2>{children}</h2>;
//         case 3: return <h3>{children}</h3>;
//         case 4: return <h4>{children}</h4>;
//         case 5: return <h5>{children}</h5>;
//         case 6: return <h6>{children}</h6>;
//         default: throw Error ('Unknown level: ' + level);
//     }
// }

