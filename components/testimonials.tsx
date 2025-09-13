import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at Vercel",
    avatar: "/professional-woman-developer.png",
    content:
      "Stratosphere has completely changed how I code on mobile. The voice recognition is incredibly accurate and intuitive.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Full-Stack Engineer",
    avatar: "/professional-man-developer.png",
    content:
      "Finally, a tool that lets me be productive while commuting. The mobile experience is seamless and powerful.",
  },
  {
    name: "Emily Watson",
    role: "Tech Lead at Stripe",
    avatar: "/professional-woman-tech-lead.png",
    content:
      "The AI understands context so well. It feels like having a coding assistant that actually gets what I want to build.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Loved by Developers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            See what developers are saying about their Stratosphere experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-6 text-balance">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
