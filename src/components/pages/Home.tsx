import MyPic from "@/assets/me.png";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 text-primary-color dark:text-default-color bg-white dark:bg-primary-color">
      <img src={MyPic} alt="my-picture-profile" className="w-40 outline outline-4 outline-secondary-color rounded-full" />
      <p className="text-3xl">Hey, Je suis Nadir Je suis développeur Front End J'adore construire des sitesappsjeux pour être meilleur.</p>
    </div>
  );
};
