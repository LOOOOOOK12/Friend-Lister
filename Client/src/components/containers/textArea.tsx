import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@radix-ui/react-label';

interface Props {
    labelName: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className: string;
}

function TextArea({ labelName, placeholder, value, onChange, className }: Props) {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <Label className='text-sm font-medium'>{labelName}</Label>
            <Textarea
                className={`col-span-3 w-full ${className}`} placeholder={placeholder}
                onChange={handleChange}
                value={value}
                
            />
        </div>
    );
}

export default TextArea;
