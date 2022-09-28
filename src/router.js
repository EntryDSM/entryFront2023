import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./pages/main"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={main()}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;