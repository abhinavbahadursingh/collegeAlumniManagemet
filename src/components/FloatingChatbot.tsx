import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full animate-glow-pulse shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <div className="glass-card rounded-2xl p-6 shadow-2xl border">
              <h3 className="text-lg font-bold mb-4 text-gradient">AI Assistant</h3>
              <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                <div className="glass-card p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Hi! I'm your AI assistant. How can I help you today?
                  </p>
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-medium">Quick questions I can answer:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>How do I join an event?</li>
                    <li>How to update my profile?</li>
                    <li>Find a mentor in my field</li>
                    <li>Make a donation</li>
                  </ul>
                </div>
              </div>
              <div className="text-xs text-center text-muted-foreground">
                Full chat functionality coming soon
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
