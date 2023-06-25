import React from 'react'
import { TailSpin } from 'react-loader-spinner';

function Spinner({ height, width, color }) {

    React.useEffect(() => {
        if (color === 'light') {
            color = '#F3F3F2'
        } else if (color === 'dark') {
            color = '#373737'
        } else if (color === 'primary') {
            color = '#327052'
        } else if (color === 'secondary') {
            color = '#EDE0D5'
        }else{
            color = '#F3F3F2'
        }
    }, [color])

    return (
        <div className="spinner loader">
            <TailSpin
                height={height}
                width={width}
                color={color}
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Spinner