'use client'

import {
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Breadcrumb,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'

import React from 'react'
import { useLocation } from 'react-router'

const Breadcrumbs = () => {
  const location = useLocation()
  const { pathname } = location

  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(Boolean)
    return pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const isLast = index === pathSegments.length - 1

      return (
        <React.Fragment key={href}>
          <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage>{segment}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {!isLast && <BreadcrumbSeparator />}
        </React.Fragment>
      )
    })
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>{generateBreadcrumbs()}</BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs
