import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export const Header = () => {
  return (
    <div className="absolute p-4">
      <img src={logoLight} className="w-16 absolute text-zinc-800 dark:text-zinc-100 scale-100 transition-all dark:scale-0" />
      <img src={logoDark} className="w-16 text-zinc-800 dark:text-zinc-100 scale-0 transition-all dark:scale-100" />
    </div>
  );
};
