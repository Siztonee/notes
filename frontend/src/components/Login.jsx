import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/api/token/', { username, password });
            
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
            
            alert('Успешный вход!');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Неверный логин или пароль');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: '50px auto' }}>
            <h2>Вход в заметки</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Логин" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                <input 
                    type="password" 
                    placeholder="Пароль" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ display: 'block', width: '100%', marginBottom: '10px' }}
                />
                <button type="submit" style={{ width: '100%' }}>Войти</button>
            </form>
        </div>
    );
};

export default Login;