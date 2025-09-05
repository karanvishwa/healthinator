import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    label: string;
    scale: number;
    navigateTo?: string;
    width?: string;
    setToggle?: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomButton = (props: Props) => {

    const [title, setTitle] = useState(props.label)

    const scaleValue = `scale(${props.scale})`
    const width = `${props.width}`

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.navigateTo ? props.navigateTo : "/first")
        if (props.label === "Join" && props.setToggle) {
            props.setToggle((prev) => !prev)
            setTitle((prev) => prev === 'Join' ? 'Home' : 'Join')
        }
    }

    return (
        <div className='join-button' onClick={handleClick} style={{ transform: scaleValue, width: width }}>
            <span className='join-label'>{title}</span>
            <div className='smaller-circle'>
                <span className='arrow-icon'>&rarr;</span>
            </div>
        </div>
    )
}