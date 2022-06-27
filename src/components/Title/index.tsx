import { ReactNode } from 'react';
import './styles.scss'

interface titleProps {
  children: ReactNode
  color: string
}

function Title({ children, color }: titleProps) {
  return (
    <div className={`title ${color}`}>
      {children}
    </div>
  );
}

export default Title;
