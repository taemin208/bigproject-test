import Container from "../common/Container";
import Button from "../common/Button";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <div className="flex h-8 w-24 items-center justify-center rounded-md bg-green-100 text-sm font-semibold text-gray-700">
            chillgram
          </div>
        </div>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-5 text-sm text-gray-700">
            <a className="hover:text-black" href="#features">
              프로젝트 생성
            </a>
            <a className="hover:text-black" href="#features">
              Q&A
            </a>
          </nav>
          <Button
            size="sm"
            className="bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
          >
            가입하기
          </Button>
        </div>
      </Container>
    </header>
  );
}
