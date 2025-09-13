import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Smartphone, Zap, Shield, Globe, Cpu } from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "Voice-First Coding",
    description:
      "Write, edit, and navigate code using natural speech commands. No more typing on tiny mobile keyboards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Full-featured development environment designed specifically for mobile devices. Code anywhere, anytime.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth coding experience even on mobile networks and devices.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your code and voice data are encrypted and processed securely. Privacy-first architecture.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Support for all major programming languages and frameworks. From React to Python, we got you covered.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Advanced AI understands context and intent, making voice commands more accurate and intuitive.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Revolutionary Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the next generation of mobile development with cutting-edge voice technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
