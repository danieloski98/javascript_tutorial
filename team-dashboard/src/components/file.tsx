export interface Imemberdetails { 
   id: number;
   name: string
   role: string
   avatarUrl: string
   status: string
   variant: string
}


export function getUserData(data: Imemberdetails) {
    return {
       name: data.name,
       role: data.role,
       avatarUrl: data.avatarUrl
    }
}

export function getUserRole(data: Imemberdetails) {
    return{
        role: data.role
    }
}



