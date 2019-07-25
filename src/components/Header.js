import React from "react";
import styled from "styled-components";
import { Button } from "./styled/Button";
import GitHubButton from "react-github-btn";
const logo = require("../logo/overvue-logo.png");

export const Header = () => {
  return (
    <div className="header">
      <div id="name">
        <img id="logo" src={logo} />
        <br />
        OverVue
      </div>
      <div>
        <p className="lowerText">
          All in one prototyping tool for Vue developers
        </p>
      </div>
      <br />
      <div>
        <GitHubButton
          className={"githubbtn"}
          href="https://github.com/TeamOverVue/OverVuePage"
          data-icon="octicon-star"
          aria-label="Star ntkme/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
        <p className="lowerText">Star us on GitHub!</p>

        <Button
          className={"button"}
          href="https://overvue-app.s3-us-west-2.amazonaws.com/OverVue-0.0.1.dmg"
        >
          Download for MacOS
        </Button>
      </div>
    </div>
  );
};
