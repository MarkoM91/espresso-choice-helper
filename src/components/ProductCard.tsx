import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export function ProductCard({
  name,
  price,
  description,
  features,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-coffee-dark mb-2">{name}</h3>
        <p className="text-coffee-light font-semibold mb-4">{price}</p>
        <p className="text-coffee-medium mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-coffee-medium">
              <span className="w-1.5 h-1.5 bg-coffee-light rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}