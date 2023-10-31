import React from "react";
import { SwitchContainer, SwitchLabel } from "./customSwitchStyles";
const CustomSwitch = ({ activeTab, setActiveTab, tabLabels = [] }) => {
  return (
    <SwitchContainer>
      {tabLabels?.map((label, index) => (
        <SwitchLabel
          key={index}
          isActive={activeTab === label}
          onClick={() => setActiveTab(label)}
        >
          {label}
        </SwitchLabel>
      ))}
    </SwitchContainer>
  );
};

export default CustomSwitch;
