import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black bg-black">
      <Container className="py-10 text-sm text-gray-400">
        <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} CHILLGRAM. All rights reserved.</div>
          <div className="text-gray-500">AI 패키지 디자인 서비스</div>
        </div>
      </Container>
    </footer>
  );
}
