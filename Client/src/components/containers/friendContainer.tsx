import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import DeleteFriend from "@/modals/DeleteFriend"
import EditFriend from "@/modals/EditFriend"
import FriendProfile from "@/modals/FriendProfile"

function friendContainer() {
    return (
        <Card>
            <CardHeader className="items-end">
                <FriendProfile/>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-4">
                <img src="src\assets\sampleimages\js.png" alt="" className="h-44 w-full" />
                <h1 className="text-2xl font-semibold">Mickael Jackstone</h1>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 justify-end">
                <DeleteFriend/>
                <EditFriend/>
            </CardFooter>
        </Card>
    )
}

export default friendContainer