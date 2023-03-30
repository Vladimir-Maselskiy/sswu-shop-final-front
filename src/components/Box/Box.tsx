type TProps = {
  children: JSX.Element;
  className: string;
};

export const Box = ({ className, children }: TProps) => {
  return <div className={`${className}-box`}>{children}</div>;
};
