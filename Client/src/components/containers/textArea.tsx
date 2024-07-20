import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@radix-ui/react-label';

interface Props {
    labelName: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

function TextArea({ labelName, placeholder, value, onChange }: Props) {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <Label>{labelName}</Label>
            <Textarea
                className='w-full'
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
}

export default TextArea;
