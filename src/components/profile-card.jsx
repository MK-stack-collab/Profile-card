export default function ProfileCard({ name, role, avatar, location, bio }) {
  return (
    <article className="card">
      <img className="card-avatar" src={avatar} alt={name} />
      <h2 className="card-name">{name}</h2>
      <p className="card-role">{role}</p>
      {location && <p className="card-location">{location}</p>}
      {bio && <p className="card-bio">{bio}</p>}
      <button type="button" className="card-btn">View profile</button>
    </article>
  );
}