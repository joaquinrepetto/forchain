import React from "react";
import {
  SectionTitle,
  TagContainer,
  TagSpan,
} from "../../containers/SingleEvent/singleEventStyles";

const Tags = ({ tags }) => {
  return (
    <>
      <SectionTitle>Tags</SectionTitle>
      <TagContainer>
        {tags?.map((tag, index) => (
          <TagSpan key={index}>{tag}</TagSpan>
        ))}
      </TagContainer>
    </>
  );
};

export default Tags;
