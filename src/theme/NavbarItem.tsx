import OriginalNavBarItem from '@theme-original/NavbarItem'
import React from 'react'

export default function NavbarItem(props: { className: string; label: string }) {
  return <OriginalNavBarItem {...props} className={props.className} />
}
