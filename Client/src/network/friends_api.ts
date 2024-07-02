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
    _id?: string,
    name: string,
    age: string,
    gender: string,
    description: string,
    picture: string,
    createdAt?: string,
    updatedAt?: string,
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