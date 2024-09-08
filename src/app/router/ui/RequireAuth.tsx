interface RequireAuthProps {
  children?: React.ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {

  // write auth handling here
 

  return <>{children}</>;
};
