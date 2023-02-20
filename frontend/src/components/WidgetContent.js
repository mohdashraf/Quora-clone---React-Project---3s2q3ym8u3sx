import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://w7.pngwing.com/pngs/408/496/png-transparent-mobile-app-development-web-development-iphone-iphone.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>

      <div className="widget__content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2DfR-8LzweGEeYLVTO38xgaWXp2fzmOXow&usqp=CAU"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Trust Community</h5>
          <p>The trust Community is flaw flaw doing in there. </p>
        </div>
      </div>

       <div className="widget__content">
        <img
          src="http://clipart-library.com/images/rTLo947Lc.png"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Art!the new World</h5>
          <p>An artist is a person engaged in an activity related to creating art </p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;