'use client';
import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";
import { useEffect, useState } from "react";
import confetti from 'canvas-confetti';
export default function Home() {
  const [count, setCount] = useState(10);
  const [display, setDisplay] = useState(false);
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
}, [count])


  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title=""
            description={``}
          >
            {display && count}
          </PageHeader>

          <div className="relative flex items-center justify-center">
           {!display &&  <button className="btn dark:bg-[#567CE0] bg-[#111827] text-white text-3xl hover:bg-blue-700/35 font-bold py-28 px-20 rounded-full" onClick={() => {
              setDisplay(true);
              countdown(10);
            }}>
              Launch
            </button>}
          </div>
          {/* <SubscribeForm /> */}
        </div>
      </div>
    </section>
  );
}
