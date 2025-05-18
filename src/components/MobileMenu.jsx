/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ menu, open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-bright py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {menu.map((item) => (
                <li key={item.id}> {item.name} </li>
              ))}
              <li>login</li>
              <li>register</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
