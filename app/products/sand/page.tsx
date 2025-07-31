import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, CheckCircle, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SandAggregatesPage() {
  const sandProducts = [
    {
      name: "Sharp Sand (River Sand)",
      description: "Premium grade sharp sand for concrete and masonry work - same as river sand",
      features: ["Clean and washed", "Consistent grain size", "High quality", "Natural texture"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHARP-SAND.jpg-aDgCvCLGRVLLlzaltZMJtd5EHNAr4s.jpeg",
      applications: ["Concrete mixing", "Masonry work", "Plastering", "Foundation work"],
      specifications: ["Fine to medium grain", "Low clay content", "Excellent workability"],
    },
    {
      name: "Stone Chippings",
      description: "Various sizes of stone chippings for concrete and decoration",
      features: ["Multiple sizes", "Durable material", "Decorative options", "High strength"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stone%20chippings-M5xcI22o4AEpQWEB1fUVlxR2OdIxMY.jpeg",
      applications: ["Concrete aggregate", "Road construction", "Decorative landscaping", "Drainage systems"],
      specifications: ["6mm, 10mm, 20mm sizes", "Angular shape", "High compressive strength"],
    },
    {
      name: "Granite Aggregates",
      description: "High-quality granite for heavy-duty construction",
      features: ["High strength", "Weather resistant", "Long-lasting", "Premium grade"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/granite%20aggregates-ZH5l3v2Eem6J3i4yhrZc875xoUy8Bq.webp",
      applications: ["Heavy construction", "Road base", "Concrete production", "Infrastructure projects"],
      specifications: ["Various grades available", "Excellent durability", "Superior binding properties"],
    },
  ]

  const benefits = [
    {
      title: "Quality Sourcing",
      description: "Materials sourced from reliable quarries",
    },
    {
      title: "Consistent Supply",
      description: "Regular availability across all locations",
    },
    {
      title: "Bulk Delivery",
      description: "Efficient delivery for large quantities",
    },
    {
      title: "Competitive Pricing",
      description: "Best rates for construction materials",
    },
  ]

  const serviceAreas = ["Lagos State", "Imo State", "Rivers State", "Abuja FCT", "Kwara State", "Surrounding Areas"]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-900 via-yellow-800 to-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHARP-SAND.jpg-aDgCvCLGRVLLlzaltZMJtd5EHNAr4s.jpeg')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Sand & Aggregates</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Quality aggregates essential for construction projects. Premium sand, stone chippings, and granite
              aggregates sourced from reliable quarries.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover-lift">
                <CardContent className="pt-8">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Sand & Aggregate Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality construction aggregates for all your building needs
            </p>
          </div>

          <div className="space-y-20">
            {sandProducts.map((product, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full hover-lift"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="border-none shadow-none">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                          Available in Bulk
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl lg:text-3xl">{product.name}</CardTitle>
                      <CardDescription className="text-lg">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, appIndex) => (
                              <Badge key={appIndex} variant="outline" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Specifications:</h4>
                          <ul className="space-y-1">
                            {product.specifications.map((spec, specIndex) => (
                              <li key={specIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button asChild className="mt-4 bg-orange-600 hover:bg-orange-700">
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

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">We deliver sand and aggregates across Nigeria</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bulk Supply & Delivery</h2>
              <p className="text-xl text-orange-100 mb-6">
                Large quantity orders with reliable delivery across Nigeria. Perfect for construction companies,
                contractors, and developers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Volume discounts available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Reliable delivery schedule</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Quality assurance testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Flexible payment terms</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
                <Link href="/contact">
                  Request Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHARP-SAND.jpg-aDgCvCLGRVLLlzaltZMJtd5EHNAr4s.jpeg"
                alt="Sand and aggregates supply"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
