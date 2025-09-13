import { useQuery } from "@tanstack/react-query";
import { Adver, Firstslider, Tfirstslider } from "../Api/Bannerslider";

export const fistSlider = () =>
  useQuery<Tfirstslider[]>({
    queryKey: ["baners/header"],
    queryFn: () => Firstslider(),
  });

export const adver = () =>
  useQuery<Tfirstslider[]>({
    queryKey: ["baners/home/page"],
    queryFn: () => Adver(),
  });
