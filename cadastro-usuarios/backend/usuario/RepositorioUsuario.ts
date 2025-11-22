"use server"
import { PrismaClient } from "@prisma/client";
import { Usuario } from "../../app/core/model/Usuario";


export default class RepositorioUsuario {
    private static db:PrismaClient = new PrismaClient()

  

    static async salvar(usuario:Usuario):Promise<Usuario>{
      return await  this.db.usuario.upsert({
        where: {id:usuario.id},
        update: usuario,
        create: usuario

      })
    }

    static async obterTodos(): Promise<Usuario[]>{
      return await  this.db.usuario.findmany()
    }

    static async obterPorId(id:string):Promise<Usuario>{
      return await  this.db.usuario.findUnique({where: {id}})
    }


}


