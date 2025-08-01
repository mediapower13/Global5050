import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Package, Settings, Truck, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Premium Cement Products",
      description: "Official distributor for Nigeria's leading cement manufacturers",
      icon: Building2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global5050%20cement%20logo%20.jpg-fq93MY9myi0sgEbqvgWMCcMVnQPIbO.jpeg",
      href: "/products/cement",
      features: ["Lafarge Africa Plc", "Dangote Cement PLC", "BUA Cement", "Mangal Cement"],
    },
    {
      title: "Plastic Products",
      description: "Quality plastic products from our Kwara warehouses",
      icon: Package,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/industrial%20containers.jpg-MaSgUmCpepx84baKiRJ91dVapRq26A.jpeg",
      href: "/products/plastic",
      features: ["Industrial Containers", "Household Items", "Bulk Wholesale", "Custom Orders"],
    },
    {
      title: "Sand & Aggregates",
      description: "Premium construction aggregates and sand products",
      icon: Truck,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHARP-SAND.jpg-aDgCvCLGRVLLlzaltZMJtd5EHNAr4s.jpeg",
      href: "/products/sand",
      features: ["Sharp Sand (River Sand)", "Stone Chippings", "Granite Aggregates", "Bulk Supply"],
    },
    {
      title: "Construction Services",
      description: "Professional architectural design and building construction",
      icon: Settings,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote%20global.jpg-GD4UJjdfdU4eRVS2c8VEqOgNNp4xdI.jpeg",
      href: "/products/services",
      features: ["Architectural Design", "Building Construction", "Project Management", "Quality Assurance"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 hero-bg-dangote" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Products & Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive construction solutions from premium cement distribution to complete building services across
              Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium cement brands to complete construction services - everything you need for your building
              projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-lg">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Key Offerings:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={category.href}>
                        Explore {category.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cement Brands</h2>
            <p className="text-xl text-gray-600">
              Official distributor for Nigeria&apos;s most trusted cement manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lafarge%20.jpg-s9FYIJ2SPDi8KwGurrJzWclXIjUQ5m.jpeg"
                  alt="Lafarge cement"
                  width={200}
                  height={120}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Lafarge Africa</h3>
                <p className="text-gray-600 text-sm">Supaset, Unicem, Watershed</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote.jpg-lGHcpL3le88fhqNLflCtX6HuYGAfGZ.jpeg"
                  alt="Dangote cement"
                  width={200}
                  height={120}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Dangote Cement</h3>
                <p className="text-gray-600 text-sm">3X, Block Master, Falcon</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bua-LpZrBbRtrccgEhaEnm52Z6Heu1zvVN.png"
                  alt="BUA cement"
                  width={200}
                  height={120}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg mb-2">BUA Cement</h3>
                <p className="text-gray-600 text-sm">Premium Quality</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="pt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mangal-7WhEWKzVD7Mjvp92GSDVJVu1H81nv6.jpeg"
                  alt="Mangal cement"
                  width={200}
                  height={120}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg mb-2">Mangal Cement</h3>
                <p className="text-gray-600 text-sm">Reliable Performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need Construction Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            From premium cement to complete construction services, we provide everything you need for successful
            building projects across Nigeria.
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
