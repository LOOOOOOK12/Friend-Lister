import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface Props {
    labelName: string;
    type: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Labels({ labelName, type, placeholder, value, onChange, onFileChange }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'file' && onFileChange) {
            onFileChange(event);
        } else if (onChange) {
            onChange(event.target.value);
        }
    };

    // Ensure value is a string before passing it to Input component
    const displayValue = value !== null && value !== undefined ? value.toString() : '';

    return (
        <div className="flex flex-col gap-2">
            <Label>{labelName}</Label>
            <Input
                accept='image/*'
                id={labelName.toLowerCase()}
                placeholder={type !== 'file' ? placeholder : undefined}
                type={type}
                onChange={handleChange}
                value={type !== 'file' ? displayValue : undefined}
                className="col-span-3"
            />
        </div>
    );
}

export default Labels;
