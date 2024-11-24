import { create } from "zustand";

interface OpenModalState{
    openModal: StateModal,
    setOpenModal: (value:StateModal)=>void
};

interface StateModal{
    type:string,
    openModal:boolean
};

export const useOpenModalState = create<OpenModalState>((set)=>({
    openModal: {
        type: "",
        openModal:false
    },
    setOpenModal: (value)=>set(state=> ({...state, openModal:value}))
}));