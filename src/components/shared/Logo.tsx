
interface LogoParm{
    altName: string,
    sourceUrl: string
}

const Logo = ({altName, sourceUrl}:LogoParm) =>{

    return (
            <img alt={altName} src={sourceUrl} className="h-11" />
    )
};
export default Logo;