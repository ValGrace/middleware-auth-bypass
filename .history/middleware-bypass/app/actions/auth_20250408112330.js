"use server"
import {cookies} from "next/headers"
import 'server-only'
// imp?ort { NextResponse } from "next/server"
import { SignupFormSchema } from "../lib/definitions"

const USERS = [
    { username: "administrator", admin: true},
    { username: "attacker", admin: false}
]

export async function getUser(){
    const username = (await cookies()).get('username')?.value
    
    return USERS.find(u => u.username === username)
}

export async function signup(state, formData) {
    const validated = SignupFormSchema.safeParse({
        name: formData.get('name')
    })

    if (!validated.success) {
        return {
            errors: validated.error.flatten().fieldErrors,
        }
    }

    const { name } = validated.data
    await createSession(name)
    //  NextResponse.redirect('/profile')
} 

export async function createSession(username) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const cookieStore = await cookies()
    
    cookieStore.set('session', username, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    })
    
}



