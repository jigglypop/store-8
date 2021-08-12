import { useLogin } from "@client/hooks/login";
import AuthForm from "../../components/Auth/Auth";
import * as S from "./style";

const LoginPage = () => {
  const { error, loading, onChange, onSubmit } = useLogin();
  return (
    <S.AuthPage>
      <AuthForm
        types={"login"}
        error={error}
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}/>
    </S.AuthPage>
  );
};

export default LoginPage;
