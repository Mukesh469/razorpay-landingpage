
export default function IndustryTabs({ active, setActive, data }) {
  return (
    <div className="flex gap-8 mt-10 mb-10">
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`pb-3 text-lg font-semibold transition-all ${
            active === item.id
              ? "text-[#47346C] border-b-4 border-[#E8D3A1]"
              : "text-gray-500 hover:text-[#47346C]"
          }`}
        >
          {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
        </button>
      ))}
    </div>
  );
}
