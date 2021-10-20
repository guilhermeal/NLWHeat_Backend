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
        
    }
}

export { AuthtenticateUserService }