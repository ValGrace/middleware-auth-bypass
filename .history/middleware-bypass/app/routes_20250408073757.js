import Link from "next/link"

export default function Routed() {
    return 
    (
        <>
     <div className="row">
     <Link href="/admin">Admin</Link>      
    <Link href="/profile">Login</Link>
    </div>
    </>
    )
}