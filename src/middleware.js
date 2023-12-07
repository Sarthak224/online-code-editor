import Cookies from 'js-cookie';
import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
export function middleware(request) {

//   alert(typeof localStorage)

  //  console.log(Cookies.get())
  // if (request.nextUrl.pathname == ('/auth/login')) {

  //   if(Cookies.get("userData")){
  //     return NextResponse.rewrite(new URL('/code-editor', request.url))
  //   }

  // }
  // if (request.nextUrl.pathname==('/code-editor')) {
  //   console.log(Cookies.get("userData"),request.nextUrl.pathname,request.nextUrl.pathname=="/code-editor","line1")

  //   if(Cookies.get("userData")){
  //     console.log(Cookies.get("userData"),request.nextUrl.pathname,request.nextUrl.pathname=="/code-editor","line2")

  //   }
  //   else
  //   return NextResponse.rewrite(new URL('/auth/login', request.url))

  // }
  // if (request.nextUrl.pathname == ('/')) {
  //   if(Cookies.get("userData"))
  //   return NextResponse.rewrite(new URL('/code-editor', request.url))

  //   else

  //   return NextResponse.rewrite(new URL('/auth/login', request.url))

  // }
}