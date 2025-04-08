import { adminCheck } from "../account/login"
export async default function admin(){
    await adminCheck()
    return <h1>This is the admin page</h1>
}