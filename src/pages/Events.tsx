import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { FloatingChatbot } from "@/components/FloatingChatbot"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Networking Mixer",
    date: "March 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Virtual",
    attendees: 45,
    category: "Networking"
  },
  {
    id: 2,
    title: "Career Development Workshop",
    date: "March 22, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Campus Hall A",
    attendees: 67,
    category: "Workshop"
  },
  {
    id: 3,
    title: "Alumni Reunion Gala",
    date: "April 10, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Grand Ballroom",
    attendees: 234,
    category: "Social"
  },
]

export default function Events() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Alumni <span className="text-gradient">Events</span>
              </h1>
              <p className="text-muted-foreground">
                Join exclusive events and connect with your community
              </p>
            </div>
            <Button className="glow-border">Create Event</Button>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 glow-border hover:scale-[1.02] transition-transform">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold text-gradient">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                          <Badge variant="secondary">{event.category}</Badge>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="glow-border">RSVP</Button>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <FloatingChatbot />
      </div>
    </>
  )
}

