import React from "react";

export interface SequenceValidationResult {
    validity: boolean;
    counter: number;
}

interface Props {
    password: string;
}

const getCharType = (char: string) => {
    if (/[a-z]/.test(char)) return "lower";
    if (/[A-Z]/.test(char)) return "upper";
    if (/[0-9]/.test(char)) return "number";
    if (/[!@#$%^&*]/.test(char)) return "special";
    return "other";
};

export const CharacterSequenceValidator: React.FC<Props> = ({ password }) => {

    const validateSequence = (pwd: string): SequenceValidationResult => {
        let counter = 0;

        for (let i = 0; i <= pwd.length - 4; i++) {
            const sequence = pwd.slice(i, i + 4);
            const types = new Set(sequence.split("").map(getCharType));

            if (
                types.has("lower") &&
                types.has("upper") &&
                types.has("number") &&
                types.has("special")
            ) {
                counter++;
            }
        }

        return {
            validity: counter > 0,
            counter,
        };
    };

    const result = validateSequence(password);

    return (
        <div>
            <p>Validní sekvence nalezeny: {result.counter}</p>
            <p>
                Stav:{" "}
                {result.validity ? (
                    <span style={{ color: "green" }}>Splněno</span>
                ) : (
                    <span style={{ color: "red" }}>Nesplněno</span>
                )}
            </p>
        </div>
    );
};