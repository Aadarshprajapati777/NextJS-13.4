import Link from "next/link";

export default function Navbar(){
    return(
        <div  className="navbar">
            <h1>Navbar</h1>
            <Link href="/Screen/Home_Screen">Home</Link>
            <Link href="/Screen/Login_Screen">Login</Link>
            <Link href="/Screen/Signup_Screen">Signup</Link>
            <Link href="/Backend_Data/Posts">Posts</Link>
            
        </div>
    )
}