import { FC, ReactNode } from "react";

export const Header:FC<{children:ReactNode}> = ({children}) => {
  return (
    <header className="w-full flex justify-center items-center h-12 border-b border-mauve-6 font-bold text-xl leading-0">
      {children}
    </header>
  )
}