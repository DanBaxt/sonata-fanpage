import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./Jumbotron.css";

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>About the Band</h1>
                <p>
                    Sonata Artica is a power metal band from the town of Kemi, Finland.
                </p>
                <p>
                    Sonata Arctica started life as a hard rock band named Tricky Beans. They later changed the name to Tricky Means before settling on the name Sonata Arctica. They shifted to more of a power metal style, though they would experiment with many different styles over their discography.
                </p>
                <p>
                    The band has had many members over the years, with lead singer Tony Kakko and drummer Tommy Portimo being the only ones to have stayed since the band was founded. Their music is inspired by many different bands and genres. Their lyrics often tell dark and twisted stories. The bands mascot is a wolf, and they encorporate them into every album.
                </p>
                <p>
                    They have released nine studio albums, with their most recent album, The Ninth Hour, being released on October 7, 2016.
                </p>
                <p>
                    Check out their official website for info on their new albums, upcomiing tours, and more: <a href="http://www.sonataarctica.info/" target="_blamk">http://www.sonataarctica.info/</a>
                </p>
                
            </Jumbotron>
        </div>
    );
};

export default Jumbo;