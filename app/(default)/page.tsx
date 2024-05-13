export const metadata = {
  title: "Launch Jummai",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'

export default function Home() {
  function countdown(n: number): void {
    let timer = setInterval(() => {
        console.log(n);
        n--;
        if (n === 0) {
            console.log("Go!");
            clearInterval(timer);
        }
    }, 1000);
}

  // const { width, height } = useWindowSize()
  return (
    <section>
      {/* <Confetti
         width={width}
          height={height}
          /> */}
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="The software that sparks your imagination"
            description="Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
          >
            Waitlist v1 <span className="text-gray-300 mx-1">·</span> Coming
            Soon
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
