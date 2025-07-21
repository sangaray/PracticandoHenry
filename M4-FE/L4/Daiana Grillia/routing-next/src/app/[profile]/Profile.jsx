import React from "react";

const Profile = ({ params }) => {
  return (
    <div>
      <h1>Soy el profile: {params.profile}</h1>
    </div>
  );
};

export default Profile;
