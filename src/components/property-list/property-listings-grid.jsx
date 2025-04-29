import PropertyListingCard from "./property-list-card"

export default function PropertyListingsGrid() {
  const properties = [
    {
      id: "meta-123",
      name: "Crystal Oasis Villa",
      image: "/placeholder.svg?height=400&width=600",
      location: "Decentraland, Genesis Plaza",
      price: 1.25,
      currency: "ETH",
      size: 1024,
      features: ["Waterfront", "Custom Build", "Commercial Rights"],
      owner: {
        name: "MetaBuilder",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      chain: "Ethereum",
      tokenId: "0x1a2b3c4d5e6f",
    },
    {
      id: "meta-456",
      name: "Neon District Penthouse",
      image: "/placeholder.svg?height=400&width=600",
      location: "The Sandbox, Alpha District",
      price: 2.75,
      currency: "ETH",
      size: 2048,
      features: ["Skyview", "Fully Furnished", "Event Space"],
      owner: {
        name: "CryptoArchitect",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      chain: "Polygon",
      tokenId: "0x7e8d9c0b2a1f",
    },
    {
      id: "meta-789",
      name: "Quantum Gardens Estate",
      image: "/placeholder.svg?height=400&width=600",
      location: "Somnium Space, Central Hub",
      price: 0.85,
      currency: "ETH",
      size: 512,
      features: ["Garden", "Art Gallery", "NFT Display"],
      owner: {
        name: "VirtualDreamer",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      chain: "Ethereum",
      tokenId: "0x3d4e5f6a7b8c",
    },
    {
      id: "meta-101",
      name: "Digital Horizon Mansion",
      image: "/placeholder.svg?height=400&width=600",
      location: "Cryptovoxels, Origin City",
      price: 3.5,
      currency: "ETH",
      size: 4096,
      features: ["Beachfront", "Gaming Arena", "Metaverse HQ"],
      owner: {
        name: "BlockchainDev",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      chain: "Ethereum",
      tokenId: "0x9a8b7c6d5e4f",
    },
    {
      id: "meta-202",
      name: "Cyber Loft Apartment",
      image: "/placeholder.svg?height=400&width=600",
      location: "Decentraland, Fashion District",
      price: 0.65,
      currency: "ETH",
      size: 256,
      features: ["Modern Design", "Retail Space", "Prime Location"],
      owner: {
        name: "MetaFashion",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
      },
      chain: "Polygon",
      tokenId: "0x2b3c4d5e6f7a",
    },
    {
      id: "meta-303",
      name: "Ethereal Heights Tower",
      image: "/placeholder.svg?height=400&width=600",
      location: "The Sandbox, Downtown",
      price: 4.2,
      currency: "ETH",
      size: 3072,
      features: ["Multi-level", "Conference Center", "VR Experience"],
      owner: {
        name: "VRPioneer",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
      },
      chain: "Ethereum",
      tokenId: "0x8f9e0d1c2b3a",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Metaverse Property Listings</h1>
        <p className="text-muted-foreground">Discover and invest in premium virtual real estate across the metaverse</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyListingCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}
