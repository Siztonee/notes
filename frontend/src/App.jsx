import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('access');
    return token ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/" 
                    element={
                        <ProtectedRoute>
                            <h1>Заметки</h1>
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;