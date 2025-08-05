import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Truck, Palette, Package, Settings, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Premium Cement Distribution",
      description:
        "Official distributor for Nigeria's leading cement manufacturers with guaranteed authenticity and competitive pricing",
      features: [
        "Lafarge Africa Plc - Supaset, Unicem, Watershed, Supafix",
        "Dangote Cement PLC - Block Master, Dangote 3X, Falcon",
        "BUA Cement - Quality and Value",
        "Mangal Cement - Reliable Performance",
        "Bulk Orders with Discounts",
        "Nationwide Delivery Available",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Premium+Cement+Brands",
    },
    {
      icon: Palette,
      title: "Architectural Design Services",
      description:
        "Professional architectural design services to transform your vision into detailed, functional, and aesthetically pleasing building plans",
      features: [
        "Residential Building Design",
        "Commercial Structure Planning",
        "Industrial Facility Design",
        "3D Visualization Services",
        "Building Permit Documentation",
        "Construction Supervision",
      ],
      image: "/architectural-design.jpg",
    },
    {
      icon: Building2,
      title: "Building Construction",
      description:
        "Complete construction services from foundation to finishing, ensuring quality workmanship and timely project completion",
      features: [
        "Foundation and Structural Work",
        "Residential Construction",
        "Commercial Building Projects",
        "Renovation and Remodeling",
        "Quality Control and Supervision",
        "Project Management Services",
      ],
      image: "/construction-site.jpg",
    },
    {
      icon: Truck,
      title: "Sand and Chippings Supply",
      description:
        "Quality aggregates essential for construction projects, sourced from reliable quarries and delivered fresh",
      features: [
        "Sharp Sand - Premium Grade",
        "River Sand - Clean and Washed",
        "Stone Chippings - Various Sizes",
        "Granite Aggregates",
        "Decorative Stone Options",
        "Bulk Supply with Delivery",
      ],
      image: "/placeholder.svg?height=300&width=400&text=Sand+and+Chippings",
    },
    {
      icon: Package,
      title: "Plastic Products Wholesale",
      description:
        "Comprehensive range of plastic products from our Kwara operating office, serving the North-Central region with competitive bulk pricing",
      features: [
        "Industrial Plastic Containers",
        "Household Plastic Items",
        "Storage and Packaging Solutions",
        "Custom Plastic Products",
        "Bulk Wholesale Pricing",
        "Direct Operating Office Pickup Available",
      ],
      image: "/plastic-bowls.jpg",
    },
    {
      icon: Settings,
      title: "Construction Materials Supply",
      description: "Complete range of construction materials to support your building projects from start to finish",
      features: [
        "Steel Reinforcement Bars",
        "Roofing Materials",
        "Electrical Supplies",
        "Plumbing Materials",
        "Tiles and Finishing Materials",
        "Hardware and Tools",
      ],
      image: "/engineering-planning.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Products & Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From premium cement brands to complete construction services - we provide everything you need to build
              with confidence and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
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
                  <Card className="border-none shadow-none">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <service.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <Badge variant="secondary">Professional Service</Badge>
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3">What we offer:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button asChild className="mt-4">
                          <Link href="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Cement Brands</h2>
            <p className="text-xl text-gray-600">
              Official distributor for Nigeria&apos;s most trusted cement manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120&text=Lafarge+Logo"
                  alt="Lafarge cement"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Lafarge Africa Plc</h3>
                <p className="text-gray-600 text-sm">Supaset, Unicem, Watershed, Supafix</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120&text=Dangote+Logo"
                  alt="Dangote cement"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Dangote Cement PLC</h3>
                <p className="text-gray-600 text-sm">Block Master, Dangote 3X, Falcon</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120&text=BUA+Logo"
                  alt="BUA cement"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">BUA Cement</h3>
                <p className="text-gray-600 text-sm">Quality and Value</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=120&width=120&text=Mangal+Logo"
                  alt="Mangal cement"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Mangal Cement</h3>
                <p className="text-gray-600 text-sm">Reliable Performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need premium cement, architectural design, or complete construction services - we have the
            expertise and products to make your project a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Get Your Quote</Link>
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
