import { user } from "../mockdata/user";

function Profile() {
  return (
    <main className="profile-page">
      <section className="profile-card">
        <div className="profile-avatar">
          <span>{user.name.charAt(0)}</span>
        </div>

        <h1>{user.name}</h1>

        <p className="profile-skill">Skill Level: {user.skillLevel}</p>
      </section>

      <section className="profile-details">
        <div className="profile-info">
          <h2>Contact Information</h2>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>

        <div className="profile-info">
          <h2>Preferred Sports</h2>

          <ul>
            {user.preferredSports.map((sport) => (
              <li key={sport}>{sport}</li>
            ))}
          </ul>
        </div>

        <div className="profile-info about-me">
          <h2>About Me</h2>

          <p>{user.aboutMe}</p>
        </div>

        <div className="profile-action">
          <button type="button">Settings</button>
          <button type="button">Logout</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
