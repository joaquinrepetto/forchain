import React from "react";
import {
  SectionTitle,
  SpeakersUl,
  SpeakerLi,
  SpeakerIcon,
} from "../../containers/SingleEvent/singleEventStyles";
import StarIcon from "../../assets/imgs/star-icon.png";

const Speakers = ({ speakers }) => {
  return (
    <>
      <SectionTitle>Lista de speakers</SectionTitle>
      <SpeakersUl>
        {speakers?.map((speaker, index) => (
          <SpeakerLi key={index}>
            <SpeakerIcon src={StarIcon} alt="Speaker icon" />
            {speaker.name} - {speaker.position}
          </SpeakerLi>
        ))}
      </SpeakersUl>
    </>
  );
};

export default Speakers;
