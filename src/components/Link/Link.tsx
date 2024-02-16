import clsx from 'clsx';
import { ComponentProps } from 'react';
import { link } from './Link.css';

export type AProps = ComponentProps<'a'>;

export default function A({ children, href, className, ...rest }: AProps) {
  const isExternal = href?.startsWith('http');

  const target = isExternal ? '_blank' : '_self';
  const rel = isExternal ? 'noreferrer nofollow' : undefined;

  return (
    <a className={clsx(link, className)} rel={rel} href={href} target={target} {...rest}>
      {children}
    </a>
  );
}
