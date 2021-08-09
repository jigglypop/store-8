import AuthForm from "../../components/Auth";
import * as S from "./style";

const Auth = () => {
  return (
    <S.Auth>
      <AuthForm types={"register"} />
    </S.Auth>
  );
};

export default Auth;
