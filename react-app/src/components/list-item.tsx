import { Trash2, Edit } from 'lucide-react';

interface IProps {
    text: string;
    index: number;
    handleDelete: (index: number) => void;
    editItem: (index: number) => void;
}

function ListItem({ text, index, handleDelete, editItem }: IProps) {
  return (
    <div style={{ width: '40%', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>{text}</p>
        <div>
        <Edit onClick={() => editItem(index)} />
        <Trash2 onClick={() => handleDelete(index)} />
        </div>
    </div>
  )
}

export default ListItem