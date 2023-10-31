// import React, { useState } from "react";
// import {
//   CustomSelectWrapper,
//   CustomSelectHeader,
//   CustomSelectList,
//   CustomSelectOption,
//   StyledLabel,
// } from "./selectFormStyles";

// const CustomSelect = ({ options, placeholder }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const toggling = () => setIsOpen(!isOpen);
//   const onOptionClicked = (value) => () => {
//     setSelectedOption(value);
//     setIsOpen(false);
//   };

//   return (
//     <CustomSelectWrapper>
//       <StyledLabel htmlFor="select">{placeholder}*</StyledLabel>
//       <CustomSelectHeader
//         tabIndex={0}
//         onClick={toggling}
//         onFocus={toggling}
//         onBlur={() => setIsOpen(false)}
//       >
//         {selectedOption || "Seleccionar..."}
//       </CustomSelectHeader>
//       {isOpen && (
//         <CustomSelectList>
//           {options.map((option) => (
//             <CustomSelectOption key={option} onClick={onOptionClicked(option)}>
//               {option}
//             </CustomSelectOption>
//           ))}
//         </CustomSelectList>
//       )}
//     </CustomSelectWrapper>
//   );
// };

// export default CustomSelect;
