import { NextResponse } from "next/server"

// const privateRoutes = ['/admin']
// const publicRoutes = ['/profile']

export default async function adminCheck(req){
    const path = req.nextUrl.pathname
    const isPrivateRoute =path.startsWith("/admin")
    const isPublicRoute = path.startsWith("/profile")

    const user = getUser(req.cookies)
    
    if (isPrivateRoute ) {
        if (user == null || !user.admin) {
        return NextResponse.redirect(new URL('/profile', req.nextUrl))
        }
    }
    console.log(isPublicRoute)
    // if (isPublicRoute && (user == null || user.admin)) {
    //     return NextResponse.redirect(new URL('/admin', req.nextUrl))
    // }

    return NextResponse.next()
}