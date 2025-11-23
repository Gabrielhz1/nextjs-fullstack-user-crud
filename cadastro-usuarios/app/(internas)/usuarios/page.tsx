'use client'
import Pagina from "@/app/components/template/Pagina"
import FormUsuario from "@/app/components/usuario/FormUsuario"
import ListaUsuario from "@/app/components/usuario/ListaUsuario"

import { useEffect, useState } from "react"
import Usuario from "@/app/core/model/Usuario"

import Backend from "@/backend/index"
import { IconPlus } from "@tabler/icons-react"

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null)

    useEffect(()=>{
        Backend.users.obterTodos().then(setUsuarios)
            },[])

    async function salvar() {
        if (!usuario) return
        await Backend.users.salvarUsuario(usuario)
    }

    return (
        <Pagina>



            {usuario ? (
                <FormUsuario
                    usuario={usuario}
                    onChange={setUsuario}
                    Salvar={salvar}
                    Cancelar={() => setUsuario(null)}
                />)

                : <>
                    <div className="flex justify-end px-5 py-5">
                        <button className="flex gap-2 items-center py-2 px-4 rounded-md bg-blue-500 cursor-pointer" onClick={() => setUsuario({})}>
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>

                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={setUsuario} />
                </>

            }


        </Pagina>

    )
}