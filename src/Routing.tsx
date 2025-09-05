import { Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import AppDetails from './pages/AppDetails';

function Routing() {
    return (
        <Routes>
            <Route path="/first" element={<Page1 />} />
            <Route path="/second" element={<Page2 />} />
            <Route path="/third" element={<Page3 />} />
            <Route path="/fourth" element={<Page4 />} />
            <Route path="/fifth" element={<Page5 />} />
            <Route path="/details" element={<AppDetails />} />

        </Routes>
    );
}

export default Routing;