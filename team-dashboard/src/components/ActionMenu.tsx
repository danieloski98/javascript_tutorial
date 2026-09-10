interface ActionMenuProps {
  userName: string;
  onPromote: () => void;
}

export default function ActionMenu({  userName,  onPromote,}: ActionMenuProps) {
  return (
    <button
      className="promote-button"onClick={onPromote}>Promote {userName}
      </button>
  );
}

