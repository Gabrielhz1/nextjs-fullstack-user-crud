"use server"

import { PrismaClient } from "@prisma/client"
import Usuario from "../../app/core/model/Usuario"

const db:PrismaClient = new PrismaClient()

export async function salvar(usuario: Usuario) {
  return await db.usuario.upsert({
    where: { id: usuario.id },
    update: usuario,
    create: usuario,
  })
}

export async function buscarTodos() {
  return await db.usuario.findMany()
}

export async function obterPorId(id: string) {
  return await db.usuario.findUnique({
    where: { id }
  })
}