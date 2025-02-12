import {useEffect,useState, useRef} from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';


export const useAuthStatus = () => {
    const [signedIn,setSignedIn] = useState<boolean>(false);
    const [viewStatus,setViewStatus] = useState<boolean>(true);
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        if(isMounted){
            const auth = getAuth();
            onAuthStateChanged(auth,(user) => {
                if(user){
                    setSignedIn(true)
                }
                setViewStatus(false)
            })
        }
        return () => {
            isMounted.current = false
        }
    })
    return {signedIn,viewStatus}
}