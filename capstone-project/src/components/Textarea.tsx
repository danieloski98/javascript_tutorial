interface IProp {
    label: string;
    value: string;
    onChange: (e: string) => void;
}

function Textarea({ label, value, onChange}: IProp) {
  
  function setDescription(value: string): void {
    onChange(value);
  }

  return (
    <div className="flex-col flex gap-2">
        <p className="text-xs font-normal text-gray-600">{label}</p>
        <textarea value={value} onChange={(e) => setDescription(e.target.value)} className="w-full h-28 rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-600" />
    </div>
  )
}

export default Textarea