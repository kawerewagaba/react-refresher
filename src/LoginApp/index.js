import './style.css';
import { useState } from 'react';
import { asyncSimulator } from '../utils';

export default function() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const disabled = !email || password.length < 6 || loading;

    async function handlelogin() {
        let h = 1;
        // async operation - simulate it
        setLoading(true);
        try {
            console.log(h)
            await asyncSimulator({email, password});
            setLoading(false);
            console.log('success');
        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div>
                <label>Email address</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={handlelogin} disabled={disabled}>Submit</button>
            <div>{loading}</div>
        </div>
    );
}