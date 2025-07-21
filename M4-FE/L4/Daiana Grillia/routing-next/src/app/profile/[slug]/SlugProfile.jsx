const Profile = ({ params }) => {
  return (
    <div>
      <h1>Soy el profile: {params.slug}</h1>
    </div>
  );
};

export default Profile;
