import { useNavigate } from "react-router-dom";

interface Props {
    label: string;
    scale: number;
    navigateTo?:string;
    width?: string;
}

export const CustomButton = (props: Props) => {

    const scaleValue = `scale(${props.scale})`
    const width = `${props.width}`

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate(props.navigateTo ? props.navigateTo : "/first")
    }

    return (
        <div className='join-button' onClick={handleClick} style={{ transform: scaleValue, width: width }}>
            <span className='join-label'>{props.label}</span>
            <div className='smaller-circle'>
                <span className='arrow-icon'>&rarr;</span>
            </div>
        </div>
    )
}