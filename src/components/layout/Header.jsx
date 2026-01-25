import Container from "../common/Container";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <Container className="flex h-16 items-center justify-between">
        <a href="#/" className="flex items-center gap-2 font-bold text-gray-800">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-green-200 bg-green-50 text-xs">
            :)
          </span>
          chillgram
        </a>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-4 text-sm text-gray-700">
            <a className="hover:text-black" href="#features">
              프로젝트 생성
            </a>
            <a
              className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 px-3 text-xs font-semibold text-gray-700 transition hover:border-gray-300"
              href="#/qna"
            >
              Q&A
            </a>
          </nav>
          <a
            href="#/"
            className="inline-flex h-8 items-center justify-center rounded-md bg-green-500 px-4 text-xs font-semibold text-white transition hover:bg-green-600"
          >
            가입하기
          </a>
        </div>
      </Container>
    </header>
  );
}
