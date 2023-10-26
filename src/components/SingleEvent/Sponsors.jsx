import React from "react";
import {
  SectionTitle,
  SponsorPictureContainer,
  SponsorPicture,
  SponsorsGrid,
} from "../../containers/SingleEvent/singleEventStyles";

const Sponsors = ({ sponsors }) => {
  return (
    <>
      <SectionTitle>Patrocinadores</SectionTitle>
      <SponsorsGrid>
        {sponsors?.map((sponsor, index) => (
          <SponsorPictureContainer key={index}>
            <SponsorPicture src={sponsor?.picture} />
          </SponsorPictureContainer>
        ))}
      </SponsorsGrid>
    </>
  );
};

export default Sponsors;
