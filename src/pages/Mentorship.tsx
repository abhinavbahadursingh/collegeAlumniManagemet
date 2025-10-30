import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare } from "lucide-react"
import { FloatingChatbot } from "@/components/FloatingChatbot"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"

const mentors = [
  { id: 1, name: "Dr. Sarah Mitchell", expertise: "AI & Machine Learning", rating: 4.9, sessions: 156, initials: "SM", available: true },
  { id: 2, name: "Prof. James Anderson", expertise: "Business Strategy", rating: 4.8, sessions: 203, initials: "JA", available: true },
  { id: 3, name: "Emily Chen", expertise: "Product Design", rating: 4.9, sessions: 127, initials: "EC", available: false },
  { id: 4, name: "Michael Torres", expertise: "Data Science", rating: 4.7, sessions: 98, initials: "MT", available: true },
]

export default function Mentorship() {
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
                Mentorship <span className="text-gradient">Hub</span>
              </h1>
              <p className="text-muted-foreground">
                Connect with experienced alumni and accelerate your growth
              </p>
            </div>
            <Button className="glow-border">Become a Mentor</Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 glow-border hover:scale-105 transition-transform">
                  <div className="flex gap-4 mb-4">
                    <Avatar className="h-20 w-20 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                        {mentor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{mentor.expertise}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold">{mentor.rating}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {mentor.sessions} sessions
                        </div>
                      </div>
                    </div>
                    {mentor.available && (
                      <Badge variant="secondary" className="h-fit">Available</Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Experienced professional specializing in {mentor.expertise.toLowerCase()}. 
                      Passionate about helping early-career professionals navigate their journey.
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1 glow-border">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Request Session
                      </Button>
                      <Button variant="outline">View Profile</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Can't find the right mentor?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tell us what you're looking for and we'll help you find the perfect match
            </p>
            <Button size="lg" className="glow-border">Submit Request</Button>
          </Card>
        </motion.div>

        <FloatingChatbot />
      </div>
    </>
  )
}