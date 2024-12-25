import { EventForm } from "@/components/forms/EventForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function NewEventPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-4">
            🎯 Create New Event
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Design Your Perfect <span className="text-blue-600">Meeting Template</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Set up your event details, availability, and preferences to start scheduling meetings.
          </p>
        </div>
        {/* Form Card */}
        <Card className="shadow-lg">
          <CardHeader className="text-center border-b bg-gray-50">
            <CalendarDays className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl font-semibold">Event Details</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <EventForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
