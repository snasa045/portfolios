import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
};

export default function Button({ children, href, variant = 'primary', onClick }: ButtonProps) {
  const className = `btn btn-${variant}`;
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  );
}
