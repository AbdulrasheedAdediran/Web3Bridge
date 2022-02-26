import React from "react";
import SettingCard from "../../../components/SettingCard/SettingCard";
import "../../../styles/setting/Setting.css";
import AddEmail from "../../../assets/Vector.svg";
import DelEmail from "../../../assets/Vector2.svg";
import DeActEmail from "../../../assets/Vector3.svg";
import EditProfile from "../../../assets/gg_profile.svg";

const Setting = () => {
  return (
    <div className="flex_setting">
      <SettingCard className="single_setting">
        <img src={AddEmail} alt="add-email" />
        <h4>Add Email</h4>
      </SettingCard>
      <SettingCard className="single_setting">
        <img src={DelEmail} alt="delete-email" />
        <h4>Delete Email</h4>
      </SettingCard>
      <SettingCard className="single_setting">
        <img src={DeActEmail} alt="deactivate-email" />

        <h4>Deactivate Email</h4>
      </SettingCard>
      <SettingCard className="single_setting">
        <img src={EditProfile} alt="edit-profile" />
        <h4>Edit Profile</h4>
      </SettingCard>
    </div>
  );
};

export default Setting;
