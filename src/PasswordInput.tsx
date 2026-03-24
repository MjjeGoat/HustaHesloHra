import { useState } from "react";

interface PasswordInputProps {
    password: string;
    setPassword: (newPassword: string) => void;
}

export const PasswordInput = ({ password, setPassword }: PasswordInputProps) => {
    const [isSecret, setIsSecret] = useState(true);

    const toggleSecret = () => setIsSecret(prev => !prev);

    return (
        <div className="max-w-sm w-full mx-auto">

            {/* Title */}
            <h1 className="mb-6 text-4xl font-extrabold text-center tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-500 drop-shadow">
                    PASSWORD
                </span>{" "}
                <span className="text-gray-300">GAME</span>
            </h1>

            {/* Input container */}
            <div className="relative group">

                {/* Glow efekt */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-xl blur opacity-20 group-focus-within:opacity-40 transition duration-300"></div>

                <input
                    type={isSecret ? "password" : "text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="relative w-full px-4 py-3 rounded-xl bg-gray-900 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                />

                {/* Toggle button */}
                <button
                    type="button"
                    onClick={toggleSecret}
                    className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-400 hover:text-white transition"
                >
                    {isSecret ? (
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                            <line x1="2" y1="2" x2="22" y2="22" />
                        </svg>
                    ) : (
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx={12} cy={12} r={3} />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};