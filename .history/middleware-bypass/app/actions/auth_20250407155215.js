import {cookies} from "next/headers"


const USERS = [
    { username: "administrator", admin: true},
    { username: "attacker", admin: false}
]

export async function getUser(){
    const username = (await cookies()).get('username')?.value
    return USERS.find(u => u.username === username)
}



