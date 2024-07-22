import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface Props {
    labelName: string;
    type: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

function Labels({ labelName, type, placeholder, value, onChange, onFileChange, className}: Props) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'file' && onFileChange) {
            onFileChange(event);
        } else if (onChange) {
            onChange(event.target.value);
        }
    };

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
                className={`col-span-3 ${className}`}
            />
        </div>
    );
}

export default Labels;
