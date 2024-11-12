"use client"
import React from 'react'
import { useContext } from 'react'
import { Auth } from './Middleware'
import { redirect } from 'next/dist/server/api-utils'

const Context = ({children}) => {
 const user = useContext(Auth)

  return (
    <div>{children}</div>
  )
}

export default Context
