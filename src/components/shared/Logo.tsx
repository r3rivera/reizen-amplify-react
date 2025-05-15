
import { useNavigate } from "react-router";

interface LogoParm{
    altName: string,
    sourceUrl: string
    targetUrl: string
}

const Logo = ({altName, sourceUrl, targetUrl}:LogoParm) =>{
    let navigate = useNavigate();

    const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        if(event.ctrlKey && event.shiftKey){
            navigate(targetUrl);
        }
    };

    return (
        <a onClick={onNavClick}>
            <img alt={altName} src={sourceUrl} className="h-11" />
        </a>
    )
};
export default Logo;