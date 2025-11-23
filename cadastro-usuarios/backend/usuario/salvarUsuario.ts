'use server'

import  Usuario  from "../../app/core/model/Usuario";
import Id from "../../app/core/utils/id";
import {salvar} from "./RepositorioUsuario";

export default async function  salvarUsuario(usuario:Partial<Usuario>) {
    const novoUsuario = {
        ...usuario,
        id:usuario.id ?? Id.novo,
    }
    salvar(novoUsuario as Usuario)

}