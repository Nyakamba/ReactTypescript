import { profile } from "console";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Enock" />;
  } else {
    return <Login />;
  }
};
