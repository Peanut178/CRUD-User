import React from "react";
import 'font-awesome/css/font-awesome.min.css';

import './home.css';
const HomeComponent = () => {
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <div className="btn py-2">Hệ thống </div>
            <div className="icon px-3"><i className="fa fa-sign-out" aria-hidden="true"></i>
           </div>
        </div>
    )
}
export default HomeComponent