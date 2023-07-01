import Image from "next/image";
const getDogData= async ()=>{
    const res= await fetch('https://dog.ceo/api/breeds/image/random',
    {
        cache: "no-store",
    }
    )
    const dogdata= res.json();
    return dogdata;
    
}


export default async function Dogsdata(){
    const data = await getDogData();

    return(
        <div>
            <h1>DOg Image</h1>
            <Image src={data.message} alt="dog" width={200} height={200} />
        </div>
    )
}