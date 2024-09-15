import { SocialLink } from "./socialink";
export default function Footer() {
  return (
    <div className="flex flex-col bg-gray-100 items-center mt-4 pt-2">
      <SocialLink />
      <div>© 2024<span className="underline  text-blue-500">Venky</span>, All rights reserved</div>
    </div>
  );
}
