interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <main className="px-4 md:px-16 lg:px-32 pt-[80px]">{children}</main>;
}
