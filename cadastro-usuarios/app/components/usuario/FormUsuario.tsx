
import { Usuario } from "@/app/core/model/Usuario";
import InputTexto from "../InputTexto";

export interface FormUsuarioProps {
    usuario: Partial<Usuario>
    onChange:(usuario: Partial<Usuario>) => void
    Salvar:() => void
    Cancelar:() => void
}
export default function FormUsuario(props:FormUsuarioProps){
    return (
        <div className="flex flex-col p-2 gap-4">
            <InputTexto label="Nome" type="text" value={props.usuario.nome} onChange={(e)=>{
                props.onChange?.({...props.usuario, nome: e.target.value})        
            }}/>
            <InputTexto label="E-mail" type="email" value={props.usuario.email} onChange={(e)=>{
                props.onChange?.({...props.usuario, email: e.target.value})
            }}/>
            <InputTexto label="Senha" type="password" value={props.usuario.senha} onChange={(e)=>{
                props.onChange?.({...props.usuario, senha: e.target.value})
            }}/>
            <div className="flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md cursor-pointer"
                 onClick={props.Salvar}>Salvar</button>
                <button className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md cursor-pointer"onClick={props.Cancelar}>Cancelar</button>
            </div>

        </div>
    )
}