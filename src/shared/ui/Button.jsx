import { Button as ChakraButton } from "@chakra-ui/react";

export const PrimaryButton = ({ children, to, icon, onClick, ...props }) => {
  const buttonProps = {
    variant: "solid",
    colorScheme: "gray",
    size: "lg",
    bg: "gray.700",
    color: "white",
    borderRadius: "8px",
    fontWeight: "600",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
    transition: "all 0.3s ease",
    _hover: {
      bg: "gray.600",
      transform: "translateY(-2px)",
      boxShadow: "lg",
    },
    _active: {
      bg: "gray.800",
      transform: "translateY(0)",
    },
    _focus: {
      boxShadow: "0 0 0 2px white",
    },
    ...props,
  };

  if (to) {
    const handleClick = () => {
      const element = document.getElementById(to.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <ChakraButton onClick={handleClick} rightIcon={icon} {...buttonProps}>
        {children}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton onClick={onClick} rightIcon={icon} {...buttonProps}>
      {children}
    </ChakraButton>
  );
};

export const SecondaryButton = ({ children, to, icon, onClick, ...props }) => {
  const buttonProps = {
    variant: "outline",
    colorScheme: "gray",
    size: "lg",
    borderRadius: "8px",
    borderWidth: "1px",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s ease",
    zIndex: "1",
    borderColor: "gray.600",
    color: "white",
    _before: {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "0%",
      height: "100%",
      bg: "gray.800",
      zIndex: "-1",
      transition: "width 0.3s ease",
    },
    _hover: {
      bg: "gray.700",
      borderColor: "white",
      transform: "translateY(-2px)",
      _before: {
        width: "100%",
      },
    },
    _active: {
      bg: "gray.800",
      transform: "translateY(0)",
    },
    _focus: {
      boxShadow: "0 0 0 2px white",
    },
    ...props,
  };

  if (to) {
    const handleClick = () => {
      const element = document.getElementById(to.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <ChakraButton onClick={handleClick} rightIcon={icon} {...buttonProps}>
        {children}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton onClick={onClick} rightIcon={icon} {...buttonProps}>
      {children}
    </ChakraButton>
  );
};
