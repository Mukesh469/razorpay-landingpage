import { motion } from "framer-motion";
import { iconMap } from "./icons";

export default function IndustryView({ item }) {
    if (!item) return null;

    return (
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[50%]">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1330] leading-tight">
                    {item.title}
                </h1>

                <p className="text-gray-600 mt-4 text-lg">{item.subtitle}</p>

                {/* FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {item.features.map((f, i) => {
                        const IconComp = iconMap[f.icon];
                        return (
                            <div
                                key={i}
                                className="relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl 
                           transition-all duration-300"
                            >
                                <div className="absolute -top-6 left-6 w-16 h-16 rounded-full 
                                bg-[#47346C] text-white flex items-center justify-center shadow-lg">
                                    {IconComp && <IconComp size={22} />}
                                </div>

                                <h3 className="text-xl font-semibold text-[#1A1330] mt-10">
                                    {f.title}
                                </h3>

                                <p className="text-gray-600 mt-2">{f.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT MOCKUP */}
            <div className="w-full lg:w-[45%] mt-8 lg:mt-0 flex justify-center">
                <div
                    className="relative bg-[#7b57c8]/20 rounded-[40px] 
               p-8 shadow-xl w-[90%] lg:w-[85%] h-auto 
               flex items-center justify-center overflow-visible"
                >
                    <motion.img
                        src={item.img}
                        alt={item.id}
                        initial={{ opacity: 0, x: 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.06,
                            transition: { type: "spring", stiffness: 260, damping: 18 }
                        }}
                        className="rounded-[35px] w-[88%] object-contain drop-shadow-2xl"
                    />

                </div>
            </div>

        </div>
    );
}
