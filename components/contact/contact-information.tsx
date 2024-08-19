import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function ContactInfromation() {
  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <CardSpotlight className="flex justify-start items-center gap-4 w-full">
        <div className="p-2 bg-primary rounded-full">
          <MapPin className="text-black" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">Location</p>
          <span className="text-muted-foreground">Bhaktapur, Nepal</span>
        </div>
      </CardSpotlight>

      <CardSpotlight className="flex justify-start items-center gap-4 w-full">
        <div className="p-2 bg-primary rounded-full">
          <MailIcon className="text-black" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">Mail</p>
          <span className="text-muted-foreground">manidumaru36@gmail.com</span>
        </div>
      </CardSpotlight>

      <CardSpotlight className="flex justify-start items-center gap-4 w-full">
        <div className="p-2 bg-primary rounded-full">
          <PhoneIcon className="text-black" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">Call me</p>
          <span className="text-muted-foreground">+977 9861494401</span>
        </div>
      </CardSpotlight>
    </div>
  );
}
