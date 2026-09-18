import { Trash2 } from 'lucide-react';

interface IProps {
    text: string;
    index: number;
    handleDelete: (index: number) => void;
}

function ListItem({ text, index, handleDelete }: IProps) {
  return (
    <div style={{ width: '40%', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>{text}</p>
        <Trash2 onClick={() => handleDelete(index)} />
    </div>
  )
}

export default ListItem