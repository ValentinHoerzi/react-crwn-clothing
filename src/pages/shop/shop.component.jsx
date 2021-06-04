import React from "react";
import { from } from "rxjs";
import PreviewCollection from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  state = {
    collections: [],
  };

  componentDidMount() {
    from(fetch("http://localhost:4200/shops").then((x) => x.json())).subscribe(
      (x) => this.setState({ collections: x })
    );
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
