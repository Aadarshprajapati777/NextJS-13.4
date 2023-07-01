import Link from "next/link"
const getPostData= async ()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await response.json()
    return data
}
const getUserData= async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const userdata= res.json();
    return userdata;
}


export default async function  Posts(){
const [postdata, userdata]= await Promise.all([getPostData(), getUserData()]);
    return(
        <div>
                 
            <h1>Post data</h1>
            {postdata.map((post:any)=>{
               return <div key={post.id}>
                     <h2>{post.title}</h2>  
                    </div>
            })}
            <h1>User data</h1>
            {userdata.map((user:any)=>{
                return <div key={user.id}>
                        <h2>{user.name}</h2>  
                      </div>
    
                })}

                <button>
                    <Link href="Dogs"> Get DOG photos</Link>
                </button>
            
        </div>
    )
}