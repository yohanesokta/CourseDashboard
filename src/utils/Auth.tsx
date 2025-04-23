import { jwtDecode } from "jwt-decode";
import { useLoaderData } from "react-router";

export interface AuthToken {
    token: string;
}

interface AuthTokenDecoded {
    createAt: string;
    iat: number
    role: string;
    token_create: number
    updateAt: string;
    user_email: string
    user_picture: string
    username: string
}

export async function queryAuthAccepter  (): Promise<{ token:  string |AuthTokenDecoded }> {
    const params = new URLSearchParams(window.location.search);
    const authToken = params.get('code');
    if (authToken) {
        localStorage.setItem('authToken', authToken);
        const decodedToken : AuthTokenDecoded = jwtDecode(authToken);
        console.log('Decoded Token:', decodedToken);
        return {
            token : decodedToken
        }
    } else {
        window.location.href ="/error"
        return {
            token  : "" // or handle the case when no token is present
        }
    }
}

export function AuthComponent() {
    let data : {token : string | AuthTokenDecoded} = useLoaderData();
    return (<>
        <h1>Auth Component</h1>
        <p>Check the console for decoded token.</p>
        {data.token && typeof data.token !== 'string' ? (
            <div>
                <p>Username: {data.token.username}</p> 
                <p>Email: {data.token.user_email}</p>
                <p>Role: {data.token.role}</p>
                <p>Created At: {data.token.createAt}</p>
                <p>Updated At: {data.token.updateAt}</p>
                <p>Token Created At: {data.token.token_create}</p>
                <p>Token IAT: {data.token.iat}</p>
            </div>

        ) : ""}
        <p>Token: {localStorage.getItem('authToken')}</p>
    </>)
}