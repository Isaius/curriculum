import './styles.scss'
interface avatarProps {
  imgURL: string
}

function Avatar({ imgURL }: avatarProps) {
  return (
    <div className="avatar">
      <img className="avatar-image" src={imgURL} alt="profile"/>
    </div>
  );
}

export default Avatar;
