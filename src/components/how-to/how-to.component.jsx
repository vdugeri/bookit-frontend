import React from "react";
import { Divider } from "../divider/divider.component";
import "./how-to.styles.scss";

export const HowTo = () => (
  <div className="how-to">
    <h2 className="how-to__heading">How to book a bus</h2>
    <Divider />
    <div className="how-to__step">
      <div className="how-to__image" />
      <div className="how-to__content">
        <div className="how-to__content--title">Title Step</div>
        <div className="how-to__content--paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nulla
          quam eos aperiam officiis odit eaque nam earum optio? Nesciunt iste
          libero, debitis est earum pariatur. Iste numquam similique reiciendis.
        </div>
      </div>
    </div>
    <div className="how-to__step">
      <div className="how-to__content">
        <div className="how-to__content--title">Title Step</div>
        <div className="how-to__content--paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nulla
          quam eos aperiam officiis odit eaque nam earum optio? Nesciunt iste
          libero, debitis est earum pariatur. Iste numquam similique reiciendis.
        </div>
      </div>
      <div className="how-to__image" />
    </div>
    <div className="how-to__step">
      <div className="how-to__image" />
      <div className="how-to__content">
        <div className="how-to__content--title">Title Step</div>
        <div className="how-to__content--paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nulla
          quam eos aperiam officiis odit eaque nam earum optio? Nesciunt iste
          libero, debitis est earum pariatur. Iste numquam similique reiciendis.
        </div>
      </div>
    </div>
  </div>
);
