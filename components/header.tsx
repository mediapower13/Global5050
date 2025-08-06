"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])
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
        { name: "Mission & Vision", href: "/about#mission" },
        { name: "Leadership Team", href: "/about#team" },
        { name: "Core Values", href: "/about#values" },
      ],
    },
    {
      name: "Products & Services",
      href: "/products",
      dropdown: [
        { name: "Premium Cement", href: "/products/cement" },
        { name: "Gas Plant Services", href: "/products/gas" },
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
        { name: "Construction Projects", href: "/projects#construction" },
        { name: "Customer Stories", href: "/testimonials" },
      ],
    },
    {
      name: "Locations",
      href: "/locations",
      dropdown: [
        { name: "All Locations", href: "/locations" },
        { name: "Cement Centers", href: "/locations#cement" },
        { name: "Plastic Operating Offices", href: "/locations#plastic" },
        { name: "Gas Plant Station", href: "/locations#gas" },
      ],
    },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdowns(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  const closeMenu = () => {
    setIsOpen(false)
    setOpenDropdowns([])
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
              alt="Global 50:50 Concepts Logo"
              width={40}
              height={40}
              className="rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              priority
            />
            <div className="flex flex-col min-w-0">
              <span className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-colors truncate ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                Global 50:50
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled ? "text-gray-600" : "text-gray-200"
              }`}>
                Concepts Nig. Ltd.
              </span>
            </div>
          </Link>

          {/* Tablet Navigation (md breakpoint) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-2">
            {navigation.slice(0, 3).map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1 px-2 py-1 text-xs font-medium transition-colors rounded-md hover:bg-white/10 ${
                          isActive(item.href) ? "text-blue-400" : isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                        }`}
                      >
                        {item.name.split(' ')[0]}
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-48 bg-white border border-gray-200 shadow-lg"
                      align="start"
                      sideOffset={8}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className={`w-full px-3 py-2 text-sm transition-colors ${
                              isActive(dropdownItem.href)
                                ? "text-blue-600 bg-blue-50 font-medium"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            }`}
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
                    className={`px-2 py-1 text-xs font-medium transition-colors rounded-md hover:bg-white/10 ${
                      isActive(item.href) ? "text-blue-400" : isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* More menu for remaining items */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-2 py-1 text-xs font-medium transition-colors rounded-md hover:bg-white/10 ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                  }`}
                >
                  More
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-48 bg-white border border-gray-200 shadow-lg"
                align="end"
                sideOffset={8}
              >
                {navigation.slice(3).map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className={`w-full px-3 py-2 text-sm transition-colors ${
                        isActive(item.href)
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    href="/contact"
                    className="w-full px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 font-medium"
                  >
                    Get Quote
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10 ${
                          isActive(item.href) ? "text-blue-400" : isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-56 bg-white border border-gray-200 shadow-lg"
                      align="start"
                      sideOffset={8}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className={`w-full px-4 py-3 text-sm transition-colors ${
                              isActive(dropdownItem.href)
                                ? "text-blue-600 bg-blue-50 font-medium"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            }`}
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
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10 ${
                      isActive(item.href) ? "text-blue-400" : isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 h-10">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`${isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"} transition-colors`}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b bg-blue-600">
                  <Link href="/" onClick={closeMenu} className="flex items-center space-x-3">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/global%205050%20logo.jpg-w2LQYJMprZOyTNCqiRZrSHwKH0KmyA.jpeg"
                      alt="Global 50:50 Concepts Logo"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-white">Global 50:50</span>
                      <span className="text-xs text-blue-100">Concepts Nig. Ltd.</span>
                    </div>
                  </Link>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                        {item.dropdown ? (
                          <Collapsible 
                            open={openDropdowns.includes(item.name)}
                            onOpenChange={() => toggleDropdown(item.name)}
                          >
                            <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-left hover:bg-gray-50 rounded-md px-2 transition-colors">
                              <span className="text-base font-medium text-gray-900">{item.name}</span>
                              <ChevronRight 
                                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                                  openDropdowns.includes(item.name) ? 'rotate-90' : ''
                                }`}
                              />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pb-2">
                              <div className="pl-4 space-y-1">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    onClick={closeMenu}
                                    className={`block py-3 px-3 text-sm rounded-md transition-colors ${
                                      isActive(dropdownItem.href)
                                        ? "text-blue-600 bg-blue-50 font-medium"
                                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                    }`}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`flex items-center justify-between w-full py-4 px-2 text-base font-medium transition-colors rounded-md hover:bg-gray-50 ${
                              isActive(item.href) 
                                ? "text-blue-600" 
                                : "text-gray-900 hover:text-blue-600"
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                
                {/* CTA Button */}
                <div className="p-4 border-t bg-gray-50">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-medium">
                    <Link href="/contact" onClick={closeMenu}>
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
