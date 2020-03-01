import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
                <div class="container"><a class="navbar-brand logo" href="#">Brand</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        <ul class="nav navbar-nav mr-auto ml-auto">
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/">Početna</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/gallery">Galerija</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/news">Novosti</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/members">Članovi</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/contact">Kontakt</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/about">O Nama</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/login">Prijava</a></li>
                            <li class="nav-item" role="presentation"><a class="nav-link" href="/registration">Registracija</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
