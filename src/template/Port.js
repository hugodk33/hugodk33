import React, { Component } from 'react'
import '../styles/css/Port.css'

export default class Port extends Component {
    render() {
        return(
            <section>
                <div className={"PortSection"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-12 TitlePort"}>
                            <h2>Portfólio</h2>
                            </div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/thumb-bigdoor-1.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >SITE</div>
                            </div>
                            <div className={"col-md-7"}>
                                <h4>Outdoor's Web Site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <ul>
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                    <li>item 4</li>
                                    <li>item 5</li>
                                </ul>
                                <button className={'btnProject'}><i className="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i className="fab fa-github-alt"></i> Ver Código</button>                            
                            </div>
                            
                        </div>
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/thumb-uxui-3.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >CRUD</div>
                            </div>
                            <div className={"col-md-7"}>
                                <h4>Outdoor's Web Site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <ul>
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                    <li>item 4</li>
                                    <li>item 5</li>
                                </ul>
                                <button className={'btnProject'}><i className="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i className="fab fa-github-alt"></i> Ver Código</button>                            
                            </div>
                            
                        </div>                        
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/thumb-soluthec-2.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >SITE</div>
                            </div>
                            <div className={"col-md-7"}>
                                <h4>Outdoor's Web Site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <ul>
                                    <li>item 1</li>
                                    <li>item 2</li>
                                    <li>item 3</li>
                                    <li>item 4</li>
                                    <li>item 5</li>
                                </ul>
                                <button className={'btnProject'}><i className="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i className="fab fa-github-alt"></i> Ver Código</button>                            
                            </div>
                            
                        </div>
                    </div>                                                    
                </div>
            </section>
        ) 
    }
}