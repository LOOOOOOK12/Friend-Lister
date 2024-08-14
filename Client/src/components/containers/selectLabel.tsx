import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';

interface SelectProps {
    className?: string
    labelName: string;
    items: string[];
    placeHolder: string;
    onChange?: (value: string) => void;
}

function selectLabel({labelName, items, onChange, placeHolder, className}:SelectProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label>{labelName}</Label>
            <Select onValueChange={onChange}>
                <SelectTrigger className={`w-full ${className}`}>
                    <SelectValue  className="text-red-50" placeholder={placeHolder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {items.map((item, index) =>(
                            <SelectItem key={index} value={item}>
                                {item}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default selectLabel