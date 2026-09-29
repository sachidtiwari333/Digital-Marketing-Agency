import connectDB from "@/lib/mongodb"
connectDB()
export default function Dashboard(){
  return(
    <h1>Hello From dashboard</h1>
  )
}