import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-slate-200 shadow-lg">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Your DApp</a>
        </Link>
      </div>
      <div className="flex-none">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
