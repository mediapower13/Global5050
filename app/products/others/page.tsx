import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Truck, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OtherProductsPage() {
  const productCategories = [
    {
      title: "Sand & Aggregates",
      description: "Quality aggregates essential for construction projects",
      icon: Truck,
      products: [
        {
          name: "Sharp Sand (River Sand)",
          description: "Premium grade sharp sand for concrete and masonry work - same as river sand",
          features: ["Clean and washed", "Consistent grain size", "High quality", "Natural texture"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHARP-SAND.jpg-aDgCvCLGRVLLlzaltZMJtd5EHNAr4s.jpeg",
        },
        {
          name: "Stone Chippings",
          description: "Various sizes of stone chippings for concrete and decoration",
          features: ["Multiple sizes", "Durable material", "Decorative options", "High strength"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stone%20chippings-M5xcI22o4AEpQWEB1fUVlxR2OdIxMY.jpeg",
        },
        {
          name: "Granite Aggregates",
          description: "High-quality granite for heavy-duty construction",
          features: ["High strength", "Weather resistant", "Long-lasting", "Premium grade"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/granite%20aggregates-ZH5l3v2Eem6J3i4yhrZc875xoUy8Bq.webp",
        },
      ],
    },
    {
      title: "Plastic Products",
      description: "Comprehensive range from our Kwara operating offices",
      icon: Package,
      products: [
        {
          name: "Industrial Containers",
          description: "Heavy-duty plastic containers for industrial use",
          features: ["Chemical resistant", "Various sizes", "Stackable design", "Durable construction"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/industrial%20containers.jpg-MaSgUmCpepx84baKiRJ91dVapRq26A.jpeg",
        },
        {
          name: "Household Items",
          description: "Quality plastic products for domestic use",
          features: ["Food grade", "Durable material", "Affordable prices", "Colorful designs"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/household%20items.jpg-M74ClQefrQ95lYUwwKrfU2BSjMvaWU.jpeg",
        },
      ],
    },
    {
      title: "Construction Materials",
      description: "Complete range of building materials",
      icon: MapPin,
      products: [
        {
          name: "Steel Reinforcement",
          description: "High-grade steel bars for concrete reinforcement",
          features: ["Various diameters", "Corrosion resistant", "Standard lengths", "High tensile strength"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steel%20reinforcement-XmP2k50ngQV24Ly8XejfVJSRFk6olv.avif",
        },
        {
          name: "Roofing Materials",
          description: "Quality roofing sheets and accessories",
          features: ["Weather resistant", "Multiple profiles", "Long warranty", "Easy installation"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roofing%20materials-jc9OqIzWOJwTo5OpyKIZ95S0AjTTEW.avif",
        },
        {
          name: "Electrical Supplies",
          description: "Electrical materials for construction projects",
          features: ["Standard compliant", "Quality brands", "Complete range", "Professional grade"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electrical%20supplies-sVKojgyx1bTuleRYOVV4o6SEX1eL2u.jpeg",
        },
        {
          name: "Plumbing Materials",
          description: "Pipes, fittings, and plumbing accessories",
          features: ["Pressure tested", "Various sizes", "Durable materials", "Easy installation"],
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plumbing%20material-TgvoJjS7e6GfZPb7eH1oqeW33hgmnn.webp",
        },
      ],
    },
  ]

const locations = [
  {
    name: "Kwara Operating Office - Olunlade",
    address: "Opposite Latara, Olunlade, Ilorin",
    speciality: "Plastic Products Wholesale",
  },
  {
    name: "Kwara Operating Office - Idi Ori",
    address: "Opposite Al-Mahruf Filling Station, Idi Ori",
    speciality: "Plastic Products & Storage",
  },
  {
    name: "Lagos Head Office",
    address: "1B Maboreje Street, Agbede, Agric, Ikorodu",
    speciality: "All Construction Materials",
  },
]

return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 hero-bg-dangote" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Other Products</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Complete range of construction materials, sand & aggregates, and plastic products to support all your
              building and industrial needs.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Request Product Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="hover-lift">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600">Available</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Locations</h2>
            <p className="text-xl text-gray-600">Strategic locations for easy access to our products</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription>{location.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4">
                    {location.speciality}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-4">Contact: 08036007621, 08054186884</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/locations">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Bulk Orders & Wholesale</h2>
              <p className="text-xl text-blue-100 mb-6">
                Special pricing available for bulk orders and wholesale purchases. Perfect for contractors, developers,
                and retailers.
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
                  <span>Direct operating office pickup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Nationwide delivery options</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/contact">
                  Request Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/industrial%20containers.jpg-MaSgUmCpepx84baKiRJ91dVapRq26A.jpeg"
                alt="Bulk products operating office"
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
