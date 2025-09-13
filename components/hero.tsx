import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, Smartphone, Code } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Background stars effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        {/* Subtle star pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Floating icons */}
        <div className="absolute -top-20 -left-20 opacity-20 animate-float">
          <Mic className="w-16 h-16 text-accent" />
        </div>
        <div className="absolute -top-10 -right-20 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
          <Code className="w-12 h-12 text-accent" />
        </div>
        <div className="absolute -bottom-10 left-10 opacity-20 animate-float" style={{ animationDelay: "2s" }}>
          <Smartphone className="w-14 h-14 text-accent" />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <Image
                src="/stratosphere-logo.svg"
                alt="Stratosphere"
                width={400}
                height={120}
                className="h-20 md:h-24 w-auto"
                priority
              />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Code with your voice. Build and edit repositories on the go. The future of mobile development is here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-6">Trusted by developers worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">GitHub</div>
              <div className="text-2xl font-bold">VS Code</div>
              <div className="text-2xl font-bold">Vercel</div>
              <div className="text-2xl font-bold">Next.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
