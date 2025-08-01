"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Building2, Truck, Package, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Lagos State Housing Development",
      description:
        "When they needed 800 bags of premium cement fast, we delivered. Dangote and BUA cement plus all the aggregates for this major residential project",
      category: "Cement Distribution",
      location: "Lagos State",
      year: "2023",
      materials: [
        "Dangote Cement (500 bags)",
        "BUA Cement (300 bags)",
        "Sharp Sand (200 tons)",
        "Granite Chippings (150 tons)",
        "Steel Reinforcement Bars",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Owerri Commercial Complex",
      description: "Complete material supply and facility management for commercial building",
      category: "Mixed Services",
      location: "Owerri, Imo State",
      year: "2023",
      materials: ["Lafarge Cement", "Decorative Chippings", "Concrete Blocks", "Facility Management", "Procurement"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Industrial Gas Supply Contract",
      description:
        "A manufacturing plant that couldn't afford downtime. We set up their entire LPG supply chain and keep it running 24/7",
      category: "Gas Operations",
      location: "Abuja",
      year: "2023",
      materials: [
        "Monthly LPG Supply (50 tons)",
        "Industrial Gas Cylinders",
        "Safety Equipment Package",
        "Emergency Response Service",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "School Infrastructure Project",
      description: "Comprehensive construction materials supply for educational facility",
      category: "Construction Materials",
      location: "Port Harcourt",
      year: "2022",
      materials: ["BUA Cement", "Blocks", "Roofing Materials", "Electrical Supplies"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Plastic Wholesale Distribution",
      description: "Large-scale plastic products supply to retail chains across North-Central Nigeria",
      category: "Plastic Wholesale",
      location: "Kwara State",
      year: "2023",
      materials: ["Plastic Containers (10,000 units)", "Industrial Plastics", "Household Items", "Custom Orders"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Residential Gas Installation",
      description: "Complete gas supply and installation for residential estate",
      category: "Gas Operations",
      location: "Various Locations",
      year: "2023",
      materials: ["LPG Installation", "Gas Cylinders (150 units)", "Safety Systems", "Maintenance Contract"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10,000+", label: "Tons of Materials Supplied" },
    { number: "12", label: "Years of Experience" },
  ]

  const [activeFilter, setActiveFilter] = useState("all")

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
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Projects We&apos;re Proud Of</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every successful project starts with reliable suppliers. Here are some of the builds we&apos;ve been part of
              across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className={activeFilter === "all" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setActiveFilter("cement")}
              variant={activeFilter === "cement" ? "default" : "outline"}
              className={activeFilter === "cement" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              Cement Projects
            </Button>
            <Button
              onClick={() => setActiveFilter("construction")}
              variant={activeFilter === "construction" ? "default" : "outline"}
              className={activeFilter === "construction" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              Construction Projects
            </Button>
            <Button
              onClick={() => setActiveFilter("plastic")}
              variant={activeFilter === "plastic" ? "default" : "outline"}
              className={activeFilter === "plastic" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              Plastic Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
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
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2">Materials & Services:</h4>
                    <ul className="space-y-1">
                      {project.materials.map((material, materialIndex) => (
                        <li key={materialIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Cement Distribution</h3>
              <p className="text-gray-600 text-sm">Dangote, BUA, Lafarge cement</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Gas Operations</h3>
              <p className="text-gray-600 text-sm">LPG supply and distribution</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Plastic Wholesale</h3>
              <p className="text-gray-600 text-sm">Bulk plastic products from Kwara warehouses</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Logistics & Supply</h3>
              <p className="text-gray-600 text-sm">Procurement and delivery services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Project Could Be Next</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Big or small, residential or commercial, we&apos;ve got the experience and inventory to make your project a
            success story too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Start My Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/services">See What We Supply</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
