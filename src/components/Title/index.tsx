import React, { ReactNode } from 'react';
import './styles.scss'

type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
type HeadingProps = React.HTMLAttributes<HTMLHeadElement>;
type TitleProps = {
  level?: TitleLevel
  children: ReactNode
  color: string
} & HeadingProps;

const TITLE_ELEMENTS: Record<TitleLevel, (props: HeadingProps, children: ReactNode) => React.ReactElement> = {
  h1: (props, children) => <h1 { ...props }>{children}</h1>,
  h2: (props, children) => <h2 { ...props }>{children}</h2>,
  h3: (props, children) => <h3 { ...props }>{children}</h3>,
  h4: (props, children) => <h4 { ...props }>{children}</h4>,
  h5: (props, children) => <h5 { ...props }>{children}</h5>
}

function Title({ children, color, level = 'h2', ...props }: TitleProps) {
  const className = `title ${color} ${props.className}`;

  return TITLE_ELEMENTS[level]({...props, className}, children )
}

export default Title;
