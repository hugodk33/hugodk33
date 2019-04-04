import React from 'react'

const Bar = props => {
    return (
        <div>
            <p className={'TitleCamp'}>{props.title}</p>
            <div className={'Camp'}><div className={'BarraMov-iN ' + props.cont} style={{width: props.size}}><div className={'Barra'}></div></div></div>
            <p className={'LegendaCamp'}>.</p>
        </div>        
    )
}

export default Bar