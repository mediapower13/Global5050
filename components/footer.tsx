import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react"
import Link from "next/link"
import NewsletterSignup from "./newsletter-signup"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Cement Distribution", href: "/services#cement-distribution" },
    { name: "Architectural Design", href: "/services#architectural-design" },
    { name: "Building Construction", href: "/services#building-construction" },
    { name: "Sand & Chippings", href: "/services#sand-chippings" },
    { name: "Plastic Products", href: "/services#plastic-products" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-gray-300">
                Get updates on new products, special offers, and industry insights. Join our community of satisfied
                customers across Nigeria.
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
                alt="Global 50:50 Concepts Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Global 50:50</span>
                <span className="text-sm text-gray-400 -mt-1">Concepts Nig. Ltd.</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Nigeria's trusted construction solutions provider since 2012. Premium cement, architectural design, and
              complete building services.
            </p>
            <div className="text-sm text-gray-400">
              <p>RC: 1053055</p>
              <p>Established: 2012</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Head Office:</p>
                  <p>97 Port Harcourt Road, beside GTBank</p>
                  <p>Owerri, Imo State</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold">0906 736 1349</p>
                  <p>08036007621</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">global5050conceptsnigltd@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Global 50:50 Concepts Nig. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-blue-400">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-blue-400">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-blue-400">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
