interface TeamMemberCardProps {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function TeamMemberCard({  name,  role,  avatarUrl,}: TeamMemberCardProps) {
  return (
    <div className="team-member-card">
      <img
        src={avatarUrl}
        alt={name}
        className="avatar"
      />

      <div className="member-info">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}

