import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex flex-items-center">
        <div className="flex items-center justify-center h-[400px] w-[400px] relative">
          <Image
            src="/documents.png"
            fill
            alt="Documents"
            className="object-contain"
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
            className="object-contain"
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
