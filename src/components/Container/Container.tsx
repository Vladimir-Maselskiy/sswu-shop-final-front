import './Container.scss';

type TProps = {
  children: JSX.Element;
  className: string;
};

export const Container = ({ className, children }: TProps) => {
  return <div className={className}>{children}</div>;
};
