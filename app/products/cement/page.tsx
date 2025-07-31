import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Award, Truck, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CementProductsPage() {
  const cementBrands = [
    {
      name: "Lafarge Africa Plc",
      description: "Premium quality cement from one of Africa's leading manufacturers",
      products: [
        {
          name: "Supaset",
          description: "Fast-setting cement for quick construction projects",
          features: ["Quick setting", "High strength", "Durable finish"],
        },
        {
          name: "Unicem",
          description: "Universal cement for all construction needs",
          features: ["Versatile application", "Consistent quality", "Cost-effective"],
        },
        {
          name: "Watershed",
          description: "Water-resistant cement for moisture-prone areas",
          features: ["Water resistant", "Anti-corrosion", "Long-lasting"],
        },
        {
          name: "Supafix",
          description: "Specialized cement for repair and maintenance",
          features: ["Quick repair", "Strong adhesion", "Weather resistant"],
        },
      ],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lafarge%20.jpg-s9FYIJ2SPDi8KwGurrJzWclXIjUQ5m.jpeg",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lafarge%20.jpg-s9FYIJ2SPDi8KwGurrJzWclXIjUQ5m.jpeg",
    },
    {
      name: "Dangote Cement PLC",
      description: "Nigeria's leading cement manufacturer with superior quality products",
      products: [
        {
          name: "Block Master",
          description: "Specialized cement for block making and masonry work",
          features: ["Perfect for blocks", "High compressive strength", "Smooth finish"],
        },
        {
          name: "Dangote 3X",
          description: "Triple strength cement for heavy-duty construction",
          features: ["Triple strength", "Superior durability", "Professional grade"],
        },
        {
          name: "Falcon",
          description: "Premium cement for high-rise and commercial buildings",
          features: ["High-rise suitable", "Commercial grade", "Excellent workability"],
        },
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote.jpg-lGHcpL3le88fhqNLflCtX6HuYGAfGZ.jpeg",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote.jpg-lGHcpL3le88fhqNLflCtX6HuYGAfGZ.jpeg",
    },
    {
      name: "BUA Cement",
      description: "Quality cement products offering excellent value and performance",
      products: [
        {
          name: "BUA Premium",
          description: "High-quality cement for residential and commercial use",
          features: ["Premium quality", "Consistent performance", "Value for money"],
        },
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bua-LpZrBbRtrccgEhaEnm52Z6Heu1zvVN.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bua-LpZrBbRtrccgEhaEnm52Z6Heu1zvVN.png",
    },
    {
      name: "Mangal Cement",
      description: "Reliable cement products for various construction applications",
      products: [
        {
          name: "Mangal Standard",
          description: "Standard grade cement for general construction",
          features: ["Reliable quality", "Good workability", "Affordable pricing"],
        },
      ],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mangal-7WhEWKzVD7Mjvp92GSDVJVu1H81nv6.jpeg",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mangal-7WhEWKzVD7Mjvp92GSDVJVu1H81nv6.jpeg",
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Authentic Products",
      description: "Direct from manufacturers with authenticity guarantee",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Reliable delivery across all Nigerian states",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and testing procedures",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote%20global.jpg-GD4UJjdfdU4eRVS2c8VEqOgNNp4xdI.jpeg')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Premium Cement Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Official distributor for Nigeria's leading cement manufacturers. Authentic products, competitive prices,
              nationwide delivery.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Get Bulk Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover-lift">
                <CardContent className="pt-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cement Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Cement Brands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are official distributors for Nigeria's most trusted cement manufacturers
            </p>
          </div>

          <div className="space-y-20">
            {cementBrands.map((brand, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="space-y-6">
                    <div>
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        width={150}
                        height={80}
                        className="mb-4"
                      />
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{brand.name}</h3>
                      <p className="text-lg text-gray-600 mb-6">{brand.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Available Products:</h4>
                      <div className="grid gap-4">
                        {brand.products.map((product, productIndex) => (
                          <Card key={productIndex} className="border-l-4 border-blue-600">
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                <Badge variant="secondary">Available</Badge>
                              </div>
                              <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-1">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-sm text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">
                        Get {brand.name} Quote
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need Bulk Cement Supply?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us for competitive bulk pricing and nationwide delivery. We supply to construction companies,
            contractors, and developers across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Request Bulk Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/locations">Find Nearest Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
