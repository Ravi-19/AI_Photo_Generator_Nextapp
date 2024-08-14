import { kv } from '@vercel/kv';
import { NextResponse , NextRequest } from 'next/server';
 
export async function GET( NextRequest , context) {
  try {
    const user = await kv.hgetall(context.params.user); 
    console.log(NextRequest.ip) ; 
    return NextResponse.json({status:"ok" , data:user});
  } catch (error) {
    
  }
}

export async function POST( NextRequest , context) {
    try {
        const requestBody = await NextRequest.json();
        const emailId = context.params.user ;  
        const response =   await kv.hset(  emailId, { requestBody});
        console.log(response) ; 
        return NextResponse.json({status :"ok", data:response})
      } catch (error) {
        // Handle errors
        console.log("errror in post " , error) ; 
      }
  }