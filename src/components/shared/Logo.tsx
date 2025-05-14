
import { useNavigate } from "react-router";

interface LogoParm{
    altName: string,
    sourceUrl: string
}

const Logo = ({altName, sourceUrl}:LogoParm) =>{
    let navigate = useNavigate();
    const onNavClick = () =>{
        navigate("/guard");
    };

    return (
        <img alt={altName} src={sourceUrl} className="h-11" onClick={() => onNavClick()}/>
    )

};
export default Logo;