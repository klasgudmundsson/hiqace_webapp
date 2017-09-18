import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavDropdown, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div>
                    <BrowserRouter>
                        <Navbar>
                            <Nav>
                                <LinkContainer to="/hem">
                                    <NavItem eventKey={1}>Hem</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/medarbetare">
                                    <NavItem eventKey={2}>Medarbetare</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/profil">
                                    <NavItem eventKey={3}>Profil</NavItem>
                                </LinkContainer>
                            </Nav>
                            <Nav pullRight>
                                <LinkContainer to="/loggaut">
                                    <NavItem eventKey={4}>Logga ut</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar>
                    </BrowserRouter>
                    {/*<Route exact path="/" component={Home}/>
                            <Route path="/people" component={People}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/projects" component={Projects}/>*/}

                </div>

            </div>
        );
    }
}

export default App;
