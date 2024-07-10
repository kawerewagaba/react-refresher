import { createRoot } from 'react-dom/client';
import Gallery from './Gallery';

function App() {
    return (
        <>
        <div>Hello, world!</div>
        <Gallery />
        </>
    );
}

const root = createRoot(document.getElementById("root"));

root.render(<App />);