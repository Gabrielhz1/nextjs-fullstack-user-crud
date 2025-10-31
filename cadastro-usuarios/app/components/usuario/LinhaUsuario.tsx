import { Usuario } from "@/app/core/model/Usuario"
import Image from "next/image"
import {IconUser} from '@tabler/icons-react';

export interface LinhaUsuarioProps {
    usuario: Usuario
}

export default function LinhaUsuario(props:LinhaUsuarioProps){
    return(
        <div className="flex items-center p-4 gap-2 rounded-md bg-zinc-700 hover:bg-zinc-400 cursor-pointer">
            <IconUser width={50} height={50} stroke = {1}/>
            <div className="flex flex-col">
            <span>{props.usuario.nome}</span>
            <span className="text-sm text-zinc-300">{props.usuario.email}</span>
            </div>
        </div>
    )
}