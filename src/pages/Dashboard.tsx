import { Card } from "@/components/ui/card"
import { Users, Calendar, Heart, TrendingUp, Award, MessageSquare } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { FloatingChatbot } from "@/components/FloatingChatbot"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"

const data = [
  { month: "Jan", engagement: 400 },
  { month: "Feb", engagement: 700 },
  { month: "Mar", engagement: 550 },
  { month: "Apr", engagement: 900 },
  { month: "May", engagement: 800 },
  { month: "Jun", engagement: 1200 },
]

const stats = [
  { title: "Total Alumni", value: "10,234", icon: Users, color: "text-primary" },
  { title: "Upcoming Events", value: "24", icon: Calendar, color: "text-secondary" },
  { title: "Active Mentorships", value: "156", icon: MessageSquare, color: "text-accent" },
  { title: "Total Donations", value: "$1.2M", icon: Heart, color: "text-pink-500" },
  { title: "Engagement Rate", value: "87%", icon: TrendingUp, color: "text-green-500" },
  { title: "Awards Given", value: "45", icon: Award, color: "text-yellow-500" },
]

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="text-gradient">Admin</span>
            </h1>
            <p className="text-muted-foreground">
              Here's an overview of your alumni network's activity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card p-6 glow-border hover:scale-105 transition-transform">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Card className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-6">Engagement Analytics</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Create New Event
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Send Newsletter
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Review Mentorship Requests
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Generate Reports
                </button>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium">New Alumni Registration</p>
                    <p className="text-muted-foreground">Sarah Johnson joined the network</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                  <div>
                    <p className="font-medium">Event Created</p>
                    <p className="text-muted-foreground">Tech Networking Mixer scheduled</p>
                    <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium">Donation Received</p>
                    <p className="text-muted-foreground">$5,000 from Class of 2010</p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        <FloatingChatbot />
      </div>
    </>
  )
}

