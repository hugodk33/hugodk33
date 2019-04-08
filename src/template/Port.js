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
                                <img src={require('../img/BgMT.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >SITE</div>
                            </div>
                            <div className={"col-md-7"}>
                                <h4><i className={"fas fa-chevron-circle-right "}></i> Outdoor's web site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <button className={'btnProject'}><i class="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i class="fab fa-github-alt"></i> Ver Código</button>                            
                                <hr />
                            </div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/BgMT.jpg')} style={{width: '100%'}}/>
                            </div>
                            <div className={"col-md-7"}>
                                <h4><i className={"fas fa-chevron-circle-right "}></i> Outdoor's web site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <button className={'btnProject'}><i class="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i class="fab fa-github-alt"></i> Ver Código</button>                            
                                <hr />
                            </div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/BgMT.jpg')} style={{width: '100%'}}/>
                            </div>
                            <div className={"col-md-7"}>
                                <h4><i className={"fas fa-chevron-circle-right "}></i> Outdoor's web site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <button className={'btnProject'}><i class="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i class="fab fa-github-alt"></i> Ver Código</button>                            
                                <hr />
                            </div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/BgMT.jpg')} style={{width: '100%'}}/>
                            </div>
                            <div className={"col-md-7"}>
                                <h4><i className={"fas fa-chevron-circle-right "}></i> Outdoor's web site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <button className={'btnProject'}><i class="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i class="fab fa-github-alt"></i> Ver Código</button>                            
                                <hr />
                            </div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-5"}>
                                <img src={require('../img/BgMT.jpg')} style={{width: '100%'}}/>
                            </div>
                            <div className={"col-md-7"}>
                                <h4><i className={"fas fa-chevron-circle-right "}></i> Outdoor's web site</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum diam elit, quis commodo ipsum sollicitudin non. Nunc metus diam, viverra ac diam vitae, accumsan hendrerit mi.</p>
                                <button className={'btnProject'}><i class="far fa-eye"></i> Ver Projeto</button><button className={'btnGitHub'}><i class="fab fa-github-alt"></i> Ver Código</button>                            
                                <hr />
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        ) 
    }
}