import { getHomePage } from "@/lib/get-home-page";
import ImageTextAnimate from "./components/home/image-text-animate/ImageTextAnimate";

export default function Home() {
  return getHomePage()
    .then((res) => {
      return (
        <main className="flex flex-col gap-6 items-center justify-center h-screen md:flex-row">
          <ImageTextAnimate res={res} />
        </main>
      );
    })
    .catch(() => {
      return <div>Error</div>;
    });
}
