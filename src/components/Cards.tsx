// components/Cards.tsx
interface CardProps {
  src: string;
  alt: string;
}

const Cards: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="space-y-4 px-8">
      {cards.map((card, index) => (
        <div key={index} className="px-8 bg-white shadow-md rounded-md">
          <img
            src={card.src}
            alt={card.alt}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
