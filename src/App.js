import React, { Component } from 'react';
import './sass/main.scss';
import PageRouters from './components/routes';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';


class App extends Component {
    componentDidMount() {
        var c, currentScrollTop = 0;
        var $header = $(".header-wrapper");
        if ($(window).scrollTop() > 0) {
            $header.addClass("header-styles");
        }

        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var b = $header.height();

            currentScrollTop = a;

            if (a > 0) {
                $(".scrollToTop").fadeIn();
                $header.addClass("header-styles");
            } else {
                $(".scrollToTop").fadeOut();
                $header.removeClass("header-styles");
            }

            if (c < currentScrollTop && a > b + b) {
                $header.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                $header.removeClass("scrollUp");
            }
            c = currentScrollTop;
        });
        // Header animation
    }
    render() {
        return (
            <>
                <header className="header-wrapper">
                    <NavLink to="/" className="header-text">My Portfolio</NavLink>
                    <div className="header_navigations">
                    <NavLink to="/resume" className="header-link" activeClassName="active">Resume</NavLink>
                    <NavLink to="/projects" className="header-link" activeClassName="active">Projects</NavLink>
                    <NavLink to="/contact" className="header-link" activeClassName="active">Contact</NavLink>
                    </div>
                    <div className="mobile-menu">
                    <i className="fa fa-bars menu-icon" aria-hidden="true"></i>
                    </div>
                </header>
                <section className="page-wrapper">
                    <PageRouters/>
                </section>
            </>
        );
    }
}

export default App;