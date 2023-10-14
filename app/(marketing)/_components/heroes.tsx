import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex flex-items-center h-full">
        <div className="flex items-center justify-center h-[400px] w-[400px] relative">
          <Image
            src="/documents.png"
            fill
            alt="Documents"
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            alt="Documents"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="items-center justify-center h-[400px] w-[400px] relative hidden md:block">
          <Image
            src="/reading.png"
            fill
            alt="Reading"
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            fill
            alt="Reading"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
