import { useEffect,useState } from "react";
const Route = ({ path, children }) => {
  const [currentPath,setCurrentPath] = useState('');
  useEffect(()=>{
    const onLocationChange=()=>{
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate',onLocationChange)
  },[]);

  return currentPath === path ? children : null;


};
export default Route;