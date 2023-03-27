type TProps = {
  children: JSX.Element;
  className: string;
  styles?: React.CSSProperties;
};

export const Container = ({ className, styles, children }: TProps) => {
  return (
    <div className={`${className}-section`}>
      <div className={`${className}-container`} style={styles}>
        {children}
      </div>
    </div>
  );
};
