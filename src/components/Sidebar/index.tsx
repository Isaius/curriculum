import { Avatar, PersonalData } from '../index';

import './styles.scss'

function Sidebar() {
  const data = {
    profilePicURL: "https://i.imgur.com/IKAnpvO.png"
  }

  return (
    <div className="sidebar">
      <Avatar imgURL={ data.profilePicURL }/>
      <PersonalData />
    </div>
  );
}

export default Sidebar;
