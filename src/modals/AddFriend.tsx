import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function AddFriend() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Friend</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Add your Friend</DialogTitle>
                    <DialogDescription>
                        Enter your details about your friend!!
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Juan Dela Cruz"
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="age">
                            Age
                        </Label>
                        <Input
                        id="age"
                        defaultValue="@peduarte"
                        className="col-span-3"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="birthday">
                            Birthday
                        </Label>
                        <Input
                            id="birthday"
                            defaultValue="@peduarte"
                            type="date"
                            className="col-span-3"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Add your Friend!</Button>
                </DialogFooter>
            </DialogContent>
    </Dialog>
    )
}

export default AddFriend