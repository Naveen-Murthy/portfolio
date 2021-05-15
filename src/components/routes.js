import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from "./Landing/Landing.js";
import Resume from "./Resume/Resume.js";
import Projects from "./Projects/Projects.js";
import Contact from "./Contact/Contact.js";

const PageRouters =() =>{
    return(
        <Switch>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Route exact path="/" component={Landing} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}

export default PageRouters;