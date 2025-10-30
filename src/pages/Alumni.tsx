import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Briefcase } from "lucide-react"
import { FloatingChatbot } from "@/components/FloatingChatbot"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"

const mockAlumni = [
  { id: 1, name: "Sarah Johnson", batch: "2018", course: "Computer Science", company: "Google", location: "San Francisco", initials: "SJ" },
  { id: 2, name: "Michael Chen", batch: "2015", course: "Business Admin", company: "Meta", location: "Seattle", initials: "MC" },
  { id: 3, name: "Emily Rodriguez", batch: "2020", course: "Marketing", company: "Amazon", location: "New York", initials: "ER" },
  { id: 4, name: "David Kim", batch: "2019", course: "Engineering", company: "Tesla", location: "Austin", initials: "DK" },
  { id: 5, name: "Lisa Wang", batch: "2017", course: "Design", company: "Apple", location: "Cupertino", initials: "LW" },
  { id: 6, name: "James Wilson", batch: "2016", course: "Finance", company: "Goldman Sachs", location: "Boston", initials: "JW" },
]

export default function Alumni() {
  const [search, setSearch] = useState("")

  const filtered = mockAlumni.filter(
    (alumni) =>
      alumni.name.toLowerCase().includes(search.toLowerCase()) ||
      alumni.company.toLowerCase().includes(search.toLowerCase()) ||
      alumni.course.toLowerCase().includes(search.toLowerCase())
  )

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
              Alumni <span className="text-gradient">Directory</span>
            </h1>
            <p className="text-muted-foreground">
              Connect with alumni across industries and locations
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, or course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((alumni, index) => (
              <motion.div
                key={alumni.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card p-6 glow-border hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">
                        {alumni.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{alumni.name}</h3>
                      <p className="text-sm text-muted-foreground">Class of {alumni.batch}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <Badge variant="secondary">{alumni.course}</Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{alumni.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{alumni.location}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No alumni found matching your search</p>
            </div>
          )}
        </motion.div>

        <FloatingChatbot />
      </div>
    </>
  )
}

