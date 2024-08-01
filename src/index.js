import { createRoot } from 'react-dom/client';
import Gallery from './Gallery';
import TaskApp from './TaskApp';
import LevelApp from './LevelApp';

function App() {
    return (
        <>
        <div>Hello, world!</div>
        <Gallery />
        <TaskApp />
        <LevelApp />
        </>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);