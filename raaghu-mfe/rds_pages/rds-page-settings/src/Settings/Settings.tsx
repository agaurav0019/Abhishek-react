import React, { useState } from "react";
import {
  RdsButton,
  RdsFabMenu,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../../../raaghu-elements/src/index";
import {
  RdsCompUserManagement,
  RdsCompOtherSettings,
  RdsCompTenantManagement,
  RdsCompEmail,
  RdsCompInvoice,
} from "../../../rds-components";
interface RdsCompSettingsProps {}
const navtabsItems = [
    { label: "Tenant Management", tablink: "#nav-home", id: 0 },
    { label: "User Management", tablink: "#nav-profile", id: 1 },
    { label: "Email(SMTP)", tablink: "#nav-profile", id: 2 },
    { label: "Invoice", tablink: "#nav-profile", id: 3 },
    { label: "Other Settings", tablink: "#nav-profile", id: 4 },
  ];
  const userManagementSettings = [
    {
      "id": 1,
      "label": "Email Confirmation Required For Login.",
      "checked": false, 
    },
    {
      "id": 2,
      "label": "Phone Number Verification Enabled (Via SMS)",
      "checked": false,
    },
    {
      "id": 3,
      "label": "Use Security Image Question (Captcha) On Login.",
      "checked": false,
    },
    {
      "id": 4,
      title:"Cookie Consent",
      "label":  "Cookie Consent Enabled",
      "checked": false,
    },
    {
      "id": 5,
      title:"Session TimeOut Control",
      "label":  "Session Time Out Control Enabled",
      "checked": false,
    },
    {
        "id": 6,
        title:"Profile",
        "label": "Allow Using to use Gravatar Profile Picture",
        "checked": false,
      },
 
  
]

const Settings = (props: RdsCompSettingsProps) => {
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const editionDropdownListItems = [
    {
    label: "Standard",
    val: "en",
    },
    {
      label: "Basic",
      val: "en",
    },
    {
      label: "Premium",
      val: "en",
    },
    {
      label: "Professional",
      val: "en",
    },
]
  return (
    <div className="tenant">
      <div className="d-flex justify-content-end">
        <RdsButton
          // icon="plus"
          // iconColorVariant="light"
          size="small"
          type="button"
          colorVariant="primary"
          label="SAVE ALL"
        />
      </div>

      <RdsNavtabs
        navtabsItems={navtabsItems}
        type="tabs"
		activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId);
          }}
      />
      {activeNavTabId == 0 && (
        <RdsCompTenantManagement settingsTenantEditionList={[]} allowSelfRegistration = {true} useCaptchaOnRegistration = {true} isNewRegisteredTenantActiveByDefault = {false}
        />
      )}
      {activeNavTabId == 1 && (
        <RdsCompUserManagement Usermanagementsettings={userManagementSettings}/>
      )}
       {activeNavTabId == 2 && (
        <RdsCompEmail/>
      )}
       {activeNavTabId == 3 && (
        <RdsCompInvoice/>
      )}
       {activeNavTabId == 4 && (
        <RdsCompOtherSettings/>
      )}
    </div>
  );
};

export default Settings;
