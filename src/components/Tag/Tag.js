import React from "react";
import '../Tag/Tag.css';

/**
 * It takes in an object of tags, maps over them, and returns a span element for each tag.
 * @param tags - {object}
 * @returns An array of tags.
 */
const Tag = (tags) => {
  const allTags=tags.tag
  return (
    <div className="tagContainer">
    {allTags.map((tag,index) => (
      <span className="tag" key={index}>
        <p className="tagText" key={index}>{tag}</p>
      </span>
      )
    )}
    </div>
  );
};

export default Tag;