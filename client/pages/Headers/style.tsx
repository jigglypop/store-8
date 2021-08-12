export const styled = {
   div (strs: any, ...values: any) {
     const styles = strs[0].replace(/\n/gi, "").replace(/\s+/gi, "");
     return `<div style="${styles}"></div>`;
   }
}

const StyledDiv = styled.div`
   font-size : 1rem;
   color: red;
`
