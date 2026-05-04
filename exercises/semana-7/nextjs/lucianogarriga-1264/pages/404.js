import Link from "next/link"; 
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();
    
    useEffect(()=> {
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    }, [])


    return ( 
        <div className="not-found">
            <h2>That page cannot be found.</h2>
            <span>You will be redirect to the <Link href="/" className="homepage">Homepage</Link> </span>
        </div>
     );
}
 
export default NotFound;