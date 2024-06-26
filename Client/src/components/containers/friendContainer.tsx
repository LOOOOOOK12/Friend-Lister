import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import FriendProfile from "@/modals/FriendProfile"

function friendContainer() {
    return (
        <Card className="bg-others-container border border-[#303051]">
            <CardHeader className="items-end">
                <FriendProfile/>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-4">
                <img src="src\assets\sampleimages\js.png" alt="test" className="h-44 w-full rounded-md" />
                <CardTitle>Michael Jacstone</CardTitle>
            </CardContent>
        </Card>
    )
}

export default friendContainer