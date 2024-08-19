import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@radix-ui/react-label'

interface SelectProps {
    className?: string,
    labelName: string;
    items: string[];
    onChange?: (value: string) => void;
}

function select({labelName, items, onChange}:SelectProps) {
    <div>
        <Label>{labelName}</Label>
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={`Select ${labelName}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {items.map((item, index) =>(
                        <SelectItem key={index} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                    <SelectItem value="apple">{items}</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
}

export default select