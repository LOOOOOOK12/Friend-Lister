import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import DeleteFriend from "@/modals/DeleteFriend"
import EditFriend from "@/modals/EditFriend"

function friendContainer() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Michael Jackstone</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center gap-4" onClick={()=>alert("Lobot")}>
                <img src="src\assets\sampleimages\js.png" alt="" className="h-36 w-full" />
                <h1>20 Years Old</h1>
                <h1>Febuary 29 2024</h1>
                <h1>Bading</h1>
            </CardContent>
            <CardFooter className="gap-3 justify-end">
                <DeleteFriend/>
                <EditFriend/>
            </CardFooter>
        </Card>
    )
}

export default friendContainer