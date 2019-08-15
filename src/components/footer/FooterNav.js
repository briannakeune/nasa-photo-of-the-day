import React from 'react';

export default function FooterNav() {
    return(
        <div className="footerNav">
            <p className="author">Author &amp; Editors: <a href={"https://www.mtu.edu/physics/department/faculty/nemiroff/"}>Robert J. Nemiroff</a> (<a href={"https://www.mtu.edu/physics/"}>MTU</a>) &amp; <a href={"https://apod.nasa.gov/htmltest/jbonnell/www/bonnell.html"}>Jerry Bonnell</a> (<a href={"http://www.astro.umd.edu/"}>UMCP</a>)</p>
            <p className="official">NASA Official: <a href={"https://apod.nasa.gov/apod/lib/about_apod.html#srapply"}>Specifics rights apply.</a></p>
            <p className="serviceOf">A service of: <a href={"https://science.gsfc.nasa.gov/astrophysics/"}>ASD</a> at  <a href={"https://www.nasa.gov/"}>NASA</a>/<a href={"https://www.nasa.gov/goddard"}>GSFC</a> &amp; <a href={"https://www.mtu.edu/"}>Michigan Tech. U.</a></p>
            <a href={"https://www.nasa.gov/about/highlights/HP_Privacy.html"} className="privacyPolicy">NASA WEB Privacy Policy</a>
        </div>
    )
}