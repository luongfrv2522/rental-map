import React from "react";

type HeaderProps = {
  logo: React.ReactNode,
  actions: React.ReactNode,
}
export default function Header(props: HeaderProps)  {
  return (
    <header>
      {props.logo}
      {props.actions}
    </header>
  )
}