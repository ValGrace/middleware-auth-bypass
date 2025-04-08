import { NextResponse } from "next/server"

const privateRoutes = ['/admin']
const publicRoutes = ['/login']

export default async function middleware(req){
    const path = req.nextUrl.pathname
    const isPrivateRoute = privateRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const user = getUser(req.cookies)
    
    if (isPrivateRoute && (user == null || !user.admin)) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if (isPublicRoute && (user == null || user.admin)) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    return NextResponse.next()
}