import { useEffect } from "react";
import { useRouter } from "next/router";

export default function All() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);

  return null;
}
