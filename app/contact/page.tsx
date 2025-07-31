"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await submitContactForm(formDataObj)

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["97 Port Harcourt Road, beside GTBank", "Owerri, Imo State, Nigeria"],
    },
    {
      icon: MapPin,
      title: "Lagos Branch",
      details: ["1B Maboreje Street, Agbede, Agric", "Ikorodu, Lagos State, Nigeria"],
    },
    {
      icon: MapPin,
      title: "Abuja Branch",
      details: ["Flat 11, 232 Crescent, 23 Road", "Kado Estate, Abuja, FCT, Nigeria"],
    },
    {
      icon: MapPin,
      title: "Port Harcourt Branch",
      details: ["Mariri Centre 2, Tam Inko-Tariah Ave", "Rumuogba, Port Harcourt, Rivers State"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+234 (0) 803 600 7621", "+234 (0) 805 418 6884"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["global5050conceptsnigltd@yahoo.com"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Let's Talk Business</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Need a quote? Have questions about our products? Want to discuss a big project? We're here and ready to
              help. Real people, real answers across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us What You Need</CardTitle>
                <CardDescription>
                  Fill this out and we'll get back to you within 24 hours. Usually much faster during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cement-distribution">Cement Distribution</SelectItem>
                          <SelectItem value="architectural-design">Architectural Design</SelectItem>
                          <SelectItem value="building-construction">Building Construction</SelectItem>
                          <SelectItem value="sand-chippings">Sand & Chippings</SelectItem>
                          <SelectItem value="plastic-wholesale">Plastic Wholesale</SelectItem>
                          <SelectItem value="construction-materials">Construction Materials</SelectItem>
                          <SelectItem value="project-management">Project Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>

                  {submitStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you for your message! We'll get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        There was an error sending your message. Please try again or contact us directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h2>
                <p className="text-gray-600 mb-8">
                  We've got offices across Nigeria - Lagos, Owerri, Abuja, Port Harcourt, plus warehouses in Kwara.
                  Whatever works best for you - phone, email, or just drop by. We're in business to do business.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-blue-600">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="border-l-4 border-green-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Come See Us</h2>
            <p className="text-xl text-gray-600">
              Sometimes it's easier to talk face-to-face. Here's where you can find us across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Head Office Map */}
            <Card>
              <CardHeader>
                <CardTitle>Owerri Head Office</CardTitle>
                <CardDescription>97 Port Harcourt Road, beside GTBank, Owerri, Imo State</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d7.0302!3d5.4840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjknMDIuNCJOIDfCsDAxJzQ4LjciRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Owerri Head Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Lagos Office Map */}
            <Card>
              <CardHeader>
                <CardTitle>Lagos Branch Office</CardTitle>
                <CardDescription>1B Maboreje Street, Agbede, Agric, Ikorodu, Lagos State</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1234567890123!2d3.5021!3d6.6134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnNDguMiJOIDPCsDMwJzA3LjYiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lagos Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
