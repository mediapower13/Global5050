"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "4", label: "Cement Brands" },
    { number: "6", label: "Locations" },
  ]

  const productSlides = [
    {
      image: "/lafarge cement new.webp",
      title: "Lafarge Cement Products",
      subtitle: "Supaset • Unicem • Watershed • Supafix",
      description: "Premium quality cement from one of Africa's leading manufacturers",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote.jpg-lGHcpL3le88fhqNLflCtX6HuYGAfGZ.jpeg",
      title: "Dangote Cement Excellence",
      subtitle: "3X • Block Master • Falcon",
      description: "Nigeria's leading cement manufacturer with superior quality products",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bua-LpZrBbRtrccgEhaEnm52Z6Heu1zvVN.png",
      title: "BUA Cement Quality",
      subtitle: "Premium Quality Cement",
      description: "Quality cement products offering excellent value and performance",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mangal-7WhEWKzVD7Mjvp92GSDVJVu1H81nv6.jpeg",
      title: "Mangal Cement Reliability",
      subtitle: "Reliable Performance",
      description: "Reliable cement products for various construction applications",
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [productSlides.length])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote%20global.jpg-GD4UJjdfdU4eRVS2c8VEqOgNNp4xdI.jpeg"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-gray-900/70" />
        </div>

        <div className="container mx-auto px-4 text-white relative z-10">
          <div
            className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
              Building Nigeria&apos;s
              <span className="block text-blue-300">Future Together</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-6 md:mb-8 leading-relaxed">
              To be the partner of choice for those who are building Nigeria, creating sustainable value for our
              stakeholders
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                <Link href="/products">
                  Our Products
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-sm md:max-w-md">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-300" />
                <span className="font-bold text-lg md:text-xl"> 0803 574 1810</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-300" />
                <span className="text-xs md:text-sm">Lagos Head Office</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Carousel */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Premium Cement Brands</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Official distributor for Nigeria&apos;s most trusted cement manufacturers
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <div
                className={`flex transition-transform duration-700 ease-in-out carousel-slide-${currentSlide}`}
              >
                {productSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0 bg-white">
                      {/* Image Side */}
                      <div className="relative h-96 lg:h-[500px]">
                        <Image
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
                      </div>

                      {/* Content Side */}
                      <div className="flex items-center p-8 lg:p-12">
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{slide.title}</h3>
                          <p className="text-xl text-blue-600 font-semibold mb-4">{slide.subtitle}</p>
                          <p className="text-gray-600 text-lg leading-relaxed mb-8">{slide.description}</p>
                          <Button asChild className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/products/cement">
                              View Products
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {productSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  title={`Slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
              aria-label="Previous slide"
              title="Previous slide"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % productSlides.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
              aria-label="Next slide"
              title="Next slide"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions beyond cement distribution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global5050%20cement%20logo%20.jpg-fq93MY9myi0sgEbqvgWMCcMVnQPIbO.jpeg"
                  alt="Cement Distribution"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Cement Distribution</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Official distributor for premium cement brands across Nigeria</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/products/cement">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64">
                <Image
                  src="/plastic-bowls.jpg"
                  alt="Plastic Products"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Plastic Products</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Quality plastic products from our Kwara operating office</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/products/plastic">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote%20global.jpg-GD4UJjdfdU4eRVS2c8VEqOgNNp4xdI.jpeg"
                  alt="Construction Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Construction Services</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Professional architectural design and building construction</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/products/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with Nigeria&apos;s trusted construction solutions provider
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg">
              <Link href="/contact">Get Quote Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-8 py-4 text-lg"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
