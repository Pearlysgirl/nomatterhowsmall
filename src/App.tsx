import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  // ShoppingBag, // Temporarily removed
} from "lucide-react";

import { REPORTED_DETAILS, STORIES } from "./components/staticData";
import EmailSignup from "./components/EmailSignup";
// Temporarily removed for section simplification
// import SupportBoard from "./components/SupportBoard";
// import TShirtCustomizer from "./components/TShirtCustomizer";

import heroPoemImage from "./assets/images/photo4.jpg";
import storyImage1 from "./assets/images/story-1.png";
import storyImage2 from "./assets/images/story-2.png";
import storyImage3 from "./assets/images/story-3.png";

const storyImages = [storyImage3, storyImage2, storyImage1];

export default function App() {
  // Temporarily removed for section simplification
  // const [sessionOrders, setSessionOrders] = useState<any[]>([]);

  // useEffect(() => {
  //   loadOrdersHistory();
  // }, []);

  // const loadOrdersHistory = () => {
  //   setSessionOrders(JSON.parse(localStorage.getItem("tee_orders") || "[]"));
  // };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101513] text-[#daeef5] selection:bg-[#7ec8e3] selection:text-[#101513]">
      <main>
        <section className="relative min-h-[640px] overflow-hidden border-b border-white/8 md:min-h-[720px]">
          <img
            src={heroPoemImage}
            alt="Young girl in a dark, cinematic portrait inspired by the poem story"
            className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-[center_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,13,12,0.7)_0%,rgba(10,13,12,0.45)_34%,rgba(10,13,12,0.05)_66%,rgba(10,13,12,0.05)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(229,174,105,0.16),transparent_30%),linear-gradient(180deg,transparent_62%,#111614_100%)]" />

          <div className="relative mx-auto flex min-h-[640px] max-w-[1050px] items-start pl-2 pr-5 pb-12 pt-14 md:min-h-[720px]">
            <div className="max-w-[650px]">
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                <h1 className="max-w-[560px] text-[64px] font-black uppercase leading-[0.89] tracking-normal text-[#7ec8e3] drop-shadow-[0_4px_0_rgba(0,0,0,0.55)] sm:text-[82px] md:text-[96px]">
                  A life is a life,
                  <span className="block text-[#daeef5]">no matter how</span>
                  <span className="block text-[#7ec8e3]">small.</span>
                </h1>
              </div>

              <p className="mt-5 max-w-[470px] text-[17px] font-medium leading-snug text-[#7ec8e3]">
                A t-shirt inspired by a 13-year-old girl's poem about life and the freedom to speak with conviction.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Temporarily removed for section simplification
                <button
                  onClick={() => scrollToSection("t-shirt-advocacy")}
                  className="rounded-full border border-[#7ec8e3] px-6 py-3 text-xs font-black uppercase tracking-normal text-[#daeef5] transition hover:bg-[#7ec8e3] hover:text-[#111614]"
                >
                  Buy the shirt
                </button>
                */}
                <a
                  href={STORIES[2].linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#7ec8e3] px-6 py-3 text-xs font-black uppercase tracking-normal text-[#101513] transition hover:bg-[#7ec8e3]"
                >
                  Watch the story
                </a>
                <a
                  href="https://no-matter-how-small.printify.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#7ec8e3] px-6 py-3 text-xs font-black uppercase tracking-normal text-[#daeef5] transition hover:bg-[#7ec8e3] hover:text-[#111614]"
                >
                  Buy the shirt
                </a>
              </div>
              <div className="mt-4 text-[15px] font-extrabold uppercase leading-tight tracking-normal text-[#7ec8e3]">
                3,000,000+ views and counting
              </div>

            </div>
          </div>
        </section>

        <section id="story" className="border-b border-white/8 bg-[#111614] py-12 md:py-16">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mb-7 flex items-center gap-4">
              <h2 className="shrink-0 text-sm font-black uppercase tracking-normal text-[#7ec8e3]">The story</h2>
              <div className="h-px flex-1 bg-white/18" />
              {/* Carousel controls — re-enable when more stories are added
              <div className="hidden items-center gap-3 text-[#7ec8e3]/70 sm:flex">
                <ChevronLeft className="h-5 w-5" />
                <ChevronRight className="h-5 w-5" />
              </div>
              */}
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {STORIES.map((story, index) => (
                <a
                  key={story.id}
                  href={story.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group text-left"
                >
                  <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-sm border border-white/8 bg-[#191f1c]">
                    <img
                      src={storyImages[index] || heroPoemImage}
                      alt=""
                        className={[
                        "h-full w-full object-cover opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100",
                        index === 0 ? "object-center" : "",
                        index === 1 ? "object-center" : "",
                        index === 2 ? "object-center" : "",
                      ].join(" ")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 text-5xl font-black leading-none text-[#7ec8e3]">
                      {story.number}
                    </div>
                    <div className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-[22px] font-black leading-[0.98] tracking-normal text-[#7ec8e3]">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-snug text-[#8ab4c2]">{story.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 border-b border-[#7ec8e3]/50 text-xs font-bold text-[#7ec8e3]">
                    {story.linkText} <ArrowUpRight className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111614] py-12 md:py-16">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mb-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/16" />
              <span className="text-2xl text-[#7ec8e3]/70">✦</span>
              <div className="h-px flex-1 bg-white/16" />
            </div>

            <div className="grid gap-7 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-normal text-[#7ec8e3]">Reported details</p>
                <h2 className="mt-3 max-w-[260px] text-3xl font-black leading-none tracking-normal text-[#7ec8e3]">
                  The story traveled fast.
                </h2>
                <p className="mt-10 max-w-[260px] text-[19px] font-bold leading-relaxed text-[#7ec8e3] italic">
                  "For you created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well."
                </p>
                <p className="mt-2 max-w-[260px] text-[17px] font-black text-[#7ec8e3]">Psalms 139:13-14</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {REPORTED_DETAILS.map((detail) => (
                  <a
                    key={detail.id}
                    href={detail.href || undefined}
                    target={detail.href ? "_blank" : undefined}
                    rel={detail.href ? "noreferrer" : undefined}
                    className="min-h-[136px] rounded-md border border-white/16 bg-white/[0.025] p-5 transition hover:border-[#7ec8e3]/70 hover:bg-white/[0.045]"
                  >
                    <p className="text-xs font-black uppercase tracking-normal text-[#7ec8e3]">{detail.source}</p>
                    <p className="mt-3 text-[13px] leading-snug text-[#9ac4d0]">{detail.quote}</p>
                    <p className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold text-[#7ec8e3]/80">
                      {detail.href ? "View source" : "Source noted in PDF"} <ArrowUpRight className="h-3 w-3" />
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-10 mt-14 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/16" />
              <span className="text-2xl text-[#7ec8e3]/70">✦</span>
              <div className="h-px flex-1 bg-white/16" />
            </div>

            <div className="mx-auto max-w-[760px] text-center">
              <blockquote className="text-3xl font-black leading-tight tracking-normal text-[#daeef5] md:text-4xl">
                There is hope in hard situations. There is purpose in pain. Good things come out of situations that seem bleak.
              </blockquote>
            </div>
          </div>
        </section>

        <section id="donation-benefit" className="border-y border-white/8 bg-[#111614] py-12 md:py-16">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-normal text-[#7ec8e3]">
                Supporting Pro-Life and Free Speech Causes
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#9ac4d0]">
                Portion of campaign profits, after production, platform, payment processing, taxes, and shipping-related costs, go toward pro-life and free speech charitable causes. This campaign exists to turn a student's silenced voice into lasting support for the values she stands for.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#111614] py-12 md:py-16">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className="mb-7 text-3xl font-black uppercase tracking-normal text-[#7ec8e3]">Pro-Life Causes Worth Supporting</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://studentsforlife.org"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#7ec8e3] px-6 py-3 text-xs font-black uppercase tracking-normal text-[#daeef5] transition hover:bg-[#7ec8e3] hover:text-[#111614]"
                >
                  Students For Life
                </a>
                <a
                  href="https://evancfa.org"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#7ec8e3] px-6 py-3 text-xs font-black uppercase tracking-normal text-[#daeef5] transition hover:bg-[#7ec8e3] hover:text-[#111614]"
                >
                  Evangelical Child & Family Agency
                </a>
                <a
                  href="https://hopehousecolorado.org"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#7ec8e3] px-6 py-3 text-xs font-black uppercase tracking-normal text-[#daeef5] transition hover:bg-[#7ec8e3] hover:text-[#111614]"
                >
                  Hope House
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111614] py-12 md:py-16">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mb-10 flex justify-center">
              <a
                href="https://no-matter-how-small.printify.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#7ec8e3] px-10 py-5 text-base font-black uppercase tracking-normal text-[#111614] transition hover:bg-transparent hover:border hover:border-[#7ec8e3] hover:text-[#daeef5]"
              >
                Buy the shirt
              </a>
            </div>
            <div className="border-t border-white/8 pt-12 md:pt-16">
              <EmailSignup />
            </div>
          </div>
        </section>

        {/* Temporarily removed for section simplification
        <section id="t-shirt-advocacy" className="bg-[#0d1110] py-16 md:py-20">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mx-auto mb-10 max-w-[580px] text-center">
              <p className="text-sm font-black uppercase tracking-normal text-[#7ec8e3]">Buy the shirt</p>
              <h2 className="mt-3 text-4xl font-black leading-none text-[#daeef5]">Turn the message into support.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8ab4c2]">
                Configure a shirt and estimate the campaign contribution before ordering.
              </p>
            </div>
            <TShirtCustomizer onOrderSuccess={loadOrdersHistory} />
          </div>
        </section>
        */}

        {/* Temporarily removed for section simplification
        <section id="community-board" className="border-t border-white/8 bg-[#111614] py-16">
          <div className="mx-auto max-w-[1050px] px-5">
            <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-normal text-[#7ec8e3]">Encouragement board</p>
                <h2 className="mt-2 text-4xl font-black leading-none text-[#daeef5]">Leave a note of support.</h2>
              </div>
              <p className="max-w-[410px] text-sm leading-relaxed text-[#8ab4c2]">
                Share a reflection for the student, teenage mothers, and families connected to Hope House Colorado.
              </p>
            </div>
            <SupportBoard />
          </div>
        </section>
        */}

        {/* Temporarily removed for section simplification
        {sessionOrders.length > 0 && (
          <section className="border-t border-white/8 bg-[#0d1110] py-14">
            <div className="mx-auto max-w-[1050px] px-5">
              <div className="mb-5 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#7ec8e3]" />
                <h3 className="text-xl font-black text-[#daeef5]">Your campaign orders</h3>
              </div>
              <div className="overflow-hidden rounded-md border border-white/12">
                {sessionOrders.map((order) => (
                  <div key={order.orderId} className="border-b border-white/8 p-5 last:border-b-0 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-black text-[#7ec8e3]">{order.orderId}</p>
                      <p className="mt-1 text-sm text-[#9ac4d0]">
                        {order.shippingName} - Size {order.size} ({order.color})
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-black text-[#7ec8e3] sm:mt-0">${order.totalPrice}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        */}
      </main>

      <footer className="bg-[#080a09] px-5 py-9 text-center text-xs text-[#6a9aaa]">
        <div className="mx-auto max-w-[760px]">
          <p className="font-black uppercase text-[#7ec8e3]">No Matter How Small - A Charitable Benefit Campaign</p>
        </div>
      </footer>
    </div>
  );
}
