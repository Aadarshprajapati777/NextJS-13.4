import Image from 'next/image'
type ColumnProps={
    title:string;
    links:Array<string>;
}


const FooterColumn =({title,links}: ColumnProps)=>(
    <div className="footer_column">
        <h4 className='font-semibold'>Title</h4>
        <ul className='flex -flex-col gap-2 font-normal'>

            Links
        </ul>
    </div>
)


const Footer = () => {
  return (
    <footer className='flexStart footer'>
         <div className='flex flex-col gap-12 w-full'>
            <div className='flex item-start flex-col'>
                <Image
                src="/logo-purple.svg"
                alt="Flexibble"
                width={115}
                height={38}
                />  
                <p className='text-start text-sm font-normal mt-5 max-w-xs'>Flexlksjdfl;ajlgjla slkfl;kajf lksf;lkdajg lkjgl;kjjgf</p>
            </div>
            <div className='flex flex-wrap gap-12'>
                <FooterColumn title={footerLinks[0].title}  links={footerLinks[0].links}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer;