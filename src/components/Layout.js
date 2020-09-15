/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import Main from './Main'

export default ({ children }) => {
  return (
    <Main>
      <Fragment>
        {children}
      </Fragment>
    </Main>
  )
}