import { useState, useEffect } from "react";

interface Props {
    password: string;
    createdAt: number;
    maxWindow?: number;
    minTime?: number;
}

export const PasswordTimeValidatorResult: React.FC<Props> = ({
                                                                 password,
                                                                 createdAt,
                                                                 maxWindow = 5000,
                                                                 minTime = 500,
                                                             }) => {

    const [elapsedTime, setElapsedTime] = useState(0);
    const [stopped, setStopped] = useState(false);

    useEffect(() => {
        if (stopped) return;

        const interval = setInterval(() => {
            const time = Date.now() - createdAt;
            setElapsedTime(time);

            const tooFast = time < minTime;
            const expired = time > maxWindow;
            const valid = !tooFast && !expired && password.length > 0;

            if (valid || expired) {
                setStopped(true);
            }

        }, 100);

        return () => clearInterval(interval);
    }, [createdAt, password, stopped]);

    const tooFast = elapsedTime < minTime;
    const expired = elapsedTime > maxWindow;
    const valid = !tooFast && !expired && password.length > 0;

    return (
        <div>
            <p>Uplynulý čas: {(elapsedTime / 1000).toFixed(2)} s</p>

            {tooFast && <p style={{ color: "orange" }}>Heslo bylo zadáno příliš rychle.</p>}
            {expired && <p style={{ color: "red" }}>Časový limit byl překročen.</p>}
            {valid && <p style={{ color: "green" }}>Heslo bylo zadáno ve správném časovém okně.</p>}
        </div>
    );
};