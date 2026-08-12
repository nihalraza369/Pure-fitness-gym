const ITEMS = [
  "AEROBICS",
  "CYCLING",
  "JAZZERCISE",
  "NUTRITION CONSULTING",
  "PERSONAL TRAINING",
  "PRIVATE LESSONS",
  "YOUTH CLASSES",
  "ZUMBA",
  "WEIGHTLIFTING",
  "CARDIO",
  "CROSSFIT",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-iron bg-blood py-3">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-8">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-lg tracking-wide text-ink md:text-xl"
            >
              {item}
              <span className="text-ink/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
