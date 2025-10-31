'use client'
import Pagina from "@/app/components/template/Pagina"
import FormUsuario from "@/app/components/usuario/FormUsuario"
import ListaUsuario from "@/app/components/usuario/ListaUsuario"
import usuarios from "@/app/data/constants/usuarios"
import { useState } from "react"
import { Usuario } from "@/app/core/model/Usuario"

export default function Page() {
    const [usuario, setusuario] = useState<Usuario>(usuarios[0])
    function Salvar(){
        //Salvar no banco de Dados
    }

    return (
        <Pagina>
            {/* <ListaUsuario/> */}
            <FormUsuario 
            usuario={usuario} 
            onChange={setusuario}
            Salvar={()=>{}}
            Cancelar={()=>{}}
            />
        </Pagina>
        
    )
}