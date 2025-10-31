import { ElementType } from "react"
import Link from "next/link"

export interface MenuItemProps {
    icon: ElementType
    text: string
    url:string
 
}
 export default function MenuItem(props:MenuItemProps){
    return (
        <Link className="flex gap-2 px-4 py-2 hover:bg-black" href={props.url}>
            <props.icon  size={24} stroke = {1}/>
            <span>{props.text}</span>
        </Link>
    )
}