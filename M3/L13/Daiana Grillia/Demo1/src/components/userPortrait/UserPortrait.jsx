import userIcon from "../../assets/UserIcon.png";
import userPicture from "../../assets/UserPicture.png";

export default function UserPortrait({ status }) {
  return (
    <div>
      {status ? (
        <img src={userPicture} alt="userPicture" className="icon" />
      ) : (
        <img src={userIcon} alt="userIcon" className="icon" />
      )}
    </div>
  );
}
