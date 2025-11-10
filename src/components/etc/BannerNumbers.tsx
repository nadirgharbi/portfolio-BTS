import React from "react";
import { BsCake2, BsPatchCheck, BsPersonCheck } from "react-icons/bs";

function BannerNumbers() {
  const [ageNumber, setAgeNumber] = React.useState<number>(0);
  const [projectsNumber, setProjectsNumber] = React.useState<number>(0);
  const [experienceNumber, setExperienceNumber] = React.useState<number>(0);
  const currAge = 24;

  // Compteur automatique pour augmenter l'age
  // pour l'age
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (ageNumber < currAge) {
        setAgeNumber((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [ageNumber]);

  // pour le nombre de projets
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (projectsNumber < 10) {
        setProjectsNumber((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [projectsNumber]);

  // pour les annees d'experiences
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (experienceNumber < 4) {
        setExperienceNumber((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [experienceNumber]);

  return (
      <div className="flex flex-wrap w-full justify-center md:justify-between px-20 py-12 max-lg:items-center gap-16 md:mx-auto ">
        {/* Age */}
        <div className="flex flex-col text-start md:flex-row items-center ">
          <div className="flex flex-col max-lg:items-center max-lg:text-center lg:flex-row gap-3">
            <BsCake2 size={52} className="" />
            <div className="leading-5">
              <p className="text-3xl font-extrabold">{ageNumber}</p>
              <p className="font-light text-nowrap">ans</p>
            </div>
          </div>
        </div>

        {/* Nombre de projets */}
        <div className="flex flex-col text-start md:flex-row items-center ">
          <div className="flex flex-col max-lg:items-center max-lg:text-center lg:flex-row gap-3">
            <BsPatchCheck size={52} className="" />
            <div className="leading-5">
              <p className="text-3xl font-extrabold">+ {projectsNumber}</p>
              <p className="font-light text-nowrap">projets réalisés</p>
            </div>
          </div>
        </div>

        {/* annee d'exp */}
        <div className="flex flex-col text-start md:flex-row items-center ">
          <div className="flex flex-col max-lg:items-center max-lg:text-center lg:flex-row gap-3">
            <BsPersonCheck size={52} className="" />
            <div className="leading-5">
              <p className="text-3xl font-extrabold">{experienceNumber}</p>
              <p className="font-light text-nowrap">années d’expérience</p>
            </div>
          </div>
        </div>        
      </div>
  );
}

export default BannerNumbers;
