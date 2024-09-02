import React from 'react';
import interImg from '../../images/desktop/image-interactive.jpg'

const Interactive = () => {
    return (
        <div>
            <section className="interactive">
                <img
                    className="imgvr"
                    src={interImg}
                    alt=""
                />

                <div className="intText">
                    <h1>The leader in interactive VR</h1>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Interactive;