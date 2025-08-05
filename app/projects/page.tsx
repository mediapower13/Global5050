"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Building2, Truck, Package, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])

  useEffect(() => {
    setIsVisible(true)
    
    // Animate stats numbers
    const statTargets = [150, 50, 10000, 12]
    const animationDuration = 2000
    const startTime = Date.now()
    
    const animateStats = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / animationDuration, 1)
      
      setAnimatedStats(statTargets.map(target => 
        Math.floor(target * progress)
      ))
      
      if (progress < 1) {
        requestAnimationFrame(animateStats)
      }
    }
    
    const timer = setTimeout(() => {
      animateStats()
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  const projects = [
    {
      title: "Lagos State Housing Development",
      description:
        "When they needed 800 bags of premium cement fast, we delivered. Dangote and BUA cement plus all the aggregates for this major residential project",
      category: "Cement Distribution",
      location: "Lagos (Head Office)",
      year: "2023",
      materials: [
        "Dangote Cement (500 bags)",
        "BUA Cement (300 bags)",
        "Sharp Sand (200 tons)",
        "Granite Chippings (150 tons)",
        "Steel Reinforcement Bars",
      ],
      image: "/residential building.webp",
    },
    {
      title: "Owerri Commercial Complex",
      description: "Complete material supply and facility management for commercial building",
      category: "Mixed Services",
      location: "Owerri (Operating Office)",
      year: "2023",
      materials: ["Lafarge Cement", "Decorative Chippings", "Concrete Blocks", "Facility Management", "Procurement"],
      image: "/commercial building.jpeg",
    },
    {
      title: "Industrial Gas Supply Contract",
      description:
        "A manufacturing plant that couldn't afford downtime. We set up their entire LPG supply chain and keep it running 24/7",
      category: "Gas Operations",
      location: "Abuja (Operating Office)",
      year: "2023",
      materials: [
        "Monthly LPG Supply (50 tons)",
        "Industrial Gas Cylinders",
        "Safety Equipment Package",
        "Emergency Response Service",
      ],
      image: "/gas supplies.jpeg",
    },
    {
      title: "School Infrastructure Project",
      description: "Comprehensive construction materials supply for educational facility",
      category: "Construction Materials",
      location: "Port Harcourt (Operating Office)",
      year: "2022",
      materials: ["BUA Cement", "Blocks", "Roofing Materials", "Electrical Supplies"],
      image: "/institutional building.jpeg",
    },
    {
      title: "Plastic Wholesale Distribution",
      description: "Large-scale plastic products supply to retail chains across North-Central Nigeria",
      category: "Plastic Wholesale",
      location: "Kwara (Operating Office)",
      year: "2023",
      materials: ["Plastic Containers (10,000 units)", "Industrial Plastics", "Household Items", "Custom Orders"],
      image: "/plastic-bowls.jpg",
    },
    {
      title: "Residential Gas Installation",
      description: "Complete gas supply and installation for residential estate",
      category: "Gas Operations",
      location: "Various Locations",
      year: "2023",
      materials: ["LPG Installation", "Gas Cylinders (150 units)", "Safety Systems", "Maintenance Contract"],
      image: "/gas plant installation.jpg",
    },
  ]

  const stats = [
    { number: `${animatedStats[0]}+`, label: "Projects Completed" },
    { number: `${animatedStats[1]}+`, label: "Happy Clients" },
    { number: `${animatedStats[2].toLocaleString()}+`, label: "Tons of Materials Supplied" },
    { number: `${animatedStats[3]}`, label: "Years of Experience" },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    if (activeFilter === "cement") return project.category === "Cement Distribution"
    if (activeFilter === "construction")
      return project.category === "Construction Materials" || project.category === "Mixed Services"
    if (activeFilter === "plastic") return project.category === "Plastic Wholesale"
    return true
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Projects We&apos;re Proud Of
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every successful project starts with reliable suppliers. Here are some of the builds we&apos;ve been part of
              across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "all" 
                  ? "bg-blue-600 hover:bg-blue-700 shadow-lg scale-105" 
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setActiveFilter("cement")}
              variant={activeFilter === "cement" ? "default" : "outline"}
              className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "cement" 
                  ? "bg-blue-600 hover:bg-blue-700 shadow-lg scale-105" 
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              Cement Projects
            </Button>
            <Button
              onClick={() => setActiveFilter("construction")}
              variant={activeFilter === "construction" ? "default" : "outline"}
              className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "construction" 
                  ? "bg-blue-600 hover:bg-blue-700 shadow-lg scale-105" 
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              Construction Projects
            </Button>
            <Button
              onClick={() => setActiveFilter("plastic")}
              variant={activeFilter === "plastic" ? "default" : "outline"}
              className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                activeFilter === "plastic" 
                  ? "bg-blue-600 hover:bg-blue-700 shadow-lg scale-105" 
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              Plastic Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 ease-out hover:scale-110 hover:shadow-lg rounded-lg p-6 bg-white/50 backdrop-blur-sm ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Recent successful deliveries across various service categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden group cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {project.category}
                  </Badge>
                </div>
                <CardHeader className="transition-all duration-300 group-hover:bg-blue-50/50">
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-blue-700">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="transition-colors duration-300 group-hover:text-gray-700">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 transition-all duration-300 group-hover:text-blue-600">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1 transition-all duration-300 group-hover:text-blue-600">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="transition-all duration-300 group-hover:bg-blue-50/50">
                  <div>
                    <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-700">
                      Materials & Services:
                    </h4>
                    <ul className="space-y-1">
                      {project.materials.map((material, materialIndex) => (
                        <li 
                          key={materialIndex} 
                          className="text-sm text-gray-600 flex items-center gap-2 transition-all duration-300 group-hover:text-gray-800"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-125"></div>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Project Categories</h2>
            <p className="text-xl text-gray-600">We deliver across multiple service categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700" />
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-blue-700">Cement Distribution</h3>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">Dangote, BUA, Lafarge cement</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-green-700" />
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-green-700">Gas Operations</h3>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">LPG supply and distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <Package className="h-12 w-12 text-purple-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-700" />
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-purple-700">Plastic Wholesale</h3>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">Bulk plastic products from Kwara operating offices</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center group transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
              <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-700" />
              <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-orange-700">Logistics & Supply</h3>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">Procurement and delivery services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Your Project Could Be Next
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Big or small, residential or commercial, we&apos;ve got the experience and inventory to make your project a
            success story too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/contact">Start My Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/services">See What We Supply</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
