import { createPortal } from "react-dom";

export function Modal({ children }: {children: React.ReactNode}) {
    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            {children}
        </div>,
        document.body
    )
}