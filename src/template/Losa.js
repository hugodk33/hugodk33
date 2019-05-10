import React, { Component } from 'react'
import '../styles/css/losa.css'

export default class Losa extends Component {
    render() {
        return(
            <section>
                <div className={'LosaSection'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            
                            <div className={'losaHorse'}>
                                <div className={'moldura-2'}>
                                    <div className={'vetor-moldura-topo-2'}>
                                        
                                    </div>
                                    <div className={'vetor-moldura-base-2'}>
                                        
                                    </div>
                                    <div className={'vetor-moldura-esq-2'}>
                                        
                                    </div>
                                    <div className={'vetor-moldura-dir-2'}>
                                        
                                    </div>
                                </div>
                                <img className={'horse'} src={require('../img/horse.png')} />
                                <div className={'moldura-1'}>
                                    <div className={'vetor-moldura-topo-1'}>
                                        
                                    </div>
                                    <div className={'vetor-moldura-base-1'}>
                                        
                                    </div>
                                    <div className={'vetor-moldura-esq-1'}>
                                        
                                    </div>
                                    <div className={'vetor-moldura-dir-1'}>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={'col-md-12 col-sm-12 txt-banner'}>
                                <div className={'row'} style={{padding: "0"}}>
                                    <h3> Victor Hugo Amorim Arruda</h3>
                                </div>
                                <div className={'row'} style={{padding: "0"}}>
                                    <h4 style={{margin: '4px 4px 4px auto'}}><span className={"tornaCinza"} ><i className={"fas fa-chess-knight"}></i></span> Front End </h4><h4 style={{margin: '4px auto 4px 4px'}}><span className={"tornaCinza"} ><i className="fas fa-chess-rook"></i></span> Web Design </h4>
                                </div>
                                <div className={'row'} style={{padding: "0"}}>
                                    <p class="citacao" style={{margin: "-2px auto", float: 'left', fontSize: '20px', color: '#a7a7ff'}}>"Labor improbus omnia vincit."</p>
                                </div>
                                <div className={'row'} style={{padding: "0"}}>
                                    <div className={'btn barraH'} style={{marginRight: '5px', marginLeft: 'auto'}}><i class="fab fa-codepen"></i> Codepen</div>
                                    <div className={'btn barraH'}><i class="fab fa-github"></i> Github</div>
                                    <div className={'btn barraH'} style={{marginLeft: '5px', marginRight: 'auto'}}><i class="fab fa-linkedin"></i> Linkedin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}