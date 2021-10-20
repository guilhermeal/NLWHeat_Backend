import axios from "axios";
/**
 * Receber code(string)
 * Recuperar access_token no gitghub
 * Verificar se o usuario existe no DB
 * --> SIM : Gera um token (logado)
 * --> NAO : Cria ele no DB e gera um token
 * Retornar o token com as infos do usuário logado
 */

class AuthtenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENTE_ID,
                client_secret: process.env.GITHUB_CLIENTE_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data;
    }
}

export { AuthtenticateUserService }