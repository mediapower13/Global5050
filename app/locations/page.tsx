"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Navigation, Copy, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LocationsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { toast } = useToast()

  const locations = [
    {
      id: 1,
      name: "Lagos Head Office",
      type: "cement",
      address: "1B Maboreje Street, Agbede, Agric, Ikorodu, Lagos State",
      coordinates: { lat: 6.5244, lng: 3.3792 },
      phone: "08036007621",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Main Operations", "Strategic Planning", "Corporate Management"],
      description: "Our main headquarters and primary business operations center",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d7.0302!3d5.4840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjknMDIuNCJOIDfCsDAxJzQ4LjciRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
    },
    {
      id: 2,
      name: "Owerri Operating Office",
      type: "cement",
      address: "97 Port Harcourt Road, beside GTBank, Owerri, Imo State",
      coordinates: { lat: 5.484, lng: 7.0302 },
      phone: "0906 736 1349",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Cement Distribution", "Construction Services", "Regional Operations"],
      description: "Operating office serving Southeast Nigeria with full cement distribution services",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.123456789!2d3.5021!3d6.6134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnNDguMiJOIDPCsDMwJzA3LjYiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
    },
    {
      id: 3,
      name: "Abuja Operating Office",
      type: "cement",
      address: "Kado Estate, Abuja, FCT",
      coordinates: { lat: 9.0765, lng: 7.4921 },
      phone: "08054186884",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Cement Distribution", "Government Contracts"],
      description: "Serving the Federal Capital Territory and Northern Nigeria",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d7.4921!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMzUuNCJOIDfCsDI5JzMxLjYiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
    },
    {
      id: 4,
      name: "Port Harcourt Operating Office",
      type: "cement",
      address: "GRA Phase 2, Port Harcourt, Rivers State",
      coordinates: { lat: 4.8156, lng: 7.0134 },
      phone: "0906 736 1349",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Cement Distribution", "Oil & Gas Projects", "Regional Operations"],
      description: "Operating office for South-South Nigeria operations and oil & gas sector support",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789!2d7.0134!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNTYuMiJOIDfCsDAwJzQ4LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
    },
    {
      id: 5,
      name: "Plastic Division Head Office - Olunlade",
      type: "plastic",
      address: "Opposite Latara, Olunlade, Ilorin, Kwara State",
      coordinates: { lat: 8.4799, lng: 4.5421 },
      phone: "08036007621",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Plastic Products Wholesale", "Industrial Containers", "Regional Operations", "Plastic Division HQ"],
      description: "Head office for plastic products division and primary distribution center",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.123456789!2d4.5421!3d8.4799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjgnNDcuNiJOIDTCsDMyJzMxLjYiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
    },
    {
      id: 6,
      name: "Kwara Operating Office - Idi Ori",
      type: "plastic",
      address: "Opposite Al-Mahruf Filling Station, Idi Ori, Ilorin, Kwara State",
      coordinates: { lat: 8.4899, lng: 4.5521 },
      phone: "08054186884",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      services: ["Plastic Products Storage", "Household Items", "Regional Support"],
      description: "Secondary plastic products operating office and storage facility",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.123456789!2d4.5521!3d8.4899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjknMjMuNiJOIDTCsDMzJzA3LjYiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng",
    },
  ]

  const filteredLocations = locations.filter((location) => {
    if (activeFilter === "all") return true
    if (activeFilter === "cement") return location.type === "cement"
    if (activeFilter === "plastic") return location.type === "plastic"
    return true
  })

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    toast({
      title: "Address Copied",
      description: "Address has been copied to clipboard",
    })
  }

  const openDirections = (coordinates: { lat: number; lng: number }) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`
    window.open(url, "_blank")
  }

  const openInMaps = (coordinates: { lat: number; lng: number }) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`
    window.open(url, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Locations</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Strategic locations across Nigeria for easy access to our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
              className={activeFilter === "all" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              All Locations ({locations.length})
            </Button>
            <Button
              onClick={() => setActiveFilter("cement")}
              variant={activeFilter === "cement" ? "default" : "outline"}
              className={activeFilter === "cement" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              Cement Distribution ({locations.filter((l) => l.type === "cement").length})
            </Button>
            <Button
              onClick={() => setActiveFilter("plastic")}
              variant={activeFilter === "plastic" ? "default" : "outline"}
              className={activeFilter === "plastic" ? "bg-green-600 hover:bg-green-700" : ""}
            >
              Plastic Division ({locations.filter((l) => l.type === "plastic").length})
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredLocations.map((location, index) => (
              <Card 
                key={location.id} 
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  activeFilter !== "all" ? "animate-fade-in" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative">
                  <div className="cursor-pointer" onClick={() => openInMaps(location.coordinates)}>
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="250"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.name} Location`}
                    />
                  </div>
                  <Badge
                    className={`absolute top-4 left-4 ${location.type === "cement" ? "bg-blue-600" : "bg-green-600"}`}
                  >
                    {location.type === "cement" ? "Cement Distribution Center" : "Plastic Division Office"}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{location.name}</CardTitle>
                      <CardDescription className="text-gray-600">{location.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-700">{location.address}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        GPS: {location.coordinates.lat}°N, {location.coordinates.lng}°E
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{location.phone}</span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{location.hours}</span>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Button
                      onClick={() => openDirections(location.coordinates)}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button onClick={() => openInMaps(location.coordinates)} variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Maps
                    </Button>
                    <Button onClick={() => copyAddress(location.address)} variant="outline" size="sm">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Address
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Coverage</h2>
            <p className="text-xl text-gray-600">Serving customers across Nigeria with strategic locations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">Southwest Nigeria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lagos, Ogun, Oyo, Osun, Ondo, Ekiti</p>
                <p className="text-sm text-gray-500 mt-2">Served from Lagos Head Office</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">Southeast Nigeria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Imo, Abia, Anambra, Enugu, Ebonyi</p>
                <p className="text-sm text-gray-500 mt-2">Served from Owerri HQ</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">South-South Nigeria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rivers, Bayelsa, Delta, Cross River</p>
                <p className="text-sm text-gray-500 mt-2">Served from Port Harcourt</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">North Central Nigeria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">FCT, Niger, Kwara, Kogi, Benue</p>
                <p className="text-sm text-gray-500 mt-2">Served from Abuja & Kwara</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">Northern Nigeria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kaduna, Kano, Katsina, Sokoto</p>
                <p className="text-sm text-gray-500 mt-2">Extended coverage from Abuja</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-green-600">Plastic Products Division</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nationwide plastic distribution</p>
                <p className="text-sm text-gray-500 mt-2">Headquartered in Olunlade, Kwara State</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
