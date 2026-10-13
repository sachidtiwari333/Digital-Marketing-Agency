import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"

const reviews = [
  {
    name: "Aarav Sharma",
    username: "@aaravsharma",
    body: "Be Next Digital completely transformed our online presence. Their creative ideas and marketing strategy helped us reach more customers than ever.",
    img: "https://avatar.vercel.sh/aarav",
  },
  {
    name: "Sita Bhandari",
    username: "@sitabhandari",
    body: "The team at Be Next Digital is creative, professional, and easy to work with. Our social media engagement improved significantly after working with them.",
    img: "https://avatar.vercel.sh/sita",
  },
  {
    name: "Rohan Thapa",
    username: "@rohanthapa",
    body: "From stunning graphics to effective advertising campaigns, Be Next Digital delivered everything we needed. Highly recommended for growing businesses.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Anisha Joshi",
    username: "@anishajoshi",
    body: "We loved the creativity and attention to detail. Be Next Digital understood our brand and turned our ideas into content that actually connects with our audience.",
    img: "https://avatar.vercel.sh/anisha",
  },
  {
    name: "Bibek Rawal",
    username: "@bibekrawal",
    body: "Working with Be Next Digital was a great experience. Their video ads, content, and marketing support gave our brand a much stronger digital presence.",
    img: "https://avatar.vercel.sh/bibek",
  },
  {
    name: "Prakriti Shah",
    username: "@prakritishah",
    body: "Professional service with amazing creativity. Be Next Digital helped us build a consistent brand image and attract more attention online.",
    img: "https://avatar.vercel.sh/prakriti",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-100 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
