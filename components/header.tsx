"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "Our Story", href: "/about" },
        { name: "Mission & Vision", href: "/about" },
        { name: "Leadership Team", href: "/about" },
        { name: "Core Values", href: "/about" },
      ],
    },
    {
      name: "Products & Services",
      href: "/products",
      dropdown: [
        { name: "Premium Cement", href: "/products/cement" },
        { name: "Plastic Products", href: "/products/plastic" },
        { name: "Sand & Aggregates", href: "/products/sand" },
        { name: "Construction Services", href: "/products/services" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      dropdown: [
        { name: "All Projects", href: "/projects" },
        { name: "Construction Projects", href: "/projects" },
        { name: "Customer Stories", href: "/testimonials" },
      ],
    },
    {
      name: "Locations",
      href: "/locations",
      dropdown: [
        { name: "All Locations", href: "/locations" },
        { name: "Cement Centers", href: "/locations" },
        { name: "Plastic Warehouses", href: "/locations" },
      ],
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
              alt="Global 50:50 Concepts Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Global 50:50
              </span>
              <span className={`text-xs transition-colors ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>
                Concepts Nig. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                          isActive(item.href) ? "text-blue-600" : isScrolled ? "text-gray-700" : "text-white"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive(item.href) ? "text-blue-600" : isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? "text-gray-900" : "text-white"}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
                    alt="Global 50:50 Concepts Logo"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">Global 50:50</span>
                    <span className="text-xs text-gray-600">Concepts Nig. Ltd.</span>
                  </div>
                </div>
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <span className="text-lg font-medium text-gray-700 py-2 block">{item.name}</span>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className="text-md text-gray-600 hover:text-blue-600 py-1 block"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-blue-600 py-2 block ${
                          isActive(item.href) ? "text-blue-600" : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
