import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Palette, Building2, Settings, CheckCircle, ArrowRight, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConstructionServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Architectural Design",
      description: "Professional architectural design services to bring your vision to life",
      features: [
        "Residential building design",
        "Commercial structure planning",
        "Industrial facility design",
        "3D visualization services",
        "Building permit documentation",
        "Structural engineering consultation",
      ],
      process: [
        "Initial consultation and site survey",
        "Concept development and sketches",
        "Detailed architectural drawings",
        "3D modeling and visualization",
        "Final documentation and permits",
      ],
      image: "/architectural-design.jpg",
    },
    {
      icon: Building2,
      title: "Building Construction",
      description: "Complete construction services from foundation to finishing",
      features: [
        "Foundation and structural work",
        "Residential construction",
        "Commercial building projects",
        "Renovation and remodeling",
        "Quality control and supervision",
        "Project timeline management",
      ],
      process: [
        "Site preparation and foundation",
        "Structural framework construction",
        "Roofing and weatherproofing",
        "Interior and exterior finishing",
        "Final inspection and handover",
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote%20global.jpg-GD4UJjdfdU4eRVS2c8VEqOgNNp4xdI.jpeg",
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Comprehensive project management for construction projects",
      features: [
        "Project planning and scheduling",
        "Resource allocation and management",
        "Quality assurance and control",
        "Budget management and cost control",
        "Contractor coordination",
        "Progress monitoring and reporting",
      ],
      process: [
        "Project scope definition",
        "Resource planning and allocation",
        "Timeline development",
        "Execution monitoring",
        "Quality control and delivery",
      ],
      image: "/engineering-planning.jpg",
    },
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional architects, engineers, and project managers with years of experience",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring the highest standards",
    },
    {
      icon: CheckCircle,
      title: "Timely Delivery",
      description: "Committed to delivering projects on time and within budget",
    },
  ]

  const projectTypes = [
    {
      name: "Residential Buildings",
      description: "Houses, apartments, and residential complexes",
      image: "/residential building.webp",
    },
    {
      name: "Commercial Buildings",
      description: "Offices, retail spaces, and commercial complexes",
      image: "/commercial building.jpeg",
    },
    {
      name: "Industrial Facilities",
      description: "Warehouses, factories, and industrial structures",
      image: "/construction-workers.jpg",
    },
    {
      name: "Institutional Buildings",
      description: "Schools, hospitals, and public buildings",
      image: "/institutional building.jpeg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 hero-bg-dangote" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Construction Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professional architectural design, building construction, and project management services to bring your
              vision to life with quality and precision.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover-lift">
                <CardContent className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction services from initial design to project completion
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="space-y-6">
                    <div>
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Service Features:</h4>
                      <div className="grid gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Our Process:</h4>
                      <div className="space-y-2">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <Badge variant="secondary" className="mt-1">
                              {stepIndex + 1}
                            </Badge>
                            <span className="text-gray-600">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">
                        Get {service.title} Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Types We Handle</h2>
            <p className="text-xl text-gray-600">We work on various types of construction projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="hover-lift">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            From initial design to final construction, we provide comprehensive services to bring your building vision
            to life with quality and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
