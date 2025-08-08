"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        })
        setEmail("")
      } else {
        toast({
          title: "Subscription failed",
          description: data.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err)
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ]

  const productLinks = [
    { name: "Cement Products", href: "/products/cement" },
    { name: "Plastic Products", href: "/products/plastic" },
    { name: "Sand & Aggregates", href: "/products/sand" },
    { name: "Construction Services", href: "/products/services" },
    { name: "Gas Services", href: "/products/gas" },
  ]

  const locations = [
    {
      name: "Lagos Head Office",
      address: "1B Maboreje Street, Agbede, Agric, Ikorodu",
      phone: " 0803 574 1810",
    },
    {
      name: "Owerri Operating Office",
      address: "97 Port Harcourt Road, beside GTBank",
      phone: "0906 736 1349",
    },
    {
      name: "Kwara Operating Office",
      address: "Olunlade, Ilorin",
      phone: "0805 418 6884",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
                alt="Global 50:50 Concepts Logo"
                width={40}
                height={40}
                className="rounded flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-bold">Global 50:50</h3>
                <p className="text-sm text-gray-400">Concepts Nig. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria&apos;s trusted partner in construction solutions. Official distributor for premium cement brands and
              comprehensive building materials.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-600 pb-2 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-600 pb-2 mb-4">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-600 pb-2 mb-4">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="tel:09067361349" className="text-gray-400 hover:text-white transition-colors">
                  0906 736 1349
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@global5050.com" className="text-gray-400 hover:text-white transition-colors">
                  info@global5050.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">97 Port Harcourt Road, Owerri</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-medium mb-3 text-white">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubscribing} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-10 transition-colors"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Locations</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <h5 className="font-medium text-white mb-2">{location.name}</h5>
                <p className="text-gray-400 text-sm mb-2">{location.address}</p>
                <a 
                  href={`tel:${location.phone.replace(/\s/g, '')}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  {location.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Global 50:50 Concepts Nigeria Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
