import { adminCheck } from "../account/login"
export default async function admin(){
    await adminCheck()
    return <h1>This is the admin page</h1>
}