import { useState, useEffect } from 'react'
import './App.css'

import { PasswordInput } from "./PasswordInput.tsx";
import { PasswordStrength } from "./PasswordStrength.tsx";
import { CharacterSequenceValidator } from "./CharacterSequenceValidator.tsx";
import { PasswordTimeValidatorResult } from "./PasswordTimeValidationResult.tsx";
import { CountryFlagValidator } from "./CountryFlagValidator.tsx";

function App() {

    const [password, setPassword] = useState<string>('');
    const [createdAt] = useState<number>(() => Date.now());

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {
                const action = Math.random() < 0.5 ? 'add' : 'remove';

                if (action === 'add') {
                    return prevPassword + "😜";
                } else {
                    if (prevPassword.length === 0) return prevPassword;

                    const index = Math.floor(Math.random() * prevPassword.length);
                    return (
                        prevPassword.slice(0, index) +
                        prevPassword.slice(index + 1)
                    );
                }
            });
        }, 10000);

        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <>
            <PasswordInput password={password} setPassword={setPassword} />

            <PasswordStrength password={password} />

            <CharacterSequenceValidator password={password} />

            <PasswordTimeValidatorResult
                password={password}
                createdAt={createdAt}
            />

            <CountryFlagValidator password={password} />
        </>
    )
}

export default App;