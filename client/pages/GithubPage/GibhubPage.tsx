import { useGithub } from "@client/hooks/github";
import * as S from "./style";

const GibhubPage = () => {
  const {  } = useGithub()
  return (
    <S.GibhubPage>
      <h1>잠시만 기다려주세요</h1>
    </S.GibhubPage>
  );
};

export default GibhubPage;
