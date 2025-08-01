import React from "react";

interface SymbolData {
  name: string;
  imgSrc: string;
  alt: string;
  description: string;
}

const symbols: SymbolData[] = [
  {
    name: "Lollipop",
    imgSrc: "/assets/symbols/lollipop.png",
    alt: "Lollipop symbol",
    description:
      "Get a taste of new media. Its bold red color demands your attention intense, unapologetic, and impossible to ignore.",
  },
  {
    name: "Dice",
    imgSrc: "/assets/symbols/dice.png",
    alt: "Dice symbol",
    description:
      "Embrace the unexpected our dice symbol celebrates creativity, chance encounters, and the thrill of discovery.",
  },
  {
    name: "Plane",
    imgSrc: "/assets/symbols/plane.png",
    alt: "Plane symbol",
    description:
      "Explore new horizons with our plane icon a symbol of limitless possibilities and journeys ahead.", 
  },
];

const SpottedSym: React.FC = () => {
  return (
    <section className="spotted-sym py-12 px-6 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Spotted our symbols around the site?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Each symbol carries its own unique meaning, guiding you through our
          brand experience. Here's what they stand for:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {symbols.map((symbol) => (
            <div
              key={symbol.name}
              className="symbol-card p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={symbol.imgSrc}
                alt={symbol.alt}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{symbol.name}</h3>
              <p className="text-gray-700">{symbol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpottedSym;
