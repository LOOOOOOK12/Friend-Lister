import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface Props{
    labelName: string;
    type: string;
    defaultValue?: string;
}

function labels({labelName, type, defaultValue}:Props) {
    return (
        <div className="flex flex-col gap-2">
            <Label>{labelName}</Label>
            <Input
                id="name"
                defaultValue={defaultValue}
                type={type}
                className="col-span-3"
            />
        </div>
    )
}

export default labels