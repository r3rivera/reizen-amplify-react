
import { useNavigate } from "react-router";

interface LogoParm{
    altName: string,
    sourceUrl: string
    targetUrl: string,
    className: string,
    isClickable: boolean
}

const ClickLogo = ({altName, sourceUrl, targetUrl, isClickable, className}:LogoParm) =>{
    let navigate = useNavigate();

    const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        if(isClickable && event.ctrlKey && event.shiftKey){
            navigate(targetUrl);
        }
    };

    return (
        <a onClick={onNavClick}>
            <img alt={altName} src={sourceUrl} className={className} />
        </a>
    )
};
export default ClickLogo;