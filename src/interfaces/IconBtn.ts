import { IconButtonProps } from "@chakra-ui/react";

export interface IIconBtn{
  icon: IconButtonProps["icon"],
  func: () => void
}