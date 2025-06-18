interface Props {
    label: string;
    scale: number;
    width?: string;
}

export const CustomButton = (props: Props) => {

    const scaleValue = `scale(${props.scale})`
    const width = `${props.width}`

    return (
        <div className='join-button' style={{ transform: scaleValue, width: width }}>
            <span className='join-label'>{props.label}</span>
            <div className='smaller-circle'>
                <span className='arrow-icon'>&rarr;</span>
            </div>
        </div>
    )
}