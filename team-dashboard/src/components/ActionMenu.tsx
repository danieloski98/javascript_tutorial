import { getUserData, getUserRole, type Imemberdetails } from "./file";
import { useState } from 'react'


 interface ActionMenuProps {
  memberdetails: Imemberdetails
  onPromote: () => void;
}

export default function ActionMenu({  memberdetails,  onPromote,}: ActionMenuProps) {
  const [initl, setInitl] = useState(memberdetails.name)
  const [color, setColor] = useState("blue")
console.log (getUserData(memberdetails))
console.log(getUserRole(memberdetails))
function promoteUser () {
  setInitl(memberdetails.role);
  setColor("red")
}


  return (
    <button
      className="promote-button" style={{ backgroundColor: color}} onClick={promoteUser}>Promote {initl}
      </button>
  );
}

