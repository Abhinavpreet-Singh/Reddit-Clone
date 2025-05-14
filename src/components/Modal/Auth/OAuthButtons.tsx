import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);

  return (    <Flex direction="column" mb={4} width="100%">
      <Button
        variant="oauth"
        mb={3}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
        boxShadow="md"
        _hover={{ 
          bg: "gray.50",
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(44, 116, 179, 0.3)"
        }}
        transition="all 0.3s ease"
        height="42px"
        borderRadius="md"
        border="1px solid"
        borderColor="brand.100"
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error.message || "An error occurred during Google sign in"}
        </Text>
      )}
    </Flex>
  );
};

export default OAuthButtons;
