import Image from "next/image"

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

const getDogData= async ()=>{
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        next: {
            revalidate:0,
        }
    });
    const dogdata= res.json();
    return dogdata;
}   

export default async function  Posts(){
const [postdata, userdata, dog]= await Promise.all([getPostData(), getUserData(), getDogData()]);
    return(
        <div>
            <h1> DOG data</h1>
            <div>
                <Image src={dog.message} alt="dog" width={300} height={300}
                
                />
                </div>            
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
            
        </div>
    )
}