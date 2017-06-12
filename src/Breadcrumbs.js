/**
 * Created by yiming on 2017/6/5.
 */
import React,{Component} from 'react'
import { Link } from 'react-router-dom';

const createBreadcrumb = ({
  staticRoutesMap = {},
  Breadcrumb = 'ul',
  BreadcrumbItem = 'li'
}) => ({ pathName }) => {
  let paths = pathName.split('/');
  const names = paths.map( path => {
    if(path === ''){
      return staticRoutesMap['/']
    }
    return staticRoutesMap[path]
  })
  const BreadcrumbItems = names.map( (name, index) => {
    return (
      <BreadcrumbItem key={index}>
        <Link to={name + ''}>{name}</Link>
        </BreadcrumbItem>
    )
  })

  // console.log(BreadcrumbItems)
  return (
    <Breadcrumb>
      {BreadcrumbItems}
    </Breadcrumb>
  )
}




export default createBreadcrumb