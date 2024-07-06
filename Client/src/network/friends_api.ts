import { Friends } from "@/models/friends";

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch (input, init);
    if(response.ok){
        return response
    } else {
        const errorBody = await response.json()
        const errorMessage = errorBody.error;
        throw Error(errorMessage);
    }
}

export async function fetchFriends(): Promise<Friends[]>{
    const response = await fetch('/api/friends', { method: 'GET' });
    return response.json();
}

export interface FriendInput {
    name: string,
    age: string,
    gender: string,
    description: string,
    picture: string,
}

export async function createFriend( friend: FriendInput ): Promise<Friends>{
    const response = await fetchData("/api/friends",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(friend),
    });
    return response.json();
}

export async function checkFriendExists(friend: { name: string }): Promise<boolean> {
    const params = new URLSearchParams(friend).toString();
    const response = await fetch(`/api/friends/check-friend?${params}`, { method: 'GET' });
    if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
    }
    const data = await response.json();
    return data.exists;
}

export async function deleteFriend(friendId: string){
    await fetchData("api/friends/" + friendId, { method: "DELETE" })
}