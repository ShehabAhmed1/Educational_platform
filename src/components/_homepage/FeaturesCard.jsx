import React from "react";
import { motion } from "framer-motion";
import { fromTop } from "../../assets/helper/functions";

function FeaturesCard({ feature, delay }) {
  return (
    <motion.div
      variants={fromTop({ duration: 0.1, delay: delay })}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ amount: 0.1, once: true }}
      className="w-[280px] group p-6 rounded-2xl bg-background hover:bg-primary/5 transition-all duration-300 hover:shadow-lg border border-primary-hover "
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-white group-hover:bg-primary-hover group-hover:scale-110 transition-all duration-300">
          <feature.icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-text-main">
          {feature.title}
        </h3>
        <p className="text-sm text-text-muted">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export { FeaturesCard };
