"use client";
import { monthdate } from "@/app/_components/preference/variable";

export default function FilenameSuffix() {
  const suffix = monthdate(new Date());
  return (
    <>
      {`${suffix}`}
    </>
  );
}