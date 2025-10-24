import React from "react";
import { Title } from "../../../components/_reusable/Title";
import { Featuresdata } from "../../../assets/helper/data";
import { FeaturesCard } from "../../../components/_homepage/FeaturesCard";
import { StatisticCard } from "../../../components/_homepage/StatisticCard";
import { statisticsData } from "../../../assets/helper/data";

function Features() {
  return (
    <section id="features" className="Features bg-bg-secondary pt-20">
      <div className="main_container">
        <div className="content">
          <Title title="ليه تشترك في المنصة؟" subtitle="" />

          <div className="flex flex-wrap gap-10 justify-center">
            {Featuresdata.map((feature, index) => (
              <FeaturesCard
                key={feature.title}
                feature={feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center mt-10 bg-primary p-4">
        {statisticsData.map((statistic, index) => (
          <StatisticCard key={statistic.title} statistic={statistic} />
        ))}
      </div>
    </section>
  );
}

export default Features;
