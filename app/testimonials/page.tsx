import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Engr. Adebayo Ogundimu",
      company: "Ogundimu Construction Ltd",
      location: "Lagos",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+1",
      testimonial:
        "Global 50:50 has been our cement supplier for over 4 years. Their Dangote cement is always authentic, delivery is prompt, and prices are competitive. We've completed over 20 projects with their materials - never had quality issues.",
      project: "Residential Estate Development",
    },
    {
      name: "Mrs. Chioma Okwu",
      company: "Golden Gate Restaurant Chain",
      location: "Abuja",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+2",
      testimonial:
        "Running 5 restaurants means we can't afford gas supply interruptions. Global 50:50 understands this. Their LPG supply is consistent, safety standards are top-notch, and their emergency response is excellent.",
      project: "Restaurant Gas Supply Contract",
    },
    {
      name: "Alhaji Musa Ibrahim",
      company: "Ibrahim Trading Company",
      location: "Ilorin, Kwara",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+3",
      testimonial:
        "Best plastic wholesale prices in North-Central Nigeria. Their Kwara operating office makes pickup convenient, and bulk discounts help our profit margins. Been buying from them for 3 years now.",
      project: "Plastic Products Wholesale",
    },
    {
      name: "Dr. Emmanuel Nwosu",
      company: "Nwosu Medical Centre",
      location: "Owerri",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+4",
      testimonial:
        "When we were building our new medical facility, Global 50:50 supplied all our cement and construction materials. Quality was excellent, delivery was on schedule, and their site engineer provided valuable technical support.",
      project: "Medical Facility Construction",
    },
    {
      name: "Chief Mrs. Folake Adeyemi",
      company: "Adeyemi Properties",
      location: "Lagos",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+5",
      testimonial:
        "I've been in real estate for 15 years, and finding reliable suppliers is crucial. Global 50:50 delivers consistently - BUA cement, blocks, aggregates - everything we need for our housing projects. Their customer service is exceptional.",
      project: "Multiple Housing Projects",
    },
    {
      name: "Mr. Peter Okafor",
      company: "Okafor Manufacturing Ltd",
      location: "Port Harcourt",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+6",
      testimonial:
        "Our factory requires continuous gas supply for production. Global 50:50's industrial LPG service is reliable, their safety protocols are strict, and they provide 24/7 support. Production has never stopped due to gas issues.",
      project: "Industrial Gas Supply",
    },
    {
      name: "Barr. Kemi Adesanya",
      company: "Adesanya & Associates",
      location: "Abuja",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+7",
      testimonial:
        "Built our new office complex using materials from Global 50:50. Lafarge cement, quality blocks, and excellent customer service. The project was completed on time and within budget. Highly recommended.",
      project: "Office Complex Construction",
    },
    {
      name: "Alhaji Garba Mohammed",
      company: "Mohammed Transport Services",
      location: "Abuja",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=Customer+8",
      testimonial:
        "When building our new transport terminal, we needed large quantities of cement and blocks. Global 50:50 handled the bulk order professionally, offered good discounts, and delivered everything on schedule.",
      project: "Transport Terminal Construction",
    },
  ]

  const stats = [
    { number: "500+", label: "Satisfied Customers" },
    { number: "98%", label: "Customer Retention Rate" },
    { number: "1000+", label: "Projects Completed" },
    { number: "12", label: "Years of Trust" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">What Our Customers Say</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real feedback from real businesses across Nigeria. These testimonials reflect our commitment to quality,
              reliability, and exceptional customer service.
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from businesses that trust Global 50:50 Concepts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{testimonial.company}</CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative">
                      <Quote className="h-6 w-6 text-blue-600 mb-2" />
                      <p className="text-gray-600 italic leading-relaxed">{testimonial.testimonial}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Photos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Customers in Action</h2>
            <p className="text-xl text-gray-600">Projects completed with Global 50:50 materials and services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Customer+Project+1"
                alt="Customer project"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">Residential Complex - Lagos</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Customer+Project+2"
                alt="Customer project"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">Commercial Building - Abuja</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Customer+Project+3"
                alt="Customer project"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">Industrial Facility - Port Harcourt</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Customer+Project+4"
                alt="Customer project"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-4">
                <p className="text-sm text-gray-600">Shopping Complex - Owerri</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Satisfied Customers</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the quality and service that has earned us the trust of businesses across Nigeria. Your success
            story could be next.
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
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
