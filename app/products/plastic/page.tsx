import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, CheckCircle, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PlasticProductsPage() {
  const plasticProducts = [
    {
      name: "Industrial Containers",
      description: "Heavy-duty plastic containers for industrial use",
      features: ["Chemical resistant", "Various sizes", "Stackable design", "Durable construction"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/industrial%20containers.jpg-MaSgUmCpepx84baKiRJ91dVapRq26A.jpeg",
      applications: ["Industrial storage", "Chemical transport", "Warehouse organization", "Manufacturing"],
    },
    {
      name: "Household Items",
      description: "Quality plastic products for domestic use",
      features: ["Food grade", "Durable material", "Affordable prices", "Colorful designs"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/household%20items.jpg-M74ClQefrQ95lYUwwKrfU2BSjMvaWU.jpeg",
      applications: ["Home storage", "Kitchen use", "Retail display", "Daily household needs"],
    },
  ]

  const locations = [
    {
      name: "Kwara Warehouse - Olunlade",
      address: "Opposite Latara, Olunlade, Ilorin",
      speciality: "Primary plastic products distribution center",
      phone: "08036007621",
    },
    {
      name: "Kwara Warehouse - Idi Ori",
      address: "Opposite Al-Mahruf Filling Station, Idi Ori",
      speciality: "Secondary plastic products warehouse and storage facility",
      phone: "08054186884",
    },
  ]

  const benefits = [
    {
      title: "Bulk Wholesale Pricing",
      description: "Special rates for large quantity orders",
    },
    {
      title: "Direct Warehouse Pickup",
      description: "Convenient pickup from our Kwara locations",
    },
    {
      title: "Quality Assurance",
      description: "All products meet international standards",
    },
    {
      title: "Custom Orders",
      description: "Special orders for specific requirements",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 hero-bg-plastic" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Plastic Products</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive range of quality plastic products from our Kwara warehouses, serving the North-Central
              region with competitive bulk pricing.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
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
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-purple-600" />
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Plastic Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality plastic products for industrial and household use
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {plasticProducts.map((product, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
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
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
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
                        <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700">
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

      {/* Warehouse Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Plastic Warehouses</h2>
            <p className="text-xl text-gray-600">Strategic locations in Kwara State for easy access</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription>{location.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{location.speciality}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-semibold">Phone:</span>
                    <span className="text-blue-600">{location.phone}</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/locations">View on Map</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bulk Orders & Wholesale</h2>
              <p className="text-xl text-purple-100 mb-6">
                Special pricing available for bulk orders and wholesale purchases. Perfect for retailers, distributors,
                and large-scale users.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Volume discounts available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Flexible payment terms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Direct warehouse pickup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Custom orders available</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                <Link href="/contact">
                  Request Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/industrial%20containers.jpg-MaSgUmCpepx84baKiRJ91dVapRq26A.jpeg"
                alt="Plastic products warehouse"
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
