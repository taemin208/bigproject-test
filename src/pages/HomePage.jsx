import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const FEATURES = [
  {
    title: "AI 디자인 생성",
    description:
      "Stable Diffusion 기반으로 신속한 AI로 다양한 패키지 디자인을 제안합니다.",
    icon: "🎨",
  },
  {
    title: "소비자 분석",
    description:
      "SNS 데이터로 소비자 트렌드와 구매 성향을 분석합니다.",
    icon: "📊",
  },
  {
    title: "자동 A/B 테스트",
    description:
      "가상 A/B 테스트로 반응이 좋은 시안을 빠르게 선택합니다.",
    icon: "✨",
  },
];

const STEPS = [
  {
    title: "데이터 입력",
    description:
      "브랜드 정보와 타깃 고객을 입력하면 AI가 시장 데이터를 자동 수집합니다.",
  },
  {
    title: "디자인 생성",
    description:
      "LLM이 컨셉을 도출하고 생성형 AI가 다양한 디자인 시안을 제작합니다.",
  },
  {
    title: "평가 및 선택",
    description:
      "A/B 테스트와 소비자 피드백을 통해 최종 디자인을 결정합니다.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        <section className="pt-20 pb-14">
          <Container className="text-center">
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
              <span className="text-green-500">AI</span>로 완성하는
              <br />
              완벽한 패키지 디자인
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">
              소비자 데이터 기반 패키지 기획부터 디자인 생성과 광고성 제작까지
              <br />
              전 과정을 자동화한 AI 패키징 올인원 플랫폼
            </p>
            <Button className="mt-8 h-9 bg-green-500 px-5 text-xs font-semibold text-white hover:bg-green-600 focus:ring-green-500">
              무료로 시작하기
            </Button>
          </Container>
        </section>

        <section id="features" className="py-14">
          <Container>
            <div className="text-center">
              <h2 className="text-2xl font-bold">핵심 기능</h2>
              <p className="mt-2 text-xs text-gray-500">
                AI 기술로 패키지 디자인 프로세스를 혁신합니다
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-green-100 bg-green-50 py-6 text-center"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-xs text-gray-500">
                    {feature.description}
                  </p>
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
              <p className="mt-2 text-xs text-gray-500">
                3단계로 완성되는 패키지 디자인
              </p>
            </div>

            <ol className="mx-auto mt-10 flex max-w-2xl flex-col gap-8">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="bg-green-50 py-20">
          <Container className="text-center">
            <h2 className="text-2xl font-bold">지금 바로 시작하세요</h2>
            <p className="mt-2 text-xs text-gray-500">
              5분이면 첫 번째 패키지 디자인을 완성할 수 있습니다
            </p>
            <Button className="mt-6 h-9 bg-green-500 px-5 text-xs font-semibold text-white hover:bg-green-600 focus:ring-green-500">
              무료로 시작하기
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
