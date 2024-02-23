import { HomeRedirectCarousel } from "@/components/custom/HomeRedirectCarousel";

export default function Home() {
  return (
    <div className="overflow-y-auto mx-12 my-24">
      <p className="mb-16 font-extralight">
        home body Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer blandit tempor risus, a sollicitudin tortor feugiat a. Nullam id
        neque sit amet tellus semper condimentum. Maecenas nisl nulla,
        condimentum non diam sed, gravida efficitur purus. Phasellus tempus at
        nulla cursus convallis. Phasellus mi leo, suscipit non hendrerit eu,
        lobortis in lectus.
      </p>
      <div className="flex flex-row">
        <p className="flex justify-start basis-3/4">explore</p>
        <p className="flex justify-end basis-1/4">carousel</p>
      </div>
      <div className="flex flex-row justify-center">
        <HomeRedirectCarousel></HomeRedirectCarousel>
      </div>
    </div>
  );
};
