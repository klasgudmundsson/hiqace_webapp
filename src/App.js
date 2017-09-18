import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import hiqLogo from './hiq-logo-bw.png';
import './App.css';
import {Navbar, NavDropdown, Nav, NavItem, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import Home from './Home.js'
import Search from './Search.js'
import Guess from './Guess.js'
import Team from './Team.js'
import Profile from './Profile.js'
import Game from './Game.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <img src={hiqLogo} alt="HiQ" className="HiQ-logo"/>
                </div>
                <BrowserRouter>
                    <div>
                        <Navbar inverse staticTop>
                            <Nav>
                                <LinkContainer to="/hem">
                                    <NavItem eventKey={1}>Hem</NavItem>
                                </LinkContainer>
                                <NavDropdown eventKey={2} title="Medarbetare" id="basic-nav-dropdown">
                                    <LinkContainer to="/medarbetare/hitta">
                                        <MenuItem eventKey={2.1}>Sök</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="/medarbetare/gissa">
                                        <MenuItem eventKey={2.2}>Gissa</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="/medarbetare/team">
                                        <MenuItem eventKey={2.3}>Team</MenuItem>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/game">
                                    <NavItem eventKey={3}>Tic-Tac-Toe</NavItem>
                                </LinkContainer>
                            </Nav>
                            <Nav pullRight>
                                <LinkContainer to="/profil">
                                    <NavItem eventKey={4}>Profil</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/logga/ut">
                                    <NavItem eventKey={5}>Logga ut</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar>
                        <main>
                            <Switch>
                                <Route exact path='/hem' component={Home}/>
                                <Route exact path='/medarbetare/hitta' component={Search}/>
                                <Route exact path='/medarbetare/gissa' component={Guess}/>
                                <Route exact path='/medarbetare/Team' component={Team}/>
                                <Route exact path='/game' component={Game}/>
                                <Route exact path='/profil' component={Profile}/>
                            </Switch>
                        </main>
                    </div>

                </BrowserRouter>
            </div>
        );
    }
}

export default App;
