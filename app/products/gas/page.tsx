import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Fuel, MapPin, Phone, Clock, CheckCircle, ArrowRight, Package, Settings, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GasServicesPage() {
  const gasServices = [
    {
      title: "LPG Distribution",
      description: "Quality LPG supply for domestic and commercial use with reliable delivery service",
      icon: Package,
      features: ["Reliable supply chain", "Quality assurance", "Competitive pricing", "Safe handling procedures"],
      image: "/gas banner.jpg",
    },
    {
      title: "Gas Plant Installation",
      description: "Professional gas plant setup and installation services with technical expertise",
      icon: Settings,
      features: ["Expert installation", "Safety compliance", "Equipment supply", "Technical support"],
      image: "/gas plant installation.jpg",
    },
    {
      title: "Gas Equipment Supply",
      description: "Complete range of gas cylinders and equipment for all your gas needs",
      icon: Truck,
      features: ["Various cylinder sizes", "Safety equipment", "Distributor services", "End user support"],
      image: "/gas supplies.jpeg",
    },
  ]

  const gasPlantLocation = {
    name: "Gas Plant Station",
    address: "Baale Olomi opposite Ola Jesu block industry, Agbede, Ikorodu, Lagos State",
    phone: "09035898910",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    services: ["LPG Distribution", "Gas Plant Installation", "Equipment Supply", "Distributor/End User Services"],
    description: "Professional LPG distribution and gas plant installation services",
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-900 via-orange-800 to-red-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30">
          <Image
            src="/gas banner.jpg"
            alt="Gas Plant Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Fuel className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Gas Plant Services</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Professional LPG distribution and gas plant installation services for domestic and commercial use across Lagos and surrounding areas.
            </p>
            <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
              <Link href="/contact">Get Gas Services Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Gas Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive gas plant solutions from LPG distribution to complete installation services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {gasServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-600">Available</Badge>
                </div>
                <CardHeader>
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gas Plant Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-600 mb-4">NOW SELLING</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Global 5050 Group Gas Plant</h2>
              <p className="text-xl text-gray-600 mb-6">
                Professional gas plant services including LPG distribution and installation. We serve both distributors and end users with quality equipment and reliable service.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Quality LPG cylinders in various sizes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Professional installation services</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Distributor and end user support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Safety compliance and equipment</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact">
                  Contact Gas Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="/gas banner.jpg"
                alt="Global 5050 Group Gas Plant Banner"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gas Plant Location</h2>
            <p className="text-xl text-gray-600">Visit our gas plant station for all your LPG needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Fuel className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{gasPlantLocation.name}</h3>
                      <p className="text-orange-100">{gasPlantLocation.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">{gasPlantLocation.address}</p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                        <p className="text-gray-600">{gasPlantLocation.phone}</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Operating Hours</h4>
                        <p className="text-gray-600">{gasPlantLocation.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="space-y-3">
                      {gasPlantLocation.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now: {gasPlantLocation.phone}
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Send Message</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/locations">View All Locations</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 via-orange-800 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need Gas Plant Services?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for reliable LPG distribution, professional gas plant installation, and quality equipment supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
              <Link href="/contact">Get Your Gas Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-900 bg-transparent"
            >
              <Link href="/locations">Visit Our Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
