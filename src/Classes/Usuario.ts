import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Usuario {
    static trocaSenha() {
        throw new Error("Method not implemented.");
    }
    static exibir() {
        throw new Error("Method not implemented.");
    }
    static listaUsuarios: Usuario[]=[];
    protected _cpf: string;
    protected endereco: string;
    protected static contadorID: number=1;
    protected id: number;
    protected _nome:string;
    protected _senha: string;
    protected verificaAdmin: boolean;

    constructor (nome: string, cpf: string, endereco: string, senha: string){
        this.id=Usuario.contadorID++
        this._nome=nome;
        this._senha=senha;
        this.verificaAdmin=false;
        this._cpf=cpf;
        this.endereco=endereco;

        const usuarioExistente = Usuario.listaUsuarios.find(
            (usuario) => usuario._nome === nome || usuario._cpf === cpf
        );
    
        if (usuarioExistente) {
            console.error("Nome de usuário ou CPF já cadastrado.");
        } else {
            Usuario.listaUsuarios.push(this);
            console.log("Usuário cadastrado com sucesso!");
        }
    }

    exibir (){
        return `Id: ${this.id}| Nome: ${this._nome} | CPF: ${this._cpf} | Endereço: ${this.endereco}`
    }

    get cpf (): string{
        return this._cpf
    }

    get senha (): string{
        return this._senha
    }

    set senha (novasenha: string){
        this._senha=novasenha
    }

    get nome (): string {
        return this._nome
    }

    set nome (novoNome: string){
        this._nome=novoNome
    }

    trocaSenha(){//aqui posso expandir colocando uma verificação pra indicar erro no usuario ou na senha // iria ser bem legal -Y
        const usuario= prompt (`Entre com o nome de usuário: `)
        const senha= prompt (`Senha: `)

        if (usuario==this._nome && senha==this._senha) {
            this._senha = prompt ("Nova senha: ")
            console.log ("Senha atualizada!")
        } else {
            console.log ("Usuário não encontrado ou senha incorreta.") 
        }
    }


    static listarUsuarios() {
        Usuario.listaUsuarios.forEach((usuario) => console.log(usuario.exibir()));
    }

    static consultarUsuario(criterio: string): Usuario | null {
        return (
            Usuario.listaUsuarios.find(
                (usuario) => usuario._nome === criterio || usuario.id.toString() === criterio
            ) || null
        );
    }
}

