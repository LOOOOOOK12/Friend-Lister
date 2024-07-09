import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface Props {
    labelName: string;
    type: string;
    placeholder?: string;
    value: string | number;
    onChange?: (value: string) => void;
}

function Labels({ labelName, type, placeholder, value, onChange }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    // Ensure value is a string before passing it to Input component
    const displayValue = value !== null && value !== undefined ? value.toString() : '';

    return (
        <div className="flex flex-col gap-2">
            <Label>{labelName}</Label>
            <Input
                id={labelName.toLowerCase()}
                placeholder={placeholder}
                type={type}
                onChange={handleChange}
                value={displayValue}
                className="col-span-3"
            />
        </div>
    );
}

export default Labels;
