import connectDB from '../../../lib/mongodb'
export async function GET() {
  return Response.json("Hello From auth route")
}
export async function POST(request: Request) {
  const {username, password} = await request.json()
  return Response.json({
    "Username" : username,
    "Password" : password
  })
}
connectDB()
