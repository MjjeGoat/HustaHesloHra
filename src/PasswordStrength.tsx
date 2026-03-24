import { useState, useEffect } from "react";

interface PasswordStrengthProps {
    password: string;
}

interface StrengthData {
    text: string;
    width: number;
    color: string;
}

export const PasswordStrength = ({ password }: PasswordStrengthProps) => {
    const [strengthData, setStrengthData] = useState<StrengthData>({
        text: "",
        width: 0,
        color: "red",
    });

    const evaluatePassword = (password: string): StrengthData => {
        let score = 0;

        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        if (hasMinLength) score++;
        if (hasUpperCase) score++;
        if (hasNumber) score++;
        if (hasSpecialChar) score++;

        if (score === 4) return { text: "SILNÉ", color: "green", width: 100 };
        if (score === 3) return { text: "STŘEDNÍ", color: "orange", width: 75 };
        if (score === 2) return { text: "SLABÉ", color: "red", width: 50 };
        return { text: "VELMI SLABÉ", color: "red", width: 25 };
    };

    useEffect(() => {
        const id = setTimeout(() => {
            const result = evaluatePassword(password);
            setStrengthData(result);
        }, 0);

        return () => clearTimeout(id);
    }, [password]);

    useEffect(() => {
        document.title = `Síla hesla: ${strengthData.text}`;
    }, [strengthData.text]);

    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return (
        <div>
            <p>Síla hesla: <strong>{strengthData.text}</strong></p>

            <div className="w-full bg-neutral-quaternary rounded-full">
                <div
                    className="text-xs font-medium text-white text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center"
                    style={{
                        width: strengthData.width + "%",
                        backgroundColor: strengthData.color,
                    }}
                >
                    {strengthData.width}%
                </div>
            </div>
            <ul className="max-w-md space-y-1 text-body list-inside mt-2">
                <li className="flex items-center">
                    <svg
                        className={`w-4 h-4 me-1.5 shrink-0 ${hasMinLength ? "text-green-500" : "text-gray-400"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    Minimálně 8 znaků
                </li>
                <li className="flex items-center">
                    <svg
                        className={`w-4 h-4 me-1.5 shrink-0 ${hasUpperCase ? "text-green-500" : "text-gray-400"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    Alespoň jedno velké písmeno
                </li>
                <li className="flex items-center">
                    <svg
                        className={`w-4 h-4 me-1.5 shrink-0 ${hasNumber ? "text-green-500" : "text-gray-400"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    Alespoň jedno číslo
                </li>
                <li className="flex items-center">
                    <svg
                        className={`w-4 h-4 me-1.5 shrink-0 ${hasSpecialChar ? "text-green-500" : "text-gray-400"}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    Alespoň jeden speciální znak (!@#$%^&*)
                </li>
            </ul>
        </div>
    );
};