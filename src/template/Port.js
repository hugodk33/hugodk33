import React, { Component } from 'react'
import '../styles/css/Port.css'

export default class Port extends Component {
    render() {
        return(
            <section>
                <div className={"PortSection"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={'col-md-5 col-3'} style={{paddingRight: '0'}}><hr /></div>
                            <div className={'col-md-2  col-6 TitlePort'}>
                                <h2 style={{color: '#6565ff'}}>Portfolio</h2> 
                            </div>
                            <div className={'col-md-5 col-3'} style={{paddingLeft: '0'}}><hr /></div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-4 col-sm-6 "} style={{marginBottom: '20px'}}>
                            <img src={require('../img/thumb-uxui-4.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >UX</div>
                                <h4>Sneakers App</h4>
                                <p>this interface is designed for the consumer of tennis, being able to choose between colors and sizes. The colors change smoothly and the size changes the weight and size of the packaging.</p>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <a className={'btnProject'} href="https://codepen.io/Hugodk33/full/NVGdZW" target="_blank" ><i class="fab fa-codepen"></i> Ver Projeto(full)</a><a className={'btnGitHub'} href={"https://codepen.io/Hugodk33/pen/NVGdZW"} target="_blank"><i class="fab fa-codepen"></i> Ver Código </a>
                            </div>
                            <div className={"col-md-4 col-sm-6 "} style={{marginBottom: '20px'}}>
                                <img src={require('../img/thumb-bigdoor-11.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >SITE</div>
                                <h4>Outdoor's Web Site</h4>
                                <p>This project aims to create a user experience to highlight the billboard, after loading the page, a message is formed dynamically.</p>
                                <ul>
                                    <li>React JS</li>
                                    <li>React Redux</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <a className={'btnProject'} href="https://github.com/hugodk33/websitedois" target="_blank" ><i className="far fa-eye"></i> Ver Projeto</a><a className={'btnGitHub'} href={"http://hugodk33.github.io/websitedois/"} target="_blank"><i className="fab fa-github-alt"></i> Ver Código</a>
                            </div>
                            <div className={"col-md-4 col-sm-6"} style={{marginBottom: '20px'}}>
                                <img src={require('../img/thumb-uxui-33.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >CRUD</div>
                                <h4>CRUD with React Redux</h4>
                                <p>This project consumes an API on a node server, on the front end, json is organized according to subcategories on a nested list. In the form it is possible to search and append to the server, besides cleaning the input, in the list it is possible to edit the items and deleted.</p>
                                <ul>
                                    <li>React JS</li>
                                    <li>React Redux</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <a className={'btnGitHub'} href="https://github.com/hugodk33/testeapi-2" target="_blank" ><i className="fab fa-github-alt"></i> Ver Código</a>                                                    
                            </div>
                            <div className={"col-md-4 col-sm-6"} style={{marginBottom: '20px'}}>
                                <img src={require('../img/thumb-soluthec-22.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >SITE</div>
                                <h4>Soluthec's Web Site</h4>
                                <p>A simple web design project I did for a company</p>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>Wordpress</li>
                                </ul>
                                <a className={'btnProject'} href="http://soluthec.com.br" target="_blank"><i className="far fa-eye"></i> Ver Projeto</a>
                            </div>
                        </div> 
                    </div>                                                    
                </div>
            </section>
        ) 
    }
}