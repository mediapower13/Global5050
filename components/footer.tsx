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
  ]

  const locations = [
    {
      name: "Head Office - Owerri",
      address: "97 Port Harcourt Road, beside GTBank",
      phone: "0906 736 1349",
    },
    {
      name: "Lagos Office",
      address: "Lagos State",
      phone: "08036007621",
    },
    {
      name: "Kwara Warehouse",
      address: "Olunlade, Ilorin",
      phone: "08054186884",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
                alt="Global 50:50 Concepts Logo"
                width={40}
                height={40}
                className="rounded"
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
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">0906 736 1349</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@global5050.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-400">97 Port Harcourt Road, Owerri</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-medium mb-2">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" disabled={isSubscribing} className="w-full bg-blue-600 hover:bg-blue-700">
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                <h5 className="font-medium text-white mb-2">{location.name}</h5>
                <p className="text-gray-400 text-sm mb-1">{location.address}</p>
                <p className="text-blue-400 text-sm">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
