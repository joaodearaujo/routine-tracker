import { createPortal } from "react-dom";

export function Modal({ children }: {children: React.ReactNode}) {
    return createPortal(
        <div className="absolute inset-0 w-full h-screen flex items-center justify-center bg-black/40">
            {children}
        </div>,
        document.body
    )
}