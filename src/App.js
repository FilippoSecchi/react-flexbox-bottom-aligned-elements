import React from "react";
import "./styles.css";
import { ReactComponent as FirstIcon } from "./assets/first.svg";
import { ReactComponent as SecondIcon } from "./assets/second.svg";
import { ReactComponent as ThirdIcon } from "./assets/third.svg";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/flexbox-bottom-aligned-elements
 */

export default function App() {
  return (
    <div className="container">
      <h2>Auto Margin Approach</h2>
      <div class="flexbox-wrapper automargin">
        <div class="item">
          <FirstIcon />
          <h3>First Item</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempor finibus dui, ultrices aliquet orci mollis at. Suspendisse
            imperdiet et neque ut faucibus. Praesent molestie a mauris sit amet
            efficitur. Maecenas ut commodo nibh.
          </p>
          <a href="/link">Learn More</a>
        </div>
        <div class="item">
          <SecondIcon />
          <h3>Second Item</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempor finibus dui, ultrices aliquet orci mollis at. Suspendisse
            imperdiet et neque ut faucibus.
          </p>
          <a href="/link">Learn More</a>
        </div>
        <div class="item">
          <ThirdIcon />
          <h3>Third Item</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempor finibus dui.
          </p>
          <a href="/link">Learn More</a>
        </div>
      </div>
      <h2>Align-Self Approach</h2>
      <div class="flexbox-wrapper alignself">
        <div class="item">
          <div>
            <FirstIcon />
            <h3>First Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              tempor finibus dui, ultrices aliquet orci mollis at. Suspendisse
              imperdiet et neque ut faucibus. Praesent molestie a mauris sit
              amet efficitur. Maecenas ut commodo nibh.
            </p>
          </div>
          <a href="/link">Learn More</a>
        </div>
        <div class="item">
          <div>
            <SecondIcon />
            <h3>Second Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              tempor finibus dui, ultrices aliquet orci mollis at. Suspendisse
              imperdiet et neque ut faucibus.
            </p>
          </div>
          <a href="/link">Learn More</a>
        </div>
        <div class="item">
          <div>
            <ThirdIcon />
            <h3>Third Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              tempor finibus dui.
            </p>
          </div>
          <a href="/link">Learn More</a>
        </div>
      </div>
    </div>
  );
}
