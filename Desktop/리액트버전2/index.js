import Count from "./src/components/count.js";
import App from "./src/App.js";
import MemoSet from "./react/memo.js";
import initApp from "./react/initApp.js";

// 전역 클로저 실행
export const memoset = new MemoSet();
// 앱 등록해줘야 함
memoset.setModules([App, Count]);
// 렌더링
const root = document.getElementById("root");
initApp(App, root);
