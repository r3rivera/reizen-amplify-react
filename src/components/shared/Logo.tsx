
import { useNavigate } from "react-router";

interface LogoParm{
    altName: string,
    sourceUrl: string
    targetUrl: string,
    isClickable: boolean
}

const Logo = ({altName, sourceUrl, targetUrl, isClickable}:LogoParm) =>{
    let navigate = useNavigate();

    const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        if(isClickable && event.ctrlKey && event.shiftKey){
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