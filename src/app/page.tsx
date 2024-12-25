import { Button } from "@/components/ui/button"
import { SignUpButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Image from "next/image"
import { CalendarDays, Clock, Users } from "lucide-react"
import { Navbar } from "@/components/Navbar"

export default function HomePage() {
  const { userId } = auth()
  if (userId != null) redirect("/events")

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      {/* Hero Section */}
      {/* padding left */}
      <div className="container mx-auto px-10 py-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-4">
              ✨ Simplify Your Schedule
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Schedule Meetings <span className="text-blue-600">Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take control of your time with our intelligent scheduling platform. No more back-and-forth emails.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8" asChild>
                <SignUpButton />
              </Button>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 h-[400px]">
            <Image
              src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/og.jpg"
              alt="Calendar Illustration"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Meetings Scheduled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-600">Everything you need to manage your schedule efficiently</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: CalendarDays,
              title: "Smart Scheduling",
              description: "AI-powered scheduling that learns from your preferences",
              image: "/images/calendar-animation.svg"
            },
            {
              icon: Clock,
              title: "24/7 Booking",
              description: "Your booking page never sleeps, available worldwide",
              image: "images/clock-animation.svg"
            },
            {
              icon: Users,
              title: "Team Management",
              description: "Coordinate with your team seamlessly",
              image: "images/team-animation.svg"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="h-40 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
            ].map((logo, index) => (
              <div key={index} className="relative h-12 w-32">
                <Image
                  src={logo}
                  alt="Company logo"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
