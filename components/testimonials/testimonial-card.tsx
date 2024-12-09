import Image, { StaticImageData } from "next/image";
import { TestimonialType } from "../../hooks/useTestimonialData";

const TestimonialCard: React.FC<TestimonialType> = ({
  name,
  title,
  feedback,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 p-5 bg-whitesmoke-200 dark:bg-white rounded-lg tablet:flex-row">
      <div className="flex items-center gap-5 ">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          width={100}
          height={100}
          className="rounded-full object-cover h-[100px] w-[100px] tablet:h-[150px] tablet:w-[150px]"
        />
        <div className=" tablet:hidden">
          <h1 className="text-black text-xl mb-1">{name}</h1>
          <h3 className="text-black mt-0 text-md">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center tablet:items-start">
        <p className="text-black m-0 text-sm">
          <span className="text-3xl text-darkorange-100 -ml-4">&ldquo;</span>
          {feedback}
          <sub className="text-2xl font-bold text-darkorange-100 ml-1 relative top-3">
            &rdquo;
          </sub>
        </p>
        <div className="hidden tablet:block">
          <h1 className="text-black text-xl mb-1">{name}</h1>
          <h3 className="text-black mt-0 text-md">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
