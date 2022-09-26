import Navbar from "@components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen mx-auto 2xl:container">
      <Navbar />
      <div className="grid h-screen place-items-center">
        <div>
          Open <span className="italic font-bold">`src/pages/index.tsx`</span>{" "}
          and start building
        </div>
        <button className="btn btn-primary">A Button</button>
      </div>
    </div>
  );
}
