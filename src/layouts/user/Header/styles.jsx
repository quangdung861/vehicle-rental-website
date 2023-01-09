import styled from "styled-components";

export const Wraper = styled.div`
  height: 60px;
  padding: 0px 10px;
  background-color: #141414;
`;

export const Login = styled.div({
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "#339966",
  },
});

export const Register = styled.div({
  color: "white",
  padding: "8px 12px",
  cursor: "pointer",
  "&:hover": {
    color: "#339966",
    border: "1px solid #339966"
  },
});