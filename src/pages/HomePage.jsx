import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const FEATURES = [
  {
    title: "AI 디자인 생성",
    description: "브랜드 톤과 고객 니즈를 분석해 즉시 시안을 생성합니다.",
    badge: "AI",
  },
  {
    title: "소비자 분석",
    description: "구매 전환 데이터를 기반으로 가장 효율적인 디자인을 제안합니다.",
    badge: "DATA",
  },
  {
    title: "자동 피드백 시스템",
    description: "반복 테스트를 통해 완성도 높은 패키지를 빠르게 만듭니다.",
    badge: "AUTO",
  },
];

const STEPS = [
  {
    title: "데이터 입력",
    description: "브랜드 정보와 타겟 고객 데이터를 입력해 AI가 학습을 시작합니다.",
  },
  {
    title: "디자인 생성",
    description: "LLM이 콘셉트를 조합해 경쟁사 대비 차별화된 디자인 시안을 제공합니다.",
  },
  {
    title: "평가 및 개선",
    description: "A/B 테스트와 실사용 피드백을 반영해 디자인을 최적화합니다.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <section className="bg-white pt-16 pb-20">
          <Container className="flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-gray-800 md:text-4xl">
              <span className="text-green-500">AI</span>로 완성하는
              <br />
              완벽한 패키지 디자인
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-gray-600 md:text-base">
              소비자 데이터 기반 패키지 기획부터 디자인 생성과 광고영상 제작까지
              <br />
              전 과정을 자동화한 AI 패키지 올인원 플랫폼
            </p>
            <Button className="mt-8 h-10 px-8 bg-green-500 text-white hover:bg-green-600 focus:ring-green-500">
              무료로 시작하기
            </Button>
          </Container>
        </section>

        <section id="features" className="py-14">
          <Container>
            <div className="text-center">
              <h2 className="text-2xl font-bold">핵심 기능</h2>
              <p className="mt-2 text-sm text-gray-600">
                AI 기술로 패키지 디자인 프로세스를 혁신합니다.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-green-200/70 text-center"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-green-200 text-xs font-semibold text-green-900">
                    {feature.badge}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold">
                CHILL GRAM만의 특화된 서비스는 이렇습니다.
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                3단계로 완성하는 패키지 디자인
              </p>
            </div>

            <ol className="mx-auto mt-10 flex max-w-2xl flex-col gap-6">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section
          id="pricing"
          className="bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.22),transparent_55%)] py-16"
        >
          <Container className="text-center">
            <h2 className="text-2xl font-bold">지금 바로 시작하세요</h2>
            <p className="mt-2 text-sm text-gray-600">
              50만명 이상이 선택한 패키지 디자인 솔루션을 만나보세요.
            </p>
            <Button className="mt-6 bg-green-500 text-white hover:bg-green-600 focus:ring-green-500">
              무료로 시작하기
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
