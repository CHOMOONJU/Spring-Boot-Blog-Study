import React from 'react'

const Main = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <main className='px-36'>
      {props.children}
    </main>
  )
}

export default Main
