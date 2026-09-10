interface StatusBadgeProps {
  status?: string;
  variant?: string;
}

export default function StatusBadge({  status = "offline",  variant = "gray",}: StatusBadgeProps) {
  return (
    <span className={`badge badge-${variant}`}>
      {status}
    </span>
  );
}