"use client";
import { useRouter } from "next/navigation";

export default function ModalExample() {
  const router = useRouter();

  return (
    <dialog open>
      <div>Hello</div>
      <button onClick={() => router.back()}>Close</button>
    </dialog>
  );
}
