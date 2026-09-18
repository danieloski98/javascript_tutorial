interface IProps {
 value: string;
 onChange: (e: string) => void;
 handleClick: (e: string) => void;
}

function Input({ value, onChange, handleClick }: IProps) {
  return (
    <div style={{ width: '100%', height: '70px', overflow: 'hidden', display: 'flex', paddingTop: '20px', paddingBottom: '20px', gap: '10px', margin: 'auto' }}>
        <input value={value} onChange={(e) => onChange(e.target.value)} style={{ flex: 1, height: '100%', backgroundColor: 'lightgrey', borderWidth: '0px', paddingRight: '20px', paddingLeft: '20px', color: 'black' }} />
        <button onClick={() => handleClick(value)} style={{ width: '150px', height: '100%', backgroundColor: 'grey', color: 'black', borderWidth: '0px' }} >Add Item</button>
    </div>
  )
}

export default Input