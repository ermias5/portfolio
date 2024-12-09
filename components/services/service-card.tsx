
import { ServiceType } from "../../hooks/useServiceData";
import Image from "next/image";

const ServiceCard: React.FC<ServiceType> = ({ title, description, imageUrl }) => {

  return (
    <div className="w-[250px] flex flex-col justify-start px-3 py-7 bg-whitesmoke-200 dark:bg-white text-black rounded-lg">
      <Image
        src={imageUrl}
        alt={`images of ${title}`}
        width={150}
        height={150}
        className="rounded object-cover h-[5rem] w-[5rem]"
      />
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-block overflow-hidden max-h-[50px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
