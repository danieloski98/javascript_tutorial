interface IProps {
    text: string;
}

const header = ({ text }: IProps) => {
  return (
    <div style={{ width: '100%', height: '50px', backgroundColor: '#1f2028', paddingTop: '20px', paddingLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
        <p style={{ fontFamily: '-apple-system', fontSize: '16px', fontWeight: 'bold', color: 'whitesmoke'}}>{text}</p>
    </div>
  )
}

export default header