"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Star } from "lucide-react"

const ActiveAccountPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Trigger animations after component mounts
    const timer1 = setTimeout(() => setShowContent(true), 300)
    const timer2 = setTimeout(() => setShowConfetti(true), 800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Predefined positions to avoid hydration mismatch
  const backgroundElements = [
    { left: "10%", top: "15%", type: 0, delay: "0s" },
    { left: "85%", top: "25%", type: 1, delay: "0.5s" },
    { left: "20%", top: "70%", type: 2, delay: "1s" },
    { left: "75%", top: "60%", type: 0, delay: "1.5s" },
    { left: "45%", top: "10%", type: 1, delay: "2s" },
    { left: "15%", top: "45%", type: 2, delay: "2.5s" },
    { left: "90%", top: "80%", type: 0, delay: "0.3s" },
    { left: "5%", top: "85%", type: 1, delay: "0.8s" },
    { left: "60%", top: "20%", type: 2, delay: "1.3s" },
    { left: "35%", top: "90%", type: 0, delay: "1.8s" },
    { left: "80%", top: "45%", type: 1, delay: "0.2s" },
    { left: "25%", top: "35%", type: 2, delay: "0.7s" },
    { left: "70%", top: "75%", type: 0, delay: "1.2s" },
    { left: "40%", top: "55%", type: 1, delay: "1.7s" },
    { left: "95%", top: "35%", type: 2, delay: "2.2s" },
    { left: "12%", top: "25%", type: 0, delay: "0.4s" },
    { left: "55%", top: "80%", type: 1, delay: "0.9s" },
    { left: "30%", top: "15%", type: 2, delay: "1.4s" },
    { left: "85%", top: "65%", type: 0, delay: "1.9s" },
    { left: "8%", top: "60%", type: 1, delay: "2.4s" },
  ]

  const confettiElements = [
    { left: "25%", delay: "0s", color: "bg-yellow-300" },
    { left: "35%", delay: "0.2s", color: "bg-pink-300" },
    { left: "45%", delay: "0.4s", color: "bg-blue-300" },
    { left: "55%", delay: "0.6s", color: "bg-green-300" },
    { left: "65%", delay: "0.8s", color: "bg-yellow-300" },
    { left: "30%", delay: "1s", color: "bg-pink-300" },
    { left: "50%", delay: "1.2s", color: "bg-blue-300" },
    { left: "70%", delay: "1.4s", color: "bg-green-300" },
    { left: "40%", delay: "1.6s", color: "bg-yellow-300" },
    { left: "60%", delay: "1.8s", color: "bg-pink-300" },
    { left: "28%", delay: "0.3s", color: "bg-blue-300" },
    { left: "48%", delay: "0.5s", color: "bg-green-300" },
    { left: "68%", delay: "0.7s", color: "bg-yellow-300" },
    { left: "38%", delay: "0.9s", color: "bg-pink-300" },
    { left: "58%", delay: "1.1s", color: "bg-blue-300" },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 via-orange-300 to-orange-500 p-4">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="relative w-full h-full bg-white rounded-full p-6 shadow-2xl">
            <Image
              src="/logo_app.png"
              alt="WorkLocus Logo"
              fill
              style={{ objectFit: "fill" }}
              priority
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 via-orange-300 to-orange-500 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-20 ${showConfetti ? "animate-bounce" : ""}`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: "4s",
            }}
          >
            {element.type === 0 ? (
              <Star className="w-4 h-4 text-white" />
            ) : element.type === 1 ? (
              <Sparkles className="w-3 h-3 text-yellow-200" />
            ) : (
              <div className="w-2 h-2 bg-white rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-md w-full mx-auto text-center">
        {/* Logo Section */}
        <div
          className={`relative w-48 h-48 mx-auto mb-8 transition-all duration-1000 transform ${
            showContent ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
          <div className="relative w-full h-full bg-white rounded-full p-6 shadow-2xl">
            <Image
              src="/logo_app.png"
              alt="WorkLocus Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
              className="rounded-full"
            />
          </div>

          {/* Success Check Icon */}
          <div
            className={`absolute -bottom-2 -right-2 transition-all duration-500 delay-700 transform ${
              showContent ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className="bg-green-500 rounded-full p-3 shadow-lg animate-bounce">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div
          className={`transition-all duration-800 delay-300 transform ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sans">🎉 Kích hoạt thành công!</h1>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              Chúc mừng bạn đã trở thành thành viên của <span className="font-bold text-yellow-200">WorkLocus</span>!
            </p>
            <p className="text-white/80 text-base mt-2">
              Hãy mở ứng dụng và đăng nhập để khám phá thế giới làm việc ngay nào! ✨
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div
          className={`transition-all duration-800 delay-500 transform ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="w-full bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg py-6 rounded-2xl shadow-2xl transform transition-all duration-200 hover:scale-105 hover:shadow-3xl border-0"
          >
            <div className="flex items-center justify-center gap-2">
              <span>🚀 Mở ứng dụng WorkLocus</span>
            </div>
          </Button>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-8 transition-all duration-800 delay-700 transform ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-white/70 text-sm">Bạn có thể đóng trang này và quay lại ứng dụng</p>
        </div>
      </div>

      {/* Floating Success Elements */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiElements.map((element, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute animate-confetti opacity-80"
              style={{
                left: element.left,
                animationDelay: element.delay,
                animationDuration: "3s",
              }}
            >
              <div className={`w-3 h-3 ${element.color} rounded-full`} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ActiveAccountPage
