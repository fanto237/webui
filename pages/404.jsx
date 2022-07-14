import Link from "next/dist/client/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1 or -1)
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooups...</h1>
      <h2>The page you&apos;re looking for doesn&apos;t exist, thanks</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
