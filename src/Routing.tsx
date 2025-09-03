import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function Routing() {
    return (
        <Routes>
            <Route path="/first" element={<Page1 />} />
            <Route path="/second" element={<Page2 />} />
        </Routes>
    );
}

export default Routing;