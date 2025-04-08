import Link from "next/link"

export default function Routed() {
    return 
    (
        <>
     <div className="row">
     <Link href="/admin">Admin</Link>      
    <Link href="/login">Login</Link>
    </div>
    </>
    )
}