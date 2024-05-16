interface Props {
  className?: string;
}

export function Loading({ className }: Props) {
  return <div className={className}>Loading...</div>;
}
