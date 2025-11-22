"use server"
import salvarUsuario from './usuario/salvarUsuario'
import obterTodos from './usuario/obterTodos'


// Padrão Facade
export default class Backend {
    static readonly usuarios = {
         salvarUsuario,
         obterTodos,
         
    }
}