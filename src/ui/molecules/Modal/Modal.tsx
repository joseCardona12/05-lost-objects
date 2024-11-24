"use client";
import { useOpenModalState } from "@/app/core/application/global-state";
import "./modalStyles.scss";

interface IModal{
    header?:React.ReactNode,
    body:React.ReactNode,
    footer?: React.ReactNode,
}
export default function Modal({
    header,
    body,
    footer
}:IModal):React.ReactNode{
    const { setOpenModal} = useOpenModalState((state)=>state);

    const handleClick = ():void =>{
        setOpenModal({
            openModal: false,
            type: ""
        })
    }
    return(
        <div className="modal" onClick={handleClick}>
            <div className="modal-header">
                {header}
            </div>
            <div className="modal-body">
                {body}
            </div>
            <div className="modal-footer">
                {footer}
            </div>
        </div>
    )
}