"use server"

import {buscarTodos} from "./RepositorioUsuario";

export default async function  obterTodos() {
   
 return buscarTodos()

}