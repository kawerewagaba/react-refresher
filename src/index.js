import { createRoot } from 'react-dom/client';
import Gallery from './Gallery';
import TaskApp from './TaskApp';

function App() {
    return (
        <>
        <div>Hello, world!</div>
        <Gallery />
        <TaskApp />
        </>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);