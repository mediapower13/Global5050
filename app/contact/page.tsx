"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, Building } from "lucide-react"
import { submitContactForm } from "./actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message,
          variant: "default",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        toast({
          title: "Failed to Send Message",
          description: result.error || "Please try again or call us directly.",
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    "Cement Products Quote",
    "Plastic Products Quote", 
    "Sand & Aggregates Quote",
    "Construction Services Quote",
    "Bulk Order Inquiry",
    "Partnership Opportunity",
    "General Inquiry",
    "Other"
  ]

  const officeLocations = [
    {
      name: "Lagos Head Office",
      type: "Primary",
      address: "1B Maboreje Street, Agbede, Agric, Ikorodu, Lagos State",
      phone: "08036007621",
      email: "info@global5050concepts.com",
      hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    },
    {
      name: "Owerri Office",
      type: "Regional",
      address: "97 Port Harcourt Road, beside GTBank, Owerri, Imo State",
      phone: "0906 736 1349",
      email: "owerri@global5050concepts.com",
      hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    },
    {
      name: "Plastic Division HQ - Olunlade",
      type: "Plastic Division",
      address: "Opposite Latara, Olunlade, Ilorin, Kwara State",
      phone: "08036007621",
      email: "plastic@global5050concepts.com",
      hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact & Get Quote</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Ready to start your project? Get in touch with our team for expert consultation and competitive quotes.
            </p>
            <Badge className="bg-green-600 text-white px-6 py-2 text-lg">
              Fast Response • Professional Service • Competitive Pricing
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                Get Your Quote
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service/Product Interest *
                  </label>
                  <Select name="service" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service or product type" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details & Requirements *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Please describe your project requirements, quantities needed, timeline, and any specific details..."
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message & Get Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Call Us Now</p>
                    <p className="text-blue-600">08036007621 | 0906 736 1349</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-blue-600">info@global5050concepts.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-900">Our Offices</h3>
              {officeLocations.map((location, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{location.name}</h4>
                      <Badge variant="outline" className={
                        location.type === "Primary" ? "bg-blue-50 text-blue-700" :
                        location.type === "Plastic Division" ? "bg-green-50 text-green-700" :
                        "bg-gray-50 text-gray-700"
                      }>
                        {location.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Areas */}
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Service Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-blue-800">Cement Distribution:</p>
                    <p className="text-gray-700">Lagos, Owerri, Abuja, Port Harcourt & surrounding areas</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Plastic Products:</p>
                    <p className="text-gray-700">Nationwide delivery from Kwara operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
