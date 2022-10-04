import * as Second from "../../../styles/main/chart.style";
import * as _ from "../../../styles/main/introduce";
import { StickLogo } from "../chart/Logo";

function Introduce() {
  return (
    <Second.Container bgColor="#FFFFFF">
      <Second.Title>What is EntryDSM</Second.Title>
      <StickLogo />
      <_.BoxContainer>
        <_.Box>
          <CalendarIcon />
          <Second.Title size="18px">입학전형 일정 안내</Second.Title>
          <_.Text readOnly>
            입학전형시스템에 로그인 하시면 학교 홈페이지에 접속할 필요 없이
            다가오는 일정을 손쉽게 확인하실 수 있습니다.
          </_.Text>
        </_.Box>
        <_.Box>
          <EyeIcon />
          <Second.Title size="18px">사용자 친화적 UI</Second.Title>
          <_.Text readOnly>
            학생들의 의견을 수렴하여 구성된 사용자 친화적 UI를 제공하므로 원서
            제출 및 전형료 납부를 쉽고 간편하게 진행할 수 있습니다.
          </_.Text>
        </_.Box>
        <_.Box>
          <CompouterIcon />
          <Second.Title size="18px">강력한 보안</Second.Title>
          <_.Text readOnly>
            해외 IP 차단, DDOS 대응 등 보안성 강화에 총력을 다해 여러분께
            안정적으로 서비스를 제공할 수 있도록 노력하겠습니다.
          </_.Text>
        </_.Box>
      </_.BoxContainer>
    </Second.Container>
  );
}
/**
 * Icon
 */
function CalendarIcon() {
  return (
    <svg
      width="50"
      height="100"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="#FFEBEC" />
      <path
        d="M35.1111 13.8H33.6667V11H30.7778V13.8H19.2222V11H16.3333V13.8H14.8889C13.2856 13.8 12.0144 15.06 12.0144 16.6L12 36.2C12 37.74 13.2856 39 14.8889 39H35.1111C36.7 39 38 37.74 38 36.2V16.6C38 15.06 36.7 13.8 35.1111 13.8ZM35.1111 36.2H14.8889V20.8H35.1111V36.2ZM17.7778 23.6H25V30.6H17.7778V23.6Z"
        fill="#FF9B9F"
      />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg
      width="50"
      height="100"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="#FFEBEC" />
      <path
        d="M25 15C18.1818 15 12.3591 19.1467 10 25C12.3591 30.8533 18.1818 35 25 35C31.8182 35 37.6409 30.8533 40 25C37.6409 19.1467 31.8182 15 25 15ZM25 31.6667C21.2364 31.6667 18.1818 28.68 18.1818 25C18.1818 21.32 21.2364 18.3333 25 18.3333C28.7636 18.3333 31.8182 21.32 31.8182 25C31.8182 28.68 28.7636 31.6667 25 31.6667ZM25 21C22.7364 21 20.9091 22.7867 20.9091 25C20.9091 27.2133 22.7364 29 25 29C27.2636 29 29.0909 27.2133 29.0909 25C29.0909 22.7867 27.2636 21 25 21Z"
        fill="#FF9B9F"
      />
    </svg>
  );
}
function CompouterIcon() {
  return (
    <svg
      width="50"
      height="100"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="#FFEBEC" />
      <path
        d="M35.6364 13H14.3636C13.0636 13 12 14.08 12 15.4V29.8C12 31.12 13.0636 32.2 14.3636 32.2H22.6364L20.2727 35.8V37H29.7273V35.8L27.3636 32.2H35.6364C36.9364 32.2 38 31.12 38 29.8V15.4C38 14.08 36.9364 13 35.6364 13ZM35.6364 27.4H14.3636V15.4H35.6364V27.4Z"
        fill="#FF9B9F"
      />
    </svg>
  );
}
export default Introduce;
