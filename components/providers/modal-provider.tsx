"use client";

import { useEffect, useState } from "react";
import { SettingModal } from "../modal/settings-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted) {
        return null;
    }

    return(
        <>
            <SettingModal />
        </>
    )
}