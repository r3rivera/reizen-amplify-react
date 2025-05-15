
import { useNavigate } from "react-router";

interface LogoParm{
    altName: string,
    sourceUrl: string
}

const Logo = ({altName, sourceUrl}:LogoParm) =>{
    let navigate = useNavigate();

    const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        if(event.ctrlKey && event.shiftKey){
            navigate("/guard");
        }
    };

    return (
        <a onClick={onNavClick}>
            <img alt={altName} src={sourceUrl} className="h-11" />
        </a>
    )
};
export default Logo;