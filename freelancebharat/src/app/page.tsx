import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      Landing Page
      <div className="flex justify-center items-center h-screen">
        <Link href="login" className="text-blue-500">
          Explore
        </Link>
      </div>
    </div>
  );
}
