import React from 'react'

const Bar = props => {
    return (
        <div className={'Camp'}><div className={'BarraMov-iN ' + props.cont} style={{width: props.cont + '%'}}><div className={'Barra'}></div></div></div>      
    )
}

export default Bar