import Link from "next/link"
import { IconHome, IconUser} from '@tabler/icons-react';
import MenuItem from './MenuItem';

export default function Menu(){
    return (
        <aside className="w-72 h-screen bg-zinc-900" >
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem icon={IconHome} text="Início" url="/"/>
                <MenuItem icon={IconUser} text=" Cadastro de Usuários" url="/usuarios"/>
            </nav>
        </aside>
    )
}