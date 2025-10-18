import { appVersion } from "@/utils/const";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <div className="flex flex-row gap-3 justify-center items-center text-center w-full relative p-3 text-sm font-light text-primary bg-primary/5 dark:text-default dark:bg-primary">
      {/* copyright */}
      <p>&copy;2024 - Nadir GHARBI</p>
      <Separator
        orientation="vertical"
        className="h-5 bg-black/30 dark:bg-white/50"
      />
      <p>
        Portfolio • Made with <span className="animate-pulse">❤️</span>
      </p>
      <Separator
        orientation="vertical"
        className="h-5 bg-black/30 dark:bg-white/70"
      />
      <p>{appVersion}</p>
    </div>
  );
};
