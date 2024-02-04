import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { Separator } from "../../src/components/ui/separator";
import Link from "next/link";
import { SocialLinks } from "../lib/Data";

const Footer = () => {
  return (
    <footer className="relative mt-16 min-h-[326px] pb-32 md:pb-4 [backgroundRepeat:no-repeat] [backgroundPosition:bottom] bg-background bg-[url(/BackgroundGradientBottom.svg)]">
      <Separator className="h-[1px]" />
      <div className="container relative z-10 mt-20 flex w-full max-w-[1024px] flex-col items-start justify-between gap-12 md:h-[236px] md:flex-row">
        <div className="flex flex-col justify-between h-full">
          <Link href="/">
            <svg
              className="text-foreground"
              width="120"
              height="100"
              viewBox="0 0 153 134"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M81.4795 37.528C81.4795 41.7947 79.4315 45.592 75.3355 48.92C71.3248 52.248 66.6742 54.68 61.3835 56.216C56.1782 57.752 51.1435 58.52 46.2795 58.52C44.9995 58.52 44.0608 58.4773 43.4635 58.392V54.04C43.6342 54.04 46.1088 53.656 50.8875 52.888C55.6662 52.0347 59.6768 50.584 62.9195 48.536C66.2475 46.488 67.9115 44.184 67.9115 41.624C67.9115 38.552 65.6075 37.016 60.9995 37.016C54.7702 37.016 48.8822 39.1493 43.3355 43.416C37.7888 47.6827 35.0155 52.1627 35.0155 56.856C35.0155 61.5493 37.9168 64.5787 43.7195 65.944C44.9995 66.2853 45.8528 66.6267 46.2795 66.968C46.7062 67.3093 46.9195 67.9067 46.9195 68.76C46.9195 69.6133 46.4928 70.3387 45.6395 70.936C44.8715 71.448 43.0368 72.216 40.1355 73.24C24.4342 78.616 16.5835 86.9787 16.5835 98.328C16.5835 100.632 17.0102 102.595 17.8635 104.216C23.0688 97.56 29.8102 92.1413 38.0875 87.96C46.3648 83.7787 54.3435 81.688 62.0235 81.688C66.0342 81.688 69.2342 82.584 71.6235 84.376C74.0128 86.0827 75.2075 88.472 75.2075 91.544C75.2075 96.3227 72.9888 101.101 68.5515 105.88C64.1142 110.659 58.3542 114.541 51.2715 117.528C44.2742 120.6 37.2768 122.136 30.2795 122.136C23.3675 122.136 17.9062 120.856 13.8955 118.296C13.8102 118.381 13.4262 119.021 12.7435 120.216C11.0368 123.629 9.58617 126.019 8.3915 127.384L4.1675 125.592C4.76483 123.203 6.51417 119.576 9.4155 114.712C5.49017 110.275 3.5275 105.325 3.5275 99.864C3.5275 94.3173 5.74617 89.0693 10.1835 84.12C14.7062 79.0853 20.9782 74.9467 28.9995 71.704C24.9888 68.376 22.9835 64.92 22.9835 61.336C22.9835 56.472 25.5435 51.5227 30.6635 46.488C35.7835 41.368 42.0128 37.2293 49.3515 34.072C56.7755 30.9147 63.7302 29.336 70.2155 29.336C73.6288 29.336 76.3595 30.104 78.4075 31.64C80.4555 33.0907 81.4795 35.0533 81.4795 37.528ZM54.5995 89.368C49.5648 89.368 43.6768 91.288 36.9355 95.128C30.2795 98.968 24.8608 103.533 20.6795 108.824C24.0928 112.664 28.9142 114.584 35.1435 114.584C41.4582 114.584 47.6022 112.579 53.5755 108.568C59.6342 104.472 62.6635 100.077 62.6635 95.384C62.6635 93.5067 61.9382 92.056 60.4875 91.032C59.0368 89.9227 57.0742 89.368 54.5995 89.368Z"
                fill="currentColor"
              />
              <path
                d="M132.192 107.072L135.136 109.248C133.941 111.808 131.723 114.24 128.48 116.544C125.323 118.848 122.421 120 119.776 120C114.741 120 112.224 117.355 112.224 112.064C112.224 109.589 112.864 106.645 114.144 103.232L109.408 108.096C104.8 112.789 100.789 115.947 97.376 117.568C94.048 119.189 90.7627 120 87.52 120C84.2773 120 81.8027 119.104 80.096 117.312C78.4747 115.435 77.664 112.875 77.664 109.632C77.664 103.659 79.968 97.7707 84.576 91.968C89.184 86.08 95.072 81.3013 102.24 77.632C109.408 73.9627 116.576 72.0853 123.744 72L124 76.224L118.624 77.376C110.859 79.0827 103.989 82.496 98.016 87.616C92.128 92.736 89.184 97.856 89.184 102.976C89.184 108.011 91.232 110.528 95.328 110.528C99.168 110.528 103.904 107.84 109.536 102.464C115.168 97.088 119.861 90.7733 123.616 83.52L128.992 86.72C123.701 97.3867 121.056 104.171 121.056 107.072C121.056 108.267 121.44 109.291 122.208 110.144C123.061 110.912 123.872 111.296 124.64 111.296C125.493 111.296 126.048 111.253 126.304 111.168C126.56 111.083 126.816 110.997 127.072 110.912C127.328 110.741 127.627 110.528 127.968 110.272C128.395 110.016 128.736 109.76 128.992 109.504C129.333 109.248 129.845 108.864 130.528 108.352C131.211 107.84 131.765 107.413 132.192 107.072Z"
                fill="currentColor"
              />
            </svg>
            <span className="sr-only">Ehtisham Logo</span>
          </Link>
          <p className="mt-10 text-sm text-onyx/60 dark:text-white/40">
            ©️2024 Ehtisham Afzal. All Rights Reserved
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 -order-1 md:order-2 md:gap-20">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-onyx dark:text-white">Links</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white">
                <Link className="transition-colors duration-150" href="/Aboute">
                  About
                </Link>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white">
                <Link
                  className="transition-colors duration-150"
                  href="/Contact"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white">
                <Link
                  className="transition-colors duration-150"
                  href="/TechStack"
                >
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-bold text-onyx dark:text-white">Elsewhere</p>
            <ul className="flex flex-col gap-4 text-light-gray">
              {SocialLinks.map((link) => (
                <li
                  key={link.Name}
                  className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-light-gray dark:hover:text-white"
                >
                  <a
                    className="transition-colors duration-150"
                    target="_blank"
                    href={link.IdURL}
                  >
                    {link.Name}
                  </a>
                  <ArrowUpIcon className="-translate-x-2 translate-y-2 rotate-45 text-onyx opacity-0 transition duration-300 hover:rotate-[405deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 h-5 cursor-pointer" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
