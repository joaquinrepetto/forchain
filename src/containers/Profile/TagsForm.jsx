import React from "react";
import {
  CloseButton,
  ContainerTags,
  FormTextTags,
  InputTag,
  SectionForm,
  SectionFormTitleTags,
  Tag,
  TagContainer,
  TagList,
  SpanText,
} from "./profileStyles";
import CloseIcon from "../../assets/imgs/CloseIcon.svg";

const TagsForm = ({
  tags,
  inputValue,
  setInputValue,
  handleAddTag,
  handleRemoveTag,
  FormatTag,
}) => {
  return (
    <SectionForm>
      <SectionFormTitleTags>Etiquetas</SectionFormTitleTags>
      <FormTextTags>
        Mejora la visibilidad de tu evento agregando etiquetas sobre el tema.
      </FormTextTags>
      <ContainerTags>
        <TagList>
          {tags?.map((tag, index) => (
            <TagContainer key={index}>
              <Tag>
                #{FormatTag(tag)}
                <CloseButton
                  onClick={() => handleRemoveTag(tag)}
                  src={CloseIcon}
                />
              </Tag>
            </TagContainer>
          ))}
        </TagList>
        <InputTag
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTag}
          disabled={tags?.length >= 10}
        />
      </ContainerTags>
      <SpanText>{tags?.length}/10</SpanText>
    </SectionForm>
  );
};

export default TagsForm;
