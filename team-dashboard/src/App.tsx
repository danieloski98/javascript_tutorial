import TeamMemberCard from "./components/TeamMemberCard";
import StatusBadge from "./components/StatusBadge";
import ActionMenu from "./components/ActionMenu";
import DashboardWidget from "./components/DashboardWidget";
import "./App.css";

export default function App() {
  const teamMembers = [
    {
      id: 1,
      name: "John Miller",
      role: "Frontend Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      status: "online",
      variant: "green",
    },
    {
      id: 2,
      name: "Serena Williams",
      role: "UI/UX Designer",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      status: "busy",
      variant: "orange",
    },
    {
      id: 3,
      name: "Mike Tyson",
      role: "Backend Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      status: "offline",
      variant: "gray",
    },
  ];

  function promoteUser(userName: string) {
    window.alert(`Promoting ${userName}!`);
  }

  return (
    <div className="app">
      <h1>Team Dashboard</h1>

      <p className="subtitle">
        Manage your team members
      </p>

      <div className="table-header">
        <div>TEAM MEMBER</div>
        <div>STATUS</div>
        <div>ACTION</div>
      </div>

      {teamMembers.map((member) => (
        <DashboardWidget key={member.id}>
          <TeamMemberCard
            name={member.name}
            role={member.role}
            avatarUrl={member.avatarUrl}
          />

          <StatusBadge
            status={member.status}
            variant={member.variant}
          />

          <ActionMenu
            userName={member.name}
            onPromote={() => promoteUser(member.name)}
          />
        </DashboardWidget>
      ))}
    </div>
  );
}