import React, { Component } from 'react'
import '../styles/css/losa.css'

export default class Losa extends Component {
    render() {
        return(
            <section>
                <div className={'LosaSection'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-6 txt-banner'}>
                                <h2> Victor Hugo Amorim Arruda</h2>
                                <h4><span className={"tornaCinza"} ><i className={"fas fa-chess-knight"}></i></span> Front End <span className={"tornaCinza"} ><i class="fas fa-chess-bishop"></i></span> Back End <span className={"tornaCinza"} ><i class="fas fa-chess-rook"></i></span> Web Design </h4>
                                <hr style={{"border": "1px gray solid"}} />
                                <div className={'col-12'} style={{padding: "0"}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur neque posuere, rutrum sem mattis, mollis enim.</p>    
                                </div>
                            </div>
                            <div className={'col-3'}></div>
                            <div className={'col-3'}>
                                <div className={'moldura-2'}></div>
                                <img className={'horse'} src={require('../img/horse2.png')} alt="dadeda"/>
                                <div className={'moldura-1'}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}