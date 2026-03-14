import React from "react";

const GuidePage = () => {
  return (
    <main className="flex-1 container mx-auto w-full px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative">
                <div
                  className="size-48 rounded-full border-4 border-white dark:border-slate-800 shadow-lg overflow-hidden"
                  data-alt="Portrait of Marco Rossi, a friendly male tour guide"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwXx-YgXlU7gcOY6HiyaINOn06zbETzam3RELkqL3gSbyvoUTjZcePKbFDYPYZeJrUyNTS-py5K3MyxZTnF4ievuebIrKSiGp945auHpyRhwyOFH_awUQXY4d9gPGh2n7wKMiNzSF6FgdQK8cIrh5hgtgCjLTsaNSQFRPXNERUzWyEJ0b8a8iD5rsOXhxIIGSqnEIs8PpfuF9j6awJI3TQMIyx5_HA0F_1Kjoa9lKfVl_oiaQPqO3PWgFon408arSlB116SZYzEk0")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="absolute bottom-2 right-4 bg-green-500 text-white rounded-full p-1 border-2 border-white dark:border-slate-800"
                  title="Verified Guide"
                >
                  <span className="material-symbols-outlined text-sm block">
                    verified
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Marco Rossi
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  Verified Guide • Florence, Italy
                </p>
                <div className="mt-2 inline-flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">
                    stars
                  </span>
                  Top Rated
                </div>
              </div>
              <div className="flex w-full gap-3 mt-2">
                <button className="flex-1 h-11 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Message
                </button>
                <button className="flex-1 h-11 bg-primary text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                  Book Tour
                </button>
              </div>
            </div>
            <hr className="my-6 border-slate-200 dark:border-slate-800" />
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background-light dark:bg-slate-800 rounded-lg text-sm">
                    Italian (Native)
                  </span>
                  <span className="px-3 py-1 bg-background-light dark:bg-slate-800 rounded-lg text-sm">
                    English (Fluent)
                  </span>
                  <span className="px-3 py-1 bg-background-light dark:bg-slate-800 rounded-lg text-sm">
                    Spanish (B2)
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2 text-primary">
                  <div className="flex items-center gap-1 text-sm bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-lg">
                      museum
                    </span>{" "}
                    Art History
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-lg">
                      restaurant
                    </span>{" "}
                    Local Food
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-lg">
                      history_edu
                    </span>{" "}
                    Renaissance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-1 min-w-25 flex-col gap-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 items-center text-center">
              <p className="text-primary tracking-tight text-2xl font-bold">
                4.9
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">
                Rating
              </p>
            </div>
            <div className="flex flex-1 min-w-25 flex-col gap-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 items-center text-center">
              <p className="text-primary tracking-tight text-2xl font-bold">
                120+
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">
                Reviews
              </p>
            </div>
            <div className="flex flex-1 min-w-25 flex-col gap-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 items-center text-center">
              <p className="text-primary tracking-tight text-2xl font-bold">
                8
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">
                Years Exp.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Ciao! I'm Marco, a born-and-raised Florentine with a deep passion
              for my city's hidden stories. After studying Renaissance Art
              History at the University of Florence, I decided to share my
              knowledge with travelers who want more than just a standard tour.
              <br />
              <br />I specialize in walking tours that bridge the gap between
              world-famous landmarks and the secret corners known only to
              locals. Whether we're discussing Michelangelo's secrets in the
              Uffizi or tasting the best Lampredotto in the San Lorenzo market,
              my goal is to make you feel like a local for a day.
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Tour Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div
                className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden"
                data-alt="The Duomo in Florence at sunset"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAerYTZFHh2EV1LIbLnbH8JmXRgRTPDPb4PCb1UZ9m7JZ_r0cQw8J4sLhul4GMrF-lwWTkbE-RWDSqFBxaPdN9kZVvvVVvXWaJsbP2AoCPyIqSgEanaI0TLLxDimUEJkOPU8vU3RvZW7JJpNh1kZ6XcNo4hGTonHNtyLr6JXpbSqOjTYj8k0i0oM2GWTuJJlrrRgFI_LDyWUH0op_AO--4TS_0QY_gxegtcyuOUIspGMAFaJDMmTJLvkg9O_wrGnZlNvprRdwztc98")',
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden"
                data-alt="Bridge over the Arno river in Florence"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg3sGTfyBw5fC_TOZqdCbdVPZVaRKm7yxEXogSkCEJpylo6AgrleMpAVtrIute8a8uf5r-jFQKWqrtyDWhim5So1w6OE18IIWXC2wkcgOx0WNdfZDfCYF59IqNWGUf1mtwUIgut3Q2wyspslK1XUrfjodukTEGVCsCNtUsZNweXXV6eBZa_6HA9ALQX_-t935kGkcaqVRQ4HbwQGl0-AEZz2k-CC462l-UN1yZquRmhgT4J_DsWVTsmrgJbX_ytd3CMNWdaiAjwpo")',
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="aspect-square rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden"
                data-alt="Narrow Italian street with stone buildings"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOIHwsABoiPee6x4duetYbFaJvbIN5c0AgiabRnpJefAFNlrOBBEZpU9MGmph7RVdmke9NPO8rADlkIIXs0I8N-TMr1Mlrk76oEp1aU8EjGTbG4Vxi-iw4bb4Cc1Qxep5fx87aMbsc7YollpNF2oHHRj3cc0bUptPMrnLsQIbcoksGrzs66KlU_M_ekCyqPvgYfdlzZMLmpGWRsBdNxaYSKFP8UaxS3ChMkBMWqSW9E9btDhM1g39gSSvQgSMF9KXn3Qn_WT07gUM")',
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Available Tours
              </h2>
              <a
                className="text-primary text-sm font-bold hover:underline"
                href="#"
              >
                View All
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
                <div
                  className="h-40 w-full"
                  data-alt="Tour group visiting the Uffizi Gallery"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAT2ENuVTPXPbMJatISTVBfcI794ZITtx4I4DJ_Xh3nJ_KUkl6SZnBBAwESsG_gtC04izjO66H-GLDnUKcy7qUd5tz0QvFK2BKMr711M5jrM959Mkf_kIp9k0IAWwaDckjr45E8ZM6jGDyG0psvFTuG8yRfqGAlnpq8g7HEOEUhOloKzrVjlLoTdfYySNbZMCeApswsMBP0ZBevzCG4LpYtl2Hikj4kQv-yhx2XvBcMHhsd93_IWi-Sp8Ael3otL12P1L8NdQDrA4")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        Uffizi Masterpieces
                      </h3>
                      <span className="text-primary font-bold">€65</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      Deep dive into Renaissance art with skip-the-line access
                      and expert narration.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white">
                      <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                        star
                      </span>{" "}
                      5.0 (42)
                    </div>
                    <span className="text-xs text-slate-400">3 Hours</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
                <div
                  className="h-40 w-full"
                  data-alt="Traditional Italian pasta and wine"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCx-FC1aiD0Nyex_TFvMd0gyzyYy7JlavLa7HefQy1sDnYbxbWDBwzKe9A0glO3KrjciZ6JMFVpm3fnSCMJuJDcbzs2lwR1ORrd_oq7A3DOqzlip--4Uy0NuCQLfNbN5jb29ACTAn27iJEAN1KcDJNuEVKlQIBZDlVknvUGKueMojqsblUGoAVHXF9zXZE4jvbEq-J04RSsUjnIYoArWSIB2dX_TALzvSqkSPhJ0vkq4fYqyYNaOAGnwU1iSI99ImmERIkpQYayLqw")',
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        Florentine Foodie Trail
                      </h3>
                      <span className="text-primary font-bold">€45</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      Visit the markets and local bakeries for a true taste of
                      Tuscany.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white">
                      <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                        star
                      </span>{" "}
                      4.9 (78)
                    </div>
                    <span className="text-xs text-slate-400">2 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Traveler Reviews
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-full bg-slate-200 overflow-hidden"
                      data-alt="Reviewer Sarah J. avatar"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApwy3VWfy2X7Vi_0VPXzgvgBCp-ipIgGrcQWDynzbfknVActPNx0LpgrvU8PE55N7kNMkI4LzW2noKQbK0o8BpIJ9hr7tcGWD97MPjZ5JeebgCCl_BnaRd1g6m400EWd8JWysqkLNgLcn5oGTeSoBJqBZdxnxtfftqC5z19wkYKt3Bi4aGWa7Fib4jBkQ6mI_Ct-A7Sf8S_kwBOxQFU2qCfy6quKg2rBJEWhZUX-l_3CjgQ45pzk72VzwxQBUNGsvEAb1JvQvaEXc")',
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        Sarah Jenkins
                      </p>
                      <p className="text-xs text-slate-500">
                        2 weeks ago • Uffizi Masterpieces
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  "Marco is phenomenal! His knowledge of the Uffizi is
                  incredible, and he explains things in such an engaging way. We
                  didn't just see paintings; we understood the history and the
                  drama behind them. Highly recommended!"
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-full bg-slate-200 overflow-hidden"
                      data-alt="Reviewer David L. avatar"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM7eHXQOFMeadenMyjRxqg-BCfu3YbUDw0Vfxqun0B0j0QzXll0fUAvsK93NGlqG9k4EXXeQX9oyHqkU2BAR0sR1kG68ZtCxw3xdRaGMAcP0nANipgAhpGtTvD8whWOl2m11TTKSOOHBdO7m7uyRr9fzlkrasP11f5-oy-xpejbgWIXIGloBCy7skaVGoj4TshxkT6PrbX9RlFan-lb6--o0iwCDsiImSwoZQxtyhbtCYba1dMNZJ82byG8p7FeHq-t6MWkW_G58o")',
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        David Lawson
                      </p>
                      <p className="text-xs text-slate-500">
                        1 month ago • Florentine Foodie Trail
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-amber-500 fill-current text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-700 text-lg">
                      star
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  "Best food tour we've done in Europe. Marco took us to places
                  we never would have found on our own. The Chianti wine tasting
                  at the end was the perfect touch. He's very friendly and easy
                  to talk to."
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="px-6 py-2 border-2 border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Show more reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuidePage;
