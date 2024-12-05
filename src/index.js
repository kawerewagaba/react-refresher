import { createRoot } from 'react-dom/client';
import Gallery from './Gallery';
import TaskApp from './TaskApp';
import LevelApp from './LevelApp';
import LoginApp from './LoginApp';

function App() {
    return (
        <>
        <div>Hello, world! Yours, React!</div>
        <LoginApp />
        <Gallery />
        <TaskApp />
        <LevelApp />
        </>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);