import { useGithub } from "@client/hooks/github";
import * as S from "./style";

const GithubPage = () => {
  const {  } = useGithub()
  return (
    <S.GithubPage>
      <h1>잠시만 기다려주세요</h1>
    </S.GithubPage>
  );
};

export default GithubPage;
