interface IProp {
    label: string;
    value: string;
    onChange: (e: string) => void;
}

function DatePicker({ label, value, onChange}: IProp) {
  return (
    <div className="flex-col flex gap-2">
        <p className="text-xs font-normal text-gray-600">{label}</p>
        <input type='datetime-local' value={value} onChange={(e) => onChange(e.target.value)} className="w-full h-10 rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-600" />
    </div>
  )
}

export default DatePicker