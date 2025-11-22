'use client'
import Pagina from "@/app/components/template/Pagina"
import FormUsuario from "@/app/components/usuario/FormUsuario"
import ListaUsuario from "@/app/components/usuario/ListaUsuario"
import usuarios from "@/app/data/constants/usuarios"
import { useState } from "react"
import { Usuario } from "@/app/core/model/Usuario"
import BackEnd from "@/backend"

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState< Partial <Usuario> | null>(usuarios[0])
    function salvar(){
        // if(!usuario) return
        // BackEnd.usuarios.salvarUsuario(usuario)
    }

    return (
        <Pagina>
            
            {usuario ? (
                    <FormUsuario 
                usuario={usuario} 
                onChange={setUsuario}
                Salvar={salvar}
                Cancelar={()=>setUsuario(null)}
            />)
            
            :   (<ListaUsuario onClick={setUsuario}/>)
                 
            }
            
        </Pagina>
        
    )
}