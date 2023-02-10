import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  // verificação do className do link
  // Se asPath for igual href então activeClassName senão nada
  const className = asPath === rest.href ? activeClassName : "";

  return (
    <Link legacyBehavior {...rest}>
      {cloneElement(children, {
        // clonei meu children e adicionei className (verificação)
        className,
      })}
    </Link>
  );
}
