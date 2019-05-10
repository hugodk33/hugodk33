import React, { Component } from 'react'
import '../styles/css/Port.css'

export default class Port extends Component {
    render() {
        return(
            <section>
                <div className={"PortSection"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={'col-md-5 col-4'} style={{paddingRight: '0'}}><hr /></div>
                            <div className={'col-md-2  col-4 TitlePort'}>
                                <h2>Portfólio</h2> 
                            </div>
                            <div className={'col-md-5 col-4'} style={{paddingLeft: '0'}}><hr /></div>
                        </div>     
                        <div className={"row linha"}>
                            <div className={"col-md-4 col-sm-6 "}>
                                <img src={require('../img/thumb-bigdoor-1.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >SITE</div>
                                <h4>Outdoor's Web Site</h4>
                                <p>This project aims to create a user experience to highlight the billboard, after loading the page, a message is formed dynamically.</p>
                                <ul>
                                    <li>React JS</li>
                                    <li>React Redux</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <a className={'btnProject'} href="http://github.com/hugodk33/" target="_blank" ><i className="far fa-eye"></i> Ver Projeto</a><a className={'btnGitHub'} href={"http://hugodk33.github.io/websitedois/"} target="_blank"><i className="fab fa-github-alt"></i> Ver Código</a>
                            </div>
                            <div className={"col-md-4 col-sm-6"}>
                                <img src={require('../img/thumb-uxui-3.jpg')} style={{width: '100%'}}/>
                                <div className={'Ctn-Circulo-excl'} >CRUD</div>
                                <h4>CRUD with React Redux</h4>
                                <p>This project consumes an API on a node server, on the front end, json is organized according to subcategories on a nested list. In the form it is possible to search and append to the server, besides cleaning the input, in the list it is possible to edit the items and deleted.</p>
                                <ul>
                                    <li>React JS</li>
                                    <li>React Redux</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <a className={'btnGitHub'} href="http://github.com/hugodk33/" target="_blank" ><i className="fab fa-github-alt"></i> Ver Código</a>                                                    
                            </div>
                            <div className={"col-md-4 col-sm-6"}>
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