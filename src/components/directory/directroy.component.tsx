import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { Section } from "../../models/section";

import "./directory.styles.scss";
import { from } from "rxjs";

interface IState {
  sections: Section[];
}

export default class Directory extends React.Component<any, IState> {
  state = {
    sections: [],
  };

  componentDidMount() {
    from(
      fetch("http://localhost:4200/sections").then((x) => x.json())
    ).subscribe((x: Section[]) => this.setState({ sections: x }));
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ title, imageUrl, id, size, linkUrl }: Section) => (
            <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
              linkUrl={linkUrl}
            />
          )
        )}
      </div>
    );
  }
}
