"use client";
import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Image from 'next/image';

export default function Home() {
  const [count, setCount] = useState(10);
  const [display, setDisplay] = useState(false);
  const [launch, setLaunch] = useState(false);
  function countdown(n: number): void {
    let timer = setInterval(() => {
      setCount(n);
      n--;
      if (n < 0) {
        console.log("Go!");
        clearInterval(timer);
      }
    }, 1000);
  }

  useEffect(() => {
    if (count === 0) {
      confetti({
        particleCount: 300,
        spread: 280,
      });
      setDisplay(true);
      setInterval(() => {
        confetti({
          particleCount: 300,
          spread: 360,
        });
      }, 3500);
      setInterval(() => {
        confetti({
          particleCount: 300,
          spread: 180,
        });
      }, 1500);
    }
  }, [count]);

  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          {!display ? (
            <PageHeader className="mb-12" title="" description={``}>
              {launch && count}
            </PageHeader>
          ) : (
            <div className={`max-w-3xl mx-auto grid grid-cols-3 gap-10 place-items-center`}>
              <Image
                src={'/images/Plateau.png'}
                alt='microsoft'
                width={100}
                height={100}
                className="object-contain w-full"
                />
                <Image
                src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'}
                alt='microsoft'
                width={100}
                height={100}
                className="object-contain w-full"

                />
                <Image
                src={'/images/zeustek.jpg'}
                alt='microsoft'
                width={100}
                height={100}
                className="object-contain w-full"

                />
            </div>
          )}
          <div className="relative flex items-center justify-center">
            {!launch && (
              <button
                className="btn dark:bg-[#567CE0] bg-[#111827] text-white text-3xl hover:bg-blue-700/35 font-bold py-28 px-20 rounded-full"
                onClick={() => {
                  setLaunch(true);
                  countdown(10);
                }}
              >
                Launch
              </button>
            )}
          </div>
          {/* <SubscribeForm /> */}
        </div>
      </div>
    </section>
  );
}
