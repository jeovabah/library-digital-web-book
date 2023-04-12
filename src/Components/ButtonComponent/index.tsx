import { Button, Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  onClick: (e?: any) => void;
  color?: string;
  icon?: React.ReactElement;
}

export const ButtonComponent = ({
  title,
  onClick,
  color,
  icon,
  ...rest
}: Props) => {
  return (
    <Button
      borderRadius={"20px"}
      w={"100%"}
      fontWeight={400}
      onClick={onClick}
      backgroundColor={"#272A34"}
      fontSize={"1rem"}
      _hover={{
        backgroundColor: "#272A34",
      }}
      _focus={{
        backgroundColor: "#272A34",
      }}
      _active={{
        backgroundColor: "#272A34",
      }}
      {...rest}
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text color={color}>{title}</Text>
        {icon || ""}
      </Flex>
    </Button>
  );
};
