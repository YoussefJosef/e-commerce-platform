import React from "react";
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {[...items]
        .filter((item,index) => index < 4)
        //.slice(0, 4)
        .map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {};

export default CollectionPreview;
