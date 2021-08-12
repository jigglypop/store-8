import { useRegister } from "@client/hooks/register";
import AuthForm from "../../components/Auth/Auth";
import * as S from "./style";

const RegisterPage = () => {
  const { error, loading, onChange, onSubmit } = useRegister();
  return (
    <S.AuthPage>
      <AuthForm
        types={"register"}
        error={error}
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}/>
    </S.AuthPage>
  );
};

export default RegisterPage;
