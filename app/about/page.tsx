"use client"

import Link from "next/link"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Target, Eye, Users, Award, Calendar, History, Trophy, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("story")

  const navigationSections = [
    { id: "story", label: "Our Story", icon: History },
    { id: "mission", label: "Mission & Vision", icon: Target },
    { id: "values", label: "Core Values", icon: Heart },
    { id: "leadership", label: "Leadership Team", icon: Users },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ]

  const teamMembers = [
    {
      name: "Mr Rasheed Olota",
      position: "Chief Executive Officer",
      description: "Leading Global 50:50 with vision and integrity since our founding in 2012.",
      category: "executive",
    },
    {
      name: "Miss Nzewuihe Anita",
      position: "General Manager",
      description: "Overseeing daily operations and ensuring quality service delivery across all locations.",
      category: "executive",
    },
    {
      name: "Mr Animasahun Sulyman",
      position: "Site Engineer",
      description: "Technical expertise ensuring all projects meet the highest engineering standards.",
      category: "technical",
    },
    {
      name: "Mr Ayeni Mathew",
      position: "Customer Care Representative",
      description: "Your first point of contact for all inquiries and customer support needs.",
      category: "operations",
    },
    {
      name: "Miss Imonin Angela",
      position: "Field Sales Manager",
      description: "Leading our sales team to deliver exceptional service to customers nationwide.",
      category: "sales",
    },
    {
      name: "Mr Olota Akeem",
      position: "Transport Manager",
      description: "Ensuring timely and safe delivery of all products across Nigeria.",
      category: "operations",
    },
    {
      name: "Mr Ajisekola Sarafedeen",
      position: "Accountant",
      description: "Managing financial operations with transparency and accuracy.",
      category: "finance",
    },
    {
      name: "Mr Bakare Taiwo",
      position: "Logistics Coordinator",
      description: "Coordinating supply chain operations for efficient product distribution.",
      category: "operations",
    },
  ]

  const salesTeam = [
    { name: "Miss Adiotu Ann", position: "Field Sales Agent" },
    { name: "Miss Samuel Pheobe", position: "Field Sales Agent" },
    { name: "Miss Aina Bukola", position: "Field Sales Agent" },
    { name: "Mr Nathaniel Aniekan", position: "Field Sales Agent" },
    { name: "Mr Shehu Rabiu", position: "Field Sales Agent" },
    { name: "Mr Ismail", position: "Field Sales Agent" },
    { name: "Mr Demeji", position: "Field Sales Agent" },
    { name: "Mr Etuki Bernard Augustine", position: "Field Sales Agent" },
  ]

  const achievements = [
    {
      year: "2012",
      milestone: "Company Establishment",
      description: "Founded Global 50:50 Concepts Nig. Ltd. with RC: 1053055",
    },
    {
      year: "2015",
      milestone: "First Major Contract",
      description: "Secured our first major cement distribution contract",
    },
    {
      year: "2018",
      milestone: "Multi-State Expansion",
      description: "Expanded operations to Lagos, Abuja, and Port Harcourt",
    },
    {
      year: "2020",
      milestone: "Plastic Division Launch",
      description: "Launched plastic products wholesale division in Kwara",
    },
    {
      year: "2022",
      milestone: "500+ Projects Milestone",
      description: "Successfully completed over 500 construction projects",
    },
    {
      year: "2024",
      milestone: "Digital Transformation",
      description: "Launched comprehensive digital platform and services",
    },
  ]

  const coreValues = [
    {
      icon: Users,
      title: "Mutual Trust & Respect",
      description:
        "Building lasting relationships through honest dealings and mutual understanding with all stakeholders.",
      color: "blue",
    },
    {
      icon: Award,
      title: "Commitment",
      description:
        "Dedicated to delivering on every promise we make, ensuring customer satisfaction and project success.",
      color: "blue",
    },
    {
      icon: Building2,
      title: "Ownership",
      description:
        "Taking full responsibility for quality, customer satisfaction, and the success of every project we undertake.",
      color: "gray",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaboration and unity are essential for our success, fostering innovation and excellence.",
      color: "gray",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Doing the right thing consistently, maintaining ethical standards in all our business practices.",
      color: "blue",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-800/90" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Global 50:50 Concepts
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Built on trust, driven by quality, united by our commitment to serving Nigerian businesses with integrity
              and excellence since 2012.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { number: "12+", label: "Years of Excellence" },
                { number: "500+", label: "Projects Completed" },
                { number: "6", label: "Strategic Locations" },
                { number: "20+", label: "Team Members" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {navigationSections.map((section) => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                variant={activeSection === section.id ? "default" : "outline"}
                className={`flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                  activeSection === section.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                    : "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 bg-white"
                }`}
              >
                <section.icon className="h-4 w-4" />
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Our Story Section */}
          {activeSection === "story" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <History className="h-8 w-8 text-blue-600" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Journey Since 2012</h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="animate-fade-in-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Established 2012 - RC‑1053055
                    </Badge>
                  </div>
                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                      When we established Global 50:50 Concepts Nig. Ltd. in 2012, our vision was clear: to become
                      Nigeria's most trusted supplier of premium construction materials and comprehensive building
                      solutions.
                    </p>
                    <p>
                      Today, we operate from our headquarters in Owerri and strategic locations across Nigeria, serving
                      customers with quality cement from leading manufacturers like Lafarge, Dangote, BUA, and Mangal.
                      Our success is built on the foundation of mutual trust, respect, and unwavering commitment to
                      quality.
                    </p>
                    <p>
                      We are united by our core values of mutual trust and respect, commitment, ownership, teamwork and
                      integrity to continually deliver exciting and new products to our Nigerian community.
                    </p>
                  </div>
                </div>
                <div className="animate-fade-in-right">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dangote%20global.jpg-GD4UJjdfdU4eRVS2c8VEqOgNNp4xdI.jpeg"
                    alt="Global 50:50 Concepts company history"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg hover-lift"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Milestones</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className="border-l-4 border-blue-600 hover-lift animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {achievement.year}
                          </span>
                          <CardTitle className="text-lg">{achievement.milestone}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mission & Vision Section */}
          {activeSection === "mission" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Mission & Vision</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card className="border-l-4 border-blue-600 shadow-lg hover-lift animate-fade-in-left">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Target className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-3xl text-blue-800">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Making quality our top priority, we shall continually combine efficiency with integrity in meeting
                      the overall demands of our esteemed customers/clients and adding value to the general community
                      via quality products, service and constant supplies of quality cements and other products at all
                      seasons.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-gray-600 shadow-lg hover-lift animate-fade-in-right">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <Eye className="h-8 w-8 text-gray-600" />
                      </div>
                      <CardTitle className="text-3xl text-gray-800">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      To be the most preferred cement distributor and other products with and across Nigeria.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Core Values Section */}
          {activeSection === "values" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Core Values</h2>
                </div>
                <p className="text-xl text-gray-600">The principles that guide everything we do</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <Card
                    key={index}
                    className={`text-center hover-lift animate-scale-in border-l-4 ${
                      value.color === "blue" ? "border-blue-600" : "border-gray-600"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                          value.color === "blue" ? "bg-blue-100" : "bg-gray-100"
                        }`}
                      >
                        <value.icon
                          className={`h-8 w-8 ${value.color === "blue" ? "text-blue-600" : "text-gray-600"}`}
                        />
                      </div>
                      <CardTitle className={`text-xl ${value.color === "blue" ? "text-blue-800" : "text-gray-800"}`}>
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Leadership Team Section */}
          {activeSection === "leadership" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Leadership Team</h2>
                </div>
                <p className="text-xl text-gray-600">Experienced professionals driving our company forward</p>
              </div>

              {/* Executive Team */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Executive Leadership</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {teamMembers
                    .filter((member) => member.category === "executive")
                    .map((member, index) => (
                      <Card key={index} className="border-l-4 border-blue-600 hover-lift animate-fade-in-left">
                        <CardHeader>
                          <CardTitle className="text-xl text-blue-800">{member.name}</CardTitle>
                          <CardDescription className="text-blue-600 font-medium">{member.position}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{member.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Department Heads */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Department Heads</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers
                    .filter((member) => member.category !== "executive")
                    .map((member, index) => (
                      <Card
                        key={index}
                        className="text-center hover-lift animate-scale-in border-l-4 border-gray-600"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-800">{member.name}</CardTitle>
                          <CardDescription className="text-gray-600 font-medium">{member.position}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{member.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Sales Team */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Field Sales Team</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {salesTeam.map((member, index) => (
                    <Card
                      key={index}
                      className="text-center hover-lift animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardContent className="pt-6">
                        <h4 className="font-semibold text-gray-800 mb-1">{member.name}</h4>
                        <p className="text-gray-600 text-sm">{member.position}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeSection === "achievements" && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Trophy className="h-8 w-8 text-blue-600" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Achievements</h2>
                </div>
                <p className="text-xl text-gray-600">Milestones that mark our journey of excellence</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Building2,
                    title: "500+ Projects",
                    description: "Successfully completed construction projects across Nigeria",
                    color: "blue",
                  },
                  {
                    icon: Users,
                    title: "1000+ Customers",
                    description: "Satisfied customers trust our quality and service",
                    color: "gray",
                  },
                  {
                    icon: Award,
                    title: "12 Years",
                    description: "Of consistent excellence and reliable service delivery",
                    color: "blue",
                  },
                  {
                    icon: Target,
                    title: "6 Locations",
                    description: "Strategic presence across major Nigerian cities",
                    color: "gray",
                  },
                  {
                    icon: Building2,
                    title: "4 Cement Brands",
                    description: "Official distributor for leading cement manufacturers",
                    color: "blue",
                  },
                  {
                    icon: Trophy,
                    title: "Zero Complaints",
                    description: "Maintaining highest quality standards consistently",
                    color: "gray",
                  },
                ].map((achievement, index) => (
                  <Card
                    key={index}
                    className={`text-center hover-lift animate-scale-in border-l-4 ${
                      achievement.color === "blue" ? "border-blue-600" : "border-gray-600"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                          achievement.color === "blue" ? "bg-blue-100" : "bg-gray-100"
                        }`}
                      >
                        <achievement.icon
                          className={`h-8 w-8 ${achievement.color === "blue" ? "text-blue-600" : "text-gray-600"}`}
                        />
                      </div>
                      <CardTitle
                        className={`text-2xl ${achievement.color === "blue" ? "text-blue-800" : "text-gray-800"}`}
                      >
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-800/90" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied customers who trust Global 50:50 Concepts for their construction needs.
              Experience our commitment to quality and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
