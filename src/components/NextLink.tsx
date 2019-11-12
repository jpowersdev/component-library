import NextLink from "next/link";
import { Link as StyledLink } from "rebass";

const Link = ({ mask, href, ...props }: any) => (
  <NextLink href={href} as={mask}>
    <StyledLink {...props} />
  </NextLink>
);

export { Link };
