import React from "react";
import classes from "./About.module.css";
import { Fragment } from "react";
import Footer from "../../Navbar/Footer";
import Header from "../../Navbar/Header";

const About = () => {
    return (
        <Fragment>
            <Header />
            <div className={classes.head}>
                <h1>The Generics</h1>
            </div>
            <section>
                <div className={classes.about}>
                    <h2>About</h2>
                    <img
                        src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
                        alt=""
                    />
                    <p>
                        Lorem ipsum carrots enhanced rebates. Excellent sayings
                        of a man of sorrows, hates no prosecutors will unfold in
                        the enduring of which were born in it? Often leads
                        smallest mistake some pain main responsibilities are to
                        stand for the right builder of pleasure, accepted
                        explain up to now. , The things we are accusing of these
                        in the explication of the truth receives from the
                        flattery of her will never be the trouble and they are
                        refused to the pleasures and the pleasures of the pain,
                        explain the treatment of excepturi of the blessed
                        sufferings. I never said will unfold in him receives at
                        another time he may please the one that those works, we
                        are less than they, this refused to the pleasures of
                        deleniti? Those are! Will unfold in times of pleasure,
                        this pain will be a right enjoyed by corrupt, are
                        accusing him of all pleasures, and seek his own, or, to
                        the needs of the agony of the choice. We hate the
                        fellow.
                        <br />
                        Lorem ipsum dolor, sit amet consectetur rebates. The
                        distinction, that arise from or to. The greater,
                        therefore, an obstacle to the duties of the debts
                        receives the very great importance to us that these are
                        consequent to that question is answered, which was
                        selected for the fault, it is often one of us, however,
                        have any! Moreover, this is often not at once take the
                        hardships of the life of harsh condemn, we are accusing
                        him? Him whom something large cisterns.
                    </p>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
};

export default About;