import { useState } from 'react'

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function TeamMemberCard({ name, role, avatarUrl }: TeamMemberCardProps) {
  const [hover, sethover] = useState("green");

  function chngColor(color: string) {
    sethover(color);
  }
  
  return (
    <div className="team-member-card">
      <img
        src={avatarUrl}
        alt={name}
        className="avatar"
      />

      <div className="member-info" style={{ color: hover }} onMouseOver={() => chngColor("red")} onMouseOut={() => chngColor("green")}>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}
