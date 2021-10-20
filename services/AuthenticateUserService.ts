import axios from "axios";
/**
 * Receber code(string)
 * Recuperar access_token no gitghub
 * Recuperar Infos do User no gitghub
 * Verificar se o usuario existe no DB
 * --> SIM : Gera um token (logado)
 * --> NAO : Cria ele no DB e gera um token
 * Retornar o token com as infos do usuário logado
 */

interface IAccessTokenResponse {
    access_token: string,
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string,
}

class AuthtenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            },
        });

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data;
    }
}

export { AuthtenticateUserService }