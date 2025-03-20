"use client"
import { useState } from "react"
import Image from "next/image";
import MenuList from "./MenuList";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div onClick={handleOpen}>
                <Image src={"/images/barra-de-menu.png"} alt="Barra de Menú" width={48} height={48} />
            </div>
            <MenuList open={open} handleClose={handleClose} />
        </>
    )
}

export default Menu