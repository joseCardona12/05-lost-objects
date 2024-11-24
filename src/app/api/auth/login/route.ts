import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest):Promise<NextResponse | void>{
    const params = await request.json();
    const {email,password} = params;
    if(!email || !password)return;
    
    const user = {email,password}
    const data = await fetch("http//localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user)
    });
    console.log("ddata", data);
    return NextResponse.json(data)
}