import Avatar from '../Avatar';
import PersonalData from '../PersonalData';

import './styles.scss'

function Sidebar() {
  return (
    <div className="sidebar">
      <Avatar />
      <PersonalData />
    </div>
  );
}

export default Sidebar;
