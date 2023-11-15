import styled from "styled-components";
import theme from "../../theme";

// ------------ Information

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;
`;

export const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ButtonsQrsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 35%;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`;

// ------------ MyEvents

export const MyEventsContainer = styled.div``;

export const EventLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EventLine = styled.div`
  width: 80%;
  height: 0.5px;
  background-color: ${theme.colors.border};
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContainerActionButton = styled.div`
  background-color: ${(props) => props.bgcolor || "defaultColor"};
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const MyEventsIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContainerBtns = styled.div``;

// ------------ CreateEvent

export const CreateEventContainer = styled.div`
  margin-top: 20px;
`;

export const CreateEventForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionForm = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

export const SectionFormTitle = styled.h3`
  font-size: 22px;
  color: ${theme.colors.titleText};
  font-family: "Codec Pro", sans-serif;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const SectionFormTitleTags = styled.h3`
  font-size: 22px;
  color: ${theme.colors.titleText};
  font-family: "Codec Pro", sans-serif;
  margin-bottom: 0px;
  margin-top: 10px;
`;

export const FormText = styled.p`
  font-size: 12px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
`;

export const FormTextTags = styled.p`
  font-size: 12px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const ShowTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
`;

export const StyledCheckbox = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background: transparent;
  border: 2px solid ${theme.colors.white};
  border-radius: 4px;
  cursor: pointer;

  ${HiddenCheckbox}:checked + & {
    background: ${theme.colors.purpleBorder};
    border: 2px solid ${theme.colors.white};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContainerTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  border: 1px solid ${theme.colors.white};
  border-radius: 10px;
  width: auto;
`;

export const TagList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

export const Tag = styled.div`
  padding: 5px 20px;
  background-color: ${theme.colors.white};
  border-radius: 15px;
  display: flex;
  align-items: center;
  color: ${theme.colors.darkBlue};
  span {
    cursor: pointer;
  }
  font-family: "Poppins", sans-serif;
  font-size: 9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const InputTag = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${theme.colors.white};
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  flex: 1;
  &:placeholder {
    color: ${theme.colors.white};
  }
  grid-column: 1 / -1;
  margin-top: 5px;
`;

export const TagContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 0;
  cursor: pointer;
  padding-right: 10px;
`;

export const SpanText = styled.span`
  font-size: 12px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  margin: 0;
  position: relative;
  bottom: 10px;
  left: 5px;
`;

export const SpanTextModal = styled.span`
  font-size: 12px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  margin: 0;
  position: relative;
  bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const ContainerTitleArrow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const IconArrow = styled.img`
  width: 20px;
  height: 20px;
`;

export const IconArrowHidden = styled.img`
  width: 20px;
  height: 20px;
  visibility: hidden;
`;

export const ContainerInputFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.titleText};
  border-radius: 22px;
  padding: 10px;
  flex-direction: column;
`;

export const FileIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const TitleFile = styled.h2`
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  color: ${theme.colors.titleText};
`;

export const SubtitleFile = styled.p`
  font-size: 11px;
  color: ${theme.colors.subtitleFile};
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const ContainerSubtitleFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ButtonFile = styled.button`
  border: none;
  border: 1px solid ${theme.colors.titleText};
  border-radius: 22px;
  padding: 15px 40px;
  cursor: pointer;
  font-size: 12px;
  color: ${theme.colors.titleText};
  background-color: transparent;
  font-family: "Codec Pro", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonAgenda = styled.button`
  border: none;
  border: 1px solid ${theme.colors.titleText};
  border-radius: 22px;
  padding: 20px 40px;
  cursor: pointer;
  font-size: 13px;
  color: ${theme.colors.titleText};
  background-color: transparent;
  font-family: "Codec Pro", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${theme.colors.white};
  background-color: transparent;
  border-radius: 12px;
  padding: 10px;
  color: ${theme.colors.nameText};
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  height: 133px;
  resize: none;
  outline: none;
  font-weight: bold;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SpanTextArea = styled.span`
  font-size: 12px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  text-align: end;
  margin-top: 10px;
`;

export const ContainerAgendaForm = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const StyledInput = styled(({ ...rest }) => <input {...rest} />)`
  font-size: 16px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.darkBlue};
  border-radius: 4px;
  outline: none;
  background: none;
  width: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: ${theme.colors.purpleBorder};
  }
`;

export const StyledTextArea = styled(({ ...rest }) => <textarea {...rest} />)`
  font-size: 16px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.darkBlue};
  border-radius: 4px;
  outline: none;
  background: none;
  width: 100%;
  padding: 5px 15px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  resize: none;
  &:focus {
    border-color: ${theme.colors.purpleBorder};
  }
`;

export const ContainerDeleteEntry = styled.div`
  display: flex;
`;

export const DeleteText = styled.span`
  font-size: 13px;
  color: ${theme.colors.red};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

export const ComunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 160px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 500;
`;

export const ComunityTitle = styled.h1`
  font-size: 25px;
  text-align: center;
`;

export const ComunityTitleContainer = styled.div`
  display: flex;
`;
export const ComunitySubtitle = styled.h4`
  font-size: 12px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: ${theme.colors.purpleBorder};
`;
export const ComunitySubtitleContainer = styled.div`
  display: flex;
  width: 296px;
`;
export const QRContainer = styled.div`
  display: flex;
  width: 308px;
  height: 300px;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.border};
  margin-top: 12px;
`;
export const QRSubContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.white};
  align-items: center;
  height: 262px;
  width: 270px;
  border-radius: 40px;
  :hover {
    scale: 1.5;
  }
`;

export const SecondSubtitleContainer = styled.div`
  display: flex;
  padding: 0px 12px;
`;
export const SecondSubtitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

export const MyComuinityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MyComunityListTitle = styled.h2``;
export const MyComunityItem = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  height: 2rem;
  width: 100%;
  margin: 3px;
`;

export const QrScannModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  background-color: rgba(39, 39, 39, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: -20px;
  margin-right: -20px;
  top: 0;
`;

export const QrReaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
`;
